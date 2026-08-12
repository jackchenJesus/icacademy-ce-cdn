/**
 * ICAcademy Student Artwork Gallery Hub – Custom Element
 * Tag name: gallery-hub
 * Version: 2026-08-12-v2 (mobile polish: 375 / 768 / 1024)
 * Design system: matches courses-hub / kids-art-hub / drawing-painting-hub (coral / teal)
 * Route: /zh/gallery
 */
const WA_DEFAULT = "https://wa.me/85265808022";
const COURSE_HUB_URL = "/zh/course-hub";
const KIDS_ART_URL = "/zh/courses/kids-art-classes";
const DRAWING_URL = "/zh/courses/art-drawing";
const COMIC_URL = "/zh/courses/comic-drawing-class";
const CLAY_URL = "/zh/courses/creative-art-and-clay-class";

/** Fit within box — preserves artwork aspect ratio (no aggressive crop). */
function mediaFit(id, w, h) {
  return `https://static.wixstatic.com/media/${id}/v1/fit/w_${w},h_${h},q_85,enc_auto/${id}`;
}

/** Soft fill for hero collage tiles only. */
function mediaFill(id, w, h) {
  return `https://static.wixstatic.com/media/${id}/v1/fill/w_${w},h_${h},al_c,q_85,enc_auto/${id}`;
}

/**
 * Artwork catalogue — image ids reused from existing /zh/gallery carousel,
 * course landing pages, and hub custom elements (audited 2026-08).
 * Only include fields we can verify; do not invent titles / ages / mediums.
 */
