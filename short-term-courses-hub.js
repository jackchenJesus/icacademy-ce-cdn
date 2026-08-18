/**
 * ICAcademy Short-term Courses Hub – Custom Element
 * Tag name: short-term-courses-hub
 * Version: 2026-08-18-v4 (CNY + Easter programme cards linking to live workshop pages)
 * Routes: /short-term-courses (EN) | /zh/short-term-courses (ZH)
 * Sub-pages: /short-term-course/2026cnyworkshop, /short-term-course/2026-easter-workshop
 * Design system: matches courses-hub / trial-class-hub (coral / teal).
 * Locale via URL /zh, html lang, or attribute locale="en"|"zh" (default en = site primary).
 */
const WA_DEFAULT = "https://wa.me/85265808022";

/** Build a Wix Media Manager fill URL from a site media file id. */
function mediaUrl(id, w, h, q = 70) {
  return `https://static.wixstatic.com/media/${id}/v1/fill/w_${w},h_${h},al_c,q_${q},enc_auto/${id}`;
}

/** Photos sourced from IC Academy site Media Manager (already used on existing hubs). */
const IMG = {
  heroSm: mediaUrl("b98cc9_d807c53a36a24d0ea19878291b1c0d2e~mv2.jpg", 640, 400, 70),
  hero: mediaUrl("b98cc9_d807c53a36a24d0ea19878291b1c0d2e~mv2.jpg", 960, 600, 75),
  heroLg: mediaUrl("b98cc9_d807c53a36a24d0ea19878291b1c0d2e~mv2.jpg", 1280, 800, 75),
  cny: mediaUrl("4ea940_2d5010ecfb1f4a8399e4f3ceb790972a~mv2.jpeg", 640, 400, 70),
  easter: mediaUrl("d5ba93_321804e3e45d4cc8ae34b02b4a4872bd~mv2.jpg", 640, 400, 70),
  detail: mediaUrl("b98cc9_0d50c3e155ba4c4e92046d937a5c0c43~mv2.jpg", 640, 800, 70),
  gallery1: mediaUrl("b98cc9_49cb0c61e7664eaca996580443195ec9~mv2.jpeg", 480, 480, 70),
  gallery2: mediaUrl("4ea940_5867e3daf35f4f969495afa34a05f1a3~mv2.jpg", 480, 480, 70),
  gallery3: mediaUrl("b98cc9_9605c850cf4b47daafd611bb1215e1fd~mv2.jpeg", 480, 480, 70),
  gallery4: mediaUrl("b98cc9_8b62b24164484280941000b87ffdecc8~mv2.jpg", 480, 480, 70),
};

(function preloadHeroLcp() {
  try {
    if (document.querySelector("link[data-short-term-hero-preload]")) return;
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = IMG.heroSm;
    link.setAttribute("fetchpriority", "high");
    link.setAttribute("imagesrcset", `${IMG.heroSm} 800w, ${IMG.hero} 1200w, ${IMG.heroLg} 1600w`);
    link.setAttribute("imagesizes", "100vw");
    link.setAttribute("data-short-term-hero-preload", "1");
    document.head.appendChild(link);
  } catch (e) {
    // ignore
  }
})();

/** Seasonal programme silos — links point to the live workshop pages on the site. */
const PROGRAMMES = [
  {
    id: "cny",
    badge: { en: "Chinese New Year period", zh: "農曆新年期間" },
    name: { en: "New Year Festival Courses", zh: "新年特別節日短期課程" },
    desc: {
      en: "Festive-themed short courses around Chinese New Year — create New Year paintings, decorations and festive crafts to take home and celebrate with.",
      zh: "農曆新年前後開辦的節日主題短期課程，創作賀年畫、新年裝飾及節日手作，完成作品帶回家應節。",
    },
    points: {
      en: ["Festive themes: New Year artwork and decorations", "Short format — finished in one to a few sessions", "Take home completed festival artwork"],
      zh: ["節日主題：賀年畫及新年裝飾", "短期形式 — 一至數堂完成", "完成節日作品帶回家"],
    },
    hrefSlug: "/short-term-course/2026cnyworkshop",
    image: IMG.cny,
    imageAlt: { en: "ICAcademy Chinese New Year workshop student Fook character painting", zh: "ICAcademy新年工作坊學生福字賀年畫" },
  },
  {
    id: "easter",
    badge: { en: "Easter holidays", zh: "復活節假期" },
    name: { en: "Easter Workshop", zh: "復活節短期課程" },
    desc: {
      en: "Easter-themed short courses during the spring break — bunny crafts, clay creations and festive artwork to celebrate the season.",
      zh: "復活節假期期間開辦的主題短期課程，創作小兔手工、黏土擺設及春日節日作品，感受節日氣氛。",
    },
    points: {
      en: ["Easter themes: bunnies, eggs and spring crafts", "Short format — finished in one to a few sessions", "Take home completed festive artwork"],
      zh: ["復活節主題：小兔、復活蛋及春日手工", "短期形式 — 一至數堂完成", "完成節日作品帶回家"],
    },
    hrefSlug: "/short-term-course/2026-easter-workshop",
    image: IMG.easter,
    imageAlt: { en: "ICAcademy Easter workshop clay bunny and rainbow artwork", zh: "ICAcademy復活節工作坊黏土小兔彩虹作品" },
  },
];

