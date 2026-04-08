// Toggle dropdown (ONLY ONE OPEN)
const categoryMap = {
  staples: ["cereals", "masala", "oil", "dryfruits", "flours", "salt"],
  beverages: ["drinks", "tea", "health", "soft", "milk", "mixes", "water"],
  snacks: ["chocolates", "biscuits", "snacks", "bakery", "mints"],
  dairy: ["butter", "paneer", "milk", "icecream", "frozen", "otherdairy"],
  cook: ["noodles", "papad", "pasta", "mix", "soup"],
  baby: ["diapers", "soap", "shampoo", "food", "accessories", "otherbaby"],
  house: ["fresheners", "paper", "pooja", "pet", "shoe", "electrical", "otherhouse"],
  clean: ["detergent", "conditioner", "dishwash", "allclean", "floor"],
  personal: ["hair", "shampoo", "handwash", "otherhair", "lotion", "perfume"],
  health: ["adult", "sugarfree", "pain", "mask", "otherhealth"]
};


const nameMap = {
  // categories
  staples: "Staples",
  beverages: "Beverages",
  snacks: "Snacks & Namkeens",
  dairy: "Chilled & Dairy Foods",
  cook: "Ready To Cook",
  baby: "Baby Care",
  house: "Household Essentials",
  clean: "Cleaning Needs",
  personal: "Personal Care",
  health: "Health Care",

  // subcategories
  cereals: "Cereals & Dals",
  masala: "Masalas & Spices",
  oil: "Edible Oil & Ghee",
  dryfruits: "Dry Fruits & Nuts",
  flours: "Flours",
  salt: "Salt & Sugar",

  drinks: "Drinks & Juices",
  tea: "Tea & Coffee",
  soft: "Energy & Soft Drinks",
  mixes: "Drink Mixes",
  water: "Mineral Water"
};


function toggleSub(el) {
  const allSubs = document.querySelectorAll(".subcategory");
  const allTitles = document.querySelectorAll(".category-title");

  const currentSub = el.nextElementSibling;
  const isOpen = currentSub.style.display === "block";

  // Close all
  allSubs.forEach(sub => sub.style.display = "none");
  allTitles.forEach(title => title.classList.remove("active"));

  // Open clicked one
  if (!isOpen) {
    currentSub.style.display = "block";
    el.classList.add("active");
  }
}


