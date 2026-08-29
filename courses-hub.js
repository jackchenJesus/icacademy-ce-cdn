/**
 * ICAcademy Courses Hub – Custom Element
 * Tag name: courses-hub
 * Version: 2026-08-29-v16 (fix 404: art-drawing → drawing-and-painting; sketching nested URL)
 * Routes: /course and /course-hub (EN) | /zh/course and /zh/course-hub (ZH)
 * Locale via URL /zh, html lang, or attribute locale="en"|"zh" (default en = site primary).
 */
const WA_DEFAULT = "https://wa.me/85265808022";

/** Build a Wix Media Manager fill URL from a site media file id. */
function mediaUrl(id, w, h, q = 70) {
  return `https://static.wixstatic.com/media/${id}/v1/fill/w_${w},h_${h},al_c,q_${q},enc_auto/${id}`;
}

/**
 * Photos sourced from IC Academy site Media Manager
 * (already used on /zh course pages, home, gallery).
 */
const IMG = {
  heroSm: mediaUrl("b98cc9_2dc758ef8b0b487a8fc29f8f5e7e5622~mv2.jpeg", 640, 400, 70),
  hero: mediaUrl("b98cc9_2dc758ef8b0b487a8fc29f8f5e7e5622~mv2.jpeg", 960, 600, 75),
  heroLg: mediaUrl("b98cc9_2dc758ef8b0b487a8fc29f8f5e7e5622~mv2.jpeg", 1280, 800, 75),
  prep: mediaUrl("b98cc9_ad34c2bb0fca4f8186d9e43bb8e1909c~mv2.jpg", 640, 400, 70),
  foundation: mediaUrl("b98cc9_c966f659ad4c45939096573490e41e6b~mv2.jpg", 640, 400, 70),
  creativeI: mediaUrl("b98cc9_f16629f0d6414271822e19d767f44457~mv2.jpg", 640, 400, 70),
  creativeII: mediaUrl("b98cc9_66611472f2134e0fa854d2914e4ae347~mv2.jpg", 640, 400, 70),
  creativeIII: mediaUrl("b98cc9_2811c03afb09487fb93b5356133bd57b~mv2.jpg", 640, 400, 70),
  comic: mediaUrl("b98cc9_37e0184c611f48fb96bae9a1fa37dc05~mv2.jpg", 640, 400, 70),
  sketch: mediaUrl("b98cc9_7f99cc18f81e42f9a5551280f6425b55~mv2.jpg", 640, 400, 70),
  clay: mediaUrl("b98cc9_33c4c822ff2e4e5e86a4dfd9ce7b7be7~mv2.jpeg", 640, 400, 70),
  visualArt: mediaUrl("b98cc9_ebe4308b54a24d24b9be7d03605ac494~mv2.jpg", 640, 400, 70),
  acrylic: mediaUrl("b98cc9_4207ae71d0a44db99d86eeadc8e54f33~mv2.jpeg", 640, 400, 70),
  paintSquare: mediaUrl("4ea940_9933a9bae4884170a5bf9bd5355e340f~mv2.jpg", 640, 400, 70),
  gallery1: mediaUrl("b98cc9_49cb0c61e7664eaca996580443195ec9~mv2.jpeg", 480, 480, 70),
  gallery2: mediaUrl("4ea940_5867e3daf35f4f969495afa34a05f1a3~mv2.jpg", 480, 480, 70),
  gallery3: mediaUrl("b98cc9_9605c850cf4b47daafd611bb1215e1fd~mv2.jpeg", 480, 480, 70),
  gallery4: mediaUrl("b98cc9_8b62b24164484280941000b87ffdecc8~mv2.jpg", 480, 480, 70),
  detail: mediaUrl("b98cc9_0d50c3e155ba4c4e92046d937a5c0c43~mv2.jpg", 640, 800, 70),
};

(function preloadHeroLcp() {
  try {
    if (document.querySelector("link[data-courses-hero-preload]")) return;
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = IMG.heroSm;
    link.setAttribute("fetchpriority", "high");
    link.setAttribute("imagesrcset", `${IMG.heroSm} 800w, ${IMG.hero} 1200w, ${IMG.heroLg} 1600w`);
    link.setAttribute("imagesizes", "100vw");
    link.setAttribute("data-courses-hero-preload", "1");
    document.head.appendChild(link);
  } catch (e) {
    // ignore
  }
})();

