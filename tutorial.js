(function () {
  "use strict";

  var TUTORIALS = window.TUTORIALS || [];
  var STORE_KEY = "p7store_tutorial_progress";

  var APP_ICONS = {
    P7Store: "assets/logo.png",
    Digest: "assets/apps/digest.png",
    "Precicalc": "assets/apps/precicalc.png",
    FullTame: "assets/apps/fulltame.png",
    AtendIA: "assets/apps/atendia.png"
  };

  // ---------- Menu mobile ----------
  var toggle = document.getElementById("nav-toggle");
  var menu = document.getElementById("nav-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ---------- Ano no rodapé ----------
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  // ---------- Progresso (salvo localmente) ----------
  function loadProgress() {
    try {
      return JSON.parse(localStorage.getItem(STORE_KEY)) || {};
    } catch (e) {
      return {};
    }
  }

  var progress = loadProgress();

  function saveProgress() {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(progress));
    } catch (e) {}
  }

  function isDone(tutorialId, stepIndex) {
    var p = progress[tutorialId];
    return !!(p && p[stepIndex]);
  }

  function toggleDone(tutorialId, stepIndex) {
    progress[tutorialId] = progress[tutorialId] || {};
    progress[tutorialId][stepIndex] = !progress[tutorialId][stepIndex];
    saveProgress();
  }

  // ---------- Estado de seleção ----------
  var currentId = location.hash ? location.hash.slice(1) : "";
  if (!TUTORIALS.some(function (t) { return t.id === currentId; })) {
    currentId = TUTORIALS.length ? TUTORIALS[0].id : "";
  }

  // ---------- Renderizar lista de aulas no sidebar ----------
  var groupsEl = document.getElementById("tutorial-groups");
  if (groupsEl) {
    var byApp = {};
    TUTORIALS.forEach(function (t) {
      (byApp[t.app] = byApp[t.app] || []).push(t);
    });

    Object.keys(byApp).forEach(function (appName) {
      var group = document.createElement("div");
      group.className = "tutorial-studies";

      var label = document.createElement("p");
      label.className = "tutorial-studies__label";
      label.textContent = appName;
      group.appendChild(label);

      byApp[appName].forEach(function (t) {
        var a = document.createElement("a");
        a.href = "#" + t.id;
        a.className = "tutorial-studies__item";
        if (t.id === currentId) a.classList.add("is-active");

        var icon = document.createElement("img");
        icon.className = "tutorial-studies__icon";
        icon.src = APP_ICONS[t.app] || "assets/logo.png";
        icon.alt = "";
        a.appendChild(icon);

        var info = document.createElement("span");
        info.className = "tutorial-studies__info";

        var name = document.createElement("strong");
        name.textContent = t.titulo;
        info.appendChild(name);

        var meta = document.createElement("small");
        meta.textContent = t.aula;
        info.appendChild(meta);

        a.appendChild(info);
        group.appendChild(a);
      });

      groupsEl.appendChild(group);
    });
  }

  // ---------- Renderizar aula selecionada ----------
  var contentEl = document.getElementById("tutorial-content");

  function renderContent(t) {
    if (!t || !contentEl) return;

    var total = t.passos ? t.passos.length : 0;
    var doneCount = t.passos.filter(function (_, i) { return isDone(t.id, i); }).length;
    var pct = total ? Math.round((doneCount / total) * 100) : 0;

    var el = document.createElement("div");
    el.className = "tutorial-lesson";

    // ----- Header da aula -----
    var header = document.createElement("div");
    header.className = "tutorial-lesson__header";

    var eye = document.createElement("p");
    eye.className = "tutorial-lesson__eye tutorial-lesson__eye--" + t.cor;
    eye.textContent = t.app + " — " + t.aula;
    header.appendChild(eye);

    var title = document.createElement("h2");
    title.textContent = t.titulo;
    header.appendChild(title);

    var meta = document.createElement("p");
    meta.className = "tutorial-lesson__meta";
    meta.textContent = t.meta;
    header.appendChild(meta);

    var cta = document.createElement("p");
    cta.className = "tutorial-lesson__cta";
    var open = document.createElement("a");
    open.href = t.abrir;
    open.target = "_blank";
    open.rel = "noopener";
    open.className = "btn btn--primary";
    open.textContent = "Abrir o app em outra aba";
    cta.appendChild(open);
    header.appendChild(cta);

    el.appendChild(header);

    // ----- Barra de progresso -----
    var bar = document.createElement("div");
    bar.className = "tutorial-lesson__bar";
    bar.setAttribute("role", "progressbar");
    bar.setAttribute("aria-valuenow", String(pct));
    bar.setAttribute("aria-valuemin", "0");
    bar.setAttribute("aria-valuemax", "100");
    bar.setAttribute("aria-label", t.titulo + " concluído em " + pct + "%");

    var inner = document.createElement("span");
    inner.className = "tutorial-lesson__bar-fill tutorial-lesson__bar-fill--" + t.cor;
    inner.style.width = pct + "%";
    bar.appendChild(inner);

    var label = document.createElement("span");
    label.className = "tutorial-lesson__bar-label";
    label.textContent = pct + "%";

    var barWrap = document.createElement("div");
    barWrap.className = "tutorial-lesson__bar-wrap";
    barWrap.appendChild(bar);
    barWrap.appendChild(label);
    el.appendChild(barWrap);

    // ----- Passos -----
    var ol = document.createElement("ol");
    ol.className = "tutorial-lesson__steps";

    t.passos.forEach(function (step, i) {
      var li = document.createElement("li");
      li.className = "tutorial-lesson__step";
      if (isDone(t.id, i)) li.classList.add("is-done");

      var num = document.createElement("div");
      num.className = "tutorial-lesson__num tutorial-lesson__num--" + t.cor;
      num.setAttribute("aria-hidden", "true");
      num.textContent = String(i + 1);
      li.appendChild(num);

      var body = document.createElement("div");
      body.className = "tutorial-lesson__body";

      var title = document.createElement("h3");
      title.textContent = step.t;
      body.appendChild(title);

      var desc = document.createElement("p");
      desc.textContent = step.d;
      body.appendChild(desc);

      var checkWrap = document.createElement("label");
      checkWrap.className = "tutorial-lesson__check";

      var input = document.createElement("input");
      input.type = "checkbox";
      input.checked = isDone(t.id, i);
      input.setAttribute("aria-label", "Marcar passo \"" + step.t + "\" como concluído");
      input.addEventListener("change", function () {
        toggleDone(t.id, i);
        li.classList.toggle("is-done", input.checked);
        renderContent(t);
      });

      var text = document.createElement("span");
      text.textContent = "Feito";

      checkWrap.appendChild(input);
      checkWrap.appendChild(text);
      body.appendChild(checkWrap);

      li.appendChild(body);
      ol.appendChild(li);
    });

    el.appendChild(ol);
    contentEl.innerHTML = "";
    contentEl.appendChild(el);
  }

  var current = TUTORIALS.find(function (t) { return t.id === currentId; });
  renderContent(current);

  // ---------- Navegação entre aulas ----------
  window.addEventListener("hashchange", function () {
    var id = location.hash ? location.hash.slice(1) : "";
    var t = TUTORIALS.find(function (x) { return x.id === id; });
    if (!t) return;
    currentId = id;

    document.querySelectorAll(".tutorial-studies__item").forEach(function (item) {
      item.classList.toggle("is-active", item.getAttribute("href") === "#" + id);
    });

    renderContent(t);
    var content = document.querySelector(".tutorial-app__content");
    if (content) content.scrollIntoView({ behavior: "smooth", block: "start" });
  });
})();