/**
 * IC Academy Contact – Custom Element
 * Tag name: contact-hub
 * Version: 2026-09-01-v1 (smaller mobile type)
 * Design system: matches home-hub / about-hub / trial-class-hub (coral / teal / navy)
 * Routes: /contact (EN) | /zh/contact (ZH)
 * Locale via URL /zh, html lang, or attribute locale="en"|"zh" (default en).
 *
 * Form flow:
 *   1. Element validates Name / Email / Message inline.
 *   2. On valid submit it sets submit-state="sending" on itself and dispatches
 *      a "contact-submit" CustomEvent: detail = { name, email, message, locale }.
 *   3. Page code (contactHubPage.js) handles delivery (CRM / etc.) and then sets
 *      attribute submit-state="success" | "error" on the element.
 *   4. Element renders the status message without a full re-render.
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

const PHONE_DISPLAY = "2711 3006";
const PHONE_TEL = "+85227113006";
const EMAIL = "cs@icacademy.com.hk";
const MAPS_QUERY = "IC Academy, 79F Waterloo Road, Ho Man Tin, Kowloon, Hong Kong";

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
  --radius: 18px;
  --shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  --font: "PingFang TC", "Microsoft JhengHei", "Noto Sans TC", "Segoe UI", sans-serif;
  color: var(--ink);
  font-family: var(--font);
  line-height: 1.7;
  font-size: 16px;
  background: var(--bg);
  overflow-x: visible;
  height: auto !important;
  min-height: 0 !important;
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
.hub { width: 100%; max-width: 100%; min-width: 0; margin: 0; padding: 0; overflow-x: visible; }
.wrap { width: min(1200px, calc(100% - 48px)); max-width: 1200px; margin: 0 auto; }
.section { padding: 64px 0; background: var(--bg); width: 100%; }
.section-soft { background: var(--bg-soft); }
.kicker {
  color: var(--teal);
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-size: 0.82rem;
  margin: 0 0 10px;
  text-align: center;
}
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
.btn-row { display: flex; flex-wrap: wrap; gap: 14px; }
.btn {
  appearance: none; border: 0; border-radius: 999px; min-height: 50px;
  padding: 12px 28px; font: inherit; font-weight: 700; cursor: pointer;
  text-decoration: none; display: inline-flex; align-items: center; justify-content: center;
  transition: transform .15s ease, background .15s ease;
}
.btn:hover { transform: translateY(-1px); }
.btn:focus-visible { outline: 3px solid rgba(0,169,183,.35); outline-offset: 3px; }
.btn-navy { background: var(--navy); color: #fff; }
.btn-navy:hover { background: #0f1f36; }
.btn-coral { background: var(--coral); color: #fff; }
.btn-coral:hover { background: var(--coral-deep); }
.btn-outline-navy { background: #fff; color: var(--navy); border: 2px solid var(--navy); }
.btn-outline-white { background: transparent; color: #fff; border: 2px solid #fff; }
.btn[disabled] { opacity: .6; cursor: progress; transform: none; }

.hero {
  position: relative; width: 100%;
  background: linear-gradient(135deg, var(--teal-soft) 0%, #ffffff 55%, var(--coral-soft) 100%);
  overflow: hidden;
}
.hero .wrap { position: relative; z-index: 1; padding: 72px 0 56px; text-align: center; }
.hero-eyebrow { margin: 0 0 14px; color: var(--muted); font-weight: 700; font-size: 0.98rem; }
.hero h1 { margin: 0 0 10px; font-size: clamp(2rem, 4.6vw, 2.9rem); line-height: 1.2; }
.hero-sub { margin: 0 0 14px; font-size: clamp(1.15rem, 2.4vw, 1.55rem); font-weight: 800; color: var(--teal-deep); }
.hero-lead { margin: 0 auto 26px; max-width: 46em; color: var(--muted); }
.hero .btn-row { justify-content: center; }

.methods { display: grid; gap: 16px; }
@media (min-width: 800px) { .methods { grid-template-columns: repeat(3, 1fr); } }
.method {
  background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius);
  padding: 24px 22px; box-shadow: var(--shadow); text-align: center;
  display: flex; flex-direction: column; align-items: center; gap: 6px;
}
.method-icon {
  width: 52px; height: 52px; border-radius: 50%;
  display: inline-flex; align-items: center; justify-content: center;
  background: var(--teal-soft); margin-bottom: 6px;
}
.method-icon svg { width: 26px; height: 26px; fill: var(--teal-deep); }
.method h3 { margin: 0; color: var(--navy); font-size: 1.08rem; }
.method p { margin: 0; color: var(--muted); font-size: 0.94rem; }
.method a.method-link {
  margin-top: 10px; font-weight: 800; color: var(--teal-deep);
  text-decoration: none; border-bottom: 2px solid transparent;
}
.method a.method-link:hover { border-bottom-color: var(--teal-deep); }

.contact-grid { display: grid; gap: 28px; align-items: start; }
@media (min-width: 960px) { .contact-grid { grid-template-columns: 1.1fr 0.9fr; gap: 40px; } }

.form-card {
  background: #fff; border: 1px solid var(--line); border-radius: 22px;
  padding: clamp(22px, 4vw, 34px); box-shadow: var(--shadow);
}
.form-card h2 { text-align: left; font-size: clamp(1.3rem, 2.4vw, 1.7rem); margin-bottom: 6px; }
.form-card .form-lead { margin: 0 0 20px; color: var(--muted); }
.field { margin-bottom: 16px; }
.field label { display: block; font-weight: 700; margin-bottom: 6px; color: var(--navy); }
.field input, .field textarea {
  width: 100%; border: 1.5px solid var(--line); border-radius: 12px;
  padding: 12px 14px; font: inherit; color: var(--ink); background: #fff;
  transition: border-color .15s ease, box-shadow .15s ease;
}
.field textarea { min-height: 140px; resize: vertical; }
.field input:focus, .field textarea:focus {
  outline: none; border-color: var(--teal);
  box-shadow: 0 0 0 3px rgba(0,169,183,.18);
}
.field .field-error { display: none; margin: 6px 0 0; color: var(--coral-deep); font-size: 0.88rem; font-weight: 600; }
.field[data-invalid="1"] input, .field[data-invalid="1"] textarea { border-color: var(--coral-deep); }
.field[data-invalid="1"] .field-error { display: block; }
.form-status { margin: 4px 0 14px; font-weight: 700; min-height: 1.4em; }
.form-status[data-state="error"] { color: var(--coral-deep); }
.form-note { margin: 14px 0 0; color: var(--muted); font-size: 0.9rem; }

.success-card { text-align: center; padding: 12px 4px; }
.success-icon {
  width: 64px; height: 64px; border-radius: 50%; margin: 0 auto 14px;
  background: var(--teal-soft); display: flex; align-items: center; justify-content: center;
}
.success-icon svg { width: 32px; height: 32px; fill: var(--teal-deep); }
.success-card h2 { text-align: center; }
.success-card p { color: var(--muted); margin: 0 auto 20px; max-width: 40ch; }
.success-card .btn-row { justify-content: center; }

.info-stack { display: grid; gap: 20px; }
.info-card {
  background: #fff; border: 1px solid var(--line); border-radius: 22px;
  padding: 24px 22px; box-shadow: var(--shadow);
}
.info-card h2 { text-align: left; font-size: clamp(1.2rem, 2.2vw, 1.5rem); margin-bottom: 14px; }
.hours-row {
  display: flex; justify-content: space-between; gap: 16px;
  padding: 10px 0; border-bottom: 1px solid var(--line);
}
.hours-row:last-child { border-bottom: 0; }
.hours-row .day { font-weight: 700; color: var(--navy); }
.hours-row .time { color: var(--muted); text-align: right; white-space: nowrap; }
.hours-row .time.closed { color: var(--coral-deep); font-weight: 800; }
.addr { margin: 0 0 6px; color: var(--muted); }
.addr strong { color: var(--navy); display: block; margin-bottom: 4px; }
.info-links { display: grid; gap: 8px; margin-top: 12px; }
.info-links a {
  color: var(--teal-deep); font-weight: 700; text-decoration: none;
  display: inline-flex; align-items: center; gap: 8px;
}
.info-links a:hover { text-decoration: underline; }

.map-card {
  margin-top: 20px; border-radius: 22px; overflow: hidden;
  border: 1px solid var(--line); box-shadow: var(--shadow); background: #eee;
}
.map-card iframe { display: block; width: 100%; height: 320px; border: 0; }

.final {
  background: var(--teal); color: #fff; text-align: center;
  padding: 64px 20px; width: 100%; margin: 0; border: 0; border-radius: 0;
}
.final h2 { color: #fff; font-size: clamp(1.55rem, 3vw, 2rem); margin: 0 0 12px; }
.final p { color: rgba(255,255,255,.92); max-width: 42ch; margin: 0 auto 28px; }
.final .btn-row { justify-content: center; }

@media (max-width: 640px) {
  :host { font-size: 13px; }
  h1, .hero-title-chip h1, .hero h1 { font-size: 1.42em !important; line-height: 1.35; }
  h2, .section-title, .final h2, .detail h2, .trial h2, .form-card h2, .info-card h2 { font-size: 1.24em !important; }
  h3, .faq-q, .card-body h3, .path-step h3, .method h3 { font-size: 1.02em !important; }
  .hero-sub { font-size: 1.05em !important; }
  p, li, .section-lead, .hero-lead, .faq-a, .card-body p, .path-step p, .final p, .detail-lead, .hero-points { font-size: 1em !important; }
  .hero-eyebrow, .kicker, .crumbs, .trust-item span { font-size: 0.88em !important; }
  .btn { font-size: 1em !important; }
  .hero .wrap { padding: 48px 0 40px; }
  .btn-row { flex-direction: column; align-items: stretch; }
  .btn { width: 100%; }
  .wrap { width: min(1200px, calc(100% - 32px)); }
  .hours-row .time { white-space: normal; }
}
`;

const ICON_WHATSAPP =
  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8.9-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.6-1.3.1-.2 0-.4 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z"/></svg>';
const ICON_PHONE =
  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8a15.6 15.6 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .57 3.6 1 1 0 0 1-.25 1z"/></svg>';
const ICON_EMAIL =
  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm8 7L4 6v12h16V6z"/></svg>';
const ICON_TICK =
  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>';

class ContactHub extends HTMLElement {
  static get observedAttributes() {
    return ["wa-url", "locale", "submit-state"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._onClick = this._onClick.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
    this._applyFullBleedCss = this._applyFullBleedCss.bind(this);
    this._syncHeight = this._syncHeight.bind(this);
    this._ro = null;
    this._lastSubmission = null;
  }

  connectedCallback() {
    this.render();
    this.shadowRoot.addEventListener("click", this._onClick);
    this.shadowRoot.addEventListener("submit", this._onSubmit);
    window.addEventListener("resize", this._applyFullBleedCss);
    window.addEventListener("orientationchange", this._applyFullBleedCss);
    window.setTimeout(() => this._collapseTrailingGap(), 50);
    window.setTimeout(() => this._collapseTrailingGap(), 400);
    window.setTimeout(() => this._collapseTrailingGap(), 1200);
  }

  disconnectedCallback() {
    this.shadowRoot.removeEventListener("click", this._onClick);
    this.shadowRoot.removeEventListener("submit", this._onSubmit);
    window.removeEventListener("resize", this._applyFullBleedCss);
    window.removeEventListener("orientationchange", this._applyFullBleedCss);
    if (this._ro) {
      this._ro.disconnect();
      this._ro = null;
    }
    const bleed = document.getElementById("contact-hub-page-bleed");
    if (bleed) bleed.remove();
  }

  attributeChangedCallback(name) {
    if (!this.isConnected) return;
    if (name === "submit-state") {
      this._updateSubmitState();
      return;
    }
    this.render();
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

  _esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  _waPrefill(text) {
    return `${this.waUrl}?text=${encodeURIComponent(text)}`;
  }

  _injectPageBleedCss() {
    const id = "contact-hub-page-bleed";
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
      contact-hub {
        display: block !important;
        box-sizing: border-box !important;
        width: 100% !important;
        max-width: none !important;
        height: auto !important;
        min-height: 0 !important;
        margin: 0 !important;
        padding: 0 !important;
        border-radius: 0 !important;
        box-shadow: none !important;
      }
      #SITE_PAGES, #PAGES_CONTAINER, .wixui-page {
        min-height: 0 !important;
        padding-bottom: 0 !important;
        margin-bottom: 0 !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
      }
      #SITE_FOOTER { margin-top: 0 !important; }
    `;
    document.head.appendChild(style);
  }

  _collapseTrailingGap() {
    try {
      this.style.setProperty("height", "auto", "important");
      this.style.setProperty("min-height", "0", "important");
      let el = this.parentElement;
      for (let i = 0; i < 10 && el; i++) {
        el.style.setProperty("min-height", "0", "important");
        el.style.setProperty("height", "auto", "important");
        el.style.setProperty("padding-bottom", "0", "important");
        el.style.setProperty("margin-bottom", "0", "important");
        const id = el.id || "";
        const tag = (el.tagName || "").toLowerCase();
        if (tag === "main" || id === "SITE_PAGES" || id === "PAGES_CONTAINER" || id === "masterPage") break;
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

  _applyFullBleedCss() {
    try {
      this._injectPageBleedCss();
      this.setAttribute("data-fullbleed", "1");
      this.style.setProperty("position", "relative", "important");
      this.style.setProperty("width", "100%", "important");
      this.style.setProperty("max-width", "none", "important");
      this.style.setProperty("margin", "0", "important");
      this.style.setProperty("padding", "0", "important");
      this.style.setProperty("height", "auto", "important");
      this.style.setProperty("min-height", "0", "important");
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
        el.style.setProperty("min-height", "0", "important");
        if (el !== pages && id !== "SITE_PAGES" && id !== "PAGES_CONTAINER") {
          el.style.setProperty("height", "auto", "important");
        }
        if (el === pages || id === "SITE_PAGES" || id === "PAGES_CONTAINER") break;
        el = el.parentElement;
      }
    } catch (e) {}
    this._collapseTrailingGap();
  }

  _observeHeight() {
    const hub = this.shadowRoot && this.shadowRoot.querySelector(".hub");
    if (!hub) return;
    if (this._ro) this._ro.disconnect();
    this._ro = new ResizeObserver(this._syncHeight);
    this._ro.observe(hub);
    this._syncHeight();
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
    if (action === "whatsapp" || action === "phone" || action === "email") {
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
      }
      this._emitCta(action, target.getAttribute("href"));
      return;
    }
    if (action === "hub" || action === "course" || action === "map") {
      this._emitCta(action, target.getAttribute("href"));
    }
  }

  _onSubmit(event) {
    const form = event.target.closest("form[data-contact-form]");
    if (!form) return;
    event.preventDefault();

    const name = String((form.querySelector('[name="name"]') || {}).value || "").trim();
    const email = String((form.querySelector('[name="email"]') || {}).value || "").trim();
    const message = String((form.querySelector('[name="message"]') || {}).value || "").trim();

    const invalid = {
      name: !name,
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
      message: !message,
    };
    form.querySelectorAll(".field").forEach((field) => {
      const key = field.getAttribute("data-field");
      field.setAttribute("data-invalid", invalid[key] ? "1" : "0");
    });
    if (invalid.name || invalid.email || invalid.message) {
      this._syncHeight();
      return;
    }

    this._lastSubmission = { name, email, message };
    this.setAttribute("submit-state", "sending");
    this.dispatchEvent(
      new CustomEvent("contact-submit", {
        detail: { name, email, message, locale: this.localeCode },
        bubbles: true,
        composed: true,
      })
    );
  }

  _updateSubmitState() {
    const state = String(this.getAttribute("submit-state") || "").toLowerCase();
    const root = this.shadowRoot;
    if (!root) return;
    const status = root.querySelector(".form-status");
    const button = root.querySelector('[data-role="submit"]');
    const form = root.querySelector("form[data-contact-form]");
    const success = root.querySelector('[data-role="success"]');
    const t = (en, zh) => (this.isEn ? en : zh);

    if (state === "sending") {
      if (status) {
        status.textContent = t("Sending…", "傳送中…");
        status.setAttribute("data-state", "sending");
      }
      if (button) button.setAttribute("disabled", "");
      this._syncHeight();
      return;
    }

    if (state === "success") {
      if (form) form.setAttribute("hidden", "");
      if (success) {
        success.removeAttribute("hidden");
        const waLine = success.querySelector('[data-role="success-wa"]');
        if (waLine && this._lastSubmission) {
          const s = this._lastSubmission;
          const text = this.isEn
            ? `Hello IC Academy, I am ${s.name} (${s.email}). ${s.message}`
            : `你好 IC Academy，我係 ${s.name}（${s.email}）。${s.message}`;
          waLine.setAttribute("href", this._waPrefill(text));
        }
      }
      this._syncHeight();
      window.setTimeout(() => this._syncHeight(), 300);
      return;
    }

    if (state === "error") {
      if (status) {
        status.textContent = t(
          "Something went wrong — please try again, or reach us on WhatsApp.",
          "傳送失敗，請再試一次，或直接 WhatsApp 我們。"
        );
        status.setAttribute("data-state", "error");
      }
      if (button) button.removeAttribute("disabled");
      this._syncHeight();
    }
  }

  render() {
    const t = (en, zh) => (this.isEn ? en : zh);
    const waText = t(
      "Hello IC Academy, I have a question about your classes.",
      "你好 IC Academy，我想查詢課程資料。"
    );
    const waPrefill = this._waPrefill(waText);
    const trialHref = this.path("/homantin-children-art-trial");
    const courseHref = this.path("/course-hub");
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`;
    const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&output=embed`;

    this.shadowRoot.innerHTML = `
      <style>${STYLES}</style>
      <div class="hub">
        <section class="hero" aria-label="${t("Contact IC Academy", "聯絡 IC Academy")}">
          <div class="wrap">
            <p class="hero-eyebrow">${t("Ho Man Tin · Waterloo Road", "何文田 · 窩打老道")}</p>
            <h1>${t("Contact Us", "聯絡我們")}</h1>
            <p class="hero-sub">${t("Ask Us Anything", "有甚麼想問？")}</p>
            <p class="hero-lead">${t(
              "Questions about courses, trial classes or enrolment? Message us — we usually reply within one working day.",
              "想查詢課程、試堂或報名安排？歡迎留言或 WhatsApp 我們，一般會於一個工作天內回覆。"
            )}</p>
            <div class="btn-row">
              <a class="btn btn-navy" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("WhatsApp us", "WhatsApp 查詢")}</a>
              <a class="btn btn-outline-navy" href="#contact-form">${t("Leave a message", "留言給我們")}</a>
            </div>
          </div>
        </section>

        <section class="section" id="reach">
          <div class="wrap">
            <p class="kicker">${t("Reach out", "聯絡方法")}</p>
            <h2 class="section-title">${t("Talk to a real person", "直接與我們聯絡")}</h2>
            <p class="section-lead">${t(
              "WhatsApp is fastest during opening hours. You can also call or email — whichever suits you.",
              "開放時間內 WhatsApp 回覆最快，亦歡迎致電或電郵，揀你最方便嘅方法。"
            )}</p>
            <div class="methods">
              <article class="method">
                <span class="method-icon">${ICON_WHATSAPP}</span>
                <h3>WhatsApp</h3>
                <p>${t("Fastest reply — tap to chat with the studio.", "回覆最快，一按即可與畫室對話。")}</p>
                <a class="method-link" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">+852 6580 8022</a>
              </article>
              <article class="method">
                <span class="method-icon">${ICON_PHONE}</span>
                <h3>${t("Phone", "電話")}</h3>
                <p>${t("Call us during opening hours.", "歡迎於開放時間內致電。")}</p>
                <a class="method-link" data-action="phone" href="tel:${PHONE_TEL}">${PHONE_DISPLAY}</a>
              </article>
              <article class="method">
                <span class="method-icon">${ICON_EMAIL}</span>
                <h3>${t("Email", "電郵")}</h3>
                <p>${t("For detailed enquiries and documents.", "適合詳細查詢或傳送文件。")}</p>
                <a class="method-link" data-action="email" href="mailto:${EMAIL}">${EMAIL}</a>
              </article>
            </div>
          </div>
        </section>

        <section class="section section-soft" id="contact-form">
          <div class="wrap">
            <div class="contact-grid">
              <div class="form-card">
                <h2>${t("Send us a message", "留言給我們")}</h2>
                <p class="form-lead">${t(
                  "Tell us your child’s age and what you’d like to know — we’ll get back to you.",
                  "告訴我們小朋友的年齡及想查詢的內容，我們會盡快回覆。"
                )}</p>
                <form data-contact-form novalidate>
                  <div class="field" data-field="name" data-invalid="0">
                    <label for="ch-name">${t("Name", "姓名")}</label>
                    <input id="ch-name" name="name" type="text" autocomplete="name" placeholder="${t("Your name", "你的姓名")}" />
                    <p class="field-error">${t("Please enter your name.", "請輸入姓名。")}</p>
                  </div>
                  <div class="field" data-field="email" data-invalid="0">
                    <label for="ch-email">${t("Email", "電郵")}</label>
                    <input id="ch-email" name="email" type="email" autocomplete="email" placeholder="${t("you@example.com", "you@example.com")}" />
                    <p class="field-error">${t("Please enter a valid email address.", "請輸入有效的電郵地址。")}</p>
                  </div>
                  <div class="field" data-field="message" data-invalid="0">
                    <label for="ch-message">${t("Message", "訊息")}</label>
                    <textarea id="ch-message" name="message" placeholder="${t("Leave us a message...", "寫下你的訊息…")}"></textarea>
                    <p class="field-error">${t("Please enter a message.", "請輸入訊息。")}</p>
                  </div>
                  <p class="form-status" aria-live="polite"></p>
                  <button class="btn btn-coral" data-role="submit" type="submit">${t("Submit", "送出")}</button>
                  <p class="form-note">${t(
                    "By submitting you agree to be contacted about your enquiry.",
                    "送出即表示你同意我們就此查詢與你聯絡。"
                  )}</p>
                </form>
                <div class="success-card" data-role="success" hidden>
                  <span class="success-icon">${ICON_TICK}</span>
                  <h2>${t("Thanks for submitting!", "已收到你的訊息！")}</h2>
                  <p>${t(
                    "We’ve received your message and will reply as soon as we can. Need a faster answer? Continue on WhatsApp.",
                    "我們已收到你的訊息，會盡快回覆。想更快得到答案？可以繼續用 WhatsApp。"
                  )}</p>
                  <div class="btn-row">
                    <a class="btn btn-navy" data-role="success-wa" data-action="whatsapp" href="${waPrefill}" target="_blank" rel="noopener noreferrer">${t("Continue on WhatsApp", "繼續用 WhatsApp")}</a>
                  </div>
                </div>
              </div>

              <div class="info-stack">
                <div class="info-card">
                  <h2>${t("Opening Hours", "開放時間")}</h2>
                  <div class="hours-row">
                    <span class="day">${t("Monday – Friday", "星期一至五")}</span>
                    <span class="time">${t("10:00am – 7:30pm", "上午10:00 – 晚上7:30")}</span>
                  </div>
                  <div class="hours-row">
                    <span class="day">${t("Saturday", "星期六")}</span>
                    <span class="time">${t("9:30am – 6:30pm", "上午9:30 – 晚上6:30")}</span>
                  </div>
                  <div class="hours-row">
                    <span class="day">${t("Sunday & Public Holidays", "星期日及公眾假期")}</span>
                    <span class="time closed">${t("Closed", "休息")}</span>
                  </div>
                </div>

                <div class="info-card">
                  <h2>${t("Visit Us", "親臨畫室")}</h2>
                  <p class="addr">
                    <strong>IC Academy</strong>
                    ${t(
                      "Shop 3, G/F, 79F Waterloo Road, Ho Man Tin, Kowloon, Hong Kong",
                      "香港九龍何文田窩打老道79F地下3號鋪"
                    )}
                  </p>
                  <p class="addr">${t("Near Pui Ching Middle School — about a 5-minute walk from Ho Man Tin Station.", "培正中學附近，何文田站步行約 5 分鐘。")}</p>
                  <div class="info-links">
                    <a data-action="map" href="${mapsUrl}" target="_blank" rel="noopener noreferrer">${t("Get directions →", "查看路線 →")}</a>
                  </div>
                </div>

                <div class="map-card">
                  <iframe title="${t("Map to IC Academy", "IC Academy 地圖")}" src="${mapsEmbed}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="final">
          <h2>${t("Not sure where to start?", "未決定邊個課程？")}</h2>
          <p>${t(
            "Book an HK$100 trial class — our teachers will observe your child and suggest the right fit.",
            "預約 HK$100 試堂，老師會觀察孩子的創作狀態，並建議合適課程。"
          )}</p>
          <div class="btn-row">
            <a class="btn btn-coral" data-action="hub" href="${trialHref}">${t("Book a trial class", "預約試堂")}</a>
            <a class="btn btn-outline-white" data-action="course" href="${courseHref}">${t("Browse courses", "瀏覽課程")}</a>
          </div>
        </section>
      </div>
    `;

    this._applyFullBleedCss();
    this._observeHeight();
    this._collapseTrailingGap();
    if (String(this.getAttribute("submit-state") || "")) {
      this._updateSubmitState();
    }
  }
}

customElements.define("contact-hub", ContactHub);