const ARTWORK = [
  {
    id: "g01",
    imageId: "b98cc9_169d3a5d148b4e7cb6c5dcdd66541734~mv2.jpeg",
    category: "kids",
    courseSlug: "kids-art-classes",
    altText: "ICAcademy 兒童創意美術學員作品",
    featured: true,
    section: 1,
  },
  {
    id: "g02",
    imageId: "b98cc9_0c14e8485e804aafb82d0470a5bbfbc9~mv2.jpeg",
    category: "drawing-painting",
    courseSlug: "art-drawing",
    altText: "ICAcademy 繪畫課程學員作品",
    featured: true,
    section: 1,
  },
  {
    id: "g03",
    imageId: "4ea940_ffa9827e993b46ff8c39685739d93bf6~mv2.jpeg",
    category: "drawing-painting",
    courseSlug: "art-drawing",
    altText: "ICAcademy Drawing & Painting 學員作品",
    featured: true,
    section: 1,
  },
  {
    id: "g04",
    imageId: "b98cc9_ca9ccd28333f4917b208b65fcf0fa49b~mv2.jpeg",
    category: "kids",
    courseSlug: "kids-art-classes",
    altText: "ICAcademy 兒童美術學員作品",
    featured: false,
    section: 1,
  },
  {
    id: "g05",
    imageId: "b98cc9_49cb0c61e7664eaca996580443195ec9~mv2.jpeg",
    category: "kids",
    courseSlug: "creative-art-classes",
    altText: "ICAcademy 幼兒創意繪畫學員作品",
    featured: true,
    section: 1,
  },
  {
    id: "g06",
    imageId: "4ea940_5867e3daf35f4f969495afa34a05f1a3~mv2.jpg",
    category: "drawing-painting",
    courseSlug: "art-drawing",
    altText: "ICAcademy 繪畫學員作品",
    featured: false,
    section: 1,
  },
  {
    id: "g07",
    imageId: "b98cc9_1e4fe60c82f343d48b09af6df497318c~mv2.jpeg",
    category: "kids",
    courseSlug: "kids-art-classes",
    altText: "ICAcademy 兒童創意美術學員作品",
    featured: false,
    section: 1,
  },
  {
    id: "g08",
    imageId: "b98cc9_9605c850cf4b47daafd611bb1215e1fd~mv2.jpeg",
    category: "sketch",
    courseSlug: "sketching-class",
    altText: "ICAcademy 素描課程學生作品",
    featured: true,
    section: 1,
  },
  {
    id: "g09",
    imageId: "b98cc9_fecc97ffe797441790ba2a579dcb36bb~mv2.jpeg",
    category: "drawing-painting",
    courseSlug: "art-drawing",
    altText: "ICAcademy 繪畫課程學員作品",
    featured: false,
    section: 1,
  },
  {
    id: "g10",
    imageId: "b98cc9_f16629f0d6414271822e19d767f44457~mv2.jpg",
    category: "kids",
    courseSlug: "creative-art-classes",
    altText: "ICAcademy 兒童創意美術學員作品",
    featured: false,
    section: 1,
  },
  {
    id: "g11",
    imageId: "b98cc9_9c6e5138d1fa40a7815d12218f642440~mv2.jpg",
    category: "kids",
    courseSlug: "creative-art-classes",
    altText: "ICAcademy 兒童創意美術學員作品",
    featured: false,
    section: 1,
  },
  {
    id: "g12",
    imageId: "b98cc9_1e80c89215f84798a65eaedc03352cd5~mv2.jpg",
    category: "kids",
    courseSlug: "creative-art-classes",
    altText: "ICAcademy 小學創意繪畫學員作品",
    featured: false,
    section: 1,
  },
  {
    id: "g13",
    imageId: "b98cc9_ad34c2bb0fca4f8186d9e43bb8e1909c~mv2.jpg",
    category: "kids",
    courseSlug: "visual-art-skills-course",
    altText: "ICAcademy 幼兒視藝技巧學員作品",
    featured: false,
    section: 1,
  },
  {
    id: "g14",
    imageId: "b98cc9_5af94fe0176b45298c01692764083e09~mv2.jpg",
    category: "kids",
    courseSlug: "visual-art-skills-course",
    altText: "ICAcademy 兒童美術學員作品",
    featured: false,
    section: 1,
  },
  {
    id: "g15",
    imageId: "b98cc9_c966f659ad4c45939096573490e41e6b~mv2.jpg",
    category: "kids",
    courseSlug: "visual-art-skills-course",
    altText: "ICAcademy 視藝技巧課程學生作品",
    featured: false,
    section: 1,
  },
  {
    id: "g16",
    imageId: "b98cc9_37e0184c611f48fb96bae9a1fa37dc05~mv2.jpg",
    category: "comic",
    courseSlug: "comic-drawing-class",
    altText: "ICAcademy 漫畫及數碼藝術學員作品",
    featured: true,
    section: 2,
  },
  {
    id: "g17",
    imageId: "b98cc9_a62d943a779d4ddb8e85227dc0872726~mv2.jpg",
    category: "comic",
    courseSlug: "comic-drawing-class",
    altText: "ICAcademy 學生漫畫角色設計作品",
    featured: false,
    section: 2,
  },
  {
    id: "g18",
    imageId: "b98cc9_5d9714fc876f42ba8b02b5b5d4b08923~mv2.jpg",
    category: "comic",
    courseSlug: "comic-drawing-class",
    altText: "ICAcademy 漫畫課程學員作品",
    featured: false,
    section: 2,
  },
  {
    id: "g19",
    imageId: "b98cc9_bcc7d1f85fd7431c933ad24f568c4a9b~mv2.jpg",
    category: "comic",
    courseSlug: "comic-drawing-class",
    altText: "ICAcademy 漫畫插畫學員作品",
    featured: false,
    section: 2,
  },
  {
    id: "g20",
    imageId: "b98cc9_556272dbd0ac4629b6b877a6d6a90d91~mv2.jpg",
    category: "comic",
    courseSlug: "comic-drawing-class",
    altText: "ICAcademy 卡通漫畫班學員作品",
    featured: false,
    section: 2,
  },
  {
    id: "g21",
    imageId: "b98cc9_33c4c822ff2e4e5e86a4dfd9ce7b7be7~mv2.jpeg",
    category: "clay",
    courseSlug: "creative-art-and-clay-class",
    altText: "ICAcademy 黏土及創意手作學員作品",
    featured: true,
    section: 2,
  },
  {
    id: "g22",
    imageId: "b98cc9_f417962750fd4399b1ee38c775da9a4e~mv2.jpeg",
    category: "clay",
    courseSlug: "creative-art-and-clay-class",
    altText: "ICAcademy 兒童黏土立體創作作品",
    featured: false,
    section: 2,
  },
  {
    id: "g23",
    imageId: "b98cc9_f73677a0ad284e10b85772ce1fbecae5~mv2.jpg",
    category: "clay",
    courseSlug: "creative-art-and-clay-class",
    altText: "ICAcademy 黏土課程學員作品",
    featured: false,
    section: 2,
  },
  {
    id: "g24",
    imageId: "b98cc9_929f4422f4b6400582f31e87f7920237~mv2.jpeg",
    category: "clay",
    courseSlug: "creative-art-and-clay-class",
    altText: "ICAcademy 輕黏土學員作品",
    featured: false,
    section: 2,
  },
  {
    id: "g25",
    imageId: "b98cc9_9c6489b3ccfa47f0adc205c472aa87e7~mv2.jpg",
    category: "clay",
    courseSlug: "creative-art-and-clay-class",
    altText: "ICAcademy 黏土及手作學員作品",
    featured: false,
    section: 2,
  },
  {
    id: "g26",
    imageId: "b98cc9_7f99cc18f81e42f9a5551280f6425b55~mv2.jpg",
    category: "sketch",
    courseSlug: "sketching-class",
    altText: "ICAcademy 素描課程學生作品",
    featured: false,
    section: 2,
  },
  {
    id: "g27",
    imageId: "b98cc9_e67c1877a803495fa45ccea725f0f7ce~mv2.jpg",
    category: "sketch",
    courseSlug: "sketching-class",
    altText: "何文田兒童素描課程學生作品",
    featured: false,
    section: 2,
  },
  {
    id: "g28",
    imageId: "b98cc9_cb846bd1bf8247879e2992d72b9913f4~mv2.jpg",
    category: "sketch",
    courseSlug: "sketching-class",
    altText: "ICAcademy 素描學員作品",
    featured: false,
    section: 2,
  },
  {
    id: "g29",
    imageId: "b98cc9_8b62b24164484280941000b87ffdecc8~mv2.jpg",
    category: "sketch",
    courseSlug: "sketching-class",
    altText: "ICAcademy 素描課程學員作品",
    featured: false,
    section: 2,
  },
  {
    id: "g30",
    imageId: "b98cc9_bc2649cc31bc4974bb739afa5f006c73~mv2.jpg",
    category: "drawing-painting",
    courseSlug: "art-drawing",
    altText: "ICAcademy 繪畫課程學員作品",
    featured: false,
    section: 2,
  },
  {
    id: "g31",
    imageId: "b98cc9_4207ae71d0a44db99d86eeadc8e54f33~mv2.jpeg",
    category: "acrylic",
    courseSlug: "acrylic-painting-class",
    altText: "ICAcademy Acrylic Painting 學員作品",
    featured: true,
    section: 2,
  },
  {
    id: "g32",
    imageId: "52f9c8_ceb5f3d8e3894373b80e0ec12a9e03a1~mv2.jpg",
    category: "acrylic",
    courseSlug: "acrylic-painting-class",
    altText: "ICAcademy 塑膠彩課程學生作品",
    featured: false,
    section: 2,
  },
  {
    id: "g33",
    imageId: "52f9c8_7ac3b5f599f74cf58c9702404485e283~mv2.jpg",
    category: "acrylic",
    courseSlug: "acrylic-painting-class",
    altText: "ICAcademy Acrylic Painting 學員作品",
    featured: false,
    section: 2,
  },
  {
    id: "g34",
    imageId: "b98cc9_938e779278dc4be38ad8c06a48102fc1~mv2.jpg",
    category: "acrylic",
    courseSlug: "acrylic-painting-class",
    altText: "ICAcademy 塑膠彩學員作品",
    featured: false,
    section: 2,
  },
  {
    id: "g35",
    imageId: "b98cc9_ebe4308b54a24d24b9be7d03605ac494~mv2.jpg",
    category: "drawing-painting",
    courseSlug: "visual-art-class",
    altText: "ICAcademy 綜合美術學員作品",
    featured: false,
    section: 2,
  },
  {
    id: "g36",
    imageId: "b98cc9_2811c03afb09487fb93b5356133bd57b~mv2.jpg",
    category: "kids",
    courseSlug: "creative-art-classes",
    altText: "ICAcademy 青少年創意美術作品",
    featured: false,
    section: 2,
  },
];

