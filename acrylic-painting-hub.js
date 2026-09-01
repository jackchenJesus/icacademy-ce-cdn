/**
 * ICAcademy Acrylic Painting Class — course landing (not a hub)
 * Tag name: acrylic-painting-hub
 * Version: 2026-08-16-v1 (smaller mobile type)
 *
 * Parent silo hub: Drawing & Painting
 * Canonical:
 *   EN: /course/drawing-and-painting/acrylic-painting-class
 *   ZH: /zh/course/drawing-and-painting/acrylic-painting-class
 */
const WA_DEFAULT = "https://wa.me/85265808022";

function mediaUrl(id, w, h, q = 75) {
  return `https://static.wixstatic.com/media/${id}/v1/fill/w_${w},h_${h},al_c,q_${q},enc_auto/${id}`;
}

const IMG = {
  hero: mediaUrl("b98cc9_4207ae71d0a44db99d86eeadc8e54f33~mv2.jpeg", 1600, 1000),
  gallery1: mediaUrl("b98cc9_4207ae71d0a44db99d86eeadc8e54f33~mv2.jpeg", 800, 800),
  gallery2: mediaUrl("52f9c8_ceb5f3d8e3894373b80e0ec12a9e03a1~mv2.jpg", 800, 800),
  gallery3: mediaUrl("52f9c8_7ac3b5f599f74cf58c9702404485e283~mv2.jpg", 800, 800),
  gallery4: mediaUrl("b98cc9_938e779278dc4be38ad8c06a48102fc1~mv2.jpg", 800, 800),
  detail: mediaUrl("52f9c8_ceb5f3d8e3894373b80e0ec12a9e03a1~mv2.jpg", 800, 1000),
};

const WHY = [
  {
    title: { en: "Core acrylic techniques", zh: "掌握塑膠彩核心技巧" },
    desc: {
      en: "From mixing colour and controlling thickness to layering and brushwork.",
      zh: "由調色、厚薄控制、疊色到筆觸，循序掌握 Acrylic Painting 的基本功。",
    },
  },
  {
    title: { en: "Finish a complete painting", zh: "完成個人完整作品" },
    desc: {
      en: "From sketch to canvas, with guidance matched to your level.",
      zh: "由構圖草稿到畫布完成，導師按能力逐步指導，建立作品完成度。",
    },
  },
  {
    title: { en: "Build style and confidence", zh: "建立個人風格與自信" },
    desc: {
      en: "Not only copying — learn to observe, choose subjects and express ideas.",
      zh: "不只臨摹，更學習觀察、取材和表達，逐步發展自己的視覺語言。",
    },
  },
];

const FEATURES = [
  {
    title: { en: "Step by step", zh: "循序進階" },
    desc: {
      en: "From colour and brushwork to a finished picture.",
      zh: "由基本色彩與筆觸，逐步發展至完整畫面處理。",
    },
  },
  {
    title: { en: "Your choice of subject", zh: "尊重個人選擇" },
    desc: {
      en: "Choose subjects by interest and level, so you stay in charge of the work.",
      zh: "按興趣及程度選擇合適題材，建立創作主動性。",
    },
  },
  {
    title: { en: "Skill and expression", zh: "技巧與表達並重" },
    desc: {
      en: "Not only “looking like” the subject — use colour and composition to say something.",
      zh: "不只學「畫得像」，亦學習如何透過色彩與構圖表達想法。",
    },
  },
];

const LEARNING = [
  { en: "Beginners welcome; experienced students can go further", zh: "由零基礎開始，亦適合想進一步提升技巧的學員" },
  { en: "Small-group guidance, with topics adjusted to ability", zh: "小班個別指導，課題按能力調整" },
  { en: "Mixing, layering, value, composition and texture", zh: "學習調色、疊色、明暗、構圖及質感處理" },
  { en: "Finish a painting you can show and keep", zh: "逐步完成可展示及收藏的個人作品" },
  { en: "Taught in Cantonese, with English support if needed", zh: "課程可使用廣東話，並可按需要提供英語輔助" },
];

