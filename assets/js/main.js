/* =====================================================================
   main.js: interactivity, i18n, projects, modal, GitHub, animations
   ===================================================================== */
(function () {
  "use strict";
  const CFG = window.SITE_CONFIG;
  const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));

  /* category → accent gradient + label color */
  const CAT = {
    site:    { grad: "linear-gradient(135deg,#1b2a4a,#0b1020)", dot: "#4a7dff" },
    library: { grad: "linear-gradient(135deg,#2a1b4a,#0d0b1f)", dot: "#8b5cf6" },
    bot:     { grad: "linear-gradient(135deg,#3a2e16,#15110a)", dot: "#c9a86a" },
    game:    { grad: "linear-gradient(135deg,#3a163a,#160b1f)", dot: "#e25cd0" },
    app:     { grad: "linear-gradient(135deg,#163a3a,#0a1818)", dot: "#2fd4ee" }
  };
  const LANG_COLORS = {
    JavaScript:"#f1e05a", TypeScript:"#3178c6", C:"#555555", "C++":"#f34b7d",
    "C#":"#178600", Java:"#b07219", Python:"#3572A5", HTML:"#e34c26", CSS:"#563d7c",
    Shell:"#89e051", Go:"#00ADD8", Rust:"#dea584", Kotlin:"#A97BFF", Swift:"#F05138",
    Ruby:"#701516", PHP:"#4F5D95", Dart:"#00B4AB", Lua:"#000080", GLSL:"#5686a5",
    ShaderLab:"#222c37", Vue:"#41b883", Default:"#7d8597"
  };

  /* ------------------------------------------------------------------
     STATE / I18N
     ------------------------------------------------------------------ */
  const SUPPORTED_LANGS = ["pt", "en", "fr"];
  const LANGUAGE_STORAGE_KEY = "site_lang";
  function normalizeLanguage(value) {
    return String(value || "").trim().toLowerCase().split(/[-_]/)[0];
  }
  function isSupportedLanguage(l) {
    return SUPPORTED_LANGS.includes(l);
  }
  let lang = (function () {
    let saved = "";
    try { saved = normalizeLanguage(localStorage.getItem(LANGUAGE_STORAGE_KEY)); } catch (e) {}
    if (isSupportedLanguage(saved)) return saved;
    const primary = Array.isArray(navigator.languages) && navigator.languages.length ? navigator.languages[0] : navigator.language;
    const nav = normalizeLanguage(primary);
    return isSupportedLanguage(nav) ? nav : "en";
  })();

  function t(key) { return (CFG.i18n[lang] && CFG.i18n[lang][key]) || key; }

  function applyI18n() {
    document.documentElement.lang = lang;
    $$("[data-i18n]").forEach(el => { const k = el.getAttribute("data-i18n"); el.textContent = t(k); });
    $$(".lang button").forEach(b => b.classList.toggle("active", b.dataset.lang === lang));
    renderFilters();           // filter labels are language-bound
    renderProjects();          // descriptions are language-bound
    renderStats();
    updateCvLink();            // CV per-language
    if (modalCurrent) openModal(modalCurrent); // refresh open modal text
  }

  function updateCvLink() {
    const p = CFG.profile;
    const cv = p.cv && p.cv[lang] ? p.cv[lang] : (p.cv && (p.cv.en || p.cv.pt));
    const cvEl = $("#linkCv");
    if (cv) { cvEl.href = cv; cvEl.style.opacity = ""; cvEl.style.pointerEvents = ""; }
  }

  function setLang(l) {
    const next = normalizeLanguage(l);
    if (!isSupportedLanguage(next)) return;
    lang = next;
    try { localStorage.setItem(LANGUAGE_STORAGE_KEY, lang); } catch (e) {}
    applyI18n();
  }

  /* ------------------------------------------------------------------
     PROFILE DATA INJECTION
     ------------------------------------------------------------------ */
  function injectProfile() {
    const p = CFG.profile;
    $("#logoName").textContent = p.shortName;
    $("#footName").textContent = p.fullName;
    $("#year").textContent = new Date().getFullYear();

    const img = $("#portraitImg");
    img.src = p.photo;
    img.alt = p.fullName;
    img.onerror = () => { img.style.display = "none"; };
    img.onload  = () => { $(".portrait__ph").style.opacity = "0"; };

    // social links
    const gh = $("#linkGithub"); gh.href = "https://github.com/" + p.githubUser;
    $("#ghHandle").textContent = "@" + p.githubUser;
    const li = $("#linkLinkedin"); li.href = p.linkedin || "#";
    $(".clink__v", li).textContent = p.linkedin ? p.linkedin.replace(/https?:\/\/(www\.)?linkedin\.com\//, "") : "/in/…";
    $("#emailVal").textContent = p.email;
    $("#linkEmail").href = "mailto:" + p.email;

    const cv = p.cv && p.cv[lang] ? p.cv[lang] : (p.cv && (p.cv.en || p.cv.pt));
    const cvEl = $("#linkCv");
    if (cv) { cvEl.href = cv; } else { cvEl.style.opacity = ".5"; cvEl.style.pointerEvents = "none"; }

    // hero stack chips
    $("#heroStack").innerHTML = (CFG.stack || []).map(s => `<span class="chip">${s}</span>`).join("");

    // marquee
    const words = (CFG.stack || []).concat(["Performance", "WebGL", "Clean Architecture", "Global Scale"]);
    const track = $("#marquee");
    const block = `<span>${words.join('</span><span>')}</span>`;
    track.innerHTML = block + block; // duplicate for seamless loop
  }

  function renderStats() {
    const wrap = $("#stats");
    wrap.innerHTML = (CFG.stats || []).map(s =>
      `<div class="stat glass"><div class="stat__num" data-count="${s.value}" data-suffix="${s.suffix || ""}">0</div>
       <div class="stat__label">${t(s.key)}</div></div>`
    ).join("");
    animateCounters();
  }

  /* ------------------------------------------------------------------
     PROJECTS GRID + FILTERS
     ------------------------------------------------------------------ */
  let activeFilter = "all";
  function renderFilters() {
    const cats = ["all", ...new Set(CFG.projects.map(p => p.category))];
    const map = { all: "filter_all", site: "filter_site", library: "filter_library", bot: "filter_bot", game: "filter_game", app: "filter_all" };
    $("#filters").innerHTML = cats.map(c =>
      `<button class="filter ${c === activeFilter ? "active" : ""}" data-filter="${c}">${t(map[c] || "filter_all") || c}</button>`
    ).join("");
    $$("#filters .filter").forEach(b => b.addEventListener("click", () => {
      activeFilter = b.dataset.filter; renderFilters(); renderProjects(); bindHover();
    }));
  }

  function renderProjects() {
    const grid = $("#projectGrid");
    const list = CFG.projects.filter(p => activeFilter === "all" || p.category === activeFilter);
    grid.innerHTML = list.map(p => {
      const meta = CAT[p.category] || CAT.app;
      const media = p.image
        ? `<div class="card__media"><img src="${p.image}" alt="${p.title}" loading="lazy"/></div>`
        : `<div class="card__gradient" style="background:${meta.grad}"></div>`;
      return `
      <article class="card ${p.featured ? "featured" : ""}" data-id="${p.id}" tabindex="0">
        ${media}
        <div class="card__shade"></div>
        <div class="card__glow"></div>
        <div class="card__top">
          <span class="card__cat">${p.category}</span>
          <span class="card__year">${p.year || ""}</span>
        </div>
        <div class="card__body">
          <h3 class="card__title">${p.title}</h3>
          <p class="card__desc">${(p.description && p.description[lang]) || ""}</p>
          <div class="card__tags">${(p.tags || []).map(x => `<span>${x}</span>`).join("")}</div>
        </div>
        <div class="card__open">
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><path d="M7 17 17 7M7 7h10v10"/></svg>
        </div>
      </article>`;
    }).join("");

    $$("#projectGrid .card").forEach(card => {
      const id = card.dataset.id;
      card.addEventListener("click", () => openModal(CFG.projects.find(p => p.id === id)));
      card.addEventListener("keydown", e => { if (e.key === "Enter") openModal(CFG.projects.find(p => p.id === id)); });
      card.addEventListener("pointermove", e => {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--cx", (e.clientX - r.left) + "px");
        card.style.setProperty("--cy", (e.clientY - r.top) + "px");
        if (!REDUCED) {
          const rx = ((e.clientY - r.top) / r.height - 0.5) * -5;
          const ry = ((e.clientX - r.left) / r.width - 0.5) * 5;
          card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
        }
      });
      card.addEventListener("pointerleave", () => { card.style.transform = ""; });
    });
    if (window.gsap && window.ScrollTrigger) ScrollTrigger.refresh();
  }

  /* ------------------------------------------------------------------
     MODAL (hybrid preview)
     ------------------------------------------------------------------ */
  const modal = $("#modal");
  let modalCurrent = null;
  function openModal(p) {
    if (!p) return;
    modalCurrent = p;
    const meta = CAT[p.category] || CAT.app;
    $("#modalCat").textContent = p.category.toUpperCase() + " · " + (p.year || "");
    $("#modalTitle").textContent = p.title;
    $("#modalDesc").textContent = (p.description && p.description[lang]) || "";
    $("#modalTags").innerHTML = (p.tags || []).map(x => `<span>${x}</span>`).join("");

    // preview media
    const img = $("#modalImg"), grad = $("#modalGrad"), frame = $("#modalFrame"), load = $("#modalLoad");
    frame.style.display = "none"; frame.src = "";
    if (p.image) { img.src = p.image; img.style.display = "block"; grad.style.display = "none"; grad.innerHTML = ""; }
    else {
      img.style.display = "none"; grad.style.display = "block"; grad.style.background = meta.grad;
      grad.innerHTML = `<span style="position:absolute;inset:0;display:grid;place-items:center;
        font-family:var(--f-display);font-weight:700;font-size:7rem;letter-spacing:-.04em;
        color:rgba(255,255,255,.07)">${p.title.charAt(0).toUpperCase()}</span>
        <span style="position:absolute;bottom:18px;left:22px;font-family:var(--f-mono);
        font-size:.72rem;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.4)">${p.title}</span>`;
    }

    // load-live button only if embeddable + has url
    if (p.embeddable && p.url) {
      load.style.display = "flex";
      load.querySelector(".modal__play").onclick = () => {
        frame.src = p.url; frame.style.display = "block"; load.style.display = "none";
        img.style.display = "none"; grad.style.display = "none";
      };
    } else { load.style.display = "none"; }

    // actions
    const acts = [];
    if (p.url)  acts.push(`<a class="btn btn--primary" data-magnetic href="${p.url}" target="_blank" rel="noopener">${t("modal_live")}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7M7 7h10v10"/></svg></a>`);
    if (p.repo) acts.push(`<a class="btn btn--ghost" data-magnetic href="${p.repo}" target="_blank" rel="noopener">${t("modal_repo")}</a>`);
    $("#modalActions").innerHTML = acts.join("");
    $("#modalNote").textContent = (p.url && !p.embeddable) ? t("modal_preview_note") : "";
    bindMagnetic();

    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    modal.classList.remove("open");
    document.body.style.overflow = "";
    $("#modalFrame").src = "";
    modalCurrent = null;
  }
  $$("[data-close]").forEach(el => el.addEventListener("click", closeModal));
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

  /* ------------------------------------------------------------------
     COUNTERS
     ------------------------------------------------------------------ */
  function animateCounters() {
    $$("[data-count]").forEach(el => {
      const target = +el.dataset.count, suffix = el.dataset.suffix || "";
      const io = new IntersectionObserver((entries) => {
        entries.forEach(en => {
          if (!en.isIntersecting) return;
          io.disconnect();
          if (REDUCED) { el.textContent = target + suffix; return; }
          const dur = 1400, start = performance.now();
          (function step(now) {
            const k = Math.min((now - start) / dur, 1);
            const e2 = 1 - Math.pow(1 - k, 3);
            el.textContent = Math.round(target * e2) + suffix;
            if (k < 1) requestAnimationFrame(step);
          })(start);
        });
      }, { threshold: 0.6 });
      io.observe(el);
    });
  }

  /* ------------------------------------------------------------------
     CUSTOM CURSOR
     ------------------------------------------------------------------ */
  function initCursor() {
    if (!window.matchMedia("(hover:hover) and (pointer:fine)").matches) {
      document.body.classList.remove("custom-cursor"); return;
    }
    const dot = $(".cursor-dot"), ring = $(".cursor-ring");
    let mx = 0, my = 0, rx = 0, ry = 0;
    window.addEventListener("pointermove", e => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
      document.documentElement.style.setProperty("--mx", mx + "px");
      document.documentElement.style.setProperty("--my", my + "px");
    });
    (function loop() {
      rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
      ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
      requestAnimationFrame(loop);
    })();
    const hov = "a,button,.card,.chip,.filter,[data-magnetic],input,textarea,.clink";
    document.addEventListener("pointerover", e => { if (e.target.closest(hov)) document.body.classList.add("cursor-hover"); });
    document.addEventListener("pointerout",  e => { if (e.target.closest(hov)) document.body.classList.remove("cursor-hover"); });
    document.addEventListener("pointerdown", () => document.body.classList.add("cursor-down"));
    document.addEventListener("pointerup",   () => document.body.classList.remove("cursor-down"));
  }

  /* ------------------------------------------------------------------
     MAGNETIC BUTTONS
     ------------------------------------------------------------------ */
  function bindMagnetic() {
    $$("[data-magnetic]").forEach(el => {
      if (el._mag) return; el._mag = true;
      const strength = el.classList.contains("btn") ? 0.4 : 0.3;
      el.addEventListener("pointermove", e => {
        if (REDUCED) return;
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * strength;
        const y = (e.clientY - r.top - r.height / 2) * strength;
        el.style.transform = `translate(${x}px,${y}px)`;
      });
      el.addEventListener("pointerleave", () => { el.style.transform = ""; });
    });
  }
  function bindHover() { /* placeholder hook kept for future */ }

  /* ------------------------------------------------------------------
     SCROLL ANIMATIONS (GSAP ScrollTrigger) + fallback
     ------------------------------------------------------------------ */
  function initScroll() {
    const nav = $("#nav");
    let lastY = 0;
    window.addEventListener("scroll", () => {
      const y = window.scrollY;
      nav.classList.toggle("scrolled", y > 40);
      if (y > lastY && y > 400) nav.classList.add("hidden"); else nav.classList.remove("hidden");
      lastY = y;
    }, { passive: true });

    if (window.gsap && window.ScrollTrigger && !REDUCED) {
      gsap.registerPlugin(ScrollTrigger);

      // hero entrance
      gsap.timeline({ defaults: { ease: "power3.out" } })
        .from(".hero__tag", { y: 24, opacity: 0, duration: .7, delay: .2 })
        .from(".hero__title .line span", { yPercent: 110, duration: 1, stagger: .12 }, "-=.4")
        .from(".hero__sub", { y: 24, opacity: 0, duration: .8 }, "-=.6")
        .from(".hero__cta .btn", { y: 24, opacity: 0, duration: .6, stagger: .1 }, "-=.5")
        .from(".hero__stack .chip", { y: 16, opacity: 0, duration: .5, stagger: .05 }, "-=.4")
        .from(".portrait", { opacity: 0, scale: .92, duration: 1.2, ease: "power2.out" }, "-=1.1")
        .from(".portrait__badge", { opacity: 0, y: 20, duration: .6, stagger: .15 }, "-=.6");

      // generic reveals
      $$(".reveal").forEach(el => {
        gsap.fromTo(el, { y: 40, opacity: 0 }, {
          y: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" }
        });
      });
      // staggered groups
      $$("[data-stagger]").forEach(group => {
        gsap.fromTo(group.children, { y: 28, opacity: 0 }, {
          y: 0, opacity: 1, duration: .7, ease: "power3.out", stagger: .08,
          scrollTrigger: { trigger: group, start: "top 85%" }
        });
      });
      // parallax on portrait + badges + auras
      $$("[data-parallax]").forEach(el => {
        const sp = parseFloat(el.dataset.parallax) || 0.1;
        gsap.to(el, {
          yPercent: -sp * 100,
          ease: "none",
          scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true }
        });
      });
      gsap.to(".aura-1", { yPercent: 30, ease: "none", scrollTrigger: { start: 0, end: "max", scrub: true } });
      gsap.to(".aura-2", { yPercent: -25, ease: "none", scrollTrigger: { start: 0, end: "max", scrub: true } });

      // section title subtle scale
      $$(".section-title").forEach(el => {
        gsap.fromTo(el, { letterSpacing: "-.06em" }, {
          letterSpacing: "-.03em", duration: 1,
          scrollTrigger: { trigger: el, start: "top 90%" }
        });
      });
    } else {
      // fallback reveal via IntersectionObserver
      const io = new IntersectionObserver((es) => es.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      }), { threshold: 0.15 });
      $$(".reveal,[data-stagger]").forEach(el => io.observe(el));
    }
  }

  /* ------------------------------------------------------------------
     GITHUB API → stats, languages, repos, code sphere
     ------------------------------------------------------------------ */
  async function loadGitHub() {
    const user = CFG.profile.githubUser;
    const fallback = () => {
      if (window.PortfolioBG) window.PortfolioBG.initCodeSphere(null);
      $("#repoList").innerHTML = `<div class="gh__loading">@${user}: adicione seus repositórios públicos no GitHub para preencher esta seção.</div>`;
    };
    if (!user) return fallback();
    try {
      const [uRes, rRes] = await Promise.all([
        fetch(`https://api.github.com/users/${user}`),
        fetch(`https://api.github.com/users/${user}/repos?per_page=100&sort=updated`)
      ]);
      if (!uRes.ok || !rRes.ok) throw new Error("gh");
      const u = await uRes.json();
      const repos = (await rRes.json()).filter(r => !r.fork);

      countTo($("#ghRepos"), u.public_repos || repos.length);
      countTo($("#ghFollowers"), u.followers || 0);
      const stars = repos.reduce((a, r) => a + (r.stargazers_count || 0), 0);
      countTo($("#ghStars"), stars);

      // language aggregation (by repo primary language)
      const counts = {};
      repos.forEach(r => { if (r.language) counts[r.language] = (counts[r.language] || 0) + 1; });
      let langs = Object.entries(counts).map(([name, c]) => ({ name, c })).sort((a, b) => b.c - a.c).slice(0, 8);
      const total = langs.reduce((a, l) => a + l.c, 0) || 1;
      langs = langs.map(l => ({ name: l.name, pct: Math.round((l.c / total) * 100), color: LANG_COLORS[l.name] || LANG_COLORS.Default }));
      if (langs.length) renderLangs(langs);
      if (window.PortfolioBG) window.PortfolioBG.initCodeSphere(langs.length ? langs : null);

      // recent repos
      const recent = repos.slice(0, 6);
      $("#repoList").innerHTML = recent.map(r => `
        <a class="repo" href="${r.html_url}" target="_blank" rel="noopener">
          <span class="repo__name"><span class="d" style="background:${LANG_COLORS[r.language] || LANG_COLORS.Default}"></span>${r.name}</span>
          <span class="repo__meta"><span>★ ${r.stargazers_count}</span><span>${r.language || "Sem linguagem"}</span></span>
        </a>`).join("") || `<div class="gh__loading">Sem repositórios públicos ainda.</div>`;
    } catch (e) {
      console.warn("GitHub API:", e);
      fallback();
    }
  }
  function countTo(el, target) {
    if (REDUCED) { el.textContent = target; return; }
    const dur = 1200, start = performance.now();
    (function step(now) {
      const k = Math.min((now - start) / dur, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - k, 3)));
      if (k < 1) requestAnimationFrame(step);
    })(start);
  }
  function renderLangs(langs) {
    $("#langBar").innerHTML = langs.map(l => `<i style="width:${l.pct}%;background:${l.color}"></i>`).join("");
    $("#langList").innerHTML = langs.map(l =>
      `<li><span class="d" style="background:${l.color}"></span>${l.name} <span style="color:var(--faint)">${l.pct}%</span></li>`
    ).join("");
  }

  /* ------------------------------------------------------------------
     CONTACT FORM → mailto compose
     ------------------------------------------------------------------ */
  function initForm() {
    const form = $("#contactForm");
    form.addEventListener("submit", e => {
      e.preventDefault();
      const name = $("#cName").value.trim();
      const email = $("#cEmail").value.trim();
      const msg = $("#cMsg").value.trim();
      const subject = encodeURIComponent(`[Portfolio] ${name}`);
      const body = encodeURIComponent(`${msg}\n\n${name} (${email})`);
      window.location.href = `mailto:${CFG.profile.email}?subject=${subject}&body=${body}`;
      const btn = form.querySelector("button span");
      const orig = btn.textContent; btn.textContent = t("form_ok");
      setTimeout(() => btn.textContent = orig, 3500);
    });
  }

  /* ------------------------------------------------------------------
     MOBILE MENU + LANG buttons + spotlight
     ------------------------------------------------------------------ */
  function initUI() {
    $$(".lang button").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));
    const burger = $("#burger");
    burger.addEventListener("click", () => document.body.classList.toggle("menu-open"));
    $$("#navPanel a, .nav__links a").forEach(a => a.addEventListener("click", () => document.body.classList.remove("menu-open")));
  }

  /* ------------------------------------------------------------------
     BOOT
     ------------------------------------------------------------------ */
  function boot() {
    injectProfile();
    renderFilters();
    renderStats();
    renderProjects();
    applyI18n();
    initCursor();
    bindMagnetic();
    initUI();
    initForm();
    initScroll();
    if (window.PortfolioBG) window.PortfolioBG.initStarfield();
    loadGitHub();
    document.body.classList.add("loaded");
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
