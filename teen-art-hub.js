/**
 * ICAcademy Teen Art Silo Landing – Custom Element
 * Tag name: teen-art-hub
 * Version: 2026-08-30-v3 (Sketching Class View course → /course/drawing-and-painting/sketching-class; smaller mobile type)
 * Design system: matches kids-art-hub / drawing-painting-hub (coral / teal)
 * Routes: /course/teen-art (EN) | /zh/course/teen-art (ZH)
 *
 * This is a silo landing, not a new invented course. Copy and course cards
 * reuse verified ICAcademy programmes only.
 */
const WA_DEFAULT = "https://wa.me/85265808022";

function mediaUrl(id, w, h) {
  return `https://static.wixstatic.com/media/${id}/v1/fill/w_${w},h_${h},al_c,q_85,enc_auto/${id}`;
}

const IMG = {
  hero: mediaUrl("b98cc9_ebe4308b54a24d24b9be7d03605ac494~mv2.jpg", 1600, 1000),
  creative: mediaUrl("b98cc9_f16629f0d6414271822e19d767f44457~mv2.jpg", 800, 600),
  visualArt: mediaUrl("b98cc9_ebe4308b54a24d24b9be7d03605ac494~mv2.jpg", 800, 600),
  sketch: mediaUrl("b98cc9_e67c1877a803495fa45ccea725f0f7ce~mv2.jpg", 800, 600),
  acrylic: mediaUrl("b98cc9_4207ae71d0a44db99d86eeadc8e54f33~mv2.jpeg", 800, 600),
  comic: mediaUrl("b98cc9_a62d943a779d4ddb8e85227dc0872726~mv2.jpg", 800, 600),
  gallery1: mediaUrl("b98cc9_f16629f0d6414271822e19d767f44457~mv2.jpg", 800, 800),
  gallery2: mediaUrl("b98cc9_7f99cc18f81e42f9a5551280f6425b55~mv2.jpg", 800, 800),
  gallery3: mediaUrl("b98cc9_4207ae71d0a44db99d86eeadc8e54f33~mv2.jpeg", 800, 800),
  gallery4: mediaUrl("b98cc9_8b62b24164484280941000b87ffdecc8~mv2.jpg", 800, 800),
  detail: mediaUrl("b98cc9_2811c03afb09487fb93b5356133bd57b~mv2.jpg", 800, 1000),
};

/** Related programmes — ages / URLs audited from existing ICAcademy course pages 2026-08 */
const COURSES = [
  {
    id: "creative",
    name: { en: "Creative Art Level I–III", zh: "兒童創意美術 Level I–III" },
    age: { en: "Ages 7–14 · Level III 11–14", zh: "7–14歲 · Level III 11–14歲" },
    focus: {
      en: "Drawing, colour, mixed media and themed making by level",
      zh: "按程度學習繪畫技巧、色彩、多媒介創作及主題探索",
    },
    points: {
      en: ["Level III deepens technique and personal style", "Observation, composition and mixed-media work", "A step from kids creative art toward more mature expression"],
      zh: ["Level III 深化技巧與個人風格", "觀察、構圖與多媒介創作", "由兒童創意美術邁向更成熟的藝術表達"],
    },
    media: { en: "Painting, collage, mixed media", zh: "繪畫、拼貼、多元媒介" },
    hrefSlug: "/course/kids-art/creative-art-classes",
    image: IMG.creative,
    imageAlt: { en: "ICAcademy Creative Art Level III student work", zh: "ICAcademy青少年創意美術作品" },
  },
  {
    id: "visual-art",
    name: { en: "Visual Art Class", zh: "綜合美術課程" },
    age: { en: "Ages 14+", zh: "14歲以上" },
    focus: {
      en: "Mixed-media exploration and a personal creative direction",
      zh: "多媒介探索與個人創作方向",
    },
    points: {
      en: ["Sketching, acrylic and mixed media", "From idea to finished work", "Guidance matched to level"],
      zh: ["素描、塑膠彩及混合媒介", "主題構思至完成作品", "按程度個別指導"],
    },
    media: { en: "Sketching, acrylic, mixed media", zh: "素描、塑膠彩、混合媒介" },
    hrefSlug: "/course/kids-art/visual-art-class",
    image: IMG.visualArt,
    imageAlt: { en: "ICAcademy Visual Art Class student work", zh: "ICAcademy青少年綜合美術作品" },
  },
  {
    id: "sketch",
    name: { en: "Sketching Class", zh: "素描技巧班" },
    age: { en: "Ages 9+", zh: "9歲以上" },
    focus: { en: "Observation, proportion, light and texture", zh: "觀察、比例、光暗與質感" },
    points: {
      en: ["Pencil control and underdrawing", "Composition and space", "Light, shade and materials"],
      zh: ["鉛筆控制與起稿", "構圖與空間", "光暗及材質表現"],
    },
    media: { en: "Pencil sketching", zh: "鉛筆素描" },
    hrefSlug: "/course/drawing-and-painting/sketching-class",
    image: IMG.sketch,
    imageAlt: { en: "Ho Man Tin sketching class student work", zh: "何文田素描課程學生作品" },
  },
  {
    id: "acrylic",
    name: { en: "Acrylic Painting Class", zh: "塑膠彩班" },
    age: { en: "Ages 14+", zh: "14歲以上" },
    focus: { en: "Colour mixing, brushwork and composition", zh: "調色、筆觸與構圖技巧" },
    points: {
      en: ["Acrylic fundamentals", "Colour and brushwork practice", "Complete picture-making"],
      zh: ["塑膠彩基礎運用", "色彩與筆觸練習", "完整畫面表達"],
    },
    media: { en: "Acrylic paint", zh: "塑膠彩" },
    hrefSlug: "/course/drawing-and-painting/acrylic-painting-class",
    image: IMG.acrylic,
    imageAlt: { en: "ICAcademy acrylic painting class student work", zh: "ICAcademy塑膠彩課程學生作品" },
  },
  {
    id: "comic",
    name: { en: "Comic Drawing Class", zh: "卡通漫畫班" },
    age: { en: "Ages 8+", zh: "8歲以上" },
    focus: {
      en: "Character proportion, expressions and original character design",
      zh: "人物比例、表情與原創角色設計",
    },
    points: {
      en: ["Manga character proportion and features", "Character design and story settings", "Panel composition"],
      zh: ["漫畫人物比例與五官", "角色造型與故事背景", "畫面構圖表達"],
    },
    media: { en: "Pencil, markers, manga media", zh: "鉛筆、馬克筆、漫畫媒材" },
    hrefSlug: "/course/kids-art/comic-drawing-class",
    image: IMG.comic,
    imageAlt: { en: "ICAcademy student manga character design", zh: "ICAcademy學生漫畫角色設計作品" },
  },
];

