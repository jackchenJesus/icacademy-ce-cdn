/**
 * ICAcademy Drawing & Painting Silo Hub – Custom Element
 * Tag name: drawing-painting-hub
 * Version: 2026-08-30-v8 (collapse white gap between final CTA and footer)
 * Design system: matches kids-art-hub / courses-hub (coral / teal)
 * Routes: /course/drawing-and-painting (EN) | /zh/course/drawing-and-painting (ZH)
 */
const WA_DEFAULT = "https://wa.me/85265808022";

function mediaUrl(id, w, h) {
  return `https://static.wixstatic.com/media/${id}/v1/fill/w_${w},h_${h},al_c,q_85,enc_auto/${id}`;
}

const IMG = {
  hero: mediaUrl("b98cc9_7f99cc18f81e42f9a5551280f6425b55~mv2.jpg", 1600, 1000),
  sketch: mediaUrl("b98cc9_e67c1877a803495fa45ccea725f0f7ce~mv2.jpg", 800, 600),
  acrylic: mediaUrl("b98cc9_4207ae71d0a44db99d86eeadc8e54f33~mv2.jpeg", 800, 600),
  visualSkills: mediaUrl("b98cc9_c966f659ad4c45939096573490e41e6b~mv2.jpg", 800, 600),
  visualArt: mediaUrl("b98cc9_ebe4308b54a24d24b9be7d03605ac494~mv2.jpg", 800, 600),
  paintSquare: mediaUrl("4ea940_9933a9bae4884170a5bf9bd5355e340f~mv2.jpg", 800, 600),
  gallery1: mediaUrl("b98cc9_7f99cc18f81e42f9a5551280f6425b55~mv2.jpg", 800, 800),
  gallery2: mediaUrl("b98cc9_4207ae71d0a44db99d86eeadc8e54f33~mv2.jpeg", 800, 800),
  gallery3: mediaUrl("b98cc9_8b62b24164484280941000b87ffdecc8~mv2.jpg", 800, 800),
  gallery4: mediaUrl("b98cc9_bc2649cc31bc4974bb739afa5f006c73~mv2.jpg", 800, 800),
  detail: mediaUrl("b98cc9_cb846bd1bf8247879e2992d72b9913f4~mv2.jpg", 800, 1000),
};

/** Drawing & painting programmes — ages / URLs audited from Course Hub catalogue 2026-08 */
const COURSES = [
  {
    id: "sketch",
    name: { en: "Sketching Class", zh: "素描技巧班" },
    age: { en: "Ages 9+", zh: "9歲以上" },
    ageMin: 9,
    ageMax: 99,
    focus: { en: "Observation, proportion, light and texture", zh: "觀察、比例、光暗與質感" },
    points: {
      en: ["Pencil control and underdrawing", "Composition and space", "Light, shade and materials"],
      zh: ["鉛筆控制與起稿", "構圖與空間", "光暗及材質表現"],
    },
    media: { en: "Pencil sketching", zh: "鉛筆素描" },
    hrefSlug: "/course/drawing-and-painting/sketching-class",
    tags: ["sketch", "drawing"],
    image: IMG.sketch,
    imageAlt: { en: "Ho Man Tin sketching class student work", zh: "何文田素描課程學生作品" },
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
    tags: ["acrylic", "painting"],
    image: IMG.acrylic,
    imageAlt: { en: "ICAcademy acrylic painting class student work", zh: "ICAcademy塑膠彩課程學生作品" },
  },
  {
    id: "visual-skills",
    name: { en: "Visual Art Skills (Preparatory / Foundation)", zh: "視藝技巧（預備／基礎）" },
    age: { en: "Ages 3–7", zh: "3–7歲" },
    ageMin: 3,
    ageMax: 7,
    focus: {
      en: "Build observation, form and basic drawing skills",
      zh: "建立觀察、造型與基本繪畫能力",
    },
    points: {
      en: ["Lines, shapes and colour basics", "Observation and simple composition", "Mixed-media making"],
      zh: ["線條、形狀與色彩入門", "觀察與基本構圖", "多元媒介創作"],
    },
    media: { en: "Drawing and mixed media", zh: "繪畫及混合媒介" },
    hrefSlug: "/course/kids-art/visual-art-skills-course",
    tags: ["visual-skills", "drawing", "painting"],
    image: IMG.visualSkills,
    imageAlt: { en: "ICAcademy Visual Art Skills student work", zh: "ICAcademy視藝技巧課程學生作品" },
  },
  {
    id: "visual-art",
    name: { en: "Visual Art Class", zh: "綜合美術課程" },
    age: { en: "Ages 14+", zh: "14歲以上" },
    ageMin: 14,
    ageMax: 99,
    focus: { en: "Multi-media exploration and personal creative direction", zh: "多媒介探索與個人創作方向" },
    points: {
      en: ["Sketching, acrylic and mixed media", "From idea to finished work", "Guidance matched to level"],
      zh: ["素描、塑膠彩及混合媒介", "主題構思至完成作品", "按程度個別指導"],
    },
    media: { en: "Sketching, acrylic and mixed media", zh: "素描、塑膠彩、混合媒介" },
    hrefSlug: "/course/kids-art/visual-art-class",
    tags: ["mixed", "painting", "drawing"],
    image: IMG.visualArt,
    imageAlt: { en: "ICAcademy Visual Art Class student work", zh: "ICAcademy綜合美術課程學生作品" },
  },
  {
    id: "paint-square",
    name: { en: "Paint Square adult painting", zh: "成人繪畫課程 Paint Square" },
    age: { en: "All levels", zh: "所有程度" },
    ageMin: 16,
    ageMax: 99,
    focus: { en: "Choose subject and medium by interest", zh: "按喜好選擇題材與媒介" },
    points: {
      en: ["Western painting, watercolour, sketching", "Comics, illustration and fashion drawing", "Beginners welcome · max 6"],
      zh: ["西洋畫、水彩、素描", "漫畫、插畫及時裝設計", "初學者亦可，最多6人"],
    },
    media: { en: "Mixed painting media", zh: "多元繪畫媒介" },
    hrefSlug: "/course/drawing-and-painting/adult-art-class-hong-kong",
    tags: ["painting", "mixed"],
    image: IMG.paintSquare,
    imageAlt: { en: "ICAcademy adult painting class student work", zh: "ICAcademy成人繪畫課程學員作品" },
  },
];

