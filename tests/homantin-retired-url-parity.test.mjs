/**
 * Regression: production CDN custom elements must not link Kids Art to retired Homantin URL.
 */
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const RETIRED = "kids-art-classes-homantin";
const EN_OWNER = "/course/kids-art";

const LIVE_HUBS = [
  "gallery-hub.js",
  "kids-art-hub.js",
  "teen-art-hub.js",
  "sketching-class-hub.js",
  "visual-art-class-hub.js",
  "creative-art-and-clay-hub.js",
  "drawing-painting-hub.js",
  "comic-drawing-hub.js",
];

const ORPHANED = "kids-art-classes-hub.js";

function read(name) {
  return fs.readFileSync(path.join(root, name), "utf8");
}

for (const name of LIVE_HUBS) {
  const source = read(name);
  assert.equal(
    source.includes(RETIRED),
    false,
    `${name} must not reference retired Homantin listing`
  );
  assert.ok(source.includes(EN_OWNER), `${name} must reference Kids Art owner ${EN_OWNER}`);
}

const orphaned = read(ORPHANED);
assert.ok(
  orphaned.includes(RETIRED),
  `${ORPHANED} intentionally retains retired route (orphaned nylf1)`
);

console.log("homantin-retired-url-parity: OK");
