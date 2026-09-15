/**
 * ICAcademy Creative Art Classes — course landing (not a hub)
 * Tag name: creative-art-hub
 * Version: 2026-08-16-v1 (smaller mobile type)
 *
 * Parent silo hub: Kids Art
 * Canonical:
 *   EN: /course/kids-art/creative-art-classes
 *   ZH: /zh/course/kids-art/creative-art-classes
 */
const WA_DEFAULT = "https://wa.me/85265808022";
/* IC_WHATSAPP_TRACKING_START */
(function installIcWhatsAppTracking(w) {
  if (!w || w.__icTrackWhatsAppClick) return;

  var LOCK_MS = 500;
  var lastAt = 0;

  function destinationHost(href) {
    var raw = String(href || "");
    try {
      var host = new URL(raw, w.location && w.location.href).hostname || "";
      if (host) return host;
    } catch (e) {}
    if (/api\.whatsapp\.com/i.test(raw)) return "api.whatsapp.com";
    if (/wa\.me/i.test(raw)) return "wa.me";
    if (/whatsapp\.com/i.test(raw)) return "whatsapp.com";
    return "whatsapp";
  }

  function pagePath() {
    try {
      return String((w.location && w.location.pathname) || "");
    } catch (e) {
      return "";
    }
  }

  function pageUrl() {
    try {
      var loc = w.location;
      if (!loc) return "";
      return String(loc.origin || "") + String(loc.pathname || "");
    } catch (e) {
      return "";
    }
  }

  function courseName(meta) {
    var fromMeta = meta && meta.course_name != null ? String(meta.course_name).replace(/\s+/g, " ").trim() : "";
    if (fromMeta) return fromMeta.slice(0, 120);
    try {
      var host = meta && meta.host;
      var root = host && host.shadowRoot;
      var h1 = root && root.querySelector("h1");
      var text = h1 && String(h1.textContent || "").replace(/\s+/g, " ").trim();
      if (text) return text.slice(0, 120);
    } catch (e) {}
    return "";
  }

  function ctaLocation(meta) {
    var fromMeta = meta && meta.cta_location != null ? String(meta.cta_location).trim() : "";
    if (fromMeta) return fromMeta.slice(0, 40);
    var el = meta && meta.el;
    if (!el || typeof el.closest !== "function") return "content";
    if (el.closest(".hero")) return "hero";
    if (el.closest(".trial")) return "trial";
    if (el.closest(".final")) return "final";
    if (el.closest(".detail")) return "details";
    if (el.closest(".contact-panel, .contact-card, .info-card, .contact")) return "contact";
    if (el.closest(".faq-list, .faq")) return "faq";
    if (el.closest(".form-card")) return "form";
    if (el.closest(".explore-grid, .explore")) return "explore";
    return "content";
  }

  w.__icTrackWhatsAppClick = function trackWhatsAppClick(meta) {
    try {
      var now = Date.now();
      if (now - lastAt < LOCK_MS) return;
      lastAt = now;

      var href = meta && meta.href != null ? String(meta.href) : "";
      var payload = {
        event: "whatsapp_click",
        page_path: pagePath(),
        page_url: pageUrl(),
        course_name: courseName(meta),
        cta_location: ctaLocation(meta),
        whatsapp_destination: destinationHost(href),
      };

      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push(payload);
    } catch (err) {
      // Tracking must never block WhatsApp navigation.
    }
  };
})(typeof window !== "undefined" ? window : undefined);
/* IC_WHATSAPP_TRACKING_END */


function mediaUrl(id, w, h, q = 75) {
  return `https://static.wixstatic.com/media/${id}/v1/fill/w_${w},h_${h},al_c,q_${q},enc_auto/${id}`;
}

const IMG = {
  hero: mediaUrl("b98cc9_9c6e5138d1fa40a7815d12218f642440~mv2.jpg", 1600, 1000),
  gallery1: mediaUrl("b98cc9_9c6e5138d1fa40a7815d12218f642440~mv2.jpg", 800, 800),
  gallery2: mediaUrl("b98cc9_66611472f2134e0fa854d2914e4ae347~mv2.jpg", 800, 800),
  gallery3: mediaUrl("b98cc9_f16629f0d6414271822e19d767f44457~mv2.jpg", 800, 800),
  gallery4: mediaUrl("b98cc9_1e80c89215f84798a65eaedc03352cd5~mv2.jpg", 800, 800),
  detail: mediaUrl("b98cc9_f16629f0d6414271822e19d767f44457~mv2.jpg", 800, 1000),
  levelI: mediaUrl("b98cc9_9c6e5138d1fa40a7815d12218f642440~mv2.jpg", 640, 400, 70),
  levelII: mediaUrl("b98cc9_66611472f2134e0fa854d2914e4ae347~mv2.jpg", 640, 400, 70),
  levelIII: mediaUrl("b98cc9_f16629f0d6414271822e19d767f44457~mv2.jpg", 640, 400, 70),
};