const AUDIENCE = [
  {
    title: { en: "Ready to go beyond basics", zh: "已有基本繪畫經驗" },
    desc: { en: "Want stronger drawing skill after kids creative art", zh: "希望在兒童創意美術之後，進一步提升繪畫技巧" },
  },
  {
    title: { en: "Want structured learning", zh: "希望更有系統地學畫畫" },
    desc: { en: "Enjoy drawing and want a clearer path, not only copying", zh: "喜歡畫畫，希望有系統地學習，而不只是臨摹" },
  },
  {
    title: { en: "Build observation and composition", zh: "加強觀察、構圖與造型" },
    desc: { en: "Strengthen observation, proportion, composition and colour", zh: "希望加強觀察、構圖、造型及色彩運用" },
  },
  {
    title: { en: "Move toward mature expression", zh: "邁向更成熟的藝術表達" },
    desc: { en: "Progress from kids making toward a more personal visual language", zh: "希望由兒童創作逐步進階至更成熟的視覺表達" },
  },
];

const SKILLS = [
  {
    title: { en: "Drawing fundamentals", zh: "繪畫基礎" },
    desc: { en: "Observation, proportion, form and structure", zh: "觀察、比例、造型與結構" },
  },
  {
    title: { en: "Composition", zh: "構圖" },
    desc: { en: "Organise subjects and visual storytelling more clearly", zh: "更有條理地組織畫面與視覺敘事" },
  },
  {
    title: { en: "Colour", zh: "色彩" },
    desc: { en: "Understand colour relationships and application", zh: "認識色彩關係與運用方法" },
  },
  {
    title: { en: "Different media", zh: "不同媒介" },
    desc: { en: "Sketching, acrylic, mixed media and comic drawing — as taught in existing courses", zh: "素描、塑膠彩、混合媒介及漫畫 — 均為 ICAcademy 現有課程所教授" },
  },
  {
    title: { en: "Creative expression", zh: "創意表達" },
    desc: { en: "Move beyond copying and develop individual ideas", zh: "不停留於臨摹，發展個人想法" },
  },
  {
    title: { en: "Progressive learning", zh: "循序進階" },
    desc: { en: "From kids creative art toward more advanced visual-art skills", zh: "由兒童創意美術，逐步建立更進階的視覺藝術能力" },
  },
];

const PATH = [
  {
    step: "1",
    title: { en: "Early visual art", zh: "幼兒創意／視藝啟蒙" },
    desc: { en: "First marks, observation and making for younger children", zh: "幼兒接觸觀察、線條、色彩與創作" },
    hrefSlug: "/course/kids-art/kids-art-classes-homantin",
    cta: { en: "Kids art classes", zh: "兒童畫班" },
  },
  {
    step: "2",
    title: { en: "Kids Creative Art", zh: "兒童創意美術" },
    desc: { en: "Ages 7–14 · drawing, colour and mixed media by level", zh: "7–14歲 · 按程度學習繪畫、色彩與多媒介" },
    hrefSlug: "/course/kids-art/creative-art-classes",
    cta: { en: "Creative Art", zh: "創意美術" },
  },
  {
    step: "3",
    title: { en: "Teen Art", zh: "青少年美術" },
    desc: { en: "This page — choose a course for the teen / secondary stage", zh: "本頁 · 為青少年／中學生階段選擇合適課程" },
    hrefSlug: "",
    cta: { en: "You are here", zh: "目前頁面" },
  },
  {
    step: "4",
    title: { en: "Specialist drawing", zh: "進階／專項藝術學習" },
    desc: { en: "Sketching, acrylic, mixed media and adult painting", zh: "素描、塑膠彩、綜合美術及成人繪畫" },
    hrefSlug: "/course/drawing-and-painting",
    cta: { en: "Drawing & Painting", zh: "繪畫及素描" },
  },
];

