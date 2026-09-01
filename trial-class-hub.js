/**
 * ICAcademy Trial Class Landing – Custom Element
 * Tag name: trial-class-hub
 * Version: 2026-08-16-v9 (Drawing & Sketching silo → /course/drawing-and-painting; smaller mobile type)
 * Design system: matches kids-art-hub / courses-hub (coral / teal)
 * Routes: /homantin-children-art-trial (EN) | /zh/homantin-children-art-trial (ZH)
 *
 * Course catalogue reused from existing hub constants (no CMS in this repo).
 * Booking flow: WhatsApp enquiry (same as other hubs).
 * Locale via attribute: locale="en" | "zh" (default en = site primary).
 */
const WA_DEFAULT = "https://wa.me/85265808022";

function mediaUrl(id, w, h, align) {
  const al = align || "c";
  return `https://static.wixstatic.com/media/${id}/v1/fill/w_${w},h_${h},al_${al},q_85,enc_auto/${id}`;
}

const IMG = {
  hero: mediaUrl("b98cc9_37d03a2a33974076b01befe1d515bf0d~mv2.jpg", 1600, 1000),
  prep: mediaUrl("b98cc9_ad34c2bb0fca4f8186d9e43bb8e1909c~mv2.jpg", 800, 600),
  foundation: mediaUrl("b98cc9_c966f659ad4c45939096573490e41e6b~mv2.jpg", 800, 600),
  creativeI: mediaUrl("b98cc9_9c6e5138d1fa40a7815d12218f642440~mv2.jpg", 800, 600),
  creativeII: mediaUrl("b98cc9_1e80c89215f84798a65eaedc03352cd5~mv2.jpg", 800, 600),
  creativeIII: mediaUrl("b98cc9_f16629f0d6414271822e19d767f44457~mv2.jpg", 800, 600),
  comic: mediaUrl("b98cc9_a62d943a779d4ddb8e85227dc0872726~mv2.jpg", 800, 600),
  clay: mediaUrl("b98cc9_f417962750fd4399b1ee38c775da9a4e~mv2.jpeg", 800, 600),
  sketch: mediaUrl("b98cc9_e67c1877a803495fa45ccea725f0f7ce~mv2.jpg", 800, 600),
  visualArt: mediaUrl("b98cc9_2811c03afb09487fb93b5356133bd57b~mv2.jpg", 800, 600),
  acrylic: mediaUrl("b98cc9_4207ae71d0a44db99d86eeadc8e54f33~mv2.jpeg", 800, 600),
  gallery1: mediaUrl("b98cc9_169d3a5d148b4e7cb6c5dcdd66541734~mv2.jpeg", 800, 800),
  gallery2: mediaUrl("b98cc9_bcc7d1f85fd7431c933ad24f568c4a9b~mv2.jpg", 800, 800),
  gallery3: mediaUrl("b98cc9_f73677a0ad284e10b85772ce1fbecae5~mv2.jpg", 800, 800),
  gallery4: mediaUrl("b98cc9_5d9714fc876f42ba8b02b5b5d4b08923~mv2.jpg", 800, 800),
  experience: mediaUrl("b98cc9_9c6489b3ccfa47f0adc205c472aa87e7~mv2.jpg", 800, 1000),
};

/** Active programmes from Kids Art + Drawing hubs (audited catalogue). */
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
    media: {
      en: "Crayons, watercolour, collage, printmaking",
      zh: "蠟筆、水彩、剪貼、印畫",
    },
    hrefSlug: "/course/kids-art/visual-art-skills-course",
    category: "kids",
    tags: ["kids", "painting", "beginner", "age-3-5"],
    image: IMG.prep,
    imageAlt: {
      en: "ICAcademy young children’s creative painting class artwork",
      zh: "ICAcademy幼兒創意繪畫課堂作品",
    },
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
    media: { en: "Drawing and mixed media", zh: "繪畫及混合媒介" },
    hrefSlug: "/course/kids-art/visual-art-skills-course",
    category: "kids",
    tags: ["kids", "painting", "beginner", "age-5-7"],
    image: IMG.foundation,
    imageAlt: {
      en: "ICAcademy Visual Art Skills Foundation student artwork",
      zh: "ICAcademy視藝技巧基礎課程學生作品",
    },
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
    media: {
      en: "Drawing, collage and mixed materials",
      zh: "繪畫、拼貼、多元物料",
    },
    hrefSlug: "/course/kids-art/creative-art-classes",
    category: "kids",
    tags: ["kids", "painting", "beginner", "age-7-11"],
    image: IMG.creativeI,
    imageAlt: {
      en: "ICAcademy Creative Art student artwork",
      zh: "ICAcademy兒童創意美術作品",
    },
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
    media: { en: "Drawing and mixed media", zh: "繪畫及多元媒介" },
    hrefSlug: "/course/kids-art/creative-art-classes",
    category: "kids",
    tags: ["kids", "painting", "age-7-11"],
    image: IMG.creativeII,
    imageAlt: {
      en: "ICAcademy primary Creative Art painting",
      zh: "ICAcademy小學創意繪畫作品",
    },
  },
  {
    id: "creative-iii",
    name: { en: "Creative Art Level III", zh: "兒童創意美術 Level III" },
    age: { en: "Ages 11–14", zh: "11–14歲" },
    ageMin: 11,
    ageMax: 14,
    focus: {
      en: "Deepen technique and personal style",
      zh: "深化技巧與個人風格",
    },
    media: { en: "Multi-media creation", zh: "多媒介創作" },
    hrefSlug: "/course/kids-art/creative-art-classes",
    category: "kids",
    tags: ["kids", "painting", "age-11plus"],
    image: IMG.creativeIII,
    imageAlt: {
      en: "ICAcademy teen Creative Art artwork",
      zh: "ICAcademy青少年創意美術作品",
    },
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
    media: {
      en: "Pencil, markers and comic media",
      zh: "鉛筆、馬克筆、漫畫媒材",
    },
    hrefSlug: "/course/kids-art/comic-drawing-class",
    category: "comic",
    tags: ["comic", "drawing", "age-7-11", "age-11plus"],
    image: IMG.comic,
    imageAlt: {
      en: "ICAcademy student comic character design",
      zh: "ICAcademy學生漫畫角色設計作品",
    },
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
    media: {
      en: "Soft clay and professional clay media",
      zh: "輕黏土及專業黏土媒材",
    },
    hrefSlug: "/course/kids-art/creative-art-and-clay-class",
    category: "clay",
    tags: ["clay", "beginner", "age-3-5", "age-5-7", "age-7-11", "age-11plus"],
    image: IMG.clay,
    imageAlt: {
      en: "ICAcademy children’s soft clay 3D artwork",
      zh: "ICAcademy兒童黏土立體創作作品",
    },
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
    media: { en: "Pencil sketching", zh: "鉛筆素描" },
    hrefSlug: "/course/drawing-and-painting/sketching-class",
    category: "drawing",
    tags: ["drawing", "sketch", "age-7-11", "age-11plus"],
    image: IMG.sketch,
    imageAlt: {
      en: "Ho Man Tin children’s sketching class student work",
      zh: "何文田兒童素描課程學生作品",
    },
  },
  {
    id: "acrylic",
    name: { en: "Acrylic Painting Class", zh: "塑膠彩班" },
    age: { en: "Ages 14+", zh: "14歲以上" },
    ageMin: 14,
    ageMax: 99,
    focus: {
      en: "Colour mixing, brushwork and composition",
      zh: "調色、筆觸與構圖技巧",
    },
    media: { en: "Acrylic paint", zh: "塑膠彩" },
    hrefSlug: "/course/drawing-and-painting/acrylic-painting-class",
    category: "drawing",
    tags: ["painting", "drawing", "age-11plus"],
    image: IMG.acrylic,
    imageAlt: {
      en: "ICAcademy acrylic painting class student work",
      zh: "ICAcademy塑膠彩課程學生作品",
    },
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
    media: {
      en: "Sketching, acrylic and mixed media",
      zh: "素描、塑膠彩、混合媒介",
    },
    hrefSlug: "/course/kids-art/visual-art-class",
    category: "drawing",
    tags: ["painting", "drawing", "age-11plus"],
    image: IMG.visualArt,
    imageAlt: {
      en: "ICAcademy teen Visual Art Class artwork",
      zh: "ICAcademy青少年綜合美術作品",
    },
  },
];