const STEPS = [
  {
    step: "1",
    title: { en: "Theme and composition", zh: "主題與構圖" },
    desc: {
      en: "Study references, set the focus, and sketch proportion and space.",
      zh: "分析參考作品、確立主題和畫面重點，先以草圖安排比例與空間。",
    },
  },
  {
    step: "2",
    title: { en: "Mixing and demo", zh: "調色與技法示範" },
    desc: {
      en: "See mixing, layering, dry brush and impasto, and how acrylic behaves.",
      zh: "導師示範混色、疊色、乾筆、厚塗等技巧，理解塑膠彩的特性。",
    },
  },
  {
    step: "3",
    title: { en: "Paint in stages", zh: "分段完成畫作" },
    desc: {
      en: "Build value, texture and detail layer by layer, with one-to-one guidance.",
      zh: "按個人程度逐層上色，處理明暗、質感與細節，導師逐一指導。",
    },
  },
  {
    step: "4",
    title: { en: "Finish and share", zh: "整理與作品分享" },
    desc: {
      en: "Refine composition and colour, and complete a painting to keep.",
      zh: "完善畫面、檢視構圖與色彩，完成一幅可展示及收藏的個人作品。",
    },
  },
];

const QUOTES = [
  {
    text: {
      en: "The teacher explains mixing and layers step by step — beginners can keep up.",
      zh: "老師會逐步講解調色和層次，初學都容易跟上。",
    },
    by: { en: "Student", zh: "學員分享" },
  },
  {
    text: {
      en: "Small class, so I can paint at my own pace. If I get stuck, the teacher helps at once.",
      zh: "小班教學，可以按自己的速度畫，遇到問題老師會即時指導。",
    },
    by: { en: "Student", zh: "學員分享" },
  },
  {
    text: {
      en: "Finishing a complete painting feels great, and I’m more confident to keep going.",
      zh: "完成一幅完整畫作很有成功感，亦更有信心繼續創作。",
    },
    by: { en: "Student", zh: "學員分享" },
  },
];

const FAQ = [
  {
    q: { en: "What age is acrylic painting for?", zh: "塑膠彩班適合幾多歲？" },
    a: {
      en: "Ages 14+ (teens and adults). The teacher adjusts topics and depth by experience.",
      zh: "課程適合14歲或以上的青少年及成人；導師會按經驗與能力調整課題及指導深度。",
    },
  },
  {
    q: { en: "Can complete beginners join?", zh: "零基礎可以參加嗎？" },
    a: {
      en: "Yes. We start with tools, mixing and basic brushwork, so beginners can finish a painting step by step.",
      zh: "可以。課程會由工具運用、調色及基本筆觸開始，初學者也可循序完成作品。",
    },
  },
  {
    q: { en: "How many students per class?", zh: "每班有幾多人？" },
    a: {
      en: "Maximum 6, so each student gets enough individual guidance.",
      zh: "每班最多6人，以小班形式教學，確保每位學員都有足夠的個別指導。",
    },
  },
  {
    q: { en: "How long is a class, and which days?", zh: "一堂上幾耐？邊日有堂？" },
    a: {
      en: "1 hour. Current sessions: Monday, Tuesday, Thursday, Friday and Saturday. Ask the studio for times.",
      zh: "每堂1小時；現有課程安排為星期一、二、四、五及六，實際時段請先向畫室查詢。",
    },
  },
  {
    q: { en: "How is acrylic different from oil?", zh: "塑膠彩同油畫有咩分別？" },
    a: {
      en: "Acrylic dries faster, has less odour, and can be used thin or thick. This course focuses on acrylic technique.",
      zh: "塑膠彩乾得較快、氣味較低而且可薄塗或厚塗，適合學習多種繪畫效果；本課程專注塑膠彩技法。",
    },
  },
  {
    q: { en: "Can I book a trial?", zh: "可以試堂嗎？" },
    a: {
      en: "Yes. WhatsApp us to confirm places and a suitable time. HK$100 trial is available.",
      zh: "可以預約體驗。名額及適合時段請透過 WhatsApp 與課程顧問確認。",
    },
  },
];

