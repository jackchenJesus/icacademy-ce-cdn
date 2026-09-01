/**
 * ICAcademy Creative Art & Clay Class — course landing (not a hub)
 * Tag name: creative-art-and-clay-hub
 * Version: 2026-08-16-v1 (smaller mobile type)
 *
 * Parent silo hub: Kids Art
 * Canonical:
 *   EN: /course/kids-art/creative-art-and-clay-class
 *   ZH: /zh/course/kids-art/creative-art-and-clay-class
 * Content source: /course/kids-art/creative-art-and-clay-class
 */
const WA_DEFAULT = "https://wa.me/85265808022";

function mediaUrl(id, w, h, q = 75) {
  return `https://static.wixstatic.com/media/${id}/v1/fill/w_${w},h_${h},al_c,q_${q},enc_auto/${id}`;
}

const IMG = {
  hero: mediaUrl("b98cc9_f417962750fd4399b1ee38c775da9a4e~mv2.jpeg", 1600, 1000),
  gallery1: mediaUrl("b98cc9_33c4c822ff2e4e5e86a4dfd9ce7b7be7~mv2.jpeg", 800, 800),
  gallery2: mediaUrl("b98cc9_f417962750fd4399b1ee38c775da9a4e~mv2.jpeg", 800, 800),
  gallery3: mediaUrl("b98cc9_f73677a0ad284e10b85772ce1fbecae5~mv2.jpg", 800, 800),
  gallery4: mediaUrl("b98cc9_929f4422f4b6400582f31e87f7920237~mv2.jpeg", 800, 800),
  detail: mediaUrl("b98cc9_9c6489b3ccfa47f0adc205c472aa87e7~mv2.jpg", 800, 1000),
};

const WHY = [
  {
    title: { en: "Fine motor skills", zh: "小肌肉發展訓練" },
    desc: {
      en: "Rolling, pinching and pressing build finger control — useful for writing later on.",
      zh: "透過搓、揉、捏、壓等動作，有效鍛鍊幼兒手指靈活度，為書寫能力打好基礎。",
    },
  },
  {
    title: { en: "Spatial sense and ideas", zh: "空間感與創意思維" },
    desc: {
      en: "Move from flat design to 3D making — proportion, structure, form and colour, so ideas become objects.",
      zh: "由平面設計延伸至立體製作，學習比例、結構、造型與配色，將腦海中的想法變成作品。",
    },
  },
  {
    title: { en: "Focus and confidence", zh: "專注力與自信" },
    desc: {
      en: "Each project is planned, made and shown. Children finish work and grow a sense of achievement.",
      zh: "每堂專注完成一件完整作品；從構思、製作到展示，孩子在持續創作中累積成就感。",
    },
  },
];

const FEATURES = [
  {
    title: { en: "Free ideas, their own subject", zh: "自由創意與自主選擇" },
    desc: {
      en: "Students can bring favourite subjects into the making.",
      zh: "學員可以把喜愛的題材融入創作。",
    },
  },
  {
    title: { en: "Progress by age", zh: "分齡進度" },
    desc: {
      en: "Younger children start with basic modelling. Older students can try figure proportion, fine structure and larger scenes.",
      zh: "幼兒由基礎塑形開始，年長學員可挑戰人物比例、精細結構及大型場景。",
    },
  },
  {
    title: { en: "A scene for each piece", zh: "專屬場景設計" },
    desc: {
      en: "The teacher helps add a background and base so the work feels complete.",
      zh: "導師引導學員為作品加入精美背景及底座，令作品完整呈現。",
    },
  },
];

const LEARNING = [
  { en: "100+ regular themes for form, structure and colour", zh: "超過100款常規創作主題，訓練造型、結構及色彩美學" },
  { en: "4–6 per class, taught to the child’s level", zh: "每班4–6人，導師按能力因材施教" },
  { en: "Cantonese first, English support when needed", zh: "廣東話為主，可按學員需要以英語輔助" },
  { en: "Take finished work home to display", zh: "作品完成後可帶回家展示與珍藏" },
  { en: "23 years, 40,000+ making sessions", zh: "23年信譽品牌，累積超過40,000創作人次" },
];

