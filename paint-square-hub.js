/**
 * ICAcademy Adult Painting Course Paint Square — course landing (not a hub)
 * Tag name: paint-square-hub
 * Version: 2026-08-16-v4 (breadcrumb silo → /course/drawing-and-painting; smaller mobile type)
 *
 * Parent silo hub: Drawing & Painting
 * Canonical:
 *   EN: /courses/paint-square
 *   ZH: /zh/courses/paint-square
 */
const WA_DEFAULT = "https://wa.me/85265808022";

function mediaUrl(id, w, h, q = 75) {
  return `https://static.wixstatic.com/media/${id}/v1/fill/w_${w},h_${h},al_c,q_${q},enc_auto/${id}`;
}

const IMG = {
  hero: mediaUrl("4ea940_9933a9bae4884170a5bf9bd5355e340f~mv2.jpg", 1600, 1000),
  detail: mediaUrl("4ea940_abc39ed616844e3e9dfc221b74ddc3c0~mv2.jpg", 800, 1000),
  gallery: [
    {
      id: "4ea940_abc39ed616844e3e9dfc221b74ddc3c0~mv2.jpg",
      alt: { en: "Adult painting class in the Ho Man Tin studio", zh: "何文田成人繪畫課堂" },
    },
    {
      id: "4ea940_a395efb223e443d9b89010698227ef24~mv2.jpg",
      alt: { en: "Paint Square student artwork", zh: "成人繪畫學員作品" },
    },
    {
      id: "4ea940_f3c8a439a70f4b76bc6aba33d9b5a798~mv2.jpg",
      alt: { en: "Paint Square student artwork", zh: "成人繪畫學員作品" },
    },
    {
      id: "4ea940_981de8a688bf46d9badedc21c5be41b0~mv2.jpg",
      alt: { en: "Student painting in class", zh: "課堂中的學員作品" },
    },
    {
      id: "4ea940_6316c00d08ba47a7b83ef177b68f18c3~mv2.jpg",
      alt: { en: "Paint Square student artwork", zh: "成人繪畫學員作品" },
    },
    {
      id: "4ea940_9125bc2a85514aea8b50e21043a92580~mv2.jpg",
      alt: { en: "Rabbit painting by a Paint Square student", zh: "成人繪畫學員作品（動物）" },
    },
    {
      id: "4ea940_1b0968b86c634aae81860fdedb5e1c95~mv2.jpg",
      alt: { en: "Still-life painting by a Paint Square student", zh: "成人繪畫學員作品（靜物）" },
    },
    {
      id: "4ea940_9ac998d9630943198d74ce40d7441b94~mv2.jpg",
      alt: { en: "Space painting by a Paint Square student", zh: "成人繪畫學員作品（太空）" },
    },
  ],
};

const WHY = [
  {
    title: { en: "Paint at your own pace", zh: "按個人喜好學習" },
    desc: {
      en: "Topics follow your interest — still life, landscape, portrait or illustration — with advice matched to your level.",
      zh: "可因應學員喜好及需求學習不同繪畫技法，由靜物、風景到插畫，導師按程度調整課題。",
    },
  },
  {
    title: { en: "More than one medium", zh: "多元媒介探索" },
    desc: {
      en: "Western painting, watercolour, sketching, comics, illustration and fashion drawing can all be part of the class.",
      zh: "內容包含西洋畫、水彩、素描、漫畫、插畫及時裝設計等，讓學員擴闊創作媒介。",
    },
  },
  {
    title: { en: "Find your visual voice", zh: "認識自己的創作風格" },
    desc: {
      en: "Demos, practice and one-to-one talk help you see your strengths and build work you enjoy looking at.",
      zh: "透過講解、即場示範與實踐，學員更了解自己的創作風格、特點及長處，完成賞心悅目的作品。",
    },
  },
];

