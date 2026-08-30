/**
 * ICAcademy Kids Art Silo Hub – Custom Element
 * Tag name: kids-art-hub
 * Version: 2026-08-30-v11 (Sketching Class → /course/drawing-and-painting/sketching-class)
 * Design system: matches courses-hub (coral / teal)
 * Routes: /course/kids-art (EN) · /zh/course/kids-art (ZH) (Editor: Kids Art, yo1yl)
 */
const WA_DEFAULT = "https://wa.me/85265808022";

function mediaUrl(id, w, h, align) {
  const al = align || "c";
  return `https://static.wixstatic.com/media/${id}/v1/fill/w_${w},h_${h},al_${al},q_85,enc_auto/${id}`;
}

/** Photos rotated to kids course / gallery assets (audited 2026-08) */
const IMG = {
  hero: mediaUrl("b98cc9_37d03a2a33974076b01befe1d515bf0d~mv2.jpg", 1600, 1000),
  // Artwork-focused (no portrait crop issues)
  prep: mediaUrl("b98cc9_ad34c2bb0fca4f8186d9e43bb8e1909c~mv2.jpg", 800, 600),
  foundation: mediaUrl("b98cc9_c966f659ad4c45939096573490e41e6b~mv2.jpg", 800, 600),
  creativeI: mediaUrl("b98cc9_9c6e5138d1fa40a7815d12218f642440~mv2.jpg", 800, 600),
  creativeII: mediaUrl("b98cc9_1e80c89215f84798a65eaedc03352cd5~mv2.jpg", 800, 600),
  creativeIII: mediaUrl("b98cc9_f16629f0d6414271822e19d767f44457~mv2.jpg", 800, 600),
  comic: mediaUrl("b98cc9_a62d943a779d4ddb8e85227dc0872726~mv2.jpg", 800, 600),
  sketch: mediaUrl("b98cc9_e67c1877a803495fa45ccea725f0f7ce~mv2.jpg", 800, 600),
  clay: mediaUrl("b98cc9_f417962750fd4399b1ee38c775da9a4e~mv2.jpeg", 800, 600),
  visualArt: mediaUrl("b98cc9_2811c03afb09487fb93b5356133bd57b~mv2.jpg", 800, 600),
  gallery1: mediaUrl("b98cc9_169d3a5d148b4e7cb6c5dcdd66541734~mv2.jpeg", 800, 800),
  gallery2: mediaUrl("b98cc9_bcc7d1f85fd7431c933ad24f568c4a9b~mv2.jpg", 800, 800),
  gallery3: mediaUrl("b98cc9_f73677a0ad284e10b85772ce1fbecae5~mv2.jpg", 800, 800),
  gallery4: mediaUrl("b98cc9_5d9714fc876f42ba8b02b5b5d4b08923~mv2.jpg", 800, 800),
  detail: mediaUrl("b98cc9_9c6489b3ccfa47f0adc205c472aa87e7~mv2.jpg", 800, 1000),
};

