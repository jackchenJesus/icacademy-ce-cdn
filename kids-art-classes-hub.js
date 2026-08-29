/**
 * ICAcademy Kids Art Classes — course landing (not a hub)
 * Tag name: kids-art-classes-hub (keep for Editor / CDN)
 * Version: 2026-08-16-v3 (full-width bleed + new kids hero)
 *
 * This page is the Ho Man Tin Kids Art Classes course landing.
 * The Kids Art silo hub is /course/kids-art (yo1yl).
 *
 * Canonical:
 *   EN: /course/kids-art/kids-art-classes-homantin
 *   ZH: /zh/course/kids-art/kids-art-classes-homantin
 */
const WA_DEFAULT = "https://wa.me/85265808022";

function mediaUrl(id, w, h, q = 75) {
  return `https://static.wixstatic.com/media/${id}/v1/fill/w_${w},h_${h},al_c,q_${q},enc_auto/${id}`;
}

const IMG = {
  hero: mediaUrl("b98cc9_ad34c2bb0fca4f8186d9e43bb8e1909c~mv2.jpg", 1600, 1000),
  prep: mediaUrl("b98cc9_ad34c2bb0fca4f8186d9e43bb8e1909c~mv2.jpg", 640, 400, 70),
  foundation: mediaUrl("b98cc9_c966f659ad4c45939096573490e41e6b~mv2.jpg", 640, 400, 70),
  creativeI: mediaUrl("b98cc9_9c6e5138d1fa40a7815d12218f642440~mv2.jpg", 640, 400, 70),
  creativeII: mediaUrl("b98cc9_66611472f2134e0fa854d2914e4ae347~mv2.jpg", 640, 400, 70),
  creativeIII: mediaUrl("b98cc9_f16629f0d6414271822e19d767f44457~mv2.jpg", 640, 400, 70),
  comic: mediaUrl("b98cc9_a62d943a779d4ddb8e85227dc0872726~mv2.jpg", 640, 400, 70),
  clay: mediaUrl("b98cc9_f417962750fd4399b1ee38c775da9a4e~mv2.jpeg", 640, 400, 70),
  sketch: mediaUrl("b98cc9_e67c1877a803495fa45ccea725f0f7ce~mv2.jpg", 640, 400, 70),
  gallery1: mediaUrl("b98cc9_169d3a5d148b4e7cb6c5dcdd66541734~mv2.jpeg", 800, 800),
  gallery2: mediaUrl("b98cc9_bcc7d1f85fd7431c933ad24f568c4a9b~mv2.jpg", 800, 800),
  gallery3: mediaUrl("b98cc9_f73677a0ad284e10b85772ce1fbecae5~mv2.jpg", 800, 800),
  gallery4: mediaUrl("b98cc9_5d9714fc876f42ba8b02b5b5d4b08923~mv2.jpg", 800, 800),
  detail: mediaUrl("b98cc9_9c6489b3ccfa47f0adc205c472aa87e7~mv2.jpg", 800, 1000),
};

