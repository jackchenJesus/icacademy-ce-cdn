/**
 * ICAcademy Student Artwork Gallery Hub – Custom Element
 * Tag name: gallery-hub
 * Version: 2026-08-16-v6 (canonical routes /studentartwork + EN locale fix)
 * Design system: matches courses-hub / kids-art-hub / drawing-painting-hub / trial-class-hub
 * Routes: /studentartwork (EN) | /zh/studentartwork (ZH)
 * Locale via attribute: locale="en" | "zh" (default en = site primary).
 */
const WA_DEFAULT = "https://wa.me/85265808022";

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
  { id: "all", label: { en: "All artwork", zh: "全部作品" } },
  { id: "kids", label: { en: "Kids Art", zh: "兒童美術" } },
  { id: "drawing-painting", label: { en: "Drawing & Painting", zh: "Drawing & Painting" } },
  { id: "comic", label: { en: "Comics & Digital Art", zh: "漫畫及數碼藝術" } },
  { id: "clay", label: { en: "Clay & Creative Crafts", zh: "黏土及創意手作" } },
  { id: "sketch", label: { en: "Sketching", zh: "素描" } },
  { id: "acrylic", label: { en: "Acrylic Painting", zh: "Acrylic Painting" } },
];

const ALT_BY_CATEGORY = {
  kids: { en: "ICAcademy kids creative art student artwork", zh: "ICAcademy 兒童創意美術學員作品" },
  "drawing-painting": { en: "ICAcademy Drawing & Painting student artwork", zh: "ICAcademy 繪畫課程學員作品" },
  comic: { en: "ICAcademy comics & digital art student artwork", zh: "ICAcademy 漫畫及數碼藝術學員作品" },
  clay: { en: "ICAcademy clay & craft student artwork", zh: "ICAcademy 黏土及創意手作學員作品" },
  sketch: { en: "ICAcademy sketching course student artwork", zh: "ICAcademy 素描課程學生作品" },
  acrylic: { en: "ICAcademy Acrylic Painting student artwork", zh: "ICAcademy Acrylic Painting 學員作品" },
};

const COURSE_CARDS = [
  {
    id: "kids",
    title: { en: "Kids Creative Art", zh: "兒童創意美術" },
    desc: {
      en: "Ideal for younger students building creativity and art foundations, including Visual Art Skills and Creative Art.",
      zh: "適合年幼學員發展創意與美術基礎，包括視藝技巧及兒童創意美術課程。",
    },
    hrefSlug: "/courses/kids-art-classes",
    cta: { en: "View kids art courses", zh: "查看兒童美術課程" },
    imageId: "b98cc9_f16629f0d6414271822e19d767f44457~mv2.jpg",
    imageAlt: {
      en: "ICAcademy kids creative art student artwork",
      zh: "ICAcademy 兒童創意美術學員作品",
    },
  },
  {
    id: "drawing",
    title: { en: "Drawing & Painting", zh: "Drawing & Painting" },
    desc: {
      en: "Sketching, painting, acrylic and mixed-media skills — choose by interest and level.",
      zh: "素描、繪畫、塑膠彩與綜合美術技巧，按興趣與程度選擇合適方向。",
    },
    hrefSlug: "/courses/art-drawing",
    cta: { en: "Explore Drawing & Painting", zh: "探索繪畫及素描課程" },
    imageId: "b98cc9_7f99cc18f81e42f9a5551280f6425b55~mv2.jpg",
    imageAlt: {
      en: "ICAcademy Drawing & Painting student artwork",
      zh: "ICAcademy 繪畫及素描學員作品",
    },
  },
  {
    id: "comic",
    title: { en: "Comics & Digital Art", zh: "漫畫及數碼藝術" },
    desc: {
      en: "Character design, comic figures, expression, action and composition for storytelling.",
      zh: "角色設計、漫畫人物、表情動作與畫面構圖，激發故事與創意表達。",
    },
    hrefSlug: "/courses/comic-drawing-class",
    cta: { en: "View comics & digital art", zh: "查看漫畫及數碼藝術課程" },
    imageId: "b98cc9_37e0184c611f48fb96bae9a1fa37dc05~mv2.jpg",
    imageAlt: {
      en: "ICAcademy comics student artwork",
      zh: "ICAcademy 漫畫學員作品",
    },
  },
  {
    id: "clay",
    title: { en: "Clay & Creative Crafts", zh: "黏土及創意手作" },
    desc: {
      en: "Soft clay and 3D crafts that build modelling, structure and colour sense.",
      zh: "輕黏土與立體手作，訓練塑形、結構與色彩美感。",
    },
    hrefSlug: "/courses/creative-art-and-clay-class",
    cta: { en: "View clay courses", zh: "查看黏土課程" },
    imageId: "b98cc9_33c4c822ff2e4e5e86a4dfd9ce7b7be7~mv2.jpeg",
    imageAlt: {
      en: "ICAcademy clay student artwork",
      zh: "ICAcademy 黏土學員作品",
    },
  },
];

