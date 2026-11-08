#!/usr/bin/env node
import fs from "fs";
import path from "path";

const ROOT = path.resolve(import.meta.dirname, "..");

const SCHEDULER = `
function icScheduleHubRest(host, paintRest, imgSelector) {
  const root = host && host.shadowRoot;
  if (!root) return;
  if (host._icRestTimer != null) {
    try {
      if (typeof cancelIdleCallback === "function") cancelIdleCallback(host._icRestTimer);
    } catch (e) {}
    clearTimeout(host._icRestTimer);
    host._icRestTimer = null;
  }
  const start = () => {
    const paint = () => {
      try { paintRest(); } catch (e) { try { console.error("[ic-hub] deferred paint failed", e); } catch (_) {} }
    };
    if (typeof requestIdleCallback === "function") {
      host._icRestTimer = requestIdleCallback(paint, { timeout: 3200 });
    } else {
      host._icRestTimer = setTimeout(paint, 1200);
    }
  };
  const img = imgSelector ? root.querySelector(imgSelector) : null;
  if (img && !img.complete) {
    img.addEventListener("load", start, { once: true });
    host._icRestTimer = setTimeout(start, 2200);
  } else start();
}

function icScheduleSoon(fn, timeoutMs) {
  if (typeof requestIdleCallback === "function") requestIdleCallback(fn, { timeout: timeoutMs || 2000 });
  else setTimeout(fn, 0);
}
`;

const FILES = [
  "comic-drawing-hub.js",
  "creative-art-hub.js",
  "creative-art-and-clay-hub.js",
  "visual-art-class-hub.js",
  "sketching-class-hub.js",
  "drawing-painting-hub.js",
  "teen-art-hub.js",
  "kids-art-classes-hub.js",
  "home-hub.js",
];

function patch(file) {
  const fp = path.join(ROOT, file);
  let c = fs.readFileSync(fp, "utf8");
  if (c.includes("_paintHero()")) return;
  if (!c.includes("function icScheduleHubRest")) {
    let ins = c.indexOf("})();", c.indexOf("preloadHeroLcp"));
    if (ins < 0) ins = c.indexOf("})();", c.indexOf("data-home-hub-hero-preload"));
    if (ins < 0) ins = c.indexOf("const WA_DEFAULT");
    ins = ins >= 0 ? c.indexOf("})();", ins) + 5 : c.indexOf("const WA_DEFAULT");
    if (ins < 5) ins = c.indexOf("const WA_DEFAULT");
    c = c.slice(0, ins) + SCHEDULER + c.slice(ins);
  }
  if (!c.includes("_icRestTimer")) {
    c = c.replace(
      /this\.attachShadow\(\{ mode: "open" \}\);/,
      `this.attachShadow({ mode: "open" });\n    this._restPainted = false;\n    this._icRestTimer = null;`
    );
  }
  if (!c.includes("cancelIdleCallback(this._icRestTimer)")) {
    c = c.replace(
      /disconnectedCallback\(\) \{\n/,
      `disconnectedCallback() {\n    if (this._icRestTimer != null) {
      try { if (typeof cancelIdleCallback === "function") cancelIdleCallback(this._icRestTimer); } catch (e) {}
      clearTimeout(this._icRestTimer);
      this._icRestTimer = null;
    }\n`
    );
  }

  const renderIdx = c.lastIndexOf("  render() {");
  const innerIdx = c.indexOf("this.shadowRoot.innerHTML = `", renderIdx);
  const splitAt = c.indexOf("        </section>\n\n        <section", innerIdx);
  const innerEnd = c.indexOf("\n    `;\n", splitAt);
  const renderEnd = c.indexOf("\n  }\n", innerEnd);
  const preamble = c.slice(renderIdx, innerIdx);
  const template = c.slice(innerIdx + "this.shadowRoot.innerHTML = `".length, innerEnd);
  const footer = c.slice(innerEnd + "\n    `;\n".length, renderEnd).trimEnd();

  const idx = template.indexOf("        </section>\n\n        ");
  const heroPart = template.slice(0, idx + "        </section>".length) + "\n      </div>";
  let restPart = template.slice(idx + "        </section>\n\n        ".length);
  restPart = restPart.replace(/\n      <\/div>\s*$/, "");

  const newMethods = `${preamble.replace("  render() {", "  _paintHero() {").replace(
    /^\s*this\._applyFullBleedCss\(\);\n\n/m,
    "    icScheduleSoon(() => this._applyFullBleedCss(), 1500);\n    this._t = t;\n\n"
  )}
    this.shadowRoot.innerHTML = \`
${heroPart}
    \`;
    this._waPrefillCached = waPrefill;
    icScheduleSoon(() => this._applyFullBleedCss(), 1500);
  }

  _paintRest() {
    if (this._restPainted) return;
    const hub = this.shadowRoot && this.shadowRoot.querySelector(".hub, main.hub");
    if (!hub) return;
    this._restPainted = true;
    const t = this._t || ((en, zh) => (this.isEn ? en : zh));
    const waPrefill = this._waPrefillCached || this._waPrefill("");
    hub.insertAdjacentHTML("beforeend", \`
        ${restPart.trimStart()}
    \`);
${footer}
  }

  render() {
    this._restPainted = false;
    this._paintHero();
    if (this.isConnected) icScheduleHubRest(this, () => this._paintRest(), ".hero-bg img, .hero-photo");
  }`;

  c = c.slice(0, renderIdx) + newMethods + c.slice(renderEnd);
  fs.writeFileSync(fp, c);
  console.log("patched", file);
}

for (const f of FILES) patch(f);