const COURSES = [
  {
    id: "prep",
    name: { en: "Visual Art Skills (Preparatory)", zh: "視藝技巧（預備課程）" },
    age: { en: "Ages 3–5", zh: "3–5歲" },
    ageMin: 3,
    ageMax: 5,
    focus: {
      en: "Creative play, colour, line and sensory exploration",
      zh: "幼兒創意啟蒙與感官探索",
    },
    points: {
      en: ["Lines, shapes and colour basics", "Fine motor and hand–eye coordination", "Class routine and finishing a piece"],
      zh: ["線條、形狀與色彩入門", "小手肌與手眼協調", "課堂常規與獨立完成作品"],
    },
    media: { en: "Crayons, watercolour, collage, printmaking", zh: "蠟筆、水彩、剪貼、印畫" },
    hrefSlug: "/course/kids-art/visual-art-skills-course",
    role: "level",
    tags: ["foundation", "painting", "age-3-7"],
    image: IMG.prep,
    imageAlt: { en: "Young children’s creative painting class artwork", zh: "ICAcademy幼兒創意繪畫課堂作品" },
  },
  {
    id: "foundation",
    name: { en: "Visual Art Skills (Foundation)", zh: "視藝技巧（基礎課程）" },
    age: { en: "Ages 5–7", zh: "5–7歲" },
    ageMin: 5,
    ageMax: 7,
    focus: {
      en: "Observation, form and basic composition",
      zh: "建立觀察、造型與基本構圖能力",
    },
    points: {
      en: ["Observation and form", "Proportion and picture organisation", "Mixed-media making"],
      zh: ["觀察與造型練習", "比例與畫面組織", "多元媒介創作"],
    },
    media: { en: "Drawing and mixed media", zh: "繪畫及混合媒介" },
    hrefSlug: "/course/kids-art/visual-art-skills-course",
    role: "level",
    tags: ["foundation", "painting", "age-3-7"],
    image: IMG.foundation,
    imageAlt: { en: "Visual Art Skills Foundation student artwork", zh: "ICAcademy視藝技巧基礎課程學生作品" },
  },
  {
    id: "creative-i",
    name: { en: "Creative Art Level I", zh: "兒童創意美術 Level I" },
    age: { en: "Ages 7–9", zh: "7–9歲" },
    ageMin: 7,
    ageMax: 9,
    focus: {
      en: "Drawing basics and creative confidence",
      zh: "鞏固繪畫基礎，建立創作信心",
    },
    points: {
      en: ["Line, colour and composition", "Observation and imagination", "Simple mixed-media work"],
      zh: ["線條、色彩、基本構圖", "主題觀察與想像", "簡單多媒介創作"],
    },
    media: { en: "Drawing, collage and mixed materials", zh: "繪畫、拼貼、多元物料" },
    hrefSlug: "/courses/creative-art-classes",
    role: "level",
    tags: ["creative", "painting", "age-7-14"],
    image: IMG.creativeI,
    imageAlt: { en: "Creative Art student artwork", zh: "ICAcademy兒童創意美術作品" },
  },
  {
    id: "creative-ii",
    name: { en: "Creative Art Level II", zh: "兒童創意美術 Level II" },
    age: { en: "Ages 9–11", zh: "9–11歲" },
    ageMin: 9,
    ageMax: 11,
    focus: {
      en: "Proportion, space and finished pictures",
      zh: "加強比例、空間與畫面完整度",
    },
    points: {
      en: ["Advanced proportion and composition", "Colour combinations", "Personal ideas in themed work"],
      zh: ["比例與構圖進階", "色彩配搭", "個人想法融入主題"],
    },
    media: { en: "Drawing and mixed media", zh: "繪畫及多元媒介" },
    hrefSlug: "/courses/creative-art-classes",
    role: "level",
    tags: ["creative", "painting", "age-7-14"],
    image: IMG.creativeII,
    imageAlt: { en: "Primary Creative Art painting", zh: "ICAcademy小學創意繪畫作品" },
  },
  {
    id: "creative-iii",
    name: { en: "Creative Art Level III", zh: "兒童創意美術 Level III" },
    age: { en: "Ages 11–14", zh: "11–14歲" },
    ageMin: 11,
    ageMax: 14,
    focus: { en: "Technique, style and personal work", zh: "深化技巧與個人風格" },
    points: {
      en: ["Layering and form", "Themed studies", "Foundation for more advanced art"],
      zh: ["畫面層次與造型", "主題研究", "為進階美術建立基礎"],
    },
    media: { en: "Multi-media creation", zh: "多媒介創作" },
    hrefSlug: "/courses/creative-art-classes",
    role: "level",
    tags: ["creative", "painting", "age-7-14", "age-9-14"],
    image: IMG.creativeIII,
    imageAlt: { en: "Teen Creative Art artwork", zh: "ICAcademy青少年創意美術作品" },
  },
  {
    id: "comic",
    name: { en: "Comic Drawing Class", zh: "卡通漫畫班" },
    age: { en: "Ages 8+", zh: "8歲以上" },
    ageMin: 8,
    ageMax: 99,
    focus: {
      en: "Figures, expressions and original characters",
      zh: "人物比例、表情與原創角色設計",
    },
    points: {
      en: ["Comic figure proportion and features", "Character design and story", "Panel composition"],
      zh: ["漫畫人物比例與五官", "角色造型與故事背景", "畫面構圖表達"],
    },
    media: { en: "Pencil, markers and comic media", zh: "鉛筆、馬克筆、漫畫媒材" },
    hrefSlug: "/courses/comic-drawing-class",
    role: "related",
    tags: ["comic", "age-7-14", "age-9-14"],
    image: IMG.comic,
    imageAlt: { en: "Student comic character design", zh: "ICAcademy學生漫畫角色設計作品" },
  },
  {
    id: "clay",
    name: { en: "Soft Clay Class", zh: "輕黏土課程" },
    age: { en: "Ages 3–16", zh: "3–16歲" },
    ageMin: 3,
    ageMax: 16,
    focus: {
      en: "3D modelling, structure and colour",
      zh: "立體塑形、結構與色彩美感",
    },
    points: {
      en: ["Basic modelling and colour mixing", "Age-based themed projects", "Take home a 3D artwork"],
      zh: ["基礎塑形與混色", "分齡主題創作", "完成立體作品帶回家"],
    },
    media: { en: "Soft clay and clay media", zh: "輕黏土及專業黏土媒材" },
    hrefSlug: "/courses/creative-art-and-clay-class",
    role: "related",
    tags: ["clay", "age-3-7", "age-7-14"],
    image: IMG.clay,
    imageAlt: { en: "Children’s soft clay 3D artwork", zh: "ICAcademy兒童黏土立體創作作品" },
  },
  {
    id: "sketch",
    name: { en: "Sketching Class", zh: "素描技巧班" },
    age: { en: "Ages 9+", zh: "9歲以上" },
    ageMin: 9,
    ageMax: 99,
    focus: {
      en: "Observation, proportion, light and texture",
      zh: "觀察、比例、光暗與質感",
    },
    points: {
      en: ["Pencil control and underdrawing", "Composition and space", "Light, shade and materials"],
      zh: ["鉛筆控制與起稿", "構圖與空間", "光暗及材質表現"],
    },
    media: { en: "Pencil sketching", zh: "鉛筆素描" },
    hrefSlug: "/courses/sketching-class",
    role: "related",
    tags: ["sketch", "age-9-14"],
    image: IMG.sketch,
    imageAlt: { en: "Ho Man Tin children’s sketching class work", zh: "何文田兒童素描課程學生作品" },
  },
];