const GUIDE = [
  {
    title: { en: "Sketching", zh: "素描" },
    desc: { en: "Line, shape, proportion, light and observation", zh: "線條、形狀、比例、光影與觀察" },
    hrefSlug: "/course/drawing-and-painting/sketching-class",
    cta: { en: "View Sketching Class", zh: "查看素描技巧班" },
  },
  {
    title: { en: "Acrylic", zh: "塑膠彩" },
    desc: { en: "Colour, composition, brushwork and acrylic technique", zh: "色彩、構圖、筆觸與塑膠彩技法" },
    hrefSlug: "/course/drawing-and-painting/acrylic-painting-class",
    cta: { en: "View Acrylic Painting Class", zh: "查看塑膠彩課程" },
  },
  {
    title: { en: "Visual Art Skills", zh: "視藝技巧" },
    desc: { en: "A structured visual-art foundation (about ages 3–7)", zh: "系統建立視藝基礎（適合約 3–7 歲）" },
    hrefSlug: "/course/kids-art/visual-art-skills-course",
    cta: { en: "View Visual Art Skills", zh: "查看視藝技巧課程" },
  },
  {
    title: { en: "Visual Art Class", zh: "綜合美術" },
    desc: { en: "Explore media and a personal creative direction (ages 14+)", zh: "探索多種媒介與個人創作方向（14歲以上）" },
    hrefSlug: "/course/kids-art/visual-art-class",
    cta: { en: "View Visual Art Class", zh: "查看綜合美術課程" },
  },
  {
    title: { en: "Adult painting", zh: "成人繪畫" },
    desc: {
      en: "Western painting, watercolour, sketching, comics or illustration (all levels)",
      zh: "按喜好學習西洋畫、水彩、素描、漫畫或插畫（所有程度）",
    },
    hrefSlug: "/course/drawing-and-painting/adult-art-class-hong-kong",
    cta: { en: "View adult painting", zh: "查看成人繪畫課程" },
  },
];