// 🔥 PRODUCTS (SUBCATEGORY WISE)
const products = {

  "cereals": [
    { name: "Rice Premium", qty: "1 Kg", price: 60, old: 80, img: "https://images.pexels.com/photos/15879424/pexels-photo-15879424.jpeg?_gl=1*10ze8y3*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU0NjY2MTUkbzIkZzEkdDE3NzU0NjY2NDQkajMxJGwwJGgw" },
    { name: "Toor Dal", qty: "1 Kg", price: 120, old: 140, img: "https://images.pexels.com/photos/28110938/pexels-photo-28110938.jpeg?_gl=1*1modxpx*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU0NjY2MTUkbzIkZzEkdDE3NzU0NjY3NDMkajE4JGwwJGgw" },
    { name: "Moong Dal", qty: "1 Kg", price: 110, old: 130, img: "https://images.pexels.com/photos/5988202/pexels-photo-5988202.jpeg?_gl=1*pfviro*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU0NjY2MTUkbzIkZzEkdDE3NzU0NjY4MTMkajE2JGwwJGgw" }
  ],

  "masala": [
    { name: "Turmeric Powder", qty: "200 g", price: 50, old: 70, img: "https://images.pexels.com/photos/7925765/pexels-photo-7925765.jpeg?_gl=1*1t030lh*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU0NjY2MTUkbzIkZzEkdDE3NzU0NjY4NTMkajQ2JGwwJGgw" },
    { name: "Red Chilli Powder", qty: "200 g", price: 60, old: 80, img: "https://images.pexels.com/photos/8760461/pexels-photo-8760461.png?_gl=1*ulml2t*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU0NjY2MTUkbzIkZzEkdDE3NzU0NjY4ODEkajE4JGwwJGgw" },
    { name: "Garam Masala", qty: "100 g", price: 90, old: 120, img: "https://images.pexels.com/photos/4198418/pexels-photo-4198418.jpeg?_gl=1*1pt1fdo*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU0NjY2MTUkbzIkZzEkdDE3NzU0NjY5MzIkajI5JGwwJGgw" }
  ],

  "oil": [
    { name: "Sunflower Oil", qty: "1 L", price: 150, old: 180, img: "https://images.pexels.com/photos/31275834/pexels-photo-31275834.jpeg?_gl=1*1dneg5n*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU0NjY2MTUkbzIkZzEkdDE3NzU0NjY5NzYkajQ4JGwwJGgw" },
    { name: "Mustard Oil", qty: "1 L", price: 160, old: 190, img: "https://images.pexels.com/photos/8922289/pexels-photo-8922289.jpeg?_gl=1*siupzo*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU0NjY2MTUkbzIkZzEkdDE3NzU0NjcwMTckajckbDAkaDA." },
   
  ],

  "dryfruits": [
    { name: "Almonds", qty: "250 g", price: 200, old: 250, img: "https://images.pexels.com/photos/8524298/pexels-photo-8524298.jpeg?_gl=1*11r1qmt*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU0NjY2MTUkbzIkZzEkdDE3NzU0NjcwNzkkajQyJGwwJGgw" },
    { name: "Cashew", qty: "250 g", price: 220, old: 280, img: "https://images.pexels.com/photos/36631827/pexels-photo-36631827.jpeg?_gl=1*1quuxdt*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU0NjY2MTUkbzIkZzEkdDE3NzU0NjcxMTEkajEwJGwwJGgw" },
 
  ],

  "flours": [
    { name: "Wheat Flour", qty: "1 Kg", price: 45, old: 55, img: "https://images.pexels.com/photos/6287219/pexels-photo-6287219.jpeg?_gl=1*i4flmy*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU0NjY2MTUkbzIkZzEkdDE3NzU0NjcyODAkajQyJGwwJGgw" },
    { name: "Maida", qty: "1 Kg", price: 40, old: 50, img: "https://images.pexels.com/photos/6294375/pexels-photo-6294375.jpeg?_gl=1*1l8rkwm*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU0NjY2MTUkbzIkZzEkdDE3NzU0NjczMTMkajkkbDAkaDA." },
  
  ],

  "salt": [
    { name: "Salt", qty: "1 Kg", price: 20, old: 25, img: "https://images.pexels.com/photos/6705625/pexels-photo-6705625.jpeg?_gl=1*1lvrpzk*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU0NjY2MTUkbzIkZzEkdDE3NzU0NjczNTckajMzJGwwJGgw" },
   
  ],



  // BEVERAGES SUBCATEGORIES

  "drinks": [
    { name: "Orange Juice", qty: "1 L", price: 90, old: 110, img: "https://via.placeholder.com/150" },
    { name: "Apple Juice", qty: "1 L", price: 95, old: 120, img: "https://via.placeholder.com/150" },
    { name: "Mango Juice", qty: "1 L", price: 100, old: 130, img: "https://via.placeholder.com/150" }
  ],

  "tea": [
    { name: "Tata Tea", qty: "500 g", price: 180, old: 200, img: "https://via.placeholder.com/150" },
    { name: "Green Tea", qty: "200 g", price: 150, old: 180, img: "https://via.placeholder.com/150" },
    { name: "Coffee Powder", qty: "200 g", price: 160, old: 190, img: "https://via.placeholder.com/150" }
  ],

  "health": [
    { name: "Boost", qty: "500 g", price: 300, old: 350, img: "https://via.placeholder.com/150" },
    { name: "Horlicks", qty: "500 g", price: 280, old: 320, img: "https://via.placeholder.com/150" },
    { name: "Protein Drink", qty: "500 g", price: 400, old: 450, img: "https://via.placeholder.com/150" }
  ],

  "soft": [
    { name: "Coca Cola", qty: "750 ml", price: 40, old: 50, img: "https://via.placeholder.com/150" },
    { name: "Pepsi", qty: "750 ml", price: 40, old: 50, img: "https://via.placeholder.com/150" },
    { name: "Sprite", qty: "750 ml", price: 40, old: 50, img: "https://via.placeholder.com/150" }
  ],

  "milk": [
    { name: "Milk Powder", qty: "500 g", price: 250, old: 300, img: "https://via.placeholder.com/150" },
    { name: "Dairy Whitener", qty: "400 g", price: 220, old: 260, img: "https://via.placeholder.com/150" }
  ],

  "mixes": [
    { name: "Rasna", qty: "500 g", price: 150, old: 180, img: "https://via.placeholder.com/150" },
    { name: "Tang", qty: "500 g", price: 160, old: 200, img: "https://via.placeholder.com/150" }
  ],

  "water": [
    { name: "Bisleri Water", qty: "1 L", price: 20, old: 25, img: "https://via.placeholder.com/150" },
    { name: "Kinley Water", qty: "1 L", price: 20, old: 25, img: "https://via.placeholder.com/150" }
  ],

  // SNACKS

  "chocolates": [
    { name: "Dairy Milk", qty: "50 g", price: 40, old: 50, img: "https://via.placeholder.com/150" },
    { name: "KitKat", qty: "40 g", price: 30, old: 40, img: "https://via.placeholder.com/150" },
    { name: "Snickers", qty: "45 g", price: 35, old: 45, img: "https://via.placeholder.com/150" }
  ],

  "biscuits": [
    { name: "Good Day", qty: "200 g", price: 40, old: 50, img: "https://via.placeholder.com/150" },
    { name: "Marie Gold", qty: "250 g", price: 35, old: 45, img: "https://via.placeholder.com/150" },
    { name: "Oreo", qty: "150 g", price: 60, old: 70, img: "https://via.placeholder.com/150" }
  ],

  "snacks": [
    { name: "Lays Chips", qty: "100 g", price: 20, old: 30, img: "https://via.placeholder.com/150" },
    { name: "Kurkure", qty: "100 g", price: 20, old: 30, img: "https://via.placeholder.com/150" },
    { name: "Haldiram Namkeen", qty: "200 g", price: 60, old: 80, img: "https://via.placeholder.com/150" }
  ],

  "bakery": [
    { name: "Bread", qty: "400 g", price: 40, old: 50, img: "https://via.placeholder.com/150" },
    { name: "Cake", qty: "500 g", price: 200, old: 250, img: "https://via.placeholder.com/150" },
    { name: "Bun", qty: "4 pcs", price: 30, old: 40, img: "https://via.placeholder.com/150" }
  ],

  "mints": [
    { name: "Center Fresh", qty: "Pack", price: 10, old: 15, img: "https://via.placeholder.com/150" },
    { name: "Orbit Gum", qty: "Pack", price: 20, old: 25, img: "https://via.placeholder.com/150" },
    { name: "Happydent", qty: "Pack", price: 15, old: 20, img: "https://via.placeholder.com/150" }
  ],
  // READY TO COOK

  "noodles": [
    { name: "Maggi Noodles", qty: "1 Pack", price: 15, old: 20, img: "https://via.placeholder.com/150" },
    { name: "Yippee Noodles", qty: "1 Pack", price: 14, old: 18, img: "https://via.placeholder.com/150" }
  ],

  "papad": [
    { name: "Appalam", qty: "200 g", price: 60, old: 80, img: "https://via.placeholder.com/150" }
  ],

  "pasta": [
    { name: "Macaroni Pasta", qty: "200 g", price: 50, old: 70, img: "https://via.placeholder.com/150" },
    { name: "Penne Pasta", qty: "200 g", price: 55, old: 75, img: "https://via.placeholder.com/150" }
  ],

  "mix": [
    { name: "Idli Mix", qty: "500 g", price: 80, old: 100, img: "https://via.placeholder.com/150" },
    { name: "Dosa Mix", qty: "500 g", price: 85, old: 110, img: "https://via.placeholder.com/150" }
  ],

  "soup": [
    { name: "Tomato Soup", qty: "50 g", price: 20, old: 30, img: "https://via.placeholder.com/150" }
  ],


  // DAIRY (LESS PRODUCTS)

  "butter": [
    { name: "Amul Butter", qty: "200 g", price: 120, old: 140, img: "https://via.placeholder.com/150" },
    { name: "Cheddar Cheese", qty: "200 g", price: 180, old: 220, img: "https://via.placeholder.com/150" }
  ],

  "paneer": [
    { name: "Fresh Paneer", qty: "200 g", price: 90, old: 110, img: "https://via.placeholder.com/150" }
  ],

  "milk": [
    { name: "Milk", qty: "1 L", price: 60, old: 70, img: "https://via.placeholder.com/150" },
    { name: "Curd", qty: "500 g", price: 40, old: 50, img: "https://via.placeholder.com/150" }
  ],

  "icecream": [
    { name: "Vanilla Ice Cream", qty: "500 ml", price: 150, old: 180, img: "https://via.placeholder.com/150" }
  ],

  "frozen": [
    { name: "Frozen Veg Mix", qty: "500 g", price: 100, old: 130, img: "https://via.placeholder.com/150" }
  ],

  "otherdairy": [
    { name: "Fresh Cream", qty: "200 ml", price: 60, old: 80, img: "https://via.placeholder.com/150" }
  ],
  // BABY CARE

  "diapers": [
    { name: "Pampers Diapers", qty: "Pack", price: 300, old: 350, img: "https://via.placeholder.com/150" },
    { name: "Baby Wipes", qty: "Pack", price: 120, old: 150, img: "https://via.placeholder.com/150" }
  ],

  "soap": [
    { name: "Baby Soap", qty: "100 g", price: 40, old: 60, img: "https://via.placeholder.com/150" }
  ],

  "shampoo": [
    { name: "Baby Shampoo", qty: "200 ml", price: 130, old: 160, img: "https://via.placeholder.com/150" }
  ],

  "food": [
    { name: "Cerelac", qty: "300 g", price: 250, old: 300, img: "https://via.placeholder.com/150" }
  ],

  "accessories": [
    { name: "Feeding Bottle", qty: "1", price: 150, old: 200, img: "https://via.placeholder.com/150" }
  ],

  "otherbaby": [
    { name: "Baby Lotion", qty: "200 ml", price: 150, old: 180, img: "https://via.placeholder.com/150" }
  ],
  // HOUSEHOLD ESSENTIALS

  "fresheners": [
    { name: "Room Freshener", qty: "300 ml", price: 150, old: 180, img: "https://via.placeholder.com/150" },
    { name: "Mosquito Repellent", qty: "1", price: 120, old: 150, img: "https://via.placeholder.com/150" }
  ],

  "paper": [
    { name: "Tissue Paper", qty: "Pack", price: 80, old: 100, img: "https://via.placeholder.com/150" },
    { name: "Paper Plates", qty: "Pack", price: 60, old: 80, img: "https://via.placeholder.com/150" }
  ],

  "pooja": [
    { name: "Agarbatti", qty: "1 Pack", price: 50, old: 70, img: "https://via.placeholder.com/150" }
  ],

  "pet": [
    { name: "Dog Food", qty: "1 Kg", price: 300, old: 350, img: "https://via.placeholder.com/150" }
  ],

  "shoe": [
    { name: "Shoe Polish", qty: "1", price: 90, old: 120, img: "https://via.placeholder.com/150" }
  ],

  "electrical": [
    { name: "LED Bulb", qty: "1", price: 120, old: 150, img: "https://via.placeholder.com/150" }
  ],

  "otherhouse": [
    { name: "Match Box", qty: "Pack", price: 20, old: 30, img: "https://via.placeholder.com/150" }
  ],
  "detergent": [
    { name: "Surf Excel", qty: "1 Kg", price: 120, old: 150, img: "https://via.placeholder.com/150" }
  ],

  "conditioner": [
    { name: "Comfort Fabric Conditioner", qty: "500 ml", price: 140, old: 170, img: "https://via.placeholder.com/150" }
  ],

  "dishwash": [
    { name: "Vim Dishwash Liquid", qty: "500 ml", price: 90, old: 110, img: "https://via.placeholder.com/150" }
  ],

  "allclean": [
    { name: "Multi Surface Cleaner", qty: "500 ml", price: 110, old: 140, img: "https://via.placeholder.com/150" }
  ],

  "floor": [
    { name: "Lizol Floor Cleaner", qty: "1 L", price: 150, old: 180, img: "https://via.placeholder.com/150" }
  ],
  // PERSONAL CARE

  "hair": [
    { name: "Parachute Hair Oil", qty: "200 ml", price: 130, old: 160, img: "https://via.placeholder.com/150" },
    { name: "Hair Color", qty: "1 Pack", price: 90, old: 120, img: "https://via.placeholder.com/150" }
  ],

  "shampoo": [
    { name: "Clinic Plus Shampoo", qty: "200 ml", price: 120, old: 150, img: "https://via.placeholder.com/150" },
    { name: "Conditioner", qty: "200 ml", price: 140, old: 170, img: "https://via.placeholder.com/150" }
  ],

  "handwash": [
    { name: "Dettol Handwash", qty: "200 ml", price: 80, old: 100, img: "https://via.placeholder.com/150" }
  ],

  "otherhair": [
    { name: "Hair Serum", qty: "100 ml", price: 180, old: 220, img: "https://via.placeholder.com/150" }
  ],

  "lotion": [
    { name: "Body Lotion", qty: "200 ml", price: 150, old: 180, img: "https://via.placeholder.com/150" }
  ],

  "perfume": [
    { name: "Deodorant", qty: "150 ml", price: 200, old: 250, img: "https://via.placeholder.com/150" },
    { name: "Perfume", qty: "100 ml", price: 500, old: 600, img: "https://via.placeholder.com/150" }
  ],

  // HEALTH CARE

  "adult": [
    { name: "Adult Diapers", qty: "Pack", price: 500, old: 600, img: "https://via.placeholder.com/150" }
  ],

  "sugarfree": [
    { name: "Sugar Free Tablets", qty: "Bottle", price: 150, old: 180, img: "https://via.placeholder.com/150" }
  ],

  "pain": [
    { name: "Moov Pain Relief Cream", qty: "50 g", price: 120, old: 150, img: "https://via.placeholder.com/150" },
    { name: "Volini Spray", qty: "100 ml", price: 180, old: 220, img: "https://via.placeholder.com/150" }
  ],

  "mask": [
    { name: "Face Mask Pack", qty: "10 pcs", price: 100, old: 120, img: "https://via.placeholder.com/150" },
    { name: "Hand Gloves", qty: "Pack", price: 80, old: 100, img: "https://via.placeholder.com/150" }
  ],

  "otherhealth": [
    { name: "Thermometer", qty: "1", price: 200, old: 250, img: "https://via.placeholder.com/150" },
    { name: "Hand Sanitizer", qty: "200 ml", price: 80, old: 100, img: "https://via.placeholder.com/150" }
  ]
};


