// ===== WAIT FOR PAGE LOAD =====

let cart=JSON.parse(localStorage.getItem("cart"))||{};
document.addEventListener("DOMContentLoaded", () => {

  const popup = document.getElementById("locationPopup");
  const locationBtn = document.getElementById("locationBtn");
  const closeBtn = document.getElementById("closePopup");
  const skipBtn = document.querySelector(".skip-btn");

  const currentBtn = document.getElementById("currentLocationBtn");
  const locationInput = document.getElementById("locationInput");
  const confirmBtn = document.getElementById("confirmBtn");
  const locationText = document.querySelector("#locationBtn span");

  const notServingBox = document.getElementById("notServingBox");
  const locationMessage = document.getElementById("locationMessage");


  // =========================
  // OPEN POPUP ON FIRST LOAD
  // =========================
  const savedLocation = localStorage.getItem("userLocation");

  if (!savedLocation && popup) {             
    popup.classList.add("active");
  } else {
    locationText.innerText = savedLocation;
  }


  // =========================
  // OPEN POPUP ON CLICK
  // =========================

  if (locationBtn && popup) {
  locationBtn.addEventListener("click", () => {
    popup.classList.add("active");
  });

  }
  // =========================
  // CLOSE POPUP (❌ + SKIP)
  // =========================
  function closePopup() {
    popup.classList.remove("active");
  }

  closeBtn.addEventListener("click", closePopup);
  skipBtn.addEventListener("click", closePopup);


  // =========================
  // GET CURRENT LOCATION
  // =========================


  currentBtn.addEventListener("click", () => {

    if (!navigator.geolocation) {
      locationInput.value = "Location not supported";
      return;
    }

    locationInput.value = "Detecting location...";

    navigator.geolocation.getCurrentPosition(async (position) => {

      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
        );

        const data = await res.json();

        const fullAddress = data.display_name;

        // AUTO FILL INPUT
        locationInput.value = fullAddress;

        // ===== BIHAR CHECK =====
        if (fullAddress.toLowerCase().includes("bihar")) {

          locationMessage.innerText = "✅ Delivery available in your area";
          locationMessage.style.color = "green";

          notServingBox.style.display = "none";

        } else {

          locationMessage.innerText = "❌ Not serviceable area";
          locationMessage.style.color = "red";

          notServingBox.style.display = "block";
        }

      } catch (error) {
        locationInput.value = "Unable to fetch location";
      }

    }, () => {
      // ❌ NO ALERT (as you requested)
      locationInput.value = "Permission denied";
    });

  });

  // =========================
  // CONFIRM LOCATION
  // =========================
 confirmBtn.addEventListener("click", () => {

  const finalLocation = locationInput.value.trim().toLowerCase();

  if (finalLocation === "") {
    alert("Please enter location");
    return;
  }

  // ✅ BIHAR KEYWORDS CHECK
  const biharKeywords = [
    "bihar",
    "patna",
    "gaya",
    "bhagalpur",
    "muzaffarpur",
    "darbhanga",
    "begusarai",
    "jamui",
    "munger",
    "nalanda"
  ];

  const isBihar = biharKeywords.some(keyword =>
    finalLocation.includes(keyword)
  );

  if (!isBihar) {
    // ❌ NOT SERVICEABLE
    locationMessage.innerText = "❌ Not serviceable area";
    locationMessage.style.color = "red";
    notServingBox.style.display = "block";
    return;
  }

  // ✅ VALID LOCATION
  locationMessage.innerText = "✅ Delivery available";
  locationMessage.style.color = "green";
  notServingBox.style.display = "none";

  locationText.innerText = locationInput.value;
  localStorage.setItem("userLocation", locationInput.value);

  popup.classList.remove("active");

});

});



// =========================
// WISHLIST SYSTEM (FINAL FIX)
// =========================
document.addEventListener("DOMContentLoaded", () => {

  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  const icons = document.querySelectorAll(".wishlist");
  const count = document.getElementById("wishlistCount");

  // ✅ UPDATE COUNT
  function updateCount() {
    
    count.innerText = wishlist.length;
  }
  // ✅ LOOP ALL ICONS
  icons.forEach(icon => {

    const name = icon.dataset.name;
    const price = icon.dataset.price;

    // ✅ SET INITIAL STATE (IMPORTANT)
    if (wishlist.some(item => item.name === name)) {
      icon.innerText = "❤️";
    } else {
      icon.innerText = "♡";
    }

    // ✅ CLICK EVENT
    icon.addEventListener("click", () => {

      const index = wishlist.findIndex(item => item.name === name);

      if (index !== -1) {
        // REMOVE
        wishlist.splice(index, 1);
        icon.innerText = "♡";
      } else {
        // ADD
        wishlist.push({ name:icon.dataset.name, price:icon.dataset.price , img:icon.dataset.img, old:icon.dataset.old,qty:icon.dataset.qty});
        icon.innerText = "❤️";
      }

      // SAVE
      localStorage.setItem("wishlist", JSON.stringify(wishlist));

      // UPDATE COUNT
      updateCount();

    });
    
  });

  // INIT COUNT
  updateCount();

});

