import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = readFileSync(join(root, "creative-art-and-clay-hub.js"), "utf8");

test("clay course hero uses light-DOM slot for semantic h1", () => {
  assert.match(src, /<slot name="hero-title"><\/slot>/);
  assert.match(src, /_syncHeroTitleLightDom\(/);
  assert.doesNotMatch(src, /<h1 id="hero-title">\$\{/);
});

test("clay course hero title copy unchanged", () => {
  assert.match(src, /何文田兒童輕黏土班 3D立體創作班｜ 專為 3-16 歲設計/);
});

test("runtime: one document-level h1 when custom element mounts", async () => {
  const { Window } = await import("happy-dom");
  const win = new Window({ url: "https://www.icacademy.com.hk/zh/course/kids-art/creative-art-and-clay-class" });
  const { document, customElements } = win;
  win.eval(src);
  const el = document.createElement("creative-art-and-clay-hub");
  document.body.appendChild(el);
  await win.happyDOM.waitUntilComplete();
  assert.ok(customElements.get("creative-art-and-clay-hub"));
  const h1s = document.querySelectorAll("h1");
  assert.equal(h1s.length, 1);
  assert.equal(h1s[0].id, "hero-title");
  assert.match(h1s[0].textContent, /何文田兒童輕黏土班/);
  assert.equal(el.shadowRoot.querySelectorAll("h1").length, 0);
});
