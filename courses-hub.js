/**
 * ICAcademy Courses Hub – Custom Element
 * Tag name: courses-hub
 * Version: 2026-08-12-v7 (silo link: 繪畫及素描 → /zh/courses/art-drawing)
 */
const WA_DEFAULT = "https://wa.me/85265808022";
const GALLERY_URL = "/zh/gallery";

/** Build a Wix Media Manager fill URL from a site media file id. */
function mediaUrl(id, w, h) {
  return `https://static.wixstatic.com/media/${id}/v1/fill/w_${w},h_${h},al_c,q_85,enc_auto/${id}`;
}

/**
 * Photos sourced from IC Academy site Media Manager
 * (already used on /zh course pages, home, gallery).
 */
const IMG = {
  hero: mediaUrl("b98cc9_2dc758ef8b0b487a8fc29f8f5e7e5622~mv2.jpeg", 1600, 1000),
  prep: mediaUrl("b98cc9_ad34c2bb0fca4f8186d9e43bb8e1909c~mv2.jpg", 800, 600),
  foundation: mediaUrl("b98cc9_c966f659ad4c45939096573490e41e6b~mv2.jpg", 800, 600),
  creativeI: mediaUrl("b98cc9_f16629f0d6414271822e19d767f44457~mv2.jpg", 800, 600),
  creativeII: mediaUrl("b98cc9_66611472f2134e0fa854d2914e4ae347~mv2.jpg", 800, 600),
  creativeIII: mediaUrl("b98cc9_2811c03afb09487fb93b5356133bd57b~mv2.jpg", 800, 600),
  comic: mediaUrl("b98cc9_37e0184c611f48fb96bae9a1fa37dc05~mv2.jpg", 800, 600),
  sketch: mediaUrl("b98cc9_7f99cc18f81e42f9a5551280f6425b55~mv2.jpg", 800, 600),
  clay: mediaUrl("b98cc9_33c4c822ff2e4e5e86a4dfd9ce7b7be7~mv2.jpeg", 800, 600),
  visualArt: mediaUrl("b98cc9_ebe4308b54a24d24b9be7d03605ac494~mv2.jpg", 800, 600),
  acrylic: mediaUrl("b98cc9_4207ae71d0a44db99d86eeadc8e54f33~mv2.jpeg", 800, 600),
  gallery1: mediaUrl("b98cc9_49cb0c61e7664eaca996580443195ec9~mv2.jpeg", 800, 800),
  gallery2: mediaUrl("4ea940_5867e3daf35f4f969495afa34a05f1a3~mv2.jpg", 800, 800),
  gallery3: mediaUrl("b98cc9_9605c850cf4b47daafd611bb1215e1fd~mv2.jpeg", 800, 800),
  gallery4: mediaUrl("b98cc9_8b62b24164484280941000b87ffdecc8~mv2.jpg", 800, 800),
  detail: mediaUrl("b98cc9_0d50c3e155ba4c4e92046d937a5c0c43~mv2.jpg", 800, 1000),
};

