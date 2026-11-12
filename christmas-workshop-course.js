/* IC Academy Christmas Workshop 2026 — single course detail pages */
(() => {
  "use strict";
  if (customElements.get("christmas-workshop-course")) return;

  /** @type {string[]} */
  const COURSE_SLUGS = [
    "dreamy-candy-house",
    "magic-crystal-kaleidoscope",
    "festive-metal-embossing",
    "stained-glass-light-colour",
    "christmas-eve-blessings-acrylic",
    "christmas-adventure-board-game",
    "christmas-fairytale-illustration-towel",
  ];

  const PARENT_SLUG = "/short-term-course/christmas-workshop-2026";

  /** Paths verified HTTP 200 on live site (EN + /zh mirror) via pages-sitemap.xml — 2026-11-12 */
  const VERIFIED_RELATED_PATHS = [
    "/short-term-course",
    "/short-term-course/christmas-workshop-2026",
    "/short-term-course/procreate-assessment-intensive",
    "/course/kids-art/creative-art-and-clay-class",
    "/course/kids-art/creative-art-classes",
    "/course/kids-art/comic-drawing-class",
    "/course/drawing-and-painting",
    "/course/drawing-and-painting/acrylic-painting-class",
    "/comicsanddigitalart",
  ];

  const CARD_IMG_W = 640;
  const CARD_IMG_H = 400;

  const SHORT_TERM_HUB = {
    href: "/short-term-course",
    label: { en: "Short-term Art Courses", zh: "何文田短期藝術課程" },
    imageId: "d5ba93_c04fed8fe4254ef7b5c65968e209d7f4~mv2.webp",
    imageSource: "/short-term-course",
  };
  const SHORT_TERM_CHRISTMAS = {
    href: "/short-term-course/christmas-workshop-2026",
    label: { en: "Christmas Art Workshops 2026", zh: "2026 聖誕藝術工作坊" },
    imageId: "52f9c8_660ad1c3fec745b3a6d999821da2b22c~mv2.webp",
    imageSource: "/short-term-course/christmas-workshop-2026",
  };
  const SHORT_TERM_PROCREATE = {
    href: "/short-term-course/procreate-assessment-intensive",
    label: { en: "Procreate Visual Arts Assessment Intensive", zh: "Procreate 呈分試特訓課程" },
    imageId: "52f9c8_fcb4b9b1b0a24c54b0727f8f39145911~mv2.jpg",
    imageSource: "/short-term-course/procreate-assessment-intensive",
  };

  const REGULAR_CLAY = {
    href: "/course/kids-art/creative-art-and-clay-class",
    label: { en: "Soft Clay Class", zh: "輕黏土課程" },
    imageId: "b98cc9_f417962750fd4399b1ee38c775da9a4e~mv2.jpeg",
    imageSource: "/course/kids-art/creative-art-and-clay-class",
  };
  const REGULAR_CREATIVE_ART = {
    href: "/course/kids-art/creative-art-classes",
    label: { en: "Creative Art Classes for Ages 7–14", zh: "7–14歲兒童創意美術班" },
    imageId: "b98cc9_9c6e5138d1fa40a7815d12218f642440~mv2.jpg",
    imageSource: "/course/kids-art/creative-art-classes",
  };
  const REGULAR_DRAWING_PAINTING = {
    href: "/course/drawing-and-painting",
    label: { en: "Drawing & Painting Courses", zh: "繪畫及素描課程" },
    imageId: "d5ba93_d93c6f740500464aa89e65a8e2e68d76~mv2.webp",
    imageSource: "/course/drawing-and-painting",
  };
  const REGULAR_ACRYLIC = {
    href: "/course/drawing-and-painting/acrylic-painting-class",
    label: { en: "Acrylic Painting Class", zh: "塑膠彩班" },
    imageId: "b98cc9_4207ae71d0a44db99d86eeadc8e54f33~mv2.jpeg",
    imageSource: "/course/drawing-and-painting/acrylic-painting-class",
  };
  const REGULAR_COMIC = {
    href: "/course/kids-art/comic-drawing-class",
    label: {
      en: "Kids Comic Drawing Class Ages 8+",
      zh: "8歲以上兒童漫畫班｜卡通及動漫繪畫課程",
    },
    imageId: "b98cc9_37e0184c611f48fb96bae9a1fa37dc05~mv2.jpg",
    imageSource: "/course/kids-art/comic-drawing-class",
  };
  const REGULAR_DIGITAL = {
    href: "/comicsanddigitalart",
    label: { en: "Comics & Digital Art Courses", zh: "漫畫及電繪課程" },
    imageId: "d5ba93_877f09bf5689458abf71f4826d75757e~mv2.webp",
    imageSource: "/comicsanddigitalart",
  };

  const RELATED_LINKS = {
    "dreamy-candy-house": {
      regular: [REGULAR_CLAY],
      shortTerm: [SHORT_TERM_HUB, SHORT_TERM_CHRISTMAS],
    },
    "magic-crystal-kaleidoscope": {
      regular: [REGULAR_CLAY],
      shortTerm: [SHORT_TERM_HUB, SHORT_TERM_CHRISTMAS],
    },
    "festive-metal-embossing": {
      regular: [REGULAR_CREATIVE_ART],
      shortTerm: [SHORT_TERM_HUB, SHORT_TERM_CHRISTMAS],
    },
    "stained-glass-light-colour": {
      regular: [REGULAR_DRAWING_PAINTING],
      shortTerm: [SHORT_TERM_HUB, SHORT_TERM_CHRISTMAS],
    },
    "christmas-eve-blessings-acrylic": {
      regular: [REGULAR_ACRYLIC, REGULAR_DRAWING_PAINTING],
      shortTerm: [SHORT_TERM_HUB, SHORT_TERM_CHRISTMAS],
    },
    "christmas-adventure-board-game": {
      regular: [REGULAR_COMIC],
      shortTerm: [SHORT_TERM_HUB, SHORT_TERM_CHRISTMAS],
    },
    "christmas-fairytale-illustration-towel": {
      regular: [REGULAR_DIGITAL],
      shortTerm: [SHORT_TERM_HUB, SHORT_TERM_CHRISTMAS, SHORT_TERM_PROCREATE],
    },
  };
  const FOOTER_ZH =
    "🌟 小班教學・專業指導・材料全包 — 多款聖誕主題工作坊，讓孩子在輕鬆愉快的氣氛中探索不同藝術媒介，享受由構思到完成作品的滿足感！";
  const FOOTER_EN =
    "🌟 Small-group teaching · professional guidance · materials included — explore different art media in a relaxed festive atmosphere, from idea to finished artwork.";

  function mediaUrl(id, w, h, q = 78) {
    return `https://static.wixstatic.com/media/${id}/v1/fill/w_${w},h_${h},al_c,q_${q},enc_auto/${id}`;
  }

  function escapeHtml(text) {
    return String(text || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/"/g, "&quot;");
  }

  function imageCard(item, zh, hrefFor) {
    const label = zh ? item.label.zh : item.label.en;
    const alt = label;
    const src = mediaUrl(item.imageId, CARD_IMG_W, CARD_IMG_H, 72);
    return `<a class="link-card" href="${escapeHtml(hrefFor(item.href))}"><div class="link-card-media"><img src="${src}" alt="${escapeHtml(alt)}" width="${CARD_IMG_W}" height="${CARD_IMG_H}" loading="lazy" decoding="async"></div><span class="link-card-label">${escapeHtml(label)}</span></a>`;
  }

  function workshopCard(course, zh, href) {
    const label = zh ? course.name.zh : course.name.en;
    const src = mediaUrl(course.imageId, CARD_IMG_W, CARD_IMG_H, 72);
    return `<a class="link-card" href="${escapeHtml(href)}"><div class="link-card-media"><img src="${src}" alt="${escapeHtml(label)}" width="${CARD_IMG_W}" height="${CARD_IMG_H}" loading="lazy" decoding="async"></div><span class="link-card-label">${escapeHtml(label)}</span></a>`;
  }

  const coursesBySlug = {
    "dreamy-candy-house": {
      slug: "dreamy-candy-house",
      imageId: "d5ba93_78630a5e577e4bf58d7d00582b6965ea~mv2.webp",
      name: { en: "Dreamy Candy House", zh: "夢幻甜蜜糖果屋（黏土）" },
      creation: {
        zh: "以小屋為主題，打造獨一無二的夢幻糖果屋。學習利用奶油黏土及輕黏土調色技巧，製作多種精緻糖果與逼真積雪，並加入燈飾與小飾物配襯，打造充滿節日歡樂氣氛的立體作品。",
        en: "Themed around a little house, build a one-of-a-kind dreamy candy house. Learn colour mixing with butter clay and light clay, craft delicate candies and realistic snow, add lights and small decorations, and create a 3D piece full of festive cheer.",
      },
      materials: {
        zh: ["輕黏土", "奶油黏土", "小屋配件", "小燈飾"],
        en: ["Light clay", "Butter clay", "House accessories", "Small lights"],
      },
      sessions: [],
    },
    "magic-crystal-kaleidoscope": {
      slug: "magic-crystal-kaleidoscope",
      imageId: "d5ba93_7ebc15a01e094bc1aa042aa3f0b27f46~mv2.png",
      name: { en: "Magic Crystal Kaleidoscope", zh: "魔法水晶萬花筒（黏土）" },
      creation: {
        // TODO(owner): confirm 並親體驗 vs 親身體驗
        zh: "探索色彩與奇幻創意！學員將用輕黏土製作冬日雪地上的禮物車、聖誕樹與雪人，搭配雪藍色雪花水晶吊飾萬花筒。透過鏡面折射原理，轉動底部八角盒產生變化萬千的圖案，再加入暖色 LED 燈點亮作品，並親體驗萬花筒的裝嵌技巧。",
        en: "Explore colour and imaginative creativity! Students use light clay to craft a gift cart, Christmas tree and snowman on a winter snow scene, paired with a snow-blue snowflake crystal kaleidoscope ornament. Mirror reflection creates ever-changing patterns as the octagonal base turns; warm LED lights illuminate the piece while students experience assembling the kaleidoscope.",
      },
      materials: {
        zh: ["輕黏土", "萬花筒配件", "暖色 LED 燈"],
        en: ["Light clay", "Kaleidoscope parts", "Warm LED lights"],
      },
      sessions: [],
    },
    "festive-metal-embossing": {
      slug: "festive-metal-embossing",
      imageId: "d5ba93_f5794d85282d4618987d0184eef3e839~mv2.webp",
      name: { en: "Festive Metal Embossing", zh: "金屬浮雕報佳音（手工）" },
      creation: {
        zh: "利用金屬錫紙的延展性與亮面質感，透過專用工具精細推壓線條與圖案，創造出如同金屬雕刻般的立體浮雕效果。將平凡材料變成精緻的聖誕藝術裝飾，體驗充滿成就感的手作樂趣。",
        en: "Using the flexibility and shine of metal foil, press lines and patterns with dedicated tools to create a relief effect like metal carving. Turn everyday materials into refined Christmas art decorations and enjoy hands-on making.",
      },
      materials: {
        zh: ["金屬錫紙", "塑形棒", "軟木墊", "剪刀", "膠水", "彩色馬克筆", "閃片裝飾", "珍珠裝飾"],
        en: ["Metal foil", "Embossing tools", "Cork mat", "Scissors", "Glue", "Colour markers", "Glitter", "Pearl embellishments"],
      },
      sessions: [],
    },
    "stained-glass-light-colour": {
      slug: "stained-glass-light-colour",
      imageId: "d5ba93_bf70341f41b04467b73c9ed53104b441~mv2.webp",
      name: { en: "Stained Glass Light & Colour", zh: "幻彩玻璃光影趣（玻璃畫）" },
      creation: {
        zh: "將傳統教堂彩繪玻璃藝術結合現代精靈主題。自由選擇喜愛的角色與色彩，運用彩繪玻璃顏料的透光特性與塑膠彩的高飽和度，營造獨特的反差效果。當冬日陽光或燭光穿透玻璃時，絢麗色彩映照室內，打造滿滿節日氛圍。",
        en: "Combine traditional church stained glass with a modern whimsical theme. Choose your favourite characters and colours, using the transparency of glass paint and the saturation of acrylics for a striking contrast. When winter sunlight or candlelight passes through the glass, rich colour fills the room with festive atmosphere.",
      },
      materials: {
        zh: ["透明底板", "彩繪玻璃顏料", "塑膠彩"],
        en: ["Clear base panel", "Glass paint", "Acrylic paint"],
      },
      sessions: [],
    },
    "christmas-eve-blessings-acrylic": {
      slug: "christmas-eve-blessings-acrylic",
      imageId: "d5ba93_5a60fddf1e514d9b9a0b6553430c4bb1~mv2.webp",
      name: { en: "Christmas Eve Blessings", zh: "主恩滿溢平安夜（塑膠彩繪畫）" },
      creation: {
        zh: "在畫布上記錄聖誕的真諦與祝福。學習扇形油彩筆運用技巧，並巧用棉花棒、海綿、氣球等生活工具打造富個人特色的視覺效果；最後以金屬閃彩寫上聖經金句，讓學員從畫面設計到選色，深度體會聖誕節背後的奇異恩典。",
        en: "On canvas, capture the heart of Christmas and its blessings. Learn fan-brush techniques and use cotton buds, sponges, balloons and other everyday tools for personal visual effects; finish with metallic paint for a Bible verse, exploring design and colour to reflect the grace behind the season.",
      },
      materials: {
        zh: ["油畫布", "塑膠彩", "金屬色閃彩", "日常生活工具（棉花棒、海綿、氣球等）"],
        en: ["Canvas", "Acrylic paint", "Metallic paint", "Everyday tools (cotton buds, sponges, balloons, etc.)"],
      },
      sessions: [],
    },
    "christmas-adventure-board-game": {
      slug: "christmas-adventure-board-game",
      imageId: "d5ba93_95b1363e941e489e91475108342bbde2~mv2.webp",
      name: { en: "Christmas Adventure", zh: "聖誕歷奇大冒險（動漫漫畫）" },
      creation: {
        zh: "發揮創意設計專屬的聖誕主題桌遊地圖！結合送禮大使角色扮演、融入驚險的雪崩與迷路情境；當走到「耶穌誕生」格時更能獲得「恩典禮物」。作品搭配微型積木棋子與立體紙卡城堡，全面提升空間美感與手作樂趣。",
        en: "Design your own Christmas board-game map! Role-play as gift bearers, navigate avalanches and getting lost — land on the \"Nativity\" square to earn a \"grace gift\". Mini brick game pieces and 3D paper castles bring spatial design and hands-on fun together.",
      },
      materials: {
        zh: ["畫紙", "馬克筆（Marker）", "微型積木棋子", "立體紙卡城堡配件"],
        en: ["Drawing paper", "Markers", "Mini brick game pieces", "3D paper castle pieces"],
      },
      sessions: [],
    },
    "christmas-fairytale-illustration-towel": {
      slug: "christmas-fairytale-illustration-towel",
      imageId: "d5ba93_1b5a2283038842298e2318f9f9d5852d~mv2.webp",
      name: {
        en: "Christmas Fairytale · Original Illustration Towel",
        zh: "聖誕夢幻童話 · 原創插畫毛巾（數位繪圖）",
      },
      creation: {
        zh: "使用數位繪圖工具創作 4 至 6 個聖誕插畫。以粉紅雪花做背景打破傳統色調，結合薑餅人糖果屋、水晶球與胡桃夾子等元素，打造溫馨夢幻的冬日童話，並將獨一無二的插畫印製成毛巾，把溫暖傳遞給身邊的人。",
        en: "Use digital drawing tools to create 4–6 Christmas illustrations. A pink-snowflake background breaks from traditional palettes, with gingerbread houses, snow globes and nutcrackers for a warm winter fairy tale — then print your unique art onto a towel to share warmth with others.",
      },
      materials: {
        zh: ["iPad", "Apple Pencil", "Procreate 軟體"],
        en: ["iPad", "Apple Pencil", "Procreate"],
      },
      sessions: [],
    },
  };

  function pagePathnames() {
    const out = [];
    try {
      const p = window.location && window.location.pathname;
      if (p) out.push(String(p));
    } catch (e) {}
    try {
      if (window.parent && window.parent !== window) {
        out.push(String(window.parent.location.pathname || ""));
      }
    } catch (e) {}
    return out;
  }

  function slugFromPath(path) {
    const m = String(path || "").match(/christmas-workshop-2026\/([^/?#]+)/i);
    return m ? m[1].toLowerCase() : "";
  }

  function resolveSlug(host) {
    const attr = String(host.getAttribute("course") || "").trim().toLowerCase();
    if (attr && coursesBySlug[attr]) return attr;
    for (const path of pagePathnames()) {
      const s = slugFromPath(path);
      if (s && coursesBySlug[s]) return s;
    }
    return "";
  }

  const styles = `
    :host{display:block;width:100vw!important;max-width:100vw!important;position:relative;left:50%;margin-left:-50vw!important;color:#283b30;background:#faf7ef;font-family:system-ui,-apple-system,'PingFang TC','Microsoft JhengHei',sans-serif;line-height:1.65}
    *,*::before,*::after{box-sizing:border-box} h1,h2,h3,p,ul{margin-top:0} h1,h2,h3{line-height:1.22} a{color:#31563e}
    .wrap{width:min(1160px,calc(100% - 40px));margin:auto}
    .crumbs{font-size:.88rem;color:#536458;margin:0 0 18px}.crumbs a{text-decoration:none}.crumbs a:hover{text-decoration:underline}
  .back{display:inline-flex;align-items:center;gap:8px;font-weight:700;text-decoration:none;margin:0 0 28px;color:#31563e}
  .back:hover{text-decoration:underline}
    .hero-photo{margin:0 0 36px;border-radius:22px;overflow:hidden;border:1px solid #e5e0d5;box-shadow:0 14px 34px rgba(39,74,41,.12)}
    .hero-photo img{display:block;width:100%;max-height:min(520px,70vh);object-fit:cover}
    .eyebrow{font-size:.75rem;letter-spacing:.18em;font-weight:800;color:#a32934;text-transform:uppercase}
    h1{font-family:Georgia,'Noto Serif TC',serif;font-size:clamp(2rem,4.5vw,3.2rem);font-weight:500;color:#284c37;margin:10px 0 28px}
    .section{padding:clamp(36px,5vw,56px) 0;border-top:1px solid #e8e2d6}.section h2{font-family:Georgia,'Noto Serif TC',serif;font-size:clamp(1.5rem,2.8vw,2.15rem);color:#284c37;margin:0 0 14px}
    .section p{font-size:1.05rem;color:#3d4f42;margin:0 0 12px}
    .materials{list-style:none;padding:0;margin:12px 0 0;display:grid;gap:8px}
    .materials li{padding:10px 14px;background:#fff;border:1px solid #ebe5da;border-radius:12px;font-size:.98rem}
    .materials li:before{content:'✦ ';color:#a42e38}
    .button{appearance:none;border:2px solid #a42e38;background:#a42e38;color:white;border-radius:999px;padding:14px 22px;min-height:48px;display:inline-flex;align-items:center;justify-content:center;font:inherit;font-weight:700;text-decoration:none;cursor:pointer;margin-top:8px}
    .button:hover{background:#84242d;border-color:#84242d}
    .footer-note{font-size:1.02rem;color:#3d4f42;margin:32px 0 0;padding:20px 22px;background:#fff9ec;border:1px solid #efe2c8;border-radius:18px}
    .related,.related-courses{margin-top:40px;max-width:100%;overflow-x:clip}
    .related h2,.related-courses>h2{font-size:1.35rem;margin-bottom:16px}
    .related-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px;max-width:100%}
    .link-card{display:flex;flex-direction:column;overflow:hidden;background:#fff;border:1px solid #e5e0d5;border-radius:16px;text-decoration:none;color:#284c37;box-shadow:0 6px 18px rgba(39,74,41,.08);max-width:100%}
    .link-card:hover{border-color:#a42e38;transform:translateY(-2px)}
    .link-card-media{aspect-ratio:16/10;background:#ececec;overflow:hidden}
    .link-card-media img{width:100%;height:100%;object-fit:cover;display:block}
    .link-card-label{display:block;padding:12px 14px;font-weight:700;font-size:.9rem;line-height:1.35;word-break:break-word}
    .related-group{margin-top:22px}.related-group h3{font-size:1.05rem;color:#536458;margin:0 0 12px;font-weight:800}
    .page{padding:clamp(40px,6vw,72px) 0 clamp(56px,8vw,90px)}
    .unknown{padding:80px 20px;text-align:center;color:#536458}
    @media(max-width:767px){.related-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.link-card-label{font-size:.84rem;padding:10px 12px}}
    @media(max-width:459px){.wrap{width:calc(100% - 32px)!important}h1{font-size:1.65rem}.section p,.footer-note{font-size:.95rem}}
    :host{width:100%!important;max-width:100%!important;left:auto!important;margin-left:0!important;overflow-x:clip}
    @media(min-width:768px){:host{width:100vw!important;max-width:100vw!important;left:50%!important;margin-left:-50vw!important}}
  `;

  class ChristmasWorkshopCourse extends HTMLElement {
    static get observedAttributes() {
      return ["locale", "course"];
    }
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      this.render();
    }
    attributeChangedCallback() {
      if (this.isConnected) this.render();
    }
    get zh() {
      const explicit = (this.getAttribute("locale") || "").toLowerCase();
      if (/^(zh|en)/.test(explicit)) return explicit.startsWith("zh");
      const hasZh = (s) => /\/zh(\/|$|\?|#)/i.test(String(s || ""));
      try {
        if (hasZh(window.location && (window.location.href || window.location.pathname))) return true;
      } catch (e) {}
      try {
        if (window.parent && window.parent !== window && hasZh(window.parent.location.href)) return true;
      } catch (e) {}
      return (document.documentElement.lang || "").toLowerCase().startsWith("zh");
    }
    path(slug) {
      return this.zh ? `/zh${slug}` : slug;
    }
    render() {
      const zh = this.zh;
      const t = (en, chinese) => (zh ? chinese : en);
      const slug = resolveSlug(this);
      const course = slug ? coursesBySlug[slug] : null;

      if (!course) {
        this.shadowRoot.innerHTML = `<style>${styles}</style><div class="wrap unknown"><p>${t(
          "Course not found. Please open a workshop detail page from Christmas Art Workshops 2026.",
          "找不到課程，請從 2026 聖誕藝術工作坊頁面進入課程詳情。"
        )}</p><a class="back" href="${this.path(PARENT_SLUG)}">${t(
          "← Back to Christmas Art Workshops 2026",
          "← 返回 2026 聖誕藝術工作坊"
        )}</a></div>`;
        return;
      }

      const parentHref = this.path(PARENT_SLUG);
      const img = mediaUrl(course.imageId, 1200, 800, 80);
      const wa =
        "https://wa.me/85265808022?text=" +
        encodeURIComponent(
          t(
            `Hello, I would like to enquire about ${course.name.en} in Christmas Workshop 2026.`,
            `你好，我想查詢2026聖誕工作坊「${course.name.zh}」的名額及報名。`
          )
        );

      const others = COURSE_SLUGS.filter((s) => s !== slug)
        .map((s) => {
          const c = coursesBySlug[s];
          const href = `${this.path(PARENT_SLUG)}/${s}`;
          return workshopCard(c, zh, href);
        })
        .join("");

      const materials = (zh ? course.materials.zh : course.materials.en)
        .map((item) => `<li>${item}</li>`)
        .join("");

      const related = RELATED_LINKS[slug] || { regular: [], shortTerm: [] };
      const hrefPath = (p) => this.path(p);
      const regularLinks = related.regular.map((item) => imageCard(item, zh, hrefPath)).join("");
      const shortTermLinks = related.shortTerm.map((item) => imageCard(item, zh, hrefPath)).join("");

      const sessionsBlock =
        Array.isArray(course.sessions) && course.sessions.length
          ? `<div class="section"><h2>${t("Session options", "上課時段")}</h2><ul class="materials">${course.sessions
              .map((d) => `<li>${d}</li>`)
              .join("")}</ul></div>`
          : "";

      this.shadowRoot.innerHTML = `
        <style>${styles}</style>
        <div class="page" lang="${zh ? "zh-Hant" : "en"}">
          <div class="wrap">
            <nav class="crumbs" aria-label="${t("Breadcrumb", "路徑")}">
              <a href="${this.path("/short-term-course")}">${t("Short-term courses", "短期課程")}</a>
              · <a href="${parentHref}">${t("Christmas Art Workshops 2026", "2026 聖誕藝術工作坊")}</a>
              · <span aria-current="page">${zh ? course.name.zh : course.name.en}</span>
            </nav>
            <a class="back" href="${parentHref}">${t(
        "← Back to Christmas Art Workshops 2026",
        "← 返回 2026 聖誕藝術工作坊"
      )}</a>
            <p class="eyebrow">IC Academy · Christmas Workshop 2026</p>
            <h1>${zh ? course.name.zh : course.name.en}</h1>
            <figure class="hero-photo"><img src="${img}" alt="${zh ? course.name.zh : course.name.en}" width="1200" height="800" fetchpriority="high" decoding="async"></figure>
            <section class="section" aria-labelledby="creation-heading">
              <h2 id="creation-heading">${t("What you will create and make", "創作及製作內容")}</h2>
              <p>${zh ? course.creation.zh : course.creation.en}</p>
            </section>
            <section class="section" aria-labelledby="materials-heading">
              <h2 id="materials-heading">${t("Materials and tools", "所需材料與工具")}</h2>
              <ul class="materials">${materials}</ul>
            </section>
            ${sessionsBlock}
            <p class="footer-note">${zh ? FOOTER_ZH : FOOTER_EN}</p>
            <a class="button" href="${wa}" target="_blank" rel="noopener noreferrer">${t("Enquire on WhatsApp", "WhatsApp 查詢名額")}</a>
            <div class="related">
              <h2>${t("Other Christmas workshops", "其他聖誕工作坊")}</h2>
              <div class="related-grid">${others}</div>
            </div>
            <div class="related-courses" aria-labelledby="related-courses-heading">
              <h2 id="related-courses-heading">${t("Related courses", "相關課程")}</h2>
              <div class="related-group">
                <h3>${t("Regular courses", "常規課程")}</h3>
                <div class="related-grid">${regularLinks}</div>
              </div>
              <div class="related-group">
                <h3>${t("Short-term courses", "短期課程")}</h3>
                <div class="related-grid">${shortTermLinks}</div>
              </div>
            </div>
          </div>
        </div>`;
    }
  }

  customElements.define("christmas-workshop-course", ChristmasWorkshopCourse);
  window.__icChristmasCourseSlugs = COURSE_SLUGS;
  window.__icChristmasCoursesBySlug = coursesBySlug;
  window.__icChristmasRelatedLinks = RELATED_LINKS;
  window.__icChristmasVerifiedRelatedPaths = VERIFIED_RELATED_PATHS;
  window.__icChristmasLinkImageSources = {
    "/short-term-course": { imageId: SHORT_TERM_HUB.imageId, source: SHORT_TERM_HUB.imageSource },
    "/short-term-course/christmas-workshop-2026": {
      imageId: SHORT_TERM_CHRISTMAS.imageId,
      source: SHORT_TERM_CHRISTMAS.imageSource,
    },
    "/short-term-course/procreate-assessment-intensive": {
      imageId: SHORT_TERM_PROCREATE.imageId,
      source: SHORT_TERM_PROCREATE.imageSource,
    },
    "/course/kids-art/creative-art-and-clay-class": {
      imageId: REGULAR_CLAY.imageId,
      source: REGULAR_CLAY.imageSource,
    },
    "/course/kids-art/creative-art-classes": {
      imageId: REGULAR_CREATIVE_ART.imageId,
      source: REGULAR_CREATIVE_ART.imageSource,
    },
    "/course/kids-art/comic-drawing-class": { imageId: REGULAR_COMIC.imageId, source: REGULAR_COMIC.imageSource },
    "/course/drawing-and-painting": {
      imageId: REGULAR_DRAWING_PAINTING.imageId,
      source: REGULAR_DRAWING_PAINTING.imageSource,
    },
    "/course/drawing-and-painting/acrylic-painting-class": {
      imageId: REGULAR_ACRYLIC.imageId,
      source: REGULAR_ACRYLIC.imageSource,
    },
    "/comicsanddigitalart": { imageId: REGULAR_DIGITAL.imageId, source: REGULAR_DIGITAL.imageSource },
  };
})();
