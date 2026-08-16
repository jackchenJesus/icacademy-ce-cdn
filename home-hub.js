/**
 * IC Academy Home – Custom Element
 * Tag name: home-hub
 * Version: 2026-08-16-v2
 * Rebuilds homepage body below the native Editor hero slideshow.
 * Keep the Wix Slideshow section; this element starts at "Why IC Academy".
 * Locale via URL /zh, html lang, or attribute locale="en"|"zh" (default en).
 */
const WA_DEFAULT = "https://wa.me/85265808022";

function mediaUrl(id, w, h, q = 75) {
  return `https://static.wixstatic.com/media/${id}/v1/fill/w_${w},h_${h},al_c,q_${q},enc_auto/${id}`;
}

const IMG = {
  why: mediaUrl("b98cc9_d807c53a36a24d0ea19878291b1c0d2e~mv2.jpg", 800, 1000, 75),
};

const WHY_CARDS = [
  {
    title: { en: "Stress relief × emotional expression", zh: "減壓 × 情緒表達" },
    body: {
      en: "Art-based tools to ease HKBPE anxiety and build healthy emotional habits",
      zh: "以藝術創作舒緩呈分試焦慮，建立健康情緒調節習慣",
    },
  },
  {
    title: { en: "Unbeatable location", zh: "地利之便" },
    body: {
      en: "Directly opposite Pui Ching — straight from school, no extra commute",
      zh: "培正對面，放學直達，免去接送奔波的家長負擔",
    },
  },
  {
    title: { en: "Achievement first", zh: "成就感優先" },
    body: {
      en: "Every child completes a piece they are proud of — every session, every time",
      zh: "每個孩子都能完成作品，每件作品都被認真對待",
    },
  },
  {
    title: { en: "Secondary Portfolio support", zh: "升中 Portfolio 支援" },
    body: {
      en: "Systematic skills training from foundational drawing to a competitive Portfolio",
      zh: "系統化訓練，由基礎素描到入學作品集全程指導",
    },
  },
];

const PATHWAYS = [
  {
    age: { en: "Age 3–5", zh: "3–5歲" },
    title: { en: "Early childhood creative art", zh: "幼兒創意啟蒙" },
    body: {
      en: "Sensory exploration, free mark-making, and a safe space for young children to grow in confidence and focus.",
      zh: "從感官探索到自由塗鴉，在安全的創作環境中建立孩子自信心與專注力。",
    },
    href: "/courses/visual-art-skills-course",
  },
  {
    age: { en: "Age 6–12", zh: "6–12歲" },
    title: { en: "Primary stress relief & emotional art", zh: "小學減壓 & 情緒表達" },
    body: {
      en: "Targeted support for HKBPE-era anxiety — using art to help children process emotions and find calm.",
      zh: "針對呈分試壓力，以藝術輔助孩子疏導焦慮，培養情緒調節能力。",
    },
    href: "/courses/creative-art-classes",
  },
  {
    age: { en: "Secondary +", zh: "中一起" },
    title: { en: "Teen Portfolio & professional skills", zh: "青少年升學 Portfolio" },
    body: {
      en: "Sketching, colour theory, and observational training — building a Portfolio that stands out at interview.",
      zh: "素描、色彩、觀察力系統訓練，協助學生建立具競爭力的入學作品集。",
    },
    href: "/courses/visual-art-class",
  },
];

