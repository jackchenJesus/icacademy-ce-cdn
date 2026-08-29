/**
 * ICAcademy Visual Art Skills Course — course landing (not a hub)
 * Tag name: visual-art-skills-hub
 * Version: 2026-08-29-v2 (Kids Art child URL)
 *
 * Parent silo hub: Kids Art (yo1yl). Canonical under /course/kids-art.
 * Canonical:
 *   EN: /course/kids-art/visual-art-skills-course
 *   ZH: /zh/course/kids-art/visual-art-skills-course
 */
const WA_DEFAULT = "https://wa.me/85265808022";

function mediaUrl(id, w, h, q = 75) {
  return `https://static.wixstatic.com/media/${id}/v1/fill/w_${w},h_${h},al_c,q_${q},enc_auto/${id}`;
}

const IMG = {
  hero: mediaUrl("b98cc9_c966f659ad4c45939096573490e41e6b~mv2.jpg", 1600, 1000),
  gallery1: mediaUrl("b98cc9_c966f659ad4c45939096573490e41e6b~mv2.jpg", 800, 800),
  gallery2: mediaUrl("b98cc9_2811c03afb09487fb93b5356133bd57b~mv2.jpg", 800, 800),
  gallery3: mediaUrl("b98cc9_ebe4308b54a24d24b9be7d03605ac494~mv2.jpg", 800, 800),
  gallery4: mediaUrl("b98cc9_938e779278dc4be38ad8c06a48102fc1~mv2.jpg", 800, 800),
  detail: mediaUrl("b98cc9_c966f659ad4c45939096573490e41e6b~mv2.jpg", 800, 1000),
};

const WHY = [
  {
    title: { en: "Grouped by age", zh: "按年齡分班" },
    desc: {
      en: "Ages 3–5 start with art play. Ages 5–7 move on to observation, form and simple composition.",
      zh: "3–5歲由藝術啟蒙開始，5–7歲進一步學習觀察、造型與基本構圖。",
    },
  },
  {
    title: { en: "Build drawing foundations", zh: "建立繪畫基礎" },
    desc: {
      en: "Progress from line, shape and colour, then use different media to finish a complete piece.",
      zh: "從線條、形狀和色彩逐步進階，並運用不同媒介練習完整作品。",
    },
  },
  {
    title: { en: "Small-group guidance", zh: "小班個別指導" },
    desc: {
      en: "Maximum 4–6 children, so the teacher can match pace and ability.",
      zh: "每班最多4至6人，導師可按孩子的能力與進度提供適切指導。",
    },
  },
];

const LEARNING = [
  { en: "Placed in Preparatory or Foundation by age and ability", zh: "按年齡及能力安排預備或基礎課程" },
  { en: "Line, shape, colour and basic composition", zh: "認識線條、形狀、色彩與基本構圖" },
  { en: "Fine-motor and hand–eye skill through mixed materials", zh: "透過多元物料訓練小手肌及手眼協調" },
  { en: "Turn everyday observation into a picture", zh: "學習觀察生活事物並轉化成畫面" },
  { en: "Imagine freely and express ideas through artwork", zh: "鼓勵自由想像及用作品表達想法" },
  { en: "Small class, with guidance matched to each child", zh: "小班教學，導師按程度作個別引導" },
];