const AGE_BANDS = [
  {
    filter: "age-3-7",
    ages: { en: "Ages 3–7", zh: "3–7歲" },
    title: { en: "Start with exploration and interest", zh: "由探索與興趣開始" },
    desc: {
      en: "Visual art skills, colour, line and creative play for younger children.",
      zh: "幼兒視藝技巧、色彩、線條及創意啟蒙",
    },
    cta: { en: "See this level →", zh: "查看此程度 →" },
    hrefSlug: "/course/kids-art/visual-art-skills-course",
  },
  {
    filter: "age-7-14",
    ages: { en: "Ages 7–10", zh: "7–10歲" },
    title: { en: "Build art foundations", zh: "建立美術基礎" },
    desc: {
      en: "Mixed-media making, clay, comics and composition.",
      zh: "多媒介創作、黏土、卡通與構圖訓練",
    },
    cta: { en: "See this level →", zh: "查看此程度 →" },
    hrefSlug: "/courses/creative-art-classes",
  },
  {
    filter: "age-9-14",
    ages: { en: "Ages 9–14", zh: "9–14歲" },
    title: { en: "Deepen skill and style", zh: "深化技巧與風格" },
    desc: {
      en: "Sketching, comics, acrylic-ready skills and personal artwork.",
      zh: "素描、漫畫、塑膠彩及個人作品發展",
    },
    cta: { en: "See this level →", zh: "查看此程度 →" },
    hrefSlug: "/courses/sketching-class",
  },
];

const STEPS = [
  { step: "1", title: { en: "Understand interests", zh: "了解孩子興趣" }, desc: { en: "Age, drawing experience and favourite media", zh: "年齡、繪畫經驗與喜歡的媒介" } },
  { step: "2", title: { en: "Choose a suitable class", zh: "選擇合適課程" }, desc: { en: "Compare courses on this page, then open the detail page", zh: "先比較本頁課程，再進入詳情頁" } },
  { step: "3", title: { en: "Learn and create step by step", zh: "分步學習與創作" }, desc: { en: "Small groups with guidance matched to level", zh: "小班教學，按程度調整指導" } },
  { step: "4", title: { en: "Finish work and feedback", zh: "完成作品與回饋" }, desc: { en: "Complete a piece each class and see progress over time", zh: "每堂一件完整作品，見證成長" } },
];