const BENEFITS = [
  {
    title: { en: "HK$100 Trial", zh: "HK$100 試堂" },
    desc: { en: "Try first, then decide", zh: "先體驗再決定" },
  },
  {
    title: { en: "Age-based classes", zh: "按年齡選班" },
    desc: { en: "Toddlers to teens", zh: "幼兒至青少年" },
  },
  {
    title: { en: "Professional teachers", zh: "專業導師指導" },
    desc: { en: "Small-group teaching", zh: "小班教學" },
  },
  {
    title: { en: "Beginner-friendly", zh: "適合初學者" },
    desc: { en: "No experience needed", zh: "零基礎亦可" },
  },
  {
    title: { en: "Many art media", zh: "多種藝術媒介" },
    desc: { en: "Painting · Comics · Clay", zh: "繪畫・漫畫・黏土" },
  },
];

const STEPS = [
  {
    step: "1",
    title: { en: "Choose a course", zh: "選擇課程" },
    desc: {
      en: "Start from your child’s age and interests. If unsure, just ask us.",
      zh: "按小朋友年齡及興趣，先了解合適方向。未確定亦可直接查詢。",
    },
  },
  {
    step: "2",
    title: { en: "Book HK$100 trial", zh: "預約 HK$100 試堂" },
    desc: {
      en: "Tell us age, drawing experience and preferred times on WhatsApp so we can arrange a suitable class.",
      zh: "透過 WhatsApp 告訴我們年齡、繪畫經驗和方便時間，協助安排合適班別。",
    },
  },
  {
    step: "3",
    title: { en: "Visit and try", zh: "到校體驗" },
    desc: {
      en: "After the trial, decide whether to join a regular course. The choice is yours.",
      zh: "完成試堂後，再決定是否報讀恆常課程。決定權在家長。",
    },
  },
];

const EXPERIENCE = [
  {
    en: "Meet the teacher and feel the class atmosphere and pace",
    zh: "認識導師，感受課堂氣氛與節奏",
  },
  {
    en: "Complete a short age-appropriate creative exercise",
    zh: "完成一個適合年齡的短小創作練習",
  },
  {
    en: "Try basic techniques in painting or related media",
    zh: "接觸繪畫／相關媒介的基本技法",
  },
  {
    en: "Teacher observes your child’s interests and current ability",
    zh: "導師觀察小朋友的興趣與現有能力",
  },
  {
    en: "Brief chat with parents after class about suitable course options",
    zh: "試堂後可與家長簡短交流，了解較合適課程方向",
  },
];

const CONCERNS = [
  {
    q: {
      en: "My child has never learned drawing — is that OK?",
      zh: "小朋友完全未學過畫畫，可以嗎？",
    },
    a: {
      en: "Yes. Related courses welcome beginners. You can also book an HK$100 trial first so the teacher can observe and suggest a suitable level.",
      zh: "可以。相關課程均接受初學者；亦可先預約 HK$100 試堂，由導師觀察後再建議合適程度。",
    },
  },
  {
    q: {
      en: "I don’t know which class to choose.",
      zh: "不知道應該選哪一班？",
    },
    a: {
      en: "You don’t need to understand every course first. WhatsApp us with age, interests and preferred times — or try a trial class first, then decide.",
      zh: "不用先搞清楚全部課程。WhatsApp 告訴我們小朋友年齡、興趣與方便時間，課程顧問會協助了解方向；亦可先試堂再決定。",
    },
  },
  {
    q: {
      en: "Must we enrol after the trial?",
      zh: "試堂後一定要報名嗎？",
    },
    a: {
      en: "No. The trial is a two-way introduction — whether to continue is entirely up to parents. There is no pressure to enrol.",
      zh: "不必。試堂是雙向了解的機會——決定繼續與否由家長自行決定，不設強迫報名。",
    },
  },
  {
    q: {
      en: "Do we need to bring art materials?",
      zh: "要自己準備畫具嗎？",
    },
    a: {
      en: "Materials and tools for regular classes are usually provided by the studio (any special course requirements can be confirmed when booking).",
      zh: "一般課堂使用的畫材及工具由畫室提供，孩子無需自備（如有個別課程特別要求，預約時可再確認）。",
    },
  },
];