/** Verified course catalogue (names / ages / URLs audited 2026-08) */
const COURSES = [
  {
    id: "prep",
    name: "視藝技巧（預備課程）",
    age: "3–5歲",
    ageMin: 3,
    ageMax: 5,
    focus: "幼兒創意啟蒙與感官探索",
    points: ["線條、形狀與色彩入門", "小手肌與手眼協調", "課堂常規與獨立完成作品"],
    media: "蠟筆、水彩、剪貼、印畫",
    href: "/zh/courses/visual-art-skills-course",
    tags: ["foundation", "painting"],
    image: IMG.prep,
    imageAlt: "ICAcademy幼兒創意繪畫課堂作品",
  },
  {
    id: "foundation",
    name: "視藝技巧（基礎課程）",
    age: "5–7歲",
    ageMin: 5,
    ageMax: 7,
    focus: "建立觀察、造型與基本構圖能力",
    points: ["觀察與造型練習", "比例與畫面組織", "多元媒介創作"],
    media: "繪畫及混合媒介",
    href: "/zh/courses/visual-art-skills-course",
    tags: ["foundation", "painting"],
    image: IMG.foundation,
    imageAlt: "ICAcademy視藝技巧基礎課程學生作品",
  },
  {
    id: "creative-i",
    name: "兒童創意美術 Level I",
    age: "7–9歲",
    ageMin: 7,
    ageMax: 9,
    focus: "鞏固繪畫基礎，建立創作信心",
    points: ["線條、色彩、基本構圖", "主題觀察與想像", "簡單多媒介創作"],
    media: "繪畫、拼貼、多元物料",
    href: "/zh/courses/creative-art-classes",
    tags: ["creative", "painting"],
    image: IMG.creativeI,
    imageAlt: "ICAcademy兒童創意美術作品",
  },
  {
    id: "creative-ii",
    name: "兒童創意美術 Level II",
    age: "9–11歲",
    ageMin: 9,
    ageMax: 11,
    focus: "加強比例、空間與畫面完整度",
    points: ["比例與構圖進階", "色彩配搭", "個人想法融入主題"],
    media: "繪畫及多元媒介",
    href: "/zh/courses/creative-art-classes",
    tags: ["creative", "painting"],
    image: IMG.creativeII,
    imageAlt: "ICAcademy小學創意繪畫作品",
  },
  {
    id: "creative-iii",
    name: "兒童創意美術 Level III",
    age: "11–14歲",
    ageMin: 11,
    ageMax: 14,
    focus: "深化技巧與個人風格",
    points: ["畫面層次與造型", "主題研究", "為進階美術建立基礎"],
    media: "多媒介創作",
    href: "/zh/courses/creative-art-classes",
    tags: ["creative", "painting", "teen"],
    image: IMG.creativeIII,
    imageAlt: "ICAcademy青少年創意美術作品",
  },
  {
    id: "comic",
    name: "卡通漫畫班",
    age: "8歲以上",
    ageMin: 8,
    ageMax: 99,
    focus: "人物比例、表情與原創角色設計",
    points: ["漫畫人物比例與五官", "角色造型與故事背景", "畫面構圖表達"],
    media: "鉛筆、馬克筆、漫畫媒材",
    href: "/zh/courses/comic-drawing-class",
    tags: ["comic"],
    image: IMG.comic,
    imageAlt: "ICAcademy學生漫畫角色設計作品",
  },
  {
    id: "sketch",
    name: "素描技巧班",
    age: "9歲以上",
    ageMin: 9,
    ageMax: 99,
    focus: "觀察、比例、光暗與質感",
    points: ["鉛筆控制與起稿", "構圖與空間", "光暗及材質表現"],
    media: "鉛筆素描",
    href: "/zh/courses/sketching-class",
    tags: ["sketch", "teen"],
    image: IMG.sketch,
    imageAlt: "何文田兒童素描課程學生作品",
  },
  {
    id: "clay",
    name: "輕黏土課程",
    age: "3–16歲",
    ageMin: 3,
    ageMax: 16,
    focus: "立體塑形、結構與色彩美感",
    points: ["基礎塑形與混色", "分齡主題創作", "完成立體作品帶回家"],
    media: "輕黏土及專業黏土媒材",
    href: "/zh/courses/creative-art-and-clay-class",
    tags: ["clay"],
    image: IMG.clay,
    imageAlt: "ICAcademy兒童黏土立體創作作品",
  },
  {
    id: "visual-art",
    name: "綜合美術課程",
    age: "14歲以上",
    ageMin: 14,
    ageMax: 99,
    focus: "多媒介探索與個人創作方向",
    points: ["素描、塑膠彩及混合媒介", "主題構思至完成作品", "按程度個別指導"],
    media: "素描、塑膠彩、混合媒介",
    href: "/zh/courses/visual-art-class",
    tags: ["teen", "painting", "portfolio"],
    image: IMG.visualArt,
    imageAlt: "ICAcademy青少年綜合美術作品",
  },
  {
    id: "acrylic",
    name: "塑膠彩班",
    age: "14歲以上",
    ageMin: 14,
    ageMax: 99,
    focus: "調色、筆觸與構圖技巧",
    points: ["塑膠彩基礎運用", "色彩與筆觸練習", "完整畫面表達"],
    media: "塑膠彩",
    href: "/zh/courses/acrylic-painting-class",
    tags: ["teen", "painting"],
    image: IMG.acrylic,
    imageAlt: "ICAcademy塑膠彩課程學生作品",
  },
];

