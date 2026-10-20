(function () {
  const links = window.SITE_LINKS || {};
  const courseUrl = links.course || "https://aiacademy.futurhaiti.com";
  document.querySelectorAll("[data-course]").forEach((link) => { link.href = courseUrl; });

  document.querySelectorAll("[data-whatsapp]").forEach((link) => {
    if (links.whatsapp) {
      link.href = links.whatsapp;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    } else {
      link.removeAttribute("href");
      link.removeAttribute("target");
      link.classList.add("link-pending");
      link.setAttribute("aria-disabled", "true");
      link.setAttribute("aria-label", "Lien de la chaîne WhatsApp à ajouter avant publication");
      link.innerHTML = 'Lien WhatsApp à ajouter <span aria-hidden="true">↗</span>';
    }
  });
})();
