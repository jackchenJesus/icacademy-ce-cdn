/**
 * ICAcademy Short-term Courses Hub – Custom Element
 * Tag name: short-term-courses-hub
 * Version: 2026-11-05-v5 (Christmas visuals, Procreate image fix, regular course cards)
 * Routes: /short-term-course (EN) | /zh/short-term-course (ZH)
 * Sub-pages: /short-term-course/2026cnyworkshop, /short-term-course/2026-easter-workshop
 * Design system: matches courses-hub / trial-class-hub (coral / teal).
 * Locale via URL /zh, html lang, or attribute locale="en"|"zh" (default en = site primary).
 */
const WA_DEFAULT = "https://wa.me/85265808022";
// Enable each URL only after the corresponding Wix page exists and has been verified.
// PR #27 contains design previews, not published Wix pages.
const CHRISTMAS_PAGE_URL = { en: "", zh: "" };

/** Build a Wix Media Manager fill URL from a site media file id. */
function mediaUrl(id, w, h, q = 70) {
  return `https://static.wixstatic.com/media/${id}/v1/fill/w_${w},h_${h},al_c,q_${q},enc_auto/${id}`;
}

/** Photos sourced from IC Academy site Media Manager (already used on existing hubs). */
const IMG = {
  heroSm: mediaUrl("52f9c8_50823390808c4caa8e160c694fc87127~mv2.webp", 640, 400, 70),
  hero: mediaUrl("52f9c8_50823390808c4caa8e160c694fc87127~mv2.webp", 960, 600, 75),
  heroLg: mediaUrl("52f9c8_50823390808c4caa8e160c694fc87127~mv2.webp", 1280, 800, 75),
  cny: mediaUrl("4ea940_2d5010ecfb1f4a8399e4f3ceb790972a~mv2.jpeg", 640, 400, 70),
  easter: mediaUrl("d5ba93_321804e3e45d4cc8ae34b02b4a4872bd~mv2.jpg", 640, 400, 70),
  detail: mediaUrl("d5ba93_877f09bf5689458abf71f4826d75757e~mv2.webp", 640, 800, 70),
  gallery1: mediaUrl("d5ba93_ecb183209c8e40aaa71fb4d0a53bb2bc~mv2.webp", 480, 480, 70),
  gallery2: mediaUrl("d5ba93_7602a3ff44a44704b17b3de5eeea5ee2~mv2.webp", 480, 480, 70),
  gallery3: mediaUrl("d5ba93_8fb5945d369549a7b101fd279e72b803~mv2.webp", 480, 480, 70),
  gallery4: mediaUrl("d5ba93_6b8642c3db6945b59c18849170a01e4e~mv2.webp", 480, 480, 70),
};

(function preloadHeroLcp() {
  try {
    if (document.querySelector("link[data-short-term-hero-preload]")) return;
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = IMG.heroSm;
    link.setAttribute("fetchpriority", "high");
    link.setAttribute("imagesrcset", `${IMG.heroSm} 800w, ${IMG.hero} 1200w, ${IMG.heroLg} 1600w`);
    link.setAttribute("imagesizes", "100vw");
    link.setAttribute("data-short-term-hero-preload", "1");
    document.head.appendChild(link);
  } catch (e) {
    // ignore
  }
})();