/** Children's programmes only — ages / URLs audited from Course Hub catalogue 2026-08 */
const COURSES = [
  {
    id: "prep",
    name: { en: "Visual Art Skills (Preparatory)", zh: "視藝技巧（預備課程）" },
    age: { en: "Ages 3–5", zh: "3–5歲" },
    ageMin: 3,
    ageMax: 5,
    focus: { en: "Early creative stimulation and sensory exploration", zh: "幼兒創意啟蒙與感官探索" },
    points: [
      { en: "Lines, shapes and colour basics", zh: "線條、形狀與色彩入門" },
      { en: "Fine motor skills and hand-eye coordination", zh: "小手肌與手眼協調" },
      { en: "Class routine and finishing work independently", zh: "課堂常規與獨立完成作品" },
    ],
    media: { en: "Crayons, watercolour, collage, printing", zh: "蠟筆、水彩、剪貼、印畫" },
    href: "/course/kids-art/visual-art-skills-course",
    tags: ["foundation", "painting", "age-3-7"],
    image: IMG.prep,
    imageAlt: { en: "ICAcademy preschool creative painting classwork", zh: "ICAcademy幼兒創意繪畫課堂作品" },
  },
  {
    id: "foundation",
    name: { en: "Visual Art Skills (Foundation)", zh: "視藝技巧（基礎課程）" },
    age: { en: "Ages 5–7", zh: "5–7歲" },
    ageMin: 5,
    ageMax: 7,
    focus: { en: "Build observation, form and basic composition skills", zh: "建立觀察、造型與基本構圖能力" },
    points: [
      { en: "Observation and form practice", zh: "觀察與造型練習" },
      { en: "Proportion and picture organisation", zh: "比例與畫面組織" },
      { en: "Mixed-media creation", zh: "多元媒介創作" },
    ],
    media: { en: "Drawing and mixed media", zh: "繪畫及混合媒介" },
    href: "/course/kids-art/visual-art-skills-course",
    tags: ["foundation", "painting", "age-3-7"],
    image: IMG.foundation,
    imageAlt: { en: "ICAcademy Visual Art Skills foundation student work", zh: "ICAcademy視藝技巧基礎課程學生作品" },
  },
  {
    id: "creative-i",
    name: { en: "Creative Art Level I", zh: "兒童創意美術 Level I" },
    age: { en: "Ages 7–9", zh: "7–9歲" },
    ageMin: 7,
    ageMax: 9,
    focus: { en: "Strengthen drawing basics and build creative confidence", zh: "鞏固繪畫基礎，建立創作信心" },
    points: [
      { en: "Line, colour and basic composition", zh: "線條、色彩、基本構圖" },
      { en: "Subject observation and imagination", zh: "主題觀察與想像" },
      { en: "Simple mixed-media projects", zh: "簡單多媒介創作" },
    ],
    media: { en: "Painting, collage, mixed materials", zh: "繪畫、拼貼、多元物料" },
    href: "/course/kids-art/creative-art-classes",
    tags: ["creative", "painting", "age-7-14"],
    image: IMG.creativeI,
    imageAlt: { en: "ICAcademy Creative Art student work", zh: "ICAcademy兒童創意美術作品" },
  },
  {
    id: "creative-ii",
    name: { en: "Creative Art Level II", zh: "兒童創意美術 Level II" },
    age: { en: "Ages 9–11", zh: "9–11歲" },
    ageMin: 9,
    ageMax: 11,
    focus: { en: "Improve proportion, space and picture completeness", zh: "加強比例、空間與畫面完整度" },
    points: [
      { en: "Advanced proportion and composition", zh: "比例與構圖進階" },
      { en: "Colour matching", zh: "色彩配搭" },
      { en: "Personal ideas within themes", zh: "個人想法融入主題" },
    ],
    media: { en: "Painting and mixed media", zh: "繪畫及多元媒介" },
    href: "/course/kids-art/creative-art-classes",
    tags: ["creative", "painting", "age-7-14"],
    image: IMG.creativeII,
    imageAlt: { en: "ICAcademy primary-age creative painting work", zh: "ICAcademy小學創意繪畫作品" },
  },
  {
    id: "creative-iii",
    name: { en: "Creative Art Level III", zh: "兒童創意美術 Level III" },
    age: { en: "Ages 11–14", zh: "11–14歲" },
    ageMin: 11,
    ageMax: 14,
    focus: { en: "Deepen technique and personal style", zh: "深化技巧與個人風格" },
    points: [
      { en: "Picture layering and form", zh: "畫面層次與造型" },
      { en: "Theme research", zh: "主題研究" },
      { en: "Foundation for advanced art study", zh: "為進階美術建立基礎" },
    ],
    media: { en: "Mixed-media creation", zh: "多媒介創作" },
    href: "/course/kids-art/creative-art-classes",
    tags: ["creative", "painting", "age-7-14"],
    image: IMG.creativeIII,
    imageAlt: { en: "ICAcademy teen creative art work", zh: "ICAcademy青少年創意美術作品" },
  },
  {
    id: "comic",
    name: { en: "Comic Drawing Class", zh: "卡通漫畫班" },
    age: { en: "Ages 8+", zh: "8歲以上" },
    ageMin: 8,
    ageMax: 99,
    focus: { en: "Character proportion, expressions and original character design", zh: "人物比例、表情與原創角色設計" },
    points: [
      { en: "Manga character proportion and features", zh: "漫畫人物比例與五官" },
      { en: "Character design and story settings", zh: "角色造型與故事背景" },
      { en: "Panel composition and expression", zh: "畫面構圖表達" },
    ],
    media: { en: "Pencil, markers, manga media", zh: "鉛筆、馬克筆、漫畫媒材" },
    href: "/course/kids-art/comic-drawing-class",
    tags: ["comic", "age-8plus"],
    image: IMG.comic,
    imageAlt: { en: "ICAcademy student manga character design", zh: "ICAcademy學生漫畫角色設計作品" },
  },
  {
    id: "clay",
    name: { en: "Light Clay Course", zh: "輕黏土課程" },
    age: { en: "Ages 3–16", zh: "3–16歲" },
    ageMin: 3,
    ageMax: 16,
    focus: { en: "3D modelling, structure and colour sense", zh: "立體塑形、結構與色彩美感" },
    points: [
      { en: "Basic modelling and colour mixing", zh: "基礎塑形與混色" },
      { en: "Age-based themed projects", zh: "分齡主題創作" },
      { en: "Finish a 3D piece to take home", zh: "完成立體作品帶回家" },
    ],
    media: { en: "Light clay and professional clay media", zh: "輕黏土及專業黏土媒材" },
    href: "/course/kids-art/creative-art-and-clay-class",
    tags: ["clay"],
    image: IMG.clay,
    imageAlt: { en: "ICAcademy kids clay 3D creations", zh: "ICAcademy兒童黏土立體創作作品" },
  },
  {
    id: "sketch",
    name: { en: "Sketching Class", zh: "素描技巧班" },
    age: { en: "Ages 9+", zh: "9歲以上" },
    ageMin: 9,
    ageMax: 99,
    focus: { en: "Observation, proportion, light and texture", zh: "觀察、比例、光暗與質感" },
    points: [
      { en: "Pencil control and sketching", zh: "鉛筆控制與起稿" },
      { en: "Composition and space", zh: "構圖與空間" },
      { en: "Light, shade and material texture", zh: "光暗及材質表現" },
    ],
    media: { en: "Pencil sketching", zh: "鉛筆素描" },
    href: "/course/drawing-and-painting/sketching-class",
    tags: ["sketch", "age-8plus"],
    image: IMG.sketch,
    imageAlt: { en: "ICAcademy kids sketching class student work", zh: "何文田兒童素描課程學生作品" },
  },
  {
    id: "visual-art",
    name: { en: "Visual Art Class", zh: "綜合美術課程" },
    age: { en: "Ages 14+", zh: "14歲以上" },
    ageMin: 14,
    ageMax: 99,
    focus: { en: "Multi-media exploration and personal direction (teens / advanced)", zh: "多媒介探索與個人創作方向（青少年／進階）" },
    points: [
      { en: "Sketching, acrylic and mixed media", zh: "素描、塑膠彩及混合媒介" },
      { en: "From concept to finished piece", zh: "主題構思至完成作品" },
      { en: "Individual guidance by level", zh: "按程度個別指導" },
    ],
    media: { en: "Sketching, acrylic, mixed media", zh: "素描、塑膠彩、混合媒介" },
    href: "/course/kids-art/visual-art-class",
    tags: ["teen", "painting", "age-8plus"],
    image: IMG.visualArt,
    imageAlt: { en: "ICAcademy teen visual art work", zh: "ICAcademy青少年綜合美術作品" },
  },
];