function loadCategoryProducts(cat) {
  const container = document.getElementById("products");
  const title = document.getElementById("pageTitle");

  container.innerHTML = "";

  title.innerText = nameMap[cat] || cat;  // 🔥 ADD THIS

  const subs = categoryMap[cat];

  subs.forEach(sub => {
    const data = products[sub];

    data.forEach(p => {
      container.innerHTML += `
        <div class="card">
          <img src="${p.img}">
          <h4>${p.name}</h4>
          <p>${p.qty}</p>
          <p><del>₹${p.old}</del> ₹${p.price}</p>
          <button>Add to Cart</button>
        </div>
      `;
    });
  });
}


// 🔥 SHOW PRODUCTS
function loadProducts(type) {

  const container = document.getElementById("products");
  const title = document.getElementById("pageTitle");

  // 🔥 ADD THIS
  if (title) title.innerText = nameMap[type] || type;

  const data = products[type];

  if (!data) return;

  container.innerHTML = data.map(p => `
    
    <div class="product-card">

      <span class="wishlist" onclick='toggleWishlist(this, ${JSON.stringify(p).replace(/"/g,"&quot;")})'>
        ♡
      </span>

      <img src="${p.img}" class="product-img">

      <h3>${p.name}</h3>
      <p class="weight">${p.qty}</p>

      <div class="price">
        <span class="old">₹${p.old}</span>
        <span class="new">₹${p.price}</span>
      </div>

      <div class="cart-controls">
        <button onclick="addToCart(this, '${p.name}', ${p.price})">
          Add to Cart
        </button>
      </div>

    </div>

  `).join("");

  
  updateCartCount();
  updateCartBar();
}