function openFavorites(){
  window.location.href="favourite.html";
}

// TAB SWITCH
document.addEventListener("DOMContentLoaded", () => {

  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {

      tabs.forEach(t => t.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));

      tab.classList.add("active");

      const target = document.getElementById(tab.dataset.tab);
      target.classList.add("active");

    });
  });

});

function showSub(type) {
  let data = "";

  if (type === "staples") {
    data = `
      <h4>Staples</h4>
      <p onclick="goSub('cereals')">Cereals & Dals</p>
      <p onclick="goSub('masala')">Masala & Spices</p>
      <p onclick="goSub('oil')">Edible Oil & Ghee</p>
      <p onclick="goSub('dryfruits')">Dry Fruits & Nuts</p>
      <p onclick="goSub('flours')">Flours</p>
      <p onclick="goSub('salt')">Salt & Sugar</p>
    `;
  }

  else if (type === "snacks") {
    data = `
      <h4>Snacks</h4>
      <p onclick="goSub('chocolates')">Chocolate & Candy</p>
      <p onclick="goSub('biscuits')">Biscuits</p>
      <p onclick="goSub('snacks')">Branded Snacks</p>
      <p onclick="goSub('bakery')">Bakery</p>
      <p onclick="goSub('mints')">Mints & Chewing Gum</p>
    `;
  }

  else if (type === "beverages") {
    data = `
      <h4>Beverages</h4>
      <p onclick="goSub('drinks')">Juices</p>
      <p onclick="goSub('tea')">Tea & Coffee</p>
      <p onclick="goSub('health')">Health Drinks</p>
      <p onclick="goSub('soft')">Energy & Soft Drink</p>
      <p onclick="goSub('milk')">Milk Powder</p>
      <p onclick="goSub('mixes')">Drink Mixes</p>
      <p onclick="goSub('water')">Mineral Water</p>
    `;
  }

  else if (type === "dairy") {
    data = `
      <h4>Dairy</h4>
      <p onclick="goSub('milk')">Milk</p>
      <p onclick="goSub('paneer')">Paneer</p>
      <p onclick="goSub('butter')">Butter</p>
    `;
  }

  else if (type === "cook") {
    data = `
      <h4>Ready To Cook</h4>
      <p onclick="goSub('noodles')">Noodles</p>
      <p onclick="goSub('papad')">Papad</p>
      <p onclick="goSub('pasta')">Pasta & Macaroni</p>
      <p onclick="goSub('mix')">Instant Mixes</p>
      <p onclick="goSub('soup')">Soup</p>
    `;
  }

  else if (type === "eat") {
    data = `
      <h4>Ready To Eat</h4>
      <p onclick="goSub('frozen')">Frozen Foods</p>
      <p onclick="goSub('ready')">Ready Meals</p>
      <p onclick="goSub('snackmeal')">Snacks Meals</p>
    `;
  }

  else if (type === "baby") {
    data = `
      <h4>Baby Care</h4>
      <p onclick="goSub('diapers')">Diapers</p>
      <p onclick="goSub('food')">Baby Food</p>
      <p onclick="goSub('shampoo')">Baby Shampoo</p>
      <p onclick="goSub('soap')">Baby Soap</p>
    `;
  }

  else if (type === "house") {
    data = `
      <h4>Household Essentials</h4>
      <p onclick="goSub('fresheners')">Fresheners</p>
      <p onclick="goSub('electrical')">Electrical Items</p>
      <p onclick="goSub('pooja')">Pooja Needs</p>
      <p onclick="goSub('otherhouse')">Storage & Cleaning Tools</p>
    `;
  }

  else if (type === "clean") {
    data = `
      <h4>Cleaning Needs</h4>
      <p onclick="goSub('detergent')">Detergents</p>
      <p onclick="goSub('conditioner')">Fabric Conditioners</p>
      <p onclick="goSub('dishwash')">Dishwash Cleaners</p>
      <p onclick="goSub('allclean')">All Purpose Cleaners</p>
      <p onclick="goSub('floor')">Floor & Toilet Cleaners</p>
    `;
  }

  else if (type === "personal") {
    data = `
      <h4>Personal Care</h4>
      <p onclick="goSub('hair')">Hair Oil & Colour</p>
      <p onclick="goSub('shampoo')">Shampoo & Conditioner</p>
      <p onclick="goSub('handwash')">Hand Wash & Sanitizers</p>
      <p onclick="goSub('lotion')">Body Lotion</p>
      <p onclick="goSub('perfume')">Perfumes / Deos</p>
    `;
  }

  else if (type === "health") {
    data = `
      <h4>Health Care</h4>
      <p onclick="goSub('adult')">Adult Diapers</p>
      <p onclick="goSub('sugarfree')">Sugar Free</p>
      <p onclick="goSub('pain')">Pain Balms & Creams</p>
      <p onclick="goSub('mask')">Face Mask & Gloves</p>
      <p onclick="goSub('otherhealth')">Other Health Care</p>
    `;
  }

  document.getElementById("rightMenu").innerHTML = data;
}