const GUIDE = [
  {
    title: { en: "Want to try different art media", zh: "想全面接觸不同美術媒介" },
    desc: { en: "Painting, collage and mixed-material creation", zh: "繪畫、拼貼與多元物料創作" },
    href: "/course/kids-art/creative-art-classes",
    cta: { en: "Creative Art course", zh: "兒童創意美術課程" },
  },
  {
    title: { en: "Loves drawing and building core skills", zh: "喜歡畫畫及建立基本技巧" },
    desc: { en: "From observation, line and shape to composition", zh: "由觀察、線條、形狀到構圖" },
    href: "/course/kids-art/visual-art-skills-course",
    cta: { en: "Visual Art Skills course", zh: "視藝技巧課程" },
  },
  {
    title: { en: "Loves comics and character creation", zh: "喜歡漫畫及角色創作" },
    desc: { en: "Proportion, expressions and story scenes", zh: "人物比例、表情與故事畫面" },
    href: "/course/kids-art/comic-drawing-class",
    cta: { en: "Comic Drawing course", zh: "卡通漫畫課程" },
  },
  {
    title: { en: "Loves 3D and hands-on making", zh: "喜歡立體創作及手作" },
    desc: { en: "Modelling, structure and colour sense", zh: "塑形、結構與色彩美感" },
    href: "/course/kids-art/creative-art-and-clay-class",
    cta: { en: "Kids clay course", zh: "兒童黏土創作課程" },
  },
];

const PATH = [
  {
    step: "1",
    title: { en: "Interest exploration", zh: "興趣探索" },
    desc: { en: "Young children meet line, shape, colour and class routines", zh: "幼兒接觸線條、形狀、色彩與課堂常規" },
  },
  {
    step: "2",
    title: { en: "Creative expression", zh: "創意表達" },
    desc: { en: "Put observation and ideas into artwork and build confidence", zh: "把觀察與想法放進作品，建立創作信心" },
  },
  {
    step: "3",
    title: { en: "Core drawing skills", zh: "基本繪畫技巧" },
    desc: { en: "Strengthen proportion, composition and completeness", zh: "加強比例、構圖與畫面完整度" },
  },
  {
    step: "4",
    title: { en: "Media exploration", zh: "媒介探索" },
    desc: { en: "Try comics, clay or sketching by interest", zh: "按興趣嘗試漫畫、黏土或素描等方向" },
  },
  {
    step: "5",
    title: { en: "Advanced art skills", zh: "進階藝術技巧" },
    desc: { en: "Deepen personal style and mixed-media work (by level)", zh: "深化個人風格與多媒介創作（視程度而定）" },
  },
];

const WHY = [
  { en: "Practise observing the world and turn what they see into pictures", zh: "練習觀察身邊事物，把所見轉化成畫面" },
  { en: "Express ideas through line, shape and colour", zh: "透過線條、形狀與色彩表達想法" },
  { en: "Build sound drawing and composition habits", zh: "建立基本繪畫與構圖習慣" },
  { en: "Learn how different colours and materials behave", zh: "認識不同顏色與物料的表現方式" },
  { en: "Grow creative confidence by finishing pieces", zh: "在完成作品的過程中累積創作信心" },
];

