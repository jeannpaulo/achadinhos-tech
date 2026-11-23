const productsGrid = document.getElementById("productsGrid");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");
const emptyState = document.getElementById("emptyState");

let currentCategory = "todos";
let currentSearch = "";

function renderProducts() {
  const filtered = PRODUTOS.filter((item) => {
    const matchesCategory =
      currentCategory === "todos" || item.categoria === currentCategory;

    const searchLower = currentSearch.toLowerCase();
    const matchesSearch =
      item.titulo.toLowerCase().includes(searchLower) ||
      item.resumo.toLowerCase().includes(searchLower) ||
      item.tag.toLowerCase().includes(searchLower);

    return matchesCategory && matchesSearch;
  });

  productsGrid.innerHTML = "";

  if (filtered.length === 0) {
    emptyState.classList.remove("hidden");
    return;
  }

  emptyState.classList.add("hidden");

  filtered.forEach((produto) => {
    const card = document.createElement("article");
    card.className = "card";

    const beneficiosHtml = produto.beneficios
      .map((b) => `<li>${b}</li>`)
      .join("");

    card.innerHTML = `
      <div class="card-img-wrapper">
        <span class="card-tag">${produto.tag}</span>
        <img src="${produto.imagem}" alt="${produto.titulo}" loading="lazy" />
      </div>
      <div class="card-body">
        <h2 class="card-title">${produto.titulo}</h2>
        <p class="card-summary">${produto.resumo}</p>

        <button class="details-toggle" type="button" aria-expanded="false">
          <span>Ver detalhes e benefícios</span>
          <span>+</span>
        </button>

        <div class="card-details">
          <ul>${beneficiosHtml}</ul>
        </div>

        <a
          href="${produto.linkAfiliado}"
          target="_blank"
          rel="noopener noreferrer nofollow"
          class="cta-btn"
        >
          Ver oferta no Mercado Livre ↗
        </a>
      </div>
    `;

    const toggleBtn = card.querySelector(".details-toggle");
    const detailsBox = card.querySelector(".card-details");
    const iconSpan = toggleBtn.querySelectorAll("span")[1];

    toggleBtn.addEventListener("click", () => {
      const isOpen = detailsBox.classList.toggle("open");
      toggleBtn.setAttribute("aria-expanded", isOpen);
      iconSpan.textContent = isOpen ? "−" : "+";
    });

    productsGrid.appendChild(card);
  });
}

// Eventos de filtro por categoria
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentCategory = btn.dataset.category;
    renderProducts();
  });
});

// Evento de busca em tempo real
searchInput.addEventListener("input", (e) => {
  currentSearch = e.target.value.trim();
  renderProducts();
});

// Renderização inicial
renderProducts();