const FEATURES = [
  {
    title: { en: "All levels welcome", zh: "適合所有程度" },
    desc: {
      en: "Beginners start with tools and picture-making; experienced students go deeper into technique and style.",
      zh: "初學者可由工具與基本畫面開始；有經驗學員則可深化技法、構圖與個人風格。",
    },
  },
  {
    title: { en: "Small-group guidance", zh: "小班個別指導" },
    desc: {
      en: "Maximum 6 students, so the teacher can follow each work in progress.",
      zh: "每班最多6人，導師可按每位學員的進度提供個別指導。",
    },
  },
  {
    title: { en: "Art as communication", zh: "繪畫作為表達" },
    desc: {
      en: "Painting is also a way to record, communicate and express feeling — not only to copy a reference.",
      zh: "繪畫不但是藝術形式，也是溝通、記實和抒發情感的媒介，課程重視表達而不只臨摹。",
    },
  },
];

const LEARNING = [
  { en: "For all skill levels, including complete beginners", zh: "適合所有程度或初學者" },
  { en: "Maximum 6 per class, with guidance matched to you", zh: "每班最多6人，導師按個人程度指導" },
  { en: "Western painting, watercolour, sketching, comics, illustration and fashion drawing", zh: "西洋畫、水彩、素描、漫畫、插畫及時裝設計等" },
  { en: "Demos, practice and advice on how to organise a picture", zh: "專業講解、即場示範，並協助整理畫面與解決製作難題" },
  { en: "1 hour 10 minutes; regular weekly class (Mon & Sat sessions)", zh: "每堂1小時10分鐘；常規每週上課（現時星期一及星期六）" },
];

const STEPS = [
  {
    step: "1",
    title: { en: "Direction and subject", zh: "方向與題材" },
    desc: {
      en: "Talk through what you want to paint and pick a subject that fits your level.",
      zh: "了解學員喜好與目標，選擇適合程度的題材與媒介。",
    },
  },
  {
    step: "2",
    title: { en: "Demo and plan", zh: "示範與構圖" },
    desc: {
      en: "See key techniques, then sketch composition so you avoid common production problems.",
      zh: "導師示範重點技法，並協助構圖與步驟，減少製作時不必要的困難。",
    },
  },
  {
    step: "3",
    title: { en: "Paint and adjust", zh: "實踐與調整" },
    desc: {
      en: "Work at your own pace. The teacher checks colour, proportion and layers as you go.",
      zh: "按自己的速度繪畫，導師即場跟進比例、色彩與層次。",
    },
  },
  {
    step: "4",
    title: { en: "Finish and review", zh: "完成與回顧" },
    desc: {
      en: "Refine the picture, notice your strengths, and take home a finished work.",
      zh: "整理畫面、認識自己的風格與長處，完成可展示的作品。",
    },
  },
];

const QUOTES = [
  {
    text: {
      en: "The teacher is patient and explains each child’s progress clearly. We look forward to growing here.",
      zh: "老師好有耐性講解小朋友既情況！期待繼續喺度成長！",
    },
    by: { en: "Student", zh: "學員" },
  },
  {
    text: {
      en: "Friendly teachers, a clean studio, and a good range of courses.",
      zh: "老師友善，環境乾淨，課程多元化。",
    },
    by: { en: "Student", zh: "學員" },
  },
  {
    text: {
      en: "Our son and daughter have taken art classes here for years. The teaching is excellent.",
      zh: "兒子及女兒已經在這間美術學校上堂多年，師資優良。",
    },
    by: { en: "Student", zh: "學員" },
  },
];