const FAQ = [
  {
    q: { en: "Which course should a teenager start with?", zh: "青少年學畫畫應該由甚麼課程開始？" },
    a: {
      en: "It depends on age, experience and interest. Creative Art Level III suits ages 11–14 who want to deepen mixed-media drawing. Ages 14+ can look at Visual Art Class (mixed media and personal direction), Acrylic Painting Class, or Sketching Class (ages 9+). If you are unsure, WhatsApp us or book an HK$100 trial.",
      zh: "視年齡、經驗與興趣而定。兒童創意美術 Level III 適合約 11–14 歲、希望深化多媒介繪畫的學員。14 歲以上可了解綜合美術課程（多媒介與個人創作方向）、塑膠彩班，或 9 歲以上的素描技巧班。未確定時，歡迎 WhatsApp 查詢或預約 HK$100 試堂。",
    },
  },
  {
    q: { en: "Can we join with little or no drawing experience?", zh: "沒有繪畫基礎可以參加嗎？" },
    a: {
      en: "Yes. Related courses adjust teaching by level. Beginners can WhatsApp us with age, drawing experience and preferred times so we can suggest a suitable direction — or book an HK$100 trial first.",
      zh: "可以。相關課程會按學員程度調整指導。初學者可先透過 WhatsApp 說明年齡、繪畫經驗及方便時間，我們會協助了解較合適方向；亦可先預約 HK$100 試堂。",
    },
  },
  {
    q: { en: "How is teen art different from kids Creative Art?", zh: "青少年美術和兒童創意美術有甚麼分別？" },
    a: {
      en: "Creative Art Level I–III is mainly for ages 7–14 and builds drawing and mixed-media skills by level. Visual Art Class suits ages 14+ and focuses more on exploring media and a personal creative direction. This page helps parents and students find the right course for the teen / secondary stage.",
      zh: "兒童創意美術 Level I–III 主要面向約 7–14 歲，按程度建立繪畫與多媒介創作基礎。綜合美術課程適合 14 歲以上，較著重多媒介探索與個人創作方向。本頁協助家長及學員為青少年／中學生階段選擇合適課程。",
    },
  },
  {
    q: { en: "What drawing skills can students develop?", zh: "課程會學習哪些繪畫技巧？" },
    a: {
      en: "Depending on the course: observation, proportion, form and composition; colour mixing and application; pencil sketching; acrylic painting; mixed media; and, for comic drawing, character design and panel composition. We do not promise a fixed outcome — learning is matched to level.",
      zh: "視所選課程而定，可包括觀察、比例、造型與構圖；色彩關係與運用；鉛筆素描；塑膠彩；混合媒介；以及漫畫班的角色造型與畫面構圖。學習會按程度調整，我們不會保證特定成果。",
    },
  },
  {
    q: { en: "How do we choose a drawing class for a secondary student?", zh: "如何選擇適合中學生的畫班？" },
    a: {
      en: "Start with interest (drawing / painting / comics), current experience, and the verified age range of each course. Use the related courses on this page to compare. If you are still unsure, WhatsApp us or try a class first.",
      zh: "可先按興趣（繪畫／塑膠彩／漫畫）、現有經驗，以及各課程已核實的年齡範圍比較。本頁相關課程可作對照。仍未確定時，歡迎 WhatsApp 查詢或先試堂。",
    },
  },
  {
    q: { en: "Can we book a trial first?", zh: "可以先預約試堂嗎？" },
    a: {
      en: "Yes. Regular courses can book an HK$100 trial. WhatsApp us with age, drawing experience and preferred times and we will help match a class.",
      zh: "可以。常規課程均可預約 HK$100 試堂。WhatsApp 告訴我們年齡、繪畫經驗和方便時間，我們會協助了解合適班別。",
    },
  },
  {
    q: { en: "Where is ICAcademy?", zh: "ICAcademy 位於哪裏？" },
    a: {
      en: "IC Academy is at Ground Floor Shop 3, 79F Waterloo Road, Ho Man Tin, Kowloon, near Pui Ching Middle School and Primary School — about a 5-minute walk from Pui Ching.",
      zh: "IC Academy 位於九龍窩打老道79F地下3號鋪（何文田），鄰近培正中學及小學，步行約 5 分鐘可到。",
    },
  },
];