// 🔥 AUTO OPEN FROM URL
window.addEventListener("DOMContentLoaded", () => {

  const params = new URLSearchParams(window.location.search);
  const sub = params.get("sub");

  if (sub) {
    loadProducts(sub);

    // 🔥 AUTO OPEN CORRECT CATEGORY
    const allSubs = document.querySelectorAll(".subcategory");

    allSubs.forEach(subBox => {
      const items = subBox.querySelectorAll("p");

      items.forEach(p => {
        const onclick = p.getAttribute("onclick");

        if (onclick && onclick.includes(sub)) {
          subBox.style.display = "block"; // open category
        }
      });
    });
  }

});


// 🔥 AUTO OPEN CATEGORY
window.addEventListener("DOMContentLoaded", () => {

  const params = new URLSearchParams(window.location.search);
  const sub = params.get("sub");
  const cat = params.get("cat");

  // LOAD PRODUCTS
  if (sub) {
    loadProducts(sub);

  } else if (cat) {
    loadCategoryProducts(cat);

  }

  // 🔥 AUTO OPEN CATEGORY DROPDOWN
  const allTitles = document.querySelectorAll(".category-title");

  allTitles.forEach(title => {

    const text = title.innerText.toLowerCase();

    // Match category
    if (cat && text.includes(cat)) {
      openCategory(title);
    }

    // Match subcategory
    if (sub) {
      const subBox = title.nextElementSibling;
      const items = subBox.querySelectorAll("p");

      items.forEach(p => {
        if (p.innerText.toLowerCase().includes(sub)) {
          openCategory(title);
        }
      });
    }

  });

});

function openCategory(title) {

  // Close all first
  document.querySelectorAll(".subcategory")
    .forEach(sub => sub.style.display = "none");

  document.querySelectorAll(".category-title")
    .forEach(t => t.classList.remove("active"));

  // Open selected
  title.nextElementSibling.style.display = "block";
  title.classList.add("active");
}


function toggleSub(el) {
  const sub = el.nextElementSibling;

  if (sub.style.display === "block") {
    sub.style.display = "none";
  } else {
    document.querySelectorAll(".subcategory").forEach(s => s.style.display = "none");
    sub.style.display = "block";
  }
}