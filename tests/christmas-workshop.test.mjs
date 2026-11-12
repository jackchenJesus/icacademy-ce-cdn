import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";
import { Window } from "happy-dom";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const hubSrc = readFileSync(join(root, "short-term-courses-hub.js"), "utf8");
const parentSrc = readFileSync(join(root, "christmas-workshop-2026.js"), "utf8");
const courseSrc = readFileSync(join(root, "christmas-workshop-course.js"), "utf8");

const SLUGS = [
  "dreamy-candy-house",
  "magic-crystal-kaleidoscope",
  "festive-metal-embossing",
  "stained-glass-light-colour",
  "christmas-eve-blessings-acrylic",
  "christmas-adventure-board-game",
  "christmas-fairytale-illustration-towel",
];

const IMAGE_IDS = [
  "d5ba93_78630a5e577e4bf58d7d00582b6965ea~mv2.webp",
  "d5ba93_7ebc15a01e094bc1aa042aa3f0b27f46~mv2.png",
  "d5ba93_f5794d85282d4618987d0184eef3e839~mv2.webp",
  "d5ba93_bf70341f41b04467b73c9ed53104b441~mv2.webp",
  "d5ba93_5a60fddf1e514d9b9a0b6553430c4bb1~mv2.webp",
  "d5ba93_95b1363e941e489e91475108342bbde2~mv2.webp",
  "d5ba93_1b5a2283038842298e2318f9f9d5852d~mv2.webp",
];

const VERBATIM_ZH = [
  "以小屋為主題，打造獨一無二的夢幻糖果屋。",
  "並親體驗萬花筒的裝嵌技巧。",
  "利用金屬錫紙的延展性與亮面質感",
  "當冬日陽光或燭光穿透玻璃時",
  "在畫布上記錄聖誕的真諦與祝福。",
  "當走到「耶穌誕生」格時更能獲得「恩典禮物」。",
  "使用數位繪圖工具創作 4 至 6 個聖誕插畫。",
];

const FOOTER_ZH =
  "🌟 小班教學・專業指導・材料全包 — 多款聖誕主題工作坊，讓孩子在輕鬆愉快的氣氛中探索不同藝術媒介，享受由構思到完成作品的滿足感！";

test("short-term-courses-hub: CHRISTMAS_PAGE_URL is non-empty", () => {
  assert.match(hubSrc, /CHRISTMAS_PAGE_URL\s*=\s*\{[^}]+\}/);
  assert.doesNotMatch(hubSrc, /CHRISTMAS_PAGE_URL\s*=\s*\{\s*en:\s*""/);
  assert.ok(hubSrc.includes("christmas-workshop-2026"));
  assert.ok(hubSrc.includes("/zh/short-term-course/christmas-workshop-2026"));
});

test("christmas-workshop-course: no tel or office phone numbers", () => {
  assert.doesNotMatch(courseSrc, /tel:/i);
  assert.doesNotMatch(courseSrc, /2711\s*3006/);
  assert.doesNotMatch(courseSrc, /6580\s*8022(?!\?text)/);
});

test("christmas-workshop-course: verbatim ZH owner copy", () => {
  for (const snippet of VERBATIM_ZH) {
    assert.ok(courseSrc.includes(snippet), `missing ZH snippet: ${snippet}`);
  }
  assert.ok(courseSrc.includes(FOOTER_ZH));
  assert.ok(courseSrc.includes("並親體驗"));
  assert.ok(courseSrc.includes("TODO(owner)"));
});

for (const slug of SLUGS) {
  for (const [lang, pathPrefix] of [
    ["en", ""],
    ["zh", "/zh"],
  ]) {
    test(`christmas-workshop-course resolves ${slug} (${lang})`, async () => {
      const url = `https://www.icacademy.com.hk${pathPrefix}/short-term-course/christmas-workshop-2026/${slug}`;
      const win = new Window({ url, settings: { disableIframePageLoading: true } });
      win.eval(courseSrc);
      const el = win.document.createElement("christmas-workshop-course");
      win.document.body.appendChild(el);
      const html = el.shadowRoot.innerHTML;
      assert.ok(!html.includes("Course not found"), `slug ${slug} should resolve`);
      assert.ok(html.includes("返回 2026 聖誕藝術工作坊") || html.includes("Back to Christmas Art Workshops 2026"));
      assert.ok(html.includes(lang === "zh" ? "創作及製作內容" : "What you will create"));
      assert.ok(html.includes("wa.me/85265808022"));
      await win.happyDOM.abort();
      win.close();
    });
  }
}

test("christmas-workshop-2026: detail links for 7 courses only", () => {
  for (const slug of SLUGS) {
    assert.ok(parentSrc.includes(`slug: '${slug}'`), `parent missing slug ${slug}`);
  }
  assert.ok(parentSrc.includes("/short-term-course/christmas-workshop-2026/${course.slug}"));
  assert.ok(parentSrc.includes("查看詳情") || parentSrc.includes("View details"));
  const snowmanBlock = parentSrc.split("Winter Snowman Wreath")[1]?.split("customElements.define")[0] || "";
  assert.doesNotMatch(snowmanBlock, /slug:\s*'/);
});

test("christmas-workshop: all course images return HTTP 200", async () => {
  for (const id of IMAGE_IDS) {
    const res = await fetch(`https://static.wixstatic.com/media/${id}`, { method: "HEAD" });
    assert.equal(res.status, 200, `image ${id}`);
  }
});