const TRUST_POINTS = [
  { title: { en: "Observation", zh: "觀察" }, desc: { en: "Notice shape, colour and space", zh: "細心觀察形狀、色彩與空間" } },
  { title: { en: "Creativity", zh: "創意" }, desc: { en: "Turn imagination into original work", zh: "把想像轉化為個人創作" } },
  { title: { en: "Technique", zh: "技巧" }, desc: { en: "Build art skills step by step", zh: "循序學習藝術技法" } },
  { title: { en: "Colour", zh: "色彩" }, desc: { en: "Understand colour and mood", zh: "認識配色與畫面氛圍" } },
  { title: { en: "Composition", zh: "構圖" }, desc: { en: "Organise the picture and focus", zh: "組織畫面與視覺焦點" } },
  { title: { en: "Confidence", zh: "自信" }, desc: { en: "Finish work and share boldly", zh: "完成作品並勇於表達" } },
  { title: { en: "Expression", zh: "表達" }, desc: { en: "Develop a personal artistic voice", zh: "發展個人藝術語言" } },
];

const STYLES = `
:host {
  display: block;
  width: 100%;
  max-width: 100%;
  min-height: 1px;
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
.section-last {
  padding-bottom: 40px;
}
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
  align-items: stretch;
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
  min-height: 100%;
  min-width: 0;
  align-self: stretch;
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
  overflow: visible;
}
.course-body h3 {
  margin: 0;
  font-size: 1.08rem;
  line-height: 1.3;
  overflow-wrap: anywhere;
  word-break: keep-all;
}
.course-body p {
  margin: 0;
  color: var(--muted);
  font-size: 0.92rem;
  line-height: 1.55;
  flex: 1;
  overflow-wrap: anywhere;
}
.course-cta {
  display: block;
  color: var(--teal);
  font-weight: 800;
  font-size: 0.92rem;
  line-height: 1.35;
  overflow-wrap: anywhere;
  word-break: break-word;
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
  .course-card { grid-template-columns: 112px minmax(0, 1fr); }
  .course-body { padding: 12px 12px 12px; gap: 6px; }
  .course-body h3 { font-size: 1rem; }
  .course-body p { font-size: 0.86rem; }
  .course-cta { font-size: 0.86rem; }
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
  /* Keep side-by-side course cards (image left / copy right) */
  .course-card { grid-template-columns: 104px minmax(0, 1fr); }
  .course-body { padding: 12px 12px 11px; }
  .course-body p {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
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
  .course-card { grid-template-columns: 96px minmax(0, 1fr); }
  .course-body h3 { font-size: 0.98rem; }
  .course-cta { font-size: 0.84rem; }
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
    this._syncLayout = this._syncLayout.bind(this);
    this._ro = null;
  }

  connectedCallback() {
    this.render();
    const syncLocale = () => {
      try {
        const h1 = this.shadowRoot && this.shadowRoot.querySelector("h1");
        if (!h1) return;
        const text = h1.textContent || "";
        const wantZh = this.localeCode === "zh";
        const showingEn = /Student Artwork Gallery/i.test(text);
        const showingZh = /學員作品畫廊/.test(text);
        if ((wantZh && showingEn) || (!wantZh && showingZh)) this.render();
      } catch (e) {}
    };
    setTimeout(syncLocale, 0);
    setTimeout(syncLocale, 500);

    this.shadowRoot.addEventListener("click", this._onClick);
    document.addEventListener("keydown", this._onKeydown);
    window.addEventListener("resize", this._syncLayout);
    window.addEventListener("orientationchange", this._syncLayout);
  }

  disconnectedCallback() {
    this.shadowRoot.removeEventListener("click", this._onClick);
    document.removeEventListener("keydown", this._onKeydown);
    window.removeEventListener("resize", this._syncLayout);
    window.removeEventListener("orientationchange", this._syncLayout);
    if (this._ro) {
      this._ro.disconnect();
      this._ro = null;
    }
    const bleed = document.getElementById("gallery-hub-page-bleed");
    if (bleed) bleed.remove();
  }

  attributeChangedCallback() {
    if (this.isConnected) this.render();
  }

  get waUrl() {
    return this.getAttribute("wa-url") || WA_DEFAULT;
  }

  get localeCode() {
    // Published Multilingual: /zh/* = Chinese. Without /zh = English (site primary).
    // Do NOT let html[lang] / userLanguage override this — on Wix Editor/preview those
    // often stay "zh" even on the English page, which made EN UI never appear.
    try {
      const href = String((window.location && (window.location.href || window.location.pathname)) || "");
      if (/\/zh(\/|$|\?|#)/i.test(href)) return "zh";
    } catch (e) {}

    // Velo galleryHubPage sets locale from wixWindowFrontend.multilingual (Editor + live).
    const attr = String(this.getAttribute("locale") || "").toLowerCase();
    if (attr.startsWith("zh")) return "zh";
    if (attr.startsWith("en")) return "en";

    // Soft fallbacks only when attribute not set yet (first paint before Velo wiring).
    try {
      const lang = String(
        (document.documentElement && (document.documentElement.getAttribute("lang") || document.documentElement.lang)) || ""
      ).toLowerCase();
      if (lang.startsWith("en")) return "en";
    } catch (e) {}

    return "en";
  }

  get isEn() {
    return this.localeCode !== "zh";
  }

  path(slug) {
    return this.isEn ? slug : `/zh${slug}`;
  }

  pick(obj) {
    if (obj == null) return "";
    if (typeof obj === "string") return obj;
    return this.isEn ? obj.en : obj.zh;
  }

  categoryLabel(id) {
    const cat = CATEGORIES.find((c) => c.id === id);
    return cat ? this.pick(cat.label) : "";
  }

  altFor(item) {
    const fromCat = ALT_BY_CATEGORY[item.category];
    if (fromCat) return this.pick(fromCat);
    return this.pick(item.altText) || (this.isEn ? "ICAcademy student artwork" : "ICAcademy 學員作品");
  }

  _injectPageBleedCss() {
    const id = "gallery-hub-page-bleed";
    if (document.getElementById(id)) return;
    const style = document.createElement("style");
    style.id = id;
    style.textContent = `
      html, body {
        overflow-x: hidden !important;
      }
      gallery-hub {
        display: block !important;
        box-sizing: border-box !important;
        padding: 0 !important;
        border-radius: 0 !important;
        box-shadow: none !important;
      }
      #SITE_PAGES,
      #PAGES_CONTAINER,
      #SITE_FOOTER,
      #masterPage {
        overflow: visible !important;
        overflow-x: visible !important;
        max-width: none !important;
      }
      #SITE_FOOTER {
        margin-top: 0 !important;
        margin-left: 0 !important;
        margin-right: 0 !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
        padding-bottom: 0 !important;
        width: 100% !important;
        max-width: none !important;
        box-sizing: border-box !important;
      }
    `;
    document.head.appendChild(style);
  }

  _viewportWidth() {
    return document.documentElement.clientWidth || window.innerWidth || 0;
  }

  _forceFullBleed() {
    try {
      this._injectPageBleedCss();

      this.style.removeProperty("left");
      this.style.removeProperty("right");
      this.style.removeProperty("transform");

      const vw = this._viewportWidth();
      if (!vw) return;

      this.setAttribute("data-fullbleed", "1");
      this.style.setProperty("position", "relative", "important");
      this.style.setProperty("left", "0", "important");
      this.style.setProperty("width", `${vw}px`, "important");
      this.style.setProperty("max-width", `${vw}px`, "important");
      this.style.setProperty("min-width", `${vw}px`, "important");
      this.style.setProperty("margin-left", `calc(50% - ${vw / 2}px)`, "important");
      this.style.setProperty("margin-right", "0", "important");
      this.style.setProperty("padding", "0", "important");
      this.style.setProperty("box-sizing", "border-box", "important");
      this.style.setProperty("overflow-x", "visible", "important");
      this.style.setProperty("border-radius", "0", "important");
      this.style.setProperty("box-shadow", "none", "important");

      let el = this.parentElement;
      for (let i = 0; i < 8 && el; i++) {
        const tag = (el.tagName || "").toLowerCase();
        const id = el.id || "";
        if (tag === "body" || tag === "html") break;
        el.style.setProperty("overflow", "visible", "important");
        el.style.setProperty("overflow-x", "visible", "important");
        el.style.setProperty("max-width", "none", "important");
        el.style.setProperty("width", "100%", "important");
        el.style.setProperty("margin-left", "0", "important");
        el.style.setProperty("margin-right", "0", "important");
        el.style.setProperty("padding-left", "0", "important");
        el.style.setProperty("padding-right", "0", "important");
        el.style.setProperty("border-radius", "0", "important");
        el.style.setProperty("left", "0", "important");
        if (tag === "main" || id === "SITE_PAGES" || id === "PAGES_CONTAINER" || id === "masterPage") break;
        el = el.parentElement;
      }

      const footer = document.getElementById("SITE_FOOTER");
      if (footer) {
        footer.style.setProperty("margin-top", "0", "important");
        footer.style.setProperty("margin-left", "0", "important");
        footer.style.setProperty("margin-right", "0", "important");
        footer.style.setProperty("padding-left", "0", "important");
        footer.style.setProperty("padding-right", "0", "important");
        footer.style.setProperty("padding-bottom", "0", "important");
        footer.style.setProperty("width", "100%", "important");
        footer.style.setProperty("max-width", "none", "important");
        footer.style.setProperty("box-sizing", "border-box", "important");
        footer.style.removeProperty("left");
        footer.style.removeProperty("right");
      }
    } catch (e) {
      // ignore
    }
  }

  _observeHeight() {
    const hub = this.shadowRoot && this.shadowRoot.querySelector(".hub");
    if (!hub) return;
    if (this._ro) this._ro.disconnect();
    this._ro = new ResizeObserver(this._syncLayout);
    this._ro.observe(hub);
    this._syncLayout();
    requestAnimationFrame(this._syncLayout);
    setTimeout(this._syncLayout, 300);
    setTimeout(this._syncLayout, 1200);
  }

  _syncLayout() {
    this._forceFullBleed();
    const hub = this.shadowRoot && this.shadowRoot.querySelector(".hub");
    if (!hub) return;
    const h = Math.ceil(hub.getBoundingClientRect().height);
    if (h > 0) {
      this.style.height = `${h}px`;
      this.style.minHeight = `${h}px`;
    }
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
    img.alt = this.altFor(item);
    if (cat) cat.textContent = this.categoryLabel(item.category);
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
      this._emitCta("whatsapp", target.getAttribute("href") || this.waUrl);
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
      >${this.categoryLabel(c.id)}</button>`
    ).join("");
  }

  _escAttr(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;");
  }

  _artItemHtml(item, eager) {
    const thumb = this._thumb(item.imageId);
    const alt = this.altFor(item);
    const loading = eager ? "eager" : "lazy";
    const fetchPriority = eager ? 'fetchpriority="high"' : "";
    const viewLabel = this.isEn ? `View larger: ${alt}` : `放大查看：${alt}`;
    const altAttr = this._escAttr(alt);
    const viewAttr = this._escAttr(viewLabel);
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
          aria-label="${viewAttr}"
        >
          <img
            src="${thumb}"
            alt="${altAttr}"
            loading="${loading}"
            decoding="async"
            width="640"
            height="800"
            ${fetchPriority}
          />
          <div class="art-meta">
            <span class="art-cat">${this._escAttr(this.categoryLabel(item.category))}</span>
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
      <a class="course-card" data-action="course" href="${this.path(c.hrefSlug)}">
        <div class="course-media">
          <img
            src="${mediaFill(c.imageId, 400, 400)}"
            alt="${this.pick(c.imageAlt)}"
            loading="lazy"
            decoding="async"
            width="400"
            height="400"
          />
        </div>
        <div class="course-body">
          <h3>${this.pick(c.title)}</h3>
          <p>${this.pick(c.desc)}</p>
          <span class="course-cta">${this.pick(c.cta)} →</span>
        </div>
      </a>`
    ).join("");
  }

  _trustHtml() {
    return TRUST_POINTS.map(
      (tp) => `
      <div class="trust-item">
        <strong>${this.pick(tp.title)}</strong>
        <span>${this.pick(tp.desc)}</span>
      </div>`
    ).join("");
  }

  render() {
    const t = (en, zh) => (this.isEn ? en : zh);
    const courseHubUrl = this.path("/course-hub");
    const trialUrl = this.path("/homantin-children-art-trial");

    const waBook = this._waPrefill(
      t(
        "Hi, I'd like to book an HK$100 art trial class. Child's age: ____; drawing experience: ____; preferred times: ____.",
        "你好，我想預約 HK$100 試堂。小朋友年齡：＿＿；繪畫經驗：＿＿；方便時間：＿＿。"
      )
    );
    const waEnquiry = this._waPrefill(
      t(
        "Hi, I'd like to ask about a suitable art course / HK$100 trial for my child. Child's age: ____; interests: ____.",
        "你好，我想查詢適合小朋友的藝術課程／HK$100 試堂安排。小朋友年齡：＿＿；興趣：＿＿。"
      )
    );

    const heroImgs = ARTWORK.filter((a) => a.featured).slice(0, 3);

    this.shadowRoot.innerHTML = `
      <style>${STYLES}</style>
      <div class="hub">
        <section class="hero" aria-labelledby="hero-title">
          <div class="wrap">
            <div class="hero-grid">
              <div class="hero-copy">
                <p class="hero-eyebrow">${t("ICAcademy · Ho Man Tin", "ICAcademy · 何文田")}</p>
                <h1 id="hero-title">${t("Student Artwork Gallery", "學員作品畫廊")}</h1>
                <p class="hero-en">${t("學員作品畫廊", "Student Artwork Gallery")}</p>
                <p class="hero-lead">
                  ${t(
                    "Every piece captures a child's creativity, observation and artistic growth. Explore student work across ICAcademy's art programmes.",
                    "每一幅作品，都記錄著孩子的創意、觀察力與藝術成長。探索 ICAcademy 學員於不同美術課程中的作品。"
                  )}
                </p>
                <div class="btn-row">
                  <a class="btn btn-coral" data-action="hub" href="${courseHubUrl}">${t("Explore courses", "探索課程")}</a>
                  <a class="btn btn-outline-teal" data-action="whatsapp" href="${waBook}" target="_blank" rel="noopener noreferrer">${t("HK$100 Trial", "HK$100 試堂")}</a>
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
            <div class="filters" role="group" aria-label="${t("Filter artwork by course category", "按課程類別篩選作品")}">
              ${this._filtersHtml()}
            </div>
          </div>
        </div>

        <section class="section" id="secGallery" aria-labelledby="gallery1-title" data-gallery-block>
          <div class="wrap">
            <h2 class="section-title" id="gallery1-title">${t("Featured student artwork", "學員作品精選")}</h2>
            <p class="section-lead">${t(
              "Tap any piece to view larger. Original aspect ratios are preserved — no aggressive cropping.",
              "點擊作品可放大瀏覽。畫面比例已保留，避免過度裁切。"
            )}</p>
            <div class="masonry" data-gallery-grid>
              ${this._galleryHtml(1)}
            </div>
          </div>
        </section>
        <div class="wrap">
          <p class="gallery-empty" data-gallery-empty>${t(
            "No artwork in this category yet. Try another filter.",
            "此類別暫未顯示作品，請選擇其他篩選。"
          )}</p>
        </div>

        <section class="section section-soft" aria-labelledby="courses-title">
          <div class="wrap">
            <h2 class="section-title" id="courses-title">${t(
              "Love these pieces? Explore related art courses",
              "喜歡這些作品？探索相關美術課程"
            )}</h2>
            <p class="section-lead">${t(
              "Browse courses that match the style and interests shown in the gallery.",
              "按作品風格與興趣，前往對應課程專頁了解詳情。"
            )}</p>
            <div class="course-grid">
              ${this._courseCardsHtml()}
            </div>
          </div>
        </section>

        <section class="section" aria-labelledby="gallery2-title" data-gallery-block>
          <div class="wrap">
            <h2 class="section-title" id="gallery2-title">${t("More student creations", "更多學員創作")}</h2>
            <p class="section-lead">${t(
              "Comics, clay, sketching, acrylic and other media from our students.",
              "漫畫、黏土、素描與塑膠彩等不同媒介的學員作品。"
            )}</p>
            <div class="masonry" data-gallery-grid>
              ${this._galleryHtml(2)}
            </div>
          </div>
        </section>

        <section class="section section-soft" aria-labelledby="trust-title">
          <div class="wrap">
            <h2 class="section-title" id="trust-title">${t(
              "More than pretty pictures — observation, creativity and expression",
              "不只是畫得漂亮，更重要是學懂觀察、創作與表達"
            )}</h2>
            <p class="section-lead">
              ${t(
                "ICAcademy courses help students build observation, technique and personal artistic voice through the creative process.",
                "ICAcademy 課程幫助學員在創作過程中建立觀察力、技巧與個人藝術表達。"
              )}
            </p>
            <div class="trust-grid">
              ${this._trustHtml()}
            </div>
          </div>
        </section>

        <section class="section section-last" aria-labelledby="trial-title">
          <div class="wrap">
            <div class="trial">
              <div class="trial-badge">${t("Try first, then decide", "先體驗，再決定")}</div>
              <h2 id="trial-title">${t(
                "Want to experience ICAcademy art classes in person?",
                "想親身體驗 ICAcademy 的美術課程？"
              )}</h2>
              <p>
                ${t(
                  "Start with an HK$100 trial so your child can feel the class, meet the teacher and explore a suitable creative direction.",
                  "由 HK$100 試堂開始，讓小朋友親身體驗課堂、認識導師及探索適合自己的藝術方向。"
                )}
              </p>
              <p class="trial-price">${t("Single trial", "單次試堂")}<strong>HK$100</strong></p>
              <div class="btn-row">
                <a class="btn btn-teal" data-action="whatsapp" href="${waBook}" target="_blank" rel="noopener noreferrer">${t("Book HK$100 trial", "預約 HK$100 試堂")}</a>
                <a class="btn btn-ghost" data-action="whatsapp" href="${waEnquiry}" target="_blank" rel="noopener noreferrer">${t("WhatsApp enquiry", "WhatsApp 查詢")}</a>
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
        aria-label="${t("Enlarged artwork view", "作品放大檢視")}"
      >
        <div class="lightbox-dialog">
          <button
            type="button"
            class="lightbox-close"
            id="lightboxClose"
            data-action="close-lightbox"
            aria-label="${t("Close", "關閉")}"
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
    this._observeHeight();
  }
}

customElements.define("gallery-hub", GalleryHub);