const WHY = [
  {
    title: { en: "Ages 7–14, not kindergarten", zh: "7–14歲，不是幼兒班" },
    desc: {
      en: "For primary to early secondary. Younger children should see the ages 3–7 drawing class.",
      zh: "適合小學生至初中。3–7歲請見幼兒畫畫班，不是本頁課程。",
    },
  },
  {
    title: { en: "Drawing plus mixed media", zh: "系統學繪畫及不同媒介" },
    desc: {
      en: "Line, proportion, colour, composition and mixed media — not a specialist comic class.",
      zh: "學習線條、比例、色彩、構圖及不同藝術媒介，不是專門漫畫班。",
    },
  },
  {
    title: { en: "Maximum 6 in Ho Man Tin", zh: "何文田小班最多6人" },
    desc: {
      en: "1-hour classes near Pui Ching. WhatsApp for times, fees and a trial.",
      zh: "培正附近每堂1小時。歡迎WhatsApp查詢時間、收費及試堂。",
    },
  },
];

const DECISION = [
  {
    title: { en: "Ages 7–14", zh: "適合7–14歲" },
    desc: { en: "Level I 7–9, Level II 9–11, Level III 11–14.", zh: "Level I 7–9歲、Level II 9–11歲、Level III 11–14歲。" },
  },
  {
    title: { en: "Beginners welcome", zh: "初學者適合" },
    desc: { en: "We place children by age and drawing experience.", zh: "導師按年齡及繪畫經驗配對 Level。" },
  },
  {
    title: { en: "Ho Man Tin / Kowloon", zh: "何文田／九龍上課" },
    desc: { en: "Near Pui Ching Primary School.", zh: "畫室位於何文田培正小學附近。" },
  },
  {
    title: { en: "Course format", zh: "課程模式" },
    desc: { en: "1 hour, Monday to Saturday, maximum 6.", zh: "每堂1小時，星期一至六，每班最多6人。" },
  },
  {
    title: { en: "How to ask", zh: "查詢安排" },
    desc: { en: "WhatsApp age, drawing experience and preferred days for fees and an HK$100 trial.", zh: "WhatsApp年齡、繪畫經驗及方便日子，查詢收費及HK$100試堂。" },
  },
  {
    title: { en: "Not a comic-only class", zh: "不是專門漫畫班" },
    desc: { en: "For cartoon and character drawing, see the comic class (ages 8+).", zh: "若主要想學漫畫人物，請見8歲以上兒童漫畫班。" },
  },
];

const LEARNING = [
  { en: "Build line, shape, proportion, colour and composition", zh: "建立線條、形狀、比例、色彩及構圖基礎" },
  { en: "Try drawing, collage and mixed-media methods", zh: "接觸繪畫、拼貼及不同媒介的創作方法" },
  { en: "Move from references and demos toward independent work", zh: "從參考與示範逐步發展自主創作能力" },
  { en: "Talk about ideas and look at different ways of making", zh: "學習表達作品概念及欣賞不同創作方式" },
  { en: "Small class, with guidance matched to level", zh: "小班教學，導師按孩子程度給予個別指導" },
];