const RELATED = [
  {
    title: { en: "Sketching Class", zh: "素描技巧班" },
    desc: { en: "Ages 9+ · observation, proportion, light and pencil skill", zh: "9歲以上 · 觀察、比例、光暗與鉛筆技巧" },
    hrefSlug: "/course/drawing-and-painting/sketching-class",
  },
  {
    title: { en: "Visual Art Class", zh: "綜合美術課程" },
    desc: { en: "Ages 14+ · mixed media and personal direction", zh: "14歲以上 · 多媒介探索與個人創作" },
    hrefSlug: "/course/kids-art/visual-art-class",
  },
  {
    title: { en: "Drawing & Painting", zh: "繪畫及素描" },
    desc: { en: "Compare sketching, acrylic and mixed-media courses", zh: "比較素描、塑膠彩及綜合美術課程" },
    hrefSlug: "/course/drawing-and-painting",
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
.hub { width: 100%; max-width: 100%; min-width: 0; margin: 0; padding: 0; overflow-x: visible; }
.wrap { width: min(1200px, calc(100% - 48px)); max-width: 1200px; margin: 0 auto; }
.section { padding: 64px 0; background: var(--bg); width: 100%; }
.section-soft { background: var(--bg-soft); }
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
h3 { font-size: 1.12rem; }

.crumbs {
  display: flex; flex-wrap: wrap; gap: 8px; align-items: center;
  font-size: 0.92rem; color: var(--muted); margin: 0 0 18px;
}
.crumbs a { color: var(--teal); font-weight: 700; text-decoration: none; }
.crumbs span[aria-hidden="true"] { opacity: 0.55; }

.btn-row { display: flex; flex-wrap: wrap; gap: 14px; }
.btn {
  appearance: none; border: 0; border-radius: 999px; min-height: 50px;
  padding: 12px 28px; font: inherit; font-weight: 700; cursor: pointer;
  text-decoration: none; display: inline-flex; align-items: center;
  justify-content: center; gap: 8px;
  transition: transform .15s ease, background .15s ease;
}
.btn:hover { transform: translateY(-1px); }
.btn:focus-visible { outline: 3px solid rgba(0,169,183,.35); outline-offset: 3px; }
.btn-coral { background: var(--coral); color: #fff; }
.btn-coral:hover { background: var(--coral-deep); }
.btn-teal { background: var(--teal); color: #fff; }
.btn-teal:hover { background: var(--teal-deep); }
.btn-outline-teal { background: transparent; color: var(--teal); border: 2px solid var(--teal); }
.btn-outline-white { background: transparent; color: #fff; border: 2px solid #fff; }
.btn-ghost { background: #fff; color: var(--ink); border: 1px solid var(--line); }

.hero {
  position: relative; width: 100%; max-width: 100%; min-height: clamp(460px, 58vw, 620px);
  display: flex; align-items: center; overflow: hidden; background: #f3f3f3;
}
.hero-bg {
  position: absolute; inset: 0;
  background-image: var(--hero-img); background-size: cover; background-position: center 30%;
}
.hero-bg::after {
  content: ""; position: absolute; inset: 0;
  background: linear-gradient(90deg, rgba(255,255,255,.94) 0%, rgba(255,255,255,.82) 42%, rgba(255,255,255,.28) 72%, rgba(255,255,255,.12) 100%);
}
.hero .wrap { position: relative; z-index: 1; padding: 64px 0; }
.hero-copy { max-width: 42rem; }
.hero-eyebrow { margin: 0 0 18px; color: var(--teal); font-weight: 800; font-size: 1.02rem; }
.hero-title-chip {
  display: block; background: var(--title-chip); border-radius: 22px;
  padding: 20px 24px 18px; margin: 0 0 18px; max-width: min(760px, 100%);
}
.hero-title-chip h1 { margin: 0; font-size: clamp(1.4rem, 3.4vw, 2.1rem); line-height: 1.35; }
.hero-sub { margin: 10px 0 0; font-size: clamp(1.08rem, 2.4vw, 1.4rem); font-weight: 800; color: var(--navy); }
.hero-lead { margin: 0 0 28px; color: var(--muted); font-size: 1.02rem; }

.trust { display: grid; gap: 12px; margin-top: -28px; position: relative; z-index: 2; }
@media (min-width: 720px) { .trust { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1100px) { .trust { grid-template-columns: repeat(4, 1fr); } }
.trust-item {
  background: #fff; border: 1px solid var(--line); border-radius: var(--radius);
  padding: 18px 20px; box-shadow: var(--shadow); font-weight: 800;
}
.trust-item span { display: block; color: var(--muted); font-weight: 600; font-size: 0.92rem; margin-top: 4px; }

.why-grid, .features-grid { display: grid; gap: 16px; }
@media (min-width: 860px) { .why-grid, .features-grid { grid-template-columns: repeat(3, 1fr); } }
.why-card, .feature-card {
  background: #fff; border: 1px solid var(--line); border-radius: var(--radius);
  padding: 28px 22px; box-shadow: var(--shadow);
}
.why-card p, .feature-card p { margin: 0; color: var(--muted); }

.detail { display: grid; gap: 36px; align-items: center; }
@media (min-width: 900px) { .detail { grid-template-columns: 1.1fr 0.9fr; gap: 48px; } }
.detail h2 { font-size: clamp(1.45rem, 3vw, 1.9rem); margin: 0 0 10px; text-align: left; }
.detail-lead { color: var(--muted); margin: 0 0 18px; max-width: 54ch; }
.check-list { margin: 0 0 28px; padding: 0; list-style: none; }
.check-list li { position: relative; padding: 0.35rem 0 0.35rem 1.7rem; }
.check-list li::before { content: "✓"; position: absolute; left: 0; top: 0.35rem; color: var(--check); font-weight: 800; }
.detail-media { border-radius: 22px; overflow: hidden; box-shadow: var(--shadow); background: #eee; aspect-ratio: 4 / 5; max-height: 480px; }
.detail-media img { width: 100%; height: 100%; object-fit: cover; }

.path { display: grid; gap: 14px; }
@media (min-width: 860px) { .path { grid-template-columns: repeat(4, 1fr); } }
.path-step {
  background: #fff; border: 1px solid var(--line); border-radius: 16px;
  padding: 22px 16px; text-align: center; box-shadow: var(--shadow);
}
.path-num {
  display: inline-flex; align-items: center; justify-content: center;
  width: 36px; height: 36px; border-radius: 999px; background: var(--teal-soft);
  color: var(--teal-deep); font-weight: 800; margin-bottom: 10px;
}
.path-step h3 { margin: 0 0 8px; font-size: 1.05rem; }
.path-step p { margin: 0; color: var(--muted); font-size: 0.92rem; }

.gallery-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
@media (min-width: 800px) { .gallery-grid { grid-template-columns: repeat(4, 1fr); } }
.gallery-grid figure { margin: 0; border-radius: 16px; overflow: hidden; background: #ddd; aspect-ratio: 1; }
.gallery-grid img { width: 100%; height: 100%; object-fit: cover; }
.gallery-grid figcaption {
  position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
  overflow: hidden; clip: rect(0,0,0,0); border: 0;
}
.center-actions { display: flex; justify-content: center; flex-wrap: wrap; gap: 12px; margin-top: 28px; }

.studio-quote {
  max-width: 48ch; margin: 0 auto 36px; text-align: center;
  font-size: 1.08rem; font-weight: 700; color: var(--navy);
}
.studio-quote cite { display: block; margin-top: 10px; font-style: normal; font-weight: 600; color: var(--muted); font-size: 0.92rem; }

.quote-grid { display: grid; gap: 16px; }
@media (min-width: 860px) { .quote-grid { grid-template-columns: repeat(3, 1fr); } }
.quote {
  background: #fff; border: 1px solid var(--line); border-radius: var(--radius);
  padding: 24px 22px; box-shadow: var(--shadow);
}
.quote p { margin: 0 0 12px; color: var(--ink); }
.quote span { color: var(--muted); font-size: 0.9rem; font-weight: 700; }

.silo-links { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; }
.silo-links a {
  display: inline-flex; align-items: center; min-height: 44px; padding: 10px 18px;
  border-radius: 999px; border: 1.5px solid var(--line); background: #fff;
  color: var(--teal-deep); font-weight: 800; text-decoration: none;
}
.explore-grid { display: grid; gap: 16px; }
@media (min-width: 720px) { .explore-grid { grid-template-columns: repeat(3, 1fr); } }
.explore-card {
  background: #fff; border: 1px solid var(--line); border-radius: var(--radius);
  padding: 24px 22px; box-shadow: var(--shadow); text-decoration: none; color: inherit;
  display: flex; flex-direction: column; gap: 8px; min-height: 150px;
}
.explore-card p { margin: 0; color: var(--muted); flex: 1; }
.explore-card .cta { color: var(--teal); font-weight: 800; }

.trial {
  background: var(--coral-soft); border-radius: 28px;
  padding: clamp(32px, 6vw, 52px) clamp(22px, 5vw, 48px); text-align: center;
}
.trial-badge {
  display: inline-flex; background: var(--coral); color: #fff; border-radius: 999px;
  padding: 8px 18px; font-weight: 800; font-size: 0.95rem; margin: 0 auto 18px;
}
.trial h2 { margin: 0 0 14px; font-size: clamp(1.45rem, 3vw, 1.9rem); }
.trial p { margin: 0 auto 16px; max-width: 42ch; color: var(--muted); }
.trial .btn-row { justify-content: center; }

.faq-list { max-width: 820px; margin: 0 auto; }
.faq-item { padding: 22px 0; border-bottom: 1px solid #e5e5e5; }
.faq-item:first-child { border-top: 1px solid #e5e5e5; }
.faq-q { margin: 0 0 8px; font-weight: 800; font-size: 1.05rem; }
.faq-a { margin: 0; color: var(--muted); font-size: 0.98rem; }

.final {
  background: var(--teal); color: #fff; text-align: center; padding: 64px 20px; width: 100%;
}
.final h2 { color: #fff; font-size: clamp(1.55rem, 3vw, 2rem); margin: 0 0 12px; }
.final p { color: rgba(255,255,255,.92); max-width: 42ch; margin: 0 auto 28px; }
.final .btn-row { justify-content: center; }

@media (max-width: 860px) {
  .wrap { width: min(1200px, calc(100% - 32px)); }
  .section { padding: 48px 0; }
  .hero { min-height: 0; align-items: stretch; }
  .hero-bg::after {
    background: linear-gradient(180deg, rgba(255,255,255,.96) 0%, rgba(255,255,255,.92) 58%, rgba(255,255,255,.78) 100%);
  }
}
@media (max-width: 640px) {
  :host { font-size: 13px; }
  h1, .hero-title-chip h1, .hero h1 { font-size: 1.42em !important; line-height: 1.35; }
  h2, .section-title, .final h2, .detail h2, .trial h2, .form-card h2, .info-card h2 { font-size: 1.24em !important; }
  h3, .faq-q, .card-body h3, .path-step h3, .method h3 { font-size: 1.02em !important; }
  .hero-sub { font-size: 1.05em !important; }
  p, li, .section-lead, .hero-lead, .faq-a, .card-body p, .path-step p, .final p, .detail-lead, .hero-points { font-size: 1em !important; }
  .hero-eyebrow, .kicker, .crumbs, .trust-item span { font-size: 0.88em !important; }
  .btn { font-size: 1em !important; }
  .wrap { width: calc(100% - 24px); }
  .section { padding: 36px 0; }
  .hero .wrap { padding: 28px 0 32px; }
  .btn-row { flex-direction: column; align-items: stretch; }
}
`;

class AcrylicPaintingHub extends HTMLElement {
  static get observedAttributes() {
    return ["wa-url", "locale"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._onClick = this._onClick.bind(this);
    this._syncHeight = this._syncHeight.bind(this);
    this._applyFullBleedCss = this._applyFullBleedCss.bind(this);
    this._ro = null;
  }

  connectedCallback() {
    this.render();
    const syncLocale = () => {
      try {
        if (this.localeCode === "zh") {
          const h1 = this.shadowRoot && this.shadowRoot.querySelector("h1");
          if (h1 && /Acrylic Painting Class in Ho Man Tin/i.test(h1.textContent || "")) this.render();
        }
      } catch (e) {}
    };
    setTimeout(syncLocale, 0);
    setTimeout(syncLocale, 500);
    this.shadowRoot.addEventListener("click", this._onClick);
    window.addEventListener("resize", this._syncHeight);
    window.addEventListener("resize", this._applyFullBleedCss);
    this._applyFullBleedCss();
  }

  disconnectedCallback() {
    this.shadowRoot.removeEventListener("click", this._onClick);
    window.removeEventListener("resize", this._syncHeight);
    window.removeEventListener("resize", this._applyFullBleedCss);
    if (this._ro) {
      this._ro.disconnect();
      this._ro = null;
    }
    const bleed = document.getElementById("acrylic-painting-hub-page-bleed");
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
    const id = "acrylic-painting-hub-page-bleed";
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
      acrylic-painting-hub {
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

  _observeHeight() {
    const hub = this.shadowRoot && this.shadowRoot.querySelector(".hub");
    if (!hub) return;
    if (this._ro) this._ro.disconnect();
    this._ro = new ResizeObserver(this._syncHeight);
    this._ro.observe(hub);
    this._syncHeight();
    requestAnimationFrame(this._syncHeight);
    setTimeout(this._syncHeight, 300);
    setTimeout(this._syncHeight, 1200);
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
        bubbles: true,
        composed: true,
        detail: { type, href: href || "" },
      })
    );
  }

  _onClick(event) {
    const target = event.target.closest("[data-action]");
    if (!target) return;
    const action = target.dataset.action;

    if (action === "scroll-details") {
      event.preventDefault();
      const sec = this.shadowRoot.getElementById("secDetails");
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

  render() {
    const t = (en, zh) => (this.isEn ? en : zh);
    this._applyFullBleedCss();

    const courseHubUrl = this.path("/course-hub");
    const siloUrl = this.path("/courses/art-drawing");
    const trialUrl = this.path("/homantin-children-art-trial");
    const galleryUrl = this.isEn
      ? "https://www.icacademy.com.hk/studentartwork"
      : "https://www.icacademy.com.hk/zh/studentartwork";
    const homeUrl = this.isEn ? "https://www.icacademy.com.hk" : "https://www.icacademy.com.hk/zh";

    const waPrefill = this._waPrefill(
      t(
        "Hi, I’d like to ask about the Acrylic Painting Class in Ho Man Tin / a trial. Age: ____; painting experience: ____; preferred days: ____.",
        "你好，我想查詢何文田塑膠彩班／體驗堂。年齡：＿＿；繪畫經驗：＿＿；方便日子：＿＿。"
      )
    );

    this.shadowRoot.innerHTML = `
      <style>${STYLES}</style>
      <div class="hub">
        <section class="hero" aria-labelledby="hero-title" style="--hero-img:url('${IMG.hero}')">
          <div class="hero-bg" aria-hidden="true"></div>
          <div class="wrap">
            <div class="hero-copy">
              <nav class="crumbs" aria-label="${t("Breadcrumb", "麵包屑")}">
                <a data-action="hub" href="${homeUrl}">${t("Home", "首頁")}</a>
                <span aria-hidden="true">/</span>
                <a data-action="hub" href="${courseHubUrl}">${t("Courses", "課程總覽")}</a>
                <span aria-hidden="true">/</span>
                <a data-action="hub" href="${siloUrl}">${t("Drawing & Painting", "繪畫及素描")}</a>
                <span aria-hidden="true">/</span>
                <span>${t("Acrylic Painting", "塑膠彩班")}</span>
              </nav>
              <p class="hero-eyebrow">${t("Ho Man Tin · Teen & adult art class", "何文田 · 青少年及成人藝術課程")}</p>
              <div class="hero-title-chip">
                <h1 id="hero-title">${t("Acrylic Painting Class in Ho Man Tin", "何文田塑膠彩班 Acrylic Painting Class")}</h1>
                <p class="hero-sub">${t("Designed for ages 14+", "專為 14歲以上設計")}</p>
              </div>
              <p class="hero-lead">
                ${t(
                  "Start with mixing, composition and brushwork, then learn layering, texture and picture-making. Classes are capped at 6 so beginners and experienced students can finish acrylic paintings with their own style.",
                  "由基本調色、構圖及筆觸開始，逐步學習疊色、質感與畫面處理。IC Academy 以最多6人小班教學，讓初學者及有經驗學員都能按自己的進度，完成具個人風格的塑膠彩作品。"
                )}
              </p>
              <div class="btn-row">
                <a class="btn btn-coral" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("Book a trial", "立即預約體驗")}</a>
                <button type="button" class="btn btn-outline-teal" data-action="scroll-details">${t("See course details", "查看課程詳情")}</button>
              </div>
            </div>
          </div>
        </section>

        <section class="section" style="padding-top:0;padding-bottom:40px" aria-label="${t("Class facts", "課程重點")}">
          <div class="wrap">
            <div class="trust">
              <div class="trust-item">✓ ${t("Ages 14+", "14歲以上")}<span>${t("Teens and adults", "青少年及成人")}</span></div>
              <div class="trust-item">✓ ${t("Max 6 per class", "每班最多6人")}<span>${t("Individual guidance", "小班個別指導")}</span></div>
              <div class="trust-item">✓ ${t("1 hour per class", "每堂1小時")}<span>${t("Ask for the latest times", "時段請向畫室查詢")}</span></div>
              <div class="trust-item">✓ ${t("Mon, Tue, Thu, Fri, Sat", "星期一、二、四、五、六")}<span>${t("Current timetable", "現有課程安排")}</span></div>
            </div>
          </div>
        </section>

        <section class="section section-soft" aria-labelledby="why-title">
          <div class="wrap">
            <h2 class="section-title" id="why-title">${t("Why this acrylic course?", "為什麼選擇 IC Academy 塑膠彩課程？")}</h2>
            <p class="section-lead">
              ${t(
                "Not only following steps — understand colour, composition and the medium, and build real painting skill.",
                "不只是跟著步驟上色，而是理解顏色、構圖與媒介特性，真正建立繪畫能力。"
              )}
            </p>
            <div class="why-grid">
              ${WHY.map(
                (item) => `
                <article class="why-card">
                  <h3>${this.pick(item.title)}</h3>
                  <p>${this.pick(item.desc)}</p>
                </article>`
              ).join("")}
            </div>
          </div>
        </section>

        <section class="section" id="secDetails" aria-labelledby="details-title">
          <div class="wrap">
            <div class="detail">
              <div>
                <h2 id="details-title">${t("Acrylic Painting class details", "塑膠彩班 · Acrylic Painting 課程詳情")}</h2>
                <p class="hero-sub" style="margin:0 0 12px;font-size:1.05rem">${t("Ages 14+ · Max 6 · Ho Man Tin studio", "適合14歲以上｜最多6人小班｜何文田畫室")}</p>
                <p class="detail-lead">
                  ${t(
                    "Acrylic is bright and dries quickly. It can be used thin, thick or in layers. This course starts with tools, then composition, colour, value and brushwork, until you complete a painting.",
                    "塑膠彩（Acrylic Paint）色彩鮮明、乾燥快，而且能以薄塗、厚塗、疊色等方式呈現不同質感。本課程由基礎工具運用開始，帶領學員掌握構圖、色彩關係、光暗與筆觸，再逐步發展完整畫作。"
                  )}
                </p>
                <p class="detail-lead">
                  ${t(
                    "Beginners can start with still life, landscape and colour studies. Experienced students can work on layers, texture and personal style.",
                    "導師會按學員經驗及創作方向安排練習：初學者可由基礎靜物、風景和色彩練習入門；有經驗者則可加強畫面層次、材質表現及個人風格。"
                  )}
                </p>
                <ul class="check-list">
                  ${LEARNING.map((item) => `<li>${this.pick(item)}</li>`).join("")}
                </ul>
                <a class="btn btn-coral" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("Ask about this class", "查詢課程詳情")}</a>
              </div>
              <div class="detail-media">
                <img src="${IMG.detail}" alt="${t("ICAcademy acrylic painting student work", "ICAcademy塑膠彩課程學員作品")}" width="800" height="1000" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        <section class="section section-soft" aria-labelledby="features-title">
          <div class="wrap">
            <h2 class="section-title" id="features-title">${t("How the regular class is taught", "常規課程特色")}</h2>
            <div class="features-grid">
              ${FEATURES.map(
                (item) => `
                <article class="feature-card">
                  <h3>${this.pick(item.title)}</h3>
                  <p>${this.pick(item.desc)}</p>
                </article>`
              ).join("")}
            </div>
          </div>
        </section>

        <section class="section" aria-labelledby="gallery-title">
          <div class="wrap">
            <h2 class="section-title" id="gallery-title">${t("Student artwork", "學員作品展示")}</h2>
            <p class="section-lead">${t("From composition and mixing to brushwork — build a body of work of your own.", "從構圖、調色到筆觸，逐步累積屬於自己的作品集")}</p>
            <div class="gallery-grid">
              <figure><img src="${IMG.gallery1}" alt="${t("Acrylic painting student work", "塑膠彩學員作品")}" loading="lazy" /><figcaption>${t("Student work", "學員作品")}</figcaption></figure>
              <figure><img src="${IMG.gallery2}" alt="${t("Acrylic painting student work", "塑膠彩學員作品")}" loading="lazy" /><figcaption>${t("Student work", "學員作品")}</figcaption></figure>
              <figure><img src="${IMG.gallery3}" alt="${t("Acrylic painting student work", "塑膠彩學員作品")}" loading="lazy" /><figcaption>${t("Student work", "學員作品")}</figcaption></figure>
              <figure><img src="${IMG.gallery4}" alt="${t("Acrylic painting student work", "塑膠彩學員作品")}" loading="lazy" /><figcaption>${t("Student work", "學員作品")}</figcaption></figure>
            </div>
            <div class="center-actions">
              <a class="btn btn-outline-teal" data-action="hub" href="${galleryUrl}">${t("See more student work →", "查看更多學員作品 →")}</a>
            </div>
          </div>
        </section>

        <section class="section section-soft" aria-labelledby="path-title">
          <div class="wrap">
            <h2 class="section-title" id="path-title">${t("How a class unfolds", "課程流程")}</h2>
            <div class="path">
              ${STEPS.map(
                (s) => `
                <div class="path-step">
                  <div class="path-num">${s.step}</div>
                  <h3>${this.pick(s.title)}</h3>
                  <p>${this.pick(s.desc)}</p>
                </div>`
              ).join("")}
            </div>
          </div>
        </section>

        <section class="section" aria-labelledby="quotes-title">
          <div class="wrap">
            <blockquote class="studio-quote">
              ${t(
                "“Start from a blank canvas. Learn to turn what you see and think into your own painting — with colour, layers and brushwork.”",
                "「由一張白畫布開始，學懂用色彩、層次與筆觸，把觀察和想法變成自己的作品。」"
              )}
              <cite>— ${t("IC Academy Acrylic Painting Class", "IC Academy 塑膠彩課程")}</cite>
            </blockquote>
            <h2 class="section-title" id="quotes-title" style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)">${t("What students say", "學員分享")}</h2>
            <div class="quote-grid">
              ${QUOTES.map((item) => {
                const raw = this.pick(item.text).replace(/^「|」$/g, "").replace(/^“|”$/g, "");
                const quoted = this.isEn ? `“${raw}”` : `「${raw}」`;
                return `
                <blockquote class="quote">
                  <p>${quoted}</p>
                  <span>— ${this.pick(item.by)}</span>
                </blockquote>`;
              }).join("")}
            </div>
          </div>
        </section>

        <section class="section section-soft" aria-labelledby="faq-title">
          <div class="wrap">
            <h2 class="section-title" id="faq-title">${t("Frequently asked questions", "常見問題")}</h2>
            <div class="faq-list">
              ${FAQ.map(
                (item) => `
                <div class="faq-item">
                  <p class="faq-q">Q：${this.pick(item.q)}</p>
                  <p class="faq-a">${this.pick(item.a)}</p>
                </div>`
              ).join("")}
            </div>
          </div>
        </section>

        <section class="section" aria-labelledby="explore-title">
          <div class="wrap">
            <h2 class="section-title" id="explore-title">${t("Explore more courses", "探索更多課程")}</h2>
            <p class="section-lead">${t("This page is the acrylic painting course. Other media have their own pages.", "本頁是塑膠彩班課程。其他媒介請見相關課程頁。")}</p>
            <div class="silo-links" style="margin-bottom:28px">
              <a data-action="hub" href="${siloUrl}">${t("Drawing & Painting overview", "繪畫及素描總覽")}</a>
              <a data-action="hub" href="${courseHubUrl}">${t("All courses", "課程總覽")}</a>
              <a data-action="hub" href="${trialUrl}">${t("Trial class", "試堂詳情")}</a>
            </div>
            <div class="explore-grid">
              ${RELATED.map(
                (item) => `
                <a class="explore-card" data-action="course" href="${this.path(item.hrefSlug)}">
                  <h3>${this.pick(item.title)}</h3>
                  <p>${this.pick(item.desc)}</p>
                  <span class="cta">${t("View course →", "查看課程 →")}</span>
                </a>`
              ).join("")}
            </div>
          </div>
        </section>

        <section class="section section-soft" aria-labelledby="trial-title">
          <div class="wrap">
            <div class="trial">
              <div class="trial-badge">${t("HK$100 trial", "HK$100 試堂")}</div>
              <h2 id="trial-title">${t("Book an acrylic painting trial", "立即查詢塑膠彩課程")}</h2>
              <p>${t(
                "Small groups of 6. WhatsApp us for regular class times and a trial slot.",
                "最多6人小班，歡迎 WhatsApp 查詢恆常課程及體驗時段。"
              )}</p>
              <div class="btn-row">
                <a class="btn btn-teal" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("WhatsApp to book", "立即預約體驗")}</a>
                <a class="btn btn-ghost" data-action="hub" href="${trialUrl}">${t("How the trial works", "了解試堂詳情")}</a>
              </div>
            </div>
          </div>
        </section>

        <section class="final" aria-labelledby="final-title">
          <h2 id="final-title">${t("Ask about acrylic painting in Ho Man Tin", "立即查詢塑膠彩課程")}</h2>
          <p>${t("Max 6 per class. WhatsApp us for the timetable and a trial.", "最多6人小班，歡迎 WhatsApp 查詢恆常課程及體驗時段。")}</p>
          <div class="btn-row">
            <a class="btn btn-coral" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("WhatsApp", "WhatsApp 查詢")}</a>
            <a class="btn btn-outline-white" data-action="hub" href="${siloUrl}">${t("Back to Drawing & Painting", "返回繪畫及素描")}</a>
          </div>
        </section>
      </div>
    `;

    this._applyFullBleedCss();
    this._observeHeight();
  }
}

customElements.define("acrylic-painting-hub", AcrylicPaintingHub);