const INTERESTS = [
  {
    id: "kids",
    title: "兒童畫班",
    desc: "兒童美術選班指南 · 創意／漫畫／黏土",
    href: "/zh/course/kids-art",
  },
  {
    id: "drawing-painting",
    title: "繪畫及素描",
    desc: "素描、塑膠彩、視藝技巧及綜合美術",
    href: "/zh/courses/art-drawing",
  },
  {
    id: "clay",
    title: "黏土與立體創作",
    desc: "塑形、結構與空間感",
    href: "/zh/courses/creative-art-and-clay-class",
  },
  {
    id: "comic",
    title: "卡通漫畫班",
    desc: "人物、表情與角色設計",
    href: "/zh/courses/comic-drawing-class",
  },
];

const FAQ = [
  {
    q: "小朋友沒有學過畫畫，可以參加嗎？",
    a: "可以。不同課程適合不同年齡及程度；初學者可由基礎技巧開始。報名前亦可先提供小朋友的年齡和經驗作查詢。",
  },
  {
    q: "應該怎樣選擇課程？",
    a: "可按小朋友的年齡、現有經驗及興趣方向選擇。未確定的家長可透過 WhatsApp 查詢，我們會協助了解較合適的方向。",
  },
  {
    q: "每班有多少人？",
    a: "大多數課程以小班形式進行，讓導師可以觀察每位學員，提供較充足的個別指導。實際人數請向課程顧問查詢。",
  },
  {
    q: "可以先預約試堂嗎？",
    a: "歡迎先透過 WhatsApp 查詢試堂安排。告訴我們小朋友年齡、繪畫經驗和方便時間，我們會協助了解合適班別。",
  },
  {
    q: "在哪裏上課？",
    a: "IC Academy 位於九龍窩打老道79F地下3號鋪（何文田），鄰近培正中學及小學。",
  },
];

const APPROACH = [
  "按年齡及程度分班，因應能力調整指導方式",
  "由觀察、線條、形狀、色彩和構圖建立藝術基礎",
  "鼓勵個人表達，把觀察與想法放進作品",
  "探索多元媒介，累積更豐富的藝術經驗",
  "小班教學，方便導師個別觀察與跟進",
  "位於何文田，方便培正一帶家長",
];