const STAGES = [
  {
    kicker: { en: "Stage 1", zh: "第一階段" },
    title: { en: "Visual Art Skills (Preparatory)", zh: "視藝技巧（預備課程）" },
    meta: { en: "Ages 3–5 · max 4 · 1 hour · Mon–Sat", zh: "3–5歲｜最多4人｜每堂1小時｜星期一至六" },
    points: [
      { en: "Start with line, shape, colour and sensory play", zh: "從線條、形狀、顏色及感官探索開始" },
      { en: "Build fine-motor skill with collage, printing and mixed materials", zh: "透過剪貼、印畫及不同物料訓練小手肌" },
      { en: "Learn class routines, focus and finishing a piece independently", zh: "學習課堂常規、專注及獨立完成作品" },
      { en: "For first-time art class or children building an interest", zh: "適合第一次參加畫班或正在建立興趣的幼兒" },
    ],
  },
  {
    kicker: { en: "Stage 2", zh: "第二階段" },
    title: { en: "Visual Art Skills (Foundation)", zh: "視藝技巧（基礎課程）" },
    meta: { en: "Ages 5–7 · max 6 · 1 hour · Mon–Sat", zh: "5–7歲｜最多6人｜每堂1小時｜星期一至六" },
    points: [
      { en: "Strengthen observation, form, proportion and basic composition", zh: "加強觀察、造型、比例及基本構圖" },
      { en: "Use line, colour and media more systematically", zh: "學習更有系統地運用線條、色彩與不同媒介" },
      { en: "Build picture-making, process and problem-solving", zh: "培養畫面表達、創作步驟及解難能力" },
      { en: "For children with some drawing experience who are ready to go further", zh: "適合已有簡單繪畫經驗或準備進一步學習的孩子" },
    ],
  },
];

const STEPS = [
  {
    step: "1",
    title: { en: "Theme exploration", zh: "主題探索" },
    desc: {
      en: "Stories, pictures and everyday observation spark interest.",
      zh: "透過故事、圖片和生活觀察，引起幼兒學習興趣",
    },
  },
  {
    step: "2",
    title: { en: "Skill demonstration", zh: "技巧示範" },
    desc: {
      en: "The teacher shows line, shape, colour and materials step by step.",
      zh: "導師分步示範線條、形狀、用色及物料運用",
    },
  },
  {
    step: "3",
    title: { en: "Independent making", zh: "自主創作" },
    desc: {
      en: "Children use what they learned and add their own ideas.",
      zh: "運用所學方法，加入自己的想法完成主題作品",
    },
  },
  {
    step: "4",
    title: { en: "Share and encourage", zh: "分享與鼓勵" },
    desc: {
      en: "Each child’s work is seen, building expression and confidence.",
      zh: "欣賞每位小朋友的作品，建立表達能力與自信",
    },
  },
];

const QUOTES = [
  {
    text: {
      en: "The teacher is patient and explains each child’s progress clearly. We look forward to growing here.",
      zh: "老師好有耐性講解小朋友既情況！期待繼續喺度成長！",
    },
    by: { en: "Parent", zh: "家長" },
  },
  {
    text: {
      en: "Friendly teachers, a clean studio, and a good range of courses.",
      zh: "老師友善，環境乾淨，課程多元化。",
    },
    by: { en: "Parent", zh: "家長" },
  },
  {
    text: {
      en: "Our son and daughter have taken art classes here for years. The teaching is excellent.",
      zh: "兒子及女兒已經在這間美術學校上堂多年，師資優良。",
    },
    by: { en: "Parent", zh: "家長" },
  },
];

