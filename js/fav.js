const container = document.getElementById("favContainer");

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

// RENDER PRODUCTS
function renderFavorites() {

  container.innerHTML = "";

  if (wishlist.length === 0) {
    container.innerHTML = `<p class="empty">No favorite items yet ❤️</p>`;
    return;
  }

  wishlist.forEach((item, index) => {

    const card = document.createElement("div");
    card.classList.add("fav-card");

    card.innerHTML = `
      <button class="remove-btn" data-index="${index}">🗑️</button>

      <div class="fav-img"></div>

      <h3>${item.name}</h3>
      <p class="fav-price">${item.price}</p>

      <button class="add-btn">Add to Cart</button>
    `;

    container.appendChild(card);
  });
}

// REMOVE ITEM
container.addEventListener("click", (e) => {

  if (e.target.classList.contains("remove-btn")) {

    const index = e.target.dataset.index;

    wishlist.splice(index, 1);

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    renderFavorites();
  }

});

// INIT
renderFavorites();