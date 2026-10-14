const menuToggle = document.querySelector("#menuToggle");
const siteNav = document.querySelector("#siteNav");

menuToggle?.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "Close" : "Menu";
});

siteNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    if (menuToggle) menuToggle.textContent = "Menu";
  });
});

const searchInput = document.querySelector("#articleSearch");
const categoryFilter = document.querySelector("#categoryFilter");
const articleCards = [...document.querySelectorAll(".article-card")];
const noResults = document.querySelector("#noResults");

function filterArticles() {
  const term = (searchInput?.value || "").trim().toLowerCase();
  const category = categoryFilter?.value || "all";
  let visible = 0;

  articleCards.forEach((card) => {
    const matchesText = card.textContent.toLowerCase().includes(term);
    const matchesCategory = category === "all" || card.dataset.category === category;
    const show = matchesText && matchesCategory;
    card.hidden = !show;
    if (show) visible++;
  });

  if (noResults) noResults.hidden = visible !== 0;
}

searchInput?.addEventListener("input", filterArticles);
categoryFilter?.addEventListener("change", filterArticles);
document.querySelector("#year").textContent = new Date().getFullYear();