const WHY_SHORT_TERM = [
  {
    en: "Try art before committing to a regular weekly class",
    zh: "報讀恆常班前，先以短期形式體驗藝術創作",
  },
  {
    en: "Make good use of school holidays and festival breaks",
    zh: "善用學校假期及節日空檔",
  },
  {
    en: "Consecutive sessions help skills stick and progress show",
    zh: "連續式課堂，技巧更易鞏固、進步更明顯",
  },
  {
    en: "Seasonal themes keep children motivated and excited",
    zh: "節日主題令小朋友更有動力投入創作",
  },
  {
    en: "Small groups — teachers observe and follow up individually",
    zh: "小班教學，導師能個別觀察與跟進",
  },
  {
    en: "Flexible scheduling — enquire and reserve places on WhatsApp",
    zh: "時間靈活，WhatsApp 查詢及預留名額",
  },
];

const STEPS = [
  {
    title: { en: "1. Pick a programme", zh: "1. 選擇課程系列" },
    desc: {
      en: "Choose between the Summer Art Programme and New Year Festival Courses below.",
      zh: "在下方選擇暑期藝術課程或新年特別節日短期課程。",
    },
  },
  {
    title: { en: "2. WhatsApp us", zh: "2. WhatsApp 查詢" },
    desc: {
      en: "Tell us your child’s age, experience and preferred dates — we will reply with the latest timetable, fees and places.",
      zh: "告訴我們小朋友年齡、經驗及心儀日期，我們會回覆最新時間表、收費及名額。",
    },
  },
  {
    title: { en: "3. Reserve and create", zh: "3. 留位並上課" },
    desc: {
      en: "Confirm your place, come on the day, and bring home finished artwork. All materials are provided.",
      zh: "確認名額後準時上課，完成作品可帶回家。所有材料由畫室提供。",
    },
  },
];

const FAQ = [
  {
    q: { en: "How are short-term courses different from regular classes?", zh: "短期課程同恆常班有甚麼分別？" },
    a: {
      en: "Short-term courses run during school holidays or festival periods with fewer, focused sessions on a theme. Regular classes run weekly through the term for ongoing, level-based training.",
      zh: "短期課程於學校假期或節日期間開辦，堂數較少、圍繞特定主題；恆常班則每週上課，按程度持續進修。",
    },
  },
  {
    q: { en: "What age can join?", zh: "幾多歲可以參加？" },
    a: {
      en: "Most short-term courses suit ages 3 and up, grouped by age. Some themed workshops have their own age requirements — please check with us on WhatsApp.",
      zh: "大部分短期課程適合3歲以上，按年齡分班。個別主題設有年齡要求，詳情歡迎 WhatsApp 查詢。",
    },
  },
  {
    q: { en: "Do we need to bring our own materials?", zh: "需要自備材料嗎？" },
    a: {
      en: "No. All class materials are provided by the studio, and finished artwork can be taken home.",
      zh: "不需要。課堂材料由畫室提供，完成的作品可帶回家。",
    },
  },
  {
    q: { en: "When does enrolment open?", zh: "幾時開始接受報名？" },
    a: {
      en: "Each festival series usually opens one to two months before the festival — New Year courses around December, Easter courses around February–March. Message us on WhatsApp to join the priority list and reserve a place early.",
      zh: "每個節日系列一般提前一至兩個月開始報名 — 新年課程約12月，復活節課程約2–3月。歡迎 WhatsApp 加入優先名單，提早留位。",
    },
  },
  {
    q: { en: "Where are classes held?", zh: "在哪裏上課？" },
    a: {
      en: "IC Academy is at Ground Floor Shop 3, 79F Waterloo Road, Kowloon (Ho Man Tin), near Pui Ching Middle School and Primary School.",
      zh: "IC Academy 位於九龍窩打老道79F地下3號鋪（何文田），鄰近培正中學及小學。",
    },
  },
];