const PATH = [
  { step: "1", title: { en: "Observation", zh: "觀察" }, desc: { en: "Practise seeing shape, outline and detail", zh: "練習觀察物件形狀、輪廓與細節" } },
  { step: "2", title: { en: "Line and shape", zh: "線條與形狀" }, desc: { en: "Use line to summarise form and build shape sense", zh: "以線條概括造型，建立基本形狀感" } },
  { step: "3", title: { en: "Proportion and structure", zh: "比例與結構" }, desc: { en: "Understand proportion, perspective and picture structure", zh: "理解比例、透視與畫面結構" } },
  { step: "4", title: { en: "Light and form", zh: "光影與立體感" }, desc: { en: "Use light and shade for volume and texture", zh: "運用光暗表現立體與質感" } },
  { step: "5", title: { en: "Colour", zh: "色彩" }, desc: { en: "Learn colour relationships, mixing and mood", zh: "認識色彩關係、調色與畫面氛圍" } },
  { step: "6", title: { en: "Media and technique", zh: "媒介與繪畫技巧" }, desc: { en: "Practise brushwork, layers and expression by medium", zh: "按媒介練習筆觸、層次與表現方法" } },
  { step: "7", title: { en: "Personal work", zh: "個人創作" }, desc: { en: "Combine skills and develop a personal direction", zh: "整合技巧，發展個人創作方向" } },
];

const BEGINNER_POINTS = [
  { goal: { en: "Want a solid foundation", zh: "想打穩基本功" }, course: { en: "Sketching Class", zh: "素描技巧班" }, hrefSlug: "/course/drawing-and-painting/sketching-class" },
  { goal: { en: "Want colour and painting", zh: "想學色彩及繪畫" }, course: { en: "Acrylic Painting Class", zh: "塑膠彩班" }, hrefSlug: "/course/drawing-and-painting/acrylic-painting-class" },
  { goal: { en: "Want a visual-art foundation for young children", zh: "想系統建立視藝基礎（幼兒／兒童）" }, course: { en: "Visual Art Skills", zh: "視藝技巧" }, hrefSlug: "/course/kids-art/visual-art-skills-course" },
  { goal: { en: "Want to try different media", zh: "想接觸不同媒介" }, course: { en: "Visual Art Class", zh: "綜合美術" }, hrefSlug: "/course/kids-art/visual-art-class" },
  { goal: { en: "Want adult painting by interest", zh: "想按自己喜好學成人繪畫" }, course: { en: "Paint Square", zh: "Paint Square" }, hrefSlug: "/course/drawing-and-painting/adult-art-class-hong-kong" },
];

const SEO_TOPICS = [
  {
    title: { en: "What do you learn in sketching?", zh: "素描學緊咩？" },
    body: {
      en: "Sketching Class focuses on observation, proportion, form and light. Students practise pencil control, underdrawing, composition and space, and material rendering — a foundation for later painting. The course suits ages 9+ who want structured sketching.",
      zh: "素描技巧班著重觀察、比例、造型與光暗關係。學員會練習鉛筆控制、起稿、構圖與空間，以及材質表現，為後續繪畫建立紮實基礎。課程適合 9 歲以上、希望系統學習素描的學員。",
    },
  },
  {
    title: { en: "How is sketching different from painting?", zh: "素描同繪畫有咩分別？" },
    body: {
      en: "Sketching emphasises line, form, proportion and light, often with dry media such as pencil. Painting / acrylic emphasises colour, brushwork, mixing and picture-making. They complement each other: sketching helps you understand form before colour and media.",
      zh: "素描較著重線條、造型、比例與光暗，常用鉛筆等乾媒材。繪畫／塑膠彩則較著重色彩、筆觸、調色與畫面表達。兩者可以互相配合：有素描基礎有助理解造型，再進入色彩與媒介學習。",
    },
  },
  {
    title: { en: "Must beginners start with sketching?", zh: "初學者一定要先學素描？" },
    body: {
      en: "Sketching helps observation and form, but not everyone must start there. If your goal is colour and acrylic, look at Acrylic Painting Class. Young children can begin with Visual Art Skills. For several media, look at Visual Art Class. Choose by age, interest and goal.",
      zh: "素描對建立觀察與造型能力很有幫助，但並非每位學員都必須由素描開始。若目標是色彩與塑膠彩，可了解塑膠彩班；幼兒或低小學員則可從視藝技巧建立基礎；想探索多種媒介則可了解綜合美術。可按年齡、興趣與目標選擇起點。",
    },
  },
  {
    title: { en: "How do I choose a drawing class?", zh: "點樣選擇適合自己的畫班？" },
    body: {
      en: "Start with your goal (foundation, colour, early-years basics, or mixed media), whether the age range fits, and the medium you prefer. This page compares courses and directions. If you are still unsure, WhatsApp us or book an HK$100 trial.",
      zh: "可先想清楚學習目標（基本功、色彩、幼兒基礎或多媒介探索）、年齡是否符合課程要求，以及偏好的媒介。本頁提供課程比較與方向指引。若仍未確定，歡迎 WhatsApp 查詢，或先預約 HK$100 試堂體驗。",
    },
  },
];