const FAQ = [
  {
    q: { en: "What ages are kids art classes for?", zh: "兒童畫班適合幾歲的小朋友？" },
    a: {
      en: "Kids Art Classes cover ages 3–14: visual art foundations for 3–7 and creative art for 7–14.",
      zh: "本課程涵蓋3–14歲：3–7歲視藝啟蒙，7–14歲創意美術。",
    },
  },
  {
    q: { en: "Can beginners join?", zh: "沒有學過畫畫可以參加嗎？" },
    a: {
      en: "Yes. Courses include beginner-friendly levels. Teachers adjust by age, experience and progress.",
      zh: "可以。不同課程設有入門程度，導師會按年齡、經驗與學習進度調整內容。",
    },
  },
  {
    q: { en: "Can we choose by interest?", zh: "可以按興趣選擇不同畫班嗎？" },
    a: {
      en: "Visual art skills and creative art are levels of this course. Clay, comics and sketching are separate related courses.",
      zh: "視藝技巧與創意美術是本課程的不同程度。黏土、漫畫及素描為其他相關課程。",
    },
  },
  {
    q: { en: "How many students per class?", zh: "每班有多少人？" },
    a: {
      en: "Classes are capped at 6 so the teacher can follow each student’s progress.",
      zh: "每班最多6人，讓導師可以留意每位學生的創作進度，並提供適切指導。",
    },
  },
  {
    q: { en: "How long is each class?", zh: "每堂上課時間多久？" },
    a: {
      en: "About 1 hour. Current sessions run Monday, Wednesday, Friday and Saturday. Ask on WhatsApp for times and places.",
      zh: "每堂約1小時。現有課堂安排為星期一、星期三、星期五及星期六，實際時間及學位請透過WhatsApp查詢。",
    },
  },
  {
    q: { en: "Where is the studio?", zh: "畫室位於哪裏？" },
    a: {
      en: "IC Academy is in Ho Man Tin near Pui Ching Primary School — about a 5-minute walk, Ground Floor Shop 3, 79F Waterloo Road.",
      zh: "IC Academy位於何文田培正小學附近，步行約5分鐘，交通方便（九龍窩打老道79F地下3號鋪）。",
    },
  },
  {
    q: { en: "Can we book an HK$100 trial?", zh: "可以預約 HK$100 試堂嗎？" },
    a: {
      en: "Yes. WhatsApp us with age, drawing experience and preferred times and we will match a class and trial.",
      zh: "可以。透過 WhatsApp 告訴我們孩子年齡、繪畫經驗及方便時間，我們會協助配對課程及安排試堂。",
    },
  },
];

const LEARNING = [
  { en: "Observation, line, shape and colour", zh: "觀察、線條、形狀與色彩" },
  { en: "Finish a complete piece each class", zh: "每堂完成一件完整作品" },
  { en: "Build confidence in a class of max 6", zh: "小班最多6人，建立創作信心" },
  { en: "Progress by age from play to technique", zh: "按年齡由探索逐步建立技巧" },
];