const STYLES = `
:host {
  display: block;
  width: 100%;
  max-width: none;
  min-height: 3200px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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
  overflow-x: clip;
}
*, *::before, *::after { box-sizing: border-box; }
a { color: inherit; }
img { max-width: 100%; display: block; }
.hub {
  width: 100%;
  max-width: none;
  margin: 0;
  padding: 0;
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
.trial .btn { min-width: min(100%, 360px); margin: 0 auto; display: inline-flex; }

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
  }

  connectedCallback() {
    this.render();
    this.shadowRoot.addEventListener("click", this._onClick);
    this.shadowRoot.addEventListener("keydown", this._onKeydown);
  }

  disconnectedCallback() {
    this.shadowRoot.removeEventListener("click", this._onClick);
    this.shadowRoot.removeEventListener("keydown", this._onKeydown);
  }

  attributeChangedCallback() {
    if (this.isConnected) this.render();
  }

  get waUrl() {
    return this.getAttribute("wa-url") || WA_DEFAULT;
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

    if (action === "course") {
      this._emitCta("course", target.getAttribute("href"));
    }
  }

  _onKeydown(event) {
    if (event.key !== "Enter" && event.key !== " ") return;
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
          <img src="${c.image}" alt="${c.imageAlt}" loading="lazy" decoding="async" width="640" height="400" />
        </div>
        <div class="card-body">
          <span class="meta">${c.age}</span>
          <h3>${c.name}</h3>
          <p style="margin:0;color:var(--muted)">${c.focus}</p>
          <ul class="points">
            ${c.points.map((p) => `<li>${p}</li>`).join("")}
          </ul>
          <div class="card-actions">
            <a class="btn btn-ghost" data-action="course" href="${c.href}">查看課程</a>
          </div>
        </div>
      </article>`
    ).join("");
  }

  _interestHtml() {
    return INTERESTS.map(
      (i) => `
      <a class="interest-card" data-action="course" href="${i.href}">
        <h3>${i.title}</h3>
        <p>${i.desc}</p>
      </a>`
    ).join("");
  }

  _compareDesktopHtml() {
    const rows = COURSES.map(
      (c) => `
      <tr>
        <td>${c.name}</td>
        <td>${c.age}</td>
        <td>${c.focus}</td>
        <td>${c.media}</td>
        <td><a data-action="course" href="${c.href}">查看詳情</a></td>
      </tr>`
    ).join("");
    return `
      <table class="compare-table" aria-label="藝術課程比較">
        <thead>
          <tr>
            <th>課程</th>
            <th>適合年齡</th>
            <th>學習重點</th>
            <th>媒介或技巧</th>
            <th>詳情</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>`;
  }

  _compareMobileHtml() {
    return `
      <div class="compare-cards">
        ${COURSES.map(
          (c) => `
          <article class="compare-card">
            <h3>${c.name}</h3>
            <div class="compare-rows">
              <div class="compare-row">
                <span class="compare-label">適合年齡</span>
                <span class="compare-value">${c.age}</span>
              </div>
              <div class="compare-row">
                <span class="compare-label">學習重點</span>
                <span class="compare-value">${c.focus}</span>
              </div>
              <div class="compare-row">
                <span class="compare-label">媒介或技巧</span>
                <span class="compare-value">${c.media}</span>
              </div>
            </div>
            <a class="btn btn-coral" data-action="course" href="${c.href}">查看詳情</a>
          </article>`
        ).join("")}
      </div>`;
  }

  _faqHtml() {
    return FAQ.map(
      (item) => `
      <div class="faq-item">
        <p class="faq-q">Q : ${item.q}</p>
        <p class="faq-a">${item.a}</p>
      </div>`
    ).join("");
  }

  render() {
    const wa = this.waUrl;
    const waPrefill = `${wa}?text=${encodeURIComponent(
      "你好，我想查詢ICAcademy恆常藝術課程／試堂安排。"
    )}`;

    this.shadowRoot.innerHTML = `
      <style>${STYLES}</style>
      <div class="hub">
        <section class="hero" aria-labelledby="hero-title" style="--hero-img:url('${IMG.hero}')">
          <div class="hero-bg" aria-hidden="true"></div>
          <div class="wrap">
            <div class="hero-copy">
              <p class="hero-eyebrow">何文田 • 培正附近 • 小班藝術教學</p>
              <div class="hero-title-chip">
                <h1 id="hero-title">何文田<span class="accent">兒童藝術</span>課程</h1>
                <p class="hero-sub">按年齡找到合適畫班</p>
              </div>
              <p class="hero-lead">
                ICAcademy 為不同成長階段的兒童及青少年提供藝術課程。由幼兒創意啟蒙、繪畫基礎、漫畫及素描，到青少年專業藝術訓練，導師會按學生年齡與能力提供適切指導。
              </p>
              <div class="btn-row">
                <a class="btn btn-coral" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">WhatsApp 查詢</a>
                <button type="button" class="btn btn-outline-teal" data-action="scroll-age">按年齡找課程</button>
              </div>
            </div>
          </div>
        </section>

        <section class="section" id="secAgeNav" aria-labelledby="age-title">
          <div class="wrap">
            <h2 class="section-title" id="age-title">小朋友現時屬於哪個學習階段？</h2>
            <p class="section-lead">先按年齡瀏覽恆常課程。點選篩選會突出相關卡片。</p>
            <div class="age-tabs" role="group" aria-label="按年齡篩選課程">
              <button type="button" data-action="filter" data-filter="all" aria-pressed="true">全部</button>
              <button type="button" data-action="filter" data-filter="age-3-7" aria-pressed="false">3–7歲</button>
              <button type="button" data-action="filter" data-filter="age-7-14" aria-pressed="false">7–14歲</button>
              <button type="button" data-action="filter" data-filter="age-8plus" aria-pressed="false">8歲以上</button>
              <button type="button" data-action="filter" data-filter="clay" aria-pressed="false">黏土</button>
              <button type="button" data-action="filter" data-filter="comic" aria-pressed="false">漫畫</button>
              <button type="button" data-action="filter" data-filter="sketch" aria-pressed="false">素描</button>
            </div>
            <div class="card-grid cols-2">
              ${this._courseCardsHtml()}
            </div>
          </div>
        </section>

        <section class="section section-soft" aria-labelledby="approach-title">
          <div class="wrap">
            <div class="detail">
              <div>
                <h2 id="approach-title">不只完成作品，更重視孩子的學習過程</h2>
                <p class="detail-meta">適合幼兒至青少年｜小班指導</p>
                <p class="detail-lead">
                  家長可以先按年齡及興趣方向了解合適課程，再透過 WhatsApp 查詢試堂與上課時間。
                </p>
                <ul class="check-list">
                  ${APPROACH.map((item) => `<li>${item}</li>`).join("")}
                </ul>
                <a class="btn btn-coral" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">查詢課程詳情</a>
              </div>
              <div class="detail-media">
                <img src="${IMG.detail}" alt="ICAcademy學生藝術作品示例" width="800" height="1000" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        <section class="section" aria-labelledby="compare-title">
          <div class="wrap">
            <h2 class="section-title" id="compare-title">快速比較藝術課程</h2>
            <p class="section-lead">以下只顯示網站已核實的課程重點。上課時間、學費及名額請查詢最新安排。</p>
            ${this._compareDesktopHtml()}
            ${this._compareMobileHtml()}
          </div>
        </section>

        <section class="section section-soft" aria-labelledby="gallery-title">
          <div class="wrap">
            <h2 class="section-title" id="gallery-title">看看不同年齡學生的創作</h2>
            <p class="section-lead">以下為站內已刊出作品縮圖。想看更多，可前往學員作品頁。</p>
            <div class="gallery-grid">
              <figure><img src="${IMG.gallery1}" alt="ICAcademy幼兒創意繪畫作品" loading="lazy" /><figcaption>學員作品</figcaption></figure>
              <figure><img src="${IMG.gallery2}" alt="ICAcademy學生漫畫角色設計作品" loading="lazy" /><figcaption>學員作品</figcaption></figure>
              <figure><img src="${IMG.gallery3}" alt="何文田兒童素描課程學生作品" loading="lazy" /><figcaption>學員作品</figcaption></figure>
              <figure><img src="${IMG.gallery4}" alt="ICAcademy課堂創作氣氛" loading="lazy" /><figcaption>課堂氣氛</figcaption></figure>
            </div>
            <div class="center-actions">
              <a class="btn btn-outline-teal" data-action="course" href="${GALLERY_URL}">查看更多學員作品</a>
            </div>
          </div>
        </section>

        <section class="section" aria-labelledby="trial-title">
          <div class="wrap">
            <div class="trial">
              <div class="trial-badge">先體驗，再決定</div>
              <h2 id="trial-title">恆常藝術課程試堂</h2>
              <p>
                讓孩子親身體驗課堂氣氛、教學方式及創作流程。WhatsApp 告訴我們孩子年齡、繪畫經驗及方便時間，我們會協助安排合適程度。
              </p>
              <p class="trial-price">單次試堂<strong>HK$100</strong></p>
              <a class="btn btn-teal" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">WhatsApp 預約試堂</a>
            </div>
          </div>
        </section>

        <section class="section" aria-labelledby="faq-title">
          <div class="wrap">
            <h2 class="section-title" id="faq-title">常見問題</h2>
            <div class="faq-list">
              ${this._faqHtml()}
            </div>
          </div>
        </section>

        <section class="section section-soft" aria-labelledby="interest-title">
          <div class="wrap">
            <h2 class="section-title" id="interest-title">探索更多課程</h2>
            <p class="section-lead">按方向進入對應課程頁，了解更多教學內容與適合程度。</p>
            <div class="card-grid cols-3">
              ${this._interestHtml()}
            </div>
          </div>
        </section>

        <section class="final" aria-labelledby="final-title">
          <h2 id="final-title">立即查詢藝術課程</h2>
          <p>小班教學，歡迎 WhatsApp 查詢合適程度、上課時間及試堂安排。</p>
          <div class="btn-row">
            <a class="btn btn-coral" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">WhatsApp 查詢</a>
            <a class="btn btn-outline-white" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">立即預約體驗</a>
          </div>
        </section>
      </div>
    `;

    this._applyFilter(this._filter || "all");
  }
}

customElements.define("courses-hub", CoursesHub);