const EXPLORE = [
  {
    title: { en: "Regular Art Courses", zh: "恆常藝術課程" },
    desc: { en: "Weekly classes for ages 3+ — drawing, comics, clay and more", zh: "每週恆常班：創意繪畫、漫畫、黏土等" },
    hrefSlug: "/course-hub",
  },
];

const STYLES = `
:host {
  display: block;
  width: 100% !important;
  max-width: 100% !important;
  min-width: 0;
  min-height: 1px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: relative;
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
  --title-chip: rgba(255, 240, 240, 0.92);
  --check: #00a9b7;
  --radius: 18px;
  --shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  --font: "PingFang TC", "Microsoft JhengHei", "Noto Sans TC", "Segoe UI", sans-serif;
  color: var(--ink);
  font-family: var(--font);
  line-height: 1.7;
  font-size: 16px;
  background: var(--bg);
  overflow-x: visible;
}
:host([data-fullbleed="1"]) {
  width: 100% !important;
  max-width: 100% !important;
  margin: 0 !important;
  border-radius: 0 !important;
  box-shadow: none !important;
}
*, *::before, *::after { box-sizing: border-box; }
a { color: inherit; }
img { max-width: 100%; display: block; }
.hub {
  width: 100%;
  max-width: 100%;
  min-width: 0;
  margin: 0;
  padding: 0;
  overflow-x: visible;
}
.wrap {
  width: min(1200px, calc(100% - 48px));
  max-width: 1200px;
  margin: 0 auto;
}
.section {
  padding: 64px 0;
  background: var(--bg);
  width: 100%;
}
.section-soft { background: var(--bg-soft); }
.section-title {
  text-align: center;
  font-size: clamp(1.55rem, 3vw, 2rem);
  font-weight: 800;
  margin: 0 0 12px;
  letter-spacing: 0.01em;
}
.section-lead {
  text-align: center;
  color: var(--muted);
  max-width: 46ch;
  margin: 0 auto 36px;
  font-size: 1.02rem;
}
h1, h2, h3 { line-height: 1.28; margin: 0 0 12px; font-weight: 800; }
h3 { font-size: 1.12rem; }
.accent { color: var(--coral); }

.btn-row { display: flex; flex-wrap: wrap; gap: 14px; }
.btn {
  appearance: none;
  border: 0;
  border-radius: 999px;
  min-height: 50px;
  padding: 12px 28px;
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
.btn-outline-white {
  background: transparent;
  color: #fff;
  border: 2px solid #fff;
}
.btn-ghost {
  background: #fff;
  color: var(--ink);
  border: 1px solid var(--line);
}

/* —— Hero (full-bleed) —— */
.hero {
  position: relative;
  width: 100%;
  min-height: clamp(460px, 58vw, 620px);
  display: flex;
  align-items: center;
  border: 0;
  margin: 0;
  overflow: hidden;
  background: #f3f3f3;
}
.hero-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
}
.hero-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 60% center;
}
.hero-bg::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(255,255,255,.94) 0%, rgba(255,255,255,.82) 42%, rgba(255,255,255,.28) 72%, rgba(255,255,255,.12) 100%);
}
.hero .wrap {
  position: relative;
  z-index: 1;
  padding: 64px 0;
  width: min(1200px, calc(100% - 48px));
}
.hero-copy {
  max-width: 36rem;
  text-align: left;
}
.hero-eyebrow {
  margin: 0 0 18px;
  color: var(--teal);
  font-weight: 800;
  font-size: 1.02rem;
  letter-spacing: 0.02em;
}
.hero-title-chip {
  display: block;
  background: var(--title-chip);
  border-radius: 22px;
  padding: 20px 24px 18px;
  margin: 0 0 18px;
  max-width: min(640px, 100%);
}
.hero-title-chip h1 {
  margin: 0;
  font-size: clamp(1.65rem, 4vw, 2.45rem);
  line-height: 1.35;
  word-break: keep-all;
}
.hero-sub {
  margin: 10px 0 0;
  font-size: clamp(1.35rem, 3vw, 1.85rem);
  font-weight: 800;
  line-height: 1.35;
  color: var(--navy);
}
.hero-lead {
  margin: 0 0 28px;
  max-width: 36em;
  color: var(--muted);
  font-size: 1.02rem;
}

/* —— Programme feature cards —— */
.programme-grid {
  display: grid;
  gap: 24px;
}
@media (min-width: 860px) {
  .programme-grid { grid-template-columns: repeat(2, 1fr); }
}
.programme-card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow);
  transition: transform .2s ease;
}
.programme-card:hover { transform: translateY(-3px); }
.programme-media { aspect-ratio: 16 / 10; background: #ececec; overflow: hidden; }
.programme-media img { width: 100%; height: 100%; object-fit: cover; }
.programme-body { padding: 24px 24px 26px; display: flex; flex-direction: column; gap: 10px; flex: 1; }
.programme-body h3 { font-size: 1.3rem; }
.meta {
  display: inline-flex;
  align-self: flex-start;
  background: var(--coral-soft);
  color: var(--coral-deep);
  border-radius: 999px;
  padding: 4px 12px;
  font-size: 0.86rem;
  font-weight: 800;
}
.points { margin: 0; padding: 0; list-style: none; color: var(--muted); }
.points li {
  position: relative;
  padding-left: 1.45rem;
  margin: 0.35rem 0;
}
.points li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--check);
  font-weight: 800;
}
.programme-actions { margin-top: auto; padding-top: 10px; display: flex; flex-wrap: wrap; gap: 12px; }

/* —— Detail-style block (why short-term) —— */
.detail {
  display: grid;
  gap: 36px;
  align-items: center;
}
@media (min-width: 900px) {
  .detail { grid-template-columns: 1.1fr 0.9fr; gap: 48px; }
}
.detail h2 {
  font-size: clamp(1.45rem, 3vw, 1.9rem);
  margin: 0 0 10px;
  text-align: left;
}
.detail-meta {
  color: var(--coral-deep);
  font-weight: 700;
  margin: 0 0 16px;
}
.detail-lead { color: var(--muted); margin: 0 0 18px; max-width: 50ch; }
.check-list { margin: 0 0 28px; padding: 0; list-style: none; }
.check-list li {
  position: relative;
  padding: 0.35rem 0 0.35rem 1.7rem;
  color: var(--ink);
}
.check-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  top: 0.35rem;
  color: var(--check);
  font-weight: 800;
  font-size: 1.1rem;
}
.detail-media {
  border-radius: 22px;
  overflow: hidden;
  box-shadow: var(--shadow);
  background: #eee;
  aspect-ratio: 4 / 5;
  max-height: 480px;
}
.detail-media img { width: 100%; height: 100%; object-fit: cover; }

/* —— Steps —— */
.steps-grid {
  display: grid;
  gap: 20px;
}
@media (min-width: 860px) {
  .steps-grid { grid-template-columns: repeat(3, 1fr); }
}
.step-card {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 26px 22px;
  box-shadow: var(--shadow);
}
.step-card h3 { margin: 0 0 8px; color: var(--teal-deep); }
.step-card p { margin: 0; color: var(--muted); font-size: 0.95rem; }

/* —— Gallery —— */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}
@media (min-width: 800px) { .gallery-grid { grid-template-columns: repeat(4, 1fr); } }
.gallery-grid figure {
  margin: 0;
  border-radius: 16px;
  overflow: hidden;
  background: #ddd;
  aspect-ratio: 1;
}
.gallery-grid img { width: 100%; height: 100%; object-fit: cover; }
.gallery-grid figcaption {
  position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
  overflow: hidden; clip: rect(0,0,0,0); border: 0;
}
.center-actions { display: flex; justify-content: center; margin-top: 28px; }

/* —— FAQ (flat Q/A list) —— */
.faq-list { max-width: 820px; margin: 0 auto; }
.faq-item {
  padding: 22px 0;
  border-bottom: 1px solid #e5e5e5;
}
.faq-item:first-child { border-top: 1px solid #e5e5e5; }
.faq-q {
  margin: 0 0 8px;
  font-weight: 800;
  font-size: 1.05rem;
}
.faq-a {
  margin: 0;
  color: var(--muted);
  font-size: 0.98rem;
}

/* —— Explore cards —— */
.explore-grid {
  display: grid;
  gap: 20px;
}
@media (min-width: 720px) {
  .explore-grid { grid-template-columns: repeat(2, 1fr); }
}
.explore-card {
  background: #fff;
  border-radius: 16px;
  padding: 36px 22px;
  text-decoration: none;
  text-align: center;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  box-shadow: var(--shadow);
  transition: transform .15s ease;
}
.explore-card:hover { transform: translateY(-3px); }
.explore-card h3 { margin: 0; font-size: 1.25rem; }
.explore-card p { margin: 0; color: var(--muted); font-size: 0.95rem; }

/* —— Final teal CTA —— */
.final {
  background: var(--teal);
  color: #fff;
  text-align: center;
  padding: 64px 20px;
  width: 100%;
  max-width: none;
  margin: 0;
  border: 0;
  border-radius: 0;
  box-sizing: border-box;
}
.final h2 {
  color: #fff;
  font-size: clamp(1.55rem, 3vw, 2rem);
  margin: 0 0 12px;
}
.final p {
  color: rgba(255,255,255,.92);
  max-width: 40ch;
  margin: 0 auto 28px;
}
.final .btn-row { justify-content: center; }

.sr-only {
  position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
  overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0;
}

@media (max-width: 640px) {
  .hero .wrap { padding: 40px 0; }
  .btn-row { flex-direction: column; align-items: stretch; }
  .btn { width: 100%; }
  .programme-actions { flex-direction: column; }
}
`;