const WHY = [
  { en: "Practise observation and turn what you see into accurate form and proportion", zh: "練習觀察，把所見轉化為準確的造型與比例" },
  { en: "Build drawing fundamentals: line, shape and light", zh: "建立線條、形狀、光暗等繪畫基本功" },
  { en: "Learn sketching, acrylic or mixed media by interest", zh: "按興趣學習素描、塑膠彩或混合媒介" },
  { en: "Finish work with personal ideas under teacher guidance", zh: "在導師指導下完成具個人想法的作品" },
  { en: "Grow creative confidence step by step", zh: "按程度逐步建立創作信心與表達能力" },
];

const FAQ = [
  {
    q: { en: "Should beginners learn sketching or painting first?", zh: "初學畫畫應該學素描定繪畫？" },
    a: {
      en: "It depends on age and goal. For observation and form, look at Sketching Class (ages 9+). For colour and acrylic, look at Acrylic Painting Class (ages 14+). Young children can start with Visual Art Skills (ages 3–7). The two can work together, but you do not have to start with sketching.",
      zh: "視乎年齡與目標。想打穩觀察與造型基礎，可了解 9 歲以上的素描技巧班；想學色彩與塑膠彩，可了解 14 歲以上的塑膠彩班；幼兒或低小學員可從 3–7 歲的視藝技巧開始。兩者可以配合，但並非必須由素描開始。",
    },
  },
  {
    q: { en: "What does Sketching Class cover?", zh: "素描班主要學咩？" },
    a: {
      en: "Sketching Class focuses on observation, proportion, light and texture — including pencil control, underdrawing, composition and space, and material rendering. It suits ages 9+ and uses pencil sketching as the main medium.",
      zh: "素描技巧班著重觀察、比例、光暗與質感。內容包括鉛筆控制與起稿、構圖與空間，以及光暗及材質表現。課程適合 9 歲以上，使用鉛筆素描為主要媒介。",
    },
  },
  {
    q: { en: "How is Acrylic Painting Class different from general painting?", zh: "塑膠彩班同一般繪畫有咩分別？" },
    a: {
      en: "Acrylic Painting Class uses acrylic as the main medium, with colour mixing, brushwork, composition and complete pictures. It suits ages 14+ and is more focused on acrylic technique than mixed-media painting courses.",
      zh: "塑膠彩班使用塑膠彩為主要媒介，著重調色、筆觸與構圖技巧，以及完整畫面表達。課程適合 14 歲以上，較一般混合媒介繪畫課程更聚焦於塑膠彩技法與色彩運用。",
    },
  },
  {
    q: { en: "Can I join with no drawing experience?", zh: "完全冇畫畫經驗可以參加嗎？" },
    a: {
      en: "Yes. Teaching is matched to level. Please check the age range first (Visual Art Skills 3–7, sketching 9+, acrylic and Visual Art Class 14+). WhatsApp us, or book an HK$100 trial to find a suitable level.",
      zh: "可以。各課程會按學員程度提供指導。請先確認年齡是否符合課程要求（例如視藝技巧 3–7 歲、素描 9 歲以上、塑膠彩及綜合美術 14 歲以上）。歡迎 WhatsApp 查詢，或先預約 HK$100 試堂了解合適程度。",
    },
  },
  {
    q: { en: "How do I choose the right painting course?", zh: "點樣選擇適合自己的繪畫課程？" },
    a: {
      en: "Browse by goal (foundation, colour, early-years basics or mixed media), age and preferred medium. Use the direction cards or comparison table above. If you are unsure, book a trial or WhatsApp us.",
      zh: "可先按學習目標（基本功、色彩、幼兒基礎或多媒介）、年齡及偏好媒介瀏覽本頁課程。可使用上方方向卡片或課程比較表對照。未確定時可先試堂，或 WhatsApp 查詢由課程顧問協助了解。",
    },
  },
  {
    q: { en: "How is Visual Art Skills different from Visual Art Class?", zh: "視藝技巧同綜合美術有咩分別？" },
    a: {
      en: "Visual Art Skills (Preparatory / Foundation) is for ages 3–7 and builds observation, form and basic drawing with line, shape, colour and mixed media. Visual Art Class is for ages 14+ and focuses on exploring media and a personal creative direction, including sketching, acrylic and mixed media.",
      zh: "視藝技巧（預備／基礎）適合 3–7 歲，著重建立觀察、造型與基本繪畫能力，以線條、形狀、色彩及多元媒介入門。綜合美術課程適合 14 歲以上，著重多媒介探索與個人創作方向，包括素描、塑膠彩及混合媒介。",
    },
  },
  {
    q: { en: "Can I book a trial first?", zh: "可以先試堂嗎？" },
    a: {
      en: "Yes. Book an HK$100 trial. WhatsApp us with age, drawing experience and preferred times and we will match a class. The studio is in Ho Man Tin.",
      zh: "可以。歡迎先預約 HK$100 試堂。WhatsApp 告訴我們年齡、繪畫經驗和方便時間，我們會協助了解合適課程與班別。課室位於何文田。",
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
  max-width: 100%;
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

.path-grid {
  display: grid;
  gap: 14px;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
}
@media (min-width: 720px) {
  .path-grid { grid-template-columns: repeat(3, 1fr); }
}
@media (min-width: 980px) {
  .path-grid { grid-template-columns: repeat(4, 1fr); }
}
@media (min-width: 1180px) {
  .path-grid { grid-template-columns: repeat(7, 1fr); }
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

.info-list {
  max-width: 640px;
  margin: 0 auto;
  padding: 0;
  list-style: none;
}
.info-list li {
  padding: 16px 0;
  border-bottom: 1px solid var(--line);
  color: var(--muted);
}
.info-list li:last-child { border-bottom: 0; }
.info-list strong { color: var(--ink); font-weight: 800; }
.info-list a { color: var(--teal); font-weight: 800; text-decoration: none; }

.topic-grid {
  display: grid;
  gap: 20px;
}
@media (min-width: 720px) {
  .topic-grid { grid-template-columns: repeat(2, 1fr); }
}
.topic-card {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 24px 22px;
  box-shadow: var(--shadow);
}
.topic-card h3 { margin: 0 0 10px; font-size: 1.12rem; }
.topic-card p { margin: 0; color: var(--muted); font-size: 0.98rem; }

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

.sr-only {
  position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
  overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0;
}

@media (max-width: 640px) {
  .hero .wrap { padding: 40px 0; }
  .btn-row { flex-direction: column; align-items: stretch; }
  .btn { width: 100%; }
  .card-actions { flex-direction: column; }
  .card-actions .btn { width: 100%; }
}
`;

class DrawingPaintingHub extends HTMLElement {
  static get observedAttributes() {
    return ["wa-url", "locale"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._filter = "all";
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
          if (h1 && /繪畫及素描/.test(h1.textContent || "")) this.render();
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
    const bleed = document.getElementById("drawing-painting-hub-page-bleed");
    if (bleed) bleed.remove();
  }

  attributeChangedCallback() {
    if (this.isConnected) this.render();
  }

  get waUrl() {
    return this.getAttribute("wa-url") || WA_DEFAULT;
  }

  get localeCode() {
    // Site primary = EN (no prefix). ZH uses /zh/... subdirectory.
    // Pathname is the source of truth — do not let locale="zh" or html lang
    // keep Chinese copy on English URLs such as /course/drawing-and-painting.
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

  _applyFilter(filter) {
    this._filter = filter;
    const buttons = this.shadowRoot.querySelectorAll(".age-tabs button");
    buttons.forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.dataset.filter === filter));
    });
    this.shadowRoot.querySelectorAll("[data-course-card]").forEach((card) => {
      const tags = (card.dataset.tags || "").split(",");
      const show = filter === "all" || tags.includes(filter);
      card.classList.toggle("is-dimmed", !show);
      card.setAttribute("aria-hidden", show ? "false" : "true");
    });
  }

  _onClick(event) {
    const target = event.target.closest("[data-action]");
    if (!target) return;
    const action = target.dataset.action;

    if (action === "scroll-selector") {
      event.preventDefault();
      const sec = this.shadowRoot.getElementById("secSelector");
      if (sec) sec.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

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
    const t = (en, zh) => (this.isEn ? en : zh);
    return COURSES.map((c) => {
      const name = this.pick(c.name);
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

  _guideHtml() {
    return GUIDE.map(
      (g) => `
      <article class="guide-card">
        <h3>${this.pick(g.title)}</h3>
        <p>${this.pick(g.desc)}</p>
        <a data-action="course" href="${this.path(g.hrefSlug)}">${this.pick(g.cta)} →</a>
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

  _compareDesktopHtml() {
    const t = (en, zh) => (this.isEn ? en : zh);
    const rows = COURSES.map(
      (c) => `
      <tr>
        <td>${this.pick(c.name)}</td>
        <td>${this.pick(c.focus)}</td>
        <td>${this.pick(c.age)}</td>
        <td>${this.pick(c.media)}</td>
        <td><a data-action="course" href="${this.path(c.hrefSlug)}">${t("View course", "查看課程")}</a></td>
      </tr>`
    ).join("");
    return `
      <table class="compare-table" aria-label="${t("Drawing and painting course comparison", "繪畫及素描課程比較")}">
        <thead>
          <tr>
            <th>${t("Course", "課程")}</th>
            <th>${t("Focus", "學習重點")}</th>
            <th>${t("Who it’s for", "適合對象")}</th>
            <th>${t("Main medium", "主要媒介")}</th>
            <th>${t("View course", "查看課程")}</th>
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
                <span class="compare-label">${t("Focus", "學習重點")}</span>
                <span class="compare-value">${this.pick(c.focus)}</span>
              </div>
              <div class="compare-row">
                <span class="compare-label">${t("Who it’s for", "適合對象")}</span>
                <span class="compare-value">${this.pick(c.age)}</span>
              </div>
              <div class="compare-row">
                <span class="compare-label">${t("Main medium", "主要媒介")}</span>
                <span class="compare-value">${this.pick(c.media)}</span>
              </div>
            </div>
            <a class="btn btn-coral" data-action="course" href="${this.path(c.hrefSlug)}">${t("View course", "查看課程")}</a>
          </article>`
        ).join("")}
      </div>`;
  }

  _beginnerHtml() {
    return BEGINNER_POINTS.map(
      (b) => `
      <li><strong>${this.pick(b.goal)}</strong> → <a data-action="course" href="${this.path(b.hrefSlug)}">${this.pick(b.course)}</a></li>`
    ).join("");
  }

  _topicsHtml() {
    return SEO_TOPICS.map(
      (item) => `
      <article class="topic-card">
        <h3>${this.pick(item.title)}</h3>
        <p>${this.pick(item.body)}</p>
      </article>`
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
    const id = "drawing-painting-hub-page-bleed";
    if (document.getElementById(id)) return;
    const style = document.createElement("style");
    style.id = id;
    style.textContent = `
      html, body {
        overflow-x: hidden !important;
      }
      drawing-painting-hub {
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
    const kidsListingUrl = this.path("/course/kids-art/kids-art-classes-homantin");
    const trialUrl = this.path("/homantin-children-art-trial");
    const galleryUrl = this.isEn
      ? "https://www.icacademy.com.hk/studentartwork"
      : "https://www.icacademy.com.hk/zh/studentartwork";
    const waPrefill = this._waPrefill(
      t(
        "Hi, I’d like to ask about drawing / painting courses / an HK$100 trial.",
        "你好，我想查詢繪畫／素描課程／HK$100試堂安排。"
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
                <span>${t("Drawing & Painting", "繪畫及素描")}</span>
              </nav>
              <p class="hero-eyebrow">${t("Ho Man Tin · Drawing & Painting", "何文田 • 繪畫及素描課程")}</p>
              <div class="hero-title-chip">
                <h1 id="hero-title">${t("Drawing & Painting Courses", "繪畫及素描課程")}</h1>
                <p class="hero-sub">${t("Choose a course by interest and learning direction", "按興趣及學習方向選擇適合課程")}</p>
              </div>
              <p class="hero-lead">
                ${t(
                  "ICAcademy offers drawing-related courses including sketching, acrylic, visual art skills and mixed-media visual art. Whether you want a sketching foundation, colour and acrylic, an early visual-art base for young children, or a personal direction across media, start with the course that fits — then book a trial.",
                  "ICAcademy 提供素描、塑膠彩、視藝技巧及綜合美術等繪畫相關課程。無論想打穩素描基本功、學習色彩與塑膠彩、為幼兒建立視藝基礎，或探索多種媒介的個人創作方向，可按興趣先了解合適課程，再預約試堂。"
                )}
              </p>
              <div class="btn-row">
                <a class="btn btn-coral" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("HK$100 trial", "HK$100 試堂")}</a>
                <button type="button" class="btn btn-outline-teal" data-action="scroll-selector">${t("Choose a drawing course", "選擇適合我的繪畫課程")}</button>
              </div>
            </div>
          </div>
        </section>

        <section class="section" id="secSelector" aria-labelledby="selector-title">
          <div class="wrap">
            <h2 class="section-title" id="selector-title">${t("Which drawing skill do you want to learn?", "你想學邊一種繪畫技巧？")}</h2>
            <p class="section-lead">${t("Start with a direction, then compare course details. These cards match existing course pages — we do not invent classes.", "先按方向了解，再對照課程詳情。以下對應現有課程頁，不會虛構班別。")}</p>
            <div class="card-grid cols-4">
              ${this._guideHtml()}
            </div>
          </div>
        </section>

        <section class="section section-soft" id="secCourses" aria-labelledby="courses-title">
          <div class="wrap">
            <h2 class="section-title" id="courses-title">${t("Drawing and painting courses", "繪畫及素描相關課程")}</h2>
            <p class="section-lead">${t("Ages and focus below are verified. Ask for current times, fees and places.", "以下年齡與重點已核實。上課時間、學費及名額請查詢最新安排。")}</p>
            <div class="age-tabs" role="group" aria-label="${t("Filter drawing courses by direction", "按方向篩選繪畫課程")}">
              <button type="button" data-action="filter" data-filter="all" aria-pressed="true">${t("All", "全部")}</button>
              <button type="button" data-action="filter" data-filter="sketch" aria-pressed="false">${t("Sketching", "素描")}</button>
              <button type="button" data-action="filter" data-filter="acrylic" aria-pressed="false">${t("Acrylic", "塑膠彩")}</button>
              <button type="button" data-action="filter" data-filter="visual-skills" aria-pressed="false">${t("Visual Art Skills", "視藝技巧")}</button>
              <button type="button" data-action="filter" data-filter="mixed" aria-pressed="false">${t("Visual Art Class", "綜合美術")}</button>
            </div>
            <div class="card-grid cols-2">
              ${this._courseCardsHtml()}
            </div>
          </div>
        </section>

        <section class="section" aria-labelledby="compare-title">
          <div class="wrap">
            <h2 class="section-title" id="compare-title">${t("Compare drawing and painting courses", "繪畫及素描課程比較")}</h2>
            <p class="section-lead">${t("Quickly compare focus, who it’s for and main medium.", "快速對照各課程重點、適合對象與主要媒介。")}</p>
            ${this._compareDesktopHtml()}
            ${this._compareMobileHtml()}
          </div>
        </section>

        <section class="section section-soft" aria-labelledby="path-title">
          <div class="wrap">
            <h2 class="section-title" id="path-title">${t("A drawing learning path (for reference)", "繪畫學習路徑（概念參考）")}</h2>
            <p class="section-lead">${t("This path is a concept only. Not every student needs to follow the same order.", "此路徑僅供概念參考，並非每位學員都必須依同一順序學習。")}</p>
            <div class="path-grid">
              ${this._pathHtml()}
            </div>
            <p class="path-note">${t("Learning is adjusted by age, level and interest. If you are unsure, try a class first.", "實際學習會按年齡、程度與興趣調整。未確定時可先試堂再決定。")}</p>
          </div>
        </section>

        <section class="section" aria-labelledby="beginner-title">
          <div class="wrap">
            <h2 class="section-title" id="beginner-title">${t("Where should beginners start?", "初學畫畫應該由邊度開始？")}</h2>
            <p class="section-lead">${t("Choose a starting point by goal, then read the course details.", "可按學習目標選擇起點，再了解課程詳情。")}</p>
            <ul class="info-list">
              ${this._beginnerHtml()}
            </ul>
          </div>
        </section>

        <section class="section section-soft" aria-labelledby="topics-title">
          <div class="wrap">
            <h2 class="section-title" id="topics-title">${t("About drawing and sketching", "認識繪畫與素描")}</h2>
            <p class="section-lead">${t("Common questions and learning directions to help you choose.", "了解常見問題與學習方向，協助選擇合適課程。")}</p>
            <div class="topic-grid">
              ${this._topicsHtml()}
            </div>
          </div>
        </section>

        <section class="section" aria-labelledby="why-title">
          <div class="wrap">
            <div class="detail">
              <div>
                <h2 id="why-title">${t("Why learn drawing and sketching?", "為什麼學習繪畫與素描？")}</h2>
                <p class="detail-meta">${t("Observation · Form · Colour · Making", "觀察・造型・色彩・創作")}</p>
                <p class="detail-lead">
                  ${t(
                    "Drawing and painting courses help students build observation, form and media skills. The focus is stepwise learning, then a creative direction matched to interest and level.",
                    "繪畫及素描課程幫助學員建立觀察力、造型能力與媒介技巧。重點在循序漸進的學習過程，按個人興趣與程度發展創作方向。"
                  )}
                </p>
                <ul class="check-list">
                  ${WHY.map((item) => `<li>${this.pick(item)}</li>`).join("")}
                </ul>
                <a class="btn btn-coral" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("WhatsApp us about a class", "WhatsApp 查詢選班")}</a>
              </div>
              <div class="detail-media">
                <img src="${IMG.detail}" alt="${t("ICAcademy drawing and painting class artwork", "ICAcademy繪畫及素描課堂作品")}" width="800" height="1000" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        <section class="section section-soft" aria-labelledby="gallery-title">
          <div class="wrap">
            <h2 class="section-title" id="gallery-title">${t("Student drawing work", "看看學員的繪畫作品")}</h2>
            <p class="section-lead">${t("Thumbnails from work already published on the site. See more on the student artwork page.", "以下為站內已刊出作品縮圖。想看更多，可前往學員作品頁。")}</p>
            <div class="gallery-grid">
              <figure><img src="${IMG.gallery1}" alt="${t("Ho Man Tin sketching class student work", "何文田素描課程學生作品")}" loading="lazy" /><figcaption>${t("Student work", "學員作品")}</figcaption></figure>
              <figure><img src="${IMG.gallery2}" alt="${t("ICAcademy acrylic painting student work", "ICAcademy塑膠彩課程學生作品")}" loading="lazy" /><figcaption>${t("Student work", "學員作品")}</figcaption></figure>
              <figure><img src="${IMG.gallery3}" alt="${t("ICAcademy drawing class student work", "ICAcademy繪畫課程學生作品")}" loading="lazy" /><figcaption>${t("Student work", "學員作品")}</figcaption></figure>
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
              <div class="trial-badge">${t("Try first, then decide", "先體驗，再決定")}</div>
              <h2 id="trial-title">${t("Not sure which course fits? Try a class first", "唔肯定邊個課程適合？先試堂再決定")}</h2>
              <p>
                ${t(
                  "WhatsApp us with age, drawing experience and preferred times. We will help match a level and class.",
                  "WhatsApp 告訴我們年齡、繪畫經驗及方便時間，我們會協助了解合適程度與班別。"
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
            <h2 class="section-title" id="faq-title">${t("Drawing and painting FAQ", "繪畫及素描常見問題")}</h2>
            <div class="faq-list">
              ${this._faqHtml()}
            </div>
          </div>
        </section>

        <section class="section" aria-labelledby="cross-title">
          <div class="wrap" style="text-align:center">
            <h2 class="section-title" id="cross-title">${t("Explore more art courses", "探索更多藝術課程")}</h2>
            <p class="section-lead">${t("Choosing for a child? Go to the Kids Art hub, or the Ho Man Tin kids art classes page.", "為小朋友選班？可前往兒童美術總覽，或進入何文田兒童畫班課程頁。")}</p>
            <div class="center-actions">
              <a class="btn btn-outline-teal" data-action="course" href="${kidsArtUrl}">${t("Kids Art (parent page)", "兒童美術（上層）")}</a>
              <a class="btn btn-coral" data-action="course" href="${kidsListingUrl}">${t("Ho Man Tin kids art classes", "何文田兒童畫班")}</a>
              <a class="btn btn-ghost" data-action="hub" href="${courseHubUrl}">${t("Back to courses", "返回課程總覽")}</a>
            </div>
          </div>
        </section>

        <section class="final" aria-labelledby="final-title">
          <h2 id="final-title">${t("Ask about drawing and painting courses", "立即查詢繪畫及素描課程")}</h2>
          <p>${t("Small-group teaching in Ho Man Tin. WhatsApp us about level, times and an HK$100 trial.", "何文田小班教學，歡迎 WhatsApp 查詢合適程度、上課時間及 HK$100 試堂安排。")}</p>
          <div class="btn-row">
            <a class="btn btn-coral" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("WhatsApp enquiry", "WhatsApp 查詢")}</a>
            <a class="btn btn-outline-white" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("Book HK$100 trial", "預約 HK$100 試堂")}</a>
          </div>
        </section>
      </div>
    `;

    this._applyFilter(this._filter || "all");
    this._applyFullBleedCss();
    this._observeHeight();
  }
}

customElements.define("drawing-painting-hub", DrawingPaintingHub);
