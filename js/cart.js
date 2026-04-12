window.cart = JSON.parse(localStorage.getItem("cart")) || {};

// =====================
// LOAD CART
// =====================
function loadCart() {

  const container = document.getElementById("cartItems");
  const totalPriceEl = document.getElementById("totalPrice");
  const totalItemsEl = document.getElementById("totalItemsText");
  const countEl = document.getElementById("cartCountPage");

  container.innerHTML = "";

  let totalItems = 0;
  let totalPrice = 0;

  for (let name in cart) {

    const item = cart[name];
    if (!item) continue;

    totalItems += item.qty;
    totalPrice += item.qty * item.price;

    const div = document.createElement("div");
    div.className = "cart-item";

    div.innerHTML = `
      <img src="${item.img}" class="cart-img">

      <div class="cart-info">
        <h4>${name}</h4>
        <p>${item.weight || ""}</p>

        <div class="price">
          ${item.oldPrice ? `<span class="old">₹${item.oldPrice}</span>` : ""}
          ₹${item.price}
        </div>
      </div>

      <div class="qty-box">
        <button onclick="decreaseQty('${name}')">-</button>
        <span>${item.qty}</span>
        <button onclick="increaseQty('${name}')">+</button>
      </div>

      <div class="item-total">
        ₹${item.qty * item.price}
      </div>
    `;

    container.appendChild(div);
  }

  totalPriceEl.innerText = totalPrice;
  totalItemsEl.innerText = totalItems + " items";
  countEl.innerText = totalItems;
}

// =====================
// INCREASE
// =====================
function increaseQty(name) {
  cart[name].qty++;
  saveCart();
}

// =====================
// DECREASE
// =====================
function decreaseQty(name) {
  cart[name].qty--;

  if (cart[name].qty <= 0) {
    delete cart[name];
  }

  saveCart();
}

// =====================
// SAVE + RELOAD
// =====================
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

// =====================
// CLEAR CART
// =====================
function clearCart() {
  localStorage.removeItem("cart");
  cart = {};
  loadCart();
}



// =====================
// INIT
// =====================
loadCart();


function goHome() {
  window.location.href = "index.html";
}