const COMPARE_ROWS = [
  {
    label: { en: "Teaching focus", zh: "教學焦點" },
    typical: { en: "Technique and finished pictures", zh: "偏重技巧與完成作品" },
    ours: { en: "Art wellbeing × visual arts training", zh: "藝術心理成長 × 視覺藝術" },
  },
  {
    label: { en: "Feedback", zh: "課堂回饋" },
    typical: { en: "Grading, ranking, comparing work", zh: "常比較作品優劣、排名" },
    ours: { en: "No ranking — process observed, not scored", zh: "不排名、不評分，觀察創作過程" },
  },
  {
    label: { en: "Class size", zh: "每班人數" },
    typical: { en: "Larger groups", zh: "較大班教學" },
    ours: { en: "Max 6 (prep class max 4)", zh: "上限 6 人（幼兒預備班不多於 4 人）" },
  },
  {
    label: { en: "Location", zh: "地點" },
    typical: { en: "Extra commute after school", zh: "放學後需額外接送" },
    ours: { en: "Opposite Pui Ching — 5-minute walk", zh: "培正對面，步行約 5 分鐘" },
  },
  {
    label: { en: "Portfolio", zh: "升中作品集" },
    typical: { en: "Rarely structured for interviews", zh: "較少系統化升學支援" },
    ours: { en: "End-to-end secondary Portfolio support", zh: "升中 Portfolio 一條龍指導" },
  },
  {
    label: { en: "Materials", zh: "教材" },
    typical: { en: "Often charged separately", zh: "可能另收材料費" },
    ours: { en: "Professional materials included", zh: "專業教材已包含於學費" },
  },
];

const STORIES_EN = [
  {
    quote:
      "My daughter became very anxious in Primary 6. After three months here, she started sharing her feelings through her drawings — it opened something up in her.",
    name: "CM",
    role: "Pui Ching Primary parent",
  },
  {
    quote:
      "My son was terrified of 'drawing badly'. The teachers here never judge — they just guide. Now he looks forward to every single class.",
    name: "Mr Lam",
    role: "School Net 34 parent",
  },
  {
    quote:
      "The Portfolio programme was incredibly structured. The teachers knew exactly what each secondary school looks for — my son got into his first-choice school.",
    name: "Mrs Cheung",
    role: "Teen Portfolio programme parent",
  },
];

const STORIES_ZH = [
  {
    quote:
      "有一位小男孩，從小在父親眼中總是「做得不夠好」，無論是學業還是其他方面，他都缺乏自信。因為學校的需要，他開始參加我們的創意美術課。慢慢他不同了——他開始喜歡畫畫，而且越畫越好，發現原來自己是可以做得到的。每次完成作品時，臉上那份發自內心的微笑，連現在想起來也會笑。後來在畫展中他被選中公開展示作品，父親第一次由衷地讚賞自己的兒子。媽媽後來告訴我們：這段畫畫的經歷，不單改變了兒子，也改變了父親對兒子的看法，他們的關係也和諧了很多。",
    name: "培正小學家長",
    role: "真實家庭故事",
  },
  {
    quote:
      "喺自己未去 IC 學畫畫時，成日都會覺得小朋友畫嘅畫咁靚是否老師畫的而只不過小朋友填色而已。後來因為我媽媽（姚婆婆）在 IC 參加成人畫班，每次都帶著歡喜的心情跟家人朋友分享她的畫作，所以自己就提起了參加成人畫班的興趣，跟媽媽一起上堂，這已成為我倆的親子活動。而我亦證明了每幅美麗的圖畫確實是在 Andy Sir 的指導下完成的。謝謝 IC！",
    name: "Magnar媽媽",
    role: "34校網學童家長",
  },
  {
    quote: "Portfolio 課程非常有系統，老師清楚了解各中學的要求，兒子最後成功入讀心儀中學。",
    name: "張太",
    role: "升中 Portfolio 課程家長",
  },
];

const FAQ_EN = [
  {
    q: "My child has no drawing experience at all — can they still join?",
    a: "Absolutely. Every IC Academy programme starts from zero. Our teachers design a personalised learning path based on each child's developmental stage. We especially welcome children who have never held a paintbrush — creativity grows best when it begins from joy, not pressure.",
  },
  {
    q: "How does art actually help with HKBPE exam stress?",
    a: "Regular art-making can lower anxiety in children. Our sessions use art psychology principles, guiding children to express emotions they cannot yet put into words — releasing tension around academic performance so they can face assessments from a calmer place.",
  },
  {
    q: "When should we start preparing a secondary school Portfolio?",
    a: "We recommend beginning in the second term of Primary 5. Starting early gives your child time to accumulate a body of work, develop technical skills, and — with teacher guidance — build a Portfolio that reflects genuine personal voice rather than last-minute cramming.",
  },
  {
    q: "What is the absence policy, and do we need to supply our own materials?",
    a: "We offer a flexible catch-up class arrangement for absences. Professional art materials are provided by the centre — no separate purchases needed. For fees and scheduling, WhatsApp us or visit the trial class page.",
  },
];

