(function () {
  var root = document.documentElement;
  var btn = document.getElementById("tema");
  var saved = null;
  try { saved = localStorage.getItem("tema"); } catch (e) {}

  function systemDark() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  function apply(theme) {
    root.setAttribute("data-theme", theme);
    var dark = theme === "dark";
    btn.setAttribute("aria-pressed", String(dark));
    btn.textContent = dark ? "Tema claro" : "Tema escuro";
  }

  apply(saved || (systemDark() ? "dark" : "light"));

  btn.addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    apply(next);
    try { localStorage.setItem("tema", next); } catch (e) {}
  });
})();