/** Verified course catalogue (names / ages / URLs audited 2026-08) */
const COURSES = [
  {
    id: "prep",
    name: { en: "Visual Art Skills (Preparatory)", zh: "視藝技巧（預備課程）" },
    age: { en: "Ages 3–5", zh: "3–5歲" },
    ageMin: 3,
    ageMax: 5,
    focus: {
      en: "Creative play and sensory exploration for young children",
      zh: "幼兒創意啟蒙與感官探索",
    },
    points: {
      en: ["Lines, shapes and colour basics", "Fine motor and hand–eye coordination", "Class routine and finishing artwork independently"],
      zh: ["線條、形狀與色彩入門", "小手肌與手眼協調", "課堂常規與獨立完成作品"],
    },
    media: { en: "Crayons, watercolour, collage, printmaking", zh: "蠟筆、水彩、剪貼、印畫" },
    hrefSlug: "/course/kids-art/visual-art-skills-course",
    tags: ["foundation", "painting"],
    image: IMG.prep,
    imageAlt: { en: "ICAcademy young children’s creative painting class artwork", zh: "ICAcademy幼兒創意繪畫課堂作品" },
  },
  {
    id: "foundation",
    name: { en: "Visual Art Skills (Foundation)", zh: "視藝技巧（基礎課程）" },
    age: { en: "Ages 5–7", zh: "5–7歲" },
    ageMin: 5,
    ageMax: 7,
    focus: {
      en: "Build observation, form and basic composition skills",
      zh: "建立觀察、造型與基本構圖能力",
    },
    points: {
      en: ["Observation and form practice", "Proportion and picture organisation", "Mixed-media creation"],
      zh: ["觀察與造型練習", "比例與畫面組織", "多元媒介創作"],
    },
    media: { en: "Drawing and mixed media", zh: "繪畫及混合媒介" },
    hrefSlug: "/course/kids-art/visual-art-skills-course",
    tags: ["foundation", "painting"],
    image: IMG.foundation,
    imageAlt: { en: "ICAcademy Visual Art Skills Foundation student artwork", zh: "ICAcademy視藝技巧基礎課程學生作品" },
  },
  {
    id: "creative-i",
    name: { en: "Creative Art Level I", zh: "兒童創意美術 Level I" },
    age: { en: "Ages 7–9", zh: "7–9歲" },
    ageMin: 7,
    ageMax: 9,
    focus: {
      en: "Strengthen drawing basics and creative confidence",
      zh: "鞏固繪畫基礎，建立創作信心",
    },
    points: {
      en: ["Line, colour and basic composition", "Observation and imagination", "Simple mixed-media work"],
      zh: ["線條、色彩、基本構圖", "主題觀察與想像", "簡單多媒介創作"],
    },
    media: { en: "Drawing, collage and mixed materials", zh: "繪畫、拼貼、多元物料" },
    hrefSlug: "/course/kids-art/creative-art-classes",
    tags: ["creative", "painting"],
    image: IMG.creativeI,
    imageAlt: { en: "ICAcademy Creative Art student artwork", zh: "ICAcademy兒童創意美術作品" },
  },
  {
    id: "creative-ii",
    name: { en: "Creative Art Level II", zh: "兒童創意美術 Level II" },
    age: { en: "Ages 9–11", zh: "9–11歲" },
    ageMin: 9,
    ageMax: 11,
    focus: {
      en: "Strengthen proportion, space and finished compositions",
      zh: "加強比例、空間與畫面完整度",
    },
    points: {
      en: ["Advanced proportion and composition", "Colour combinations", "Personal ideas in themed work"],
      zh: ["比例與構圖進階", "色彩配搭", "個人想法融入主題"],
    },
    media: { en: "Drawing and mixed media", zh: "繪畫及多元媒介" },
    hrefSlug: "/course/kids-art/creative-art-classes",
    tags: ["creative", "painting"],
    image: IMG.creativeII,
    imageAlt: { en: "ICAcademy primary Creative Art painting", zh: "ICAcademy小學創意繪畫作品" },
  },
  {
    id: "creative-iii",
    name: { en: "Creative Art Level III", zh: "兒童創意美術 Level III" },
    age: { en: "Ages 11–14", zh: "11–14歲" },
    ageMin: 11,
    ageMax: 14,
    focus: { en: "Deepen technique and personal style", zh: "深化技巧與個人風格" },
    points: {
      en: ["Layering and form", "Themed studies", "Foundation for more advanced art"],
      zh: ["畫面層次與造型", "主題研究", "為進階美術建立基礎"],
    },
    media: { en: "Multi-media creation", zh: "多媒介創作" },
    hrefSlug: "/course/kids-art/creative-art-classes",
    tags: ["creative", "painting", "teen"],
    image: IMG.creativeIII,
    imageAlt: { en: "ICAcademy teen Creative Art artwork", zh: "ICAcademy青少年創意美術作品" },
  },
  {
    id: "comic",
    name: { en: "Comic Drawing Class", zh: "卡通漫畫班" },
    age: { en: "Ages 8+", zh: "8歲以上" },
    ageMin: 8,
    ageMax: 99,
    focus: {
      en: "Figure proportion, expression and original character design",
      zh: "人物比例、表情與原創角色設計",
    },
    points: {
      en: ["Comic figure proportion and features", "Character design and story background", "Panel composition"],
      zh: ["漫畫人物比例與五官", "角色造型與故事背景", "畫面構圖表達"],
    },
    media: { en: "Pencil, markers and comic media", zh: "鉛筆、馬克筆、漫畫媒材" },
    hrefSlug: "/course/kids-art/comic-drawing-class",
    tags: ["comic"],
    image: IMG.comic,
    imageAlt: { en: "ICAcademy student comic character design", zh: "ICAcademy學生漫畫角色設計作品" },
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
    hrefSlug: "/course/drawing-and-painting/sketching-class",
    tags: ["sketch", "teen"],
    image: IMG.sketch,
    imageAlt: { en: "Ho Man Tin children’s sketching class student work", zh: "何文田兒童素描課程學生作品" },
  },
  {
    id: "clay",
    name: { en: "Soft Clay Class", zh: "輕黏土課程" },
    age: { en: "Ages 3–16", zh: "3–16歲" },
    ageMin: 3,
    ageMax: 16,
    focus: {
      en: "3D modelling, structure and colour aesthetics",
      zh: "立體塑形、結構與色彩美感",
    },
    points: {
      en: ["Basic modelling and colour mixing", "Age-based themed projects", "Take home a 3D artwork"],
      zh: ["基礎塑形與混色", "分齡主題創作", "完成立體作品帶回家"],
    },
    media: { en: "Soft clay and professional clay media", zh: "輕黏土及專業黏土媒材" },
    hrefSlug: "/course/kids-art/creative-art-and-clay-class",
    tags: ["clay"],
    image: IMG.clay,
    imageAlt: { en: "ICAcademy children’s soft clay 3D artwork", zh: "ICAcademy兒童黏土立體創作作品" },
  },
  {
    id: "visual-art",
    name: { en: "Visual Art Class", zh: "綜合美術課程" },
    age: { en: "Ages 14+", zh: "14歲以上" },
    ageMin: 14,
    ageMax: 99,
    focus: {
      en: "Multi-media exploration and personal creative direction",
      zh: "多媒介探索與個人創作方向",
    },
    points: {
      en: ["Sketching, acrylic and mixed media", "From idea to finished work", "Guidance matched to level"],
      zh: ["素描、塑膠彩及混合媒介", "主題構思至完成作品", "按程度個別指導"],
    },
    media: { en: "Sketching, acrylic and mixed media", zh: "素描、塑膠彩、混合媒介" },
    hrefSlug: "/course/kids-art/visual-art-class",
    tags: ["teen", "painting", "portfolio"],
    image: IMG.visualArt,
    imageAlt: { en: "ICAcademy teen Visual Art Class artwork", zh: "ICAcademy青少年綜合美術作品" },
  },
  {
    id: "acrylic",
    name: { en: "Acrylic Painting Class", zh: "塑膠彩班" },
    age: { en: "Ages 14+", zh: "14歲以上" },
    ageMin: 14,
    ageMax: 99,
    focus: { en: "Colour mixing, brushwork and composition", zh: "調色、筆觸與構圖技巧" },
    points: {
      en: ["Acrylic fundamentals", "Colour and brushwork practice", "Complete picture-making"],
      zh: ["塑膠彩基礎運用", "色彩與筆觸練習", "完整畫面表達"],
    },
    media: { en: "Acrylic paint", zh: "塑膠彩" },
    hrefSlug: "/course/drawing-and-painting/acrylic-painting-class",
    tags: ["teen", "painting"],
    image: IMG.acrylic,
    imageAlt: { en: "ICAcademy acrylic painting class student work", zh: "ICAcademy塑膠彩課程學生作品" },
  },
  {
    id: "paint-square",
    name: { en: "Paint Square", zh: "成人繪畫課程 Paint Square" },
    age: { en: "All levels", zh: "所有程度" },
    ageMin: 16,
    ageMax: 99,
    focus: {
      en: "Adult painting — subject and medium matched to you",
      zh: "成人繪畫 · 按喜好選擇題材與媒介",
    },
    points: {
      en: ["Western painting, watercolour, sketching", "Comics, illustration and fashion drawing", "Beginners welcome · max 6"],
      zh: ["西洋畫、水彩、素描", "漫畫、插畫及時裝設計", "初學者亦可 · 最多6人"],
    },
    media: { en: "Mixed painting media", zh: "多元繪畫媒介" },
    hrefSlug: "/course/drawing-and-painting/adult-art-class-hong-kong",
    tags: ["teen", "painting"],
    image: IMG.paintSquare,
    imageAlt: { en: "ICAcademy adult painting Paint Square student work", zh: "ICAcademy成人繪畫課程學員作品" },
  },
];

