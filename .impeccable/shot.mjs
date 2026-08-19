// Full-page screenshots at true device metrics, via CDP.
// Headless Chrome clamps --window-size to a 500px floor, which silently crops
// narrow captures; Emulation.setDeviceMetricsOverride does not.
// Usage: node .impeccable/shot.mjs <url> <out.png> <width> [dpr] [mobile]
import { spawn } from 'node:child_process';
import { writeFileSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const [url, out, widthArg, dprArg = '1', mobileArg = 'false'] = process.argv.slice(2);
const width = Number(widthArg);
const dpr = Number(dprArg);
const mobile = mobileArg === 'true';

const CHROME = 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe';
const port = 9222 + Math.floor(Math.random() * 900);
const profile = mkdtempSync(join(tmpdir(), 'shot-'));

const chrome = spawn(CHROME, [
  '--headless=new', '--disable-gpu', '--hide-scrollbars',
  '--force-prefers-reduced-motion',
  '--no-first-run', '--no-default-browser-check',
  `--user-data-dir=${profile}`,
  `--remote-debugging-port=${port}`,
  'about:blank',
], { stdio: 'ignore' });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function endpoint() {
  for (let i = 0; i < 60; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${port}/json/list`);
      const tabs = await res.json();
      const page = tabs.find((t) => t.type === 'page');
      if (page?.webSocketDebuggerUrl) return page.webSocketDebuggerUrl;
    } catch { /* not up yet */ }
    await sleep(250);
  }
  throw new Error('devtools endpoint never came up');
}

const ws = new WebSocket(await endpoint());
await new Promise((r) => { ws.onopen = r; });

let id = 0;
const pending = new Map();
ws.onmessage = (ev) => {
  const msg = JSON.parse(ev.data);
  if (msg.id && pending.has(msg.id)) {
    const { resolve, reject } = pending.get(msg.id);
    pending.delete(msg.id);
    msg.error ? reject(new Error(JSON.stringify(msg.error))) : resolve(msg.result);
  }
};
const send = (method, params = {}) => new Promise((resolve, reject) => {
  const mid = ++id;
  pending.set(mid, { resolve, reject });
  ws.send(JSON.stringify({ id: mid, method, params }));
});

await send('Page.enable');
await send('Emulation.setDeviceMetricsOverride', {
  width, height: 900, deviceScaleFactor: dpr, mobile,
});
await send('Page.navigate', { url });
await sleep(2500);

const { result } = await send('Runtime.evaluate', {
  expression: 'JSON.stringify({h:document.documentElement.scrollHeight,w:document.documentElement.scrollWidth,iw:innerWidth})',
  returnByValue: true,
});
const metrics = JSON.parse(result.value);

await send('Emulation.setDeviceMetricsOverride', {
  width, height: metrics.h, deviceScaleFactor: dpr, mobile,
});
await sleep(600);

const shot = await send('Page.captureScreenshot', {
  format: 'png', captureBeyondViewport: true,
});
writeFileSync(out, Buffer.from(shot.data, 'base64'));

console.log(`${out}  layout=${metrics.iw}px  doc=${metrics.w}x${metrics.h}  overflowX=${metrics.w > metrics.iw ? 'YES ' + (metrics.w - metrics.iw) + 'px' : 'none'}`);

ws.close();
chrome.kill();
process.exit(0);