const RELATED = [
  {
    title: { en: "Comic Drawing Class", zh: "卡通漫畫班" },
    desc: { en: "Ages 8+ · characters and storytelling", zh: "8歲以上 · 角色與故事畫面" },
    hrefSlug: "/courses/comic-drawing-class",
  },
  {
    title: { en: "Soft Clay Class", zh: "輕黏土課程" },
    desc: { en: "Ages 3–16 · 3D making", zh: "3–16歲 · 立體塑形" },
    hrefSlug: "/courses/creative-art-and-clay-class",
  },
  {
    title: { en: "Sketching Class", zh: "素描技巧班" },
    desc: { en: "Ages 9+ · observation and light", zh: "9歲以上 · 觀察與光暗" },
    hrefSlug: "/courses/sketching-class",
  },
  {
    title: { en: "Drawing & Painting", zh: "繪畫及素描" },
    desc: { en: "Sketching, acrylic and mixed media", zh: "素描、塑膠彩及綜合美術" },
    hrefSlug: "/courses/art-drawing",
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
.hero-copy { max-width: 40rem; }
.hero-eyebrow { margin: 0 0 18px; color: var(--teal); font-weight: 800; font-size: 1.02rem; }
.hero-title-chip {
  display: block; background: var(--title-chip); border-radius: 22px;
  padding: 20px 24px 18px; margin: 0 0 18px; max-width: min(720px, 100%);
}
.hero-title-chip h1 { margin: 0; font-size: clamp(1.45rem, 3.6vw, 2.2rem); line-height: 1.35; }
.hero-sub { margin: 10px 0 0; font-size: clamp(1.15rem, 2.6vw, 1.55rem); font-weight: 800; color: var(--navy); }
.hero-lead { margin: 0 0 28px; color: var(--muted); font-size: 1.02rem; }

.trust {
  display: grid; gap: 12px; margin-top: -28px; position: relative; z-index: 2;
}
@media (min-width: 800px) { .trust { grid-template-columns: repeat(3, 1fr); } }
.trust-item {
  background: #fff; border: 1px solid var(--line); border-radius: var(--radius);
  padding: 18px 20px; box-shadow: var(--shadow); font-weight: 800;
}
.trust-item span { display: block; color: var(--muted); font-weight: 600; font-size: 0.92rem; margin-top: 4px; }

.age-grid { display: grid; gap: 16px; }
@media (min-width: 860px) { .age-grid { grid-template-columns: repeat(3, 1fr); } }
.age-card {
  background: #fff; border: 1px solid var(--line); border-radius: var(--radius);
  padding: 28px 22px; box-shadow: var(--shadow); display: flex; flex-direction: column; gap: 10px;
  text-decoration: none; color: inherit;
}
.age-card .meta {
  display: inline-flex; align-self: flex-start; background: var(--teal-soft); color: var(--teal-deep);
  border-radius: 999px; padding: 4px 12px; font-size: 0.86rem; font-weight: 800;
}
.age-card p { margin: 0; color: var(--muted); flex: 1; }
.age-card .cta { color: var(--teal); font-weight: 800; }

.age-tabs { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin: 0 0 28px; }
.age-tabs button {
  min-height: 44px; border-radius: 999px; border: 1.5px solid var(--line);
  background: #fff; padding: 8px 18px; font: inherit; font-weight: 700; cursor: pointer;
}
.age-tabs button[aria-pressed="true"] { background: var(--coral); border-color: var(--coral); color: #fff; }

.card-grid { display: grid; gap: 20px; }
@media (min-width: 720px) { .card-grid.cols-2 { grid-template-columns: repeat(2, 1fr); } }
.card {
  background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius);
  overflow: hidden; display: flex; flex-direction: column; box-shadow: var(--shadow);
  transition: opacity .2s ease;
}
.card.is-dimmed { opacity: 0.28; }
.card-media { aspect-ratio: 16 / 10; background: #ececec; overflow: hidden; }
.card-media img { width: 100%; height: 100%; object-fit: cover; object-position: top center; }
.card-body { padding: 20px 20px 22px; display: flex; flex-direction: column; gap: 10px; flex: 1; }
.meta {
  display: inline-flex; align-self: flex-start; background: var(--coral-soft); color: var(--coral-deep);
  border-radius: 999px; padding: 4px 12px; font-size: 0.86rem; font-weight: 800;
}
.points { margin: 0; padding: 0; list-style: none; color: var(--muted); }
.points li { position: relative; padding-left: 1.45rem; margin: 0.35rem 0; }
.points li::before { content: "✓"; position: absolute; left: 0; color: var(--check); font-weight: 800; }
.card-actions { margin-top: auto; padding-top: 10px; display: flex; flex-wrap: wrap; gap: 10px; }

.compare-wrap { overflow-x: auto; margin-top: 28px; }
.compare {
  width: 100%; min-width: 640px; border-collapse: collapse; background: #fff;
  border-radius: var(--radius); overflow: hidden; box-shadow: var(--shadow);
}
.compare th, .compare td { text-align: left; padding: 14px 16px; border-bottom: 1px solid var(--line); vertical-align: top; }
.compare th { background: var(--teal-soft); font-size: 0.92rem; }
.compare a { color: var(--teal); font-weight: 800; text-decoration: none; }

.detail { display: grid; gap: 36px; align-items: center; }
@media (min-width: 900px) { .detail { grid-template-columns: 1.1fr 0.9fr; gap: 48px; } }
.detail h2 { font-size: clamp(1.45rem, 3vw, 1.9rem); margin: 0 0 10px; text-align: left; }
.detail-lead { color: var(--muted); margin: 0 0 18px; max-width: 50ch; }
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

.silo-links { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; }
.silo-links a {
  display: inline-flex; align-items: center; min-height: 44px; padding: 10px 18px;
  border-radius: 999px; border: 1.5px solid var(--line); background: #fff;
  color: var(--teal-deep); font-weight: 800; text-decoration: none;
}

.explore-grid { display: grid; gap: 16px; }
@media (min-width: 720px) { .explore-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 980px) { .explore-grid { grid-template-columns: repeat(3, 1fr); } }
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
  .wrap { width: calc(100% - 24px); }
  .section { padding: 36px 0; }
  .hero .wrap { padding: 28px 0 32px; }
  .btn-row { flex-direction: column; align-items: stretch; }
  .compare-wrap { display: none; }
}
`;

class KidsArtClassesHub extends HTMLElement {
  static get observedAttributes() {
    return ["wa-url", "locale"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._filter = "all";
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
          if (h1 && /Kids Art Classes/i.test(h1.textContent || "")) this.render();
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
    const bleed = document.getElementById("kids-art-classes-hub-page-bleed");
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
    if (Array.isArray(obj)) return this.isEn ? obj : obj;
    return this.isEn ? obj.en : obj.zh;
  }

  _waPrefill(text) {
    return `${this.waUrl}?text=${encodeURIComponent(text)}`;
  }

  _injectPageBleedCss() {
    const id = "kids-art-classes-hub-page-bleed";
    if (document.getElementById(id)) return;
    const style = document.createElement("style");
    style.id = id;
    style.textContent = `
      kids-art-classes-hub {
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

  _matchesFilter(card, filter) {
    const tags = (card.dataset.tags || "").split(",");
    const ageMin = Number(card.dataset.ageMin);
    const ageMax = Number(card.dataset.ageMax);
    if (filter === "all") return true;
    if (tags.includes(filter)) return true;
    if (filter === "age-3-7") return ageMax <= 7 || tags.includes("age-3-7");
    if (filter === "age-7-14") return ageMin <= 14 && ageMax >= 7;
    if (filter === "age-9-14") return ageMax >= 9 && ageMin <= 14;
    return false;
  }

  _applyFilter(filter) {
    this._filter = filter;
    const root = this.shadowRoot;
    if (!root) return;
    root.querySelectorAll("[data-action='filter']").forEach((btn) => {
      btn.setAttribute("aria-pressed", btn.dataset.filter === filter ? "true" : "false");
    });
    root.querySelectorAll("[data-course-card]").forEach((card) => {
      const show = this._matchesFilter(card, filter);
      card.classList.toggle("is-dimmed", !show);
      card.setAttribute("aria-hidden", show ? "false" : "true");
    });
  }

  _onClick(event) {
    const target = event.target.closest("[data-action]");
    if (!target) return;
    const action = target.dataset.action;

    if (action === "scroll-courses") {
      event.preventDefault();
      const filter = target.dataset.filter || "all";
      this._applyFilter(filter);
      const sec = this.shadowRoot.getElementById("secCourses");
      if (sec) sec.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    if (action === "filter") {
      event.preventDefault();
      this._applyFilter(target.dataset.filter || "all");
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
    return COURSES.filter((c) => c.role === "level").map((c) => {
      const name = this.pick(c.name);
      return `
      <article class="card" data-course-card data-tags="${c.tags.join(",")}" data-age-min="${c.ageMin}" data-age-max="${c.ageMax}">
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
            <a class="btn btn-ghost" data-action="course" href="${this.path(c.hrefSlug)}">${this.isEn ? "View course" : "查看課程"}</a>
            <a class="btn btn-coral" data-action="whatsapp" href="${this._waPrefill(
              this.isEn
                ? `Hi, I’d like to ask about “${this.pick(c.name)}” / an HK$100 trial.`
                : `你好，我想查詢「${name}」／HK$100試堂安排。`
            )}" target="_blank" rel="noopener noreferrer">HK$100 ${this.isEn ? "trial" : "試堂"}</a>
          </div>
        </div>
      </article>`;
    }).join("");
  }

  _relatedHtml() {
    const t = (en, zh) => (this.isEn ? en : zh);
    return RELATED.map(
      (item) => `
      <a class="explore-card" data-action="course" href="${this.path(item.hrefSlug)}">
        <h3>${this.pick(item.title)}</h3>
        <p>${this.pick(item.desc)}</p>
        <span class="cta">${t("View course →", "查看課程 →")}</span>
      </a>`
    ).join("");
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
        "Hi, I’d like to ask about kids art classes in Ho Man Tin / an HK$100 trial. Child’s age: ____; drawing experience: ____; interests: ____.",
        "你好，我想為小朋友查詢何文田兒童畫班／HK$100試堂。小朋友年齡：＿＿；繪畫經驗：＿＿；興趣：＿＿。"
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
                <span>${t("Ho Man Tin classes", "何文田兒童畫班")}</span>
              </nav>
              <p class="hero-eyebrow">${t("Ho Man Tin · Near Pui Ching · Ages 3–14", "何文田・培正附近・3–14歲兒童藝術課程")}</p>
              <div class="hero-title-chip">
                <h1 id="hero-title">${t("Kids Art Classes in Ho Man Tin", "何文田兒童畫班")}</h1>
                <p class="hero-sub">${t("A small-group drawing class for ages 3–14", "3–14歲小班兒童畫班")}</p>
              </div>
              <p class="hero-lead">
                ${t(
                  "Kids Art Classes at IC Academy Ho Man Tin help children learn drawing through age-based levels — from visual art play to creative art technique. Classes are capped at 6 so the teacher can guide each child.",
                  "IC Academy 何文田兒童畫班按年齡分程度，由幼兒視藝探索到兒童創意美術技巧。每班最多6人，讓導師可以跟進每位小朋友。"
                )}
              </p>
              <div class="btn-row">
                <a class="btn btn-coral" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("Book HK$100 trial", "預約 HK$100 試堂")}</a>
                <button type="button" class="btn btn-outline-teal" data-action="scroll-courses">${t("See class levels", "查看課程程度")}</button>
              </div>
            </div>
          </div>
        </section>

        <section class="section" style="padding-top:0;padding-bottom:40px" aria-label="${t("Class highlights", "課程重點")}">
          <div class="wrap">
            <div class="trust">
              <div class="trust-item">✓ ${t("HK$100 trial class", "HK$100 試堂")}<span>${t("Try a class before you enrol", "先體驗，再決定報讀")}</span></div>
              <div class="trust-item">✓ ${t("Max 6 per class", "小班最多6人")}<span>${t("More individual guidance", "導師更易跟進每位學生")}</span></div>
              <div class="trust-item">✓ ${t("About 5 minutes’ walk", "步行約5分鐘")}<span>${t("Near Pui Ching, Ho Man Tin", "何文田培正小學附近")}</span></div>
            </div>
          </div>
        </section>

        <section class="section section-soft" aria-labelledby="age-title">
          <div class="wrap">
            <h2 class="section-title" id="age-title">${t("Which level is right?", "邊個程度適合？")}</h2>
            <p class="section-lead">
              ${t(
                "This course is grouped by age. Pick a band to see the matching level of Kids Art Classes.",
                "本課程按年齡分程度。先選年齡帶，再看對應的兒童畫班程度。"
              )}
            </p>
            <div class="age-grid">
              ${AGE_BANDS.map(
                (b) => `
                <a class="age-card" data-action="scroll-courses" data-filter="${b.filter}" href="#secCourses">
                  <span class="meta">${this.pick(b.ages)}</span>
                  <h3>${this.pick(b.title)}</h3>
                  <p>${this.pick(b.desc)}</p>
                  <span class="cta">${this.pick(b.cta)}</span>
                </a>`
              ).join("")}
            </div>
          </div>
        </section>

        <section class="section" id="secCourses" aria-labelledby="courses-title">
          <div class="wrap">
            <h2 class="section-title" id="courses-title">${t("Class levels", "課程程度")}</h2>
            <p class="section-lead">
              ${t(
                "Kids Art Classes progress by age. Ask on WhatsApp for the latest timetable, fees and places.",
                "兒童畫班按年齡遞進。上課時間、學費及學位請 WhatsApp 查詢最新安排。"
              )}
            </p>
            <div class="card-grid cols-2">
              ${this._courseCardsHtml()}
            </div>
          </div>
        </section>

        <section class="section section-soft" aria-labelledby="gallery-title">
          <div class="wrap">
            <h2 class="section-title" id="gallery-title">${t("Student artwork", "學員作品展示")}</h2>
            <p class="section-lead">${t("A finished piece each class — see how children grow through making.", "每堂一件完整作品，見證孩子的創作成長")}</p>
            <div class="gallery-grid">
              <figure><img src="${IMG.gallery1}" alt="${t("Young children’s creative painting", "幼兒創意繪畫作品")}" loading="lazy" /><figcaption>${t("Student work", "學員作品")}</figcaption></figure>
              <figure><img src="${IMG.gallery2}" alt="${t("Comic character design", "漫畫角色設計作品")}" loading="lazy" /><figcaption>${t("Student work", "學員作品")}</figcaption></figure>
              <figure><img src="${IMG.gallery3}" alt="${t("Children’s sketching work", "兒童素描作品")}" loading="lazy" /><figcaption>${t("Student work", "學員作品")}</figcaption></figure>
              <figure><img src="${IMG.gallery4}" alt="${t("Class artwork", "課堂創作")}" loading="lazy" /><figcaption>${t("Student work", "學員作品")}</figcaption></figure>
            </div>
            <div class="center-actions">
              <a class="btn btn-outline-teal" data-action="hub" href="${galleryUrl}">${t("See more student work →", "查看更多學員作品 →")}</a>
            </div>
          </div>
        </section>

        <section class="section" aria-labelledby="path-title">
          <div class="wrap">
            <h2 class="section-title" id="path-title">${t("How a course works", "課程流程")}</h2>
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

        <section class="section section-soft" aria-labelledby="choose-title">
          <div class="wrap">
            <div class="detail">
              <div>
                <h2 id="choose-title">${t("What children learn in this class", "課堂會學甚麼？")}</h2>
                <p class="detail-lead">
                  ${t(
                    "Suitable for ages 3–14 who enjoy drawing. Beginners are welcome. If you are unsure which level, WhatsApp us with age and experience and a teacher will match the class.",
                    "適合3–14歲、對繪畫有興趣的小朋友，初學亦可。如未確定程度，WhatsApp 告訴我們年齡與經驗，導師會協助配對。"
                  )}
                </p>
                <ul class="check-list">
                  ${LEARNING.map((item) => `<li>${this.pick(item)}</li>`).join("")}
                </ul>
                <a class="btn btn-coral" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("WhatsApp us to match a class", "WhatsApp 查詢選班")}</a>
              </div>
              <div class="detail-media">
                <img src="${IMG.detail}" alt="${t("ICAcademy kids art class artwork", "ICAcademy兒童美術課堂作品")}" width="800" height="1000" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        <section class="section" aria-labelledby="faq-title">
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

        <section class="section section-soft" aria-labelledby="explore-title">
          <div class="wrap">
            <h2 class="section-title" id="explore-title">${t("Related courses", "相關課程")}</h2>
            <p class="section-lead">${t("Kids Art Classes is this course. Other media have their own course pages.", "本頁是兒童畫班課程。其他媒介請見相關課程頁。")}</p>
            <div class="silo-links" style="margin-bottom:28px">
              <a data-action="hub" href="${siloUrl}">${t("Kids Art overview", "兒童美術總覽（上層）")}</a>
              <a data-action="hub" href="${courseHubUrl}">${t("All courses", "課程總覽")}</a>
              <a data-action="hub" href="${trialUrl}">${t("Trial class", "試堂詳情")}</a>
            </div>
            <div class="explore-grid">
              ${this._relatedHtml()}
            </div>
          </div>
        </section>

        <section class="section" aria-labelledby="trial-title">
          <div class="wrap">
            <div class="trial">
              <div class="trial-badge">${t("HK$100 trial", "HK$100 試堂")}</div>
              <h2 id="trial-title">${t("Book an HK$100 kids art trial", "預約 HK$100 兒童畫班試堂")}</h2>
              <p>${t(
                "Tell us your child’s age, drawing experience and interests. A teacher will help match a suitable class.",
                "告訴我們孩子年齡、繪畫經驗及興趣，導師會協助配對合適課程。"
              )}</p>
              <div class="btn-row">
                <a class="btn btn-teal" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("WhatsApp to book", "WhatsApp 預約")}</a>
                <a class="btn btn-ghost" data-action="hub" href="${trialUrl}">${t("How the trial works", "了解試堂詳情")}</a>
                <button type="button" class="btn btn-outline-teal" data-action="scroll-courses">${t("See class levels", "查看課程程度")}</button>
              </div>
            </div>
          </div>
        </section>

        <section class="final" aria-labelledby="final-title">
          <h2 id="final-title">${t("Ask about kids art classes in Ho Man Tin", "立即查詢何文田兒童畫班")}</h2>
          <p>${t("Small groups near Pui Ching. WhatsApp us for a suitable level, timetable and HK$100 trial.", "培正附近小班教學，歡迎 WhatsApp 查詢合適程度、上課時間及 HK$100 試堂。")}</p>
          <div class="btn-row">
            <a class="btn btn-coral" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("WhatsApp", "WhatsApp 查詢")}</a>
            <a class="btn btn-outline-white" data-action="hub" href="${siloUrl}">${t("Back to Kids Art", "返回兒童美術")}</a>
          </div>
        </section>
      </div>
    `;

    this._applyFilter(this._filter || "all");
    this._applyFullBleedCss();
    this._observeHeight();
  }
}

customElements.define("kids-art-classes-hub", KidsArtClassesHub);