const FAQ = [
  {
    q: { en: "Who is Paint Square for?", zh: "成人繪畫課程 Paint Square 適合邊啲人？" },
    a: {
      en: "Adults and older teens at all skill levels, including beginners. Maximum 6 per class. The teacher adjusts topics to your interest and experience.",
      zh: "適合所有程度或初學者（成人及較年長學員）。每班最多6人，導師會按喜好、經驗與需求調整內容。",
    },
  },
  {
    q: { en: "What will we learn?", zh: "課程會學咩？" },
    a: {
      en: "The class is flexible: western painting, watercolour, sketching, comics, illustration and fashion drawing can all be covered, depending on the group.",
      zh: "課程多元化，內容可包含西洋畫、水彩、素描、漫畫、插畫及時裝設計等，實際課題按學員方向安排。",
    },
  },
  {
    q: { en: "How is this different from Visual Art Class or acrylic class?", zh: "同綜合美術課程、塑膠彩班有咩分別？" },
    a: {
      en: "Acrylic class focuses on acrylic technique. Visual Art Class is mixed media for ages 14+. Paint Square is the adult painting class: more open subject and medium choice, including watercolour, comics and illustration.",
      zh: "塑膠彩班專注塑膠彩技法；綜合美術課程以14歲以上多媒介創作為主。Paint Square 是成人繪畫班，題材與媒介較開放，可涵蓋水彩、漫畫、插畫等。",
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
      en: "1 hour 10 minutes. Regular weekly class; current sessions include Monday and Saturday. WhatsApp us for the latest times.",
      zh: "每堂1小時10分鐘，常規每週上課；現時星期一及星期六設有課堂。實際時段請透過 WhatsApp 查詢。",
    },
  },
  {
    q: { en: "Can I book a trial?", zh: "可以試堂嗎？" },
    a: {
      en: "Yes. Regular courses can book an HK$100 trial. WhatsApp us for a suitable date and time.",
      zh: "可以。所有常規課程均可預約 HK$100 試堂；請透過 WhatsApp 查詢合適日期及時間。",
    },
  },
  {
    q: { en: "Where is the studio?", zh: "畫室位於哪裡？" },
    a: {
      en: "IC Academy is at Ground Floor Shop 3, 79 Waterloo Road, Ho Man Tin, Kowloon — about a 5-minute walk from Pui Ching.",
      zh: "IC Academy 位於九龍何文田窩打老道79號地下3號舖，鄰近培正小學及中學，步行約5分鐘可到。",
    },
  },
];