const INTERESTS = [
  {
    id: "kids",
    title: { en: "Kids Art Classes", zh: "兒童畫班" },
    desc: { en: "Kids art guide · creative / comics / clay", zh: "兒童美術選班指南 · 創意／漫畫／黏土" },
    hrefSlug: "/course/kids-art",
  },
  {
    id: "drawing-painting",
    title: { en: "Drawing & Painting", zh: "繪畫及素描" },
    desc: { en: "Sketching, acrylic, visual art skills and mixed media", zh: "素描、塑膠彩、視藝技巧及綜合美術" },
    hrefSlug: "/course/drawing-and-painting",
  },
  {
    id: "clay",
    title: { en: "Clay & 3D Creation", zh: "黏土與立體創作" },
    desc: { en: "Modelling, structure and spatial sense", zh: "塑形、結構與空間感" },
    hrefSlug: "/course/kids-art/creative-art-and-clay-class",
  },
  {
    id: "comic",
    title: { en: "Comic Drawing Class", zh: "卡通漫畫班" },
    desc: { en: "Figures, expressions and character design", zh: "人物、表情與角色設計" },
    hrefSlug: "/course/kids-art/comic-drawing-class",
  },
];

const FAQ = [
  {
    q: { en: "My child has never learned drawing — is that OK?", zh: "小朋友沒有學過畫畫，可以參加嗎？" },
    a: {
      en: "Yes. Different courses suit different ages and levels; beginners can start with foundation skills. You can also WhatsApp us with your child’s age and experience before enrolling.",
      zh: "可以。不同課程適合不同年齡及程度；初學者可由基礎技巧開始。報名前亦可先提供小朋友的年齡和經驗作查詢。",
    },
  },
  {
    q: { en: "How should we choose a course?", zh: "應該怎樣選擇課程？" },
    a: {
      en: "Choose by age, current experience and interests. If you are unsure, WhatsApp us and we will help suggest a suitable direction.",
      zh: "可按小朋友的年齡、現有經驗及興趣方向選擇。未確定的家長可透過 WhatsApp 查詢，我們會協助了解較合適的方向。",
    },
  },
  {
    q: { en: "How many students are in a class?", zh: "每班有多少人？" },
    a: {
      en: "Most classes are small groups so teachers can observe each student and give more individual guidance. Please ask our advisors for current class sizes.",
      zh: "大多數課程以小班形式進行，讓導師可以觀察每位學員，提供較充足的個別指導。實際人數請向課程顧問查詢。",
    },
  },
  {
    q: { en: "Can we book a trial class first?", zh: "可以先預約試堂嗎？" },
    a: {
      en: "Yes. Please enquire via WhatsApp. Tell us your child’s age, drawing experience and preferred times, and we will help arrange a suitable class.",
      zh: "歡迎先透過 WhatsApp 查詢試堂安排。告訴我們小朋友年齡、繪畫經驗和方便時間，我們會協助了解合適班別。",
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

const APPROACH = [
  {
    en: "Classes grouped by age and level, with guidance adjusted to ability",
    zh: "按年齡及程度分班，因應能力調整指導方式",
  },
  {
    en: "Build art foundations through observation, line, shape, colour and composition",
    zh: "由觀察、線條、形狀、色彩和構圖建立藝術基礎",
  },
  {
    en: "Encourage personal expression — putting observation and ideas into artwork",
    zh: "鼓勵個人表達，把觀察與想法放進作品",
  },
  {
    en: "Explore many media to build richer art experience",
    zh: "探索多元媒介，累積更豐富的藝術經驗",
  },
  {
    en: "Small-group teaching so teachers can observe and follow up individually",
    zh: "小班教學，方便導師個別觀察與跟進",
  },
  {
    en: "Located in Ho Man Tin, convenient for families around Pui Ching",
    zh: "位於何文田，方便培正一帶家長",
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

/* —— Hero (full-bleed; no top coral strip) —— */
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
  object-position: 68% center;
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

/* —— Filters —— */
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

/* —— Course cards —— */
.card-grid {
  display: grid;
  gap: 20px;
}
@media (min-width: 720px) {
  .card-grid.cols-2 { grid-template-columns: repeat(2, 1fr); }
  .card-grid.cols-3 { grid-template-columns: repeat(3, 1fr); }
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
.card-actions { margin-top: auto; padding-top: 10px; }

/* —— Detail-style block (approach) —— */
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

/* —— Explore cards —— */
.interest-card {
  background: #fff;
  border-radius: 16px;
  padding: 36px 22px;
  text-decoration: none;
  text-align: center;
  min-height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  box-shadow: var(--shadow);
  transition: transform .15s ease;
}
.interest-card:hover { transform: translateY(-3px); }
.interest-card h3 { margin: 0; font-size: 1.25rem; }
.interest-card p { margin: 0; color: var(--muted); font-size: 0.95rem; }

/* —— Compare —— */
.compare-table { width: 100%; border-collapse: collapse; display: none; }
@media (min-width: 860px) {
  .compare-table { display: table; background: #fff; border-radius: 16px; overflow: hidden; }
  .compare-cards { display: none; }
}
.compare-table th, .compare-table td {
  text-align: left;
  padding: 14px 16px;
  border-bottom: 1px solid var(--line);
  vertical-align: top;
}
.compare-table th { background: #f0fafb; color: var(--teal-deep); font-size: 0.92rem; }
.compare-table a { color: var(--teal); font-weight: 700; text-decoration: none; }
.compare-cards { display: grid; gap: 14px; }
.compare-card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 20px;
  box-shadow: var(--shadow);
}
.compare-card h3 {
  margin: 0 0 14px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--line);
  font-size: 1.08rem;
}
.compare-rows { display: grid; gap: 0; margin: 0 0 16px; }
.compare-row {
  display: grid;
  grid-template-columns: 5.5em 1fr;
  gap: 10px;
  padding: 10px 0;
  border-bottom: 1px solid var(--line);
  align-items: start;
}
.compare-row:last-child { border-bottom: 0; }
.compare-label {
  font-size: 0.82rem;
  color: var(--muted);
  font-weight: 600;
}
.compare-value {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--ink);
  line-height: 1.5;
}
.compare-card .btn { width: 100%; }

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

/* —— Trial card —— */
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
  .compare-row { grid-template-columns: 1fr; gap: 4px; }
}
`;

class CoursesHub extends HTMLElement {
  static get observedAttributes() {
    return ["wa-url", "locale"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._filter = "all";
    this._onClick = this._onClick.bind(this);
    this._onKeydown = this._onKeydown.bind(this);
    this._applyFullBleedCss = this._applyFullBleedCss.bind(this);
    this._restPainted = false;
  }

  connectedCallback() {
    this.render();
    const syncLocale = () => {
      try {
        if (this.localeCode === "zh") {
          const h1 = this.shadowRoot && this.shadowRoot.querySelector("h1");
          if (h1 && /Kids Art Courses/i.test(h1.textContent || "")) {
            this.render();
          }
        }
      } catch (e) {}
    };
    setTimeout(syncLocale, 0);

    this.shadowRoot.addEventListener("click", this._onClick);
    this.shadowRoot.addEventListener("keydown", this._onKeydown);
    window.addEventListener("resize", this._applyFullBleedCss);
    window.addEventListener("orientationchange", this._applyFullBleedCss);
  }

  disconnectedCallback() {
    this.shadowRoot.removeEventListener("click", this._onClick);
    this.shadowRoot.removeEventListener("keydown", this._onKeydown);
    window.removeEventListener("resize", this._applyFullBleedCss);
    window.removeEventListener("orientationchange", this._applyFullBleedCss);
    const bleed = document.getElementById("courses-hub-page-bleed");
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
    const id = "courses-hub-page-bleed";
    if (document.getElementById(id)) return;
    const style = document.createElement("style");
    style.id = id;
    style.textContent = `
      courses-hub {
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

    if (action === "scroll-age") {
      event.preventDefault();
      const sec = this.shadowRoot.getElementById("secAgeNav");
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

  _onKeydown(event) {
    if (event.key !== "Enter" && event.key !== " ") return;
  }

  _courseCardsHtml() {
    return COURSES.map((c) => {
      const points = this.pick(c.points) || [];
      return `
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
            ${points.map((p) => `<li>${p}</li>`).join("")}
          </ul>
          <div class="card-actions">
            <a class="btn btn-ghost" data-action="course" href="${this.path(c.hrefSlug)}">${this.isEn ? "View course" : "查看課程"}</a>
          </div>
        </div>
      </article>`;
    }).join("");
  }

  _interestHtml() {
    return INTERESTS.map(
      (i) => `
      <a class="interest-card" data-action="course" href="${this.path(i.hrefSlug)}">
        <h3>${this.pick(i.title)}</h3>
        <p>${this.pick(i.desc)}</p>
      </a>`
    ).join("");
  }

  _compareDesktopHtml() {
    const t = (en, zh) => (this.isEn ? en : zh);
    const rows = COURSES.map(
      (c) => `
      <tr>
        <td>${this.pick(c.name)}</td>
        <td>${this.pick(c.age)}</td>
        <td>${this.pick(c.focus)}</td>
        <td>${this.pick(c.media)}</td>
        <td><a data-action="course" href="${this.path(c.hrefSlug)}">${t("Details", "查看詳情")}</a></td>
      </tr>`
    ).join("");
    return `
      <table class="compare-table" aria-label="${t("Art course comparison", "藝術課程比較")}">
        <thead>
          <tr>
            <th>${t("Course", "課程")}</th>
            <th>${t("Age", "適合年齡")}</th>
            <th>${t("Focus", "學習重點")}</th>
            <th>${t("Media / skills", "媒介或技巧")}</th>
            <th>${t("Details", "詳情")}</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>`;
  }

  _compareMobileHtml() {
    const t = (en, zh) => (this.isEn ? en : zh);
    return `
      <div class="compare-cards">
        ${COURSES.map(
          (c) => `
          <article class="compare-card">
            <h3>${this.pick(c.name)}</h3>
            <div class="compare-rows">
              <div class="compare-row">
                <span class="compare-label">${t("Age", "適合年齡")}</span>
                <span class="compare-value">${this.pick(c.age)}</span>
              </div>
              <div class="compare-row">
                <span class="compare-label">${t("Focus", "學習重點")}</span>
                <span class="compare-value">${this.pick(c.focus)}</span>
              </div>
              <div class="compare-row">
                <span class="compare-label">${t("Media / skills", "媒介或技巧")}</span>
                <span class="compare-value">${this.pick(c.media)}</span>
              </div>
            </div>
            <a class="btn btn-coral" data-action="course" href="${this.path(c.hrefSlug)}">${t("View details", "查看詳情")}</a>
          </article>`
        ).join("")}
      </div>`;
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

  _paintHero() {
    const t = (en, zh) => (this.isEn ? en : zh);
    const waPrefill = this._waPrefill(
      t(
        "Hi, I’d like to enquire about ICAcademy regular art courses / a trial class.",
        "你好，我想查詢ICAcademy恆常藝術課程／試堂安排。"
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
              <p class="hero-eyebrow">${t("Ho Man Tin • Near Pui Ching • Small-group art", "何文田 • 培正附近 • 小班藝術教學")}</p>
              <div class="hero-title-chip">
                <h1 id="hero-title">${t("Ho Man Tin ", "何文田")}<span class="accent">${t("Kids Art", "兒童藝術")}</span>${t(" Courses", "課程")}</h1>
                <p class="hero-sub">${t("Find the right art class by age", "按年齡找到合適畫班")}</p>
              </div>
              <p class="hero-lead">
                ${t(
                  "ICAcademy offers art courses for children and teens at every stage. From early creative play, drawing foundations, comics and sketching, to more advanced teen training, teachers guide students by age and ability.",
                  "ICAcademy 為不同成長階段的兒童及青少年提供藝術課程。由幼兒創意啟蒙、繪畫基礎、漫畫及素描，到青少年專業藝術訓練，導師會按學生年齡與能力提供適切指導。"
                )}
              </p>
              <div class="btn-row">
                <a class="btn btn-coral" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("WhatsApp enquiry", "WhatsApp 查詢")}</a>
                <button type="button" class="btn btn-outline-teal" data-action="scroll-age">${t("Find courses by age", "按年齡找課程")}</button>
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
        "Hi, I’d like to enquire about ICAcademy regular art courses / a trial class.",
        "你好，我想查詢ICAcademy恆常藝術課程／試堂安排。"
      )
    );
    const galleryUrl = this.isEn
      ? "https://www.icacademy.com.hk/studentartwork"
      : "https://www.icacademy.com.hk/zh/studentartwork";
    const trialUrl = this.path("/homantin-children-art-trial");

    hub.insertAdjacentHTML(
      "beforeend",
      `
        <section class="section" id="secAgeNav" aria-labelledby="age-title">
          <div class="wrap">
            <h2 class="section-title" id="age-title">${t("Which learning stage is your child in?", "小朋友現時屬於哪個學習階段？")}</h2>
            <p class="section-lead">${t("Browse regular courses by age. Filters highlight matching cards.", "先按年齡瀏覽恆常課程。點選篩選會突出相關卡片。")}</p>
            <div class="age-tabs" role="group" aria-label="${t("Filter courses by age", "按年齡篩選課程")}">
              <button type="button" data-action="filter" data-filter="all" aria-pressed="true">${t("All", "全部")}</button>
              <button type="button" data-action="filter" data-filter="age-3-7" aria-pressed="false">${t("Ages 3–7", "3–7歲")}</button>
              <button type="button" data-action="filter" data-filter="age-7-14" aria-pressed="false">${t("Ages 7–14", "7–14歲")}</button>
              <button type="button" data-action="filter" data-filter="age-8plus" aria-pressed="false">${t("Ages 8+", "8歲以上")}</button>
              <button type="button" data-action="filter" data-filter="clay" aria-pressed="false">${t("Clay", "黏土")}</button>
              <button type="button" data-action="filter" data-filter="comic" aria-pressed="false">${t("Comics", "漫畫")}</button>
              <button type="button" data-action="filter" data-filter="sketch" aria-pressed="false">${t("Sketching", "素描")}</button>
            </div>
            <div class="card-grid cols-2">
              ${this._courseCardsHtml()}
            </div>
          </div>
        </section>
      `
    );
    this._applyFilter(this._filter || "all");
    this._paintRestMore(t, waPrefill, galleryUrl, trialUrl);
  }

  _paintRestMore(t, waPrefill, galleryUrl, trialUrl) {
    const hub = this.shadowRoot && this.shadowRoot.querySelector(".hub");
    if (!hub || hub.querySelector(".final")) return;
    hub.insertAdjacentHTML(
      "beforeend",
      `
        <section class="section section-soft" aria-labelledby="approach-title">
          <div class="wrap">
            <div class="detail">
              <div>
                <h2 id="approach-title">${t("More than finished artwork — we value how children learn", "不只完成作品，更重視孩子的學習過程")}</h2>
                <p class="detail-meta">${t("Toddlers to teens · Small-group teaching", "適合幼兒至青少年｜小班指導")}</p>
                <p class="detail-lead">
                  ${t(
                    "Start with age and interests, then WhatsApp us about a trial class and timetable.",
                    "家長可以先按年齡及興趣方向了解合適課程，再透過 WhatsApp 查詢試堂與上課時間。"
                  )}
                </p>
                <ul class="check-list">
                  ${APPROACH.map((item) => `<li>${this.pick(item)}</li>`).join("")}
                </ul>
                <a class="btn btn-coral" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("Ask about courses", "查詢課程詳情")}</a>
              </div>
              <div class="detail-media">
                <img src="${IMG.detail}" alt="${t("ICAcademy student artwork example", "ICAcademy學生藝術作品示例")}" width="800" height="1000" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        <section class="section" aria-labelledby="compare-title">
          <div class="wrap">
            <h2 class="section-title" id="compare-title">${t("Quick course comparison", "快速比較藝術課程")}</h2>
            <p class="section-lead">${t("Key points of verified courses only. Please ask for current timetable, fees and places.", "以下只顯示網站已核實的課程重點。上課時間、學費及名額請查詢最新安排。")}</p>
            ${this._compareDesktopHtml()}
            ${this._compareMobileHtml()}
          </div>
        </section>

        <section class="section section-soft" aria-labelledby="gallery-title">
          <div class="wrap">
            <h2 class="section-title" id="gallery-title">${t("See artwork by students of different ages", "看看不同年齡學生的創作")}</h2>
            <p class="section-lead">${t("Thumbnails from published student work. Visit the gallery for more.", "以下為站內已刊出作品縮圖。想看更多，可前往學員作品頁。")}</p>
            <div class="gallery-grid">
              <figure><img src="${IMG.gallery1}" alt="${t("ICAcademy young children’s creative painting", "ICAcademy幼兒創意繪畫作品")}" loading="lazy" /><figcaption>${t("Student artwork", "學員作品")}</figcaption></figure>
              <figure><img src="${IMG.gallery2}" alt="${t("ICAcademy student comic character design", "ICAcademy學生漫畫角色設計作品")}" loading="lazy" /><figcaption>${t("Student artwork", "學員作品")}</figcaption></figure>
              <figure><img src="${IMG.gallery3}" alt="${t("Ho Man Tin children’s sketching class work", "何文田兒童素描課程學生作品")}" loading="lazy" /><figcaption>${t("Student artwork", "學員作品")}</figcaption></figure>
              <figure><img src="${IMG.gallery4}" alt="${t("ICAcademy classroom atmosphere", "ICAcademy課堂創作氣氛")}" loading="lazy" /><figcaption>${t("Class atmosphere", "課堂氣氛")}</figcaption></figure>
            </div>
            <div class="center-actions">
              <a class="btn btn-outline-teal" data-action="course" href="${galleryUrl}">${t("View more student artwork", "查看更多學員作品")}</a>
            </div>
          </div>
        </section>

        <section class="section" aria-labelledby="trial-title">
          <div class="wrap">
            <div class="trial">
              <div class="trial-badge">${t("Try first, then decide", "先體驗，再決定")}</div>
              <h2 id="trial-title">${t("Art course trial class", "恆常藝術課程試堂")}</h2>
              <p>
                ${t(
                  "Let your child experience the class atmosphere, teaching style and creative process. WhatsApp us with age, drawing experience and preferred times — we will help arrange a suitable level.",
                  "讓孩子親身體驗課堂氣氛、教學方式及創作流程。WhatsApp 告訴我們孩子年齡、繪畫經驗及方便時間，我們會協助安排合適程度。"
                )}
              </p>
              <p class="trial-price">${t("Single trial", "單次試堂")}<strong>HK$100</strong></p>
              <div class="btn-row" style="justify-content:center">
                <a class="btn btn-teal" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("Book a trial on WhatsApp", "WhatsApp 預約試堂")}</a>
                <a class="btn btn-ghost" data-action="hub" href="${trialUrl}">${t("Trial class details", "了解試堂詳情")}</a>
              </div>
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

        <section class="section section-soft" aria-labelledby="interest-title">
          <div class="wrap">
            <h2 class="section-title" id="interest-title">${t("Explore more courses", "探索更多課程")}</h2>
            <p class="section-lead">${t("Go to a course page by interest to see teaching content and suitable levels.", "按方向進入對應課程頁，了解更多教學內容與適合程度。")}</p>
            <div class="card-grid cols-3">
              ${this._interestHtml()}
            </div>
          </div>
        </section>

        <section class="final" aria-labelledby="final-title">
          <h2 id="final-title">${t("Enquire about art courses", "立即查詢藝術課程")}</h2>
          <p>${t("Small-group teaching. WhatsApp us about level, timetable and trial classes.", "小班教學，歡迎 WhatsApp 查詢合適程度、上課時間及試堂安排。")}</p>
          <div class="btn-row">
            <a class="btn btn-coral" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("WhatsApp enquiry", "WhatsApp 查詢")}</a>
            <a class="btn btn-outline-white" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("Book a trial now", "立即預約體驗")}</a>
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

customElements.define("courses-hub", CoursesHub);
