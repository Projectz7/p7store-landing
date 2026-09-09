(function () {
  "use strict";

  // ---------- Menu mobile ----------
  var toggle = document.querySelector(".nav__toggle");
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

  // ---------- Formulário de contato (FormSubmit → e-mail do admin) ----------
  // Troque FORM_EMAIL se quiser mudar o destino das mensagens.
  var FORM_EMAIL = "projectsevenz7@gmail.com";
  var FORM_ENDPOINT = "https://formsubmit.co/ajax/" + FORM_EMAIL;
  var form = document.getElementById("contact-form");
  var status = document.getElementById("form-status");

  if (form && status) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      var data = new FormData(form);
      var btn = form.querySelector(".form__submit");
      if (btn) {
        btn.disabled = true;
        btn.textContent = "Enviando…";
      }
      status.textContent = "";
      status.className = "form__status";

      var payload = {};
      data.forEach(function (value, key) { payload[key] = value; });

      fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      })
        .then(function (res) {
          if (res.ok) return res.json();
          return res.json().then(function (body) {
            throw new Error(body && body.error ? body.error : "Erro ao enviar.");
          });
        })
        .then(function () {
          status.textContent = "Mensagem enviada. Obrigado pelo contato!";
          status.className = "form__status form__status--ok";
          form.reset();
        })
        .catch(function (err) {
          status.textContent = "Não foi possível enviar agora. Tente novamente em instantes.";
          status.className = "form__status form__status--error";
        })
        .finally(function () {
          if (btn) {
            btn.disabled = false;
            btn.textContent = "Enviar mensagem";
          }
        });
    });
  }
})();