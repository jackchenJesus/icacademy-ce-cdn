/**
 * ICAcademy Visual Art Class — course landing (not a hub)
 * Tag name: visual-art-class-hub
 * Version: 2026-08-16-v1 (smaller mobile type)
 *
 * Parent silo hub: Kids Art
 * Canonical:
 *   EN: /course/kids-art/visual-art-class
 *   ZH: /zh/course/kids-art/visual-art-class
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
  hero: mediaUrl("b98cc9_ebe4308b54a24d24b9be7d03605ac494~mv2.jpg", 1600, 1000),
  gallery1: mediaUrl("b98cc9_ebe4308b54a24d24b9be7d03605ac494~mv2.jpg", 800, 800),
  gallery2: mediaUrl("b98cc9_2811c03afb09487fb93b5356133bd57b~mv2.jpg", 800, 800),
  gallery3: mediaUrl("b98cc9_4207ae71d0a44db99d86eeadc8e54f33~mv2.jpeg", 800, 800),
  gallery4: mediaUrl("b98cc9_938e779278dc4be38ad8c06a48102fc1~mv2.jpg", 800, 800),
  detail: mediaUrl("b98cc9_2811c03afb09487fb93b5356133bd57b~mv2.jpg", 800, 1000),
};

const WHY = [
  {
    title: { en: "Explore different art media", zh: "探索不同藝術媒介" },
    desc: {
      en: "Use drawing, acrylic and mixed media by topic, and learn how each material behaves.",
      zh: "按課題運用素描、塑膠彩及混合媒介，理解不同材料的特性、效果與表達方式。",
    },
  },
  {
    title: { en: "From skill to a finished work", zh: "由技巧走向完整作品" },
    desc: {
      en: "Not only one technique — plan the theme, gather references, compose, colour, revise and finish.",
      zh: "不只練習單一技法，更重視主題構思、資料搜集、構圖、用色、修正與作品完成度。",
    },
  },
  {
    title: { en: "Build a personal direction", zh: "發展個人創作方向" },
    desc: {
      en: "The teacher advises by level and interest, so you can choose subjects and develop your own visual voice.",
      zh: "導師按學員程度及興趣給予個別建議，幫助建立選材判斷、審美與個人視覺表達。",
    },
  },
];

const FEATURES = [
  {
    title: { en: "Adjusted to your level", zh: "按程度及方向調整" },
    desc: {
      en: "The same topic can use different skills and finish requirements, matched to each student.",
      zh: "同一課題可按學員能力安排不同技巧和完成要求。",
    },
  },
  {
    title: { en: "Mixed media, not repeats", zh: "多媒介而不重複" },
    desc: {
      en: "The focus is choosing the right medium for the theme — different from a drawing-only or acrylic-only class.",
      zh: "課程着重如何選擇合適媒介表達主題，與單一素描班或塑膠彩班定位不同。",
    },
  },
  {
    title: { en: "Small-group guidance", zh: "小班個別指導" },
    desc: {
      en: "Maximum 6 students, so the teacher can follow each work in progress.",
      zh: "每班最多6人，導師可按每位學員的基礎、媒介運用及作品發展提供個別指導。",
    },
  },
];

const LEARNING = [
  { en: "Drawing, acrylic and other visual-art media", zh: "接觸素描、塑膠彩及不同視覺藝術媒介" },
  { en: "Observation, composition, colour, texture and space", zh: "學習觀察、構圖、色彩、質感與空間表現" },
  { en: "From theme and research to a finished piece", zh: "由主題構思、資料搜集到完成作品" },
  { en: "Maximum 6 per class, with guidance by level", zh: "每班最多6人，導師按程度作個別指導" },
  { en: "1 hour 10 minutes; Thursday, Friday and Saturday", zh: "每堂1小時10分鐘；星期四、五、六設課" },
];

const STEPS = [
  {
    step: "1",
    title: { en: "Theme and direction", zh: "主題與方向" },
    desc: {
      en: "Understand the brief, references and purpose, then set a direction that fits you.",
      zh: "了解課題要求、參考資料及創作目的，確立適合自己的表達方向。",
    },
  },
  {
    step: "2",
    title: { en: "Ideas and sketches", zh: "構思與草圖" },
    desc: {
      en: "Sort visual notes, try layouts, proportion and colour, then pick a design.",
      zh: "整理視覺資料，嘗試不同構圖、比例及色彩方案，再選出合適設計。",
    },
  },
  {
    step: "3",
    title: { en: "Medium and technique", zh: "媒介與技法" },
    desc: {
      en: "Choose materials for the theme. The teacher demos key skills as you build layers and texture.",
      zh: "按主題選擇材料，由導師示範重點技法，逐步發展畫面層次與質感。",
    },
  },
  {
    step: "4",
    title: { en: "Revise and finish", zh: "修正與完成" },
    desc: {
      en: "Check the whole picture, details and focal points, then refine and review the process.",
      zh: "檢視作品整體效果、細節及視覺重點，作最後調整並回顧創作過程。",
    },
  },
];

const QUOTES = [
  {
    text: {
      en: "The teacher is patient and explains each child’s progress clearly. We look forward to growing here.",
      zh: "老師好有耐性講解小朋友既情況！期待繼續喺度成長！",
    },
    by: { en: "Student", zh: "學員" },
  },
  {
    text: {
      en: "Friendly teachers, a clean studio, and a good range of courses.",
      zh: "老師友善，環境乾淨，課程多元化。",
    },
    by: { en: "Student", zh: "學員" },
  },
  {
    text: {
      en: "Our son and daughter have taken art classes here for years. The teaching is excellent.",
      zh: "兒子及女兒已經在這間美術學校上堂多年，師資優良。",
    },
    by: { en: "Student", zh: "學員" },
  },
];

const FAQ = [
  {
    q: { en: "What age and level is Visual Art Class for?", zh: "綜合美術課程適合幾歲及甚麼程度？" },
    a: {
      en: "Ages 14+. Beginners can build composition, colour and media skill; experienced students can develop technique, finished work and a personal direction.",
      zh: "課程適合14歲以上學員。初學者可以建立構圖、色彩及媒介運用基礎；已有經驗的學員可進一步發展技法、完整作品及個人創作方向。",
    },
  },
  {
    q: { en: "Which media will we use?", zh: "綜合美術課程會學甚麼媒介？" },
    a: {
      en: "Topics may include drawing, acrylic and other visual-art media. Materials follow level, theme and direction.",
      zh: "課程可按課題接觸素描、塑膠彩及不同視覺藝術媒介，實際材料與內容會按學員程度、主題和創作方向安排。",
    },
  },
  {
    q: { en: "How is this different from sketching or acrylic class?", zh: "綜合美術課程與素描班、塑膠彩班有甚麼分別？" },
    a: {
      en: "Sketching and acrylic classes go deeper into one medium. This course focuses on mixed media, theme development and complete work — for students who want a broader visual language.",
      zh: "素描班及塑膠彩班集中深化指定畫種；綜合美術課程則以多媒介探索、主題發展及完整創作為重點，適合希望擴闊藝術技巧和表達方式的學員。",
    },
  },
  {
    q: { en: "How many students per class?", zh: "每班有多少人？" },
    a: {
      en: "Maximum 6, so the teacher can guide each student’s foundation, media use and work in progress.",
      zh: "每班最多6人，讓導師可按每位學員的基礎、媒介運用及作品發展提供個別指導。",
    },
  },
  {
    q: { en: "How long is a class, and which days?", zh: "上課時間及課堂長度是甚麼？" },
    a: {
      en: "1 hour 10 minutes. Current sessions: Thursday, Friday and Saturday. Ask on WhatsApp for times and places.",
      zh: "每堂1小時10分鐘，現時星期四、星期五及星期六設有課堂；實際時段及剩餘學位請透過WhatsApp查詢。",
    },
  },
  {
    q: { en: "Can I book a trial?", zh: "可以先預約試堂嗎？" },
    a: {
      en: "Yes. Regular courses can book an HK$100 trial. WhatsApp us for a suitable class, date and time.",
      zh: "可以。所有常規課程均可預約HK$100試堂；請透過WhatsApp查詢合適班別、日期及時間。",
    },
  },
  {
    q: { en: "Where is the studio?", zh: "畫室位於哪裡？" },
    a: {
      en: "IC Academy is at Ground Floor Shop 3, 79 Waterloo Road, Ho Man Tin, Kowloon — about a 5-minute walk from Pui Ching.",
      zh: "IC Academy 位於九龍何文田窩打老道79號地下3號舖，鄰近培正小學及中學，步行約5分鐘可到。",
    },
  },
];

const RELATED = [
  {
    title: { en: "Kids Art Classes", zh: "兒童畫班" },
    desc: { en: "Kids visual art · from first marks to secondary portfolio", zh: "視覺藝術課程 · 塗鴉至升中 Portfolio" },
    hrefSlug: "/course/kids-art/kids-art-classes-homantin",
  },
  {
    title: { en: "Visual Art Skills", zh: "視藝技巧課程" },
    desc: { en: "Preparatory / foundation · drawing and art basics", zh: "預備／基礎課程 · 建立視藝基礎" },
    hrefSlug: "/course/kids-art/visual-art-skills-course",
  },
  {
    title: { en: "Acrylic Painting Class", zh: "塑膠彩班課程" },
    desc: { en: "Ages 14+ · colour, brushwork and a finished painting", zh: "14歲以上 · 色彩、筆觸與完整畫作" },
    hrefSlug: "/course/drawing-and-painting/acrylic-painting-class",
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

class VisualArtClassHub extends HTMLElement {
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
          if (h1 && /Visual Art Class in Ho Man Tin/i.test(h1.textContent || "")) this.render();
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
    const bleed = document.getElementById("visual-art-class-hub-page-bleed");
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
    const id = "visual-art-class-hub-page-bleed";
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
      visual-art-class-hub {
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
    const trialUrl = this.path("/homantin-children-art-trial");
    const galleryUrl = this.isEn
      ? "https://www.icacademy.com.hk/studentartwork"
      : "https://www.icacademy.com.hk/zh/studentartwork";
    const homeUrl = this.isEn ? "https://www.icacademy.com.hk" : "https://www.icacademy.com.hk/zh";

    const waPrefill = this._waPrefill(
      t(
        "Hi, I’d like to ask about the Visual Art Class in Ho Man Tin / a trial. Age: ____; art experience: ____; preferred days: ____.",
        "你好，我想查詢何文田綜合美術課程／體驗堂。年齡：＿＿；繪畫經驗：＿＿；方便日子：＿＿。"
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
                <span>${t("Visual Art Class", "綜合美術課程")}</span>
              </nav>
              <p class="hero-eyebrow">${t("Ho Man Tin · near Pui Ching · ages 14+ small class", "何文田・培正附近・14歲以上小班教學")}</p>
              <div class="hero-title-chip">
                <h1 id="hero-title">${t("Visual Art Class in Ho Man Tin", "何文田綜合美術課程")}</h1>
                <p class="hero-sub">${t("Explore media and build your own direction", "探索媒介，建立個人創作方向")}</p>
              </div>
              <p class="hero-lead">
                ${t(
                  "IC Academy Visual Art Class is for ages 14+. We combine drawing, acrylic and other visual media. Practice is matched to your level and direction, so you can strengthen observation, composition, colour, technique and finished work.",
                  "IC Academy 綜合美術課程適合14歲以上青少年及學員。課程結合素描、塑膠彩與不同視覺藝術媒介，按個人程度及創作方向安排練習，逐步提升觀察、構圖、色彩、技法與完整作品表達。"
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
              <div class="trust-item">✓ ${t("Ages 14+", "14歲以上")}<span>${t("Teens and adults", "青少年及成人")}</span></div>
              <div class="trust-item">✓ ${t("Max 6 per class", "每班最多6人")}<span>${t("Individual guidance", "小班個別指導")}</span></div>
              <div class="trust-item">✓ ${t("1 hour 10 minutes", "每堂1小時10分鐘")}<span>${t("Ask for the latest times", "時段請向畫室查詢")}</span></div>
              <div class="trust-item">✓ ${t("Thursday, Friday, Saturday", "星期四、五、六")}<span>${t("Current timetable", "現有課程安排")}</span></div>
            </div>
          </div>
        </section>

        <section class="section section-soft" aria-labelledby="why-title">
          <div class="wrap">
            <h2 class="section-title" id="why-title">${t("Why choose Visual Art Class?", "為甚麼選擇綜合美術課程？")}</h2>
            <p class="section-lead">
              ${t(
                "When you no longer want to follow only one subject, this course lets you try different media and methods, and find a direction that fits.",
                "當學員已經不只想跟隨單一題材，綜合課程可以讓他們接觸不同媒介和創作方法，在實踐中找出適合自己的方向。"
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
                <h2 id="details-title">${t("Visual Art Class details", "綜合美術課程・課程詳情")}</h2>
                <p class="hero-sub" style="margin:0 0 12px;font-size:1.05rem">${t("Ages 14+ · Max 6 · teen art class in Ho Man Tin", "適合14歲以上｜最多6人小班｜何文田青少年美術班")}</p>
                <p class="detail-lead">
                  ${t(
                    "The course centres on mixed-media making and more advanced skill. Students work with drawing, colour, acrylic and mixed media by theme, and learn to turn observation, ideas and research into a finished piece. Depth is adjusted to foundation, interest and goals.",
                    "課程以多媒介創作及進階技巧為核心，學員會按主題接觸素描、色彩、塑膠彩及混合媒介等創作方式，學習如何把觀察、想法與資料轉化成完整作品。導師會因應學員的基礎、興趣及創作目標調整課題深度。"
                  )}
                </p>
                <p class="detail-lead">
                  ${t(
                    "Beginners can build composition, colour and media skill. Experienced students can strengthen work development, technique choice and personal expression. This is an ongoing visual-art course, not a single-medium class.",
                    "初學者可逐步建立構圖、色彩及媒介運用基礎；已有經驗的學員則可加強作品發展、技法選擇及個人表達。這是一個持續發展視覺藝術能力的常規課程，並非只教授單一畫種。"
                  )}
                </p>
                <ul class="check-list">
                  ${LEARNING.map((item) => `<li>${this.pick(item)}</li>`).join("")}
                </ul>
                <a class="btn btn-coral" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("Ask about this class", "查詢課程詳情")}</a>
              </div>
              <div class="detail-media">
                <img src="${IMG.detail}" alt="${t("ICAcademy Visual Art Class student work", "ICAcademy綜合美術課程學員作品")}" width="800" height="1000" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        <section class="section section-soft" aria-labelledby="features-title">
          <div class="wrap">
            <h2 class="section-title" id="features-title">${t("How the regular class is taught", "常規課程特色")}</h2>
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
            <h2 class="section-title" id="gallery-title">${t("Student artwork", "學員綜合美術作品展示")}</h2>
            <p class="section-lead">${t("From media practice to complete work — composition, colour, technique and personal expression.", "由媒介練習到完整創作，展示學員在構圖、色彩、技法及個人表達上的進步。")}</p>
            <div class="gallery-grid">
              <figure><img src="${IMG.gallery1}" alt="${t("Visual Art Class student work", "綜合美術學員作品")}" loading="lazy" /><figcaption>${t("Student work", "學員作品")}</figcaption></figure>
              <figure><img src="${IMG.gallery2}" alt="${t("Visual Art Class student work", "綜合美術學員作品")}" loading="lazy" /><figcaption>${t("Student work", "學員作品")}</figcaption></figure>
              <figure><img src="${IMG.gallery3}" alt="${t("Visual Art Class student work", "綜合美術學員作品")}" loading="lazy" /><figcaption>${t("Student work", "學員作品")}</figcaption></figure>
              <figure><img src="${IMG.gallery4}" alt="${t("Visual Art Class student work", "綜合美術學員作品")}" loading="lazy" /><figcaption>${t("Student work", "學員作品")}</figcaption></figure>
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

        <section class="section" aria-labelledby="quotes-title">
          <div class="wrap">
            <blockquote class="studio-quote">
              ${t(
                "“The teacher guides each student by level. A small class makes it easier to focus, with enough time to develop and improve the work.”",
                "「老師會按每位學員的程度逐步指導，小班環境讓學員更容易專注，亦有足夠時間發展及改善自己的作品。」"
              )}
              <cite>— ${t("IC Academy Visual Art Class", "IC Academy 綜合美術課程")}</cite>
            </blockquote>
            <h2 class="section-title" id="quotes-title" style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)">${t("What students say", "學員分享")}</h2>
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

        <section class="section section-soft" aria-labelledby="faq-title">
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

        <section class="section" aria-labelledby="explore-title">
          <div class="wrap">
            <h2 class="section-title" id="explore-title">${t("Explore more courses", "探索更多課程")}</h2>
            <p class="section-lead">${t("This page is the Visual Art Class for ages 14+. Other courses have their own pages.", "本頁是14歲以上綜合美術課程。其他課程請見相關頁面。")}</p>
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

        <section class="section section-soft" aria-labelledby="trial-title">
          <div class="wrap">
            <div class="trial">
              <div class="trial-badge">${t("HK$100 trial", "HK$100 試堂")}</div>
              <h2 id="trial-title">${t("Try the Visual Art Class first", "綜合美術課程試堂")}</h2>
              <p>${t(
                "Experience the studio, teaching style and creative process. WhatsApp us with age, art experience and preferred times — we will help match a suitable class.",
                "讓學員親身體驗課堂氣氛、教學方式及創作流程。WhatsApp告訴我們年齡、繪畫經驗及方便時間，我們會協助安排合適班別。"
              )}</p>
              <div class="btn-row">
                <a class="btn btn-teal" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("WhatsApp to book", "WhatsApp 預約試堂")}</a>
                <a class="btn btn-ghost" data-action="hub" href="${trialUrl}">${t("How the trial works", "了解試堂詳情")}</a>
              </div>
            </div>
          </div>
        </section>

        <section class="final" aria-labelledby="final-title">
          <h2 id="final-title">${t("Ask about Visual Art Class in Ho Man Tin", "立即查詢綜合美術課程")}</h2>
          <p>${t("Ages 14+, max 6 per class. WhatsApp us for times, places and an HK$100 trial.", "14歲以上、最多6人小班，歡迎WhatsApp查詢上課時間、剩餘學位及HK$100試堂。")}</p>
          <div class="btn-row">
            <a class="btn btn-coral" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("Book a trial", "立即預約體驗")}</a>
            <a class="btn btn-outline-white" data-action="hub" href="${siloUrl}">${t("Back to Kids Art", "返回兒童美術")}</a>
          </div>
        </section>
      </div>
    `;

    this._applyFullBleedCss();
    this._observeHeight();
  }
}

customElements.define("visual-art-class-hub", VisualArtClassHub);
