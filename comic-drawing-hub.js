/**
 * ICAcademy Comic Drawing Class — course landing (not a hub)
 * Tag name: comic-drawing-hub
 * Version: 2026-08-16-v1 (smaller mobile type)
 *
 * Parent silo hub: Kids Art
 * Canonical:
 *   EN: /course/kids-art/comic-drawing-class
 *   ZH: /zh/course/kids-art/comic-drawing-class
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
  hero: mediaUrl("b98cc9_37e0184c611f48fb96bae9a1fa37dc05~mv2.jpg", 1600, 1000),
  gallery1: mediaUrl("b98cc9_37e0184c611f48fb96bae9a1fa37dc05~mv2.jpg", 800, 800),
  gallery2: mediaUrl("b98cc9_a62d943a779d4ddb8e85227dc0872726~mv2.jpg", 800, 800),
  gallery3: mediaUrl("b98cc9_5d9714fc876f42ba8b02b5b5d4b08923~mv2.jpg", 800, 800),
  gallery4: mediaUrl("b98cc9_bcc7d1f85fd7431c933ad24f568c4a9b~mv2.jpg", 800, 800),
  detail: mediaUrl("b98cc9_a62d943a779d4ddb8e85227dc0872726~mv2.jpg", 800, 1000),
};

const WHY = [
  {
    title: { en: "Comic drawing skill", zh: "漫畫繪畫技巧" },
    desc: {
      en: "From lines, figure proportion, features and expressions, build cartoon drawing skill for later work.",
      zh: "由基本線條、人物比例、五官及表情開始，逐步掌握漫畫人物繪畫技巧，為日後創作打好基礎。",
    },
  },
  {
    title: { en: "Original character design", zh: "原創角色設計" },
    desc: {
      en: "Design original comic characters — look, costume, personality and story — and turn imagination into a complete creation.",
      zh: "鼓勵孩子設計自己的漫畫角色，包括造型、服飾、個性及故事背景，將想像力轉化成完整創作。",
    },
  },
  {
    title: { en: "Build creative confidence", zh: "建立創作自信" },
    desc: {
      en: "From idea to a finished comic, students practise patience, expression, a sense of achievement and confidence.",
      zh: "孩子由構思到完成個人漫畫作品，在創作過程中建立耐性、表達能力、成就感與自信。",
    },
  },
];

const FEATURES = [
  {
    title: { en: "Cartoon figures", zh: "卡通人物繪畫" },
    desc: {
      en: "Proportion, features, hair and expressions — the core of comic drawing.",
      zh: "學習人物比例、五官、髮型與表情，打好漫畫人物基礎。",
    },
  },
  {
    title: { en: "Character design", zh: "角色設計" },
    desc: {
      en: "Costume, personality and a simple backstory, not only copying a look.",
      zh: "從造型、服飾到個性與故事背景，設計屬於自己的角色。",
    },
  },
  {
    title: { en: "Action and composition", zh: "表情動作・畫面構圖" },
    desc: {
      en: "Pose, movement and panel layout so the picture tells a story.",
      zh: "練習不同姿勢、動作及漫畫構圖，讓畫面能表達故事。",
    },
  },
];

const LEARNING = [
  { en: "Comic figure proportion, features, hair and expressions", zh: "學習漫畫人物比例、五官、髮型與表情" },
  { en: "Different poses, actions and character looks", zh: "練習不同姿勢、動作及角色造型" },
  { en: "Original comic characters and a simple story background", zh: "設計原創漫畫人物及角色背景" },
  { en: "Comic composition and how a picture communicates", zh: "學習漫畫構圖及畫面表達技巧" },
  { en: "Maximum 6 students, with guidance matched to level", zh: "小班最多6人，導師按程度個別指導" },
  { en: "Finish a personal comic or character-design piece", zh: "完成個人漫畫或角色設計作品" },
];

const STEPS = [
  {
    step: "1",
    title: { en: "Theme and skill intro", zh: "主題與技巧介紹" },
    desc: {
      en: "Introduce the comic theme, figure structure and drawing focus.",
      zh: "介紹漫畫主題、人物結構與繪畫重點",
    },
  },
  {
    step: "2",
    title: { en: "Step-by-step demo", zh: "示範漫畫畫法" },
    desc: {
      en: "See figure, features, expressions and action drawn in stages.",
      zh: "分步示範人物、五官、表情及動作技巧",
    },
  },
  {
    step: "3",
    title: { en: "Character creation", zh: "角色創作" },
    desc: {
      en: "Use the skills to design an original comic character.",
      zh: "運用所學技巧，設計自己的漫畫人物",
    },
  },
  {
    step: "4",
    title: { en: "Finish the work", zh: "作品完善" },
    desc: {
      en: "One-to-one guidance to refine detail and how the picture reads.",
      zh: "導師個別指導，改善細節與畫面表達",
    },
  },
];

const QUOTES = [
  {
    text: {
      en: "My child started from simple faces and can now design a character with a story. The teacher explains each step clearly.",
      zh: "小朋友由簡單五官開始，而家已經識得自己設計角色同故事，老師每步都講得好清楚。",
    },
    by: { en: "Parent", zh: "家長分享" },
  },
  {
    text: {
      en: "Small class, so there is time to try poses and expressions. I like making my own comic character.",
      zh: "小班教學，有時間試唔同姿勢同表情，好鍾意畫自己嘅漫畫角色。",
    },
    by: { en: "Student", zh: "學員分享" },
  },
  {
    text: {
      en: "Beginners can follow. Finishing a character each class builds confidence to keep drawing.",
      zh: "初學都跟得上。每堂完成一個角色，小朋友更有信心繼續畫。",
    },
    by: { en: "Parent", zh: "家長分享" },
  },
];

const FAQ = [
  {
    q: { en: "What age is the comic drawing class for?", zh: "卡通漫畫班適合幾歲的小朋友？" },
    a: {
      en: "Ages 8+ (children and teens). The teacher adjusts topics by age, drawing foundation and progress.",
      zh: "課程適合8歲以上兒童及青少年。導師會按照學生的年齡、繪畫基礎及學習進度調整教學內容。",
    },
  },
  {
    q: { en: "Can beginners with no drawing experience join?", zh: "沒有學過畫畫可以參加嗎？" },
    a: {
      en: "Yes. Classes start with lines, figure proportion and facial features, so beginners can build comic drawing skill step by step.",
      zh: "可以。課堂會由基本線條、人物比例及五官開始教授，初學者可以逐步掌握漫畫人物繪畫技巧。",
    },
  },
  {
    q: { en: "What will students learn?", zh: "漫畫班會教授甚麼內容？" },
    a: {
      en: "Figure proportion, features, hair, expressions, costume, action, character design and comic composition. Topics follow student level and the class theme.",
      zh: "課程內容包括人物比例、五官、髮型、表情、服飾、動作、角色設計及漫畫畫面構圖。實際內容會按學生程度及課堂主題調整。",
    },
  },
  {
    q: { en: "How many students per class?", zh: "每班有多少人？" },
    a: {
      en: "Maximum 6, so the teacher can follow each student’s work and give suitable guidance.",
      zh: "每班最多6人，讓導師可以留意每位學生的創作進度，並提供適切指導。",
    },
  },
  {
    q: { en: "How long is a class, and which days?", zh: "每堂上課時間多久？" },
    a: {
      en: "About 1 hour. Current sessions: Monday, Wednesday, Friday and Saturday. Ask on WhatsApp for times and places.",
      zh: "每堂約1小時。現有課堂安排為星期一、星期三、星期五及星期六，實際時間及學位請透過WhatsApp查詢。",
    },
  },
  {
    q: { en: "Where is the studio?", zh: "畫室位於哪裏？" },
    a: {
      en: "IC Academy is in Ho Man Tin near Pui Ching Primary School — about a 5-minute walk.",
      zh: "IC Academy位於何文田培正小學附近，步行約5分鐘，交通方便。",
    },
  },
  {
    q: { en: "Can we book a trial?", zh: "可以預約體驗嗎？" },
    a: {
      en: "Yes. WhatsApp us for a trial, class times and remaining places. Arrangements are confirmed by the studio.",
      zh: "歡迎透過WhatsApp查詢體驗安排、上課時間及剩餘學位，實際安排以畫室回覆為準。",
    },
  },
];

const RELATED = [
  {
    title: { en: "Kids Creative Art", zh: "兒童創意美術課程" },
    desc: { en: "Ages 7–14 · mixed media and creative drawing skill", zh: "適合7–14歲，學習不同媒介及創意繪畫技巧" },
    hrefSlug: "/course/kids-art/creative-art-classes",
  },
  {
    title: { en: "Sketching Class", zh: "素描班" },
    desc: { en: "Ages 9+ · observation, proportion, line and light", zh: "適合9歲以上，學習觀察、比例、線條及光暗技巧" },
    hrefSlug: "/course/drawing-and-painting/sketching-class",
  },
  {
    title: { en: "Visual Art Class", zh: "綜合美術課程" },
    desc: { en: "Ages 14+ · mixed media and more advanced art skill", zh: "適合14歲以上，透過不同媒介發展進階藝術技巧" },
    hrefSlug: "/course/kids-art/visual-art-class",
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

.why-grid, .features-grid { display: grid; gap: 16px; }
@media (min-width: 860px) { .why-grid, .features-grid { grid-template-columns: repeat(3, 1fr); } }
.why-card, .feature-card {
  background: #fff; border: 1px solid var(--line); border-radius: var(--radius);
  padding: 28px 22px; box-shadow: var(--shadow);
}
.why-card p, .feature-card p { margin: 0; color: var(--muted); }

.detail { display: grid; gap: 36px; align-items: center; }
@media (min-width: 900px) { .detail { grid-template-columns: 1.1fr 0.9fr; gap: 48px; } }
.detail h2 { font-size: clamp(1.45rem, 3vw, 1.9rem); margin: 0 0 10px; text-align: left; }
.detail-lead { color: var(--muted); margin: 0 0 18px; max-width: 54ch; }
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
  .hero .wrap { padding: 28px 0 32px; }
  .btn-row { flex-direction: column; align-items: stretch; }
}
`;

class ComicDrawingHub extends HTMLElement {
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
          if (h1 && /Comic Drawing Class in Ho Man Tin/i.test(h1.textContent || "")) this.render();
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
    const bleed = document.getElementById("comic-drawing-hub-page-bleed");
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
    const id = "comic-drawing-hub-page-bleed";
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
      comic-drawing-hub {
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
    const kidsListingUrl = this.path("/course/kids-art/kids-art-classes-homantin");
    const trialUrl = this.path("/homantin-children-art-trial");
    const galleryUrl = this.isEn
      ? "https://www.icacademy.com.hk/studentartwork"
      : "https://www.icacademy.com.hk/zh/studentartwork";
    const homeUrl = this.isEn ? "https://www.icacademy.com.hk" : "https://www.icacademy.com.hk/zh";

    const waPrefill = this._waPrefill(
      t(
        "Hi, I’d like to ask about the Kids’ Comic Drawing Class in Ho Man Tin / a trial. Age: ____; drawing experience: ____; preferred days: ____.",
        "你好，我想查詢何文田兒童漫畫班／體驗堂。年齡：＿＿；繪畫經驗：＿＿；方便日子：＿＿。"
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
                <span>${t("Comic Drawing", "卡通漫畫班")}</span>
              </nav>
              <p class="hero-eyebrow">${t("Ho Man Tin · near Pui Ching · ages 8+", "何文田・培正附近・8歲以上兒童漫畫班")}</p>
              <div class="hero-title-chip">
                <h1 id="hero-title">${t("Kids’ Comic Drawing Class in Ho Man Tin", "何文田兒童漫畫班 學畫卡通人物｜角色設計｜漫畫創作")}</h1>
                <p class="hero-sub">${t("Cartoon figures · character design · comic creation", "卡通人物繪畫・角色設計・漫畫創作")}</p>
              </div>
              <p class="hero-lead">
                ${t(
                  "IC Academy’s Ho Man Tin comic class is for children and teens aged 8+. Start with lines, figure proportion and expressions, then comic figures, character design and composition. In a small class, children can turn ideas into original characters and comics — building drawing skill, creativity and confidence.",
                  "IC Academy何文田卡通漫畫班專為8歲以上兒童及青少年而設，由基本線條、人物比例及表情開始，逐步學習漫畫人物繪畫、角色設計與畫面構圖。透過小班漫畫教學，孩子可以把自己的想法發展成獨特角色及漫畫作品，建立繪畫技巧、創作能力與表達自信。"
                )}
              </p>
              <div class="btn-row">
                <a class="btn btn-coral" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("Ask about class times", "查詢上課時間")}</a>
                <button type="button" class="btn btn-outline-teal" data-action="scroll-details">${t("See course details", "查看課程詳情")}</button>
              </div>
            </div>
          </div>
        </section>

        <section class="section" style="padding-top:0;padding-bottom:40px" aria-label="${t("Class facts", "課程重點")}">
          <div class="wrap">
            <div class="trust">
              <div class="trust-item">✓ ${t("5-min walk from Pui Ching", "培正小學附近")}<span>${t("About a 5-minute walk", "步行約5分鐘")}</span></div>
              <div class="trust-item">✓ ${t("Small class 4–6", "小班教學 4–6人")}<span>${t("Max 6, individual guidance", "最多6人，個別指導")}</span></div>
              <div class="trust-item">✓ ${t("Ages 8+", "適合8歲以上")}<span>${t("Children and teens", "兒童及青少年")}</span></div>
              <div class="trust-item">✓ ${t("1 hour per class", "每堂1小時")}<span>${t("Mon, Wed, Fri, Sat", "星期一、三、五、六")}</span></div>
            </div>
          </div>
        </section>

        <section class="section section-soft" aria-labelledby="why-title">
          <div class="wrap">
            <h2 class="section-title" id="why-title">${t("Why this kids’ comic class?", "為什麼選擇IC Academy 兒童漫畫班？")}</h2>
            <p class="section-lead">
              ${t(
                "Cartoon figures, character design, expressions, action and comic creation.",
                "卡通人物繪畫・角色設計・表情動作・漫畫創作"
              )}
            </p>
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
                <h2 id="details-title">${t("Kids’ comic class details", "卡通漫畫班・兒童漫畫課程詳情")}</h2>
                <p class="hero-sub" style="margin:0 0 12px;font-size:1.05rem">${t("Ages 8+ · max 6 · 1 hour · Ho Man Tin", "適合8歲以上｜小班最多6人｜每堂1小時｜何文田兒童漫畫班")}</p>
                <p class="detail-lead">
                  ${t(
                    "The comic class moves step by step: simple forms, then figure proportion, expressions, hair, costume, action and composition. Students are not only copying — they add their own ideas and design original characters with personality and a story.",
                    "IC Academy卡通漫畫班透過循序漸進的漫畫教學，帶領孩子由簡單造型開始，學習人物比例、臉部表情、髮型、服飾、動作及畫面構圖。課堂不只要求孩子模仿，更鼓勵他們加入自己的創意，設計具有個性及故事背景的原創角色。"
                  )}
                </p>
                <p class="detail-lead">
                  ${t(
                    "The teacher adjusts by age and drawing level, so beginners can learn the basics, and experienced students can improve action, character detail and how the picture reads.",
                    "導師會按照學生的年齡及繪畫程度調整教學內容，讓初學者掌握基本技巧，已有繪畫經驗的學生亦可進一步改善人物動作、角色細節及漫畫畫面表達。"
                  )}
                </p>
                <ul class="check-list">
                  ${LEARNING.map((item) => `<li>${this.pick(item)}</li>`).join("")}
                </ul>
                <a class="btn btn-coral" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("Ask about this class", "查詢課程詳情")}</a>
              </div>
              <div class="detail-media">
                <img src="${IMG.detail}" alt="${t("ICAcademy student comic character design", "ICAcademy學生漫畫角色設計作品")}" width="800" height="1000" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        <section class="section section-soft" aria-labelledby="features-title">
          <div class="wrap">
            <h2 class="section-title" id="features-title">${t("What the class focuses on", "課堂學習重點")}</h2>
            <div class="features-grid">
              ${FEATURES.map(
                (item) => `
                <article class="feature-card">
                  <h3>${this.pick(item.title)}</h3>
                  <p>${this.pick(item.desc)}</p>
                </article>`
              ).join("")}
            </div>
          </div>
        </section>

        <section class="section" aria-labelledby="gallery-title">
          <div class="wrap">
            <h2 class="section-title" id="gallery-title">${t("Student artwork", "學員作品展示")}</h2>
            <p class="section-lead">${t("A complete piece each class — watch drawing and storytelling grow.", "每堂一件完整作品，見證孩子的創作成長")}</p>
            <div class="gallery-grid">
              <figure><img src="${IMG.gallery1}" alt="${t("Comic drawing student work", "漫畫學員作品")}" loading="lazy" /><figcaption>${t("Student work", "學員作品")}</figcaption></figure>
              <figure><img src="${IMG.gallery2}" alt="${t("Student comic character design", "學生漫畫角色設計作品")}" loading="lazy" /><figcaption>${t("Student work", "學員作品")}</figcaption></figure>
              <figure><img src="${IMG.gallery3}" alt="${t("Comic class student work", "漫畫課程學員作品")}" loading="lazy" /><figcaption>${t("Student work", "學員作品")}</figcaption></figure>
              <figure><img src="${IMG.gallery4}" alt="${t("Comic illustration student work", "漫畫插畫學員作品")}" loading="lazy" /><figcaption>${t("Student work", "學員作品")}</figcaption></figure>
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

        <section class="section" aria-labelledby="fit-title">
          <div class="wrap">
            <h2 class="section-title" id="fit-title">${t("Who is this class for?", "適合甚麼小朋友？")}</h2>
            <p class="section-lead" style="margin-bottom:0">
              ${t(
                "For children aged 8+ who like cartoons, comics and character creation, and want drawing skill plus original characters and stories. Also for students with some drawing experience who want to improve proportion, expression, action and character design.",
                "適合喜歡卡通、漫畫及人物創作，希望學習繪畫技巧，並將自己的想法變成原創角色及故事的8歲以上小朋友；亦適合已有基本繪畫經驗，希望進一步改善人物比例、表情、動作及角色設計的學生。"
              )}
            </p>
          </div>
        </section>

        <section class="section section-soft" aria-labelledby="quotes-title">
          <div class="wrap">
            <blockquote class="studio-quote">
              ${t(
                "“Not only copying a look — learn to turn an idea into an original character and a comic picture.”",
                "「不只臨摹造型，而是學懂把想法變成原創角色與漫畫畫面。」"
              )}
              <cite>— ${t("IC Academy Comic Drawing Class", "IC Academy 兒童漫畫班")}</cite>
            </blockquote>
            <h2 class="section-title" id="quotes-title" style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)">${t("What families say", "學員與家長分享")}</h2>
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
            <p class="section-lead">${t("This page is the comic drawing course. Other kids art paths have their own pages.", "本頁是兒童漫畫班課程。其他兒童美術方向請見相關課程頁。")}</p>
            <div class="silo-links" style="margin-bottom:28px">
              <a data-action="hub" href="${siloUrl}">${t("Kids Art overview", "兒童美術總覽")}</a>
              <a data-action="hub" href="${kidsListingUrl}">${t("Kids art classes", "兒童畫班一覽")}</a>
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
              <h2 id="trial-title">${t("Ask about the Ho Man Tin comic class", "立即查詢何文田兒童漫畫班")}</h2>
              <p>${t(
                "Small groups of up to 6. WhatsApp us for class times and a trial.",
                "小班最多6人，歡迎WhatsApp查詢上課時間及體驗安排"
              )}</p>
              <div class="btn-row">
                <a class="btn btn-teal" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("WhatsApp to enquire", "查詢上課時間")}</a>
                <a class="btn btn-ghost" data-action="hub" href="${trialUrl}">${t("How the trial works", "了解試堂詳情")}</a>
              </div>
            </div>
          </div>
        </section>

        <section class="final" aria-labelledby="final-title">
          <h2 id="final-title">${t("Ask about kids’ comic drawing in Ho Man Tin", "立即查詢何文田兒童漫畫班")}</h2>
          <p>${t("Max 6 per class. WhatsApp us for the timetable and a trial.", "小班最多6人，歡迎WhatsApp查詢上課時間及體驗安排")}</p>
          <div class="btn-row">
            <a class="btn btn-coral" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("WhatsApp", "WhatsApp 查詢")}</a>
            <a class="btn btn-outline-white" data-action="hub" href="${siloUrl}">${t("Back to Kids Art", "返回兒童美術")}</a>
          </div>
        </section>
      </div>
    `;

    this._applyFullBleedCss();
    this._observeHeight();
  }
}

customElements.define("comic-drawing-hub", ComicDrawingHub);