const CATEGORIES = [
  { id: "all", label: "全部作品" },
  { id: "kids", label: "兒童美術" },
  { id: "drawing-painting", label: "Drawing & Painting" },
  { id: "comic", label: "漫畫及數碼藝術" },
  { id: "clay", label: "黏土及創意手作" },
  { id: "sketch", label: "素描" },
  { id: "acrylic", label: "Acrylic Painting" },
];

const CATEGORY_LABEL = Object.fromEntries(CATEGORIES.map((c) => [c.id, c.label]));

const COURSE_CARDS = [
  {
    id: "kids",
    title: "兒童創意美術",
    desc: "適合年幼學員發展創意與美術基礎，包括視藝技巧及兒童創意美術課程。",
    href: KIDS_ART_URL,
    cta: "查看兒童美術課程",
    imageId: "b98cc9_f16629f0d6414271822e19d767f44457~mv2.jpg",
    imageAlt: "ICAcademy 兒童創意美術學員作品",
  },
  {
    id: "drawing",
    title: "Drawing & Painting",
    desc: "素描、繪畫、塑膠彩與綜合美術技巧，按興趣與程度選擇合適方向。",
    href: DRAWING_URL,
    cta: "探索 Drawing & Painting",
    imageId: "b98cc9_7f99cc18f81e42f9a5551280f6425b55~mv2.jpg",
    imageAlt: "ICAcademy 繪畫及素描學員作品",
  },
  {
    id: "comic",
    title: "漫畫及數碼藝術",
    desc: "角色設計、漫畫人物、表情動作與畫面構圖，激發故事與創意表達。",
    href: COMIC_URL,
    cta: "查看漫畫及數碼藝術課程",
    imageId: "b98cc9_37e0184c611f48fb96bae9a1fa37dc05~mv2.jpg",
    imageAlt: "ICAcademy 漫畫學員作品",
  },
  {
    id: "clay",
    title: "黏土及創意手作",
    desc: "輕黏土與立體手作，訓練塑形、結構與色彩美感。",
    href: CLAY_URL,
    cta: "查看黏土課程",
    imageId: "b98cc9_33c4c822ff2e4e5e86a4dfd9ce7b7be7~mv2.jpeg",
    imageAlt: "ICAcademy 黏土學員作品",
  },
];

const TRUST_POINTS = [
  { title: "觀察", desc: "細心觀察形狀、色彩與空間" },
  { title: "創意", desc: "把想像轉化為個人創作" },
  { title: "技巧", desc: "循序學習藝術技法" },
  { title: "色彩", desc: "認識配色與畫面氛圍" },
  { title: "構圖", desc: "組織畫面與視覺焦點" },
  { title: "自信", desc: "完成作品並勇於表達" },
  { title: "表達", desc: "發展個人藝術語言" },
];

