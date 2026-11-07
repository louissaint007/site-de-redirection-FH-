(function () {
  const links = window.SITE_LINKS || {};
  const list = document.getElementById("pdf-list");
  const empty = document.getElementById("empty-state");
  const gate = document.getElementById("download-gate");
  const confirm = document.getElementById("confirm-join");
  const storageKey = "fh-whatsapp-joined-v1";
  document.querySelectorAll("[data-whatsapp]").forEach((a) => { if (links.whatsapp) { a.href = links.whatsapp; a.target = "_blank"; a.rel = "noopener noreferrer"; } });
  document.querySelectorAll("[data-course]").forEach((a) => { if (links.course) { a.href = links.course; a.target = "_blank"; a.rel = "noopener noreferrer"; } });
  function safeUrl(value) { try { const u = new URL(value, location.href); return (u.protocol === "https:" || u.origin === location.origin) ? u.href : ""; } catch { return ""; } }
  function card(doc) {
    const article = document.createElement("article"); article.className = "pdf-card";
    const cover = document.createElement("div"); cover.className = "cover";
    const coverUrl = safeUrl(doc.cover || "");
    if (coverUrl) { const img = document.createElement("img"); img.src = coverUrl; img.alt = "Couverture du guide « " + (doc.title || "PDF") + " »"; img.loading = "lazy"; cover.append(img); }
    else { const generated = document.createElement("div"); generated.className = "cover-generated"; const label = document.createElement("span"); label.textContent = "FUTUR HAÏTI · GUIDE PRATIQUE"; const title = document.createElement("strong"); title.textContent = doc.title || "Guide pratique"; generated.append(label, title); cover.append(generated); }
    const info = document.createElement("div"); info.className = "pdf-info";
    const category = document.createElement("small"); category.textContent = doc.category || "Ressource IA";
    const title = document.createElement("h3"); title.textContent = doc.title || "Guide pratique";
    const description = document.createElement("p"); description.textContent = doc.description || "Un guide à consulter à ton rythme.";
    const download = document.createElement("a"); download.className = "button download"; download.textContent = "Télécharger le PDF ↓"; download.href = safeUrl(doc.pdf || "") || "#"; download.setAttribute("data-download", "");
    if (download.href === "#") download.setAttribute("aria-disabled", "true");
    info.append(category, title, description, download); article.append(cover, info); return article;
  }
  function updateGate() { const unlocked = localStorage.getItem(storageKey) === "yes"; gate.hidden = list.children.length === 0; list.querySelectorAll("[data-download]").forEach((a) => { if (a.href !== location.href + "#") { if (unlocked) a.removeAttribute("aria-disabled"); else a.setAttribute("aria-disabled", "true"); } }); confirm.textContent = unlocked ? "Accès aux PDF activé ✓" : "J’ai rejoint la chaîne"; }
  confirm.addEventListener("click", () => { localStorage.setItem(storageKey, "yes"); updateGate(); });
  fetch("documents.json", { cache: "no-store" }).then((r) => { if (!r.ok) throw new Error("catalogue"); return r.json(); }).then((docs) => { if (!Array.isArray(docs)) throw new Error("format"); docs.forEach((doc) => list.append(card(doc))); empty.hidden = docs.length !== 0; updateGate(); }).catch(() => { empty.hidden = false; updateGate(); });
})();