const FAQ = [
  {
    q: {
      en: "How much is an IC Academy trial class?",
      zh: "IC Academy 試堂幾錢？",
    },
    a: {
      en: "A single trial class is HK$100. You are welcome to enquire and book via WhatsApp first.",
      zh: "單次試堂為 HK$100。歡迎先透過 WhatsApp 查詢及預約。",
    },
  },
  {
    q: {
      en: "What does the HK$100 trial include?",
      zh: "HK$100 試堂包括甚麼？",
    },
    a: {
      en: "The trial lets your child experience the class atmosphere, meet the teacher, and complete a short age-appropriate creative exercise. Afterwards the teacher can briefly chat with parents to help suggest a suitable class.",
      zh: "試堂讓小朋友親身體驗課堂氣氛、認識導師，並完成適合年齡的短小創作。試堂後導師可與家長簡短交流，協助了解較合適班別。",
    },
  },
  {
    q: { en: "What ages can join?", zh: "幾多歲可以參加？" },
    a: {
      en: "Visual Art Skills Preparatory is suitable from about ages 3–5 for first art experiences; other courses have different age ranges by interest. WhatsApp us for the best fit.",
      zh: "視藝技巧預備課程適合約 3–5 歲開始接觸美術；其他課程按年齡及興趣設有不同適合範圍。實際安排可 WhatsApp 查詢。",
    },
  },
  {
    q: {
      en: "Can complete beginners join?",
      zh: "完全沒有畫畫經驗可以參加嗎？",
    },
    a: {
      en: "Yes. Beginners are welcome to try a trial class, or tell us age and experience on WhatsApp and we will help suggest a suitable direction.",
      zh: "可以。初學者歡迎先試堂或 WhatsApp 說明年齡與經驗，我們會協助了解較合適方向。",
    },
  },
  {
    q: {
      en: "Which art course should we choose?",
      zh: "應該選哪一個美術課程？",
    },
    a: {
      en: "Browse suggested courses on this page by age and interest (painting / comics / clay / sketching), or compare the Kids Art and Drawing & Sketching pages. If unsure, start with a trial or WhatsApp us.",
      zh: "可先按年齡、興趣（繪畫／漫畫／黏土／素描）瀏覽本頁建議課程，或前往兒童美術、繪畫及素描專頁比較。未確定時可先試堂或 WhatsApp 查詢。",
    },
  },
  {
    q: {
      en: "Do I need to book the trial in advance?",
      zh: "試堂需要預約嗎？",
    },
    a: {
      en: "Yes. Please book via WhatsApp and share your child’s age, drawing experience, and preferred times so we can arrange a suitable class.",
      zh: "需要。請透過 WhatsApp 預約，並提供小朋友年齡、繪畫經驗及方便時間，以便安排合適班別。",
    },
  },
  {
    q: {
      en: "How do we enrol in a regular course after the trial?",
      zh: "試堂後如何報讀恆常課程？",
    },
    a: {
      en: "If you decide to enrol after the trial, we help match a suitable class and schedule based on what we observed. Enrolment is always the parents’ choice.",
      zh: "試堂後如決定報讀，我們會按觀察協助配對合適班別與時間。是否報讀由家長自行決定。",
    },
  },
  {
    q: { en: "Where are classes held?", zh: "上課地點在哪裡？" },
    a: {
      en: "ICAcademy is in Ho Man Tin — Ground Floor Shop 3, 79F Waterloo Road, Kowloon (near Pui Ching Primary School).",
      zh: "ICAcademy 位於何文田，九龍窩打老道79F地下3號鋪（培正小學附近）。",
    },
  },
  {
    q: {
      en: "Do we need to bring art materials?",
      zh: "需要準備畫具嗎？",
    },
    a: {
      en: "Materials and tools for regular classes are usually provided by the studio. Any special arrangements can be confirmed when booking.",
      zh: "一般課堂畫材及工具由畫室提供。如有個別安排，預約時可再確認。",
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
  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;
}
:host([data-fullbleed="1"]) {
  /* Applied by JS when Editor wraps the element in a narrow card */
  margin: 0 !important;
  border-radius: 0 !important;
  box-shadow: none !important;
}
*, *::before, *::after { box-sizing: border-box; }
a { color: inherit; }
img { max-width: 100%; height: auto; display: block; }
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
.btn-link {
  background: transparent;
  color: var(--teal);
  border: 0;
  min-height: auto;
  padding: 0;
  font-weight: 800;
  text-decoration: none;
  border-radius: 0;
}
.btn-link:hover { transform: none; text-decoration: underline; }

.hero {
  position: relative;
  width: 100%;
  min-height: clamp(420px, 52vw, 560px);
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
.hero-copy { max-width: 38rem; text-align: left; }
.hero-eyebrow {
  margin: 0 0 14px;
  color: var(--teal);
  font-weight: 800;
  font-size: 1.02rem;
  letter-spacing: 0.02em;
}
.hero-price {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--coral);
  color: #fff;
  border-radius: 999px;
  padding: 8px 16px;
  font-weight: 800;
  font-size: 0.95rem;
  margin: 0 0 16px;
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
  font-size: clamp(1.55rem, 3.8vw, 2.35rem);
  line-height: 1.3;
  word-break: keep-all;
}
.hero-sub {
  margin: 10px 0 0;
  font-size: clamp(1.1rem, 2.6vw, 1.45rem);
  font-weight: 800;
  line-height: 1.35;
  color: var(--navy);
}
.hero-lead {
  margin: 0 0 24px;
  max-width: 38em;
  color: var(--muted);
  font-size: 1.02rem;
}
.hero-points {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 14px;
  margin: 0 0 24px;
  padding: 0;
  list-style: none;
  color: var(--muted);
  font-size: 0.95rem;
  font-weight: 600;
}
.hero-points li {
  position: relative;
  padding-left: 1.2rem;
}
.hero-points li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--teal);
  font-weight: 800;
}

