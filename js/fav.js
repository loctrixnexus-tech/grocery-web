const container = document.getElementById("favContainer");

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function renderFavorites() {

  container.innerHTML = "";

  if (wishlist.length === 0) {
    container.innerHTML = `<p class="empty">No favorite items yet ❤️</p>`;
    return;
  }

  wishlist.forEach((item, index) => {

    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      
      <span class="remove-btn" data-index="${index}">🗑️</span>

      <span class="wishlist active">❤️</span>

      <img src="${item.img}" class="product-img">

      <h3>${item.name}</h3>

      <p class="weight">${item.qty}</p>

      <div class="price">
        <span class="old">₹${item.old}</span>
        <span class="new">₹${item.price}</span>
      </div>

      <div class="cart-controls">
        <button onclick="addToCart(this, '${item.name}', ${item.price}, '${item.img}', ${item.old}, '${item.qty}')">
          Add to Cart
        </button>
      </div>
    `;

    container.appendChild(card);
  });
}

// REMOVE
container.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-btn")) {
    const index = e.target.dataset.index;
    wishlist.splice(index, 1);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    renderFavorites();
  }
});

renderFavorites();