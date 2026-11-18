/* Desenha fluxogramas no estilo de um editor de automação (nós + conectores). */
(function () {
  const ICONS = {
    start: '<path d="M8 5v14l11-7z"/>',
    task: '<rect x="5" y="5" width="14" height="14" rx="3"/>',
    decision: '<path d="M12 3l9 9-9 9-9-9z"/>',
    waste: '<path d="M12 3l10 18H2z"/><path class="cut" d="M12 10v5M12 17.5v.5"/>',
    auto: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
    end: '<path d="M6 21V4M6 4h11l-2 4 2 4H6"/>',
    foto: '<rect x="3" y="7" width="18" height="13" rx="3"/><circle class="cut" cx="12" cy="13.5" r="3.5"/><path d="M8 7l1.5-3h5L16 7"/>',
    estudo: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c3 2 9 2 12 0v-5"/>',
    ti: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>',
    negocio: '<path d="M3 7h13v10H3zM16 10h3l2 3v4h-5z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/>',
    dados: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    ia: '<path d="M12 2l2.2 6.8L21 11l-6.8 2.2L12 20l-2.2-6.8L3 11l6.8-2.2z"/>',
    objetivo: '<circle cx="12" cy="12" r="9"/><circle class="cut" cx="12" cy="12" r="4.5"/>'
  };

  function icon(tipo) {
    return '<svg viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[tipo] || ICONS.task) + "</svg>";
  }

  function esc(s) {
    return String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  }

  /**
   * steps: [{tipo, texto}]   opts: { numbered: bool, label: string }
   */
  function render(el, steps, opts) {
    opts = opts || {};
    const parts = steps.map((s, i) => {
      const n = opts.numbered ? '<span class="fnum">' + (i + 1) + "</span>" : "";
      const node =
        '<div class="fnode t-' + s.tipo + '" data-i="' + i + '">' + n +
        '<span class="ficon">' + icon(s.tipo) + "</span>" +
        '<span class="flabel">' + esc(s.texto) + "</span></div>";
      const edge = i < steps.length - 1 ? '<span class="fedge" aria-hidden="true"></span>' : "";
      return node + edge;
    });
    el.innerHTML = '<div class="flow flow-' + (opts.mode || "h") + '" role="list">' + parts.join("") + "</div>";
    el.querySelectorAll(".fnode").forEach((n) => n.setAttribute("role", "listitem"));
    return el.querySelector(".flow");
  }

  /** Acende os nós em sequência, como um fluxo em execução. */
  function animate(flowEl, onStep) {
    const nodes = Array.from(flowEl.querySelectorAll(".fnode"));
    const edges = Array.from(flowEl.querySelectorAll(".fedge"));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      nodes.forEach((n) => n.classList.add("done"));
      edges.forEach((e) => e.classList.add("done"));
      onStep && onStep(nodes.length, nodes.length);
      return;
    }
    let i = 0;
    function tick() {
      if (i > 0) {
        nodes[i - 1].classList.remove("active");
        nodes[i - 1].classList.add("done");
        edges[i - 1] && edges[i - 1].classList.add("done");
      }
      if (i < nodes.length) {
        nodes[i].classList.add("active");
        onStep && onStep(i + 1, nodes.length);
        i++;
        setTimeout(tick, i === 1 ? 500 : 650);
      } else {
        onStep && onStep(nodes.length, nodes.length, true);
      }
    }
    tick();
  }

  window.Flow = { render, animate, icon };
})();
