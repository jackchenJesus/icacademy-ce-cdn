/**
 * ICAcademy Courses Hub – Custom Element
 * Tag name: courses-hub
 * Editor: Assign this Velo file + set ID #coursesHub (recommended)
 */
const WA_DEFAULT = "https://wa.me/85265808022";
const GALLERY_URL = "/zh/gallery";

const IMG = {
  hero:
    "https://static.wixstatic.com/media/b98cc9_169d3a5d148b4e7cb6c5dcdd66541734~mv2.jpeg/v1/fill/w_1400,h_900,al_c,q_85,enc_avif,quality_auto/b98cc9_169d3a5d148b4e7cb6c5dcdd66541734~mv2.jpeg",
  work1:
    "https://static.wixstatic.com/media/4ea940_ffa9827e993b46ff8c39685739d93bf6~mv2.jpeg/v1/fill/w_800,h_800,al_c,q_85,enc_avif,quality_auto/4ea940_ffa9827e993b46ff8c39685739d93bf6~mv2.jpeg",
  work2:
    "https://static.wixstatic.com/media/b98cc9_0c14e8485e804aafb82d0470a5bbfbc9~mv2.jpeg/v1/fill/w_1200,h_600,al_c,q_85,enc_avif,quality_auto/b98cc9_0c14e8485e804aafb82d0470a5bbfbc9~mv2.jpeg",
  work3:
    "https://static.wixstatic.com/media/b98cc9_ca9ccd28333f4917b208b65fcf0fa49b~mv2.jpeg/v1/fill/w_1200,h_600,al_c,q_85,enc_avif,quality_auto/b98cc9_ca9ccd28333f4917b208b65fcf0fa49b~mv2.jpeg",
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
    image: IMG.work2,
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
    image: IMG.work2,
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
    image: IMG.work1,
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
    image: IMG.work1,
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
    image: IMG.work3,
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
    image: IMG.work1,
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
    image: IMG.work3,
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
    image: IMG.work2,
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
    image: IMG.work3,
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
    image: IMG.work1,
    imageAlt: "ICAcademy塑膠彩課程學生作品",
  },
];

const INTERESTS = [
  {
    id: "painting",
    title: "創意繪畫與多元媒介",
    desc: "色彩、構圖與主題創作",
    href: "/zh/courses/creative-art-classes",
  },
  {
    id: "foundation",
    title: "視藝基礎",
    desc: "3–7歲啟蒙與繪畫基礎",
    href: "/zh/courses/visual-art-skills-course",
  },
  {
    id: "clay",
    title: "黏土與立體創作",
    desc: "塑形、結構與空間感",
    href: "/zh/courses/creative-art-and-clay-class",
  },
  {
    id: "comic",
    title: "卡通漫畫與角色設計",
    desc: "人物、表情與漫畫構圖",
    href: "/zh/courses/comic-drawing-class",
  },
  {
    id: "sketch",
    title: "素描、光暗與質感",
    desc: "觀察、比例與鉛筆技巧",
    href: "/zh/courses/sketching-class",
  },
  {
    id: "teen",
    title: "青少年專業藝術及進階創作",
    desc: "多媒介與個人創作方向",
    href: "/zh/courses/visual-art-class",
  },
];

const FAQ = [
  {
    q: "小朋友沒有學過畫畫，可以參加嗎？",
    a: "不同課程適合不同年齡及程度。初學者可由基礎技巧開始，報名前亦可先提供小朋友的年齡和經驗作查詢。",
  },
  {
    q: "應該怎樣選擇課程？",
    a: "可按小朋友的年齡、現有經驗及興趣方向選擇。未確定的家長可透過WhatsApp查詢，我們會協助了解較合適的方向。",
  },
  {
    q: "課程會使用哪些藝術物料？",
    a: "不同課程會使用不同繪畫及創作媒介，實際安排請參閱個別課程頁或報名前查詢。",
  },
  {
    q: "可以先參加試堂嗎？",
    a: "試堂安排及適合時段請透過WhatsApp查詢最新資料。告訴我們小朋友的年齡、繪畫經驗和方便時間，我們會協助了解合適班別。",
  },
  {
    q: "在哪裏上課？",
    a: "IC Academy位於九龍窩打老道79F地下3號鋪（何文田），鄰近培正小學及中學。",
  },
];