const FAQ_ZH = [
  {
    q: "關於我們的團隊，我們的師資？",
    a: "老師們畢業於英國、美國、香港、台灣、澳門等大學；除廣東話外，也能以流利英語、普通話授課。85% 的老師具備 5 年以上教學經驗，團隊包括漫畫家、水墨畫導師，以及作品被立法會、英國牛津大學及各地收藏家收藏的藝術家。",
  },
  {
    q: "你們的課程有分級嗎？",
    a: "有。主要分為三個階段：視藝技巧（約 3–7 歲）、創意美術（約 8–12 歲）、綜合美術（約 13 歲或以上）。我們會按小朋友程度建議最合適的起點。",
  },
  {
    q: "每班有多少人？",
    a: "我們堅持小班教學，課程上限是 6 人。3–5 歲視藝技巧預備班為確保安全及更有效指導，每班不多於 4 人。",
  },
  {
    q: "完成一個作品要多久？",
    a: "視藝技巧課程不多於 2 堂、創意美術約 3–4 堂；綜合美術約 4–6 堂或以上。大型或比賽／升學作品可按個別需要調整。",
  },
  {
    q: "每一節上課時間及上課時間表？",
    a: "課堂均為 60 分鐘一節，綜合美術課程為 70 分鐘一節。每星期超過 20 個時段任擇。",
  },
  {
    q: "學費是多少？還有其他雜費嗎？",
    a: "除學費外沒有額外收費，教材和用品已包含於學費內。建議自備圍裙和手袖（亦可於本中心購買）。",
  },
  {
    q: "學費是怎麼計算的？",
    a: "月費制，按當月實際上課堂數計算（如該月有 4 個星期一，就交 4 堂費用），公眾假期不計算在內。",
  },
];