.benefit-strip {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin-top: -28px;
  position: relative;
  z-index: 2;
}
@media (min-width: 480px) {
  .benefit-strip { grid-template-columns: repeat(2, 1fr); gap: 12px; }
}
@media (min-width: 900px) {
  .benefit-strip { grid-template-columns: repeat(5, 1fr); gap: 14px; }
}
.benefit {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 16px 14px;
  text-align: center;
  box-shadow: var(--shadow);
}
.benefit strong {
  display: block;
  font-size: 1rem;
  margin: 0 0 4px;
  color: var(--navy);
  word-break: keep-all;
}
.benefit span {
  display: block;
  color: var(--muted);
  font-size: 0.9rem;
}

.filter-tabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin: 0 0 14px;
}
.filter-label {
  width: 100%;
  text-align: center;
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--muted);
  margin: 8px 0 0;
}
.filter-tabs button {
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
.filter-tabs button[aria-pressed="true"] {
  background: var(--coral);
  border-color: var(--coral);
  color: #fff;
}

.card-grid { display: grid; gap: 20px; }
@media (min-width: 720px) {
  .card-grid.cols-2 { grid-template-columns: repeat(2, 1fr); }
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
.card.is-dimmed { opacity: 0.28; pointer-events: none; }
.card.is-hidden { display: none; }
.card-media { aspect-ratio: 16 / 10; background: #ececec; overflow: hidden; }
.card-media img { width: 100%; height: 100%; object-fit: cover; object-position: top center; }
.card-body { padding: 20px 20px 22px; display: flex; flex-direction: column; gap: 8px; flex: 1; }
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
.media-tag {
  margin: 0;
  color: var(--teal-deep);
  font-size: 0.9rem;
  font-weight: 700;
}
.card-actions { margin-top: auto; padding-top: 12px; display: flex; flex-wrap: wrap; gap: 10px; }
.trial-chip {
  display: inline-flex;
  align-self: flex-start;
  background: var(--teal-soft);
  color: var(--teal-deep);
  border-radius: 999px;
  padding: 4px 10px;
  font-size: 0.8rem;
  font-weight: 800;
}

.path {
  display: grid;
  gap: 14px;
}
@media (min-width: 860px) {
  .path { grid-template-columns: repeat(3, 1fr); gap: 16px; }
}
.path-step {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 26px 20px;
  text-align: center;
  box-shadow: var(--shadow);
}
.path-num {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 999px;
  background: var(--teal-soft);
  color: var(--teal-deep);
  font-weight: 800;
  margin-bottom: 12px;
}
.path-step h3 { margin: 0 0 8px; font-size: 1.1rem; }
.path-step p { margin: 0; color: var(--muted); font-size: 0.95rem; }

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

.concern-grid {
  display: grid;
  gap: 16px;
}
@media (min-width: 800px) {
  .concern-grid { grid-template-columns: repeat(2, 1fr); }
}
.concern {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 24px 22px;
  box-shadow: var(--shadow);
}
.concern h3 {
  margin: 0 0 10px;
  font-size: 1.08rem;
  color: var(--navy);
}
.concern p { margin: 0; color: var(--muted); }

.silo-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-top: 8px;
}
.silo-links a {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 10px 18px;
  border-radius: 999px;
  border: 1.5px solid var(--line);
  background: #fff;
  color: var(--teal-deep);
  font-weight: 800;
  text-decoration: none;
}

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
  margin: 0 auto 12px;
}
.final-price {
  display: block;
  margin: 0 auto 24px;
  font-size: 1.35rem;
  font-weight: 800;
  color: #fff;
}
.final .btn-row { justify-content: center; }

.sticky-cta {
  display: none !important;
  position: fixed;
  left: max(12px, env(safe-area-inset-left));
  right: max(12px, env(safe-area-inset-right));
  bottom: max(12px, env(safe-area-inset-bottom));
  z-index: 40;
  background: var(--coral);
  color: #fff;
  border-radius: 999px;
  min-height: 52px;
  padding: 12px 20px;
  font: inherit;
  font-size: 1rem;
  font-weight: 800;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 28px rgba(240, 90, 90, 0.35);
  -webkit-tap-highlight-color: transparent;
}

.sr-only {
  position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
  overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0;
}

@media (max-width: 860px) {
  .wrap { width: min(1200px, calc(100% - 32px)); }
  .section { padding: 48px 0; }
  .section-lead {
    margin-bottom: 28px;
    padding: 0 4px;
    font-size: 1rem;
    max-width: none;
  }
  .hero {
    min-height: 0;
    align-items: stretch;
  }
  .hero-bg { background-position: 70% center; }
  .hero-bg::after {
    background: linear-gradient(
      180deg,
      rgba(255,255,255,.96) 0%,
      rgba(255,255,255,.92) 58%,
      rgba(255,255,255,.78) 100%
    );
  }
  .benefit-strip { margin-top: -12px; }
  .crumbs { font-size: 0.88rem; }
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
  .hub { padding-bottom: calc(96px + env(safe-area-inset-bottom, 0px)); }
  .wrap { width: min(1200px, calc(100% - 24px)); }
  .section { padding: 36px 0; }
  .section-title {
    font-size: clamp(1.22rem, 5.2vw, 1.5rem);
    padding: 0 2px;
    word-break: keep-all;
    line-height: 1.35;
  }
  .section-lead {
    font-size: 0.98rem;
    line-height: 1.65;
    margin-bottom: 22px;
  }
  .hero .wrap { padding: 28px 0 32px; }
  .hero-eyebrow {
    font-size: 0.95rem;
    margin-bottom: 10px;
  }
  .hero-price {
    font-size: 0.92rem;
    padding: 8px 14px;
    margin-bottom: 12px;
  }
  .hero-title-chip {
    padding: 14px 14px 12px;
    border-radius: 16px;
    margin-bottom: 12px;
  }
  .hero-title-chip h1 {
    font-size: clamp(1.22rem, 5.6vw, 1.5rem);
    line-height: 1.35;
  }
  .hero-sub {
    font-size: clamp(0.95rem, 4.2vw, 1.12rem);
    margin-top: 8px;
  }
  .hero-lead {
    font-size: 1rem;
    line-height: 1.65;
    margin-bottom: 16px;
  }
  .hero-points {
    flex-direction: column;
    gap: 6px;
    margin-bottom: 18px;
    font-size: 0.95rem;
  }
  .btn-row { flex-direction: column; align-items: stretch; gap: 10px; }
  .btn {
    width: 100%;
    min-height: 50px;
    padding: 14px 18px;
    font-size: 1rem;
  }
  .filter-label {
    text-align: left;
    font-size: 0.92rem;
    margin: 14px 0 6px;
  }
  .filter-tabs {
    justify-content: flex-start;
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    gap: 8px;
    margin: 0 0 10px;
    padding: 2px 2px 10px;
    scrollbar-width: none;
  }
  .filter-tabs::-webkit-scrollbar { display: none; }
  .filter-tabs button {
    flex: 0 0 auto;
    min-height: 44px;
    padding: 10px 16px;
    font-size: 0.95rem;
  }
  .card-grid { gap: 16px; }
  .card-body { padding: 16px 16px 18px; gap: 8px; }
  .card-body h3 {
    font-size: 1.12rem;
    line-height: 1.35;
    word-break: keep-all;
  }
  .card-body p { font-size: 0.95rem; }
  .media-tag { font-size: 0.88rem; }
  .card-actions { flex-direction: column; gap: 8px; }
  .card-actions .btn { width: 100%; min-height: 48px; }
  .path-step { text-align: left; padding: 18px 16px; }
  .path-step h3 { font-size: 1.08rem; }
  .path-step p { font-size: 0.95rem; }
  .detail h2 {
    font-size: clamp(1.18rem, 5vw, 1.42rem);
    text-align: left;
  }
  .detail-lead { font-size: 0.98rem; }
  .check-list li { font-size: 0.98rem; padding-left: 1.55rem; }
  .detail-media {
    max-height: 320px;
    aspect-ratio: 4 / 5;
    border-radius: 18px;
  }
  .gallery-grid { gap: 10px; }
  .concern {
    padding: 18px 16px;
  }
  .concern h3 { font-size: 1.05rem; word-break: keep-all; }
  .concern p { font-size: 0.95rem; }
  .silo-links {
    flex-direction: column;
    align-items: stretch;
  }
  .silo-links a {
    justify-content: center;
    width: 100%;
    min-height: 48px;
  }
  .faq-q { font-size: 1.02rem; word-break: keep-all; }
  .faq-a { font-size: 0.96rem; line-height: 1.65; }
  .final { padding: 44px 16px; }
  .final h2 {
    font-size: clamp(1.22rem, 5.4vw, 1.5rem);
    word-break: keep-all;
  }
  .final p { font-size: 0.98rem; }
  .final-price { font-size: 1.25rem; margin-bottom: 20px; }
  .center-actions {
    flex-direction: column;
    align-items: stretch;
  }
  .center-actions .btn { width: 100%; }
  .sticky-cta.is-visible {
    display: flex !important;
  }
  .benefit {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    padding: 14px 16px;
  }
  .benefit strong { font-size: 1.02rem; }
  .benefit span { font-size: 0.92rem; }
}

@media (max-width: 380px) {
  .wrap { width: calc(100% - 16px); }
  .hero-title-chip h1 { font-size: 1.12rem; }
  .hero-sub { font-size: 0.95rem; }
  .btn { font-size: 0.95rem; padding: 12px 14px; }
  .filter-tabs button { padding: 9px 12px; font-size: 0.9rem; }
}
`;

class TrialClassHub extends HTMLElement {
  static get observedAttributes() {
    return ["wa-url", "locale"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._ageFilter = "all";
    this._typeFilter = "all";
    this._levelFilter = "all";
    this._onClick = this._onClick.bind(this);
    this._onScroll = this._onScroll.bind(this);
    this._syncLayout = this._syncLayout.bind(this);
    this._ro = null;
  }

  connectedCallback() {
    this.render();
    const syncLocale = () => {
      try {
        if (this.localeCode === "zh") {
          const h1 = this.shadowRoot && this.shadowRoot.querySelector("h1");
          if (h1 && /Art Trial Class/i.test(h1.textContent || "")) this.render();
        }
      } catch (e) {}
    };
    setTimeout(syncLocale, 0);
    setTimeout(syncLocale, 500);

    this.shadowRoot.addEventListener("click", this._onClick);
    window.addEventListener("resize", this._syncLayout);
    window.addEventListener("scroll", this._onScroll, { passive: true });
    window.addEventListener("orientationchange", this._syncLayout);
  }

  disconnectedCallback() {
    this.shadowRoot.removeEventListener("click", this._onClick);
    window.removeEventListener("resize", this._syncLayout);
    window.removeEventListener("scroll", this._onScroll);
    window.removeEventListener("orientationchange", this._syncLayout);
    if (this._ro) {
      this._ro.disconnect();
      this._ro = null;
    }
    const bleed = document.getElementById("trial-class-hub-page-bleed");
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
    return this.isEn ? obj.en : obj.zh;
  }

  /**
   * Escape narrow Wix Editor containers without sideways shift.
   * Uses margin-left: calc(50% - halfViewport) instead of left:-rect.left
   * (left-offset + ancestor overflow-x:clip was clipping the right edge).
   */
  _injectPageBleedCss() {
    const id = "trial-class-hub-page-bleed";
    if (document.getElementById(id)) return;
    const style = document.createElement("style");
    style.id = id;
    style.textContent = `
      html, body {
        overflow-x: hidden !important;
      }
      trial-class-hub {
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
      #SITE_FOOTER {
        margin-top: 0 !important;
        margin-left: 0 !important;
        margin-right: 0 !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
        padding-bottom: 0 !important;
        width: 100% !important;
        max-width: none !important;
        box-sizing: border-box !important;
      }
    `;
    document.head.appendChild(style);
  }

  _viewportWidth() {
    return document.documentElement.clientWidth || window.innerWidth || 0;
  }

  _forceFullBleed() {
    try {
      this._injectPageBleedCss();

      // Clear legacy left-based breakout that caused the sideways shift
      this.style.removeProperty("left");
      this.style.removeProperty("right");
      this.style.removeProperty("transform");

      const vw = this._viewportWidth();
      if (!vw) return;

      // Always use stable viewport-centered breakout (no cumulative left offset)
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

      // Soften wrappers: visible overflow (never clip) + full width
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

      const footer = document.getElementById("SITE_FOOTER");
      if (footer) {
        footer.style.setProperty("margin-top", "0", "important");
        footer.style.setProperty("margin-left", "0", "important");
        footer.style.setProperty("margin-right", "0", "important");
        footer.style.setProperty("padding-left", "0", "important");
        footer.style.setProperty("padding-right", "0", "important");
        footer.style.setProperty("padding-bottom", "0", "important");
        footer.style.setProperty("width", "100%", "important");
        footer.style.setProperty("max-width", "none", "important");
        footer.style.setProperty("box-sizing", "border-box", "important");
        footer.style.removeProperty("left");
        footer.style.removeProperty("right");
      }
    } catch (e) {
      // ignore
    }
  }

  _observeHeight() {
    const hub = this.shadowRoot && this.shadowRoot.querySelector(".hub");
    if (!hub) return;
    if (this._ro) this._ro.disconnect();
    this._ro = new ResizeObserver(this._syncLayout);
    this._ro.observe(hub);
    this._syncLayout();
    requestAnimationFrame(this._syncLayout);
    setTimeout(this._syncLayout, 300);
    setTimeout(this._syncLayout, 1200);
  }

  _syncLayout() {
    this._forceFullBleed();
    const hub = this.shadowRoot && this.shadowRoot.querySelector(".hub");
    if (!hub) return;
    const h = Math.ceil(hub.getBoundingClientRect().height);
    if (h > 0) {
      this.style.height = `${h}px`;
      this.style.minHeight = `${h}px`;
    }
  }

  _onScroll() {
    const sticky = this.shadowRoot && this.shadowRoot.querySelector(".sticky-cta");
    const hero = this.shadowRoot && this.shadowRoot.querySelector(".hero");
    const final = this.shadowRoot && this.shadowRoot.querySelector(".final");
    if (!sticky || !hero) return;
    const heroBottom = hero.getBoundingClientRect().bottom;
    const finalTop = final ? final.getBoundingClientRect().top : Infinity;
    const show = heroBottom < 40 && finalTop > window.innerHeight - 40;
    sticky.classList.toggle("is-visible", show);
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

  _matchesFilters(card) {
    const tags = (card.dataset.tags || "").split(",");
    const ageOk =
      this._ageFilter === "all" || tags.includes(this._ageFilter);
    const typeOk =
      this._typeFilter === "all" || tags.includes(this._typeFilter);
    const levelOk =
      this._levelFilter === "all" || tags.includes(this._levelFilter);
    return ageOk && typeOk && levelOk;
  }

  _applyFilters() {
    const ageButtons = this.shadowRoot.querySelectorAll("[data-filter-group='age'] button");
    ageButtons.forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.dataset.filter === this._ageFilter));
    });
    const typeButtons = this.shadowRoot.querySelectorAll("[data-filter-group='type'] button");
    typeButtons.forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.dataset.filter === this._typeFilter));
    });
    const levelButtons = this.shadowRoot.querySelectorAll("[data-filter-group='level'] button");
    levelButtons.forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.dataset.filter === this._levelFilter));
    });

    const cards = Array.from(this.shadowRoot.querySelectorAll("[data-course-card]"));
    let visible = 0;
    cards.forEach((card) => {
      const show = this._matchesFilters(card);
      card.classList.toggle("is-hidden", !show);
      card.classList.toggle("is-dimmed", false);
      card.setAttribute("aria-hidden", show ? "false" : "true");
      if (show) visible += 1;
    });

    // Soft-highlight: if many still visible after age/type, prefer beginner when chosen
    if (visible > 4 && this._levelFilter === "beginner") {
      // already filtered by beginner tag
    } else if (visible > 4) {
      // keep all matching; parents can refine
    }

    const empty = this.shadowRoot.querySelector("[data-empty]");
    if (empty) empty.hidden = visible !== 0;
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
      const group = target.dataset.filterGroup;
      const value = target.dataset.filter || "all";
      if (group === "age") this._ageFilter = value;
      if (group === "type") this._typeFilter = value;
      if (group === "level") this._levelFilter = value;
      this._applyFilters();
      this._syncLayout();
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
    return COURSES.map((c) => {
      const name = this.pick(c.name);
      const waText = this.isEn
        ? `Hi, I’d like to book an HK$100 trial for “${name}”. Child’s age: ____; drawing experience: ____; preferred times: ____.`
        : `你好，我想預約「${name}」的 HK$100 試堂。小朋友年齡：＿＿；繪畫經驗：＿＿；方便時間：＿＿。`;
      return `
      <article
        class="card"
        data-course-card
        data-tags="${c.tags.join(",")}"
        data-age-min="${c.ageMin}"
        data-age-max="${c.ageMax}"
        data-category="${c.category}"
      >
        <div class="card-media">
          <img src="${c.image}" alt="${this.pick(c.imageAlt)}" loading="lazy" decoding="async" width="640" height="400" />
        </div>
        <div class="card-body">
          <span class="meta">${this.pick(c.age)}</span>
          <span class="trial-chip">${this.isEn ? "HK$100 trial available" : "可預約 HK$100 試堂"}</span>
          <h3>${name}</h3>
          <p style="margin:0;color:var(--muted)">${this.pick(c.focus)}</p>
          <p class="media-tag">${this.pick(c.media)}</p>
          <div class="card-actions">
            <a class="btn btn-coral" data-action="whatsapp" href="${this._waPrefill(waText)}" target="_blank" rel="noopener noreferrer">${this.isEn ? "Book this trial" : "預約這個試堂"}</a>
            <a class="btn btn-ghost" data-action="course" href="${this.path(c.hrefSlug)}">${this.isEn ? "Learn more" : "了解課程"}</a>
          </div>
        </div>
      </article>`;
    }).join("");
  }

  _benefitsHtml() {
    return BENEFITS.map(
      (b) => `
      <div class="benefit">
        <strong>${this.pick(b.title)}</strong>
        <span>${this.pick(b.desc)}</span>
      </div>`
    ).join("");
  }

  _stepsHtml() {
    return STEPS.map(
      (s) => `
      <div class="path-step">
        <div class="path-num">${s.step}</div>
        <h3>${this.pick(s.title)}</h3>
        <p>${this.pick(s.desc)}</p>
      </div>`
    ).join("");
  }

  _concernsHtml() {
    return CONCERNS.map(
      (item) => `
      <article class="concern">
        <h3>${this.pick(item.q)}</h3>
        <p>${this.pick(item.a)}</p>
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

  render() {
    const t = (en, zh) => (this.isEn ? en : zh);
    const courseHubUrl = this.path("/course-hub");
    const kidsArtUrl = this.path("/course/kids-art");
    const drawingUrl = this.path("/course/drawing-and-painting");
    // Live gallery slug (EN); Multilingual ZH mirrors the same slug under /zh/
    const galleryUrl = this.isEn
      ? "https://www.icacademy.com.hk/studentartwork"
      : "https://www.icacademy.com.hk/zh/studentartwork";

    const waPrefill = this._waPrefill(
      t(
        "Hi, I’d like to book an HK$100 art trial class. Child’s age: ____; drawing experience: ____; preferred times: ____.",
        "你好，我想預約 HK$100 藝術試堂。小朋友年齡：＿＿；繪畫經驗：＿＿；方便時間：＿＿。"
      )
    );
    const waAsk = this._waPrefill(
      t(
        "Hi, I’d like to ask about a suitable art course / HK$100 trial for my child. Child’s age: ____; interests: ____.",
        "你好，我想查詢適合小朋友的藝術課程／HK$100 試堂安排。小朋友年齡：＿＿；興趣：＿＿。"
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
                <span>${t("Trial Class", "試堂")}</span>
              </nav>
              <p class="hero-eyebrow">${t("Ho Man Tin • Near Pui Ching • Art Trial", "何文田 • 培正附近 • 美術試堂")}</p>
              <div class="hero-price">${t("Single trial HK$100", "單次試堂 HK$100")}</div>
              <div class="hero-title-chip">
                <h1 id="hero-title">${t("HK$100 Art Trial Class", "HK$100 藝術試堂")}</h1>
                <p class="hero-sub">${t("Try a class first, then choose the best art course for your child", "先試堂，再選最適合小朋友的藝術課程")}</p>
              </div>
              <p class="hero-lead">
                ${t(
                  "Let your child experience the class atmosphere and teaching style first, then decide whether to join a regular course. You don’t need to understand every class — tell us age and interests and we’ll help arrange a suitable trial.",
                  "讓小朋友先體驗課堂氣氛與教學方式，再決定是否報讀恆常課程。家長無需先搞懂全部班別——告訴我們年齡與興趣，即可協助安排合適試堂。"
                )}
              </p>
              <ul class="hero-points">
                <li>${t("Beginner-friendly", "適合初學者")}</li>
                <li>${t("Choose by age / interest", "按年齡／興趣選班")}</li>
                <li>${t("Easy WhatsApp booking", "WhatsApp 輕鬆預約")}</li>
              </ul>
              <div class="btn-row">
                <a class="btn btn-coral" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("Book HK$100 Trial Class", "立即預約 HK$100 試堂")}</a>
                <button type="button" class="btn btn-outline-teal" data-action="scroll-courses">${t("See suitable courses", "查看適合課程")}</button>
              </div>
            </div>
          </div>
        </section>

        <section class="section" style="padding-top:0;padding-bottom:40px" aria-label="${t("Trial highlights", "試堂重點")}">
          <div class="wrap">
            <div class="benefit-strip">
              ${this._benefitsHtml()}
            </div>
          </div>
        </section>

        <section class="section section-soft" id="secCourses" aria-labelledby="guide-title">
          <div class="wrap">
            <h2 class="section-title" id="guide-title">${t("Not sure which class?", "唔知應該揀邊班？")}</h2>
            <p class="section-lead">
              ${t(
                "You don’t need to understand every course first. Filter by age, interest or beginner level to find about 2–4 relevant trial options.",
                "不用先理解全部課程。按年齡、興趣或是否初學快速篩選，找出約 2–4 個較相關的試堂方向。"
              )}
            </p>

            <p class="filter-label">${t("Age", "年齡")}</p>
            <div class="filter-tabs" role="group" aria-label="${t("Filter by age", "按年齡篩選")}" data-filter-group="age">
              <button type="button" data-action="filter" data-filter-group="age" data-filter="all" aria-pressed="true">${t("All", "全部")}</button>
              <button type="button" data-action="filter" data-filter-group="age" data-filter="age-3-5" aria-pressed="false">${t("Ages 3–5", "3–5歲")}</button>
              <button type="button" data-action="filter" data-filter-group="age" data-filter="age-5-7" aria-pressed="false">${t("Ages 5–7", "5–7歲")}</button>
              <button type="button" data-action="filter" data-filter-group="age" data-filter="age-7-11" aria-pressed="false">${t("Ages 7–11", "7–11歲")}</button>
              <button type="button" data-action="filter" data-filter-group="age" data-filter="age-11plus" aria-pressed="false">${t("Ages 11+", "11歲以上")}</button>
            </div>

            <p class="filter-label">${t("Interest / medium", "興趣／媒介")}</p>
            <div class="filter-tabs" role="group" aria-label="${t("Filter by interest", "按興趣篩選")}" data-filter-group="type">
              <button type="button" data-action="filter" data-filter-group="type" data-filter="all" aria-pressed="true">${t("All", "全部")}</button>
              <button type="button" data-action="filter" data-filter-group="type" data-filter="painting" aria-pressed="false">${t("Painting", "繪畫")}</button>
              <button type="button" data-action="filter" data-filter-group="type" data-filter="drawing" aria-pressed="false">${t("Drawing/Sketching", "素描／繪畫技巧")}</button>
              <button type="button" data-action="filter" data-filter-group="type" data-filter="comic" aria-pressed="false">${t("Comics", "漫畫")}</button>
              <button type="button" data-action="filter" data-filter-group="type" data-filter="clay" aria-pressed="false">${t("Clay", "黏土")}</button>
              <button type="button" data-action="filter" data-filter-group="type" data-filter="kids" aria-pressed="false">${t("Kids Art", "兒童美術")}</button>
            </div>

            <p class="filter-label">${t("Experience", "經驗")}</p>
            <div class="filter-tabs" role="group" aria-label="${t("Filter by experience", "按經驗篩選")}" data-filter-group="level">
              <button type="button" data-action="filter" data-filter-group="level" data-filter="all" aria-pressed="true">${t("Any level", "不限")}</button>
              <button type="button" data-action="filter" data-filter-group="level" data-filter="beginner" aria-pressed="false">${t("Beginner", "初學者")}</button>
            </div>

            <h3 class="sr-only">${t("Suggested trial courses", "建議試堂課程")}</h3>
            <div class="card-grid cols-2" style="margin-top:28px">
              ${this._courseCardsHtml()}
            </div>
            <p data-empty hidden class="section-lead" style="margin-top:24px">
              ${t("No exact match for this combination. Widen your filters, or ", "目前沒有完全符合的組合。可放寬篩選，或")}
              <a data-action="whatsapp" href="${waAsk}" target="_blank" rel="noopener noreferrer" style="color:var(--teal);font-weight:800">${t("WhatsApp us for a suitable course", "WhatsApp 查詢適合課程")}</a>.
            </p>

            <div class="silo-links" style="margin-top:28px">
              <a data-action="hub" href="${kidsArtUrl}">${t("Kids Art courses", "兒童美術課程總覽")}</a>
              <a data-action="hub" href="${drawingUrl}">${t("Drawing & Sketching", "繪畫及素描課程")}</a>
              <a data-action="hub" href="${courseHubUrl}">${t("All courses", "全部課程")}</a>
            </div>
          </div>
        </section>

        <section class="section" aria-labelledby="steps-title">
          <div class="wrap">
            <h2 class="section-title" id="steps-title">${t("How the trial works", "試堂流程")}</h2>
            <p class="section-lead">${t("Three simple, low-pressure steps to book.", "三步完成預約，過程簡單、低壓力。")}</p>
            <div class="path">
              ${this._stepsHtml()}
            </div>
          </div>
        </section>

        <section class="section section-soft" aria-labelledby="experience-title">
          <div class="wrap">
            <div class="detail">
              <div>
                <h2 id="experience-title">${t("What happens on the trial day?", "試堂當日會做甚麼？")}</h2>
                <p class="detail-lead">
                  ${t(
                    "The trial is not an exam — it’s a two-way introduction: your child feels the class, the teacher observes interest and level, and parents decide whether to enrol.",
                    "試堂不是評核考試，而是雙向了解：小朋友感受課堂，導師觀察興趣與程度，家長再決定是否報讀。"
                  )}
                </p>
                <ul class="check-list">
                  ${EXPERIENCE.map((item) => `<li>${this.pick(item)}</li>`).join("")}
                </ul>
                <a class="btn btn-coral" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("Book HK$100 Trial Class", "預約 HK$100 試堂")}</a>
              </div>
              <div class="detail-media">
                <img src="${IMG.experience}" alt="${t("ICAcademy art class artwork", "ICAcademy美術課堂作品")}" width="800" height="1000" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        <section class="section" aria-labelledby="gallery-title">
          <div class="wrap">
            <h2 class="section-title" id="gallery-title">${t("See student artwork", "看看學生的作品")}</h2>
            <p class="section-lead">${t("Real student work so parents can better understand the creative direction of our classes.", "真實學員作品，讓家長更放心了解課堂創作方向。")}</p>
            <div class="gallery-grid">
              <figure><img src="${IMG.gallery1}" alt="${t("ICAcademy young children’s creative painting", "ICAcademy幼兒創意繪畫作品")}" loading="lazy" /><figcaption>${t("Student work", "學員作品")}</figcaption></figure>
              <figure><img src="${IMG.gallery2}" alt="${t("ICAcademy student comic character design", "ICAcademy學生漫畫角色設計作品")}" loading="lazy" /><figcaption>${t("Student work", "學員作品")}</figcaption></figure>
              <figure><img src="${IMG.gallery3}" alt="${t("Ho Man Tin children’s sketching student work", "何文田兒童素描課程學生作品")}" loading="lazy" /><figcaption>${t("Student work", "學員作品")}</figcaption></figure>
              <figure><img src="${IMG.gallery4}" alt="${t("ICAcademy classroom creative atmosphere", "ICAcademy課堂創作氣氛")}" loading="lazy" /><figcaption>${t("Class atmosphere", "課堂氣氛")}</figcaption></figure>
            </div>
            <div class="center-actions">
              <a class="btn btn-outline-teal" data-action="course" href="${galleryUrl}">${t("See more student work", "查看更多學員作品")}</a>
              <a class="btn btn-coral" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("Book HK$100 Trial Class", "預約 HK$100 試堂")}</a>
            </div>
          </div>
        </section>

        <section class="section section-soft" aria-labelledby="concerns-title">
          <div class="wrap">
            <h2 class="section-title" id="concerns-title">${t("Common parent concerns", "家長常見顧慮")}</h2>
            <p class="section-lead">${t("Know the essentials, then book a trial with ease.", "先了解重點，再輕鬆預約試堂。")}</p>
            <div class="concern-grid">
              ${this._concernsHtml()}
            </div>
          </div>
        </section>

        <section class="section" aria-labelledby="faq-title">
          <div class="wrap">
            <h2 class="section-title" id="faq-title">${t("Art trial FAQ", "美術試堂常見問題")}</h2>
            <div class="faq-list">
              ${this._faqHtml()}
            </div>
          </div>
        </section>

        <section class="final" aria-labelledby="final-title">
          <h2 id="final-title">${t("Try one class first, then choose the best art course", "先試一堂，再決定最適合的藝術課程")}</h2>
          <p>${t("Tell us your child’s age and interests and we’ll help arrange a suitable HK$100 trial.", "告訴我們小朋友年齡與興趣，即可協助安排合適的 HK$100 試堂。")}</p>
          <span class="final-price">${t("HK$100 Trial", "HK$100 試堂")}</span>
          <div class="btn-row">
            <a class="btn btn-coral" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("Book trial now", "立即預約試堂")}</a>
            <a class="btn btn-outline-white" data-action="whatsapp" href="${waAsk}" target="_blank" rel="noopener noreferrer">${t("WhatsApp suitable courses", "WhatsApp 查詢適合課程")}</a>
          </div>
        </section>
      </div>

      <a class="sticky-cta" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("HK$100 Trial | Book now", "HK$100 試堂｜立即預約")}</a>
    `;

    this._applyFilters();
    this._observeHeight();
    this._onScroll();
  }
}

if (!customElements.get("trial-class-hub")) {
  customElements.define("trial-class-hub", TrialClassHub);
}