/** Seasonal programme silos — links point to the live workshop pages on the site. */
const PROGRAMMES = [
  {
    id: "cny",
    badge: { en: "Chinese New Year period", zh: "農曆新年期間" },
    name: { en: "New Year Festival Courses", zh: "新年特別節日短期課程" },
    desc: {
      en: "Festive-themed short courses around Chinese New Year — create New Year paintings, decorations and festive crafts to take home and celebrate with.",
      zh: "農曆新年前後開辦的節日主題短期課程，創作賀年畫、新年裝飾及節日手作，完成作品帶回家應節。",
    },
    points: {
      en: ["Festive themes: New Year artwork and decorations", "Short format — finished in one to a few sessions", "Take home completed festival artwork"],
      zh: ["節日主題：賀年畫及新年裝飾", "短期形式 — 一至數堂完成", "完成節日作品帶回家"],
    },
    hrefSlug: "/short-term-course/2026cnyworkshop",
    image: IMG.cny,
    imageAlt: { en: "ICAcademy Chinese New Year workshop student Fook character painting", zh: "ICAcademy新年工作坊學生福字賀年畫" },
  },
  {
    id: "procreate",
    badge: { en: "10 lessons · 2 + 4 + 4", zh: "10 堂課程 · 2 + 4 + 4" },
    name: { en: "Procreate Visual Arts Assessment Intensive", zh: "Procreate 呈分試特訓課程" },
    desc: {
      en: "Build digital drawing skills, understand figure structure and create an original game character portfolio in this focused 10-lesson course.",
      zh: "針對視覺藝術科呈分試要求，結合數位繪圖技巧、人物結構與角色原創設計，幫助學生建立完整作品集。",
    },
    points: {
      en: ["Procreate and efficient iPad drawing", "Figure movement, structure and perspective", "Original character design and turnaround sheets"],
      zh: ["熟練運用 iPad 與 Procreate，提升繪畫效率與完成度", "以幾何骨架掌握肢體動作與透視", "設計原創角色、三視圖與動作延伸"],
    },
    hrefSlug: "/short-term-course/procreate-assessment-intensive",
    image: mediaUrl("52f9c8_5002ce822f574cb7b31a8c676ce6b868~mv2.jpg", 640, 400, 75),
    imageAlt: { en: "Procreate original character design and three-view drawing course", zh: "Procreate 原創角色設計及三視圖課程作品" },
  },
  {
    id: "easter",
    badge: { en: "Easter holidays", zh: "復活節假期" },
    name: { en: "Easter Workshop", zh: "復活節短期課程" },
    desc: {
      en: "Easter-themed short courses during the spring break — bunny crafts, clay creations and festive artwork to celebrate the season.",
      zh: "復活節假期期間開辦的主題短期課程，創作小兔手工、黏土擺設及春日節日作品，感受節日氣氛。",
    },
    points: {
      en: ["Easter themes: bunnies, eggs and spring crafts", "Short format — finished in one to a few sessions", "Take home completed festive artwork"],
      zh: ["復活節主題：小兔、復活蛋及春日手工", "短期形式 — 一至數堂完成", "完成節日作品帶回家"],
    },
    hrefSlug: "/short-term-course/2026-easter-workshop",
    image: IMG.easter,
    imageAlt: { en: "ICAcademy Easter workshop clay bunny and rainbow artwork", zh: "ICAcademy復活節工作坊黏土小兔彩虹作品" },
  },
];

const WHY_SHORT_TERM = [
  {
    en: "Try art before committing to a regular weekly class",
    zh: "報讀恆常班前，先以短期形式體驗藝術創作",
  },
  {
    en: "Make good use of school holidays and festival breaks",
    zh: "善用學校假期及節日空檔",
  },
  {
    en: "Consecutive sessions help skills stick and progress show",
    zh: "連續式課堂，技巧更易鞏固、進步更明顯",
  },
  {
    en: "Seasonal themes keep children motivated and excited",
    zh: "節日主題令小朋友更有動力投入創作",
  },
  {
    en: "Small groups — teachers observe and follow up individually",
    zh: "小班教學，導師能個別觀察與跟進",
  },
  {
    en: "Flexible scheduling — enquire and reserve places on WhatsApp",
    zh: "時間靈活，WhatsApp 查詢及預留名額",
  },
];