const LEVELS = [
  {
    kicker: { en: "Stage 1", zh: "第一階段" },
    title: { en: "Creative Art Level I", zh: "創意美術 Level I" },
    meta: { en: "Ages 7–9 · max 6 · 1 hour", zh: "7–9歲｜最多6人｜每堂1小時" },
    image: IMG.levelI,
    points: {
      en: [
        "Strengthen line, shape, colour and basic composition",
        "Practise observation and imagination through playful themes",
        "Try different materials and simple mixed-media work",
        "Build confidence to finish a piece independently",
      ],
      zh: ["鞏固線條、形狀、色彩及基本構圖", "透過有趣主題練習觀察及想像", "接觸不同物料與簡單多媒介創作", "建立獨立完成作品的信心"],
    },
    cta: { en: "Ask about Level I", zh: "查詢 Level I" },
    wa: {
      en: "Hi, I’d like to ask about Creative Art Level I (ages 7–9). Child’s age: ____; drawing experience: ____; preferred days: ____.",
      zh: "你好，我想查詢創意美術 Level I（7–9歲）。孩子年齡：＿＿；繪畫經驗：＿＿；方便日子：＿＿。",
    },
  },
  {
    kicker: { en: "Stage 2", zh: "第二階段" },
    title: { en: "Creative Art Level II", zh: "創意美術 Level II" },
    meta: { en: "Ages 9–11 · max 6 · 1 hour", zh: "9–11歲｜最多6人｜每堂1小時" },
    image: IMG.levelII,
    points: {
      en: [
        "Strengthen proportion, space, colour combinations and composition",
        "Use drawing media with more structure",
        "Add personal ideas to themed work",
        "Raise picture completeness and creative expression",
      ],
      zh: ["加強比例、空間、色彩配搭及構圖", "學習更有系統地運用繪畫媒介", "由主題引導逐步加入個人想法", "提升畫面完整度與創意表達"],
    },
    cta: { en: "Ask about Level II", zh: "查詢 Level II" },
    wa: {
      en: "Hi, I’d like to ask about Creative Art Level II (ages 9–11). Child’s age: ____; drawing experience: ____; preferred days: ____.",
      zh: "你好，我想查詢創意美術 Level II（9–11歲）。孩子年齡：＿＿；繪畫經驗：＿＿；方便日子：＿＿。",
    },
  },
  {
    kicker: { en: "Stage 3", zh: "第三階段" },
    title: { en: "Creative Art Level III", zh: "創意美術 Level III" },
    meta: { en: "Ages 11–14 · max 6 · 1 hour", zh: "11–14歲｜最多6人｜每堂1小時" },
    image: IMG.levelIII,
    points: {
      en: [
        "Deepen composition, form, colour and picture layers",
        "Explore fuller themes and mixed-media pieces",
        "Research, design and develop a personal style",
        "Build a solid base for more advanced art study",
      ],
      zh: ["深化構圖、造型、色彩與畫面層次", "探索較完整的主題及多媒介作品", "鼓勵研究、設計與發展個人風格", "為進階美術學習建立穩固基礎"],
    },
    cta: { en: "Ask about Level III", zh: "查詢 Level III" },
    wa: {
      en: "Hi, I’d like to ask about Creative Art Level III (ages 11–14). Child’s age: ____; drawing experience: ____; preferred days: ____.",
      zh: "你好，我想查詢創意美術 Level III（11–14歲）。孩子年齡：＿＿；繪畫經驗：＿＿；方便日子：＿＿。",
    },
  },
];

