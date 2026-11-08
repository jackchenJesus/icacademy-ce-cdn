// Regression test: PR #10 split render() into _paintHero() + deferred _paintRest().
// Several hubs referenced URL vars declared only in _paintHero(), so _paintRest()
// threw a ReferenceError (silently swallowed) and nothing below the hero rendered.
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";
import { Window } from "happy-dom";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const files = readdirSync(root).filter((f) => f.endsWith(".js") && readFileSync(join(root, f), "utf8").includes("_paintRest()"));

for (const file of files) {
  for (const path of ["/course/x", "/zh/course/x"]) {
    test(`${file} ${path}: _paintRest() renders below-hero sections without throwing`, async () => {
      const src = readFileSync(join(root, file), "utf8");
      const tag = src.match(/customElements\.define\(\s*["']([^"']+)/)[1];
      const win = new Window({ url: `https://www.icacademy.com.hk${path}`, settings: { disableIframePageLoading: true } });
      win.eval(src);
      const el = win.document.createElement(tag);
      try { win.document.body.appendChild(el); } catch (e) { /* canvas APIs missing in happy-dom */ }
      const before = el.shadowRoot.querySelectorAll("section").length;
      el._restPainted = false;
      assert.doesNotThrow(() => el._paintRest());
      assert.ok(el.shadowRoot.querySelectorAll("section").length > before, "expected sections after _paintRest()");
      await win.happyDOM.abort();
      win.close();
    });
  }
}