const STYLES = `
:host {
  display: block;
  width: 100%;
  max-width: 100%;
  min-height: 2400px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  --bg: #ffffff;
  --bg-soft: #f4f8f9;
  --surface: #ffffff;
  --ink: #162b48;
  --muted: #4a5568;
  --line: #e2e8f0;
  --navy: #162b48;
  --coral: #ff8e8e;
  --coral-deep: #f05a5a;
  --coral-soft: #fff0f0;
  --teal: #00a9b7;
  --teal-deep: #008f9b;
  --teal-soft: #e8f7f8;
  --radius: 18px;
  --shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  --font: "PingFang TC", "Microsoft JhengHei", "Noto Sans TC", "Segoe UI", sans-serif;
  --page-pad: 24px;
  color: var(--ink);
  font-family: var(--font);
  line-height: 1.7;
  font-size: 16px;
  background: var(--bg);
  overflow-x: clip;
}
*, *::before, *::after { box-sizing: border-box; }
a { color: inherit; }
img { max-width: 100%; display: block; height: auto; }
.hub {
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
  overflow-x: clip;
}
.wrap {
  width: min(1200px, calc(100% - (var(--page-pad) * 2)));
  max-width: 1200px;
  margin: 0 auto;
}
.section { padding: 56px 0; background: var(--bg); width: 100%; }
.section-soft { background: var(--bg-soft); }
.section-title {
  text-align: center;
  font-size: clamp(1.45rem, 3vw, 1.95rem);
  font-weight: 800;
  margin: 0 0 12px;
  letter-spacing: 0.01em;
}
.section-lead {
  text-align: center;
  color: var(--muted);
  max-width: 48ch;
  margin: 0 auto 32px;
  font-size: 1.02rem;
}
h1, h2, h3 { line-height: 1.28; margin: 0 0 12px; font-weight: 800; }
h3 { font-size: 1.12rem; }

.btn-row { display: flex; flex-wrap: wrap; gap: 14px; }
.btn {
  appearance: none;
  border: 0;
  border-radius: 999px;
  min-height: 48px;
  padding: 12px 26px;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: transform .15s ease, background .15s ease, opacity .15s ease;
}
.btn:hover { transform: translateY(-1px); }
.btn:focus-visible { outline: 3px solid rgba(0,169,183,.35); outline-offset: 3px; }
.btn-coral { background: var(--coral); color: #fff; }
.btn-coral:hover { background: var(--coral-deep); }
.btn-teal { background: var(--teal); color: #fff; }
.btn-teal:hover { background: var(--teal-deep); }
.btn-outline-teal {
  background: transparent;
  color: var(--teal);
  border: 2px solid var(--teal);
}
.btn-ghost {
  background: #fff;
  color: var(--ink);
  border: 1px solid var(--line);
}

/* —— Compact hero —— */
.hero {
  position: relative;
  width: 100%;
  padding: 40px 0 28px;
  background: linear-gradient(180deg, #f7fbfc 0%, #ffffff 100%);
  border-bottom: 1px solid var(--line);
}
.hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
  gap: 36px;
  align-items: center;
}
.hero-eyebrow {
  margin: 0 0 10px;
  color: var(--teal);
  font-weight: 800;
  font-size: 0.95rem;
  letter-spacing: 0.02em;
}
.hero-copy { min-width: 0; }
.hero h1 {
  margin: 0 0 8px;
  font-size: clamp(1.55rem, 3.4vw, 2.35rem);
  line-height: 1.25;
  word-break: keep-all;
  overflow-wrap: anywhere;
}
.hero-en {
  margin: 0 0 14px;
  font-size: clamp(1rem, 2vw, 1.25rem);
  font-weight: 800;
  color: var(--navy);
  overflow-wrap: anywhere;
}
.hero-lead {
  margin: 0 0 24px;
  color: var(--muted);
  max-width: 40em;
  font-size: 1.02rem;
}
.hero-collage {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  grid-template-rows: 1fr 1fr;
  gap: 10px;
  min-height: 280px;
  min-width: 0;
  width: 100%;
}
.hero-collage figure {
  margin: 0;
  border-radius: 16px;
  overflow: hidden;
  background: #eef2f6;
  box-shadow: var(--shadow);
}
.hero-collage figure:first-child {
  grid-row: 1 / span 2;
}
.hero-collage img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* —— Filters —— */
.filters-sticky {
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(255,255,255,.94);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--line);
  padding: 10px 0 0;
}
.filters-sticky .wrap {
  width: 100%;
  max-width: none;
  margin: 0;
  padding: 0;
}
.filters {
  display: flex;
  gap: 10px;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior-x: contain;
  scroll-snap-type: x proximity;
  scrollbar-width: none;
  padding: 2px var(--page-pad) 12px;
  mask-image: linear-gradient(90deg, transparent 0, #000 16px, #000 calc(100% - 16px), transparent 100%);
  -webkit-mask-image: linear-gradient(90deg, transparent 0, #000 16px, #000 calc(100% - 16px), transparent 100%);
}
.filters::-webkit-scrollbar { display: none; }
.filters button {
  appearance: none;
  flex: 0 0 auto;
  border: 1px solid var(--line);
  background: #fff;
  color: var(--ink);
  border-radius: 999px;
  min-height: 44px;
  padding: 10px 16px;
  font: inherit;
  font-weight: 700;
  font-size: 0.92rem;
  cursor: pointer;
  white-space: nowrap;
  scroll-snap-align: start;
  touch-action: manipulation;
  transition: background .15s ease, color .15s ease, border-color .15s ease;
}
.filters button[aria-pressed="true"] {
  background: var(--teal);
  border-color: var(--teal);
  color: #fff;
}
.filters button:focus-visible {
  outline: 3px solid rgba(0,169,183,.35);
  outline-offset: 2px;
}

/* —— Masonry gallery —— */
.masonry {
  column-count: 4;
  column-gap: 16px;
}
.art-item {
  break-inside: avoid;
  margin: 0 0 16px;
  display: block;
  width: 100%;
}
.art-item.is-hidden { display: none; }
.art-card {
  appearance: none;
  width: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  text-align: left;
  border-radius: 14px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 2px 10px rgba(22, 43, 72, 0.06);
  transition: transform .15s ease, box-shadow .15s ease;
}
.art-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow);
}
.art-card:focus-visible {
  outline: 3px solid rgba(0,169,183,.4);
  outline-offset: 3px;
}
.art-card img {
  width: 100%;
  height: auto;
  vertical-align: middle;
  background: #f1f5f9;
}
.art-meta {
  padding: 10px 12px 12px;
}
.art-cat {
  display: inline-block;
  font-size: 0.78rem;
  font-weight: 800;
  color: var(--teal);
  letter-spacing: 0.01em;
}
.gallery-empty {
  display: none;
  text-align: center;
  color: var(--muted);
  padding: 40px 16px;
}
.gallery-empty.is-visible { display: block; }
[data-gallery-block].is-empty-block { display: none; }

/* —— Course cards —— */
.course-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}
.course-card {
  display: grid;
  grid-template-columns: 140px minmax(0, 1fr);
  gap: 0;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  text-decoration: none;
  min-width: 0;
  transition: transform .15s ease, box-shadow .15s ease;
}
.course-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 28px rgba(0,0,0,.08);
}
.course-media {
  background: #eef2f6;
  min-height: 140px;
  min-width: 0;
}
.course-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.course-body {
  padding: 18px 18px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
}
.course-body h3 {
  margin: 0;
  overflow-wrap: anywhere;
}
.course-body p {
  margin: 0;
  color: var(--muted);
  font-size: 0.95rem;
  flex: 1;
  overflow-wrap: anywhere;
}
.course-cta {
  color: var(--teal);
  font-weight: 800;
  font-size: 0.95rem;
}

/* —— Trust —— */
.trust-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
}
.trust-item {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 18px 16px;
  text-align: center;
}
.trust-item strong {
  display: block;
  color: var(--teal);
  font-size: 1.05rem;
  margin-bottom: 6px;
}
.trust-item span {
  color: var(--muted);
  font-size: 0.92rem;
}

/* —— Trial —— */
.trial {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 40px 28px;
  text-align: center;
  box-shadow: var(--shadow);
}
.trial-badge {
  display: inline-block;
  background: var(--coral-soft);
  color: var(--coral-deep);
  font-weight: 800;
  font-size: 0.88rem;
  border-radius: 999px;
  padding: 6px 14px;
  margin-bottom: 14px;
}
.trial h2 { margin: 0 0 10px; }
.trial p { margin: 0 auto 16px; max-width: 42ch; color: var(--muted); }
.trial-price {
  margin: 0 auto 22px;
  font-size: 1.05rem;
  color: var(--ink);
}
.trial-price strong {
  display: inline-block;
  margin-left: 6px;
  color: var(--coral-deep);
  font-size: 1.45rem;
}
.trial .btn-row { justify-content: center; }

/* —— Lightbox —— */
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: none;
  align-items: center;
  justify-content: center;
  padding: max(12px, env(safe-area-inset-top)) max(12px, env(safe-area-inset-right)) max(12px, env(safe-area-inset-bottom)) max(12px, env(safe-area-inset-left));
  background: rgba(16, 28, 48, 0.82);
  overscroll-behavior: contain;
}
.lightbox.is-open { display: flex; }
.lightbox-dialog {
  position: relative;
  width: min(960px, 100%);
  max-height: min(92dvh, 100%);
  background: #fff;
  border-radius: 18px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  box-shadow: 0 24px 60px rgba(0,0,0,.35);
}
.lightbox-close {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2;
  width: 44px;
  height: 44px;
  border: 0;
  border-radius: 999px;
  background: rgba(255,255,255,.95);
  color: var(--ink);
  font-size: 1.4rem;
  line-height: 1;
  cursor: pointer;
  touch-action: manipulation;
  box-shadow: 0 2px 10px rgba(0,0,0,.12);
}
.lightbox-img-wrap {
  background: #0f172a;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
}
.lightbox-img-wrap img {
  max-width: 100%;
  max-height: min(72dvh, 820px);
  width: auto;
  height: auto;
  margin: 0 auto;
}
.lightbox-meta {
  padding: 16px 20px 20px;
}
.lightbox-meta p {
  margin: 4px 0 0;
  color: var(--muted);
  font-size: 0.95rem;
}

.sr-only {
  position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
  overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0;
}

/* —— Responsive breakpoints: 1024 / 768 / 375 —— */
@media (max-width: 1100px) {
  .masonry { column-count: 3; }
  .trust-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}

@media (max-width: 1024px) {
  :host { --page-pad: 20px; }
  .hero-grid { gap: 28px; }
  .masonry { column-count: 3; column-gap: 14px; }
  .course-grid { gap: 16px; }
}

@media (max-width: 900px) {
  .hero-grid { grid-template-columns: 1fr; gap: 22px; }
  .hero-collage {
    min-height: 200px;
    max-width: 560px;
    margin: 0 auto;
  }
  .course-grid { grid-template-columns: 1fr; }
  .masonry { column-count: 2; }
  .section-title { font-size: clamp(1.35rem, 4vw, 1.8rem); }
}

@media (max-width: 768px) {
  :host { --page-pad: 16px; font-size: 15.5px; }
  .section { padding: 44px 0; }
  .section-lead { margin-bottom: 24px; font-size: 0.98rem; }
  .btn-row { flex-direction: column; align-items: stretch; gap: 10px; }
  .btn {
    width: 100%;
    min-height: 48px;
    padding: 12px 20px;
  }
  .hero { padding: 24px 0 16px; }
  .hero-lead { margin-bottom: 18px; font-size: 0.98rem; }
  .hero-collage {
    grid-template-columns: 1.2fr 0.8fr;
    min-height: 180px;
    gap: 8px;
  }
  .filters { gap: 8px; padding-bottom: 10px; }
  .filters button {
    font-size: 0.88rem;
    padding: 9px 14px;
  }
  .masonry { column-count: 2; column-gap: 10px; }
  .art-item { margin-bottom: 10px; }
  .art-meta { padding: 8px 10px 10px; }
  .art-cat { font-size: 0.72rem; }
  .course-card { grid-template-columns: 120px minmax(0, 1fr); }
  .course-body { padding: 14px 14px 12px; gap: 6px; }
  .course-body p { font-size: 0.9rem; }
  .trust-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }
  .trust-item { padding: 14px 12px; }
  .trial {
    padding: 28px 16px;
    border-radius: 18px;
  }
  .trial h2 { font-size: 1.25rem; }
  .lightbox-dialog { border-radius: 14px; }
  .lightbox-img-wrap img { max-height: min(68dvh, 720px); }
}

@media (max-width: 480px) {
  :host { --page-pad: 14px; }
  .hero-collage {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    min-height: 0;
    aspect-ratio: 16 / 10;
  }
  .hero-collage figure { min-height: 0; }
  .hero-collage figure:first-child { grid-row: auto; }
  .hero-collage figure:last-child { display: none; }
  .course-card {
    grid-template-columns: 1fr;
  }
  .course-media {
    min-height: 160px;
    aspect-ratio: 16 / 10;
  }
  .trust-item span { font-size: 0.86rem; }
  .lightbox {
    padding: 0;
    align-items: stretch;
  }
  .lightbox-dialog {
    width: 100%;
    max-height: 100dvh;
    border-radius: 0;
    display: flex;
    flex-direction: column;
  }
  .lightbox-img-wrap {
    flex: 1;
    min-height: 0;
  }
  .lightbox-img-wrap img {
    max-height: calc(100dvh - 88px);
  }
  .lightbox-close {
    top: max(10px, env(safe-area-inset-top));
    right: max(10px, env(safe-area-inset-right));
  }
}

@media (max-width: 375px) {
  :host { --page-pad: 12px; }
  .masonry { column-count: 2; column-gap: 8px; }
  .art-item { margin-bottom: 8px; }
  .hero h1 { font-size: 1.45rem; }
  .hero-en { font-size: 0.95rem; }
  .filters button { font-size: 0.84rem; padding: 8px 12px; }
  .trust-grid { gap: 8px; }
}

@media (max-width: 340px) {
  .masonry { column-count: 1; }
}

@media (hover: none) {
  .btn:hover,
  .art-card:hover,
  .course-card:hover {
    transform: none;
  }
}
`;