const STEPS = [
  {
    title: { en: "1. Pick a programme", zh: "1. 選擇課程系列" },
    desc: {
      en: "Choose a seasonal workshop below and check its latest availability.",
      zh: "在下方選擇節日工作坊，查詢最新名額。",
    },
  },
  {
    title: { en: "2. WhatsApp us", zh: "2. WhatsApp 查詢" },
    desc: {
      en: "Tell us your child’s age, experience and preferred dates — we will reply with the latest timetable, fees and places.",
      zh: "告訴我們小朋友年齡、經驗及心儀日期，我們會回覆最新時間表、收費及名額。",
    },
  },
  {
    title: { en: "3. Reserve and create", zh: "3. 留位並上課" },
    desc: {
      en: "Confirm your place, come on the day, and bring home finished artwork. All materials are provided.",
      zh: "確認名額後準時上課，完成作品可帶回家。所有材料由畫室提供。",
    },
  },
];

const FAQ = [
  {
    q: { en: "How are short-term courses different from regular classes?", zh: "短期課程同恆常班有甚麼分別？" },
    a: {
      en: "Short-term courses run during school holidays or festival periods with fewer, focused sessions on a theme. Regular classes run weekly through the term for ongoing, level-based training.",
      zh: "短期課程於學校假期或節日期間開辦，堂數較少、圍繞特定主題；恆常班則每週上課，按程度持續進修。",
    },
  },
  {
    q: { en: "What age can join?", zh: "幾多歲可以參加？" },
    a: {
      en: "Most short-term courses suit ages 3 and up, grouped by age. Some themed workshops have their own age requirements — please check with us on WhatsApp.",
      zh: "大部分短期課程適合3歲以上，按年齡分班。個別主題設有年齡要求，詳情歡迎 WhatsApp 查詢。",
    },
  },
  {
    q: { en: "Do we need to bring our own materials?", zh: "需要自備材料嗎？" },
    a: {
      en: "No. All class materials are provided by the studio, and finished artwork can be taken home.",
      zh: "不需要。課堂材料由畫室提供，完成的作品可帶回家。",
    },
  },
  {
    q: { en: "When does enrolment open?", zh: "幾時開始接受報名？" },
    a: {
      en: "Each festival series usually opens one to two months before the festival — New Year courses around December, Easter courses around February–March. Message us on WhatsApp to join the priority list and reserve a place early.",
      zh: "每個節日系列一般提前一至兩個月開始報名 — 新年課程約12月，復活節課程約2–3月。歡迎 WhatsApp 加入優先名單，提早留位。",
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

const EXPLORE = [
  {
    age: { en: "AGES 3–5", zh: "3–5 歲" },
    title: { en: "Early Childhood Creative Art", zh: "幼兒創意美術" },
    desc: { en: "A joyful first step into colour, drawing and making.", zh: "透過色彩、繪畫與手作，展開愉快的藝術初體驗。" },
    hrefSlug: "/course/kids-art/visual-art-skills",
    image: IMG.gallery1,
    imageAlt: { en: "Young children’s creative painting at IC Academy", zh: "IC Academy 幼兒創意繪畫作品" },
  },
  {
    age: { en: "AGES 6–12", zh: "6–12 歲" },
    title: { en: "Creative Art & Character Design", zh: "創意美術與角色設計" },
    desc: { en: "Explore drawing, comics, colour and original characters.", zh: "探索繪畫、漫畫、色彩與原創角色創作。" },
    hrefSlug: "/course/kids-art/creative-art-classes",
    image: IMG.gallery2,
    imageAlt: { en: "IC Academy student comic character design", zh: "IC Academy 學生漫畫角色設計作品" },
  },
  {
    age: { en: "SECONDARY +", zh: "中學及以上" },
    title: { en: "Teen Portfolio & Visual Arts", zh: "青少年作品集與視覺藝術" },
    desc: { en: "Build observation, technique and a confident art portfolio.", zh: "培養觀察力與繪畫技巧，逐步建立個人作品集。" },
    hrefSlug: "/course/kids-art/visual-art-class",
    image: IMG.gallery3,
    imageAlt: { en: "IC Academy student sketching and visual arts work", zh: "IC Academy 學生素描及視覺藝術作品" },
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

/* —— Hero (full-bleed) —— */
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
  object-position: 60% center;
}
.hero-bg::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(248,247,236,.96) 0%, rgba(248,247,236,.88) 38%, rgba(248,247,236,.48) 64%, rgba(18,54,40,.08) 100%);
}
.hero { background: #244638; }
.hero-eyebrow { color: #8b2731; }
.hero-title-chip { background: rgba(255,250,242,.9); border: 1px solid rgba(255,255,255,.65); box-shadow: 0 12px 36px rgba(35,49,35,.12); }
.hero::before, .hero::after { position: absolute; z-index: 1; pointer-events: none; }
.hero::before { content: "❄"; color: #fff; opacity: .82; font-size: 4rem; left: 5%; top: 9%; text-shadow: 0 2px 12px #3a5946; }
.hero::after { content: "⛄  🍭"; color: #fff; opacity: .94; font-size: clamp(2rem,4vw,3.5rem); right: 4%; bottom: 7%; text-shadow: 0 2px 12px #3a5946; }
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

/* Christmas feature */
.christmas-feature { background: #f7efe8; }
.christmas-panel { display: grid; grid-template-columns: minmax(0,1.1fr) minmax(280px,.9fr); align-items: stretch; gap: clamp(22px,4vw,48px); padding: clamp(22px,3.5vw,42px); border: 1px solid #e4d3c7; border-radius: 22px; background: #fffaf6; box-shadow: 0 14px 38px rgba(89,48,39,.08); }
.christmas-copy { align-self: center; }
.christmas-art { position: relative; min-height: 300px; overflow: hidden; border-radius: 18px; background: #e7e2d4; }
.christmas-art img { width: 100%; height: 100%; min-height: 300px; object-fit: cover; position: absolute; inset: 0; }
.christmas-art::after { content: "⛄  🍭  ❄"; position: absolute; right: 14px; bottom: 12px; padding: 7px 12px; border-radius: 999px; background: rgba(255,250,242,.92); font-size: 1.25rem; }
@media (max-width: 760px) { .christmas-panel { grid-template-columns: 1fr; } .christmas-art, .christmas-art img { min-height: 220px; } }
.christmas-label { color: #8b2731; font-weight: 800; letter-spacing: .06em; margin: 0 0 10px; }
.christmas-panel h2 { color: #243f32; font-size: clamp(1.6rem, 3vw, 2.3rem); }
.christmas-panel p { max-width: 65ch; }
.christmas-topics { display: flex; flex-wrap: wrap; gap: 8px; padding: 0; list-style: none; margin: 18px 0 24px; }
.christmas-topics li { background: #e6efe8; color: #243f32; padding: 5px 12px; border-radius: 999px; font-weight: 700; }
.btn-christmas { background: #8b2731; color: #fff; }
.btn-christmas:hover { background: #6d1c25; }
.christmas-outline { background: #fff; color: #28513d; border: 2px solid #28513d; }
.christmas-panel .btn:focus-visible { outline: 3px solid #243f32; outline-offset: 3px; }

/* —— Programme feature cards —— */
.programme-grid {
  display: grid;
  gap: 24px;
}
@media (min-width: 860px) {
  .programme-grid { grid-template-columns: repeat(2, 1fr); }
}
.programme-card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow);
  transition: transform .2s ease;
}
.programme-card:hover { transform: translateY(-3px); }
.programme-media { aspect-ratio: 16 / 10; background: #ececec; overflow: hidden; }
.programme-media img { width: 100%; height: 100%; object-fit: cover; }
.programme-body { padding: 24px 24px 26px; display: flex; flex-direction: column; gap: 10px; flex: 1; }
.programme-body h3 { font-size: 1.3rem; }
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
.programme-actions { margin-top: auto; padding-top: 10px; display: flex; flex-wrap: wrap; gap: 12px; }

/* —— Detail-style block (why short-term) —— */
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

/* —— Steps —— */
.steps-grid {
  display: grid;
  gap: 20px;
}
@media (min-width: 860px) {
  .steps-grid { grid-template-columns: repeat(3, 1fr); }
}
.step-card {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 26px 22px;
  box-shadow: var(--shadow);
}
.step-card h3 { margin: 0 0 8px; color: var(--teal-deep); }
.step-card p { margin: 0; color: var(--muted); font-size: 0.95rem; }

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

/* —— Explore cards —— */
.explore-grid { display: grid; gap: 20px; }
@media (min-width: 720px) { .explore-grid { grid-template-columns: repeat(2, minmax(0,1fr)); } }
@media (min-width: 1040px) { .explore-grid { grid-template-columns: repeat(3, minmax(0,1fr)); } }
.explore-card { background: #fff; border-radius: 18px; overflow: hidden; padding: 0; text-decoration: none; text-align: center; min-height: 100%; display: flex; flex-direction: column; justify-content: flex-start; gap: 8px; box-shadow: var(--shadow); transition: transform .15s ease; }
.explore-media { aspect-ratio: 16 / 10; width: 100%; overflow: hidden; background: #e7ece9; }
.explore-media img { width: 100%; height: 100%; object-fit: cover; transition: transform .35s ease; }
.explore-card:hover .explore-media img { transform: scale(1.04); }
.explore-copy { padding: 8px 22px 24px; display: flex; flex-direction: column; align-items: center; gap: 9px; }
.explore-age { color: var(--coral-deep); background: var(--coral-soft); border-radius: 999px; padding: 3px 10px; font-size: .78rem; font-weight: 800; letter-spacing: .04em; }
.explore-link { color: var(--teal-deep); font-weight: 800; margin-top: 2px; }
.explore-card:hover { transform: translateY(-3px); }
.explore-card h3 { margin: 0; font-size: 1.25rem; }
.explore-card p { margin: 0; color: var(--muted); font-size: 0.95rem; }

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
  :host { font-size: 14px; }
  h1, .hero-title-chip h1, .hero h1 { font-size: 1.5em !important; line-height: 1.35; }
  h2, .section-title, .final h2, .detail h2, .trial h2, .form-card h2, .info-card h2 { font-size: 1.32em !important; }
  h3, .faq-q, .card-body h3, .path-step h3, .method h3 { font-size: 1.06em !important; }
  .hero-sub { font-size: 1.1em !important; }
  p, li, .section-lead, .hero-lead, .faq-a, .card-body p, .path-step p, .final p, .detail-lead, .hero-points { font-size: 1em !important; }
  .hero-eyebrow, .kicker, .crumbs, .trust-item span { font-size: 0.92em !important; }
  .btn { font-size: 1em !important; }
  .hero .wrap { padding: 40px 0; }
  .btn-row { flex-direction: column; align-items: stretch; }
  .btn { width: 100%; }
  .programme-actions { flex-direction: column; }
}
`;

class ShortTermCoursesHub extends HTMLElement {
  static get observedAttributes() {
    return ["wa-url", "locale"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._onClick = this._onClick.bind(this);
    this._applyFullBleedCss = this._applyFullBleedCss.bind(this);
    this._restPainted = false;
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
    const bleed = document.getElementById("short-term-courses-hub-page-bleed");
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
    const id = "short-term-courses-hub-page-bleed";
    if (document.getElementById(id)) return;
    const style = document.createElement("style");
    style.id = id;
    style.textContent = `
      short-term-courses-hub {
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

  _onClick(event) {
    const target = event.target.closest("[data-action]");
    if (!target) return;
    const action = target.dataset.action;

    if (action === "scroll-programmes" || action === "scroll-christmas") {
      event.preventDefault();
      const sec = this.shadowRoot.getElementById(action === "scroll-christmas" ? "secChristmas" : "secProgrammes");
      if (sec) sec.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    if (action === "whatsapp") {
      this._emitCta("whatsapp", this.waUrl);
      return;
    }

    if (action === "programme" || action === "hub" || action === "christmas") {
      this._emitCta(action, target.getAttribute("href"));
    }
  }

  _programmeCardsHtml() {
    const t = (en, zh) => (this.isEn ? en : zh);
    return PROGRAMMES.map((p) => {
      const points = this.pick(p.points) || [];
      return `
      <article class="programme-card">
        <div class="programme-media">
          <img src="${p.image}" alt="${this.pick(p.imageAlt)}" loading="lazy" decoding="async" width="640" height="400" />
        </div>
        <div class="programme-body">
          <span class="meta">${this.pick(p.badge)}</span>
          <h3>${this.pick(p.name)}</h3>
          <p style="margin:0;color:var(--muted)">${this.pick(p.desc)}</p>
          <ul class="points">
            ${points.map((pt) => `<li>${pt}</li>`).join("")}
          </ul>
          <div class="programme-actions">
            <a class="btn btn-coral" data-action="programme" href="${this.path(p.hrefSlug)}">${t("View programme", "查看課程詳情")}</a>
            <a class="btn btn-outline-teal" data-action="whatsapp" href="${this._waPrefill(
              t(
                `Hi, I’d like to enquire about the ICAcademy ${p.name.en}.`,
                `你好，我想查詢ICAcademy${p.name.zh}。`
              )
            )}" target="_blank" rel="noopener noreferrer">${t("WhatsApp enquiry", "WhatsApp 查詢")}</a>
          </div>
        </div>
      </article>`;
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

  _exploreHtml() {
    return EXPLORE.map(
      (i) => `
      <a class="explore-card" data-action="hub" href="${this.path(i.hrefSlug)}">
        <div class="explore-media"><img src="${i.image}" alt="${this.pick(i.imageAlt)}" loading="lazy" decoding="async" width="640" height="400" /></div>
        <div class="explore-copy">
          <span class="explore-age">${this.pick(i.age)}</span>
          <h3>${this.pick(i.title)}</h3>
          <p>${this.pick(i.desc)}</p>
          <span class="explore-link">${this.isEn ? "Explore regular classes →" : "了解恆常班 →"}</span>
        </div>
      </a>`
    ).join("");
  }

  _paintHero() {
    const t = (en, zh) => (this.isEn ? en : zh);
    const waPrefill = this._waPrefill(
      t(
        "Hi, I’d like to enquire about ICAcademy short-term courses (summer / festival programmes).",
        "你好，我想查詢ICAcademy短期課程（暑期／節日課程）。"
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
              <p class="hero-eyebrow">${t("Christmas 2026 · Ho Man Tin · Small groups", "2026 聖誕 · 何文田 · 小班教學")}</p>
              <div class="hero-title-chip">
                <h1 id="hero-title">${t("Christmas Art Workshops", "聖誕藝術工作坊")} <span class="accent">2026</span></h1>
                <p class="hero-sub">${t("Festive ideas, made by little hands", "小小雙手，創作滿滿節日驚喜")}</p>
              </div>
              <p class="hero-lead">
                ${t(
                  "Make the holidays sparkle with eight Christmas art workshops in clay, crafts, painting, comics and digital art. Children create festive keepsakes in a warm, small-group studio.",
                  "以八款聖誕藝術工作坊點亮假期，體驗黏土、手作、繪畫、漫畫及電繪；小班創作，帶走親手完成的節日作品。"
                )}
              </p>
              <div class="btn-row">
                <button type="button" class="btn btn-christmas" data-action="scroll-christmas">${t("Explore Christmas Workshop 2026", "探索 2026 聖誕工作坊")}</button>
                <button type="button" class="btn btn-outline-teal" data-action="scroll-programmes">${t("View all programmes", "查看所有課程")}</button>
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
        "Hi, I’d like to enquire about ICAcademy short-term courses (summer / festival programmes).",
        "你好，我想查詢ICAcademy短期課程（暑期／節日課程）。"
      )
    );
    const galleryUrl = this.isEn
      ? "https://www.icacademy.com.hk/studentartwork"
      : "https://www.icacademy.com.hk/zh/studentartwork";

    hub.insertAdjacentHTML(
      "beforeend",
      `
        <section class="section christmas-feature" id="secChristmas" aria-labelledby="christmas-title">
          <div class="wrap"><div class="christmas-panel">
            <div class="christmas-copy">
              <p class="christmas-label">${t("FEATURED · CHRISTMAS 2026", "精選課程 · 2026 聖誕")}</p>
              <h2 id="christmas-title">${t("Christmas Art Workshops 2026", "2026 聖誕藝術工作坊")}</h2>
              <p>${t("Discover eight festive creative workshops for children at IC Academy in Ho Man Tin. Explore clay, crafts, glass painting, acrylics, comics and digital art in small groups, with materials included.", "在何文田 IC Academy 探索 8 款兒童聖誕創作工作坊，體驗黏土、手作、玻璃畫、塑膠彩、漫畫及電繪；小班教學，材料全包。")}</p>
              <ul class="christmas-topics" aria-label="${t("Workshop themes", "工作坊主題")}">
                <li>⛄ ${t("Snowman & crafts", "雪人及手作")}</li>
                <li>🍭 ${t("Candy-colour clay", "糖果色黏土")}</li>
                <li>🎨 ${t("Painting & digital art", "繪畫及電繪")}</li>
              </ul>
              <div class="btn-row">
                <a class="btn btn-christmas" data-action="whatsapp" href="${this._waPrefill(t("Hello, I would like to enquire about Christmas Workshop 2026.", "你好，我想查詢 2026 聖誕工作坊的課程及名額。"))}" target="_blank" rel="noopener noreferrer">${t("Enquire about Christmas on WhatsApp", "WhatsApp 查詢聖誕課程")}</a>
              </div>
            </div>
            <div class="christmas-art"><img src="${IMG.hero}" alt="${t("Christmas art scene with a handmade snowman, candy cane and painting brushes", "聖誕藝術場景：手作雪人、糖果杖與畫筆")}" loading="lazy" decoding="async" width="960" height="600" /></div>
          </div></div>
        </section>
        <section class="section" id="secProgrammes" aria-labelledby="programmes-title">
          <div class="wrap">
            <h2 class="section-title" id="programmes-title">${t("Short-term course series", "短期課程系列")}</h2>
            <p class="section-lead">
              ${t(
                "Featured festival workshops. Enrolment opens before each festival — message us to join the priority list.",
                "精選節日課程系列，開課前會公佈詳情。歡迎提早 WhatsApp 加入優先名單。"
              )}
            </p>
            <div class="programme-grid">
              ${this._programmeCardsHtml()}
            </div>
          </div>
        </section>
      `
    );
    this._paintRestMore(t, waPrefill, galleryUrl);
  }

  _paintRestMore(t, waPrefill, galleryUrl) {
    const hub = this.shadowRoot && this.shadowRoot.querySelector(".hub");
    if (!hub || hub.querySelector(".final")) return;
    hub.insertAdjacentHTML(
      "beforeend",
      `
        <section class="section section-soft" aria-labelledby="why-title">
          <div class="wrap">
            <div class="detail">
              <div>
                <h2 id="why-title">${t("Why choose a short-term course?", "點解選擇短期課程？")}</h2>
                <p class="detail-meta">${t("Holidays & festivals · Small-group teaching", "假期及節日開班｜小班指導")}</p>
                <p class="detail-lead">
                  ${t(
                    "Short-term courses fit around school breaks — a low-commitment way to experience ICAcademy teaching or deepen skills intensively.",
                    "短期課程遷就學校假期編排，無論想體驗 ICAcademy 教學，抑或集中加深技巧，都更具彈性。"
                  )}
                </p>
                <ul class="check-list">
                  ${WHY_SHORT_TERM.map((item) => `<li>${this.pick(item)}</li>`).join("")}
                </ul>
                <a class="btn btn-coral" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("Ask about short-term courses", "查詢短期課程")}</a>
              </div>
              <div class="detail-media">
                <img src="${IMG.detail}" alt="${t("ICAcademy student artwork example", "ICAcademy學生藝術作品示例")}" width="800" height="1000" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        <section class="section" aria-labelledby="steps-title">
          <div class="wrap">
            <h2 class="section-title" id="steps-title">${t("How to enrol", "報名方法")}</h2>
            <p class="section-lead">${t("Three simple steps — places are limited for each seasonal series.", "三個簡單步驟。每個季度系列名額有限。")}</p>
            <div class="steps-grid">
              ${STEPS.map(
                (s) => `
                <div class="step-card">
                  <h3>${this.pick(s.title)}</h3>
                  <p>${this.pick(s.desc)}</p>
                </div>`
              ).join("")}
            </div>
          </div>
        </section>

        <section class="section section-soft" aria-labelledby="gallery-title">
          <div class="wrap">
            <h2 class="section-title" id="gallery-title">${t("See artwork by our students", "看看學生的創作")}</h2>
            <p class="section-lead">${t("Thumbnails from published student work. Visit the gallery for more.", "以下為站內已刊出作品縮圖。想看更多，可前往學員作品頁。")}</p>
            <div class="gallery-grid">
              <figure><img src="${IMG.gallery1}" alt="${t("ICAcademy young children’s creative painting", "ICAcademy幼兒創意繪畫作品")}" loading="lazy" /><figcaption>${t("Student artwork", "學員作品")}</figcaption></figure>
              <figure><img src="${IMG.gallery2}" alt="${t("ICAcademy student comic character design", "ICAcademy學生漫畫角色設計作品")}" loading="lazy" /><figcaption>${t("Student artwork", "學員作品")}</figcaption></figure>
              <figure><img src="${IMG.gallery3}" alt="${t("Ho Man Tin children’s sketching class work", "何文田兒童素描課程學生作品")}" loading="lazy" /><figcaption>${t("Student artwork", "學員作品")}</figcaption></figure>
              <figure><img src="${IMG.gallery4}" alt="${t("ICAcademy classroom atmosphere", "ICAcademy課堂創作氣氛")}" loading="lazy" /><figcaption>${t("Class atmosphere", "課堂氣氛")}</figcaption></figure>
            </div>
            <div class="center-actions">
              <a class="btn btn-outline-teal" data-action="hub" href="${galleryUrl}">${t("View more student artwork", "查看更多學員作品")}</a>
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

        <section class="section section-soft" aria-labelledby="explore-title">
          <div class="wrap">
            <h2 class="section-title" id="explore-title">${t("Explore more", "探索更多")}</h2>
            <p class="section-lead">${t("Looking for weekly classes instead? Browse our regular course hub.", "想睇每週恆常班？可以到課程總覽。")}</p>
            <div class="explore-grid">
              ${this._exploreHtml()}
            </div>
          </div>
        </section>

        <section class="final" aria-labelledby="final-title">
          <h2 id="final-title">${t("Enquire about short-term courses", "立即查詢短期課程")}</h2>
          <p>${t("Seasonal places are limited. WhatsApp us for the latest timetable, fees and reservations.", "季節性名額有限，歡迎 WhatsApp 查詢最新時間表、收費及留位。")}</p>
          <div class="btn-row">
            <a class="btn btn-coral" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("WhatsApp enquiry", "WhatsApp 查詢")}</a>
            <a class="btn btn-outline-white" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("Join the priority list", "加入優先名單")}</a>
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

customElements.define("short-term-courses-hub", ShortTermCoursesHub);