const FAQ = [
  {
    q: { en: "What age can children start drawing?", zh: "幾歲可以開始學畫畫？" },
    a: {
      en: "ICAcademy’s Visual Art Skills Preparatory course suits ages about 3–5 as a first step into art. The right level depends on your child’s development and interests — ask us on WhatsApp.",
      zh: "ICAcademy 視藝技巧預備課程適合約 3–5 歲開始接觸美術。實際適合程度可按小朋友發展與興趣，透過 WhatsApp 查詢協助了解。",
    },
  },
  {
    q: { en: "Which art class suits a beginner child?", zh: "初學小朋友適合邊種美術班？" },
    a: {
      en: "Beginners can start with Visual Art Skills (Preparatory / Foundation) or the earlier Creative Art levels. Share your child’s age and drawing experience and we will help you find the right direction.",
      zh: "初學可先考慮視藝技巧（預備／基礎）或兒童創意美術較初階程度。家長可提供年齡與繪畫經驗，我們會協助了解較合適方向。",
    },
  },
  {
    q: { en: "What is the difference between Creative Art and the Visual Art Class?", zh: "兒童創意美術同綜合美術有咩分別？" },
    a: {
      en: "Creative Art Level I–III is mainly for ages 7–14, building drawing and mixed-media skills by level. The Visual Art Class suits ages 14+ with more multi-media exploration and personal creative direction.",
      zh: "兒童創意美術 Level I–III 主要面向約 7–14 歲，按程度建立繪畫與多媒介創作基礎。綜合美術課程適合 14 歲以上，較著重多媒介探索與個人創作方向。",
    },
  },
  {
    q: { en: "My child loves comics — which course?", zh: "小朋友鍾意漫畫應該讀邊個課程？" },
    a: {
      en: "See the Comic Drawing Class: character proportion, expressions, character design and composition. It suits students aged about 8+ who enjoy manga and character creation.",
      zh: "可了解卡通漫畫班，內容包括人物比例、表情、角色造型與畫面構圖。適合約 8 歲以上、對漫畫及角色創作有興趣的學員。",
    },
  },
  {
    q: { en: "Is there a kids clay or 3D creation course?", zh: "有冇兒童黏土或立體創作課程？" },
    a: {
      en: "Yes. The Light Clay course suits ages 3–16, with age-based themes covering modelling, structure and colour sense — and a finished 3D piece to take home.",
      zh: "有。輕黏土課程適合約 3–16 歲，按年齡主題學習塑形、結構與色彩美感，並可完成立體作品帶回家。",
    },
  },
  {
    q: { en: "Can we try a class first?", zh: "可以先試堂嗎？" },
    a: {
      en: "Yes — book an HK$100 trial. WhatsApp us your child’s age, drawing experience and preferred times and we will suggest a suitable class.",
      zh: "可以。歡迎先預約 HK$100 試堂。WhatsApp 告訴我們小朋友年齡、繪畫經驗和方便時間，我們會協助了解合適班別。",
    },
  },
  {
    q: { en: "How do I choose the right class for my child?", zh: "點樣選擇適合小朋友嘅畫班？" },
    a: {
      en: "Browse the courses on this page by age, interest (drawing / comics / clay) and learning goals. If you are unsure, start with a trial or ask a course advisor on WhatsApp.",
      zh: "可先按年齡、興趣（繪畫／漫畫／黏土）及學習目標瀏覽本頁課程。未確定時可先試堂，或 WhatsApp 查詢由課程顧問協助了解方向。",
    },
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
.accent { color: var(--coral); }

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
  padding: 64px 0;
  width: min(1200px, calc(100% - 48px));
}
.hero-copy { max-width: 38rem; text-align: left; }
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
  max-width: min(680px, 100%);
}
.hero-title-chip h1 {
  margin: 0;
  font-size: clamp(1.45rem, 3.6vw, 2.2rem);
  line-height: 1.35;
  word-break: keep-all;
}
.hero-sub {
  margin: 10px 0 0;
  font-size: clamp(1.2rem, 2.8vw, 1.65rem);
  font-weight: 800;
  line-height: 1.35;
  color: var(--navy);
}
.hero-lead {
  margin: 0 0 28px;
  max-width: 38em;
  color: var(--muted);
  font-size: 1.02rem;
}

.age-tabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin: 0 0 28px;
}
.age-tabs button {
  min-height: 44px;
  border-radius: 999px;
  border: 1.5px solid var(--line);
  background: #fff;
  padding: 8px 18px;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
  color: var(--ink);
}
.age-tabs button[aria-pressed="true"] {
  background: var(--coral);
  border-color: var(--coral);
  color: #fff;
}