document.addEventListener("DOMContentLoaded",function(){
const nav = document.getElementById("navToggle");
const menu = document.getElementById("megaMenu");
let isOpen=false;
/* TOGGLE MENU */

nav.addEventListener("click", function (e) {
  e.stopPropagation();
  menu.classList.toggle("active");
});

/* PREVENT CLOSE WHEN CLICK INSIDE */

menu.addEventListener("click", function (e) {
  e.stopPropagation();
});

/* CLOSE ONLY WHEN CLICK OUTSIDE */

document.addEventListener("click", function () {
  menu.classList.remove("active");

});
});

function goSub(sub){
  window.location.href="category.html?sub="  + sub;
}

function goCategory(cat) {
  window.location.href = "category.html?cat=" + cat;
}

function saveCart(){
  localStorage.setItem("cart",JSON.stringify(cart));
}



function updateCartBar() {

  const bar = document.getElementById("cartBar");
  const info = document.getElementById("cartInfo");

  if (!bar || !info) {
    console.log("❌ cartBar missing");
    return;
  }

  let totalItems = 0;
  let totalPrice = 0;

  for (let name in cart) {
    totalItems += cart[name].qty;
    totalPrice += cart[name].qty * cart[name].price;
  }

  console.log("TOTAL:", totalItems, totalPrice);

  // 🔥 FORCE SHOW TEST
  if (totalItems >= 1) {
    bar.style.display = "flex";
    info.innerText = `${totalItems} item(s) | ₹${totalPrice}`;
  } else {
    bar.style.display = "none";
  }
}


function updateCartCount(){
  let total=0;
  for(let name in cart){
    total+=cart[name].qty;
  }
  document.getElementById("cartCount").innerText=total;
}

window.addEventListener("DOMContentLoaded", () => {
  updateCartBar();
  updateCartCount();
});

function addToCart(btn, name, price, img, oldPrice, weight) {


  if (!cart[name]) {
    cart[name] = {
      qty: 1,
      price: price,
      oldPrice: oldPrice,
      img: img,
      weight: weight
    };
  } else {
    cart[name].qty++;
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  // ✅ UPDATE UI
  updateCartCount();
  updateCartBar();

  // ✅ CHANGE BUTTON → + -
  const card = btn.closest(".product-card");
  renderControls(card, name);
}

function renderControls(card, name) {

  const container = card.querySelector(".cart-controls");
  if (!container) return;

  const qty = cart[name].qty;

  container.innerHTML = `
    <div class="qty-box">
      <button onclick="decreaseQty('${name}', this)">-</button>
      <span>${qty}</span>
      <button onclick="increaseQty('${name}', this)">+</button>
    </div>
  `;
}

function increaseQty(name, el) {
  cart[name].qty++;
  saveCart();

  const card = el.closest(".product-card");
  renderControls(card, name);

  updateCartCount();
  updateCartBar();
}

function decreaseQty(name, el) {
  cart[name].qty--;

  if (cart[name].qty <= 0) {
    delete cart[name];

    const card = el.closest(".product-card");
    card.querySelector(".cart-controls").innerHTML =
      `<button onclick="addToCart(this, '${name}', ${40})">Add to Cart</button>`;
  } else {
    const card = el.closest(".product-card");
    renderControls(card, name);
  }

  saveCart();
  updateCartCount();
  updateCartBar();
}

// ===== AUTO LOAD CART ON PAGE LOAD =====
window.addEventListener("DOMContentLoaded", () => {

  const cards = document.querySelectorAll(".product-card");

  cards.forEach(card => {
    const name = card.querySelector("h3").innerText;

    if (cart[name]) {
      renderControls(card, name);
    }
  });

});



function toggleWishlist(icon, product) {

  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  const index = wishlist.findIndex(item => item.name === product.name);

  if (index !== -1) {
    // REMOVE
    wishlist.splice(index, 1);
    icon.innerText = "♡";
  } else {
    // ADD FULL PRODUCT
    wishlist.push(product);
    icon.innerText = "❤️";
  }

  localStorage.setItem("wishlist", JSON.stringify(wishlist));
}



function handleAddToCart(btn){

  const card = btn.closest(".product-card");

  if (!card) return;

  const name = card.querySelector("h3")?.innerText;
  const img = card.querySelector("img")?.src;
  const qtyText = card.querySelector("p")?.innerText;

  const priceText = card.querySelector(".price")?.innerText;

  if (!name || !priceText) {
    console.log("❌ product data missing");
    return;
  }

  const prices = priceText.match(/\d+/g);
  const price = parseFloat(prices[prices.length - 1]);
  const oldPrice = prices.length > 1 ? parseFloat(prices[0]) : 0;

  addToCart(btn, name, price, img, oldPrice, qtyText);
}




function goToCart() {
  window.location.href = "cart.html";
}

function safeSetText(id, value) {
  const el = document.getElementById(id);
  if (el) el.innerText = value;
}

function safeSetHTML(id, value) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = value;
}