const STEPS = [
  {
    step: "1",
    title: { en: "Theme and ideas", zh: "主題啟發" },
    desc: {
      en: "The teacher introduces the theme in simple terms and opens space for each child’s idea.",
      zh: "導師深入淺出講解當堂主題，引導學員開拓思維，激發獨一無二的創作靈感。",
    },
  },
  {
    step: "2",
    title: { en: "Core skills demo", zh: "核心技巧示範" },
    desc: {
      en: "Step-by-step 3D modelling, colour mixing and joining — complex structure made simple.",
      zh: "專業導師分步驟示範立體塑形、混色及接合技巧，將複雜結構化繁為簡，輕鬆掌握。",
    },
  },
  {
    step: "3",
    title: { en: "Make it themselves", zh: "獨立動手創作" },
    desc: {
      en: "Full creative freedom in a class of 4–6, with individual help at the side.",
      zh: "學員發揮 100% 自由創意，在 4-6 人小班氛圍下，導師因材施教、從旁個別指導。",
    },
  },
  {
    step: "4",
    title: { en: "Scene, then home", zh: "專屬場景打造與帶回家" },
    desc: {
      en: "Add a scene and base — a dinosaur in a forest, a cake in a shop. Then take it home as a display piece.",
      zh: "導師會引導學員為作品設計專屬的精美場景與背景底座 —— 讓恐龍回歸森林、讓蛋糕擺進夢幻店舖。完成後帶回家中展示，成為客廳最精緻的藝術擺設。",
    },
  },
];

const QUOTES = [
  {
    text: {
      en: "After a few clay classes she is always happy to bring work home. The teacher is patient, and the small class really looks after each child.",
      zh: "女女上咗幾堂黏土班，每次都好開心帶作品返屋企！老師好有耐性，小班教學真係照顧到每個小朋友。",
    },
    by: { en: "Pui Ching K2 parent", zh: "培正小學 K2 家長" },
  },
  {
    text: {
      en: "The teacher is patient and explains each child’s progress clearly. We look forward to growing here.",
      zh: "老師好有耐性講解小朋友既情況！期待繼續喺度成長！",
    },
    by: { en: "Vienna Kwong", zh: "Vienna Kwong" },
  },
  {
    text: {
      en: "Our son and daughter have taken art classes here for years. The teaching is excellent, and the children enjoy coming.",
      zh: "兒子及女兒在這間美術學校已經上堂多年，師資優良，小朋友很喜歡在這裏上堂",
    },
    by: { en: "Frankie Tsang", zh: "Frankie Tsang" },
  },
];

const FAQ = [
  {
    q: { en: "What age is the clay class for?", zh: "黏土課程適合幾歲的小朋友？" },
    a: {
      en: "Regular classes are for ages 3–16. The teacher groups by age, experience and progress, and adjusts difficulty accordingly.",
      zh: "常規課程適合3–16歲學員。導師會按年齡、經驗及進度分組，並精準調整教學難度。",
    },
  },
  {
    q: { en: "How many students per class?", zh: "每班有多少人？" },
    a: {
      en: "About 4–6 students. Small groups so each child gets enough attention and individual guidance.",
      zh: "每班約4–6人，採用精緻小班教學，確保每位學員得到充分關注和個別指導。",
    },
  },
  {
    q: { en: "Are the clay materials safe?", zh: "使用的黏土材料安全嗎？" },
    a: {
      en: "We mainly use non-toxic Amos Korean light clay, and add other professional clays when a project needs them.",
      zh: "課程主要使用安全無毒的Amos韓國高級輕黏土，並按作品需要配搭不同專業黏土材質。",
    },
  },
  {
    q: { en: "Can they take the artwork home every class?", zh: "每堂都可以帶作品回家嗎？" },
    a: {
      en: "Most pieces take 1–4 classes depending on size and detail. When finished, students can take them home to display.",
      zh: "一般作品需1–4堂逐步完成，視乎作品大小及精細程度；完成後可以帶回家展示及珍藏。",
    },
  },
  {
    q: { en: "Where is the studio?", zh: "畫室在哪裡？" },
    a: {
      en: "Ground Floor Shop 3, 79 Waterloo Road, Ho Man Tin, Kowloon — about a 5-minute walk from Pui Ching. From Kai Tak or Kowloon Tong it is usually 10–15 minutes by car or taxi, with drop-off at the door.",
      zh: "九龍何文田窩打老道79號F地下3號舖，鄰近培正小學及中學，步行約5分鐘可到。自駕或搭乘 Uber/Taxi 由啟德新區、九龍塘前來只需 10-15 分鐘，校門外一落車即達，極具隱私與便利性。",
    },
  },
  {
    q: { en: "Can I book a trial?", zh: "可以試堂嗎？" },
    a: {
      en: "Yes. Places are limited. Use the page button or WhatsApp us and a course advisor will arrange a suitable trial time.",
      zh: "非常歡迎預約試堂體驗！由於小班學位非常有限，請直接點擊網頁按鈕或透過 WhatsApp 聯絡我們，課程顧問會即時為您安排最適合孩子的體驗時段。",
    },
  },
];

