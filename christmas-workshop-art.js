/** Shared Christmas 2026 workshop artwork map.
 * Source of truth for the hub-card sprite used by christmas-workshop-2026.js
 * (.pdf-art) and christmas-workshop-course.js (hero + "Other Christmas workshops").
 * The custom-element files inline these values because Wix loads each as a single script.
 */
export const WORKSHOP_ART_SPRITE =
  "https://cdn.jsdelivr.net/gh/jackchenJesus/icacademy-ce-cdn@7862c4aba25ed4aaf11f1fe10f1b717a5ba3ab76/christmas-pdf-artwork.webp";
export const WORKSHOP_ART_TILE_WIDTH = 300;
export const WORKSHOP_ART_TILE_HEIGHT = 260;
export const WORKSHOP_ART_SLUGS = [
  "dreamy-candy-house",
  "magic-crystal-kaleidoscope",
  "festive-metal-embossing",
  "stained-glass-light-colour",
  "christmas-eve-blessings-acrylic",
  "christmas-adventure-board-game",
  "christmas-fairytale-illustration-towel",
  "winter-snowman-wreath",
];
export function workshopArtPosition(slug) {
  const index = WORKSHOP_ART_SLUGS.indexOf(slug);
  const i = index >= 0 ? index : 0;
  return `${(i % 4) * 100 / 3}% ${i < 4 ? 0 : 100}%`;
}