class GalleryHub extends HTMLElement {
  static get observedAttributes() {
    return ["wa-url", "locale"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._filter = "all";
    this._activeId = null;
    this._onClick = this._onClick.bind(this);
    this._onKeydown = this._onKeydown.bind(this);
  }

  connectedCallback() {
    this.render();
    this.shadowRoot.addEventListener("click", this._onClick);
    document.addEventListener("keydown", this._onKeydown);
  }

  disconnectedCallback() {
    this.shadowRoot.removeEventListener("click", this._onClick);
    document.removeEventListener("keydown", this._onKeydown);
  }

  attributeChangedCallback() {
    if (this.isConnected) this.render();
  }

  get waUrl() {
    return this.getAttribute("wa-url") || WA_DEFAULT;
  }

  _emitCta(type, href) {
    this.dispatchEvent(
      new CustomEvent("hub-cta", {
        detail: { type, href },
        bubbles: true,
        composed: true,
      })
    );
  }

  _waPrefill(text) {
    return `${this.waUrl}?text=${encodeURIComponent(text)}`;
  }

  _thumb(id) {
    return mediaFit(id, 640, 960);
  }

  _full(id) {
    return mediaFit(id, 1400, 1400);
  }

  _matchesFilter(item, filter) {
    if (filter === "all") return true;
    if (filter === "drawing-painting") {
      return (
        item.category === "drawing-painting" ||
        item.category === "sketch" ||
        item.category === "acrylic"
      );
    }
    return item.category === filter;
  }

  _applyFilter(filter) {
    this._filter = filter;
    const buttons = this.shadowRoot.querySelectorAll("[data-action='filter']");
    buttons.forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.dataset.filter === filter));
    });

    let totalVisible = 0;
    this.shadowRoot.querySelectorAll("[data-art-item]").forEach((el) => {
      const cat = el.dataset.category || "";
      const show =
        filter === "all" ||
        cat === filter ||
        (filter === "drawing-painting" &&
          (cat === "drawing-painting" || cat === "sketch" || cat === "acrylic"));
      el.classList.toggle("is-hidden", !show);
      if (show) totalVisible += 1;
    });

    this.shadowRoot.querySelectorAll("[data-gallery-block]").forEach((block) => {
      const visibleInBlock = block.querySelectorAll(
        "[data-art-item]:not(.is-hidden)"
      ).length;
      block.classList.toggle("is-empty-block", visibleInBlock === 0);
      block.setAttribute("aria-hidden", visibleInBlock === 0 ? "true" : "false");
    });

    this.shadowRoot.querySelectorAll("[data-gallery-empty]").forEach((el) => {
      el.classList.toggle("is-visible", totalVisible === 0);
    });
  }

  _openLightbox(id) {
    const item = ARTWORK.find((a) => a.id === id);
    if (!item) return;
    this._activeId = id;
    const lb = this.shadowRoot.getElementById("lightbox");
    const img = this.shadowRoot.getElementById("lightboxImg");
    const cat = this.shadowRoot.getElementById("lightboxCat");
    if (!lb || !img) return;
    img.src = this._full(item.imageId);
    img.alt = item.altText;
    if (cat) cat.textContent = CATEGORY_LABEL[item.category] || "";
    lb.classList.add("is-open");
    lb.setAttribute("aria-hidden", "false");
    document.documentElement.style.overflow = "hidden";
    const closeBtn = this.shadowRoot.getElementById("lightboxClose");
    if (closeBtn) closeBtn.focus();
  }

  _closeLightbox() {
    const lb = this.shadowRoot.getElementById("lightbox");
    if (!lb) return;
    lb.classList.remove("is-open");
    lb.setAttribute("aria-hidden", "true");
    this._activeId = null;
    document.documentElement.style.overflow = "";
  }

  _onKeydown(event) {
    if (event.key === "Escape") this._closeLightbox();
  }

  _onClick(event) {
    const target = event.target.closest("[data-action]");
    if (!target) {
      if (event.target.id === "lightbox") this._closeLightbox();
      return;
    }
    const action = target.dataset.action;

    if (action === "filter") {
      event.preventDefault();
      this._applyFilter(target.dataset.filter || "all");
      try {
        target.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      } catch (e) {
        // ignore
      }
      return;
    }

    if (action === "open-art") {
      event.preventDefault();
      this._openLightbox(target.dataset.artId);
      return;
    }

    if (action === "close-lightbox") {
      event.preventDefault();
      this._closeLightbox();
      return;
    }

    if (action === "scroll-gallery") {
      event.preventDefault();
      const sec = this.shadowRoot.getElementById("secGallery");
      if (sec) sec.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    if (action === "whatsapp") {
      this._emitCta("whatsapp", this.waUrl);
      return;
    }

    if (action === "course" || action === "hub") {
      this._emitCta(action, target.getAttribute("href"));
    }
  }

  _filtersHtml() {
    return CATEGORIES.map(
      (c) => `
      <button
        type="button"
        data-action="filter"
        data-filter="${c.id}"
        aria-pressed="${c.id === "all" ? "true" : "false"}"
      >${c.label}</button>`
    ).join("");
  }

  _artItemHtml(item, eager) {
    const thumb = this._thumb(item.imageId);
    const loading = eager ? "eager" : "lazy";
    const fetchPriority = eager ? 'fetchpriority="high"' : "";
    return `
      <div
        class="art-item"
        data-art-item
        data-category="${item.category}"
        data-section="${item.section}"
      >
        <button
          type="button"
          class="art-card"
          data-action="open-art"
          data-art-id="${item.id}"
          aria-label="放大查看：${item.altText}"
        >
          <img
            src="${thumb}"
            alt="${item.altText}"
            loading="${loading}"
            decoding="async"
            width="640"
            height="800"
            ${fetchPriority}
          />
          <div class="art-meta">
            <span class="art-cat">${CATEGORY_LABEL[item.category] || ""}</span>
          </div>
        </button>
      </div>`;
  }

  _galleryHtml(section) {
    return ARTWORK.filter((a) => a.section === section)
      .map((item, index) => this._artItemHtml(item, section === 1 && index < 4))
      .join("");
  }

  _courseCardsHtml() {
    return COURSE_CARDS.map(
      (c) => `
      <a class="course-card" data-action="course" href="${c.href}">
        <div class="course-media">
          <img
            src="${mediaFill(c.imageId, 400, 400)}"
            alt="${c.imageAlt}"
            loading="lazy"
            decoding="async"
            width="400"
            height="400"
          />
        </div>
        <div class="course-body">
          <h3>${c.title}</h3>
          <p>${c.desc}</p>
          <span class="course-cta">${c.cta} →</span>
        </div>
      </a>`
    ).join("");
  }

  _trustHtml() {
    return TRUST_POINTS.map(
      (t) => `
      <div class="trust-item">
        <strong>${t.title}</strong>
        <span>${t.desc}</span>
      </div>`
    ).join("");
  }

  render() {
    const waPrefill = this._waPrefill(
      "你好，我想預約 HK$100 試堂／查詢美術課程安排。"
    );
    const heroImgs = ARTWORK.filter((a) => a.featured).slice(0, 3);

    this.shadowRoot.innerHTML = `
      <style>${STYLES}</style>
      <div class="hub">
        <section class="hero" aria-labelledby="hero-title">
          <div class="wrap">
            <div class="hero-grid">
              <div class="hero-copy">
                <p class="hero-eyebrow">ICAcademy · 何文田</p>
                <h1 id="hero-title">學員作品畫廊</h1>
                <p class="hero-en">ICAcademy Student Artwork Gallery</p>
                <p class="hero-lead">
                  每一幅作品，都記錄著孩子的創意、觀察力與藝術成長。探索 ICAcademy 學員於不同美術課程中的作品。
                </p>
                <div class="btn-row">
                  <a class="btn btn-coral" data-action="hub" href="${COURSE_HUB_URL}">探索課程</a>
                  <a class="btn btn-outline-teal" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">HK$100 試堂</a>
                </div>
              </div>
              <div class="hero-collage" aria-hidden="true">
                ${heroImgs
                  .map(
                    (img, i) => `
                  <figure>
                    <img
                      src="${mediaFill(img.imageId, i === 0 ? 720 : 480, i === 0 ? 960 : 480)}"
                      alt=""
                      loading="${i === 0 ? "eager" : "lazy"}"
                      decoding="async"
                      width="${i === 0 ? 720 : 480}"
                      height="${i === 0 ? 960 : 480}"
                    />
                  </figure>`
                  )
                  .join("")}
              </div>
            </div>
          </div>
        </section>

        <div class="filters-sticky">
          <div class="wrap">
            <div class="filters" role="group" aria-label="按課程類別篩選作品">
              ${this._filtersHtml()}
            </div>
          </div>
        </div>

        <section class="section" id="secGallery" aria-labelledby="gallery1-title" data-gallery-block>
          <div class="wrap">
            <h2 class="section-title" id="gallery1-title">學員作品精選</h2>
            <p class="section-lead">點擊作品可放大瀏覽。畫面比例已保留，避免過度裁切。</p>
            <div class="masonry" data-gallery-grid>
              ${this._galleryHtml(1)}
            </div>
          </div>
        </section>
        <div class="wrap">
          <p class="gallery-empty" data-gallery-empty>此類別暫未顯示作品，請選擇其他篩選。</p>
        </div>

        <section class="section section-soft" aria-labelledby="courses-title">
          <div class="wrap">
            <h2 class="section-title" id="courses-title">喜歡這些作品？探索相關美術課程</h2>
            <p class="section-lead">按作品風格與興趣，前往對應課程專頁了解詳情。</p>
            <div class="course-grid">
              ${this._courseCardsHtml()}
            </div>
          </div>
        </section>

        <section class="section" aria-labelledby="gallery2-title" data-gallery-block>
          <div class="wrap">
            <h2 class="section-title" id="gallery2-title">更多學員創作</h2>
            <p class="section-lead">漫畫、黏土、素描與塑膠彩等不同媒介的學員作品。</p>
            <div class="masonry" data-gallery-grid>
              ${this._galleryHtml(2)}
            </div>
          </div>
        </section>

        <section class="section section-soft" aria-labelledby="trust-title">
          <div class="wrap">
            <h2 class="section-title" id="trust-title">不只是畫得漂亮，更重要是學懂觀察、創作與表達</h2>
            <p class="section-lead">
              ICAcademy 課程幫助學員在創作過程中建立觀察力、技巧與個人藝術表達。
            </p>
            <div class="trust-grid">
              ${this._trustHtml()}
            </div>
          </div>
        </section>

        <section class="section" aria-labelledby="trial-title">
          <div class="wrap">
            <div class="trial">
              <div class="trial-badge">先體驗，再決定</div>
              <h2 id="trial-title">想親身體驗 ICAcademy 的美術課程？</h2>
              <p>
                由 HK$100 試堂開始，讓小朋友親身體驗課堂、認識導師及探索適合自己的藝術方向。
              </p>
              <p class="trial-price">單次試堂<strong>HK$100</strong></p>
              <div class="btn-row">
                <a class="btn btn-teal" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">預約 HK$100 試堂</a>
                <a class="btn btn-ghost" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">WhatsApp 查詢</a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div
        class="lightbox"
        id="lightbox"
        role="dialog"
        aria-modal="true"
        aria-hidden="true"
        aria-label="作品放大檢視"
      >
        <div class="lightbox-dialog">
          <button
            type="button"
            class="lightbox-close"
            id="lightboxClose"
            data-action="close-lightbox"
            aria-label="關閉"
          >×</button>
          <div class="lightbox-img-wrap">
            <img id="lightboxImg" src="" alt="" />
          </div>
          <div class="lightbox-meta">
            <p id="lightboxCat"></p>
          </div>
        </div>
      </div>
    `;

    this._applyFilter(this._filter || "all");
  }
}

customElements.define("gallery-hub", GalleryHub);