class ShortTermCoursesHub extends HTMLElement {
  static get observedAttributes() {
    return ["wa-url", "locale"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._onClick = this._onClick.bind(this);
    this._applyFullBleedCss = this._applyFullBleedCss.bind(this);
    this._restPainted = false;
  }

  connectedCallback() {
    this.render();
    this.shadowRoot.addEventListener("click", this._onClick);
    window.addEventListener("resize", this._applyFullBleedCss);
    window.addEventListener("orientationchange", this._applyFullBleedCss);
  }

  disconnectedCallback() {
    this.shadowRoot.removeEventListener("click", this._onClick);
    window.removeEventListener("resize", this._applyFullBleedCss);
    window.removeEventListener("orientationchange", this._applyFullBleedCss);
    const bleed = document.getElementById("short-term-courses-hub-page-bleed");
    if (bleed) bleed.remove();
  }

  attributeChangedCallback() {
    if (this.isConnected) this.render();
  }

  get waUrl() {
    return this.getAttribute("wa-url") || WA_DEFAULT;
  }

  get localeCode() {
    try {
      const href = String((window.location && (window.location.href || window.location.pathname)) || "");
      if (/\/zh(\/|$|\?|#)/i.test(href)) return "zh";
    } catch (e) {}
    try {
      const lang = String(
        (document.documentElement && (document.documentElement.getAttribute("lang") || document.documentElement.lang)) || ""
      ).toLowerCase();
      if (lang.startsWith("zh")) return "zh";
    } catch (e) {}
    try {
      const htmlHead = (document.documentElement && document.documentElement.innerHTML)
        ? document.documentElement.innerHTML.slice(0, 120000)
        : "";
      if (/userLanguage"\s*:\s*"zh"/i.test(htmlHead)) return "zh";
    } catch (e) {}
    const attr = String(this.getAttribute("locale") || "").toLowerCase();
    if (attr.startsWith("zh")) return "zh";
    if (attr.startsWith("en")) return "en";
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
    if (Array.isArray(obj)) return obj;
    return this.isEn ? obj.en : obj.zh;
  }

  _waPrefill(text) {
    return `${this.waUrl}?text=${encodeURIComponent(text)}`;
  }

  _injectPageBleedCss() {
    const id = "short-term-courses-hub-page-bleed";
    if (document.getElementById(id)) return;
    const style = document.createElement("style");
    style.id = id;
    style.textContent = `
      short-term-courses-hub {
        display: block !important;
        box-sizing: border-box !important;
        width: 100% !important;
        max-width: none !important;
        margin: 0 !important;
        padding: 0 !important;
        left: auto !important;
        border-radius: 0 !important;
        box-shadow: none !important;
      }
      #SITE_PAGES,
      #PAGES_CONTAINER,
      .wixui-page {
        min-height: 0 !important;
        padding-bottom: 0 !important;
        margin-bottom: 0 !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
      }
    `;
    document.head.appendChild(style);
  }

  _collapseTrailingGap() {
    try {
      let el = this.parentElement;
      for (let i = 0; i < 10 && el; i++) {
        el.style.setProperty("min-height", "0", "important");
        el.style.setProperty("padding-bottom", "0", "important");
        el.style.setProperty("margin-bottom", "0", "important");
        const id = el.id || "";
        const tag = (el.tagName || "").toLowerCase();
        if (tag === "main" || id === "SITE_PAGES" || id === "PAGES_CONTAINER" || id === "masterPage") break;
        el = el.parentElement;
      }

      const pages = document.getElementById("SITE_PAGES") || document.getElementById("PAGES_CONTAINER");
      const footer = document.getElementById("SITE_FOOTER");
      if (!pages || !footer) return;

      let node = this;
      while (node && node.parentElement && node.parentElement !== pages) {
        node = node.parentElement;
      }
      if (!node || node.parentElement !== pages) return;

      let sib = node.nextElementSibling;
      while (sib && sib !== footer) {
        const next = sib.nextElementSibling;
        const text = (sib.textContent || "").replace(/\s+/g, "");
        if (text.length < 8) {
          sib.style.setProperty("display", "none", "important");
          sib.style.setProperty("height", "0", "important");
          sib.style.setProperty("min-height", "0", "important");
          sib.style.setProperty("margin", "0", "important");
          sib.style.setProperty("padding", "0", "important");
        }
        sib = next;
      }
    } catch (e) {
      // ignore
    }
  }

  _applyFullBleedCss() {
    try {
      this._injectPageBleedCss();
      this.setAttribute("data-fullbleed", "1");
      this.style.removeProperty("left");
      this.style.removeProperty("right");
      this.style.removeProperty("transform");
      this.style.removeProperty("min-width");
      this.style.setProperty("position", "relative", "important");
      this.style.setProperty("width", "100%", "important");
      this.style.setProperty("max-width", "none", "important");
      this.style.setProperty("margin", "0", "important");
      this.style.setProperty("padding", "0", "important");
      this.style.setProperty("border-radius", "0", "important");
      this.style.setProperty("box-shadow", "none", "important");

      const pages = document.getElementById("SITE_PAGES") || document.getElementById("PAGES_CONTAINER");
      let el = this.parentElement;
      for (let i = 0; i < 12 && el; i++) {
        const tag = (el.tagName || "").toLowerCase();
        const id = el.id || "";
        if (tag === "body" || tag === "html" || id === "masterPage" || id === "SITE_HEADER") break;
        el.style.setProperty("width", "100%", "important");
        el.style.setProperty("max-width", "none", "important");
        el.style.setProperty("margin-left", "0", "important");
        el.style.setProperty("margin-right", "0", "important");
        el.style.setProperty("padding-left", "0", "important");
        el.style.setProperty("padding-right", "0", "important");
        el.style.setProperty("left", "0", "important");
        if (el === pages || id === "SITE_PAGES" || id === "PAGES_CONTAINER") break;
        el = el.parentElement;
      }
    } catch (e) {
      // ignore
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

  _onClick(event) {
    const target = event.target.closest("[data-action]");
    if (!target) return;
    const action = target.dataset.action;

    if (action === "scroll-programmes") {
      event.preventDefault();
      const sec = this.shadowRoot.getElementById("secProgrammes");
      if (sec) sec.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    if (action === "whatsapp") {
      this._emitCta("whatsapp", this.waUrl);
      return;
    }

    if (action === "programme" || action === "hub") {
      this._emitCta(action, target.getAttribute("href"));
    }
  }

  _programmeCardsHtml() {
    const t = (en, zh) => (this.isEn ? en : zh);
    return PROGRAMMES.map((p) => {
      const points = this.pick(p.points) || [];
      return `
      <article class="programme-card">
        <div class="programme-media">
          <img src="${p.image}" alt="${this.pick(p.imageAlt)}" loading="lazy" decoding="async" width="640" height="400" />
        </div>
        <div class="programme-body">
          <span class="meta">${this.pick(p.badge)}</span>
          <h3>${this.pick(p.name)}</h3>
          <p style="margin:0;color:var(--muted)">${this.pick(p.desc)}</p>
          <ul class="points">
            ${points.map((pt) => `<li>${pt}</li>`).join("")}
          </ul>
          <div class="programme-actions">
            <a class="btn btn-coral" data-action="programme" href="${this.path(p.hrefSlug)}">${t("View programme", "查看課程詳情")}</a>
            <a class="btn btn-outline-teal" data-action="whatsapp" href="${this._waPrefill(
              t(
                `Hi, I’d like to enquire about the ICAcademy ${p.name.en}.`,
                `你好，我想查詢ICAcademy${p.name.zh}。`
              )
            )}" target="_blank" rel="noopener noreferrer">${t("WhatsApp enquiry", "WhatsApp 查詢")}</a>
          </div>
        </div>
      </article>`;
    }).join("");
  }

  _faqHtml() {
    return FAQ.map(
      (item) => `
      <div class="faq-item">
        <p class="faq-q">Q : ${this.pick(item.q)}</p>
        <p class="faq-a">${this.pick(item.a)}</p>
      </div>`
    ).join("");
  }

  _exploreHtml() {
    return EXPLORE.map(
      (i) => `
      <a class="explore-card" data-action="hub" href="${this.path(i.hrefSlug)}">
        <h3>${this.pick(i.title)}</h3>
        <p>${this.pick(i.desc)}</p>
      </a>`
    ).join("");
  }

  _paintHero() {
    const t = (en, zh) => (this.isEn ? en : zh);
    const waPrefill = this._waPrefill(
      t(
        "Hi, I’d like to enquire about ICAcademy short-term courses (summer / festival programmes).",
        "你好，我想查詢ICAcademy短期課程（暑期／節日課程）。"
      )
    );
    this._t = t;
    this._waPrefillCached = waPrefill;

    this.shadowRoot.innerHTML = `
      <style>${STYLES}</style>
      <div class="hub">
        <section class="hero" aria-labelledby="hero-title">
          <div class="hero-bg" aria-hidden="true">
            <img
              src="${IMG.heroSm}"
              srcset="${IMG.heroSm} 800w, ${IMG.hero} 1200w, ${IMG.heroLg} 1600w"
              sizes="100vw"
              width="640"
              height="400"
              alt=""
              fetchpriority="high"
            />
          </div>
          <div class="wrap">
            <div class="hero-copy">
              <p class="hero-eyebrow">${t("Ho Man Tin • Holiday & festival art • Small groups", "何文田 • 假期及節日藝術 • 小班教學")}</p>
              <div class="hero-title-chip">
                <h1 id="hero-title">${t("Ho Man Tin ", "何文田")}<span class="accent">${t("Short-term", "短期")}</span>${t(" Art Courses", "藝術課程")}</h1>
                <p class="hero-sub">${t("Seasonal programmes beyond regular classes", "恆常班以外的節日及假期課程")}</p>
              </div>
              <p class="hero-lead">
                ${t(
                  "ICAcademy short-term courses run during school holidays and special festivals — Chinese New Year and Easter themed workshops, plus other seasonal programmes. A flexible way for children to try art, practise intensively and create seasonal artwork.",
                  "ICAcademy 短期課程於學校假期及特別節日期間開辦，包括新年及復活節等節日主題工作坊及其他季節課程，讓小朋友以靈活方式體驗藝術、集中練習，並創作節日作品。"
                )}
              </p>
              <div class="btn-row">
                <a class="btn btn-coral" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("WhatsApp enquiry", "WhatsApp 查詢")}</a>
                <button type="button" class="btn btn-outline-teal" data-action="scroll-programmes">${t("View programmes", "查看課程系列")}</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    `;
    this._applyFullBleedCss();
  }

  _paintRest() {
    if (this._restPainted) return;
    const hub = this.shadowRoot && this.shadowRoot.querySelector(".hub");
    if (!hub) return;
    this._restPainted = true;
    const t = this._t || ((en, zh) => (this.isEn ? en : zh));
    const waPrefill = this._waPrefillCached || this._waPrefill(
      t(
        "Hi, I’d like to enquire about ICAcademy short-term courses (summer / festival programmes).",
        "你好，我想查詢ICAcademy短期課程（暑期／節日課程）。"
      )
    );
    const galleryUrl = this.isEn
      ? "https://www.icacademy.com.hk/studentartwork"
      : "https://www.icacademy.com.hk/zh/studentartwork";

    hub.insertAdjacentHTML(
      "beforeend",
      `
        <section class="section" id="secProgrammes" aria-labelledby="programmes-title">
          <div class="wrap">
            <h2 class="section-title" id="programmes-title">${t("Short-term course series", "短期課程系列")}</h2>
            <p class="section-lead">
              ${t(
                "Featured festival workshops. Enrolment opens before each festival — message us to join the priority list.",
                "精選節日課程系列，開課前會公佈詳情。歡迎提早 WhatsApp 加入優先名單。"
              )}
            </p>
            <div class="programme-grid">
              ${this._programmeCardsHtml()}
            </div>
          </div>
        </section>
      `
    );
    this._paintRestMore(t, waPrefill, galleryUrl);
  }

  _paintRestMore(t, waPrefill, galleryUrl) {
    const hub = this.shadowRoot && this.shadowRoot.querySelector(".hub");
    if (!hub || hub.querySelector(".final")) return;
    hub.insertAdjacentHTML(
      "beforeend",
      `
        <section class="section section-soft" aria-labelledby="why-title">
          <div class="wrap">
            <div class="detail">
              <div>
                <h2 id="why-title">${t("Why choose a short-term course?", "點解選擇短期課程？")}</h2>
                <p class="detail-meta">${t("Holidays & festivals · Small-group teaching", "假期及節日開班｜小班指導")}</p>
                <p class="detail-lead">
                  ${t(
                    "Short-term courses fit around school breaks — a low-commitment way to experience ICAcademy teaching or deepen skills intensively.",
                    "短期課程遷就學校假期編排，無論想體驗 ICAcademy 教學，抑或集中加深技巧，都更具彈性。"
                  )}
                </p>
                <ul class="check-list">
                  ${WHY_SHORT_TERM.map((item) => `<li>${this.pick(item)}</li>`).join("")}
                </ul>
                <a class="btn btn-coral" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("Ask about short-term courses", "查詢短期課程")}</a>
              </div>
              <div class="detail-media">
                <img src="${IMG.detail}" alt="${t("ICAcademy student artwork example", "ICAcademy學生藝術作品示例")}" width="800" height="1000" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        <section class="section" aria-labelledby="steps-title">
          <div class="wrap">
            <h2 class="section-title" id="steps-title">${t("How to enrol", "報名方法")}</h2>
            <p class="section-lead">${t("Three simple steps — places are limited for each seasonal series.", "三個簡單步驟。每個季度系列名額有限。")}</p>
            <div class="steps-grid">
              ${STEPS.map(
                (s) => `
                <div class="step-card">
                  <h3>${this.pick(s.title)}</h3>
                  <p>${this.pick(s.desc)}</p>
                </div>`
              ).join("")}
            </div>
          </div>
        </section>

        <section class="section section-soft" aria-labelledby="gallery-title">
          <div class="wrap">
            <h2 class="section-title" id="gallery-title">${t("See artwork by our students", "看看學生的創作")}</h2>
            <p class="section-lead">${t("Thumbnails from published student work. Visit the gallery for more.", "以下為站內已刊出作品縮圖。想看更多，可前往學員作品頁。")}</p>
            <div class="gallery-grid">
              <figure><img src="${IMG.gallery1}" alt="${t("ICAcademy young children’s creative painting", "ICAcademy幼兒創意繪畫作品")}" loading="lazy" /><figcaption>${t("Student artwork", "學員作品")}</figcaption></figure>
              <figure><img src="${IMG.gallery2}" alt="${t("ICAcademy student comic character design", "ICAcademy學生漫畫角色設計作品")}" loading="lazy" /><figcaption>${t("Student artwork", "學員作品")}</figcaption></figure>
              <figure><img src="${IMG.gallery3}" alt="${t("Ho Man Tin children’s sketching class work", "何文田兒童素描課程學生作品")}" loading="lazy" /><figcaption>${t("Student artwork", "學員作品")}</figcaption></figure>
              <figure><img src="${IMG.gallery4}" alt="${t("ICAcademy classroom atmosphere", "ICAcademy課堂創作氣氛")}" loading="lazy" /><figcaption>${t("Class atmosphere", "課堂氣氛")}</figcaption></figure>
            </div>
            <div class="center-actions">
              <a class="btn btn-outline-teal" data-action="hub" href="${galleryUrl}">${t("View more student artwork", "查看更多學員作品")}</a>
            </div>
          </div>
        </section>

        <section class="section" aria-labelledby="faq-title">
          <div class="wrap">
            <h2 class="section-title" id="faq-title">${t("FAQ", "常見問題")}</h2>
            <div class="faq-list">
              ${this._faqHtml()}
            </div>
          </div>
        </section>

        <section class="section section-soft" aria-labelledby="explore-title">
          <div class="wrap">
            <h2 class="section-title" id="explore-title">${t("Explore more", "探索更多")}</h2>
            <p class="section-lead">${t("Looking for weekly classes instead? Browse our regular course hub.", "想睇每週恆常班？可以到課程總覽。")}</p>
            <div class="explore-grid">
              ${this._exploreHtml()}
            </div>
          </div>
        </section>

        <section class="final" aria-labelledby="final-title">
          <h2 id="final-title">${t("Enquire about short-term courses", "立即查詢短期課程")}</h2>
          <p>${t("Seasonal places are limited. WhatsApp us for the latest timetable, fees and reservations.", "季節性名額有限，歡迎 WhatsApp 查詢最新時間表、收費及留位。")}</p>
          <div class="btn-row">
            <a class="btn btn-coral" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("WhatsApp enquiry", "WhatsApp 查詢")}</a>
            <a class="btn btn-outline-white" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("Join the priority list", "加入優先名單")}</a>
          </div>
        </section>
      `
    );
    this._collapseTrailingGap();
  }

  render() {
    this._restPainted = false;
    this._paintHero();
    this._paintRest();
  }
}

customElements.define("short-term-courses-hub", ShortTermCoursesHub);