.card-grid { display: grid; gap: 20px; }
@media (min-width: 720px) {
  .card-grid.cols-2 { grid-template-columns: repeat(2, 1fr); }
  .card-grid.cols-3 { grid-template-columns: repeat(3, 1fr); }
  .card-grid.cols-4 { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 980px) {
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
  transition: opacity .2s ease, transform .2s ease;
}
.card.is-dimmed { opacity: 0.35; }
.card-media { aspect-ratio: 16 / 10; background: #ececec; overflow: hidden; }
.card-media img { width: 100%; height: 100%; object-fit: cover; object-position: top center; }
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
  padding: 28px 22px;
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: 180px;
}
.guide-card h3 { margin: 0; font-size: 1.15rem; }
.guide-card p { margin: 0; color: var(--muted); flex: 1; }
.guide-card a { color: var(--teal); font-weight: 800; text-decoration: none; }

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

.path {
  display: grid;
  gap: 14px;
}
@media (min-width: 860px) {
  .path {
    grid-template-columns: repeat(5, 1fr);
    gap: 12px;
  }
}
.path-step {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 22px 16px;
  text-align: center;
  box-shadow: var(--shadow);
  position: relative;
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
  margin-bottom: 10px;
}
.path-step h3 { margin: 0 0 8px; font-size: 1.05rem; }
.path-step p { margin: 0; color: var(--muted); font-size: 0.92rem; }
.path-note {
  text-align: center;
  color: var(--muted);
  font-size: 0.95rem;
  margin: 22px auto 0;
  max-width: 48ch;
}

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
.center-actions { display: flex; justify-content: center; flex-wrap: wrap; gap: 12px; margin-top: 28px; }

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
  max-width: none !important;
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

@media (max-width: 860px) {
  .wrap {
    width: min(1200px, calc(100% - 32px));
  }
  .section { padding: 48px 0; }
  .section-lead { margin-bottom: 28px; padding: 0 4px; }
  .hero {
    min-height: 0;
    align-items: stretch;
  }
  .hero-bg {
    background-position: 70% center;
  }
  .hero-bg::after {
    background: linear-gradient(
      180deg,
      rgba(255,255,255,.94) 0%,
      rgba(255,255,255,.90) 55%,
      rgba(255,255,255,.72) 100%
    );
  }
  .path {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .wrap {
    width: min(1200px, calc(100% - 24px));
  }
  .section { padding: 40px 0; }
  .section-title {
    font-size: clamp(1.35rem, 6vw, 1.7rem);
    padding: 0 4px;
    word-break: keep-all;
  }
  .section-lead {
    font-size: 0.98rem;
    margin-bottom: 24px;
  }
  .hero .wrap { padding: 36px 0 40px; }
  .hero-eyebrow { font-size: 0.95rem; margin-bottom: 14px; }
  .hero-title-chip {
    padding: 16px 16px 14px;
    border-radius: 18px;
    margin-bottom: 14px;
  }
  .hero-title-chip h1 {
    font-size: clamp(1.28rem, 6.2vw, 1.7rem);
    line-height: 1.4;
  }
  .hero-sub {
    font-size: clamp(1.05rem, 4.8vw, 1.35rem);
  }
  .hero-lead {
    font-size: 0.98rem;
    margin-bottom: 22px;
  }
  .btn-row { flex-direction: column; align-items: stretch; gap: 10px; }
  .btn {
    width: 100%;
    min-height: 48px;
    padding: 12px 18px;
  }
  .age-tabs {
    justify-content: flex-start;
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    gap: 8px;
    margin: 0 0 22px;
    padding: 2px 2px 10px;
    scrollbar-width: none;
  }
  .age-tabs::-webkit-scrollbar { display: none; }
  .age-tabs button {
    flex: 0 0 auto;
    min-height: 42px;
    padding: 8px 14px;
    font-size: 0.92rem;
  }
  .card-actions { flex-direction: column; }
  .card-actions .btn { width: 100%; }
  .guide-card {
    min-height: 0;
    padding: 22px 18px;
  }
  .detail h2 { font-size: clamp(1.3rem, 5.5vw, 1.65rem); }
  .detail-media {
    max-height: 360px;
    aspect-ratio: 4 / 5;
  }
  .path-step { padding: 18px 14px; text-align: left; }
  .path-num { margin-bottom: 8px; }
  .trial {
    border-radius: 22px;
    padding: 28px 18px;
  }
  .trial .btn {
    min-width: 0;
    width: 100%;
  }
  .faq-q { font-size: 1rem; }
  .faq-a { font-size: 0.95rem; }
  .final { padding: 48px 16px; }
  .final h2 { font-size: clamp(1.35rem, 6vw, 1.75rem); }
  .crumbs { font-size: 0.88rem; margin-bottom: 14px; }
}

@media (max-width: 380px) {
  .wrap { width: calc(100% - 16px); }
  .hero-title-chip h1 { font-size: 1.2rem; }
  .age-tabs button { padding: 7px 12px; font-size: 0.88rem; }
}
`;

class KidsArtHub extends HTMLElement {
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
          if (h1 && /Kids Art/i.test(h1.textContent || "")) this.render();
        }
      } catch (e) {}
    };
    setTimeout(syncLocale, 0);
    setTimeout(syncLocale, 500);
    this.shadowRoot.addEventListener("click", this._onClick);
    window.addEventListener("resize", this._syncHeight);
    window.addEventListener("resize", this._applyFullBleedCss);
    window.addEventListener("orientationchange", this._applyFullBleedCss);
    this._applyFullBleedCss();
  }

  disconnectedCallback() {
    this.shadowRoot.removeEventListener("click", this._onClick);
    window.removeEventListener("resize", this._syncHeight);
    window.removeEventListener("resize", this._applyFullBleedCss);
    window.removeEventListener("orientationchange", this._applyFullBleedCss);
    if (this._ro) {
      this._ro.disconnect();
      this._ro = null;
    }
    const bleed = document.getElementById("kids-art-hub-page-bleed");
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
        detail: { type, href },
        bubbles: true,
        composed: true,
      })
    );
  }

  _applyFilter(filter) {
    this._filter = filter;
    const buttons = this.shadowRoot.querySelectorAll(".age-tabs button");
    buttons.forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.dataset.filter === filter));
    });
    this.shadowRoot.querySelectorAll("[data-course-card]").forEach((card) => {
      const tags = (card.dataset.tags || "").split(",");
      const show =
        filter === "all" ||
        tags.includes(filter) ||
        (filter === "age-3-7" && Number(card.dataset.ageMax) <= 7) ||
        (filter === "age-7-14" &&
          Number(card.dataset.ageMin) <= 14 &&
          Number(card.dataset.ageMax) >= 7 &&
          Number(card.dataset.ageMin) < 14) ||
        (filter === "age-8plus" && Number(card.dataset.ageMin) >= 8);
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
    return COURSES.map(
      (c) => `
      <article
        class="card"
        data-course-card
        data-tags="${c.tags.join(",")}"
        data-age-min="${c.ageMin}"
        data-age-max="${c.ageMax}"
      >
        <div class="card-media">
          <img src="${c.image}" alt="${this.pick(c.imageAlt)}" loading="lazy" decoding="async" width="640" height="400" />
        </div>
        <div class="card-body">
          <span class="meta">${this.pick(c.age)}</span>
          <h3>${this.pick(c.name)}</h3>
          <p style="margin:0;color:var(--muted)">${this.pick(c.focus)}</p>
          <ul class="points">
            ${c.points.map((p) => `<li>${this.pick(p)}</li>`).join("")}
          </ul>
          <div class="card-actions">
            <a class="btn btn-ghost" data-action="course" href="${this.path(c.href)}">${this.isEn ? "View course" : "查看課程"}</a>
            <a class="btn btn-coral" data-action="whatsapp" href="${this._waPrefill(
              this.isEn
                ? `Hi, I'd like to ask about "${this.pick(c.name)}" / the HK$100 trial.`
                : `你好，我想查詢「${this.pick(c.name)}」／HK$100試堂安排。`
            )}" target="_blank" rel="noopener noreferrer">${this.isEn ? "HK$100 trial" : "HK$100 試堂"}</a>
          </div>
        </div>
      </article>`
    ).join("");
  }

  _guideHtml() {
    return GUIDE.map(
      (g) => `
      <article class="guide-card">
        <h3>${this.pick(g.title)}</h3>
        <p>${this.pick(g.desc)}</p>
        <a data-action="course" href="${this.path(g.href)}">${this.pick(g.cta)} →</a>
      </article>`
    ).join("");
  }

  _pathHtml() {
    return PATH.map(
      (p) => `
      <div class="path-step">
        <div class="path-num">${p.step}</div>
        <h3>${this.pick(p.title)}</h3>
        <p>${this.pick(p.desc)}</p>
      </div>`
    ).join("");
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
    const id = "kids-art-hub-page-bleed";
    if (document.getElementById(id)) return;
    const style = document.createElement("style");
    style.id = id;
    style.textContent = `
      html, body {
        overflow-x: hidden !important;
      }
      kids-art-hub {
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
    } catch (e) {
      // ignore
    }
  }

  render() {
    const t = (en, zh) => (this.isEn ? en : zh);
    this._applyFullBleedCss();

    const courseHubUrl = this.path("/course-hub");
    const listingUrl = this.path("/course/kids-art/kids-art-classes-homantin");
    const drawingUrl = this.path("/course/drawing-and-painting");
    const galleryUrl = this.path("/studentartwork");
    const trialUrl = this.path("/homantin-children-art-trial");

    const waPrefill = this._waPrefill(
      t(
        "Hi, I'd like to ask about kids art courses / the HK$100 trial for my child.",
        "你好，我想為小朋友查詢兒童美術課程／HK$100試堂安排。"
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
                <span>${t("Kids Art", "兒童美術")}</span>
              </nav>
              <p class="hero-eyebrow">${t("Ho Man Tin · near Pui Ching · kids art classes", "何文田 • 培正附近 • 兒童畫班")}</p>
              <div class="hero-title-chip">
                <h1 id="hero-title">${t("Kids Art Courses | Drawing, Creative Art & Painting Skills for Children", "兒童美術課程｜小朋友畫畫、創意藝術及繪畫技巧班")}</h1>
                <p class="hero-sub">${t("Choose the right class by age and interest", "按年齡、興趣為小朋友選班")}</p>
              </div>
              <p class="hero-lead">
                ${t(
                  "ICAcademy offers kids art classes for every age — visual art skills, creative art, comics, clay and more advanced directions. Parents can explore the right path by age, interest and goals, then book a trial.",
                  "ICAcademy 為不同年齡的小朋友提供兒童畫班與美術課程，包括視藝技巧、兒童創意美術、漫畫、黏土及相關進階方向。家長可按孩子年齡、興趣與學習目標，先了解合適路徑，再預約試堂。"
                )}
              </p>
              <div class="btn-row">
                <a class="btn btn-coral" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("HK$100 trial", "HK$100 試堂")}</a>
                <button type="button" class="btn btn-outline-teal" data-action="scroll-courses">${t("View kids art courses", "查看兒童美術課程")}</button>
              <a class="btn btn-ghost" data-action="hub" href="${listingUrl}">${t("Kids Art Classes in Ho Man Tin", "何文田兒童畫班")}</a>
              </div>
            </div>
          </div>
        </section>

        <section class="section" aria-labelledby="guide-title">
          <div class="wrap">
            <h2 class="section-title" id="guide-title">${t("How to choose the right art course for your child?", "如何選擇適合小朋友的美術課程？")}</h2>
            <p class="section-lead">${t("Start with their interests, then check age and course details. Every card links to a real course page.", "先按興趣方向了解，再對照年齡與課程詳情。以下對應現有課程頁，不會虛構班別。")}</p>
            <div class="card-grid cols-4">
              ${this._guideHtml()}
            </div>
          </div>
        </section>

        <section class="section section-soft" id="secCourses" aria-labelledby="courses-title">
          <div class="wrap">
            <h2 class="section-title" id="courses-title">${t("Kids Art Courses at a Glance", "兒童美術課程一覽")}</h2>
            <p class="section-lead">${t("Ages and focus areas below are verified. Please ask for the latest times, fees and places.", "以下年齡與重點已核實。上課時間、學費及名額請查詢最新安排。")}</p>
            <div class="age-tabs" role="group" aria-label="${t("Filter kids courses by direction", "按方向篩選兒童課程")}">
              <button type="button" data-action="filter" data-filter="all" aria-pressed="true">${t("All", "全部")}</button>
              <button type="button" data-action="filter" data-filter="age-3-7" aria-pressed="false">${t("Ages 3–7", "3–7歲")}</button>
              <button type="button" data-action="filter" data-filter="age-7-14" aria-pressed="false">${t("Ages 7–14", "7–14歲")}</button>
              <button type="button" data-action="filter" data-filter="clay" aria-pressed="false">${t("Clay", "黏土")}</button>
              <button type="button" data-action="filter" data-filter="comic" aria-pressed="false">${t("Comics", "漫畫")}</button>
              <button type="button" data-action="filter" data-filter="sketch" aria-pressed="false">${t("Sketching", "素描")}</button>
            </div>
            <div class="card-grid cols-2">
              ${this._courseCardsHtml()}
            </div>
          </div>
        </section>

        <section class="section" aria-labelledby="why-title">
          <div class="wrap">
            <div class="detail">
              <div>
                <h2 id="why-title">${t("Why is art good for children?", "為什麼小朋友適合學美術？")}</h2>
                <p class="detail-meta">${t("Observation · Expression · Skills · Confidence", "觀察・表達・技巧・信心")}</p>
                <p class="detail-lead">
                  ${t(
                    "Kids art classes help children practise observation, expression and sound drawing habits. The focus is the learning process — not a one-off “pretty picture”.",
                    "兒童美術課幫助小朋友練習觀察、表達與基本繪畫習慣。重點在學習過程，而不是一次性完成「漂亮作品」。"
                  )}
                </p>
                <ul class="check-list">
                  ${WHY.map((item) => `<li>${this.pick(item)}</li>`).join("")}
                </ul>
                <a class="btn btn-coral" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("Ask about class choice on WhatsApp", "WhatsApp 查詢選班")}</a>
              </div>
              <div class="detail-media">
                <img src="${IMG.detail}" alt="${t("ICAcademy kids art classwork", "ICAcademy兒童美術課堂作品")}" width="800" height="1000" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        <section class="section section-soft" aria-labelledby="path-title">
          <div class="wrap">
            <h2 class="section-title" id="path-title">${t("Kids Art Learning Path (Reference)", "兒童美術學習路徑參考")}</h2>
            <p class="section-lead">${t("This path is for reference only — not every child follows the same order.", "此路徑僅供家長參考，並非每位小朋友都必須依同一順序學習。")}</p>
            <div class="path">
              ${this._pathHtml()}
            </div>
            <p class="path-note">${t("Class placement is adjusted by age, level and interest. If unsure, start with a trial.", "實際分班會按年齡、程度與興趣調整。未確定時可先試堂再決定。")}</p>
          </div>
        </section>

        <section class="section" aria-labelledby="gallery-title">
          <div class="wrap">
            <h2 class="section-title" id="gallery-title">${t("See What Our Kids Create", "看看小朋友的創作")}</h2>
            <p class="section-lead">${t("Thumbnails of published student work. Visit the Student Gallery page for more.", "以下為站內已刊出作品縮圖。想看更多，可前往學員作品頁。")}</p>
            <div class="gallery-grid">
              <figure><img src="${IMG.gallery1}" alt="${t("ICAcademy preschool creative painting", "ICAcademy幼兒創意繪畫作品")}" loading="lazy" /><figcaption>${t("Student artwork", "學員作品")}</figcaption></figure>
              <figure><img src="${IMG.gallery2}" alt="${t("ICAcademy student manga character design", "ICAcademy學生漫畫角色設計作品")}" loading="lazy" /><figcaption>${t("Student artwork", "學員作品")}</figcaption></figure>
              <figure><img src="${IMG.gallery3}" alt="${t("ICAcademy kids sketching class student work", "何文田兒童素描課程學生作品")}" loading="lazy" /><figcaption>${t("Student artwork", "學員作品")}</figcaption></figure>
              <figure><img src="${IMG.gallery4}" alt="${t("ICAcademy class atmosphere", "ICAcademy課堂創作氣氛")}" loading="lazy" /><figcaption>${t("Class atmosphere", "課堂氣氛")}</figcaption></figure>
            </div>
            <div class="center-actions">
              <a class="btn btn-outline-teal" data-action="course" href="${galleryUrl}">${t("See more student artwork", "查看更多學員作品")}</a>
            </div>
          </div>
        </section>

        <section class="section section-soft" aria-labelledby="trial-title">
          <div class="wrap">
            <div class="trial">
              <div class="trial-badge">${t("Try first, then decide", "先體驗，再決定")}</div>
              <h2 id="trial-title">${t("Not sure which class suits your child? Try a class first.", "未肯定小朋友適合邊一班？先試堂再決定。")}</h2>
              <p>
                ${t(
                  "WhatsApp us your child’s age, drawing experience and preferred times — we will help find the right level and class.",
                  "WhatsApp 告訴我們小朋友年齡、繪畫經驗及方便時間，我們會協助了解合適程度與班別。"
                )}
              </p>
              <p class="trial-price">${t("Single trial", "單次試堂")}<strong>HK$100</strong></p>
              <div class="btn-row" style="justify-content:center">
                <a class="btn btn-teal" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("Book an HK$100 trial", "預約 HK$100 試堂")}</a>
                <a class="btn btn-ghost" data-action="hub" href="${trialUrl}">${t("Trial details", "了解試堂詳情")}</a>
              </div>
            </div>
          </div>
        </section>

        <section class="section" aria-labelledby="faq-title">
          <div class="wrap">
            <h2 class="section-title" id="faq-title">${t("Kids Art Class FAQ", "兒童畫班常見問題")}</h2>
            <div class="faq-list">
              ${this._faqHtml()}
            </div>
          </div>
        </section>

        <section class="section section-soft" aria-labelledby="back-title">
          <div class="wrap" style="text-align:center">
            <h2 class="section-title" id="back-title">${t("Explore More Art Courses", "探索更多藝術課程")}</h2>
            <p class="section-lead">${t("See the Ho Man Tin kids art classes, or hop across to Drawing & Painting, trial details and the student gallery.", "想了解何文田兒童畫班課程，或橫向前往繪畫及素描、試堂與學員作品。")}</p>
            <div class="center-actions">
              <a class="btn btn-coral" data-action="hub" href="${listingUrl}">${t("Kids Art Classes in Ho Man Tin", "何文田兒童畫班")}</a>
              <a class="btn btn-outline-teal" data-action="hub" href="${drawingUrl}">${t("Drawing & Painting", "繪畫及素描")}</a>
              <a class="btn btn-ghost" data-action="hub" href="${trialUrl}">${t("Trial details", "試堂詳情")}</a>
              <a class="btn btn-ghost" data-action="hub" href="${galleryUrl}">${t("Student Gallery", "學員作品")}</a>
              <a class="btn btn-ghost" data-action="hub" href="${courseHubUrl}">${t("Back to Courses", "返回課程總覽")}</a>
            </div>
          </div>
        </section>

        <section class="final" aria-labelledby="final-title">
          <h2 id="final-title">${t("Ask About Kids Art Courses Now", "立即查詢兒童美術課程")}</h2>
          <p>${t("Small-group teaching. WhatsApp us about levels, class times and the HK$100 trial.", "小班教學，歡迎 WhatsApp 查詢合適程度、上課時間及 HK$100 試堂安排。")}</p>
          <div class="btn-row">
            <a class="btn btn-coral" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("WhatsApp us", "WhatsApp 查詢")}</a>
            <a class="btn btn-outline-white" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("Book an HK$100 trial", "預約 HK$100 試堂")}</a>
          </div>
        </section>
      </div>
    `;

    this._applyFilter(this._filter || "all");
    this._observeHeight();
  }
}

customElements.define("kids-art-hub", KidsArtHub);