const STEPS = [
  {
    step: "1",
    title: { en: "Theme exploration", zh: "主題探索" },
    desc: {
      en: "Stories, pictures and everyday looking spark interest in making.",
      zh: "透過故事、圖片及生活觀察，引發創作興趣。",
    },
  },
  {
    step: "2",
    title: { en: "Skill demonstration", zh: "技巧示範" },
    desc: {
      en: "The teacher demos composition, colour, media and related skills.",
      zh: "導師示範構圖、用色、媒介及相關技巧。",
    },
  },
  {
    step: "3",
    title: { en: "Independent making", zh: "自主創作" },
    desc: {
      en: "Children use the methods, add their own ideas and finish a piece.",
      zh: "運用所學方法，加入自己的構思完成作品。",
    },
  },
  {
    step: "4",
    title: { en: "Share and feedback", zh: "分享與回饋" },
    desc: {
      en: "Look at the work together and give specific encouragement.",
      zh: "欣賞作品並獲得具體鼓勵，建立表達能力與信心。",
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
    q: { en: "What age is this children’s art class for?", zh: "兒童美術班適合幾歲？是幼兒班嗎？" },
    a: {
      en: "Ages 7–14: Level I (7–9), Level II (9–11), Level III (11–14). It is not the ages 3–7 kindergarten drawing class.",
      zh: "適合7至14歲小學生至初中，分為Level I（7–9）、Level II（9–11）及Level III（11–14）。不是3–7歲幼兒畫畫班。",
    },
  },
  {
    q: { en: "Can a child join with no drawing experience?", zh: "沒有學過畫畫可以參加兒童畫畫班嗎？" },
    a: {
      en: "Yes. We place children by age and experience. Beginners start with core drawing skills.",
      zh: "可以。導師按年齡及經驗安排 Level，初學者可由繪畫基礎開始。",
    },
  },
  {
    q: { en: "What will they learn?", zh: "兒童繪畫課程會學甚麼？" },
    a: {
      en: "Line, shape, proportion, colour, composition and mixed-media making. Themes and skills are adjusted by level.",
      zh: "包括線條、形狀、比例、色彩、構圖及不同藝術媒介。主題及技巧按程度調整。",
    },
  },
  {
    q: { en: "Is this a comic drawing class?", zh: "這是漫畫班嗎？" },
    a: {
      en: "No. This is a broader kids art and drawing course. For cartoon and comic figures, see the ages 8+ comic class.",
      zh: "不是專門漫畫班。本頁是兒童美術及繪畫課程。若想學卡通／漫畫人物，請見8歲以上兒童漫畫班。",
    },
  },
  {
    q: { en: "Where is the class, and what about Ho Man Tin fees?", zh: "何文田畫班在哪裏？兒童畫班收費怎樣查？" },
    a: {
      en: "Near Pui Ching in Ho Man Tin, Kowloon. WhatsApp us for current fees, times and remaining places.",
      zh: "位於何文田培正小學附近。時間、學位及兒童畫班收費請WhatsApp查詢。",
    },
  },
  {
    q: { en: "Are materials included?", zh: "課堂物料要自備嗎？" },
    a: {
      en: "Please WhatsApp us for the current material arrangement.",
      zh: "課堂物料安排請透過WhatsApp向畫室查詢。",
    },
  },
  {
    q: { en: "Can we book a trial first?", zh: "可以先參加試堂嗎？" },
    a: {
      en: "Yes. The Creative Art trial is HK$100. Share the child’s age, drawing experience and preferred times.",
      zh: "可以，試堂為HK$100。請提供孩子年齡、繪畫經驗及方便時間，以便配對 Level。",
    },
  },
  {
    q: { en: "How long is a class?", zh: "每堂多久？星期一至六有課嗎？" },
    a: {
      en: "1 hour. Classes run Monday to Saturday. Ask on WhatsApp for the current timetable.",
      zh: "每堂1小時，星期一至六設課。實際時間表請WhatsApp查詢。",
    },
  },
];

const RELATED = [
  {
    title: { en: "Kids drawing ages 3–7", zh: "3–7歲幼兒畫畫班" },
    desc: { en: "Kindergarten drawing and early art — not this 7–14 class", zh: "幼稚園及幼小階段請見幼兒畫畫班，不是本頁7–14歲課程" },
    hrefSlug: "/course/kids-art/visual-art-skills-course",
  },
  {
    title: { en: "Sketching Class", zh: "素描班" },
    desc: { en: "Ages 9+ · observation, proportion, line, light and shade", zh: "適合9歲以上，學習觀察、比例、線條及光暗技巧" },
    hrefSlug: "/course/drawing-and-painting/sketching-class",
  },
  {
    title: { en: "Comic drawing for ages 8+", zh: "對角色／漫畫有興趣？見兒童漫畫班" },
    desc: { en: "Cartoon figures, character design and comic composition", zh: "8歲以上卡通、動漫人物及漫畫構圖課程" },
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
.section.decide { padding: 72px 0 56px; }
.decide-panel {
  background: var(--bg-soft);
  border: 1px solid var(--line);
  border-radius: 28px;
  padding: clamp(36px, 5vw, 52px) clamp(20px, 4vw, 40px) clamp(28px, 4vw, 40px);
}
h1, h2, h3 { line-height: 1.28; margin: 0 0 12px; font-weight: 800; }
h3 { font-size: 1.12rem; }
.who-box a, .section-lead a { color: var(--teal); font-weight: 700; }

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
  position: relative; width: 100%; max-width: 100%; min-height: 0;
  display: flex; align-items: center; overflow: hidden; background: #f3f3f3;
}
.hero-photo {
  position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center 30%;
  z-index: 0;
}
.hero-bg::after, .hero::after {
  content: ""; position: absolute; inset: 0; z-index: 0; pointer-events: none;
  background: linear-gradient(90deg, rgba(255,255,255,.94) 0%, rgba(255,255,255,.82) 42%, rgba(255,255,255,.28) 72%, rgba(255,255,255,.12) 100%);
}
.hero .wrap { position: relative; z-index: 1; padding: 40px 0; }
.hero-copy { max-width: 42rem; }
.hero-eyebrow { margin: 0 0 18px; color: var(--teal); font-weight: 800; font-size: 1.02rem; }
.hero-title-chip {
  display: block; background: var(--title-chip); border-radius: 22px;
  padding: 20px 24px 18px; margin: 0 0 18px; max-width: min(760px, 100%);
}
.hero-title-chip h1 { margin: 0; font-size: clamp(1.4rem, 3.4vw, 2.1rem); line-height: 1.35; }
.hero-sub { margin: 10px 0 0; font-size: clamp(1.08rem, 2.4vw, 1.4rem); font-weight: 800; color: var(--navy); }
.hero-lead { margin: 0 0 16px; color: var(--muted); font-size: 1.02rem; }
.hero-points { margin: 0 0 22px; padding: 0; list-style: none; }
.hero-points li { position: relative; padding: 0.22rem 0 0.22rem 1.55rem; color: var(--ink); font-weight: 650; }
.hero-points li::before { content: "✓"; position: absolute; left: 0; color: var(--teal); font-weight: 800; }
.decision-grid { display: grid; gap: 12px; }
@media (min-width: 720px) { .decision-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1100px) { .decision-grid { grid-template-columns: repeat(3, 1fr); } }
.decision-item {
  background: #fff; border: 1px solid var(--line); border-radius: var(--radius);
  padding: 18px 20px; box-shadow: var(--shadow);
}
.decision-item h3 { margin: 0 0 6px; font-size: 1.02rem; }
.decision-item p { margin: 0; color: var(--muted); font-weight: 600; font-size: 0.95rem; }

.trust { display: grid; gap: 12px; margin-top: 24px; position: relative; z-index: 1; }
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

.level-grid { display: grid; gap: 16px; }
@media (min-width: 860px) { .level-grid { grid-template-columns: repeat(3, 1fr); } }
.level-card {
  background: #fff; border: 1px solid var(--line); border-radius: var(--radius);
  overflow: hidden; box-shadow: var(--shadow); display: flex; flex-direction: column;
}
.level-card img { width: 100%; height: 180px; object-fit: cover; }
.level-body { padding: 22px; display: flex; flex-direction: column; flex: 1; }
.level-kicker { margin: 0 0 8px; color: var(--teal); font-weight: 800; font-size: 0.82rem; letter-spacing: .04em; }
.level-card h3 { margin: 0 0 8px; }
.level-meta { margin: 0 0 14px; color: var(--muted); font-size: 0.92rem; font-weight: 700; }
.level-card .check-list { flex: 1; margin-bottom: 18px; font-size: 0.95rem; }
.level-card .btn { align-self: stretch; min-height: 44px; padding: 10px 18px; font-size: 0.95rem; }

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
  .section.decide { padding: 56px 0 40px; }
  .hero { min-height: 0; align-items: stretch; }
  .hero::after {
    background: linear-gradient(180deg, rgba(255,255,255,.96) 0%, rgba(255,255,255,.92) 58%, rgba(255,255,255,.78) 100%);
  }
}
@media (max-width: 640px) {
  :host { font-size: 13px; }
  h1, .hero-title-chip h1, .hero h1 { font-size: 1.42em !important; line-height: 1.35; }
  h2, .section-title, .final h2, .detail h2, .trial h2, .form-card h2, .info-card h2 { font-size: 1.24em !important; }
  h3, .faq-q, .card-body h3, .path-step h3, .method h3 { font-size: 1.02em !important; }
  .hero-sub { font-size: 1.05em !important; }
  p, li, .section-lead, .hero-lead, .faq-a, .card-body p, .path-step p, .final p, .detail-lead, .hero-points { font-size: 1em !important; }
  .hero-eyebrow, .kicker, .crumbs, .trust-item span { font-size: 0.88em !important; }
  .btn { font-size: 1em !important; }
  .wrap { width: calc(100% - 24px); }
  .section { padding: 36px 0; }
  .section.decide { padding: 48px 0 32px; }
  .decide-panel { padding: 28px 16px 22px; }
  .hero .wrap { padding: 28px 0 32px; }
  .btn-row { flex-direction: column; align-items: stretch; }
}
`;

class CreativeArtHub extends HTMLElement {
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
          if (h1 && /Creative Art Classes for Ages 7–14/i.test(h1.textContent || "")) this.render();
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
    const bleed = document.getElementById("creative-art-hub-page-bleed");
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
    const id = "creative-art-hub-page-bleed";
    if (document.getElementById(id)) return;
    const style = document.createElement("style");
    style.id = id;
    style.textContent = `
      /* Hide Wix header skin divider and 1px header/page gap */
      #SITE_HEADER {
        border: 0 !important;
        border-bottom: 0 !important;
        box-shadow: none !important;
      }
      #SITE_HEADER > div:first-child,
      #SITE_HEADER > div:first-child * {
        background-image: none !important;
        border-bottom: 0 !important;
        box-shadow: none !important;
      }
      #PAGES_CONTAINER,
      #SITE_PAGES,
      #masterPage {
        border-top: 0 !important;
        box-shadow: none !important;
      }
      #PAGES_CONTAINER,
      #SITE_PAGES {
        margin-top: -1px !important;
      }
      creative-art-hub {
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

    if (action === "scroll-levels") {
      event.preventDefault();
      const sec = this.shadowRoot.getElementById("secLevels");
      if (sec) sec.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    if (action === "whatsapp") {
      try {
        if (typeof window !== "undefined" && typeof window.__icTrackWhatsAppClick === "function") {
          window.__icTrackWhatsAppClick({
            href: (target && target.getAttribute && target.getAttribute("href")) || this.waUrl || "",
            host: this,
            el: target,
          });
        }
      } catch (e) {}
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
        "Hi, I’d like to ask about Creative Art Classes (Level I–III, ages 7–14) / a trial. Child’s age: ____; drawing experience: ____; preferred days: ____.",
        "你好，我想查詢兒童創意美術課程（Level I–III，7–14歲）／體驗堂。孩子年齡：＿＿；繪畫經驗：＿＿；方便日子：＿＿。"
      )
    );

    this.shadowRoot.innerHTML = `
      <style>${STYLES}</style>
      <main class="hub">
        <section class="hero" aria-labelledby="hero-title">
          <img class="hero-photo" src="${IMG.hero}" alt="${t("Ages 7–14 creative art class student work at IC Academy Ho Man Tin", "何文田IC Academy 7–14歲兒童創意美術班學員作品")}" width="1600" height="1000" fetchpriority="high" decoding="async" />
          <div class="wrap">
            <div class="hero-copy">
              <nav class="crumbs" aria-label="${t("Breadcrumb", "麵包屑")}">
                <a data-action="hub" href="${homeUrl}">${t("Home", "首頁")}</a>
                <span aria-hidden="true">/</span>
                <a data-action="hub" href="${courseHubUrl}">${t("Courses", "課程總覽")}</a>
                <span aria-hidden="true">/</span>
                <a data-action="hub" href="${siloUrl}">${t("Kids Art", "兒童美術")}</a>
                <span aria-hidden="true">/</span>
                <span>${t("Creative Art ages 7–14", "7–14歲兒童美術班")}</span>
              </nav>
              <p class="hero-eyebrow">${t("Ho Man Tin · Kowloon · ages 7–14", "何文田／九龍・7–14歲兒童畫畫班")}</p>
              <div class="hero-title-chip">
                <h1 id="hero-title">${t("Creative Art Classes for Ages 7–14", "7–14歲兒童創意美術班")}</h1>
                <p class="hero-sub">${t("Kids drawing and mixed media — primary to early secondary", "兒童繪畫課程｜小學生至初中｜多媒介")}</p>
              </div>
              <p class="hero-lead">
                ${t(
                  "This Ho Man Tin children’s art class is for ages 7–14. Students learn drawing and different art media in Level I–III — not a kindergarten class and not a specialist comic class. WhatsApp us for times, fees and an HK$100 trial.",
                  "IC Academy何文田兒童創意美術班專為7至14歲而設，系統教授繪畫及不同藝術媒介，適合小學生至初中。不是幼兒班，也不是專門漫畫班。歡迎WhatsApp查詢時間、收費及試堂。"
                )}
              </p>
              <ul class="hero-points">
                <li>${t("Ages 7–14 kids art: drawing, colour and mixed media", "7–14歲兒童美術班：繪畫、色彩及不同媒介")}</li>
                <li>${t("Primary to early secondary · three levels by age", "適合小學生至初中｜Level I–III 按年齡編排")}</li>
                <li>${t("Ho Man Tin / Kowloon · WhatsApp for trial and fees", "何文田／九龍上課｜WhatsApp查詢試堂及收費")}</li>
              </ul>
              <div class="btn-row">
                <a class="btn btn-coral" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("WhatsApp to book a trial", "WhatsApp 查詢試堂")}</a>
                <button type="button" class="btn btn-outline-teal" data-action="scroll-levels">${t("See course content and levels", "查看課程內容及程度")}</button>
              </div>
            </div>
          </div>
        </section>

        <section class="section decide" aria-labelledby="decide-title">
          <div class="wrap">
            <div class="decide-panel">
              <h2 class="section-title" id="decide-title">${t("Before you enquire", "報名前先了解")}</h2>
              <p class="section-lead">${t("Age, beginners, location and how this class differs from others.", "年齡、初學、地點，以及與幼兒班／漫畫班的分別")}</p>
              <div class="decision-grid">
                ${DECISION.map(
                  (item) => `
                  <article class="decision-item">
                    <h3>${this.pick(item.title)}</h3>
                    <p>${this.pick(item.desc)}</p>
                  </article>`
                ).join("")}
              </div>
              <div class="trust" aria-label="${t("Course facts", "課程重點")}">
                <div class="trust-item">✓ ${t("Ages 7–14", "7–14歲分齡")}<span>${t("Level I · II · III", "按年齡及能力編排")}</span></div>
                <div class="trust-item">✓ ${t("Max 6 per class", "每班最多6人")}<span>${t("Individual guidance", "小班個別指導")}</span></div>
                <div class="trust-item">✓ ${t("1 hour per class", "每堂1小時")}<span>${t("Ask for the latest times", "時段請向畫室查詢")}</span></div>
                <div class="trust-item">✓ ${t("Monday to Saturday", "星期一至六")}<span>${t("Current timetable", "現有課程安排")}</span></div>
              </div>
            </div>
          </div>
        </section>

        <section class="section section-soft" aria-labelledby="why-title">
          <div class="wrap">
            <h2 class="section-title" id="why-title">${t("Why choose Creative Art Classes?", "為甚麼選擇 IC Academy 兒童創意美術課程？")}</h2>
            <p class="section-lead">${t("Age-based progress · mixed-media exploration · small-group guidance · creative expression", "分齡進階・多媒介探索・小班指導・創意表達")}</p>
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
                <h2 id="details-title">${t("What this children’s art class covers", "兒童畫畫班會學甚麼")}</h2>
                <p class="hero-sub" style="margin:0 0 12px;font-size:1.05rem">${t("Ages 7–14 · Level I, II, III · 1 hour", "適合7–14歲｜Level I、II、III｜每堂1小時")}</p>
                <p class="detail-lead">
                  ${t(
                    "Themes guide children to look at life, stories, people and places, then turn ideas into their own work through demos and practice. Skills are adjusted by age and level, so they stay challenged without losing the feeling of success.",
                    "課程以不同主題引導孩子觀察生活、故事、人物和環境，再透過示範與練習，把想法轉化為個人作品。導師會因應年齡及程度調整技巧要求，讓孩子在挑戰與成功感之間保持學習動力。"
                  )}
                </p>
                <ul class="check-list">
                  ${LEARNING.map((item) => `<li>${this.pick(item)}</li>`).join("")}
                </ul>
                <a class="btn btn-coral" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("Ask about this course", "查詢課程詳情")}</a>
              </div>
              <div class="detail-media">
                <img src="${IMG.detail}" alt="${t("7–14 children’s drawing class student work, Ho Man Tin", "何文田7–14歲兒童畫畫班學員作品")}" width="800" height="1000" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        <section class="section section-soft" id="secLevels" aria-labelledby="levels-title">
          <div class="wrap">
            <h2 class="section-title" id="levels-title">${t("Three levels for different stages of growth", "三個 Level，配合孩子不同成長階段")}</h2>
            <p class="section-lead">${t("First time? WhatsApp the child’s age and drawing experience — we will help match a level.", "第一次參加？WhatsApp告訴我們孩子年齡及繪畫經驗，我們會協助配對。")}</p>
            <div class="level-grid">
              ${LEVELS.map((level) => {
                const points = this.isEn ? level.points.en : level.points.zh;
                return `
                <article class="level-card">
                  <img src="${level.image}" alt="${this.pick(level.title)}" width="640" height="400" loading="lazy" />
                  <div class="level-body">
                    <p class="level-kicker">${this.pick(level.kicker)}</p>
                    <h3>${this.pick(level.title)}</h3>
                    <p class="level-meta">${this.pick(level.meta)}</p>
                    <ul class="check-list">
                      ${points.map((p) => `<li>${p}</li>`).join("")}
                    </ul>
                    <a class="btn btn-teal" data-action="whatsapp" href="${this._waPrefill(this.pick(level.wa))}" target="_blank" rel="noopener noreferrer">${this.pick(level.cta)}</a>
                  </div>
                </article>`;
              }).join("")}
            </div>
          </div>
        </section>

        <section class="section" aria-labelledby="gallery-title">
          <div class="wrap">
            <h2 class="section-title" id="gallery-title">${t("Student artwork", "學員作品展示")}</h2>
            <p class="section-lead">${t("From skill practice to independent making — a record of each stage of growth.", "由技巧練習到自主創作，記錄每個階段的藝術成長")}</p>
            <div class="gallery-grid">
              <figure><img src="${IMG.gallery1}" alt="${t("Kids art class drawing work ages 7–14", "7–14歲兒童美術班繪畫作品")}" width="800" height="800" loading="lazy" /><figcaption>${t("Student work", "學員作品")}</figcaption></figure>
              <figure><img src="${IMG.gallery2}" alt="${t("Children drawing class mixed media work", "兒童繪畫班多媒介作品")}" width="800" height="800" loading="lazy" /><figcaption>${t("Student work", "學員作品")}</figcaption></figure>
              <figure><img src="${IMG.gallery3}" alt="${t("Creative art class student painting Ho Man Tin", "何文田兒童創意美術學員畫作")}" width="800" height="800" loading="lazy" /><figcaption>${t("Student work", "學員作品")}</figcaption></figure>
              <figure><img src="${IMG.gallery4}" alt="${t("Primary school kids art course student work", "小學生兒童藝術課程學員作品")}" width="800" height="800" loading="lazy" /><figcaption>${t("Student work", "學員作品")}</figcaption></figure>
            </div>
            <div class="center-actions">
              <a class="btn btn-outline-teal" data-action="hub" href="${galleryUrl}">${t("See more student work →", "查看更多學員作品 →")}</a>
            </div>
          </div>
        </section>

        <section class="section section-soft" aria-labelledby="path-title">
          <div class="wrap">
            <h2 class="section-title" id="path-title">${t("How a course unfolds", "每堂課程流程")}</h2>
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
            <p class="section-lead" style="max-width:62ch">
              ${t("For ages 7–14 who want a kids drawing and mixed-media class. For cartoon characters, see the ", "適合7至14歲、想學兒童畫畫及不同藝術媒介的學生。若主要想學漫畫人物，請見")}<a data-action="course" href="${this.path("/course/kids-art/comic-drawing-class")}">${t("comic drawing class (ages 8+)", "8歲以上兒童漫畫班")}</a>${t(". Younger children: ", "。幼兒請見")}<a data-action="course" href="${this.path("/course/kids-art/visual-art-skills-course")}">${t("ages 3–7 drawing class", "3–7歲幼兒畫畫班")}</a>${t(".", "。")}
            </p>
          </div>
        </section>

        <section class="section section-soft" aria-labelledby="quotes-title">
          <div class="wrap">
            <blockquote class="studio-quote">
              ${t(
                "“Try a class first, then decide. Experience the studio, teaching style and creative process.”",
                "「先體驗，再決定。讓孩子親身體驗課堂氣氛、教學方式及創作流程。」"
              )}
              <cite>— ${t("IC Academy Creative Art Classes", "IC Academy 兒童創意美術課程")}</cite>
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
            <p class="section-lead">${t("This page is the Creative Art course for ages 7–14. Other courses are listed separately.", "本頁是7–14歲兒童創意美術課程。其他課程請見相關課程。")}</p>
            <div class="silo-links" style="margin-bottom:28px">
              <a data-action="hub" href="${siloUrl}">${t("Kids Art overview", "兒童美術總覽")}</a>
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
              <div class="trial-badge">${t("HK$100 trial", "試堂 HK$100")}</div>
              <h2 id="trial-title">${t("Creative Art trial class", "創意美術試堂")}</h2>
              <p>${t(
                "Let your child experience the class atmosphere, teaching style and creative process. WhatsApp us with age, drawing experience and preferred times — we will help match Level I, II or III.",
                "讓孩子親身體驗課堂氣氛、教學方式及創作流程。WhatsApp告訴我們孩子年齡、繪畫經驗及方便時間，我們會協助安排合適Level。"
              )}</p>
              <div class="btn-row">
                <a class="btn btn-teal" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("WhatsApp to book a trial", "WhatsApp 預約試堂")}</a>
                <a class="btn btn-ghost" data-action="hub" href="${trialUrl}">${t("How the trial works", "了解試堂詳情")}</a>
              </div>
            </div>
          </div>
        </section>

        <section class="final" aria-labelledby="final-title">
          <h2 id="final-title">${t("WhatsApp this 7–14 kids art class in Ho Man Tin", "WhatsApp 查詢何文田兒童美術班")}</h2>
          <p>${t("Ages 7–14 drawing in Kowloon. Ask for Level match, times, fees and an HK$100 trial.", "7–14歲兒童畫畫及美術課程，九龍何文田上課。歡迎查詢程度配對、時間、收費及HK$100試堂。")}</p>
          <div class="btn-row">
            <a class="btn btn-coral" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("WhatsApp to book a trial", "WhatsApp 查詢試堂")}</a>
            <a class="btn btn-outline-white" data-action="hub" href="${siloUrl}">${t("Back to Kids Art", "返回兒童美術")}</a>
          </div>
        </section>
      </main>
    `;

    this._applyFullBleedCss();
    this._observeHeight();
  }
}

customElements.define("creative-art-hub", CreativeArtHub);
