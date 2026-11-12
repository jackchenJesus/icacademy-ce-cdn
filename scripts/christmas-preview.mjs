/**
 * Local preview harness for Christmas hub, parent page, and course detail pages.
 * Outputs screenshots under /opt/cursor/artifacts/
 */
import { mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = "/opt/cursor/artifacts";
mkdirSync(outDir, { recursive: true });

const pages = [
  { name: "hub-en", tag: "short-term-courses-hub", path: "/short-term-course", file: "short-term-courses-hub.js" },
  { name: "parent-en", tag: "christmas-workshop-2026", path: "/short-term-course/christmas-workshop-2026", file: "christmas-workshop-2026.js" },
  { name: "parent-zh", tag: "christmas-workshop-2026", path: "/zh/short-term-course/christmas-workshop-2026", file: "christmas-workshop-2026.js" },
  { name: "candy-en", tag: "christmas-workshop-course", path: "/short-term-course/christmas-workshop-2026/dreamy-candy-house", file: "christmas-workshop-course.js" },
  { name: "candy-zh", tag: "christmas-workshop-course", path: "/zh/short-term-course/christmas-workshop-2026/dreamy-candy-house", file: "christmas-workshop-course.js" },
  { name: "kaleidoscope-en", tag: "christmas-workshop-course", path: "/short-term-course/christmas-workshop-2026/magic-crystal-kaleidoscope", file: "christmas-workshop-course.js" },
  { name: "kaleidoscope-zh", tag: "christmas-workshop-course", path: "/zh/short-term-course/christmas-workshop-2026/magic-crystal-kaleidoscope", file: "christmas-workshop-course.js" },
  { name: "towel-en", tag: "christmas-workshop-course", path: "/short-term-course/christmas-workshop-2026/christmas-fairytale-illustration-towel", file: "christmas-workshop-course.js" },
  { name: "towel-zh", tag: "christmas-workshop-course", path: "/zh/short-term-course/christmas-workshop-2026/christmas-fairytale-illustration-towel", file: "christmas-workshop-course.js" },
];

const widths = [1280, 390];
const results = [];

function shellPage(basePath, tag, scriptBody) {
  const safe = scriptBody.replace(/<\/script/gi, "<\\/script");
  return `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>html,body{margin:0;padding:0;overflow-x:hidden;background:#faf7ef}</style></head><body><${tag}></${tag}><script>${safe}<\/script></body></html>`;
}

const browser = await chromium.launch({ headless: true });
for (const page of pages) {
  const src = readFileSync(join(root, page.file), "utf8");
  const html = shellPage(page.path, page.tag, src);
  for (const width of widths) {
    const ctx = await browser.newContext({ viewport: { width, height: 900 } });
    const tab = await ctx.newPage();
    await tab.goto(`https://www.icacademy.com.hk${page.path}`, { waitUntil: "domcontentloaded" }).catch(() => {});
    await tab.setContent(html, { waitUntil: "load" });
    if (page.tag === "short-term-courses-hub") {
      const el = await tab.locator("short-term-courses-hub").elementHandle();
      if (el) await tab.evaluate((host) => host._paintRest && host._paintRest(), el);
    }
    await tab.waitForTimeout(400);
    const metrics = await tab.evaluate(() => {
      const host = document.querySelector("short-term-courses-hub,christmas-workshop-2026,christmas-workshop-course");
      const root = host && host.shadowRoot;
      const img = root && root.querySelector("img");
      const overflow = document.documentElement.scrollWidth > window.innerWidth + 2;
      return {
        imgNatural: img && img.complete ? img.naturalWidth : 0,
        overflow,
        scrollWidth: document.documentElement.scrollWidth,
        innerWidth: window.innerWidth,
      };
    });
    const shot = join(outDir, `christmas-preview-${page.name}-${width}.png`);
    await tab.screenshot({ path: shot, fullPage: true });
    results.push({ page: page.name, width, shot, ...metrics });
    await ctx.close();
  }
}
await browser.close();

let failed = false;
for (const r of results) {
  console.log(JSON.stringify(r));
  if (r.overflow) {
    console.error(`overflow at ${r.page} ${r.width}px`);
    failed = true;
  }
  if (r.imgNatural <= 0 && !r.page.startsWith("hub") && !r.page.startsWith("parent")) {
    console.error(`image naturalWidth 0 at ${r.page} ${r.width}px`);
    failed = true;
  }
}
if (failed) process.exit(1);
console.log("christmas-preview: OK");