const FAQ = [
  {
    q: { en: "What age is Visual Art Skills for?", zh: "視藝技巧課程適合幾歲的小朋友？" },
    a: {
      en: "Ages 3–7: Preparatory for 3–5, Foundation for 5–7.",
      zh: "課程適合3至7歲小朋友，分為3–5歲預備課程及5–7歲基礎課程。",
    },
  },
  {
    q: { en: "How is Preparatory different from Foundation?", zh: "預備課程和基礎課程有甚麼分別？" },
    a: {
      en: "Preparatory focuses on art play, sensory exploration, fine-motor skill, line and colour. Foundation adds observation, form, proportion, composition and picture-making.",
      zh: "預備課程重點是藝術啟蒙、感官探索、小手肌及基本線條色彩；基礎課程會進一步學習觀察、造型、比例、構圖及畫面表達。",
    },
  },
  {
    q: { en: "Can children with no drawing experience join?", zh: "沒有學過畫畫可以參加嗎？" },
    a: {
      en: "Yes. We place children by age and level. Beginners start with line, shape and colour.",
      zh: "可以。導師會按孩子的年齡及程度安排合適班別，初學者可由基本線條、形狀和顏色開始。",
    },
  },
  {
    q: { en: "What will they learn?", zh: "課堂會教授甚麼內容？" },
    a: {
      en: "Line, colour, shape, simple composition, collage, printing and mixed media. Themes follow the learning pace.",
      zh: "包括線條、色彩、形狀、簡單構圖、剪貼、印畫及混合媒介創作，主題會按學習進度調整。",
    },
  },
  {
    q: { en: "How many children per class?", zh: "每班有多少人？" },
    a: {
      en: "Preparatory (3–5): maximum 4. Foundation (5–7): maximum 6.",
      zh: "3–5歲預備課程每班最多4人；5–7歲基礎課程每班最多6人。",
    },
  },
  {
    q: { en: "How long is a class, and which days?", zh: "每堂上課多久及有哪些上課日？" },
    a: {
      en: "1 hour, Monday to Saturday. WhatsApp us for times and places.",
      zh: "每堂1小時，星期一至星期六均有課堂安排；實際時間及學位請透過WhatsApp查詢。",
    },
  },
  {
    q: { en: "Can we book a trial?", zh: "可以先預約試堂嗎？" },
    a: {
      en: "Yes. Regular courses can book an HK$100 trial. WhatsApp us with your child’s age and preferred days.",
      zh: "可以。所有常規課程均可預約HK$100試堂；請透過WhatsApp告訴我們小朋友年齡及方便日子。",
    },
  },
  {
    q: { en: "Where is the studio?", zh: "畫室位於哪裏？" },
    a: {
      en: "IC Academy is near Pui Ching Primary School in Ho Man Tin — convenient for Ho Man Tin, Mong Kok, King’s Park and Kowloon families.",
      zh: "IC Academy位於何文田培正小學附近，方便何文田、旺角、京士柏及九龍區家庭前往。",
    },
  },
];

