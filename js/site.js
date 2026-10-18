/* Portfolio — content (FR/EN), theme, language, charts. No dependencies. */
(function () {
  "use strict";

  var T = {
    fr: {
      "meta.title": "Alioune Cissé — Data Scientist",
      "meta.desc": "Portfolio de Alioune Cissé, data scientist : machine learning, pipelines de données, business intelligence et déploiement Azure. Montréal, Canada.",
      "cv.meta.title": "CV — Alioune Cissé, Data Scientist",
      "nav.about": "Profil", "nav.skills": "Compétences", "nav.exp": "Expérience", "nav.edu": "Formation", "nav.cv": "CV", "nav.contact": "Contact",
      "nav.menu": "Ouvrir le menu", "nav.theme": "Changer de thème", "nav.lang": "Langue", "skip": "Aller au contenu",
      "hero.eyebrow": "Disponible immédiatement",
      "hero.role": "Data Scientist · Machine Learning · Analytics",
      "hero.lead": "Titulaire d'une maîtrise recherche en IA appliquée (ÉTS), je transforme des données complexes en modèles fiables et en décisions claires : de l'exploration et la modélisation jusqu'au déploiement sur Azure et aux tableaux de bord.",
      "hero.cta.contact": "Me contacter", "hero.cta.cv": "Voir mon CV",
      "hero.loc": "Montréal, QC · Canada",
      "nb.file": "profil.py",
      "kpi.1": "Années en data & BI", "kpi.2": "Secteurs : recherche, ONG, conseil, tech", "kpi.3": "Maîtrise recherche, ÉTS", "kpi.4": "Mention Excellent, tableau d'honneur 2025",
      "kpi.1v": "3+", "kpi.2v": "4", "kpi.3v": "M.Sc.A.", "kpi.4v": "2025",
      "about.title": "Profil", "about.sub": "Un profil complet de la donnée : de la recherche en ML à la mise en production et à la restitution.",
      "about.1.t": "Approche", "about.1.p": "Je combine la rigueur scientifique de la recherche et le pragmatisme de l'ingénierie : une question claire, des données propres, des modèles évalués honnêtement, puis un résultat que les équipes peuvent utiliser.",
      "about.2.t": "Focus actuel", "about.2.p": "Machine learning sur de grands volumes de séries temporelles, déploiement et suivi d'applications sur Azure, intégration d'IA dans les opérations métier.",
      "about.3.t": "Points forts",
      "about.3.l": ["Machine learning, deep learning, traitement du signal", "Pipelines ETL, data warehouse, PostgreSQL", "Power BI et visualisation de données", "Azure : déploiement, sécurité, gouvernance", "Communication scientifique, bilingue FR/EN"],
      "sk.title": "Compétences", "sk.sub": "Une boîte à outils couvrant tout le cycle de vie d'un projet data.",
      "sk.ml": "IA & Machine Learning", "sk.lang": "Langages & requêtes", "sk.eng": "Data engineering & BI", "sk.cloud": "Cloud & modélisation", "sk.spoken": "Langues",
      "lang.fr": "Français", "lang.en": "Anglais", "lang.wo": "Wolof", "lang.native": "Natif", "lang.b2": "B2",
      "exp.title": "Expérience", "exp.sub": "De la BI en entreprise à la recherche appliquée, puis au déploiement.",
      "exp.chart": "Chronologie des postes (2022 → aujourd'hui)", "exp.now": "Présent",
      "edu.title": "Formation & distinctions", "edu.sub": "Une formation scientifique, entre ingénierie, IA et sciences des données.",
      "edu.award": "Distinction", "edu.1.t": "Maîtrise recherche — IA appliquée", "edu.1.o": "École de technologie supérieure (ÉTS), Montréal", "edu.1.w": "Sept. 2023 – Août 2025",
      "edu.2.t": "Master — Sciences des données et applications", "edu.2.o": "Université Iba Der Thiam de Thiès", "edu.2.w": "Déc. 2019 – Août 2021",
      "edu.3.t": "Licence — Informatique et gestion", "edu.3.o": "Université Iba Der Thiam de Thiès", "edu.3.w": "Janv. 2017 – Août 2019",
      "edu.4.t": "Tableau d'honneur ÉTS (2025)", "edu.4.p": "Mention Excellent pour la performance académique et scientifique.",
      "edu.5.t": "Perfectionnement continu", "edu.5.p": "Cours d'anglais avancé (Institut Linguistique Provincial, depuis fév. 2025) et projets personnels en IA.",
      "contact.title": "Un projet data ? Parlons-en.", "contact.p": "Je recherche un poste de data scientist ou data analyst à Montréal ou en télétravail. Je réponds rapidement.",
      "footer": "© 2026 Alioune Cissé · Montréal",
      "cv.back": "← Retour au portfolio", "cv.print": "Imprimer / Enregistrer en PDF",
      "cv.summary": "Résumé", "cv.exp": "Expérience professionnelle", "cv.edu": "Formation", "cv.skills": "Compétences", "cv.langs": "Langues",
      "cv.summary.p": "Data scientist titulaire d'une maîtrise recherche en IA appliquée (ÉTS, Montréal). Expérience en machine learning sur de grands volumes de données, en pipelines ETL / data warehouse, en tableaux de bord Power BI et en déploiement sur Azure. Bilingue français / anglais.",
      "cv.tagline": "Data Scientist"
    },
    en: {
      "meta.title": "Alioune Cissé — Data Scientist",
      "meta.desc": "Portfolio of Alioune Cissé, data scientist: machine learning, data pipelines, business intelligence and Azure deployment. Montréal, Canada.",
      "cv.meta.title": "Résumé — Alioune Cissé, Data Scientist",
      "nav.about": "About", "nav.skills": "Skills", "nav.exp": "Experience", "nav.edu": "Education", "nav.cv": "Résumé", "nav.contact": "Contact",
      "nav.menu": "Open menu", "nav.theme": "Toggle theme", "nav.lang": "Language", "skip": "Skip to content",
      "hero.eyebrow": "Available immediately",
      "hero.role": "Data Scientist · Machine Learning · Analytics",
      "hero.lead": "With a research master's in applied AI (ÉTS), I turn complex data into reliable models and clear decisions: from exploration and modelling through to Azure deployment and dashboards.",
      "hero.cta.contact": "Get in touch", "hero.cta.cv": "View my résumé",
      "hero.loc": "Montréal, QC · Canada",
      "nb.file": "profile.py",
      "kpi.1": "Years in data & BI", "kpi.2": "Sectors: research, NGO, consulting, tech", "kpi.3": "Research master's, ÉTS", "kpi.4": "Excellent mention, honour roll 2025",
      "kpi.1v": "3+", "kpi.2v": "4", "kpi.3v": "M.Sc.A.", "kpi.4v": "2025",
      "about.title": "About", "about.sub": "A full-cycle data profile: from ML research to production and reporting.",
      "about.1.t": "Approach", "about.1.p": "I pair the rigour of research with engineering pragmatism: a clear question, clean data, honestly evaluated models, then a result teams can actually use.",
      "about.2.t": "Current focus", "about.2.p": "Machine learning on large time-series datasets, application deployment and monitoring on Azure, and AI integration into business operations.",
      "about.3.t": "Strengths",
      "about.3.l": ["Machine learning, deep learning, signal processing", "ETL pipelines, data warehousing, PostgreSQL", "Power BI and data visualisation", "Azure: deployment, security, governance", "Scientific communication, bilingual EN/FR"],
      "sk.title": "Skills", "sk.sub": "A toolbox covering the whole lifecycle of a data project.",
      "sk.ml": "AI & Machine Learning", "sk.lang": "Languages & querying", "sk.eng": "Data engineering & BI", "sk.cloud": "Cloud & modelling", "sk.spoken": "Languages",
      "lang.fr": "French", "lang.en": "English", "lang.wo": "Wolof", "lang.native": "Native", "lang.b2": "B2",
      "exp.title": "Experience", "exp.sub": "From enterprise BI to applied research, then to deployment.",
      "exp.chart": "Roles timeline (2022 → today)", "exp.now": "Present",
      "edu.title": "Education & honours", "edu.sub": "A scientific background spanning engineering, AI and data science.",
      "edu.award": "Honour", "edu.1.t": "Research master's — Applied AI", "edu.1.o": "École de technologie supérieure (ÉTS), Montréal", "edu.1.w": "Sept 2023 – Aug 2025",
      "edu.2.t": "Master's — Data Science and Applications", "edu.2.o": "Université Iba Der Thiam de Thiès", "edu.2.w": "Dec 2019 – Aug 2021",
      "edu.3.t": "Bachelor's — Computer Science and Management", "edu.3.o": "Université Iba Der Thiam de Thiès", "edu.3.w": "Jan 2017 – Aug 2019",
      "edu.4.t": "ÉTS Honour Roll (2025)", "edu.4.p": "Excellent mention for academic and scientific performance.",
      "edu.5.t": "Continuous learning", "edu.5.p": "Advanced English course (Institut Linguistique Provincial, since Feb 2025) and personal AI projects.",
      "contact.title": "Got a data project? Let's talk.", "contact.p": "I'm looking for a data scientist or data analyst role in Montréal or remote. I reply quickly.",
      "footer": "© 2026 Alioune Cissé · Montréal",
      "cv.back": "← Back to portfolio", "cv.print": "Print / Save as PDF",
      "cv.summary": "Summary", "cv.exp": "Professional experience", "cv.edu": "Education", "cv.skills": "Skills", "cv.langs": "Languages",
      "cv.summary.p": "Data scientist with a research master's in applied AI (ÉTS, Montréal). Experience in machine learning on large datasets, ETL / data warehouse pipelines, Power BI dashboards and Azure deployment. Bilingual French / English.",
      "cv.tagline": "Data Scientist"
    }
  };

  // start/end are YYYY-MM; end null = ongoing
  var JOBS = [
    { id: 1, org: "BIRCIS Technologies & Consulting", short: "BIRCIS", start: "2024-05", end: null, place: "Montréal", cls: "bar-1",
      role: { fr: "Analyste programmeur", en: "Programmer Analyst" },
      b: { fr: ["Déploiement et suivi applicatif sur Azure, sécurité des données.", "Diagnostic du code existant et améliorations continues.", "Intégration d'IA pour optimiser les opérations métier."],
           en: ["Application deployment and monitoring on Azure, data security.", "Diagnosis of existing code and continuous improvements.", "AI integration to optimise business operations."] } },
    { id: 2, org: "CAE Inc. & LARCASE (ÉTS)", short: "CAE · ÉTS", start: "2023-09", end: "2025-08", place: "Montréal", cls: "bar-2",
      role: { fr: "Assistant de recherche (ML)", en: "Research Assistant (ML)" },
      b: { fr: ["Recherche en IA appliquée : identification de segments à partir de signaux temporels.", "Traitement de grands volumes de données et modélisation par machine learning.", "Mémoire noté excellent, présentation scientifique primée."],
           en: ["Applied AI research: identifying segments in time-series signals.", "Large-scale data processing and machine learning modelling.", "Thesis graded excellent, award-winning scientific presentation."] } },
    { id: 3, org: "ONG ALIMA", short: "ALIMA", start: "2023-01", end: "2023-08", place: "Dakar", cls: "bar-3",
      role: { fr: "Assistant Data", en: "Data Assistant" },
      b: { fr: ["Automatisation du reporting et optimisation des cohortes marketing.", "Tableaux de bord Power BI et segmentation des donateurs.", "Supervision CRM et structuration du dictionnaire de données."],
           en: ["Reporting automation and marketing cohort optimisation.", "Power BI dashboards and donor segmentation.", "CRM oversight and data dictionary design."] } },
    { id: 4, org: "Expert-IS", short: "Expert-IS", start: "2022-06", end: "2022-12", place: "Dakar", cls: "bar-4",
      role: { fr: "Stage Business Intelligence", en: "Business Intelligence Intern" },
      b: { fr: ["Conception d'un data warehouse complet et supervision continue.", "ETL avec Talend, dashboards Power BI et optimisation PostgreSQL."],
           en: ["Design of a complete data warehouse with ongoing monitoring.", "ETL with Talend, Power BI dashboards and PostgreSQL tuning."] } }
  ];

  var SKILLS = {
    ml: ["Machine Learning", "Deep Learning", "scikit-learn", "TensorFlow", "NLP", "Computer Vision", "Azure ML", "Time series"],
    lang: ["Python", "SQL", "R", "MATLAB"],
    eng: ["Power BI", "Spark", "Talend (ETL)", "PostgreSQL", "Data warehouse", "Data visualization"],
    cloud: ["Azure", "Simulink", "Signal processing", "System simulation"]
  };

  var root = document.documentElement;
  var lang = "fr";
  var MONTHS = { fr: ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."], en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] };

  function store(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* storage unavailable */ } }
  function load(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function fmt(ym) { if (!ym) return T[lang]["exp.now"]; var p = ym.split("-"); return MONTHS[lang][+p[1] - 1] + " " + p[0]; }
  function el(tag, cls, txt) { var e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; }

  function applyTexts() {
    var d = T[lang];
    root.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (n) { var v = d[n.getAttribute("data-i18n")]; if (typeof v === "string") n.textContent = v; });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (n) { n.setAttribute("aria-label", d[n.getAttribute("data-i18n-aria")]); });
    document.querySelectorAll("[data-i18n-list]").forEach(function (ul) {
      ul.innerHTML = ""; d[ul.getAttribute("data-i18n-list")].forEach(function (t) { ul.appendChild(el("li", null, t)); });
    });
    var isCv = document.body.hasAttribute("data-cv");
    document.title = d[isCv ? "cv.meta.title" : "meta.title"];
    var md = document.querySelector('meta[name="description"]'); if (md) md.setAttribute("content", d["meta.desc"]);
    document.querySelectorAll(".seg button").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.lang === lang)); });
  }

  function renderJobs() {
    var d = T[lang];
    var tl = document.getElementById("timeline");
    if (tl) {
      tl.innerHTML = "";
      JOBS.forEach(function (j) {
        var row = el("article", "job reveal");
        var meta = el("div", "job-meta");
        meta.appendChild(el("b", null, fmt(j.start) + " – " + fmt(j.end)));
        meta.appendChild(document.createTextNode(j.place));
        var card = el("div", "card");
        card.appendChild(el("h3", null, j.role[lang]));
        card.appendChild(el("p", "org", j.org));
        var ul = el("ul"); j.b[lang].forEach(function (t) { ul.appendChild(el("li", null, t)); });
        card.appendChild(ul); row.appendChild(meta); row.appendChild(card); tl.appendChild(row);
      });
    }
    var cv = document.getElementById("cv-jobs");
    if (cv) {
      cv.innerHTML = "";
      JOBS.forEach(function (j) {
        var it = el("div", "cv-item");
        it.appendChild(el("h3", null, j.role[lang]));
        it.appendChild(el("div", "when", fmt(j.start) + " – " + fmt(j.end)));
        it.appendChild(el("div", "org", j.org + " · " + j.place));
        var ul = el("ul"); j.b[lang].forEach(function (t) { ul.appendChild(el("li", null, t)); });
        it.appendChild(ul); cv.appendChild(it);
      });
    }
    var cvEdu = document.getElementById("cv-edu");
    if (cvEdu) {
      cvEdu.innerHTML = "";
      [1, 2, 3].forEach(function (i) {
        var it = el("div", "cv-item");
        it.appendChild(el("h3", null, d["edu." + i + ".t"]));
        it.appendChild(el("div", "when", d["edu." + i + ".w"]));
        it.appendChild(el("div", "org", d["edu." + i + ".o"]));
        cvEdu.appendChild(it);
      });
      var hon = el("div", "cv-item");
      hon.appendChild(el("h3", null, d["edu.4.t"]));
      hon.appendChild(el("div", "org", d["edu.4.p"]));
      cvEdu.appendChild(hon);
    }
  }

  function renderSkills() {
    var names = { ml: "sk.ml", lang: "sk.lang", eng: "sk.eng", cloud: "sk.cloud" };
    document.querySelectorAll("[data-chips]").forEach(function (box) {
      box.innerHTML = ""; SKILLS[box.getAttribute("data-chips")].forEach(function (s) { box.appendChild(el("li", "chip", s)); });
    });
    var cv = document.getElementById("cv-skills");
    if (cv) {
      cv.innerHTML = "";
      Object.keys(names).forEach(function (k) {
        var w = el("div", "cv-skill"); w.appendChild(el("b", null, T[lang][names[k]])); w.appendChild(el("span", null, SKILLS[k].join(" · "))); cv.appendChild(w);
      });
    }
  }

  // Gantt chart of roles, built from the same data as the cards below it.
  function renderGantt() {
    var host = document.getElementById("gantt");
    if (!host) return;
    var NS = "http://www.w3.org/2000/svg", W = 880, L = 210, R = 20, rowH = 44, top = 30, H = top + rowH * JOBS.length + 8;
    var y0 = 2022, y1 = 2027, now = new Date(); now = now.getFullYear() + now.getMonth() / 12;
    function x(ym) { var p = ym.split("-"); return L + ((+p[0] + (+p[1] - 1) / 12 - y0) / (y1 - y0)) * (W - L - R); }
    function xn(v) { return L + ((v - y0) / (y1 - y0)) * (W - L - R); }
    function s(tag, a) { var e = document.createElementNS(NS, tag); for (var k in a) e.setAttribute(k, a[k]); return e; }
    var svg = s("svg", { viewBox: "0 0 " + W + " " + H, class: "gantt", role: "img", "aria-label": T[lang]["exp.chart"] });
    for (var y = y0; y <= y1; y++) {
      svg.appendChild(s("line", { x1: xn(y), x2: xn(y), y1: top - 8, y2: H - 4 }));
      if (y < y1) { var t = s("text", { x: xn(y) + 4, y: 16 }); t.textContent = y; svg.appendChild(t); }
    }
    JOBS.forEach(function (j, i) {
      var yy = top + i * rowH, x1 = x(j.start), x2 = j.end ? x(j.end) + (W - L - R) / (y1 - y0) / 12 : xn(now);
      var lb = s("text", { x: 0, y: yy + 25, class: "lbl" }); lb.textContent = j.short; svg.appendChild(lb);
      svg.appendChild(s("rect", { x: x1, y: yy + 8, width: Math.max(6, x2 - x1), height: 24, rx: 5, class: j.cls }));
    });
    host.innerHTML = ""; host.appendChild(svg);
  }

  function setLang(l) { lang = l; store("lang", l); applyTexts(); renderJobs(); renderSkills(); renderGantt(); observe(); }
  function setTheme(t) { root.setAttribute("data-theme", t); store("theme", t); }

  var io;
  function observe() {
    var items = document.querySelectorAll(".reveal:not(.in)");
    if (!("IntersectionObserver" in window)) { items.forEach(function (n) { n.classList.add("in"); }); return; }
    if (!io) io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }); }, { threshold: .08 });
    items.forEach(function (n) { io.observe(n); });
  }

  function init() {
    var saved = load("lang");
    lang = saved === "fr" || saved === "en" ? saved : ((navigator.language || "fr").toLowerCase().indexOf("fr") === 0 ? "fr" : "en");
    document.querySelectorAll(".seg button").forEach(function (b) { b.addEventListener("click", function () { setLang(b.dataset.lang); }); });
    var tb = document.getElementById("theme-toggle");
    if (tb) tb.addEventListener("click", function () { setTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark"); });
    var mb = document.getElementById("menu-btn"), links = document.getElementById("nav-links");
    if (mb && links) {
      mb.addEventListener("click", function () { var o = links.classList.toggle("open"); mb.setAttribute("aria-expanded", String(o)); });
      links.addEventListener("click", function (e) { if (e.target.tagName === "A") { links.classList.remove("open"); mb.setAttribute("aria-expanded", "false"); } });
    }
    var pb = document.getElementById("print-btn"); if (pb) pb.addEventListener("click", function () { window.print(); });
    var yr = document.getElementById("year"); if (yr) yr.textContent = new Date().getFullYear();
    // highlight current section in nav
    var links2 = document.querySelectorAll('.nav-links a[href^="#"]');
    if (links2.length && "IntersectionObserver" in window) {
      var so = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) links2.forEach(function (a) { a.setAttribute("aria-current", String(a.getAttribute("href") === "#" + e.target.id)); }); });
      }, { rootMargin: "-40% 0px -55% 0px" });
      document.querySelectorAll("main section[id]").forEach(function (s) { so.observe(s); });
    }
    setLang(lang);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