const STYLES = `
:host {
  display: block;
  width: 100%;
  min-height: 3200px;
  box-sizing: border-box;
  --bg: #f6f3ee;
  --bg-soft: #eef3f1;
  --surface: #ffffff;
  --ink: #151414;
  --muted: #5c5a57;
  --line: #e4ddd3;
  --accent: #2f6f73;
  --accent-deep: #24575a;
  --whatsapp: #128c7e;
  --radius: 14px;
  --shadow: 0 10px 28px rgba(21, 20, 20, 0.06);
  --font: "Avenir Next", "Segoe UI", "PingFang TC", "Microsoft JhengHei", "Noto Sans TC", sans-serif;
  color: var(--ink);
  font-family: var(--font);
  line-height: 1.65;
  font-size: 16px;
  background: var(--bg);
}
*, *::before, *::after { box-sizing: border-box; }
a { color: inherit; }
img { max-width: 100%; display: block; }
.wrap { width: min(1120px, calc(100% - 32px)); margin: 0 auto; }
.section { padding: 56px 0; }
.section-alt { background: var(--bg-soft); }
.eyebrow {
  display: inline-block;
  letter-spacing: 0.08em;
  text-transform: none;
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--accent-deep);
  margin: 0 0 10px;
}
h1, h2, h3 { line-height: 1.25; margin: 0 0 12px; font-weight: 700; }
h1 { font-size: clamp(1.75rem, 4vw, 2.55rem); max-width: 18ch; }
h2 { font-size: clamp(1.45rem, 3vw, 2rem); }
h3 { font-size: 1.1rem; }
.lead { color: var(--muted); margin: 0 0 20px; max-width: 56ch; font-size: 1.02rem; }
.btn-row { display: flex; flex-wrap: wrap; gap: 12px; }
.btn {
  appearance: none;
  border: 0;
  border-radius: 999px;
  min-height: 48px;
  padding: 12px 22px;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: transform .15s ease, background .15s ease, color .15s ease;
}
.btn:focus-visible { outline: 3px solid #7fc6c3; outline-offset: 3px; }
.btn:hover { transform: translateY(-1px); }
.btn-primary { background: var(--accent); color: #fff; }
.btn-primary:hover { background: var(--accent-deep); }
.btn-secondary { background: transparent; color: var(--accent-deep); border: 1.5px solid var(--accent); }
.btn-wa { background: var(--whatsapp); color: #fff; }
.btn-ghost { background: var(--surface); color: var(--ink); border: 1px solid var(--line); }
.hero {
  padding: 40px 0 28px;
  background:
    radial-gradient(circle at 12% 18%, rgba(47,111,115,.12), transparent 42%),
    radial-gradient(circle at 88% 0%, rgba(196,140,92,.10), transparent 36%),
    var(--bg);
}
.hero-grid {
  display: grid;
  gap: 28px;
  align-items: center;
}
@media (min-width: 900px) {
  .hero-grid { grid-template-columns: 1.05fr 0.95fr; gap: 40px; }
}
.hero-media {
  border-radius: calc(var(--radius) + 4px);
  overflow: hidden;
  box-shadow: var(--shadow);
  background: #ddd;
  aspect-ratio: 4 / 3;
}
.hero-media img { width: 100%; height: 100%; object-fit: cover; }
.trust {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 22px;
}
@media (min-width: 700px) {
  .trust { grid-template-columns: repeat(4, 1fr); }
}
.trust span {
  background: rgba(255,255,255,.72);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 12px 14px;
  font-size: 0.92rem;
  font-weight: 600;
}
.age-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 18px 0 22px;
}
.age-tabs button {
  min-height: 44px;
  border-radius: 999px;
  border: 1px solid var(--line);
  background: var(--surface);
  padding: 8px 14px;
  font: inherit;
  cursor: pointer;
}
.age-tabs button[aria-pressed="true"] {
  background: var(--accent);
  border-color: var(--accent);
  color: #fff;
}
.card-grid {
  display: grid;
  gap: 16px;
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
.card.is-dimmed { opacity: 0.38; }
.card-media { aspect-ratio: 16 / 10; background: #ebe6df; overflow: hidden; }
.card-media img { width: 100%; height: 100%; object-fit: cover; }
.card-body { padding: 18px 18px 20px; display: flex; flex-direction: column; gap: 10px; flex: 1; }
.meta {
  display: inline-flex;
  align-self: flex-start;
  background: var(--bg-soft);
  color: var(--accent-deep);
  border-radius: 999px;
  padding: 4px 10px;
  font-size: 0.84rem;
  font-weight: 700;
}
.points { margin: 0; padding-left: 1.1rem; color: var(--muted); }
.points li { margin: 0.2rem 0; }
.card-actions { margin-top: auto; padding-top: 8px; }
.interest-card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 20px;
  text-decoration: none;
  min-height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: border-color .15s ease, transform .15s ease;
}
.interest-card:hover { border-color: var(--accent); transform: translateY(-2px); }
.interest-card p { margin: 0; color: var(--muted); }
.compare-table { width: 100%; border-collapse: collapse; display: none; }
@media (min-width: 860px) {
  .compare-table { display: table; background: var(--surface); border-radius: var(--radius); overflow: hidden; }
  .compare-cards { display: none; }
}
.compare-table th, .compare-table td {
  text-align: left;
  padding: 14px 16px;
  border-bottom: 1px solid var(--line);
  vertical-align: top;
}
.compare-table th { background: #e8efee; font-size: 0.92rem; }
.compare-cards { display: grid; gap: 12px; }
.compare-card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 16px;
}
.compare-card dl { margin: 0; }
.compare-card dt { font-size: 0.78rem; color: var(--muted); margin-top: 8px; }
.compare-card dd { margin: 2px 0 0; font-weight: 600; }
.approach-grid { display: grid; gap: 14px; }
@media (min-width: 800px) { .approach-grid { grid-template-columns: repeat(2, 1fr); } }
.approach {
  background: var(--surface);
  border-left: 4px solid var(--accent);
  border-radius: 0 var(--radius) var(--radius) 0;
  padding: 18px 18px 18px 16px;
}
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}
@media (min-width: 800px) { .gallery-grid { grid-template-columns: repeat(4, 1fr); } }
.gallery-grid figure {
  margin: 0;
  border-radius: 12px;
  overflow: hidden;
  background: #ddd;
  aspect-ratio: 1;
}
.gallery-grid img { width: 100%; height: 100%; object-fit: cover; }
.gallery-grid figcaption {
  position: absolute;
  width: 1px; height: 1px;
  padding: 0; margin: -1px;
  overflow: hidden; clip: rect(0,0,0,0); border: 0;
}
.help {
  background: linear-gradient(135deg, #e7f1ef, #f4efe7);
  border: 1px solid var(--line);
  border-radius: calc(var(--radius) + 4px);
  padding: 28px 22px;
}
.faq details {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 0;
  margin: 0 0 10px;
}
.faq summary {
  list-style: none;
  cursor: pointer;
  min-height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 14px 16px;
  font-weight: 700;
}
.faq summary::-webkit-details-marker { display: none; }
.faq summary:focus-visible { outline: 3px solid #7fc6c3; outline-offset: 2px; }
.faq-icon {
  width: 28px; height: 28px; border-radius: 50%;
  border: 1.5px solid var(--accent);
  display: inline-flex; align-items: center; justify-content: center;
  flex: 0 0 auto;
  color: var(--accent-deep);
  font-weight: 700;
}
.faq details[open] .faq-icon { background: var(--accent); color: #fff; }
.faq .answer { padding: 0 16px 16px; color: var(--muted); margin: 0; }
.final {
  text-align: center;
  background: var(--ink);
  color: #f7f4ef;
  border-radius: calc(var(--radius) + 6px);
  padding: 36px 22px;
}
.final .lead { color: #d8d2c8; margin-left: auto; margin-right: auto; }
.sr-only {
  position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
  overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0;
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
    const summary = event.target.closest("summary");
    if (!summary) return;
    // native details handles Enter/Space; keep focus styles only
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
        <div>
          <h3>${i.title}</h3>
          <p>${i.desc}</p>
        </div>
        <span style="font-weight:700;color:var(--accent-deep)">探索 →</span>
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
            <dl>
              <dt>適合年齡</dt><dd>${c.age}</dd>
              <dt>學習重點</dt><dd>${c.focus}</dd>
              <dt>媒介或技巧</dt><dd>${c.media}</dd>
            </dl>
            <p style="margin:14px 0 0">
              <a class="btn btn-ghost" data-action="course" href="${c.href}">查看詳情</a>
            </p>
          </article>`
        ).join("")}
      </div>`;
  }

  _faqHtml() {
    return FAQ.map(
      (item, index) => `
      <details>
        <summary>
          <span>${item.q}</span>
          <span class="faq-icon" aria-hidden="true">${index % 2 === 0 ? "+" : "+"}</span>
        </summary>
        <p class="answer">${item.a}</p>
      </details>`
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
        <section class="hero" aria-labelledby="hero-title">
          <div class="wrap hero-grid">
            <div>
              <p class="eyebrow">ICAcademy 恆常藝術課程</p>
              <h1 id="hero-title">何文田兒童藝術課程｜按年齡找到合適畫班</h1>
              <p class="lead">
                ICAcademy為不同成長階段的兒童及青少年提供藝術課程。由幼兒創意啟蒙、繪畫基礎、漫畫及素描，到青少年專業藝術訓練，導師會按學生年齡、能力和學習方向提供適切指導。
              </p>
              <div class="btn-row">
                <button type="button" class="btn btn-primary" data-action="scroll-age">按年齡找課程</button>
                <a class="btn btn-wa" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">申請試堂</a>
              </div>
              <div class="trust" aria-label="課程特點">
                <span>按年齡及程度分班</span>
                <span>多元藝術媒介</span>
                <span>小班指導</span>
                <span>位於何文田</span>
              </div>
            </div>
            <div class="hero-media">
              <img src="${IMG.hero}" alt="ICAcademy何文田藝術課堂創作氣氛" width="1400" height="900" />
            </div>
          </div>
        </section>

        <section class="section" id="secAgeNav" aria-labelledby="age-title">
          <div class="wrap">
            <h2 id="age-title">小朋友現時屬於哪個學習階段？</h2>
            <p class="lead">先按年齡瀏覽恆常課程。點選篩選只會強調相關卡片，所有課程內容仍保留於頁面。</p>
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

        <section class="section section-alt" aria-labelledby="interest-title">
          <div class="wrap">
            <h2 id="interest-title">孩子想探索哪一種藝術方向？</h2>
            <p class="lead">按興趣進入對應的正式課程頁，了解更多教學內容與適合程度。</p>
            <div class="card-grid cols-3">
              ${this._interestHtml()}
            </div>
          </div>
        </section>

        <section class="section" aria-labelledby="compare-title">
          <div class="wrap">
            <h2 id="compare-title">快速比較藝術課程</h2>
            <p class="lead">以下只顯示網站已核實的課程重點。上課時間、學費及名額請查詢最新安排。</p>
            ${this._compareDesktopHtml()}
            ${this._compareMobileHtml()}
          </div>
        </section>

        <section class="section section-alt" aria-labelledby="approach-title">
          <div class="wrap">
            <h2 id="approach-title">不只完成作品，更重視孩子的學習過程</h2>
            <div class="approach-grid">
              <article class="approach">
                <h3>按程度引導</h3>
                <p class="lead" style="margin:0">導師會因應學生的年齡、能力及創作進度調整指導方式。</p>
              </article>
              <article class="approach">
                <h3>建立藝術基礎</h3>
                <p class="lead" style="margin:0">從觀察、線條、形狀、色彩和構圖開始，逐步掌握不同藝術技巧。</p>
              </article>
              <article class="approach">
                <h3>鼓勵個人表達</h3>
                <p class="lead" style="margin:0">孩子不只是跟隨示範，也會學習把自己的觀察、想法和故事放進作品。</p>
              </article>
              <article class="approach">
                <h3>探索多元媒介</h3>
                <p class="lead" style="margin:0">透過不同繪畫及創作物料，讓學生累積更豐富的藝術經驗。</p>
              </article>
            </div>
          </div>
        </section>

        <section class="section" aria-labelledby="gallery-title">
          <div class="wrap">
            <h2 id="gallery-title">看看不同年齡學生的創作</h2>
            <p class="lead">以下為站內已刊出作品縮圖。想看更多，可前往學員作品頁。</p>
            <div class="gallery-grid">
              <figure><img src="${IMG.work1}" alt="ICAcademy幼兒創意繪畫作品" loading="lazy" /><figcaption>學員作品</figcaption></figure>
              <figure><img src="${IMG.work2}" alt="ICAcademy學生漫畫角色設計作品" loading="lazy" /><figcaption>學員作品</figcaption></figure>
              <figure><img src="${IMG.work3}" alt="何文田兒童素描課程學生作品" loading="lazy" /><figcaption>學員作品</figcaption></figure>
              <figure><img src="${IMG.hero}" alt="ICAcademy課堂創作氣氛" loading="lazy" /><figcaption>課堂氣氛</figcaption></figure>
            </div>
            <p style="margin-top:18px">
              <a class="btn btn-secondary" data-action="course" href="${GALLERY_URL}">查看更多學員作品</a>
            </p>
          </div>
        </section>

        <section class="section section-alt" aria-labelledby="help-title">
          <div class="wrap">
            <div class="help">
              <h2 id="help-title">未確定哪個課程適合？</h2>
              <p class="lead">
                你可以告訴我們小朋友的年齡、繪畫經驗和感興趣的創作方向，我們會協助了解較合適的課程選擇。
              </p>
              <div class="btn-row">
                <a class="btn btn-wa" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">申請試堂</a>
                <a class="btn btn-primary" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">WhatsApp查詢</a>
              </div>
            </div>
          </div>
        </section>

        <section class="section faq" aria-labelledby="faq-title">
          <div class="wrap">
            <h2 id="faq-title">藝術課程常見問題</h2>
            ${this._faqHtml()}
          </div>
        </section>

        <section class="section">
          <div class="wrap">
            <div class="final">
              <h2>為孩子找到合適的藝術學習方向</h2>
              <p class="lead">
                先了解孩子的年齡、興趣和創作經驗，再選擇適合的課程。歡迎申請試堂或向ICAcademy查詢。
              </p>
              <div class="btn-row" style="justify-content:center">
                <a class="btn btn-wa" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">立即申請試堂</a>
                <a class="btn btn-secondary" style="border-color:#fff;color:#fff" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">WhatsApp查詢課程</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    `;

    this._applyFilter(this._filter || "all");
  }
}

customElements.define("courses-hub", CoursesHub);
