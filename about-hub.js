/**
 * IC Academy About Us – Custom Element
 * Tag name: about-hub
 * Version: 2026-09-01-v2 (smaller mobile type)
 * Design system: matches home-hub / trial-class-hub (coral / teal / navy)
 * Full-bleed clears Wix mesh inset (left:20px / right:-20px) so mobile content is not shifted.
 * Routes: /about-us (EN) | /zh/about-us (ZH)
 * Locale via URL /zh, html lang, or attribute locale="en"|"zh" (default en).
 */
const WA_DEFAULT = "https://wa.me/85265808022";

function mediaUrl(id, w, h, q = 75) {
  return `https://static.wixstatic.com/media/${id}/v1/fill/w_${w},h_${h},al_c,q_${q},enc_auto/${id}`;
}

const IMG = {
  hero: mediaUrl("4bd672_c6a608041a75441981a76ceb10669869~mv2.jpg", 1600, 900, 75),
  portrait: mediaUrl("4bd672_d9150cd2fe61429984de14e216a44d2a~mv2.png", 800, 1200, 80),
  studio1: mediaUrl("4bd672_b7ff695e1784476d89a236f217c05c35~mv2.jpg", 960, 720, 75),
  studio2: mediaUrl("4bd672_c8c74caffd6e4f1791d7ede7102452a8~mv2.jpg", 800, 1000, 75),
  class: mediaUrl("b98cc9_d807c53a36a24d0ea19878291b1c0d2e~mv2.jpg", 800, 1000, 75),
  kids: mediaUrl("b98cc9_9dc8b25109994d1582cf45ab4cba461f~mv2.jpg", 1200, 800, 75),
};

const STATS = [
  { value: "2003", label: { en: "Founded", zh: "創立年份" } },
  { value: "20+", label: { en: "Years of teaching", zh: "年教學經驗" } },
  { value: "3–16", label: { en: "Ages we teach", zh: "適合年齡" } },
  { value: "6", label: { en: "Max students / class", zh: "每班上限人數" } },
];

const BELIEFS = [
  {
    title: { en: "Observe with care", zh: "敏銳觀察" },
    body: {
      en: "Art education trains children to notice the world around them — with sensitivity and careful observation.",
      zh: "透過藝術教育，孩子對身邊事物建立敏銳觸覺及慎密觀察。",
    },
  },
  {
    title: { en: "Imagine, then create", zh: "發揮想象" },
    body: {
      en: "Imagination grows into creativity, and creativity into the courage to solve problems.",
      zh: "發揮想象、增加創意，並勇於解難。",
    },
  },
  {
    title: { en: "Learn for life", zh: "自發學習" },
    body: {
      en: "The goal is self-motivated learning that stays with them — not a one-off finished picture.",
      zh: "最終學會自發學習，終生受用。",
    },
  },
  {
    title: { en: "Confidence from within", zh: "由內而外的自信" },
    body: {
      en: "We listen to every parent and attend to each child’s unique needs, so success feels earned and visible.",
      zh: "用心聆聽每一位家長，關注每一位學生的獨特需要，讓孩子累積成功經驗，感受從內而外發出的自信。",
    },
  },
];

const SAFETY = [
  {
    title: { en: "Hygiene", zh: "衛生慣例" },
    body: {
      en: "Regular sanitation so children and staff share a clean studio.",
      zh: "定期清潔與衛生慣例，讓學生與教職員共用整潔空間。",
    },
  },
  {
    title: { en: "Facilities", zh: "設施維護" },
    body: {
      en: "Studio furniture, tools and materials are maintained for everyday class use.",
      zh: "畫室設施、工具與教材持續保養，配合日常課堂使用。",
    },
  },
  {
    title: { en: "Activity safety", zh: "活動安全" },
    body: {
      en: "Safety guidelines apply in class and on any outing.",
      zh: "所有課堂及外出活動均遵守安全指引。",
    },
  },
];