const RELATED = [
  {
    title: { en: "Visual Art Class", zh: "綜合美術課程" },
    desc: { en: "Ages 14+ · mixed media and personal direction", zh: "14歲以上 · 多媒介探索與個人創作" },
    hrefSlug: "/course/kids-art/visual-art-class",
  },
  {
    title: { en: "Acrylic Painting Class", zh: "塑膠彩班" },
    desc: { en: "Ages 14+ · colour, brushwork and a finished painting", zh: "14歲以上 · 色彩、筆觸與完整畫作" },
    hrefSlug: "/course/drawing-and-painting/acrylic-painting-class",
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

class PaintSquareHub extends HTMLElement {
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
          if (h1 && /Adult Painting Course Paint Square/i.test(h1.textContent || "")) this.render();
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
    const bleed = document.getElementById("paint-square-hub-page-bleed");
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
    const id = "paint-square-hub-page-bleed";
    if (document.getElementById(id)) return;
    const style = document.createElement("style");
    style.id = id;
    style.textContent = `
      paint-square-hub {
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
    const siloUrl = this.path("/course/drawing-and-painting");
    const trialUrl = this.path("/homantin-children-art-trial");
    const galleryUrl = this.isEn
      ? "https://www.icacademy.com.hk/studentartwork"
      : "https://www.icacademy.com.hk/zh/studentartwork";
    const homeUrl = this.isEn ? "https://www.icacademy.com.hk" : "https://www.icacademy.com.hk/zh";

    const waPrefill = this._waPrefill(
      t(
        "Hi, I’d like to ask about the Adult Painting Course Paint Square in Ho Man Tin / a trial. Age: ____; painting experience: ____; preferred days: ____.",
        "你好，我想查詢何文田成人繪畫課程 Paint Square／體驗堂。年齡：＿＿；繪畫經驗：＿＿；方便日子：＿＿。"
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
                <span>${t("Paint Square", "成人繪畫課程")}</span>
              </nav>
              <p class="hero-eyebrow">${t("Ho Man Tin · Adult painting class", "何文田 · 成人繪畫課程")}</p>
              <div class="hero-title-chip">
                <h1 id="hero-title">${t("Adult Painting Course Paint Square", "何文田成人繪畫課程 Paint Square")}</h1>
                <p class="hero-sub">${t("All levels, including beginners", "適合所有程度或初學者")}</p>
              </div>
              <p class="hero-lead">
                ${t(
                  "A weekly adult painting class in Ho Man Tin. Learn western painting, watercolour, sketching, comics, illustration or fashion drawing — matched to your interest. Maximum 6 students, 1 hour 10 minutes.",
                  "何文田成人繪畫常規班。可因應喜好學習西洋畫、水彩、素描、漫畫、插畫及時裝設計。每班最多6人，每堂1小時10分鐘，初學者及有經驗學員均可參加。"
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
              <div class="trust-item">✓ ${t("All levels", "所有程度")}<span>${t("Beginners welcome", "初學者亦可")}</span></div>
              <div class="trust-item">✓ ${t("Max 6 per class", "每班最多6人")}<span>${t("Individual guidance", "小班個別指導")}</span></div>
              <div class="trust-item">✓ ${t("1 hr 10 min", "每堂1小時10分鐘")}<span>${t("Regular weekly class", "常規每週上課")}</span></div>
              <div class="trust-item">✓ ${t("Mon & Sat sessions", "星期一及星期六")}<span>${t("Ask for the latest times", "時段請向畫室查詢")}</span></div>
            </div>
          </div>
        </section>

        <section class="section section-soft" aria-labelledby="why-title">
          <div class="wrap">
            <h2 class="section-title" id="why-title">${t("Why Paint Square?", "為什麼選擇成人繪畫課程 Paint Square？")}</h2>
            <p class="section-lead">
              ${t(
                "Not a fixed syllabus — paint what you care about, with professional demos and advice so you finish work you are proud of.",
                "不是固定跟步驟上色，而是按喜好學習不同技法，透過示範與指導完成自己喜歡的作品。"
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
                <h2 id="details-title">${t("Paint Square course details", "成人繪畫課程 Paint Square · 課程詳情")}</h2>
                <p class="hero-sub" style="margin:0 0 12px;font-size:1.05rem">${t("All levels · Max 6 · Ho Man Tin studio", "適合所有程度｜最多6人小班｜何文田畫室")}</p>
                <p class="detail-lead">
                  ${t(
                    "Painting is a colourful art form — and a way to communicate, record and express feeling. Paint Square follows each student’s preference, with demos, practice and advice on how to organise a picture.",
                    "繪畫不但是多姿多彩的藝術形式，也是溝通、記實和抒發情感的媒介。Adult Class 可因應學員喜好及需求學習不同繪畫技法，透過講解、即場示範、溝通與實踐，了解自己的創作風格、特點及長處。"
                  )}
                </p>
                <p class="detail-lead">
                  ${t(
                    "The course is mixed: western painting, watercolour, sketching, comics, illustration and fashion drawing. Enjoy making work that looks good — and that feels like yours.",
                    "課程內容多元化，包含西洋畫、水彩、素描、漫畫、插畫及時裝設計等。讓每位學員享受創作，也能畫出賞心悅目的作品。"
                  )}
                </p>
                <ul class="check-list">
                  ${LEARNING.map((item) => `<li>${this.pick(item)}</li>`).join("")}
                </ul>
                <a class="btn btn-coral" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("Ask about this class", "查詢課程詳情")}</a>
              </div>
              <div class="detail-media">
                <img src="${IMG.detail}" alt="${t("Adult painting class in the Ho Man Tin studio", "何文田成人繪畫課堂")}" width="800" height="1000" loading="lazy" />
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
            <p class="section-lead">${t("Studio class and student paintings from Paint Square — landscapes, still life, animals and more.", "課堂實況與學員作品：風景、靜物、動物及不同題材")}</p>
            <div class="gallery-grid">
              ${IMG.gallery
                .map(
                  (item) =>
                    `<figure><img src="${mediaUrl(item.id, 800, 800)}" alt="${this.pick(item.alt)}" loading="lazy" /><figcaption>${t("Student work", "學員作品")}</figcaption></figure>`
                )
                .join("")}
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
              <cite>— ${t("IC Academy Paint Square", "IC Academy 成人繪畫課程")}</cite>
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
            <p class="section-lead">${t("This page is the adult painting course Paint Square. Other media have their own pages.", "本頁是成人繪畫課程 Paint Square。其他媒介請見相關課程頁。")}</p>
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
              <h2 id="trial-title">${t("Book a Paint Square trial", "立即查詢成人繪畫課程")}</h2>
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
          <h2 id="final-title">${t("Ask about adult painting in Ho Man Tin", "立即查詢成人繪畫課程")}</h2>
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

customElements.define("paint-square-hub", PaintSquareHub);
