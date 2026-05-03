(function () {
  "use strict";

  const dialog = document.getElementById("contact-dialog");

  function openDialog() {
    dialog.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeDialog() {
    dialog.hidden = true;
    document.body.style.overflow = "";
  }

  document.querySelectorAll("[data-open-dialog]").forEach(function (btn) {
    btn.addEventListener("click", openDialog);
  });

  document.querySelectorAll("[data-close-dialog]").forEach(function (el) {
    el.addEventListener("click", closeDialog);
  });

  dialog.addEventListener("click", function (e) {
    if (e.target === dialog) closeDialog();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !dialog.hidden) closeDialog();
  });

  const dialogForm = document.querySelector("[data-dialog-form]");
  if (dialogForm) {
    dialogForm.addEventListener("submit", function (e) {
      e.preventDefault();
      closeDialog();
    });
  }

  document.querySelectorAll("[data-faq-toggle]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const item = btn.closest(".svc-faq__item");
      const wasOpen = item.classList.contains("svc-faq__item--open");
      document.querySelectorAll(".svc-faq__item--open").forEach(function (other) {
        other.classList.remove("svc-faq__item--open");
      });
      if (!wasOpen) item.classList.add("svc-faq__item--open");
    });
  });

  document.querySelectorAll("[data-scroll-to]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const target = document.querySelector(btn.getAttribute("data-scroll-to"));
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  document.querySelectorAll("[data-nav]").forEach(function (a) {
    a.addEventListener("click", function (e) {
      e.preventDefault();
    });
  });
})();