const STYLES = `
:host {
  display: block;
  width: 100% !important;
  max-width: 100% !important;
  min-width: 0;
  min-height: 0;
  height: auto;
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
.hub { width: 100%; max-width: 100%; min-width: 0; margin: 0; padding: 0; overflow-x: visible; background: var(--bg); }
.wrap {
  width: min(1200px, calc(100% - 48px));
  max-width: 1200px;
  margin: 0 auto;
}
.section { padding: 64px 0; background: var(--bg); width: 100%; }
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

.crumbs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  font-size: 0.92rem;
  color: var(--muted);
  margin: 0 0 18px;
}
.crumbs a { color: var(--teal); font-weight: 700; text-decoration: none; }
.crumbs span[aria-hidden="true"] { opacity: 0.55; }

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

.hero {
  position: relative;
  width: 100%;
  max-width: 100%;
  min-height: clamp(420px, 52vw, 580px);
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
  background-image: var(--hero-img);
  background-size: cover;
  background-position: 68% center;
  filter: grayscale(0.05);
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
  padding: 56px 0;
  width: min(1200px, calc(100% - 48px));
}
.hero-copy { max-width: 40rem; text-align: left; }
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
  max-width: min(720px, 100%);
}
.hero-title-chip h1 {
  margin: 0;
  font-size: clamp(1.32rem, 3.4vw, 2.05rem);
  line-height: 1.35;
  word-break: keep-all;
}
.hero-sub {
  margin: 10px 0 0;
  font-size: clamp(1.05rem, 2.4vw, 1.45rem);
  font-weight: 800;
  line-height: 1.4;
  color: var(--navy);
}
.hero-lead {
  margin: 0 0 24px;
  max-width: 40em;
  color: var(--muted);
  font-size: 1.02rem;
}

.card-grid { display: grid; gap: 20px; }
@media (min-width: 720px) {
  .card-grid.cols-2 { grid-template-columns: repeat(2, 1fr); }
  .card-grid.cols-3 { grid-template-columns: repeat(2, 1fr); }
  .card-grid.cols-4 { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 980px) {
  .card-grid.cols-3 { grid-template-columns: repeat(3, 1fr); }
  .card-grid.cols-4 { grid-template-columns: repeat(4, 1fr); }
}
.card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow);
}
.card-media { aspect-ratio: 16 / 10; background: #ececec; overflow: hidden; }
.card-media img { width: 100%; height: 100%; object-fit: cover; }
.card-body { padding: 20px 20px 22px; display: flex; flex-direction: column; gap: 10px; flex: 1; }
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
.card-actions { margin-top: auto; padding-top: 10px; display: flex; flex-wrap: wrap; gap: 10px; }

.guide-card {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 24px 20px;
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: 160px;
}
.guide-card h3 { margin: 0; font-size: 1.08rem; }
.guide-card p { margin: 0; color: var(--muted); flex: 1; font-size: 0.96rem; }

.path-grid {
  display: grid;
  gap: 14px;
  grid-template-columns: 1fr;
}
@media (min-width: 720px) {
  .path-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 980px) {
  .path-grid { grid-template-columns: repeat(4, 1fr); }
}
.path-step {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 22px 16px;
  text-align: center;
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.path-step.is-current {
  border-color: var(--coral);
  background: var(--coral-soft);
}
.path-num {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 999px;
  background: var(--teal-soft);
  color: var(--teal-deep);
  font-weight: 800;
  margin: 0 auto 4px;
}
.path-step.is-current .path-num {
  background: var(--coral);
  color: #fff;
}
.path-step h3 { margin: 0; font-size: 1.05rem; }
.path-step p { margin: 0; color: var(--muted); font-size: 0.92rem; flex: 1; }
.path-step a, .path-current-label {
  color: var(--teal);
  font-weight: 800;
  text-decoration: none;
  font-size: 0.92rem;
}
.path-current-label { color: var(--coral-deep); }
.path-note {
  text-align: center;
  color: var(--muted);
  font-size: 0.95rem;
  margin: 22px auto 0;
  max-width: 48ch;
}

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
.check-list { margin: 0 0 22px; padding: 0; list-style: none; }
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
.center-actions { display: flex; justify-content: center; margin-top: 28px; gap: 14px; flex-wrap: wrap; }

.trial {
  background: var(--coral-soft);
  border: 0;
  border-radius: 28px;
  padding: clamp(32px, 6vw, 52px) clamp(22px, 5vw, 48px);
  text-align: center;
  width: 100%;
}
.trial-badge {
  display: inline-flex;
  background: var(--coral);
  color: #fff;
  border-radius: 999px;
  padding: 8px 18px;
  font-weight: 800;
  font-size: 0.95rem;
  margin: 0 auto 18px;
}
.trial h2 {
  margin: 0 0 14px;
  font-size: clamp(1.45rem, 3vw, 1.9rem);
  text-align: center;
}
.trial p { margin: 0 auto 16px; max-width: 42ch; color: var(--muted); text-align: center; }
.trial-price {
  display: block;
  width: 100%;
  margin: 0 auto 22px !important;
  text-align: center;
  font-size: 1.05rem;
  color: var(--muted);
  font-weight: 600;
}
.trial-price strong {
  display: block;
  margin: 6px auto 0;
  color: var(--coral-deep);
  font-weight: 800;
  font-size: clamp(1.35rem, 2.5vw, 1.65rem);
  font-family: var(--font);
  letter-spacing: 0.02em;
  text-align: center;
}
.trial .btn { min-width: min(100%, 280px); }
.trial .btn-row { justify-content: center; }

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

.final {
  background: var(--teal);
  color: #fff;
  text-align: center;
  padding: 64px 20px;
  width: 100%;
  margin: 0;
  border: 0;
  border-radius: 0;
}
.final:last-child { margin-bottom: 0; }
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

@media (max-width: 640px) {
  :host { font-size: 14px; }
  h1, .hero-title-chip h1, .hero h1 { font-size: 1.5em !important; line-height: 1.35; }
  h2, .section-title, .final h2, .detail h2, .trial h2, .form-card h2, .info-card h2 { font-size: 1.32em !important; }
  h3, .faq-q, .card-body h3, .path-step h3, .method h3 { font-size: 1.06em !important; }
  .hero-sub { font-size: 1.1em !important; }
  p, li, .section-lead, .hero-lead, .faq-a, .card-body p, .path-step p, .final p, .detail-lead, .hero-points { font-size: 1em !important; }
  .hero-eyebrow, .kicker, .crumbs, .trust-item span { font-size: 0.92em !important; }
  .btn { font-size: 1em !important; }
  .hero { min-height: 0; }
  .hero .wrap { padding: 32px 0 36px; }
  .section { padding: 48px 0; }
  .btn-row { flex-direction: column; align-items: stretch; }
  .btn { width: 100%; }
  .card-actions { flex-direction: column; }
  .card-actions .btn { width: 100%; }
  .wrap { width: min(1200px, calc(100% - 32px)); }
  .hero .wrap { width: min(1200px, calc(100% - 32px)); }
}
`;