const RELATED = [
  {
    title: { en: "Kids Creative Art", zh: "兒童創意美術課程" },
    desc: { en: "Ages 7–14 · mixed media and creative drawing", zh: "適合7–14歲，學習不同媒介及創意繪畫技巧" },
    hrefSlug: "/course/kids-art/creative-art-classes",
  },
  {
    title: { en: "Sketching Class", zh: "素描班" },
    desc: { en: "Ages 9+ · observation, proportion, line and value", zh: "適合9歲以上，學習觀察、比例、線條及光暗技巧" },
    hrefSlug: "/courses/sketching-class",
  },
  {
    title: { en: "Comic Drawing Class", zh: "卡通動畫班" },
    desc: { en: "Ages 8+ · character proportion and original characters", zh: "適合8歲以上，學習人物比例與角色創作" },
    hrefSlug: "/course/kids-art/comic-drawing-class",
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

.why-grid { display: grid; gap: 16px; }
@media (min-width: 860px) { .why-grid { grid-template-columns: repeat(3, 1fr); } }
.why-card {
  background: #fff; border: 1px solid var(--line); border-radius: var(--radius);
  padding: 28px 22px; box-shadow: var(--shadow);
}
.why-card p { margin: 0; color: var(--muted); }

.detail { display: grid; gap: 36px; align-items: center; }
@media (min-width: 900px) { .detail { grid-template-columns: 1.1fr 0.9fr; gap: 48px; } }
.detail h2 { font-size: clamp(1.45rem, 3vw, 1.9rem); margin: 0 0 10px; text-align: left; }
.detail-lead { color: var(--muted); margin: 0 0 18px; max-width: 54ch; }
.check-list { margin: 0 0 28px; padding: 0; list-style: none; }
.check-list li { position: relative; padding: 0.35rem 0 0.35rem 1.7rem; }
.check-list li::before { content: "✓"; position: absolute; left: 0; top: 0.35rem; color: var(--check); font-weight: 800; }
.detail-media { border-radius: 22px; overflow: hidden; box-shadow: var(--shadow); background: #eee; aspect-ratio: 4 / 5; max-height: 480px; }
.detail-media img { width: 100%; height: 100%; object-fit: cover; }

.stage-grid { display: grid; gap: 18px; }
@media (min-width: 860px) { .stage-grid { grid-template-columns: repeat(2, 1fr); } }
.stage-card {
  background: #fff; border: 1px solid var(--line); border-radius: var(--radius);
  padding: 28px 24px; box-shadow: var(--shadow); display: flex; flex-direction: column;
}
.stage-kicker {
  display: inline-flex; align-self: flex-start; background: var(--teal-soft); color: var(--teal-deep);
  border-radius: 999px; padding: 6px 12px; font-weight: 800; font-size: 0.82rem; margin-bottom: 12px;
}
.stage-card h3 { margin: 0 0 8px; font-size: 1.2rem; }
.stage-meta { margin: 0 0 16px; color: var(--muted); font-weight: 700; font-size: 0.95rem; }
.stage-card ul { margin: 0 0 22px; padding: 0; list-style: none; flex: 1; }
.stage-card li { position: relative; padding: 0.3rem 0 0.3rem 1.5rem; color: var(--muted); }
.stage-card li::before { content: "•"; position: absolute; left: 0.2rem; color: var(--teal); font-weight: 800; }

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

.who-box {
  max-width: 70ch; margin: 0 auto; background: #fff; border: 1px solid var(--line);
  border-radius: var(--radius); padding: 28px 26px; box-shadow: var(--shadow); color: var(--muted);
}

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
  .wrap { width: calc(100% - 24px); }
  .section { padding: 36px 0; }
  .hero .wrap { padding: 28px 0 32px; }
  .btn-row { flex-direction: column; align-items: stretch; }
}
`;

class VisualArtSkillsHub extends HTMLElement {
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
          if (h1 && /Visual Art Skills Course/i.test(h1.textContent || "")) this.render();
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
    const bleed = document.getElementById("visual-art-skills-hub-page-bleed");
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
    const id = "visual-art-skills-hub-page-bleed";
    if (document.getElementById(id)) return;
    const style = document.createElement("style");
    style.id = id;
    style.textContent = `
      visual-art-skills-hub {
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
    const siloUrl = this.path("/course/kids-art");
    const trialUrl = this.path("/homantin-children-art-trial");
    const galleryUrl = this.isEn
      ? "https://www.icacademy.com.hk/studentartwork"
      : "https://www.icacademy.com.hk/zh/studentartwork";
    const homeUrl = this.isEn ? "https://www.icacademy.com.hk" : "https://www.icacademy.com.hk/zh";

    const waPrefill = this._waPrefill(
      t(
        "Hi, I’d like to ask about the Visual Art Skills Course (Preparatory / Foundation) in Ho Man Tin. Child’s age: ____; drawing experience: ____; preferred days: ____.",
        "你好，我想查詢何文田視藝技巧課程（預備／基礎）。小朋友年齡：＿＿；繪畫經驗：＿＿；方便上課時間：＿＿。"
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
                <span>${t("Visual Art Skills", "視藝技巧課程")}</span>
              </nav>
              <p class="hero-eyebrow">${t("Ho Man Tin · near Pui Ching · kids art ages 3–7", "何文田・培正附近・3–7歲兒童畫班")}</p>
              <div class="hero-title-chip">
                <h1 id="hero-title">${t("Visual Art Skills Course", "視藝技巧課程")}</h1>
                <p class="hero-sub">${t("Preparatory · Foundation · creative start", "預備課程｜基礎課程｜創意啟蒙")}</p>
              </div>
              <p class="hero-lead">
                ${t(
                  "IC Academy Visual Art Skills is for ages 3–7. Classes are split into Preparatory and Foundation by age and stage, so children build drawing skill step by step — from line, colour and shape to observation, composition and mixed-media making, plus fine-motor skill, focus and confidence.",
                  "IC Academy視藝技巧課程專為3至7歲小朋友而設，按年齡及學習階段分為「預備課程」及「基礎課程」，讓孩子循序漸進建立繪畫能力。課程由線條、色彩與形狀開始，再逐步加入觀察、構圖及多元媒介創作，培養小手肌、創意表達、專注力與自信。"
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
              <div class="trust-item">✓ ${t("Ages 3–5 Preparatory", "3–5歲預備課程")}<span>${t("Art play and first skills", "藝術啟蒙入門")}</span></div>
              <div class="trust-item">✓ ${t("Ages 5–7 Foundation", "5–7歲基礎課程")}<span>${t("Observation and composition", "觀察與基本構圖")}</span></div>
              <div class="trust-item">✓ ${t("Small class of 4–6", "小班4–6人")}<span>${t("Guidance by ability", "按程度個別指導")}</span></div>
              <div class="trust-item">✓ ${t("1 hour per class", "每堂1小時")}<span>${t("Monday to Saturday", "星期一至六")}</span></div>
            </div>
          </div>
        </section>

        <section class="section section-soft" aria-labelledby="why-title">
          <div class="wrap">
            <h2 class="section-title" id="why-title">${t("Why choose Visual Art Skills at IC Academy?", "為什麼選擇 IC Academy 視藝技巧課程？")}</h2>
            <p class="section-lead">${t("By age · step by step · small class · creative expression", "分齡教學・循序進階・小班指導・創意表達")}</p>
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
                <h2 id="details-title">${t("Visual Art Skills details", "視藝技巧課程詳情")}</h2>
                <p class="hero-sub" style="margin:0 0 12px;font-size:1.05rem">${t("Ages 3–7 · Preparatory and Foundation · 1 hour · Mon–Sat", "適合3–7歲｜預備及基礎兩個階段｜每堂1小時｜星期一至六")}</p>
                <p class="detail-lead">
                  ${t(
                    "Classes follow growth stage. Ages 3–5 begin with sensory play, line and colour. Ages 5–7 strengthen observation, form, proportion and picture organisation for a fuller drawing foundation.",
                    "課程以分齡方式照顧不同成長階段。3至5歲先從感官探索、線條和色彩入門；5至7歲則逐步加強觀察、造型、比例及畫面組織，建立更完整的繪畫基礎。"
                  )}
                </p>
                <p class="detail-lead">
                  ${t(
                    "Through themed demos and interactive guidance, children turn everyday looking and imagination into their own work, while building focus, hand–eye coordination and the habit of finishing a task.",
                    "導師會透過主題示範和互動引導，鼓勵孩子把生活觀察和想像轉化成個人作品，同時訓練專注、手眼協調及獨立完成任務的能力。"
                  )}
                </p>
                <ul class="check-list">
                  ${LEARNING.map((item) => `<li>${this.pick(item)}</li>`).join("")}
                </ul>
                <a class="btn btn-coral" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("Ask about this class", "查詢課程詳情")}</a>
              </div>
              <div class="detail-media">
                <img src="${IMG.detail}" alt="${t("ICAcademy Visual Art Skills student work", "ICAcademy視藝技巧課程學員作品")}" width="800" height="1000" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        <section class="section section-soft" aria-labelledby="stages-title">
          <div class="wrap">
            <h2 class="section-title" id="stages-title">${t("Two stages of learning", "兩個學習階段")}</h2>
            <p class="section-lead">${t("We match Preparatory or Foundation to your child’s age and drawing experience.", "按小朋友年齡及繪畫經驗配對預備或基礎班。")}</p>
            <div class="stage-grid">
              ${STAGES.map(
                (stage) => `
                <article class="stage-card">
                  <span class="stage-kicker">${this.pick(stage.kicker)}</span>
                  <h3>${this.pick(stage.title)}</h3>
                  <p class="stage-meta">${this.pick(stage.meta)}</p>
                  <ul>
                    ${stage.points.map((p) => `<li>${this.pick(p)}</li>`).join("")}
                  </ul>
                  <a class="btn btn-coral" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("Ask about this class", "查詢課程詳情")}</a>
                </article>`
              ).join("")}
            </div>
          </div>
        </section>

        <section class="section" aria-labelledby="gallery-title">
          <div class="wrap">
            <h2 class="section-title" id="gallery-title">${t("Student artwork", "學員作品展示")}</h2>
            <p class="section-lead">${t("From first art play to drawing foundations — each stage of creative growth.", "由藝術啟蒙到繪畫基礎，記錄每個階段的創意成長")}</p>
            <div class="gallery-grid">
              <figure><img src="${IMG.gallery1}" alt="${t("Visual Art Skills student work", "視藝技巧學員作品")}" loading="lazy" /><figcaption>${t("Student work", "學員作品")}</figcaption></figure>
              <figure><img src="${IMG.gallery2}" alt="${t("Visual Art Skills student work", "視藝技巧學員作品")}" loading="lazy" /><figcaption>${t("Student work", "學員作品")}</figcaption></figure>
              <figure><img src="${IMG.gallery3}" alt="${t("Visual Art Skills student work", "視藝技巧學員作品")}" loading="lazy" /><figcaption>${t("Student work", "學員作品")}</figcaption></figure>
              <figure><img src="${IMG.gallery4}" alt="${t("Visual Art Skills student work", "視藝技巧學員作品")}" loading="lazy" /><figcaption>${t("Student work", "學員作品")}</figcaption></figure>
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

        <section class="section" aria-labelledby="who-title">
          <div class="wrap">
            <h2 class="section-title" id="who-title">${t("Who is this for?", "適合甚麼小朋友？")}</h2>
            <p class="who-box">
              ${t(
                "For ages 3–7 who enjoy drawing, colour play and making things by hand. Preparatory suits 3–5 year olds new to art class. Foundation suits 5–7 year olds who want stronger observation, form, composition and creative expression.",
                "適合3至7歲、喜歡畫畫、色彩探索和動手創作的小朋友。預備課程適合初次接觸藝術學習的3至5歲幼兒；基礎課程則適合5至7歲、希望進一步建立觀察、造型、構圖及創意表達能力的孩子。"
              )}
            </p>
          </div>
        </section>

        <section class="section section-soft" aria-labelledby="quotes-title">
          <div class="wrap">
            <blockquote class="studio-quote">
              ${t(
                "“Small classes let the teacher follow each child’s pace — from first marks to a more complete picture.”",
                "「小班教學讓導師可以跟進每個孩子的進度，由第一筆線條到更完整的畫面表達。」"
              )}
              <cite>— ${t("IC Academy Visual Art Skills", "IC Academy 視藝技巧課程")}</cite>
            </blockquote>
            <h2 class="section-title" id="quotes-title" style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)">${t("What families say", "家長分享")}</h2>
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
            <h2 class="section-title" id="explore-title">${t("Explore more courses", "探索更多課程")}</h2>
            <p class="section-lead">${t("This page is Visual Art Skills for ages 3–7. Other courses have their own pages.", "本頁是3–7歲視藝技巧課程。其他課程請見相關頁面。")}</p>
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

        <section class="section" aria-labelledby="trial-title">
          <div class="wrap">
            <div class="trial">
              <div class="trial-badge">${t("HK$100 trial", "HK$100 試堂")}</div>
              <h2 id="trial-title">${t("Ask about Visual Art Skills", "查詢視藝技巧課程")}</h2>
              <p>${t(
                "WhatsApp us with your child’s age, drawing experience and preferred times — we will help match Preparatory or Foundation.",
                "WhatsApp告訴我們小朋友年齡、繪畫經驗及方便上課時間，我們會協助配對預備或基礎班。"
              )}</p>
              <div class="btn-row">
                <a class="btn btn-teal" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("WhatsApp to book", "WhatsApp 預約試堂")}</a>
                <a class="btn btn-ghost" data-action="hub" href="${trialUrl}">${t("How the trial works", "了解試堂詳情")}</a>
              </div>
            </div>
          </div>
        </section>

        <section class="final" aria-labelledby="final-title">
          <h2 id="final-title">${t("Book Visual Art Skills in Ho Man Tin", "立即查詢視藝技巧課程")}</h2>
          <p>${t("Ages 3–7, small class of 4–6. WhatsApp us for times, places and an HK$100 trial.", "3–7歲、小班4–6人，歡迎WhatsApp查詢上課時間、剩餘學位及HK$100試堂。")}</p>
          <div class="btn-row">
            <a class="btn btn-coral" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("Book a trial", "立即預約體驗")}</a>
            <a class="btn btn-outline-white" data-action="hub" href="${siloUrl}">${t("Back to Drawing & Painting", "返回繪畫及素描")}</a>
          </div>
        </section>
      </div>
    `;

    this._applyFullBleedCss();
    this._observeHeight();
  }
}

customElements.define("visual-art-skills-hub", VisualArtSkillsHub);