const TAGS = [
  { en: "Ho Man Tin art class", zh: "何文田兒童畫班", href: "/course-hub" },
  { en: "children's art opposite Pui Ching", zh: "培正對面畫班", href: "/course-hub" },
  { en: "HKBPE stress relief", zh: "呈分試減壓", href: "/homantin-children-art-trial" },
  { en: "School Net 34 after-school", zh: "何文田興趣班推薦", href: "/course-hub" },
  { en: "build children's confidence", zh: "提升自信心", href: "/homantin-children-art-trial" },
  { en: "secondary Portfolio Hong Kong", zh: "升中 Portfolio", href: "/courses/visual-art-class" },
  { en: "art therapy for kids", zh: "藝術心理輔導", href: "/homantin-children-art-trial" },
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
.btn-outline-navy {
  background: #fff; color: var(--navy); border: 2px solid var(--navy);
}
.btn-outline-white { background: transparent; color: #fff; border: 2px solid #fff; }

.why-grid {
  display: grid; gap: 16px;
}
@media (min-width: 800px) { .why-grid { grid-template-columns: repeat(2, 1fr); } }
.why-card {
  background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius);
  padding: 22px 22px 20px; box-shadow: var(--shadow);
}
.why-card h3 { margin: 0 0 8px; color: var(--navy); }
.why-card p { margin: 0; color: var(--muted); }
.detail {
  display: grid; gap: 36px; align-items: center; margin-top: 36px;
}
@media (min-width: 900px) { .detail { grid-template-columns: 1.15fr 0.85fr; gap: 48px; } }
.detail-media {
  border-radius: 22px; overflow: hidden; box-shadow: var(--shadow); background: #eee;
  aspect-ratio: 4 / 5; max-height: 480px;
}
.detail-media img { width: 100%; height: 100%; object-fit: cover; }

.path-grid {
  display: grid; gap: 18px;
}
@media (min-width: 860px) { .path-grid { grid-template-columns: repeat(3, 1fr); } }
.path-card {
  background: #fff; border: 1px solid var(--line); border-radius: 20px;
  padding: 24px 22px 22px; text-decoration: none; display: flex; flex-direction: column;
  box-shadow: var(--shadow); min-height: 100%;
}
.path-card:hover { transform: translateY(-2px); }
.path-age {
  display: inline-flex; align-self: flex-start; background: var(--coral-soft);
  color: var(--coral-deep); border-radius: 999px; padding: 4px 12px;
  font-size: 0.86rem; font-weight: 800; margin-bottom: 12px;
}
.path-card h3 { font-size: 1.12rem; }
.path-card p { margin: 0 0 16px; color: var(--muted); flex: 1; }
.path-card span { color: var(--teal); font-weight: 800; }

.compare-table { width: 100%; border-collapse: collapse; display: none; }
@media (min-width: 860px) {
  .compare-table { display: table; background: #fff; border-radius: 16px; overflow: hidden; }
  .compare-cards { display: none; }
}
.compare-table th, .compare-table td {
  text-align: left; padding: 14px 16px; border-bottom: 1px solid var(--line); vertical-align: top;
}
.compare-table th { background: #f0fafb; color: var(--teal-deep); font-size: 0.92rem; }
.compare-table td:last-child { font-weight: 700; color: var(--navy); }
.compare-cards { display: grid; gap: 14px; }
.compare-card {
  background: var(--surface); border: 1px solid var(--line); border-radius: 16px; padding: 20px;
}
.compare-row {
  display: grid; grid-template-columns: 6em 1fr; gap: 10px; padding: 10px 0;
  border-bottom: 1px solid var(--line);
}
.compare-row:last-child { border-bottom: 0; }
.compare-label { font-size: 0.82rem; color: var(--muted); font-weight: 600; }

.story-grid { display: grid; gap: 18px; }
@media (min-width: 860px) { .story-grid { grid-template-columns: repeat(3, 1fr); } }
.story {
  background: #fff; border: 1px solid var(--line); border-radius: 20px;
  padding: 24px; box-shadow: var(--shadow); display: flex; flex-direction: column;
}
.story p { margin: 0 0 18px; color: var(--ink); flex: 1; }
.avatar {
  width: 42px; height: 42px; border-radius: 50%; background: var(--teal-soft);
  color: var(--teal-deep); display: inline-flex; align-items: center; justify-content: center;
  font-weight: 800; margin-right: 10px;
}
.story-meta { display: flex; align-items: center; }
.story-meta strong { display: block; }
.story-meta span { color: var(--muted); font-size: 0.9rem; }

.find-grid {
  display: grid; gap: 16px;
}
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

.tags { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; }
.tag {
  border: 0; border-radius: 999px; background: var(--teal-soft); color: var(--teal-deep);
  padding: 8px 14px; font-weight: 700; font-size: 0.9rem; text-decoration: none;
}

.faq-list { max-width: 820px; margin: 0 auto; }
.faq-item { padding: 22px 0; border-bottom: 1px solid #e5e5e5; }
.faq-item:first-child { border-top: 1px solid #e5e5e5; }
.faq-q { margin: 0 0 8px; font-weight: 800; font-size: 1.05rem; }
.faq-a { margin: 0; color: var(--muted); font-size: 0.98rem; }

.final {
  background: var(--teal); color: #fff; text-align: center;
  padding: 64px 20px; width: 100%; margin: 0; border: 0; border-radius: 0;
}
.final h2 { color: #fff; font-size: clamp(1.55rem, 3vw, 2rem); margin: 0 0 12px; }
.final p { color: rgba(255,255,255,.92); max-width: 42ch; margin: 0 auto 28px; }
.final .btn-row { justify-content: center; }

@media (max-width: 640px) {
  .btn-row { flex-direction: column; align-items: stretch; }
  .btn { width: 100%; }
  .compare-row { grid-template-columns: 1fr; gap: 4px; }
}
`;

class HomeHub extends HTMLElement {
  static get observedAttributes() {
    return ["wa-url", "locale"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._onClick = this._onClick.bind(this);
    this._applyFullBleedCss = this._applyFullBleedCss.bind(this);
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
    const bleed = document.getElementById("home-hub-page-bleed");
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
    const id = "home-hub-page-bleed";
    if (document.getElementById(id)) return;
    const style = document.createElement("style");
    style.id = id;
    style.textContent = `
      home-hub {
        display: block !important;
        box-sizing: border-box !important;
        width: 100% !important;
        max-width: none !important;
        margin: 0 !important;
        padding: 0 !important;
        border-radius: 0 !important;
        box-shadow: none !important;
      }
      #SITE_PAGES, #PAGES_CONTAINER, .wixui-page {
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
    } catch (e) {
      // ignore
    }
  }

  _applyFullBleedCss() {
    try {
      this._injectPageBleedCss();
      this.setAttribute("data-fullbleed", "1");
      this.style.setProperty("position", "relative", "important");
      this.style.setProperty("width", "100%", "important");
      this.style.setProperty("max-width", "none", "important");
      this.style.setProperty("margin", "0", "important");
      this.style.setProperty("padding", "0", "important");
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

    if (action === "scroll-faq") {
      event.preventDefault();
      const sec = this.shadowRoot.getElementById("secFaq");
      if (sec) sec.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
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
      "Hello IC Academy, I would like to book a trial class for my child.",
      "你好 IC Academy，我想為小朋友預約試堂。"
    );
    const waPrefill = this._waPrefill(waText);
    const stories = this.isEn ? STORIES_EN : STORIES_ZH;
    const faqs = this.isEn ? FAQ_EN : FAQ_ZH;
    const trialHref = this.path("/homantin-children-art-trial");
    const aboutHref = this.path("/about-us");

    this.shadowRoot.innerHTML = `
      <style>${STYLES}</style>
      <div class="hub">
        <section class="section">
          <div class="wrap">
            <p class="kicker">${t("Why IC Academy", "為什麼選擇我們?")}</p>
            <h2 class="section-title">${t("Ho Man Tin parents' most trusted after-school art space", "何文田家長最信賴的課後藝術空間")}</h2>
            <p class="section-lead">${t(
              "In Hong Kong's exam-driven culture, HKBPE pressure arrives earlier than ever. Most after-school programmes fill a child's schedule — few truly address their inner world. IC Academy takes a different approach: art as the safest, most open emotional outlet a child can have.",
              "在香港的學制壓力下，呈分試已成為小五、小六學生的精神重擔。傳統興趣班填滿課表，卻少有真正關注孩子的內心世界。IC Academy 從另一個角度出發——藝術，是孩子最安全、最自由的情緒出口。"
            )}</p>
            <p class="section-lead" style="margin-top:-16px">${t(
              "We do not grade artwork or rank students. In every session, our teachers observe each child's creative process through an art psychology lens — gently guiding self-expression, building a sense of achievement, and giving children a genuine space to breathe beyond academic demands.",
              "我們不設排名，不比較作品優劣。每堂課，老師會觀察孩子的創作狀態，以藝術心理的視角，引導孩子表達自我、建立成就感。這是一個讓孩子在學業壓力以外，真正「喘一口氣」的地方。"
            )}</p>
            <div class="why-grid">
              ${WHY_CARDS.map(
                (card) => `
                <article class="why-card">
                  <h3>${this.pick(card.title)}</h3>
                  <p>${this.pick(card.body)}</p>
                </article>`
              ).join("")}
            </div>
            <div class="detail">
              <div>
                <h2>${t("Our Approach", "教學方法")}</h2>
                <p class="section-lead" style="text-align:left;margin:0 0 20px">${t(
                  "With over 20 years of teaching experience, IC Academy aims to inspire children's holistic development through art education. We foster their keen awareness of the world around them and cultivate their ability to observe with depth and precision. This sparks imagination, enhances creativity, and encourages them to tackle challenges with confidence — becoming self-directed learners for life.",
                  "累積20年教學經驗，我們透過藝術教育啓發兒童的多元發展，使他們對身邊事物有敏銳的觸覺及慎密的觀察，從而發揮想象，增加創意，勇於解難，最終學會自發學習，終生受用。"
                )}</p>
                <a class="btn btn-outline-navy" data-action="hub" href="${aboutHref}">${t("Learn more", "了解更多")}</a>
              </div>
              <figure class="detail-media">
                <img src="${IMG.why}" alt="${t("IC Academy student creating artwork in class", "IC Academy 課堂學生創作")}" loading="lazy" width="800" height="1000" />
              </figure>
            </div>
          </div>
        </section>

        <section class="section section-soft" id="secPathways">
          <div class="wrap">
            <p class="kicker">${t("Three learning pathways", "三條成長路線")}</p>
            <h2 class="section-title">${t("Ages 3 to secondary — one continuous journey", "由3歲到中學，一條龍視覺藝術課程")}</h2>
            <p class="section-lead">${t(
              "Whether your child is taking their first steps in creativity or preparing a secondary school Portfolio, we have a structured pathway designed for their stage.",
              "無論孩子幾歲、目標是自信啟蒙還是升學備考，我們都有對應的成長路線。"
            )}</p>
            <div class="path-grid">
              ${PATHWAYS.map(
                (p) => `
                <a class="path-card" data-action="course" href="${this.path(p.href)}">
                  <span class="path-age">${this.pick(p.age)}</span>
                  <h3>${this.pick(p.title)}</h3>
                  <p>${this.pick(p.body)}</p>
                  <span>${t("View course", "查看課程")} →</span>
                </a>`
              ).join("")}
            </div>
          </div>
        </section>

        <section class="section">
          <div class="wrap">
            <p class="kicker">${t("How we compare", "我們的不同之處")}</p>
            <h2 class="section-title">${t("IC Academy vs a typical art class", "IC Academy vs 一般畫班")}</h2>
            <table class="compare-table">
              <thead>
                <tr>
                  <th>${t("Topic", "項目")}</th>
                  <th>${t("Typical art class", "一般畫班")}</th>
                  <th>IC Academy</th>
                </tr>
              </thead>
              <tbody>
                ${COMPARE_ROWS.map(
                  (row) => `
                  <tr>
                    <td>${this.pick(row.label)}</td>
                    <td>${this.pick(row.typical)}</td>
                    <td>${this.pick(row.ours)}</td>
                  </tr>`
                ).join("")}
              </tbody>
            </table>
            <div class="compare-cards">
              ${COMPARE_ROWS.map(
                (row) => `
                <article class="compare-card">
                  <h3>${this.pick(row.label)}</h3>
                  <div class="compare-row"><span class="compare-label">${t("Typical", "一般")}</span><span>${this.pick(row.typical)}</span></div>
                  <div class="compare-row"><span class="compare-label">IC</span><span>${this.pick(row.ours)}</span></div>
                </article>`
              ).join("")}
            </div>
          </div>
        </section>

        <section class="section section-soft">
          <div class="wrap">
            <p class="kicker">${t("Parent stories", "家長心聲")}</p>
            <h2 class="section-title">${t("Real families, real change", "真實家庭的改變")}</h2>
            <div class="story-grid">
              ${stories
                .map(
                  (s) => `
                <article class="story">
                  <p>“${s.quote}”</p>
                  <div class="story-meta">
                    <span class="avatar" aria-hidden="true">${(s.name || "?").slice(0, 2)}</span>
                    <div>
                      <strong>${s.name}</strong>
                      <span>${s.role}</span>
                    </div>
                  </div>
                </article>`
                )
                .join("")}
            </div>
          </div>
        </section>

        <section class="section">
          <div class="wrap">
            <p class="kicker">${t("Find us", "我們在哪裡")}</p>
            <h2 class="section-title">${t("Ho Man Tin · Kowloon City · directly opposite Pui Ching", "何文田 · 九龍城區 · 培正正對面")}</h2>
            <p class="section-lead">${t(
              "IC Academy sits in the heart of Ho Man Tin, one minute on foot from Pui Ching Primary School's main entrance. We serve families across Kowloon City, To Kwa Wan, and School Net 34 — making us the most convenient creative space for children in the area after school.",
              "IC Academy 藝術心理成長中心坐落於何文田，步行一分鐘即達培正小學正門。鄰近九龍城、土瓜灣及34校網各大名校，是區內學童放學後最方便的創作空間。"
            )}</p>
            <div class="find-grid">
              <article class="find-card">
                <h3>${t("Address", "地址")}</h3>
                <p>${t(
                  "Ground Floor Shop 3, 79F Waterloo Road, Ho Man Tin (near Pui Ching Road). Call or WhatsApp us if you need directions.",
                  "九龍窩打老道79F地下3號鋪（何文田培正道附近）。如需詳細指引歡迎致電或 WhatsApp。"
                )}</p>
              </article>
              <article class="find-card">
                <h3>${t("Nearby schools", "鄰近學校")}</h3>
                <ul>
                  <li>${t("Pui Ching Primary (5 min walk)", "培正小學（步行5分鐘）")}</li>
                  <li>${t("School Net 34 affiliated schools", "34校網各聯繫學校")}</li>
                  <li>${t("Kowloon City district primaries", "九龍城區各名小學")}</li>
                </ul>
              </article>
              <article class="find-card">
                <h3>${t("Class times", "上課時間")}</h3>
                <p>${t(
                  "More than 20 flexible class hours available daily (including weekends). Feel free to contact us for the timetable.",
                  "全日（包括六日）超過二十個時段任選。歡迎致電了解時間表。"
                )}</p>
              </article>
            </div>
          </div>
        </section>

        <section class="section section-soft">
          <div class="wrap">
            <div class="trial">
              <h2>${t("Give your child one trial class — and see the difference", "讓孩子試一堂，感受不一樣的學習")}</h2>
              <p>${t(
                "In the trial session, our teachers observe each child individually and provide a personalised programme recommendation. Places are limited — early booking is advised.",
                "首堂試堂體驗，老師將逐一觀察孩子的創作狀態，為你提供個人化的課程建議。名額有限，歡迎提早預約。"
              )}</p>
              <div class="btn-row">
                <a class="btn btn-navy" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("Reserve a trial class", "預約首堂試堂體驗")}</a>
                <a class="btn btn-outline-navy" data-action="scroll-faq" href="#secFaq">${t("Read the parent FAQ", "常見問題")}</a>
              </div>
            </div>
            <div class="tags" style="margin-top:28px">
              ${TAGS.map(
                (tag) =>
                  `<a class="tag" data-action="hub" href="${this.path(tag.href)}">${this.pick(tag)}</a>`
              ).join("")}
            </div>
          </div>
        </section>

        <section class="section" id="secFaq">
          <div class="wrap">
            <p class="kicker">${t("FAQ", "常見問題")}</p>
            <h2 class="section-title">${t("What parents ask most", "家長最想知道的事")}</h2>
            <div class="faq-list">
              ${faqs
                .map(
                  (item) => `
                <article class="faq-item">
                  <h3 class="faq-q">${item.q}</h3>
                  <p class="faq-a">${item.a}</p>
                </article>`
                )
                .join("")}
            </div>
          </div>
        </section>

        <section class="final">
          <h2>${t("Book a trial and start from joy, not pressure", "先試一堂，從喜悅開始，而不是壓力")}</h2>
          <p>${t(
            "WhatsApp us with your child's age and preferred times. We will help match a suitable class.",
            "WhatsApp 告訴我們小朋友年齡及方便時間，我們會協助配對合適班別。"
          )}</p>
          <div class="btn-row">
            <a class="btn btn-coral" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("WhatsApp enquiry", "WhatsApp 查詢")}</a>
            <a class="btn btn-outline-white" data-action="hub" href="${trialHref}">${t("Trial class details", "了解試堂詳情")}</a>
          </div>
        </section>
      </div>
    `;

    this._applyFullBleedCss();
    this._collapseTrailingGap();
  }
}

customElements.define("home-hub", HomeHub);
