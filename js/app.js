(function () {
  const D = window.PORTFOLIO;
  const P = D.perfil;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const page = document.body.dataset.page;
  const ANO = "2026";
  const firstName = P.nome.split(" ")[0];

  const ETAPAS = [
    { k: "definir", nome: "Definir o problema", desc: "Pergunta de negócio, quem decide e o que é sucesso." },
    { k: "dados", nome: "Localizar os dados", desc: "Fontes, campos usados e dicionário de dados." },
    { k: "preparar", nome: "Limpar e preparar", desc: "Padronização, erros tratados e regras aplicadas." },
    { k: "apresentar", nome: "Visualizar e apresentar", desc: "Painéis e relatórios na linguagem de quem age." }
  ];

  /* ================= Cabeçalho e rodapé ================= */
  const NAV = [
    { href: "projetos.html", label: "Projetos", page: ["projetos", "projeto"] },
    { href: "sobre.html", label: "Sobre", page: ["sobre"] },
    { href: "jornada.html", label: "Jornada", page: ["jornada"] },
    { href: P.email ? "mailto:" + P.email : "#contato", label: "Contato", page: [] }
  ];
  $("[data-header]").outerHTML =
    '<header class="site-header"><nav class="nav" aria-label="Principal">' +
    '<a class="nav__brand" href="index.html" aria-label="Início">' + esc(P.apelido || firstName) + "<span>.</span></a>" +
    '<button class="nav__toggle" type="button" aria-expanded="false" aria-controls="nav-menu" aria-label="Abrir menu"><span></span><span></span><span></span></button>' +
    '<ul class="nav__menu" id="nav-menu">' +
    NAV.map((n) => '<li><a href="' + n.href + '"' + (n.page.includes(page) ? ' aria-current="page"' : "") + ">" + n.label + "</a></li>").join("") +
    "</ul></nav></header>";
  const toggle = $(".nav__toggle");
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  });
  $$(".nav__menu a").forEach((a) => a.addEventListener("click", () => toggle.setAttribute("aria-expanded", "false")));

  const SVG = {
    linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect width="24" height="24" rx="3" fill="currentColor"/><g fill="#fff"><circle cx="7" cy="6.8" r="1.7"/><rect x="5.5" y="9.5" width="3" height="9"/><path d="M10.5 9.5h2.9v1.3c.4-.8 1.4-1.5 2.9-1.5 3 0 3.2 2 3.2 4.4v4.8h-3v-4.3c0-1 0-2.4-1.5-2.4s-1.6 1.1-1.6 2.3v4.4h-2.9z"/></g></svg>',
    github: '<svg viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1.1.4 2.2.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1.1.4-2.2.4-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1.1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1.1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1.1-1.7.2-2.1.4-.5.2-.9.4-1.2.8-.4.4-.6.7-.8 1.2-.2.4-.3 1-.4 2.1C2.7 8.5 2.7 8.9 2.7 12s0 3.5.1 4.7c.1 1.1.2 1.7.4 2.1.2.5.4.9.8 1.2.4.4.7.6 1.2.8.4.2 1 .3 2.1.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.7-.2 2.1-.4.5-.2.9-.4 1.2-.8.4-.4.6-.7.8-1.2.2-.4.3-1 .4-2.1.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1.1-.2-1.7-.4-2.1-.2-.5-.4-.9-.8-1.2-.4-.4-.7-.6-1.2-.8-.4-.2-1-.3-2.1-.4C15.5 4 15.1 4 12 4zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8zm0 8.1a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4zm5.1-8.3a1.1 1.1 0 1 1 0-2.3 1.1 1.1 0 0 1 0 2.3z"/></svg>',
    email: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect width="24" height="24" rx="3" fill="currentColor"/><path d="M5 7.5h14v9H5z" fill="none" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/><path d="M5.5 8l6.5 5 6.5-5" fill="none" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/></svg>'
  };
  function social(kind, label, href, ext) {
    if (!href) return '<li><a class="is-pending" href="#contato" aria-label="' + label + ' (link ainda não configurado)" title="Configure em js/data.js">' + SVG[kind] + "</a></li>";
    return '<li><a href="' + esc(href) + '" aria-label="' + label + '"' + (ext ? ' target="_blank" rel="noopener"' : "") + ">" + SVG[kind] + "</a></li>";
  }
  $("[data-footer]").outerHTML =
    '<footer class="site-footer" id="contato"><div class="container">' +
    (P.versiculos ? '<blockquote class="verse">' + esc(P.versiculos[0].texto) + "<cite>" + esc(P.versiculos[0].ref) + "</cite></blockquote>" : "") +
    '<ul class="social">' + social("linkedin", "LinkedIn", P.linkedin, true) + social("github", "GitHub", P.github, true) +
    social("instagram", "Instagram", P.instagram, true) + social("email", "E-mail", P.email ? "mailto:" + P.email : "", false) + "</ul>" +
    '<p class="copyright">Copyright &copy;' + new Date().getFullYear() + " Todos os direitos reservados</p></div></footer>" +
    '<dialog class="lightbox" data-lightbox aria-label="Visualizar imagem"><button class="lb-close" type="button" data-lb-close aria-label="Fechar">×</button>' +
    '<img data-lb-img alt=""><p data-lb-cap></p><div class="lb-nav"><button type="button" data-lb-prev aria-label="Anterior">‹</button><span data-lb-count></span><button type="button" data-lb-next aria-label="Próxima">›</button></div></dialog>';

  /* ================= Lightbox ================= */
  const lb = $("[data-lightbox]");
  let lbItems = [], lbI = 0;
  function showLb() {
    const it = lbItems[lbI];
    $("[data-lb-img]").src = it.src; $("[data-lb-img]").alt = it.legenda;
    $("[data-lb-cap]").textContent = it.legenda;
    $("[data-lb-count]").textContent = lbI + 1 + " / " + lbItems.length;
    $(".lb-nav").hidden = lbItems.length < 2;
  }
  function openLb(items, i) { lbItems = items; lbI = i || 0; showLb(); lb.showModal(); }
  $("[data-lb-close]").addEventListener("click", () => lb.close());
  $("[data-lb-prev]").addEventListener("click", () => { lbI = (lbI - 1 + lbItems.length) % lbItems.length; showLb(); });
  $("[data-lb-next]").addEventListener("click", () => { lbI = (lbI + 1) % lbItems.length; showLb(); });
  lb.addEventListener("click", (e) => { if (e.target === lb) lb.close(); });
  lb.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") $("[data-lb-next]").click();
    if (e.key === "ArrowLeft") $("[data-lb-prev]").click();
  });

  /* ================= Peças compartilhadas ================= */
  const CAT_ICON = { "Excel VBA": "task", "Power Automate": "auto", "Análise de Processos": "decision", "Power BI": "dados", "Projeto acadêmico": "estudo" };
  const svg = (d) => '<svg viewBox="0 0 24 24" aria-hidden="true">' + d + "</svg>";
  const XI = {
    heart: '<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>',
    fe: '<path d="M12 3v18M7 8h10"/>',
    foto: '<rect x="3" y="7" width="18" height="13" rx="3"/><circle cx="12" cy="13.5" r="3.5"/><path d="M8 7l1.5-3h5L16 7"/>',
    poesia: '<path d="M4 20c4-1 7-4 9-8l3-6 3 3-6 3c-4 2-7 5-8 9z"/><path d="M4 20l5-5"/>',
    musica: '<path d="M9 18V5l11-2v13"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="17.5" cy="16" r="2.5"/>',
    filme: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 5v14M17 5v14M3 9h4M3 15h4M17 9h4M17 15h4"/>',
    game: '<path d="M6 9h12a4 4 0 0 1 3.9 4.9l-.6 2.6a2.5 2.5 0 0 1-4.3 1.1L15 15H9l-2 2.6a2.5 2.5 0 0 1-4.3-1.1l-.6-2.6A4 4 0 0 1 6 9z"/><path d="M8 11v3M6.5 12.5h3M15.5 12h.01M17.5 13.5h.01"/>',
    bola: '<circle cx="12" cy="12" r="9"/><path d="M12 7l4 3-1.5 4.5h-5L8 10z"/><path d="M12 3v4M21 10.5l-5-.5M18 19l-3.5-4.5M6 19l3.5-4.5M3 10.5l5-.5"/>'
  };
  const TOOLS = [
    ["Excel", '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 10h16M4 15h16M10 4v16"/>'],
    ["VBA", '<path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/>'],
    ["Power Query", '<path d="M3 5h18l-7 8v6l-4 2v-8z"/>'],
    ["Power Automate", '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>'],
    ["Power BI", '<path d="M5 20V12M10 20V6M15 20v-9M20 20V3"/>'],
    ["SharePoint", '<circle cx="6" cy="12" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="18" cy="18" r="3"/><path d="M8.6 10.6l6.8-3.2M8.6 13.4l6.8 3.2"/>'],
    ["SAP GUI Scripting", '<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>'],
    ["APIs REST", '<path d="M4 7h10M4 12h16M4 17h7"/><circle cx="17" cy="7" r="2"/><circle cx="14" cy="17" r="2"/>'],
    ["IA generativa", '<path d="M12 2l2.2 6.8L21 11l-6.8 2.2L12 20l-2.2-6.8L3 11l6.8-2.2z"/>']
  ];
  const avatar = (cls) => '<div class="hero__photo ' + (cls || "") + '">' +
    (P.foto ? '<img src="' + esc(P.foto) + '" alt="Foto de ' + esc(P.nome) + '">' : '<span aria-hidden="true">' + esc(P.iniciais) + "</span>") + "</div>";

  function miniChart(p) {
    if (p.categoria === "Projeto acadêmico") return '<span class="md-app"><span class="md-heart">' + svg(XI.heart) + '</span><span class="md-lines"><i></i><i></i><i></i></span><span class="md-week">' + [1, 2, 3, 4, 5, 6, 7].map((n) => "<i" + (n === 5 ? ' class="on"' : "") + "></i>").join("") + "</span></span>";
    if (p.categoria === "Power BI") return '<span class="md-bars">' + [40, 65, 52, 80, 58, 92, 70].map((v) => '<i style="height:' + v + '%"></i>').join("") + "</span>";
    if (p.categoria === "Power Automate") return '<span class="md-flow">' + p.fluxo.slice(0, 4).map((s) => '<i class="t-' + s.tipo + '"></i>').join("<b></b>") + "</span>";
    if (p.categoria === "Análise de Processos") return '<span class="md-lanes">' + [[0, 2], [1, 3], [2, 0]].map((r) =>
      "<span>" + r.map((n) => '<i style="margin-left:' + n * 14 + '%"></i>').join("") + "</span>").join("") + "</span>";
    return '<span class="md-table">' + ["s", "d", "s", "v", "ok"].map((t) => '<span><i></i><i></i><em class="md-' + t + '"></em></span>').join("") + "</span>";
  }
  function thumb(p) {
    if (p.vitrine) return '<a class="work-item__thumb thumb-phones" href="projeto.html#' + p.id + '" tabindex="-1" aria-hidden="true">' +
      p.vitrine.slice(0, 2).map((src) => '<img src="' + esc(src) + '" alt="" loading="lazy">').join("") + "</a>";
    const k = p.indicadores.slice(0, 2);
    return '<a class="work-item__thumb mini-dash" href="projeto.html#' + p.id + '" tabindex="-1" aria-hidden="true">' +
      '<span class="md-side"><i class="on"></i><i></i><i></i><i></i><i></i></span>' +
      '<span class="md-main"><span class="md-title">' + Flow.icon(CAT_ICON[p.categoria] || "task") + esc(p.categoria) + "</span>" +
      (p.categoria === "Projeto acadêmico" ? "" : '<span class="md-kpis">' + k.map((x) => "<span><b>" + esc(x.valor) + "</b><small>" + esc(x.rotulo.split(" ").slice(0, 2).join(" ")) + "</small></span>").join("") + "</span>") +
      miniChart(p) + "</span></a>";
  }
  function workItem(p, h) {
    h = h || 3;
    return '<article class="work-item" data-cat="' + esc(p.categoria) + '">' + thumb(p) +
      '<div class="work-item__body"><h' + h + ' class="work-item__title"><a href="projeto.html#' + p.id + '">' + esc(p.titulo) + "</a></h" + h + ">" +
      '<p class="meta"><span class="badge">' + ANO + '</span><span class="meta__category">' + esc(p.categoria) + '</span><span class="status-pill">' + esc(p.status) + "</span></p>" +
      '<p class="work-item__summary">' + esc(p.resumo) + "</p></div></article>";
  }
  const cycleList = () => '<ol class="cycle">' + ETAPAS.map((e) => "<li><strong>" + e.nome + "</strong><span>" + e.desc + "</span></li>").join("") + "</ol>";
  const ul = (arr, cls) => '<ul' + (cls ? ' class="' + cls + '"' : "") + ">" + arr.map((x) => "<li>" + esc(x) + "</li>").join("") + "</ul>";
  const table = (head, rows, cls) => '<div class="table-wrap"><table class="data-table ' + cls + '"><thead><tr>' + head.map((h) => "<th>" + h + "</th>").join("") +
    "</tr></thead><tbody>" + rows.map((r) => "<tr>" + r.map((c) => "<td>" + esc(c) + "</td>").join("") + "</tr>").join("") + "</tbody></table></div>";

  /* ================= Páginas ================= */
  const main = $("#main");

  if (page === "home") {
    const recentes = D.jornada.filter((j) => j.tipo !== "objetivo").slice(-2).reverse();
    const destaques = D.projetos.filter((p) => p.destaque);
    const T = P.tituloHero || ["Oi, eu sou a " + firstName + ",", P.cargoHero || "Automação de Processos"];
    main.innerHTML =
      '<section class="hero container"><div class="hero__text">' +
      '<p class="hero__hello">' + esc(T[0]) + "</p>" +
      '<h1 class="hero__title">' + esc(T[1]) + (T[2] ? ' <span class="grad">' + esc(T[2]) + "</span>" : "") + "</h1>" +
      '<p class="hero__intro">' + esc(P.resumo) + "</p>" +
      '<div class="hero__actions">' +
      (P.curriculo ? '<a class="button" href="' + esc(P.curriculo) + '" target="_blank" rel="noopener">Baixar currículo</a>'
        : '<a class="button is-pending" href="#contato" title="Adicione o PDF em js/data.js">Baixar currículo</a>') +
      '<a class="button button--ghost" href="' + (P.email ? "mailto:" + esc(P.email) : "#contato") + '">Entrar em contato</a></div>' +
      "</div>" + avatar() + "</section>" +
      '<section class="container tools-wrap" aria-labelledby="ferr"><p class="label" id="ferr">Experiência com</p><ul class="tools">' +
      TOOLS.map((t) => '<li><span class="ic">' + svg(t[1]) + "</span><small>" + t[0] + "</small></li>").join("") + "</ul></section>" +
      '<section class="band" aria-labelledby="recentes"><div class="container"><div class="section-head">' +
      '<h2 class="section-title" id="recentes">Trajetória recente</h2><a class="text-link" href="jornada.html">Ver tudo</a></div>' +
      '<div class="post-cards">' + recentes.map((j) => '<article class="post-card"><h3 class="post-card__title"><a href="jornada.html">' + esc(j.titulo) + "</a></h3>" +
        '<p class="post-meta"><span>Etapa ' + (D.jornada.indexOf(j) + 1) + '</span><span class="post-meta__sep" aria-hidden="true"></span><span>' + esc(j.quando) + "</span></p><p>" + esc(j.texto) + "</p></article>").join("") +
      "</div></div></section>" +

      '<section class="featured container" aria-labelledby="destaques"><h2 class="section-title" id="destaques">Projetos em destaque</h2>' +
      destaques.map((p) => workItem(p)).join("") + "</section>";
  }

  if (page === "projetos") {
    const cats = ["Todos"].concat([...new Set(D.projetos.map((p) => p.categoria))]);
    main.innerHTML =
      '<section class="container"><h1 class="page-title page-title--heavy">Projetos</h1>' +
      '<p class="page-intro">Projetos do meu estágio em Supply Chain. Cada estudo de caso segue o mesmo ciclo de análise: definir o problema, localizar os dados, limpar e preparar, visualizar e apresentar. Dados e nomes foram anonimizados.</p>' +
      '<div class="filters" role="group" aria-label="Filtrar por categoria">' + cats.map((c, i) => '<button type="button" aria-pressed="' + (i === 0) + '" data-cat="' + esc(c) + '">' + esc(c) + "</button>").join("") + "</div>" +
      '<div class="works-list">' + D.projetos.map((p) => workItem(p, 2)).join("") + "</div></section>";
    $(".filters").addEventListener("click", (e) => {
      const b = e.target.closest("button"); if (!b) return;
      $$(".filters button").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
      $$(".works-list .work-item").forEach((w) => { w.hidden = !(b.dataset.cat === "Todos" || w.dataset.cat === b.dataset.cat); });
    });
  }

  if (page === "projeto") {
    const render = () => {
      const id = location.hash.slice(1);
      const i = Math.max(0, D.projetos.findIndex((p) => p.id === id));
      const p = D.projetos[i];
      document.title = p.titulo + " | " + P.nome;
      main.innerHTML = projectDetail(p, i);
      afterDetail(p);
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", render);
    render();
  }

  function mockPainel() {
    const linhas = [
      ["100245-00", "Prog. LCT01", "Ag. Prog. PCP", "Status", "Prog. LCT01"],
      ["100245-01", "Pronto", "Ag. Prog. PCP", "Status", "Pronto"],
      ["100318-00", "Prog. LPP02", "Prog. LPP02", "Data", "Atrasado: 4 dias"],
      ["100402-00", "Cancelado", "Ag. Prog. PCP", "Verificar no Gantt", "Cancelado × ativo"],
      ["100417-02", "—", "Ag. Prog. PCP", "Verificar no Gantt", "Não localizado"]
    ];
    return '<figure class="mock"><div class="mock-bar">Painel_Integrado: Auditoria Gantt × SAP</div>' +
      '<div class="mock-kpis"><div><strong>61</strong><span>Atualizar status</span></div><div><strong>0</strong><span>Atualizar data</span></div><div><strong>2</strong><span>Status e data</span></div><div><strong>181</strong><span>Verificar no Gantt</span></div></div>' +
      '<div class="table-wrap"><table class="data-table"><thead><tr><th>Pedido</th><th>Status no Gantt</th><th>Status SAP</th><th>O que atualizar</th><th>Diagnóstico</th></tr></thead><tbody>' +
      linhas.map((l) => "<tr><td>" + l[0] + "</td><td>" + l[1] + "</td><td>" + l[2] + '</td><td><span class="act act-' + l[3].split(" ")[0].toLowerCase() + '">' + l[3] + "</span></td><td" + (/Atrasado|Cancelado|Não loc/.test(l[4]) ? ' class="crit"' : "") + ">" + l[4] + "</td></tr>").join("") +
      "</tbody></table></div></figure>";
  }

  function stepBody(p, k) {
    const a = p.analise[k];
    let h = "";
    if (k === "definir") {
      h += '<p class="question">' + esc(a.pergunta) + "</p>";
      h += "<h4>O problema</h4><p>" + esc(p.problema) + "</p><h4>Contexto de negócio</h4><p>" + esc(p.contexto) + "</p>";
    } else if (a.texto) h += "<p>" + esc(a.texto) + "</p>";
    if (a.dicionario) h += "<h4>Dicionário de dados</h4>" + table(["Fonte", "Campo", "Para que serve"], a.dicionario, "dict");
    if (a.itens && a.itens.length) h += ul(a.itens);
    if (a.antesDepois) h += "<h4>Antes e depois da limpeza</h4>" + table(["Valor original", "Valor tratado", "O que foi feito"], a.antesDepois, "ba") +
      "<figcaption>Exemplos com números fictícios, seguindo as regras reais da macro.</figcaption>";
    if (k === "apresentar" && p.grafico) {
      const max = Math.max(...p.grafico.barras.map((b) => b.valor));
      h += "<h4>" + esc(p.grafico.titulo) + '</h4><figure class="chart" data-chart>' + p.grafico.barras.map((b) =>
        '<div class="bar-row" title="' + esc(b.rotulo) + ": " + b.valor + '"><span class="bar-label">' + esc(b.rotulo) + '</span><span class="bar-track"><span class="bar-fill" style="--w:' +
        Math.max(1.5, (b.valor / max) * 100).toFixed(1) + '%"></span></span><span class="bar-val">' + b.valor + "</span></div>").join("") +
        "<figcaption>" + esc(p.grafico.nota) + "</figcaption></figure>";
    }
    if (k === "apresentar" && p.indicadoresImg) h += '<div class="ind-imgs">' + p.indicadoresImg.map((g) => '<figure><img src="' + esc(g.src) + '" alt="' + esc(g.legenda) + '" loading="lazy"><figcaption>' + esc(g.legenda) + "</figcaption></figure>").join("") + "</div>";
    if (k === "apresentar" && p.kpisLista) h += "<h4>Indicadores do painel</h4>" + ul(p.kpisLista, "tag-list");
    return h;
  }

  function projectDetail(p, i) {
    const img = p.galeria && p.galeria[0];
    const prev = D.projetos[(i - 1 + D.projetos.length) % D.projetos.length];
    const next = D.projetos[(i + 1) % D.projetos.length];
    let h = '<article class="container container--narrow work-detail">' +
      '<a class="back" href="projetos.html">Voltar para projetos</a>' +
      '<h1 class="work-detail__title">' + esc(p.titulo) + "</h1>" +
      '<p class="meta"><span class="badge badge--accent">' + ANO + '</span><span class="work-detail__tags">' + esc(p.ferramentas.slice(0, 4).join(", ")) + "</span></p>" +
      '<p class="post-meta post-meta--muted" style="margin-top:10px">' + esc(p.categoria) + '<span class="post-meta__sep" aria-hidden="true"></span><span class="status-pill">' + esc(p.status) + "</span></p>" +
      '<p class="work-detail__intro">' + esc(p.resumo) + "</p>";
    if (p.equipe) h += '<p class="team"><strong>Equipe:</strong> ' + p.equipe.map(esc).join(", ") + (p.orientador ? '<br><strong>Orientação:</strong> ' + esc(p.orientador) : "") + "</p>";
    if (p.vitrine) h += '<div class="phones">' + p.vitrine.map((src, n) => '<button type="button" data-lb-open="' + n + '" aria-label="Ampliar tela"><img src="' + esc(src) + '" alt="' + esc(p.galeria[n].legenda) + '"></button>').join("") + "</div>";
    else if (img) h += '<button class="work-detail__image" data-lb-open="0" style="padding:0;border:0;cursor:zoom-in" aria-label="Ampliar imagem"><img src="' + esc(img.src) + '" alt="' + esc(img.legenda) + '"></button>';
    else if (p.mockPainel) h += '<div class="work-detail__image" style="background:#fff">' + mockPainel() + "</div>";
    h += '<div class="kpis">' + p.indicadores.map((k, n) => '<div class="kpi"><span class="kpi__icon">' + Flow.icon(["dados", "decision", "auto", "task"][n % 4]) + "</span><strong>" + esc(k.valor) + "</strong><span>" + esc(k.rotulo) + "</span></div>").join("") + "</div>";

    h += '<div class="prose">';
    if (p.analise) {
      h += "<h2>Ciclo de análise</h2>";
      ETAPAS.forEach((e, n) => {
        h += '<h3 class="step-head"><span class="step-num">' + (n + 1) + "</span>" + e.nome + "</h3>" + stepBody(p, e.k);
      });
    }
    if (p.emBreve) {
      h += '<div class="soon"><h2>Em breve</h2><p>Estou finalizando este projeto na faculdade. Logo aqui vão aparecer o problema que ele resolve, as telas, as tecnologias e o que aprendi construindo.</p></div>';
    }
    if (p.fluxo.length) h += "<h2>Fluxograma</h2>" +
      (p.fluxoAsIs ? '<div class="seg" role="group" aria-label="Versão do fluxo"><button type="button" aria-pressed="true" data-seg="asis">AS IS: como é hoje</button><button type="button" aria-pressed="false" data-seg="tobe">TO BE: proposta</button></div>' : "") +
      "<div data-flow></div>";
    if (p.solucao.length) h += "<h2>Solução desenvolvida</h2>" + ul(p.solucao);
    if (p.desperdicios) h += "<h2>Desperdícios encontrados</h2>" + '<ul class="waste">' + p.desperdicios.map((w) => '<li><span class="w-tag w-' + w.tipo.toLowerCase() + '">' + esc(w.tipo) + "</span>" + esc(w.texto) + "</li>").join("") + "</ul>";
    if (p.desafios.length) h += "<h2>Desafios</h2>" + ul(p.desafios);
    if (p.resultados.length) h += "<h2>Resultados esperados</h2>" + ul(p.resultados);
    if (p.ferramentas.length) h += "<h2>Ferramentas</h2>" + ul(p.ferramentas, "tag-list");
    if (p.competencias) h += "<h2>Competências desenvolvidas</h2>" + ul(p.competencias, "tag-list");
    if (p.galeria && p.galeria.length > 1) h += "<h2>Galeria</h2>" + '<div class="gallery' + (p.retrato ? " gallery--retrato" : "") + '">' + p.galeria.map((g, n) =>
      '<button type="button" data-lb-open="' + n + '"><img src="' + esc(g.src) + '" alt="' + esc(g.legenda) + '" loading="lazy"><span>' + esc(g.legenda) + "</span></button>").join("") + "</div>";
    h += "</div>";
    h += '<nav class="next-prev" aria-label="Outros projetos"><a href="projeto.html#' + prev.id + '"><small>Projeto anterior</small><strong>' + esc(prev.titulo) + "</strong></a>" +
      '<a href="projeto.html#' + next.id + '"><small>Próximo projeto</small><strong>' + esc(next.titulo) + "</strong></a></nav>" +
      (p.equipe ? '<p class="disclaimer">Projeto acadêmico desenvolvido em equipe na Unicesumar. Telas: elaboradas pelas autoras (2026), no Figma.</p>' : '<p class="disclaimer">Projeto criado por mim durante o estágio, ainda não implementado oficialmente. Dados e nomes anonimizados.</p>') + "</article>";
    return h;
  }

  function afterDetail(p) {
    const fEl = $("[data-flow]");
    if (!fEl) return;
    const draw = (w) => Flow.render(fEl, w === "asis" ? p.fluxoAsIs : p.fluxo, { numbered: true, mode: "grid" });
    draw(p.fluxoAsIs ? "asis" : "tobe");
    $$("[data-seg]").forEach((b) => b.addEventListener("click", () => {
      $$("[data-seg]").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
      draw(b.dataset.seg);
    }));
    $$("[data-lb-open]").forEach((b) => b.addEventListener("click", () => openLb(p.galeria, +b.dataset.lbOpen)));
    const chart = $("[data-chart]");
    if (chart) {
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((ents) => ents.forEach((en) => { if (en.isIntersecting) { chart.classList.add("in"); io.disconnect(); } }), { threshold: .3 });
        io.observe(chart);
      } else chart.classList.add("in");
    }
  }

  if (page === "sobre") {
    const STATE = { aplicando: "Aplicando", praticando: "Praticando", estudando: "Estudando" };
    main.innerHTML =
      '<article class="container container--narrow"><div style="margin-top:80px">' + avatar("about-photo") + "</div>" +
      '<h1 class="page-title" style="margin-top:24px">Sobre mim</h1>' +
      '<ul class="words">' + (P.palavras || []).map((w) => "<li>" + esc(w) + "</li>").join("") + "</ul>" +
      '<p class="post-meta post-meta--muted" style="margin-top:14px">' + esc(P.formacao || "") + "</p>" +
      '<div class="prose">' + D.sobre.map((t) => "<p>" + esc(t) + "</p>").join("") +
      (P.slogan ? '<p class="quote">' + esc(P.slogan) + "</p>" : "") +

      "<h2>Principais competências</h2>" +
      '<div class="skill-groups">' + D.conhecimentos.map((g) => '<section class="skill-group"><h3>' + esc(g.grupo) + "</h3><dl>" +
        g.itens.map((s) => "<div><dt>" + esc(s.nome) + "</dt><dd>" + esc(s.texto) + "</dd></div>").join("") + "</dl></section>").join("") + "</div>" +

      "<h2>O que estou aprendendo</h2>" +
      '<ul class="learn">' + D.aprendendo.map((l) => "<li>" + esc(l.nome) + '<em class="st-' + l.estado + '">' + STATE[l.estado] + "</em></li>").join("") + "</ul>" +

      "<h2>Aprendizados e certificações</h2></div>" +
      '<div style="margin-top:24px">' + D.certificacoes.cursos.map((c) => '<article class="post-item course' + (c.imagem ? " course--cert" : "") + '">' +
        (c.imagem ? '<a class="course__img" href="' + esc(c.link) + '" target="_blank" rel="noopener" aria-label="Ver certificado"><img src="' + esc(c.imagem) + '" alt="Certificado: ' + esc(c.nome) + '" loading="lazy"></a>' : "") +
        '<div><h3 class="post-item__title">' + esc(c.nome) + "</h3>" +
        '<p class="post-meta"><span>' + esc(c.orgao) + '</span><span class="post-meta__sep" aria-hidden="true"></span><span class="course__st' + (/andamento/i.test(c.situacao) ? " is-wip" : /Conclu/.test(c.situacao) ? " is-done" : "") + '">' + esc(c.situacao) + "</span></p>" +
        (c.link ? '<p><a class="text-link" href="' + esc(c.link) + '" target="_blank" rel="noopener">Verificar certificado</a></p>' : "") + "</div></article>").join("") + "</div>" +
      '<div class="prose"><h3>Próximas certificações</h3></div><div class="cert-next">' +
      D.certificacoes.proximas.map((c) => "<div><b>" + esc(c.codigo) + "</b><span>" + esc(c.nome) + "</span></div>").join("") + "</div>" +

      '<div class="prose"><h2>Diferenciais</h2>' + ul(D.diferenciais, "checks") +
      "<h2>O que minhas soluções buscam entregar</h2>" + ul(D.resultadosObtidos, "tag-list") +
      "<h2>Próximos projetos</h2>" + ul(D.proximosProjetos.map((x) => x.nome)) +
      "<h2>Curiosidades profissionais</h2>" + ul(D.curiosidades) +
      "<h2>Além do código</h2></div>" +
      '<div class="interests">' + (D.interesses || []).map((x) => '<div class="interest"><span class="ic">' + svg(XI[x.icone] || XI.heart) + "</span><strong>" + esc(x.nome) + "</strong><span>" + esc(x.texto) + "</span></div>").join("") + "</div>" +
      (P.versiculos ? '<div class="verses">' + P.versiculos.map((v) => '<blockquote class="verse">' + esc(v.texto) + "<cite>" + esc(v.ref) + "</cite></blockquote>").join("") + "</div>" : "") +
      '<div class="prose"><h3>Um poema meu</h3></div>' +
      '<figure class="poem"><blockquote>' + D.poema.versos.map((v) => "<p>" + esc(v) + "</p>").join("") + "</blockquote>" +
      "<figcaption><b>" + esc(D.poema.titulo) + "</b>" + esc(P.nome) + "<br><span>" +
      (P.poemaLink ? '<a href="' + esc(P.poemaLink) + '" target="_blank" rel="noopener" style="color:var(--c-link)">Leia mais no app Meu Poema</a>' : "Publicado no app Meu Poema") +
      "</span></figcaption></figure></article>";
  }

  if (page === "jornada") {
    main.innerHTML =
      '<section class="container container--narrow"><h1 class="page-title page-title--heavy">Minha jornada</h1>' +
      '<p class="page-intro">Da fotografia à automação de processos.</p>' +
      D.jornada.map((j, n) => '<article class="post-item' + (j.tipo === "objetivo" ? " post-item--goal" : "") + '"><h2 class="post-item__title">' + esc(j.titulo) + "</h2>" +
        '<p class="post-meta"><span>Etapa ' + (n + 1) + '</span><span class="post-meta__sep" aria-hidden="true"></span><span class="post-meta__cat">' + esc(j.quando) + "</span></p>" +
        "<p>" + esc(j.texto) + "</p></article>").join("") + "</section>";
  }
})();