const RELATED = [
  {
    title: { en: "Kids Art Classes", zh: "兒童畫班" },
    desc: { en: "Visual art · from first marks to secondary portfolio", zh: "視覺藝術課程 · 塗鴉至升中 Portfolio" },
    hrefSlug: "/course/kids-art/kids-art-classes-homantin",
  },
  {
    title: { en: "Visual Art Class", zh: "視覺藝術課程" },
    desc: { en: "Bilingual teaching · creativity and visual sense", zh: "雙語授課 · 創意與美感培養" },
    hrefSlug: "/course/kids-art/visual-art-class",
  },
  {
    title: { en: "Acrylic Painting Class", zh: "塑膠彩班課程" },
    desc: { en: "Bilingual teaching · colour and a finished painting", zh: "雙語授課 · 創意與美感培養" },
    hrefSlug: "/course/drawing-and-painting/acrylic-painting-class",
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
  :host { font-size: 14px; }
  h1, .hero-title-chip h1, .hero h1 { font-size: 1.5em !important; line-height: 1.35; }
  h2, .section-title, .final h2, .detail h2, .trial h2, .form-card h2, .info-card h2 { font-size: 1.32em !important; }
  h3, .faq-q, .card-body h3, .path-step h3, .method h3 { font-size: 1.06em !important; }
  .hero-sub { font-size: 1.1em !important; }
  p, li, .section-lead, .hero-lead, .faq-a, .card-body p, .path-step p, .final p, .detail-lead, .hero-points { font-size: 1em !important; }
  .hero-eyebrow, .kicker, .crumbs, .trust-item span { font-size: 0.92em !important; }
  .btn { font-size: 1em !important; }
  .wrap { width: calc(100% - 24px); }
  .section { padding: 36px 0; }
  .hero .wrap { padding: 28px 0 32px; }
  .btn-row { flex-direction: column; align-items: stretch; }
}
`;

class CreativeArtAndClayHub extends HTMLElement {
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
          if (h1 && /Kids. Light Clay Class in Ho Man Tin/i.test(h1.textContent || "")) this.render();
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
    const bleed = document.getElementById("creative-art-and-clay-hub-page-bleed");
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
    const id = "creative-art-and-clay-hub-page-bleed";
    if (document.getElementById(id)) return;
    const style = document.createElement("style");
    style.id = id;
    style.textContent = `
      creative-art-and-clay-hub {
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
    const siloUrl = this.path("/course/kids-art");
    const trialUrl = this.path("/homantin-children-art-trial");
    const galleryUrl = this.isEn
      ? "https://www.icacademy.com.hk/studentartwork"
      : "https://www.icacademy.com.hk/zh/studentartwork";
    const homeUrl = this.isEn ? "https://www.icacademy.com.hk" : "https://www.icacademy.com.hk/zh";

    const waPrefill = this._waPrefill(
      t(
        "Hi, I’d like to ask about the Kids’ Light Clay Class in Ho Man Tin / a trial. Age: ____; preferred days: ____.",
        "你好，我想查詢何文田兒童輕黏土班／體驗堂。年齡：＿＿；方便日子：＿＿。"
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
                <a data-action="hub" href="${siloUrl}">${t("Kids Art", "兒童美術")}</a>
                <span aria-hidden="true">/</span>
                <span>${t("Light Clay Class", "輕黏土班")}</span>
              </nav>
              <p class="hero-eyebrow">${t("Ho Man Tin · near Pui Ching · kids art and creative growth", "何文田 · 培正附近 · 兒童藝術創意成長")}</p>
              <div class="hero-title-chip">
                <h1 id="hero-title">${t("Kids’ Light Clay Class in Ho Man Tin", "何文田兒童輕黏土班 3D立體創作班｜ 專為 3-16 歲設計")}</h1>
                <p class="hero-sub">${t("3D making designed for ages 3–16", "專為 3-16 歲設計")}</p>
              </div>
              <p class="hero-lead">
                ${t(
                  "IC Academy’s light clay and 3D craft class for ages 3–16. One of the most popular kids art classes in Ho Man Tin — we guide children to build focus, observation and imagination, plus spatial sense and confidence, while training fine motor skills and hand–eye coordination.",
                  "IC Academy 專為 3-16 歲設計的輕黏土及 3D 創意手工課程。作為何文田區內最受歡迎的兒童藝術班，我們引導孩子在創作過程中培養專注力、觀察力及想像力，同時提升空間感及自信；並能有效訓練學員的小肌肉與手眼協調。"
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
              <div class="trust-item">✓ ${t("Ages 3–16", "3–16歲")}<span>${t("Grouped by age and progress", "按年齡及進度分組")}</span></div>
              <div class="trust-item">✓ ${t("4–6 per class", "每班4–6人")}<span>${t("Small-group teaching", "精緻小班教學")}</span></div>
              <div class="trust-item">✓ ${t("Amos non-toxic light clay", "Amos安全無毒輕黏土")}<span>${t("Plus other clays when needed", "可配搭專業黏土材質")}</span></div>
              <div class="trust-item">✓ ${t("Cantonese · English support", "廣東話為主・可英語輔助")}<span>${t("As the child needs", "按學員需要")}</span></div>
            </div>
          </div>
        </section>

        <section class="section section-soft" aria-labelledby="why-title">
          <div class="wrap">
            <h2 class="section-title" id="why-title">${t("Why choose IC Academy kids’ light clay?", "為什麼選擇IC Academy 兒童輕黏土課程？")}</h2>
            <p class="section-lead">
              ${t(
                "Not only “make one craft” — children learn 3D form, structure and colour, and grow independent making step by step.",
                "不只是「做一件手工」，而是讓孩子循序掌握立體造型、結構思維與色彩美學，逐步建立獨立創作能力。"
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
                <h2 id="details-title">${t("Light clay class details", "輕黏土班・兒童黏土課程詳情")}</h2>
                <p class="hero-sub" style="margin:0 0 12px;font-size:1.05rem">${t("Ages 3–16 · 4–6 per class · Ho Man Tin", "適合3–16歲｜小班教學4-6人｜何文田兒童輕黏土課程")}</p>
                <p class="detail-lead">
                  ${t(
                    "Grouped by age, experience and progress. Themes include animals, food models, vehicles, festivals and 3D scenes — from basic modelling, colour mixing and joining, to finer structure and independent work.",
                    "IC Academy專為3–16歲設計的兒童輕黏土班，按年齡、經驗及進度分組。課程透過動物世界、美食模型、交通工具、節日創作及立體場景等不同主題，引導孩子由基本塑形、混色和接合，逐步發展至精細結構與獨立創作。"
                  )}
                </p>
                <p class="detail-lead">
                  ${t(
                    "We mainly use soft, non-toxic Amos Korean light clay, and add Japanese Grace resin clay, Glass Clay, stone powder clay, cream clay and low-fire clay when a piece needs them.",
                    "課程主要採用安全無毒、柔軟易塑形的Amos韓國高級輕黏土，並按作品需要配搭日本Grace樹脂黏土、Glass Clay、石粉泥、奶油黏土及低溫泥等專業材質。"
                  )}
                </p>
                <ul class="check-list">
                  ${LEARNING.map((item) => `<li>${this.pick(item)}</li>`).join("")}
                </ul>
                <a class="btn btn-coral" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("Ask about this class", "查詢課程詳情")}</a>
              </div>
              <div class="detail-media">
                <img src="${IMG.detail}" alt="${t("ICAcademy light clay student work", "ICAcademy兒童黏土立體創作作品")}" width="800" height="1000" loading="lazy" />
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
            <h2 class="section-title" id="gallery-title">${t("Student clay artwork", "學員作品展示")}</h2>
            <p class="section-lead">${t("Watch 3D making grow — each finished piece is a step in creative confidence.", "每堂一件完整作品，見證孩子的創作成長")}</p>
            <div class="gallery-grid">
              <figure><img src="${IMG.gallery1}" alt="${t("Light clay student work", "黏土學員作品")}" loading="lazy" /><figcaption>${t("Student work", "學員作品")}</figcaption></figure>
              <figure><img src="${IMG.gallery2}" alt="${t("Light clay student work", "黏土學員作品")}" loading="lazy" /><figcaption>${t("Student work", "學員作品")}</figcaption></figure>
              <figure><img src="${IMG.gallery3}" alt="${t("Light clay student work", "黏土學員作品")}" loading="lazy" /><figcaption>${t("Student work", "學員作品")}</figcaption></figure>
              <figure><img src="${IMG.gallery4}" alt="${t("Light clay student work", "黏土學員作品")}" loading="lazy" /><figcaption>${t("Student work", "學員作品")}</figcaption></figure>
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
                "“After a few clay classes she is always happy to bring work home. The teacher is patient, and the small class really looks after each child.”",
                "「女女上咗幾堂黏土班，每次都好開心帶作品返屋企！老師好有耐性，小班教學真係照顧到每個小朋友。」"
              )}
              <cite>— ${t("Pui Ching K2 parent", "培正小學 K2 家長")}</cite>
            </blockquote>
            <h2 class="section-title" id="quotes-title" style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)">${t("What families say", "家長分享")}</h2>
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
            <p class="section-lead">${t("This page is the light clay class for ages 3–16. Other courses have their own pages.", "本頁是3–16歲兒童輕黏土班。其他課程請見相關頁面。")}</p>
            <div class="silo-links" style="margin-bottom:28px">
              <a data-action="hub" href="${siloUrl}">${t("Kids Art overview", "兒童美術總覽")}</a>
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
              <div class="trial-badge">${t("Book a trial", "預約試堂")}</div>
              <h2 id="trial-title">${t("Ask about the clay class", "立即查詢黏土課程")}</h2>
              <p>${t(
                "Places are limited. WhatsApp us to book a trial.",
                "名額有限，歡迎 WhatsApp 預約試堂體驗"
              )}</p>
              <div class="btn-row">
                <a class="btn btn-teal" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("WhatsApp to book", "立即預約體驗")}</a>
                <a class="btn btn-ghost" data-action="hub" href="${trialUrl}">${t("How the trial works", "了解試堂詳情")}</a>
              </div>
            </div>
          </div>
        </section>

        <section class="final" aria-labelledby="final-title">
          <h2 id="final-title">${t("Ask about light clay in Ho Man Tin", "立即查詢黏土課程")}</h2>
          <p>${t("4–6 per class. WhatsApp us for a suitable group, class times and a trial.", "4–6人小班，歡迎 WhatsApp 查詢合適分組、上課時間及體驗安排。")}</p>
          <div class="btn-row">
            <a class="btn btn-coral" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("Book a trial", "立即預約體驗")}</a>
            <a class="btn btn-outline-white" data-action="hub" href="${siloUrl}">${t("Back to Kids Art", "返回兒童美術")}</a>
          </div>
        </section>
      </div>
    `;

    this._applyFullBleedCss();
    this._observeHeight();
  }
}

if (!customElements.get("creative-art-and-clay-hub")) {
  customElements.define("creative-art-and-clay-hub", CreativeArtAndClayHub);
}