const TEAM_POINTS = [
  {
    title: { en: "International training", zh: "國際師資" },
    body: {
      en: "Teachers graduated from universities in the UK, US, Hong Kong, Taiwan and Macau.",
      zh: "老師畢業於英國、美國、香港、台灣、澳門等大學。",
    },
  },
  {
    title: { en: "Languages in class", zh: "多語授課" },
    body: {
      en: "Besides Cantonese, teachers can teach in fluent English and Putonghua.",
      zh: "除廣東話外，也能以流利英語、普通話授課。",
    },
  },
  {
    title: { en: "Practising artists", zh: "藝術家團隊" },
    body: {
      en: "The team includes comic artists, ink-painting tutors, and artists collected by the Legislative Council, Oxford University and private collectors.",
      zh: "團隊包括漫畫家、水墨畫導師，以及作品被立法會、英國牛津大學及各地收藏家收藏的藝術家。",
    },
  },
];

const STUDIO_PHOTOS = [
  { src: IMG.studio1, alt: { en: "IC Academy Ho Man Tin studio", zh: "IC Academy 何文田畫室" } },
  { src: IMG.studio2, alt: { en: "IC Academy classroom environment", zh: "IC Academy 課堂環境" } },
  { src: IMG.class, alt: { en: "Students creating artwork in class", zh: "學生於課堂創作" } },
  { src: IMG.kids, alt: { en: "Children’s art class at IC Academy", zh: "IC Academy 兒童美術課堂" } },
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
  --radius: 18px;
  --shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  --font: "PingFang TC", "Microsoft JhengHei", "Noto Sans TC", "Segoe UI", sans-serif;
  color: var(--ink);
  font-family: var(--font);
  line-height: 1.7;
  font-size: 16px;
  background: var(--bg);
  overflow-x: visible;
  height: auto !important;
  min-height: 0 !important;
}
:host([data-fullbleed="1"]) {
  width: 100% !important;
  max-width: 100% !important;
  margin: 0 !important;
  left: 0 !important;
  right: 0 !important;
  inset-inline-start: 0 !important;
  inset-inline-end: 0 !important;
  border-radius: 0 !important;
  box-shadow: none !important;
}
*, *::before, *::after { box-sizing: border-box; }
a { color: inherit; }
img { max-width: 100%; display: block; }
.hub { width: 100%; max-width: 100%; min-width: 0; margin: 0; padding: 0; overflow-x: visible; }
.wrap { width: min(1200px, calc(100% - 48px)); max-width: 1200px; margin: 0 auto; }
.section { padding: 64px 0; background: var(--bg); width: 100%; }
.section-soft { background: var(--bg-soft); }
.kicker {
  color: var(--teal);
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-size: 0.82rem;
  margin: 0 0 10px;
  text-align: center;
}
.section-title {
  text-align: center;
  font-size: clamp(1.55rem, 3vw, 2rem);
  font-weight: 800;
  margin: 0 0 12px;
}
.section-lead {
  text-align: center;
  color: var(--muted);
  max-width: 52ch;
  margin: 0 auto 36px;
  font-size: 1.02rem;
}
h1, h2, h3 { line-height: 1.28; margin: 0 0 12px; font-weight: 800; }
.btn-row { display: flex; flex-wrap: wrap; gap: 14px; }
.btn {
  appearance: none; border: 0; border-radius: 999px; min-height: 50px;
  padding: 12px 28px; font: inherit; font-weight: 700; cursor: pointer;
  text-decoration: none; display: inline-flex; align-items: center; justify-content: center;
  transition: transform .15s ease, background .15s ease;
}
.btn:hover { transform: translateY(-1px); }
.btn:focus-visible { outline: 3px solid rgba(0,169,183,.35); outline-offset: 3px; }
.btn-navy { background: var(--navy); color: #fff; }
.btn-navy:hover { background: #0f1f36; }
.btn-coral { background: var(--coral); color: #fff; }
.btn-coral:hover { background: var(--coral-deep); }
.btn-outline-navy { background: #fff; color: var(--navy); border: 2px solid var(--navy); }
.btn-outline-white { background: transparent; color: #fff; border: 2px solid #fff; }

.hero {
  position: relative; width: 100%;
  min-height: clamp(480px, 62vw, 620px);
  display: flex; align-items: center; overflow: hidden; background: #f3f3f3;
}
.hero img.hero-bg {
  position: absolute; inset: 0; width: 100%; height: 100%;
  object-fit: cover; object-position: center;
}
.hero::after {
  content: ""; position: absolute; inset: 0;
  background: linear-gradient(90deg, rgba(255,255,255,.94) 0%, rgba(255,255,255,.82) 42%, rgba(255,255,255,.28) 74%, rgba(255,255,255,.12) 100%);
}
.hero .wrap { position: relative; z-index: 1; padding: 72px 0 72px; }
.hero-eyebrow { margin: 0 0 16px; color: var(--muted); font-weight: 700; font-size: 0.98rem; }
.hero-title-chip {
  display: block; background: var(--title-chip); border-radius: 22px;
  padding: 20px 24px 18px; margin: 0 0 16px; max-width: min(680px, 100%);
}
.hero-title-chip h1 {
  margin: 0; font-size: clamp(1.55rem, 3.6vw, 2.35rem); line-height: 1.32; word-break: keep-all;
}
.hero-sub { margin: 8px 0 0; font-size: clamp(1.15rem, 2.4vw, 1.55rem); font-weight: 800; color: var(--navy); }
.hero-lead { margin: 0 0 24px; max-width: 40em; color: var(--muted); }

.stats {
  display: grid; gap: 12px; margin-top: -36px; position: relative; z-index: 2;
  padding: 0 0 24px;
}
@media (min-width: 720px) { .stats { grid-template-columns: repeat(4, 1fr); } }
.stat {
  background: #fff; border: 1px solid var(--line); border-radius: 16px;
  padding: 18px 16px; text-align: center; box-shadow: var(--shadow);
}
.stat strong { display: block; font-size: 1.55rem; color: var(--teal-deep); }
.stat span { color: var(--muted); font-size: 0.9rem; font-weight: 600; }

.story {
  display: grid; gap: 36px; align-items: center;
}
@media (min-width: 900px) { .story { grid-template-columns: 1.05fr 0.95fr; gap: 48px; } }
.story-copy h2 { text-align: left; font-size: clamp(1.4rem, 2.6vw, 1.85rem); }
.story-copy p { color: var(--muted); margin: 0 0 14px; }
.story-media {
  border-radius: 22px; overflow: hidden; box-shadow: var(--shadow); background: #eee;
  aspect-ratio: 4 / 5; max-height: 520px;
}
.story-media img { width: 100%; height: 100%; object-fit: cover; }

.belief-grid { display: grid; gap: 16px; }
@media (min-width: 800px) { .belief-grid { grid-template-columns: repeat(2, 1fr); } }
.belief {
  background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius);
  padding: 22px 22px 20px; box-shadow: var(--shadow);
}
.belief h3 { margin: 0 0 8px; color: var(--navy); }
.belief p { margin: 0; color: var(--muted); }

.team-grid { display: grid; gap: 16px; }
@media (min-width: 800px) { .team-grid { grid-template-columns: repeat(3, 1fr); } }
.team-card {
  background: #fff; border: 1px solid var(--line); border-radius: 16px; padding: 20px;
}
.team-card h3 { margin: 0 0 8px; font-size: 1.05rem; color: var(--teal-deep); }
.team-card p { margin: 0; color: var(--muted); }

.safety-grid { display: grid; gap: 16px; }
@media (min-width: 800px) { .safety-grid { grid-template-columns: repeat(3, 1fr); } }
.safety-card {
  background: var(--coral-soft); border-radius: 16px; padding: 22px 20px;
}
.safety-card h3 { margin: 0 0 8px; }
.safety-card p { margin: 0; color: var(--muted); }

.env-grid {
  display: grid; gap: 12px;
  grid-template-columns: 1fr 1fr;
}
@media (min-width: 900px) { .env-grid { grid-template-columns: repeat(4, 1fr); } }
.env-grid figure {
  margin: 0; border-radius: 16px; overflow: hidden; background: #eee;
  aspect-ratio: 4 / 5;
}
.env-grid img { width: 100%; height: 100%; object-fit: cover; }

.quote-block {
  max-width: 40em; margin: 36px auto 0; text-align: center;
  background: #fff; border-radius: 20px; padding: 28px 24px; border: 1px solid var(--line);
}
.quote-block p { margin: 0; font-size: 1.12rem; font-weight: 700; color: var(--navy); }
.quote-block cite { display: block; margin-top: 10px; font-style: normal; color: var(--muted); font-weight: 600; }

.find-grid { display: grid; gap: 16px; }
@media (min-width: 800px) { .find-grid { grid-template-columns: repeat(3, 1fr); } }
.find-card {
  background: #fff; border: 1px solid var(--line); border-radius: 16px; padding: 20px;
}
.find-card h3 { margin: 0 0 8px; font-size: 1.05rem; color: var(--teal-deep); }
.find-card p, .find-card ul { margin: 0; color: var(--muted); }
.find-card ul { padding-left: 1.1rem; }

.trial {
  background: var(--coral-soft); border-radius: 28px;
  padding: clamp(32px, 6vw, 52px) clamp(22px, 5vw, 48px); text-align: center;
}
.trial h2 { margin: 0 0 14px; font-size: clamp(1.45rem, 3vw, 1.9rem); }
.trial p { margin: 0 auto 22px; max-width: 46ch; color: var(--muted); }
.trial .btn-row { justify-content: center; }

.final {
  background: var(--teal); color: #fff; text-align: center;
  padding: 64px 20px; width: 100%; margin: 0; border: 0; border-radius: 0;
}
.final h2 { color: #fff; font-size: clamp(1.55rem, 3vw, 2rem); margin: 0 0 12px; }
.final p { color: rgba(255,255,255,.92); max-width: 42ch; margin: 0 auto 28px; }
.final .btn-row { justify-content: center; }

@media (max-width: 640px) {
  :host { font-size: 13px; }
  h1, .hero-title-chip h1, .hero h1 { font-size: 1.42em !important; line-height: 1.35; }
  h2, .section-title, .final h2, .detail h2, .trial h2, .form-card h2, .info-card h2 { font-size: 1.24em !important; }
  h3, .faq-q, .card-body h3, .path-step h3, .method h3 { font-size: 1.02em !important; }
  .hero-sub { font-size: 1.05em !important; }
  p, li, .section-lead, .hero-lead, .faq-a, .card-body p, .path-step p, .final p, .detail-lead, .hero-points { font-size: 1em !important; }
  .hero-eyebrow, .kicker, .crumbs, .trust-item span { font-size: 0.88em !important; }
  .btn { font-size: 1em !important; }
  .hero .wrap { padding: 40px 0 56px; }
  .btn-row { flex-direction: column; align-items: stretch; }
  .btn { width: 100%; }
  .wrap { width: min(1200px, calc(100% - 32px)); }
}
`;

class AboutHub extends HTMLElement {
  static get observedAttributes() {
    return ["wa-url", "locale"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._onClick = this._onClick.bind(this);
    this._applyFullBleedCss = this._applyFullBleedCss.bind(this);
    this._syncHeight = this._syncHeight.bind(this);
    this._ro = null;
  }

  connectedCallback() {
    this.render();
    this.shadowRoot.addEventListener("click", this._onClick);
    window.addEventListener("resize", this._applyFullBleedCss);
    window.addEventListener("orientationchange", this._applyFullBleedCss);
    window.setTimeout(() => this._applyFullBleedCss(), 50);
    window.setTimeout(() => this._applyFullBleedCss(), 400);
    window.setTimeout(() => this._applyFullBleedCss(), 1200);
  }

  disconnectedCallback() {
    this.shadowRoot.removeEventListener("click", this._onClick);
    window.removeEventListener("resize", this._applyFullBleedCss);
    window.removeEventListener("orientationchange", this._applyFullBleedCss);
    if (this._ro) {
      this._ro.disconnect();
      this._ro = null;
    }
    const bleed = document.getElementById("about-hub-page-bleed");
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
    return this.isEn ? obj.en : obj.zh;
  }

  _waPrefill(text) {
    return `${this.waUrl}?text=${encodeURIComponent(text)}`;
  }

  _injectPageBleedCss() {
    const id = "about-hub-page-bleed";
    if (document.getElementById(id)) return;
    const style = document.createElement("style");
    style.id = id;
    style.textContent = `
      /* Hide Wix header skin divider and 1px header/page gap */
      #SITE_HEADER {
        border: 0 !important;
        border-bottom: 0 !important;
        box-shadow: none !important;
      }
      #SITE_HEADER > div:first-child,
      #SITE_HEADER > div:first-child * {
        background-image: none !important;
        border-bottom: 0 !important;
        box-shadow: none !important;
      }
      #PAGES_CONTAINER,
      #SITE_PAGES,
      #masterPage {
        border-top: 0 !important;
        box-shadow: none !important;
      }
      #PAGES_CONTAINER,
      #SITE_PAGES {
        margin-top: -1px !important;
      }
      html, body {
        overflow-x: hidden !important;
      }
      about-hub {
        display: block !important;
        box-sizing: border-box !important;
        width: 100% !important;
        max-width: none !important;
        height: auto !important;
        min-height: 0 !important;
        margin: 0 !important;
        padding: 0 !important;
        left: 0 !important;
        right: 0 !important;
        inset-inline-start: 0 !important;
        inset-inline-end: 0 !important;
        border-radius: 0 !important;
        box-shadow: none !important;
      }
      #SITE_PAGES, #PAGES_CONTAINER, .wixui-page {
        min-height: 0 !important;
        padding-bottom: 0 !important;
        margin-bottom: 0 !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
        overflow-x: hidden !important;
      }
      #SITE_FOOTER { margin-top: 0 !important; }
    `;
    document.head.appendChild(style);
  }

  _collapseTrailingGap() {
    try {
      this.style.setProperty("height", "auto", "important");
      this.style.setProperty("min-height", "0", "important");
      let el = this.parentElement;
      for (let i = 0; i < 10 && el; i++) {
        el.style.setProperty("min-height", "0", "important");
        el.style.setProperty("height", "auto", "important");
        el.style.setProperty("padding-bottom", "0", "important");
        el.style.setProperty("margin-bottom", "0", "important");
        const id = el.id || "";
        const tag = (el.tagName || "").toLowerCase();
        if (tag === "main" || id === "SITE_PAGES" || id === "PAGES_CONTAINER" || id === "masterPage") break;
        el = el.parentElement;
      }
      const pages = document.getElementById("SITE_PAGES") || document.getElementById("PAGES_CONTAINER");
      const footer = document.getElementById("SITE_FOOTER");
      if (footer) footer.style.setProperty("margin-top", "0", "important");
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
    } catch (e) {}
  }

  _resetWixInset(el) {
    if (!el || !el.style) return;
    el.style.setProperty("left", "0", "important");
    el.style.setProperty("right", "0", "important");
    el.style.setProperty("inset", "0", "important");
    el.style.setProperty("inset-inline-start", "0", "important");
    el.style.setProperty("inset-inline-end", "0", "important");
    el.style.setProperty("width", "100%", "important");
    el.style.setProperty("max-width", "none", "important");
    el.style.setProperty("margin-left", "0", "important");
    el.style.setProperty("margin-right", "0", "important");
    el.style.setProperty("padding-left", "0", "important");
    el.style.setProperty("padding-right", "0", "important");
  }

  _applyFullBleedCss() {
    try {
      this._injectPageBleedCss();
      this.setAttribute("data-fullbleed", "1");
      this.style.setProperty("position", "relative", "important");
      this.style.setProperty("padding", "0", "important");
      this.style.setProperty("height", "auto", "important");
      this.style.setProperty("min-height", "0", "important");
      this.style.setProperty("margin", "0", "important");
      this._resetWixInset(this);

      const pages = document.getElementById("SITE_PAGES") || document.getElementById("PAGES_CONTAINER");
      let el = this.parentElement;
      for (let i = 0; i < 12 && el; i++) {
        const tag = (el.tagName || "").toLowerCase();
        const id = el.id || "";
        if (tag === "body" || tag === "html" || id === "masterPage" || id === "SITE_HEADER") break;
        this._resetWixInset(el);
        el.style.setProperty("min-height", "0", "important");
        if (el !== pages && id !== "SITE_PAGES" && id !== "PAGES_CONTAINER") {
          el.style.setProperty("height", "auto", "important");
        }
        if (el === pages || id === "SITE_PAGES" || id === "PAGES_CONTAINER") break;
        el = el.parentElement;
      }

      const vw = document.documentElement.clientWidth || window.innerWidth || 0;
      const rect = this.getBoundingClientRect();
      if (vw && Math.abs(rect.left) > 1) {
        this.style.setProperty("width", `${vw}px`, "important");
        this.style.setProperty("max-width", `${vw}px`, "important");
        this.style.setProperty("margin-left", `${-rect.left}px`, "important");
      }
    } catch (e) {}
    this._collapseTrailingGap();
  }

  _observeHeight() {
    const hub = this.shadowRoot && this.shadowRoot.querySelector(".hub");
    if (!hub) return;
    if (this._ro) this._ro.disconnect();
    this._ro = new ResizeObserver(this._syncHeight);
    this._ro.observe(hub);
    this._syncHeight();
  }

  _syncHeight() {
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

  _onClick(event) {
    const target = event.target.closest("[data-action]");
    if (!target) return;
    const action = target.dataset.action;
    if (action === "whatsapp") {
      this._emitCta("whatsapp", this.waUrl);
      return;
    }
    if (action === "hub" || action === "course") {
      this._emitCta(action, target.getAttribute("href"));
    }
  }

  render() {
    const t = (en, zh) => (this.isEn ? en : zh);
    const waText = t(
      "Hello IC Academy, I would like to know more about the studio and book a trial class.",
      "你好 IC Academy，我想了解畫室，並為小朋友預約試堂。"
    );
    const waPrefill = this._waPrefill(waText);
    const trialHref = this.path("/homantin-children-art-trial");
    const courseHref = this.path("/course-hub");

    this.shadowRoot.innerHTML = `
      <style>${STYLES}</style>
      <div class="hub">
        <section class="hero" aria-label="${t("About IC Academy", "關於 IC Academy")}">
          <img class="hero-bg" src="${IMG.hero}" alt="${t("IC Academy Ho Man Tin studio", "IC Academy 何文田畫室")}" width="1600" height="900" fetchpriority="high" />
          <div class="wrap">
            <p class="hero-eyebrow">${t("Ho Man Tin · Waterloo Road · Since 2003", "何文田 · 窩打老道 · 自 2003")}</p>
            <div class="hero-title-chip">
              <h1>${t("About Us", "關於我們")}</h1>
              <p class="hero-sub">${t("Experience the Joy of Color", "享受彩色的快樂時光")}</p>
            </div>
            <p class="hero-lead">${t(
              "IC Academy is an art studio on Waterloo Road, Ho Man Tin, offering drawing, clay and creative art courses for students aged 3–16.",
              "IC Academy 是位於窩打老道的藝術學院，專為 3–16 歲同學提供繪畫、黏土與藝術創作課程。"
            )}</p>
            <div class="btn-row">
              <a class="btn btn-navy" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("Book a trial class", "預約試堂")}</a>
              <a class="btn btn-outline-navy" data-action="hub" href="${courseHref}">${t("Explore programmes", "了解課程")}</a>
            </div>
          </div>
        </section>

        <div class="wrap">
          <div class="stats">
            ${STATS.map(
              (s) => `
              <div class="stat">
                <strong>${s.value}</strong>
                <span>${this.pick(s.label)}</span>
              </div>`
            ).join("")}
          </div>
        </div>

        <section class="section" id="why">
          <div class="wrap">
            <p class="kicker">${t("Why us", "為什麼選擇我們")}</p>
            <div class="story">
              <div class="story-copy">
                <h2>${t("From Intelligent Creative Station to IC Academy", "由 Intelligent Creative Station 到 IC Academy")}</h2>
                <p>${t(
                  "Established in 2003 and previously known as Intelligent Creative Station, we renamed the studio IC Academy in 2022 to raise professional standards and broaden what we offer.",
                  "IC Academy 於 2003 年成立，前身為 Intelligent Creative Station。為進一步提升專業水平及拓展業務範疇，我們於 2022 年正式更名。"
                )}</p>
                <p>${t(
                  "Our offerings include painting, clay modelling and artistic creation. Over more than 20 years we have used art education to support children’s all-round development.",
                  "課程包括各類繪畫、黏土及藝術創作。過去 20 年，我們透過藝術教育啓發兒童的多元發展。"
                )}</p>
                <p>${t(
                  "We believe artistic sensitivity is innate. Nurturing it does more than unlock artistic potential — it also builds creativity and confidence in other areas of learning.",
                  "我們相信藝術觸覺是與生俱來的。後天培養不單讓藝術潛能得以發揮，更能激發孩子在其他學習領域上變得更有創意、充滿自信。"
                )}</p>
              </div>
              <figure class="story-media">
                <img src="${IMG.portrait}" alt="${t("Children creating art at IC Academy", "孩子於 IC Academy 創作")}" width="800" height="1200" loading="lazy" />
              </figure>
            </div>
          </div>
        </section>

        <section class="section section-soft">
          <div class="wrap">
            <p class="kicker">${t("What we believe", "我們的信念")}</p>
            <h2 class="section-title">${t("Grow with us — and shine from within", "與我們一同成長，發出自信的光芒")}</h2>
            <p class="section-lead">${t(
              "Parents who enjoy nurturing their children are welcome here. We walk with each family so children accumulate real success — and feel confidence that comes from the inside out.",
              "期望喜歡培養孩子的家長來到這裡，讓孩子與我們一同成長並累積成功的經驗，感受能從內而外發出自信的光芒。"
            )}</p>
            <div class="belief-grid">
              ${BELIEFS.map(
                (item) => `
                <article class="belief">
                  <h3>${this.pick(item.title)}</h3>
                  <p>${this.pick(item.body)}</p>
                </article>`
              ).join("")}
            </div>
          </div>
        </section>

        <section class="section">
          <div class="wrap">
            <p class="kicker">${t("Our team", "我們的團隊")}</p>
            <h2 class="section-title">${t("Teachers who practise, and who teach", "既是導師，也是藝術家")}</h2>
            <p class="section-lead">${t(
              "About 85% of our teachers have more than five years of teaching experience.",
              "約 85% 的老師具備 5 年以上教學經驗。"
            )}</p>
            <div class="team-grid">
              ${TEAM_POINTS.map(
                (item) => `
                <article class="team-card">
                  <h3>${this.pick(item.title)}</h3>
                  <p>${this.pick(item.body)}</p>
                </article>`
              ).join("")}
            </div>
          </div>
        </section>

        <section class="section section-soft" id="health">
          <div class="wrap">
            <p class="kicker">${t("Health & safety", "健康與安全")}</p>
            <h2 class="section-title">${t("A safe studio for every child and teacher", "為學生與教職員提供安全健康的環境")}</h2>
            <p class="section-lead">${t(
              "We follow clear health and safety protocols so everyone in our care is looked after — in class and on outings.",
              "我們遵循嚴格的健康與安全協議，以確保照顧對象的健康。這包括定期的衛生慣例、設施維護，以及在所有活動和外出中遵守安全指引。"
            )}</p>
            <div class="safety-grid">
              ${SAFETY.map(
                (item) => `
                <article class="safety-card">
                  <h3>${this.pick(item.title)}</h3>
                  <p>${this.pick(item.body)}</p>
                </article>`
              ).join("")}
            </div>
          </div>
        </section>

        <section class="section" id="environment">
          <div class="wrap">
            <p class="kicker">${t("Studio environment", "中心環境")}</p>
            <h2 class="section-title">${t("A bright, calm place to make art", "明亮、安心的創作空間")}</h2>
            <p class="section-lead">${t(
              "Small groups, professional materials included, and a studio near Pui Ching — a five-minute walk after school.",
              "小班教學、專業教材已包含於學費，畫室位於培正附近，放學步行約 5 分鐘。"
            )}</p>
            <div class="env-grid">
              ${STUDIO_PHOTOS.map(
                (photo) => `
                <figure>
                  <img src="${photo.src}" alt="${this.pick(photo.alt)}" loading="lazy" width="800" height="1000" />
                </figure>`
              ).join("")}
            </div>
            <blockquote class="quote-block">
              <p>${t(
                "“Train up a child in the way he should go; even when he is old he will not depart from it.”",
                "「教養孩童，使他走當行的道，就是到老他也不偏離。」"
              )}</p>
              <cite>${t("Proverbs 22:6", "箴言 22:6")}</cite>
            </blockquote>
          </div>
        </section>

        <section class="section section-soft">
          <div class="wrap">
            <p class="kicker">${t("Find us", "我們在哪裡")}</p>
            <h2 class="section-title">${t("Ho Man Tin · near Pui Ching", "何文田 · 培正附近")}</h2>
            <div class="find-grid">
              <article class="find-card">
                <h3>${t("Address", "地址")}</h3>
                <p>${t(
                  "Ground Floor Shop 3, 79F Waterloo Road, Ho Man Tin (near Pui Ching Road).",
                  "九龍窩打老道79F地下3號鋪（何文田培正道附近）。"
                )}</p>
              </article>
              <article class="find-card">
                <h3>${t("Who we serve", "服務對象")}</h3>
                <p>${t(
                  "Students aged 3–16: first art experiences through to secondary Portfolio.",
                  "3–16 歲同學：由幼兒藝術啟蒙至升中 Portfolio。"
                )}</p>
              </article>
              <article class="find-card">
                <h3>${t("Class size", "班額")}</h3>
                <p>${t(
                  "Maximum 6 per class (preparatory class for ages 3–5: maximum 4).",
                  "課程上限 6 人（3–5 歲視藝技巧預備班不多於 4 人）。"
                )}</p>
              </article>
            </div>
            <div class="trial" style="margin-top:36px">
              <h2>${t("Come and see the studio", "歡迎親臨畫室")}</h2>
              <p>${t(
                "Book an HK$100 trial. Teachers will observe your child and suggest a suitable class.",
                "預約 HK$100 試堂，老師會觀察孩子的創作狀態，並建議合適課程。"
              )}</p>
              <div class="btn-row">
                <a class="btn btn-navy" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("WhatsApp us", "WhatsApp 查詢")}</a>
                <a class="btn btn-outline-navy" data-action="hub" href="${trialHref}">${t("Trial class details", "了解試堂詳情")}</a>
              </div>
            </div>
          </div>
        </section>

        <section class="final">
          <h2>${t("Grow with IC Academy", "與 IC Academy 一同成長")}</h2>
          <p>${t(
            "WhatsApp us with your child’s age and preferred times. We will help match a class.",
            "WhatsApp 告訴我們小朋友年齡及方便時間，我們會協助配對合適班別。"
          )}</p>
          <div class="btn-row">
            <a class="btn btn-coral" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("WhatsApp enquiry", "WhatsApp 查詢")}</a>
            <a class="btn btn-outline-white" data-action="hub" href="${courseHref}">${t("View courses", "查看課程")}</a>
          </div>
        </section>
      </div>
    `;

    this._applyFullBleedCss();
    this._observeHeight();
    this._collapseTrailingGap();
  }
}

customElements.define("about-hub", AboutHub);