class TeenArtHub extends HTMLElement {
  static get observedAttributes() {
    return ["wa-url", "locale"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._onClick = this._onClick.bind(this);
    this._applyFullBleedCss = this._applyFullBleedCss.bind(this);
    this._syncHeight = this._syncHeight.bind(this);
  }

  connectedCallback() {
    this.render();
    const syncLocale = () => {
      try {
        if (this.localeCode === "en") {
          const h1 = this.shadowRoot && this.shadowRoot.querySelector("h1");
          if (h1 && /青少年畫班/.test(h1.textContent || "")) this.render();
        }
      } catch (e) {}
    };
    setTimeout(syncLocale, 0);
    setTimeout(syncLocale, 500);
    this.shadowRoot.addEventListener("click", this._onClick);
    window.addEventListener("resize", this._applyFullBleedCss);
    window.addEventListener("orientationchange", this._applyFullBleedCss);
    this._applyFullBleedCss();
  }

  disconnectedCallback() {
    this.shadowRoot.removeEventListener("click", this._onClick);
    window.removeEventListener("resize", this._applyFullBleedCss);
    window.removeEventListener("orientationchange", this._applyFullBleedCss);
    if (this._ro) {
      this._ro.disconnect();
      this._ro = null;
    }
    const bleed = document.getElementById("teen-art-hub-page-bleed");
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
      const path = String((window.location && window.location.pathname) || "");
      if (/^\/zh(\/|$)/i.test(path)) return "zh";
      if (path && path !== "/") return "en";
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

    if (action === "scroll-courses") {
      event.preventDefault();
      const sec = this.shadowRoot.getElementById("secCourses");
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

  _courseCardsHtml() {
    const t = (en, zh) => (this.isEn ? en : zh);
    return COURSES.map((c) => {
      const name = this.pick(c.name);
      return `
      <article class="card">
        <div class="card-media">
          <img src="${c.image}" alt="${this.pick(c.imageAlt)}" loading="lazy" decoding="async" width="640" height="400" />
        </div>
        <div class="card-body">
          <span class="meta">${this.pick(c.age)}</span>
          <h3>${name}</h3>
          <p style="margin:0;color:var(--muted)">${this.pick(c.focus)}</p>
          <ul class="points">
            ${this.pick(c.points).map((p) => `<li>${p}</li>`).join("")}
          </ul>
          <div class="card-actions">
            <a class="btn btn-ghost" data-action="course" href="${this.path(c.hrefSlug)}">${t("View course", "查看課程")}</a>
            <a class="btn btn-coral" data-action="whatsapp" href="${this._waPrefill(
              t(
                `Hi, I’d like to ask about “${name}” / an HK$100 trial.`,
                `你好，我想查詢「${name}」／HK$100試堂安排。`
              )
            )}" target="_blank" rel="noopener noreferrer">HK$100 ${t("trial", "試堂")}</a>
          </div>
        </div>
      </article>`;
    }).join("");
  }

  _audienceHtml() {
    return AUDIENCE.map(
      (item) => `
      <article class="guide-card">
        <h3>${this.pick(item.title)}</h3>
        <p>${this.pick(item.desc)}</p>
      </article>`
    ).join("");
  }

  _skillsHtml() {
    return SKILLS.map(
      (item) => `
      <article class="guide-card">
        <h3>${this.pick(item.title)}</h3>
        <p>${this.pick(item.desc)}</p>
      </article>`
    ).join("");
  }

  _pathHtml() {
    return PATH.map((p) => {
      const isCurrent = !p.hrefSlug;
      const cta = isCurrent
        ? `<span class="path-current-label">${this.pick(p.cta)}</span>`
        : `<a data-action="course" href="${this.path(p.hrefSlug)}">${this.pick(p.cta)} →</a>`;
      return `
      <div class="path-step${isCurrent ? " is-current" : ""}"${isCurrent ? ' aria-current="page"' : ""}>
        <div class="path-num">${p.step}</div>
        <h3>${this.pick(p.title)}</h3>
        <p>${this.pick(p.desc)}</p>
        ${cta}
      </div>`;
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

  _waPrefill(text) {
    return `${this.waUrl}?text=${encodeURIComponent(text)}`;
  }

  _injectPageBleedCss() {
    const id = "teen-art-hub-page-bleed";
    if (document.getElementById(id)) return;
    const style = document.createElement("style");
    style.id = id;
    style.textContent = `
      html, body {
        overflow-x: hidden !important;
      }
      teen-art-hub {
        display: block !important;
        box-sizing: border-box !important;
        padding: 0 !important;
        margin-bottom: 0 !important;
        border-radius: 0 !important;
        box-shadow: none !important;
      }
      #SITE_PAGES,
      #PAGES_CONTAINER,
      .wixui-page {
        min-height: 0 !important;
        padding-bottom: 0 !important;
        margin-bottom: 0 !important;
      }
      #SITE_PAGES,
      #PAGES_CONTAINER,
      #SITE_FOOTER,
      #masterPage {
        overflow: visible !important;
        overflow-x: visible !important;
        max-width: none !important;
      }
      #SITE_FOOTER { margin-top: 0 !important; }
    `;
    document.head.appendChild(style);
  }

  _viewportWidth() {
    return document.documentElement.clientWidth || window.innerWidth || 0;
  }

  _applyFullBleedCss() {
    try {
      this._injectPageBleedCss();
      this.style.removeProperty("left");
      this.style.removeProperty("right");
      this.style.removeProperty("transform");

      const vw = this._viewportWidth();
      if (vw) {
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
      }

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
    } catch (e) {
      // ignore
    }
    this._collapseTrailingGap();
  }

  _collapseTrailingGap() {
    try {
      this.style.setProperty("margin-bottom", "0", "important");
      this.style.setProperty("padding-bottom", "0", "important");
      let el = this.parentElement;
      for (let i = 0; i < 10 && el; i++) {
        el.style.setProperty("min-height", "0", "important");
        el.style.setProperty("padding-bottom", "0", "important");
        el.style.setProperty("margin-bottom", "0", "important");
        const id = el.id || "";
        const tag = (el.tagName || "").toLowerCase();
        if (tag === "main" || id === "SITE_PAGES" || id === "PAGES_CONTAINER" || id === "masterPage") break;
        el.style.setProperty("height", "auto", "important");
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
      this.style.setProperty("height", `${h}px`, "important");
      this.style.setProperty("min-height", "0", "important");
      this.style.setProperty("max-height", "none", "important");
    }
    this._collapseTrailingGap();
  }

  render() {
    const t = (en, zh) => (this.isEn ? en : zh);
    this._applyFullBleedCss();
    const courseHubUrl = this.path("/course-hub");
    const kidsArtUrl = this.path("/course/kids-art");
    const drawingUrl = this.path("/course/drawing-and-painting");
    const trialUrl = this.path("/homantin-children-art-trial");
    const galleryUrl = this.isEn
      ? "https://www.icacademy.com.hk/studentartwork"
      : "https://www.icacademy.com.hk/zh/studentartwork";
    const waPrefill = this._waPrefill(
      t(
        "Hi, I’d like to ask about teen art classes in Ho Man Tin / an HK$100 trial. Student age: ____; drawing experience: ____; preferred times: ____.",
        "你好，我想查詢何文田青少年畫班／HK$100試堂。學員年齡：＿＿；繪畫經驗：＿＿；方便時間：＿＿。"
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
                <a data-action="hub" href="${courseHubUrl}">${t("Courses", "課程總覽")}</a>
                <span aria-hidden="true">/</span>
                <span>${t("Teen Art", "青少年美術")}</span>
              </nav>
              <p class="hero-eyebrow">${t("Ho Man Tin · teen / secondary art classes", "何文田 • 青少年／中學生階段美術課程")}</p>
              <div class="hero-title-chip">
                <h1 id="hero-title">${t("Teen Art Classes in Ho Man Tin | Drawing & Visual Art", "何文田青少年畫班｜青少年美術及繪畫課程")}</h1>
                <p class="hero-sub">${t("From kids creative art toward stronger drawing and visual expression", "由兒童創意美術，進階至更成熟的繪畫與視覺表達")}</p>
              </div>
              <p class="hero-lead">
                ${t(
                  "ICAcademy offers structured art learning for the teen / secondary stage. Students can strengthen observation, drawing skill and visual expression, then continue into specialist drawing and painting courses. Choose a verified course below, or book a trial.",
                  "ICAcademy 為青少年／中學生階段提供有系統的美術學習。課程著重觀察、繪畫技巧與視覺表達，並銜接現有的兒童創意美術與專項繪畫課程。可按程度與興趣了解合適方向，再預約試堂。"
                )}
              </p>
              <div class="btn-row">
                <a class="btn btn-coral" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("Book HK$100 trial", "預約 HK$100 試堂")}</a>
                <a class="btn btn-outline-teal" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("WhatsApp course enquiry", "WhatsApp 查詢課程")}</a>
                <button type="button" class="btn btn-ghost" data-action="scroll-courses">${t("See related courses", "查看相關課程")}</button>
              </div>
            </div>
          </div>
        </section>

        <section class="section" aria-labelledby="audience-title">
          <div class="wrap">
            <h2 class="section-title" id="audience-title">${t("Who is this for?", "適合甚麼人？")}</h2>
            <p class="section-lead">${t("For the teen / secondary stage — not a single invented age band. We match a course after hearing age and experience.", "面向青少年／中學生階段；並非一個虛構的固定年齡班。實際課程會按年齡與經驗配對。")}</p>
            <div class="card-grid cols-4">
              ${this._audienceHtml()}
            </div>
          </div>
        </section>

        <section class="section section-soft" aria-labelledby="skills-title">
          <div class="wrap">
            <h2 class="section-title" id="skills-title">${t("What students can develop", "學員可以發展甚麼")}</h2>
            <p class="section-lead">${t("Themes below match how ICAcademy already teaches drawing and visual art. Progress depends on the course and the student.", "以下主題對應 ICAcademy 現有繪畫及視藝教學。實際進度視課程與學員程度而定。")}</p>
            <div class="card-grid cols-3">
              ${this._skillsHtml()}
            </div>
          </div>
        </section>

        <section class="section" aria-labelledby="path-title">
          <div class="wrap">
            <h2 class="section-title" id="path-title">${t("Art learning progression at ICAcademy", "ICAcademy 美術學習進程")}</h2>
            <p class="section-lead">${t("A guide to existing pages — not every student follows the same order.", "對應現有課程頁的進程參考，並非每位學員都必須依同一順序。")}</p>
            <div class="path-grid">
              ${this._pathHtml()}
            </div>
            <p class="path-note">${t("If you are unsure which stage fits, WhatsApp us or try a class first.", "未確定適合哪個階段時，歡迎 WhatsApp 查詢或先試堂。")}</p>
          </div>
        </section>

        <section class="section section-soft" id="secCourses" aria-labelledby="courses-title">
          <div class="wrap">
            <h2 class="section-title" id="courses-title">${t("Related courses for teens", "青少年相關課程")}</h2>
            <p class="section-lead">${t("These are existing ICAcademy courses. Ages and focus are verified. Ask for current times, fees and places.", "以下均為現有課程。年齡與重點已核實。上課時間、學費及名額請查詢最新安排。")}</p>
            <div class="card-grid cols-2">
              ${this._courseCardsHtml()}
            </div>
          </div>
        </section>

        <section class="section" aria-labelledby="location-title">
          <div class="wrap">
            <div class="detail">
              <div>
                <h2 id="location-title">${t("Teen art classes in Ho Man Tin, Kowloon", "何文田青少年畫班 · 九龍畫室")}</h2>
                <p class="detail-meta">${t("Ho Man Tin · near Pui Ching", "何文田・培正附近")}</p>
                <p class="detail-lead">
                  ${t(
                    "ICAcademy’s studio is in Ho Man Tin, Kowloon — a practical location for families looking for teen art classes in Kowloon as well as Ho Man Tin.",
                    "ICAcademy 畫室位於九龍何文田，方便尋找何文田青少年畫班，以至九龍青少年畫班的家庭。"
                  )}
                </p>
                <ul class="check-list">
                  <li>${t("Ground Floor Shop 3, 79F Waterloo Road, Ho Man Tin, Kowloon", "九龍窩打老道79F地下3號鋪（何文田）")}</li>
                  <li>${t("Near Pui Ching Middle School and Primary School · about a 5-minute walk", "鄰近培正中學及小學，步行約 5 分鐘")}</li>
                  <li>${t("WhatsApp us for class times and an HK$100 trial", "歡迎 WhatsApp 查詢上課時間及 HK$100 試堂")}</li>
                </ul>
                <a class="btn btn-coral" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("WhatsApp us", "WhatsApp 查詢")}</a>
              </div>
              <div class="detail-media">
                <img src="${IMG.detail}" alt="${t("ICAcademy student artwork", "ICAcademy學員作品")}" width="800" height="1000" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        <section class="section section-soft" aria-labelledby="gallery-title">
          <div class="wrap">
            <h2 class="section-title" id="gallery-title">${t("Student artwork", "學員作品")}</h2>
            <p class="section-lead">${t("Thumbnails already published on the site. See more on the student artwork page.", "以下為站內已刊出作品縮圖。想看更多，可前往學員作品頁。")}</p>
            <div class="gallery-grid">
              <figure><img src="${IMG.gallery1}" alt="${t("ICAcademy Creative Art student work", "ICAcademy創意美術作品")}" loading="lazy" /><figcaption>${t("Student work", "學員作品")}</figcaption></figure>
              <figure><img src="${IMG.gallery2}" alt="${t("Ho Man Tin sketching class student work", "何文田素描課程學生作品")}" loading="lazy" /><figcaption>${t("Student work", "學員作品")}</figcaption></figure>
              <figure><img src="${IMG.gallery3}" alt="${t("ICAcademy acrylic painting student work", "ICAcademy塑膠彩課程學生作品")}" loading="lazy" /><figcaption>${t("Student work", "學員作品")}</figcaption></figure>
              <figure><img src="${IMG.gallery4}" alt="${t("ICAcademy drawing class making", "ICAcademy繪畫課堂創作")}" loading="lazy" /><figcaption>${t("Class work", "課堂創作")}</figcaption></figure>
            </div>
            <div class="center-actions">
              <a class="btn btn-outline-teal" data-action="course" href="${galleryUrl}">${t("See more student artwork", "查看更多學員作品")}</a>
            </div>
          </div>
        </section>

        <section class="section" aria-labelledby="trial-title">
          <div class="wrap">
            <div class="trial">
              <div class="trial-badge">${t("Not sure which course fits?", "想知道哪個課程最適合？")}</div>
              <h2 id="trial-title">${t("Ask us, or try a class first", "查詢選班，或先預約試堂")}</h2>
              <p>
                ${t(
                  "Tell us the student’s age, drawing experience and preferred times. We will help match a suitable existing course.",
                  "告訴我們學員年齡、繪畫經驗及方便時間，我們會協助了解合適的現有課程與班別。"
                )}
              </p>
              <p class="trial-price">${t("Single trial", "單次試堂")}<strong>HK$100</strong></p>
              <div class="btn-row" style="justify-content:center">
                <a class="btn btn-teal" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("Book HK$100 trial", "預約 HK$100 試堂")}</a>
                <a class="btn btn-ghost" data-action="hub" href="${trialUrl}">${t("Trial details", "了解試堂詳情")}</a>
              </div>
            </div>
          </div>
        </section>

        <section class="section section-soft" aria-labelledby="faq-title">
          <div class="wrap">
            <h2 class="section-title" id="faq-title">${t("Teen art class FAQ", "青少年畫班常見問題")}</h2>
            <div class="faq-list">
              ${this._faqHtml()}
            </div>
          </div>
        </section>

        <section class="section" aria-labelledby="cross-title">
          <div class="wrap" style="text-align:center">
            <h2 class="section-title" id="cross-title">${t("Explore more art courses", "探索更多藝術課程")}</h2>
            <p class="section-lead">${t("Younger children can start with Kids Art. Specialist drawing and painting has its own hub.", "較年幼兒童可從兒童美術開始；專項繪畫及素描另有總覽頁。")}</p>
            <div class="center-actions">
              <a class="btn btn-outline-teal" data-action="hub" href="${kidsArtUrl}">${t("Kids Art", "兒童美術")}</a>
              <a class="btn btn-coral" data-action="hub" href="${drawingUrl}">${t("Drawing & Painting", "繪畫及素描")}</a>
              <a class="btn btn-ghost" data-action="hub" href="${courseHubUrl}">${t("Back to courses", "返回課程總覽")}</a>
            </div>
          </div>
        </section>

        <section class="final" aria-labelledby="final-title">
          <h2 id="final-title">${t("Ask about teen art classes", "立即查詢青少年畫班")}</h2>
          <p>${t("Ho Man Tin studio. WhatsApp us about a suitable course, class times and an HK$100 trial.", "何文田畫室，歡迎 WhatsApp 查詢合適課程、上課時間及 HK$100 試堂安排。")}</p>
          <div class="btn-row">
            <a class="btn btn-coral" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("WhatsApp enquiry", "WhatsApp 查詢")}</a>
            <a class="btn btn-outline-white" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("Book HK$100 trial", "預約 HK$100 試堂")}</a>
          </div>
        </section>
      </div>
    `;

    this._applyFullBleedCss();
    this._observeHeight();
  }
}

if (!customElements.get("teen-art-hub")) {
  customElements.define("teen-art-hub", TeenArtHub);
}
