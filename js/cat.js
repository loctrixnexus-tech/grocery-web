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
    { name: "Orange Juice", qty: "1 L", price: 90, old: 110, img: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Apple Juice", qty: "1 L", price: 95, old: 120, img: "https://images.unsplash.com/photo-1605199910378-edb0c0709ab4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  ],

  "tea": [
    { name: "Tata Tea", qty: "500 g", price: 180, old: 200, img: "https://plus.unsplash.com/premium_photo-1726776145390-eaef92b212d3?q=80&w=1081&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Green Tea", qty: "200 g", price: 150, old: 180, img: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Coffee Powder", qty: "200 g", price: 160, old: 190, img: "https://images.unsplash.com/photo-1583675655650-14f3b111164d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
  ],

  "health": [
    { name: "Boost", qty: "500 g", price: 300, old: 350, img: "https://images.pexels.com/photos/34541593/pexels-photo-34541593.jpeg?_gl=1*1rk3hx6*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU4OTExNDAkbzMkZzEkdDE3NzU4OTEyODMkajUzJGwwJGgw" },
    { name: "Horlicks", qty: "500 g", price: 280, old: 320, img:"https://images.pexels.com/photos/19055624/pexels-photo-19055624.jpeg?_gl=1*yiamv2*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU4OTExNDAkbzMkZzEkdDE3NzU4OTEyNTAkajI2JGwwJGgw" }
    
  ],

  "soft": [
    { name: "Coca Cola", qty: "750 ml", price: 40, old: 50, img: "https://images.unsplash.com/photo-1554866585-cd94860890b7?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Pepsi", qty: "750 ml", price: 40, old: 50, img: "https://images.pexels.com/photos/17461398/pexels-photo-17461398.jpeg?_gl=1*29qerm*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU4OTExNDAkbzMkZzEkdDE3NzU4OTEzMjUkajExJGwwJGgw" }
   
  ],

  "milk": [
    { name: "Milk Powder", qty: "500 g", price: 250, old: 300, img: "https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Dairy Whitener", qty: "400 g", price: 220, old: 260, img: "https://images.pexels.com/photos/17748230/pexels-photo-17748230.jpeg?_gl=1*14cbc0z*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU4OTExNDAkbzMkZzEkdDE3NzU4OTE0MTkkajU5JGwwJGgw" }
  ],

  "mixes": [
    { name: "Rasna", qty: "500 g", price: 150, old: 180, img: "https://images.pexels.com/photos/14503125/pexels-photo-14503125.jpeg?_gl=1*12vyayg*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU4OTExNDAkbzMkZzEkdDE3NzU4OTE0OTIkajU5JGwwJGgw" },
    { name: "Tang", qty: "500 g", price: 160, old: 200, img: "https://images.pexels.com/photos/12433995/pexels-photo-12433995.jpeg?_gl=1*44g12n*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU4OTExNDAkbzMkZzEkdDE3NzU4OTE1MzEkajIwJGwwJGgw" }
  ],

  "water": [
    { name: "Bisleri Water", qty: "1 L", price: 20, old: 25, img: "https://images.pexels.com/photos/15625546/pexels-photo-15625546.jpeg?_gl=1*1yjre36*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU4OTExNDAkbzMkZzEkdDE3NzU4OTE1NjQkajUxJGwwJGgw" },
    { name: "Kinley Water", qty: "1 L", price: 20, old: 25, img: "https://images.pexels.com/photos/13055851/pexels-photo-13055851.jpeg?_gl=1*8vbq3g*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU4OTExNDAkbzMkZzEkdDE3NzU4OTE2MjAkajU2JGwwJGgw" }
  ],

  // SNACKS

  "chocolates": [
    { name: "Dairy Milk", qty: "50 g", price: 40, old: 50, img: "https://images.unsplash.com/photo-1638275995244-26a3f3a2ed49?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "KitKat", qty: "40 g", price: 30, old: 40, img: "https://images.unsplash.com/photo-1604815891325-0f9c17688328?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
   
  ],

  "biscuits": [
    { name: "Parle G", qty: "200 g", price: 40, old: 50, img: "https://images.pexels.com/photos/5992267/pexels-photo-5992267.jpeg?_gl=1*1ci1s8s*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU4OTExNDAkbzMkZzEkdDE3NzU4OTIwNTQkajEkbDAkaDA." },
    { name: "Marie Gold", qty: "250 g", price: 35, old: 45, img: "https://images.pexels.com/photos/31909870/pexels-photo-31909870.jpeg?_gl=1*1x8gnen*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU4OTExNDAkbzMkZzEkdDE3NzU4OTIwOTckajM2JGwwJGgw" },
    
  ],

  "snacks": [
    { name: "Lays Chips", qty: "100 g", price: 20, old: 30, img: "https://images.pexels.com/photos/30358849/pexels-photo-30358849.jpeg?_gl=1*1bb60kn*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU4OTExNDAkbzMkZzEkdDE3NzU4OTIxNDckajUxJGwwJGgw" },
    { name: "Kurkure", qty: "100 g", price: 20, old: 30, img: "https://images.pexels.com/photos/12749504/pexels-photo-12749504.jpeg?_gl=1*1kmhds1*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU4OTExNDAkbzMkZzEkdDE3NzU4OTIxOTUkajMkbDAkaDA." },
    
  ],

  "bakery": [
    { name: "Bread", qty: "400 g", price: 40, old: 50, img: "https://images.pexels.com/photos/14122712/pexels-photo-14122712.jpeg?_gl=1*jks0sj*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU4OTExNDAkbzMkZzEkdDE3NzU4OTIyNjMkajE5JGwwJGgw" },
    { name: "Cake", qty: "500 g", price: 200, old: 250, img: "https://images.pexels.com/photos/27176367/pexels-photo-27176367.jpeg?_gl=1*1obq72l*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU4OTYwNjgkbzQkZzEkdDE3NzU4OTYxMTYkajEyJGwwJGgw" },
    
  ],

  "mints": [
    { name: "Center Fresh", qty: "Pack", price: 10, old: 15, img: "https://images.pexels.com/photos/36595764/pexels-photo-36595764.jpeg?_gl=1*1gsylx7*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU4OTYwNjgkbzQkZzEkdDE3NzU4OTYyNTUkajQ0JGwwJGgw" },
   
    { name: "Happydent", qty: "Pack", price: 15, old: 20, img: "https://images.unsplash.com/photo-1625029745595-d16c7dacf37c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
  ],
  // READY TO COOK

  "noodles": [
    { name: "Maggi Noodles", qty: "1 Pack", price: 15, old: 20, img: "https://images.pexels.com/photos/6940989/pexels-photo-6940989.jpeg?_gl=1*1dxg7df*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU4OTYwNjgkbzQkZzEkdDE3NzU4OTY0ODYkajkkbDAkaDA." },
    { name: "Yippee Noodles", qty: "1 Pack", price: 14, old: 18, img: "https://images.pexels.com/photos/6940986/pexels-photo-6940986.jpeg?_gl=1*qsx2xa*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU4OTYwNjgkbzQkZzEkdDE3NzU4OTY2MDEkajM0JGwwJGgw" }
  ],

  "papad": [
    { name: "Appalam", qty: "200 g", price: 60, old: 80, img: "https://images.pexels.com/photos/34347890/pexels-photo-34347890.jpeg?_gl=1*1w3zva2*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU4OTYwNjgkbzQkZzEkdDE3NzU4OTY2NjgkajI5JGwwJGgw" }
  ],

  "pasta": [
    { name: "Macaroni Pasta", qty: "200 g", price: 50, old: 70, img: "https://images.pexels.com/photos/10400279/pexels-photo-10400279.jpeg?_gl=1*o8ca34*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU4OTYwNjgkbzQkZzEkdDE3NzU4OTY3MTckajQzJGwwJGgw" },
    { name: "Penne Pasta", qty: "200 g", price: 55, old: 75, img: "https://images.pexels.com/photos/11583915/pexels-photo-11583915.jpeg?_gl=1*1qz1mi7*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU4OTYwNjgkbzQkZzEkdDE3NzU4OTY3NTQkajYkbDAkaDA." }
  ],

  "mix": [
    { name: "Idli Mix", qty: "500 g", price: 80, old: 100, img: "https://images.pexels.com/photos/4331491/pexels-photo-4331491.jpeg?_gl=1*15vlhbq*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU4OTYwNjgkbzQkZzEkdDE3NzU4OTY4MDUkajMzJGwwJGgw" },
    { name: "Dosa Mix", qty: "500 g", price: 85, old: 110, img: "https://images.pexels.com/photos/20422121/pexels-photo-20422121.jpeg?_gl=1*26v751*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU4OTYwNjgkbzQkZzEkdDE3NzU4OTY4NjQkajM3JGwwJGgw" }
  ],

  "soup": [
    { name: "Tomato Soup", qty: "50 g", price: 20, old: 30, img: "https://images.pexels.com/photos/18148490/pexels-photo-18148490.jpeg?_gl=1*1pskt4j*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU4OTYwNjgkbzQkZzEkdDE3NzU4OTY5MDIkajU5JGwwJGgw" }
  ],


  // DAIRY (LESS PRODUCTS)

  "butter": [
    { name: "Amul Butter", qty: "200 g", price: 120, old: 140, img: "https://images.pexels.com/photos/12162627/pexels-photo-12162627.jpeg?_gl=1*1x0l9x3*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU4OTYwNjgkbzQkZzEkdDE3NzU4OTY5NDUkajE2JGwwJGgw" },
    { name: "Cheddar Cheese", qty: "200 g", price: 180, old: 220, img: "https://images.unsplash.com/photo-1683314573422-649a3c6ad784?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
  ],

  "paneer": [
    { name: "Fresh Paneer", qty: "200 g", price: 90, old: 110, img: "https://images.pexels.com/photos/19460144/pexels-photo-19460144.jpeg?_gl=1*xc0b5f*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU4OTYwNjgkbzQkZzEkdDE3NzU4OTcxNTgkajEkbDAkaDA." }
  ],

  "milk": [
    { name: "Milk", qty: "1 L", price: 60, old: 70, img: "https://images.pexels.com/photos/5967267/pexels-photo-5967267.jpeg?_gl=1*1e8rhb6*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU4OTYwNjgkbzQkZzEkdDE3NzU4OTcxODUkajUyJGwwJGgw" },
    { name: "Curd", qty: "500 g", price: 40, old: 50, img: "https://images.pexels.com/photos/35175194/pexels-photo-35175194.jpeg?_gl=1*yaj4ca*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU4OTYwNjgkbzQkZzEkdDE3NzU4OTcyMjEkajE2JGwwJGgw" }
  ],

  "icecream": [
    { name: "Vanilla Ice Cream", qty: "500 ml", price: 150, old: 180, img: "https://images.pexels.com/photos/4078224/pexels-photo-4078224.jpeg?_gl=1*e14z06*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU4OTYwNjgkbzQkZzEkdDE3NzU4OTcyNjEkajM4JGwwJGgw" }
  ],

  "frozen": [
    { name: "Frozen Veg Mix", qty: "500 g", price: 100, old: 130, img: "https://images.pexels.com/photos/13376605/pexels-photo-13376605.jpeg?_gl=1*iososb*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU4OTYwNjgkbzQkZzEkdDE3NzU4OTczMDYkajU5JGwwJGgw" }
  ],

  "otherdairy": [
    { name: "Fresh Cream", qty: "200 ml", price: 60, old: 80, img: "https://images.pexels.com/photos/4686826/pexels-photo-4686826.jpeg?_gl=1*13kvf73*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU4OTYwNjgkbzQkZzEkdDE3NzU4OTczNjEkajQkbDAkaDA." }
  ],
  // BABY CARE

  "diapers": [
    { name: "Pampers Diapers", qty: "Pack", price: 300, old: 350, img: "https://images.pexels.com/photos/32950999/pexels-photo-32950999.jpeg?_gl=1*10o7jjn*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU4OTYwNjgkbzQkZzEkdDE3NzU4OTc0MzEkajE1JGwwJGgw" },
    { name: "Baby Wipes", qty: "Pack", price: 120, old: 150, img: "https://images.unsplash.com/photo-1734599397715-f030c6d206a0?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
  ],

  "soap": [
    { name: "Baby Soap", qty: "100 g", price: 40, old: 60, img: "https://images.unsplash.com/photo-1607006555645-92af39cf8a77?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
  ],

  "shampoo": [
    { name: "Baby Shampoo", qty: "200 ml", price: 130, old: 160, img: "https://images.unsplash.com/photo-1738892248212-80f7d1f5fc94?q=80&w=803&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
  ],

  "food": [
    { name: "Cerelac", qty: "300 g", price: 250, old: 300, img: "https://images.unsplash.com/photo-1550461716-dbf266b2a8a7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
  ],

  "accessories": [
    { name: "Feeding Bottle", qty: "1", price: 150, old: 200, img: "https://images.pexels.com/photos/374756/pexels-photo-374756.jpeg?_gl=1*18mww4j*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU4OTYwNjgkbzQkZzEkdDE3NzU5MDA1NjYkajQyJGwwJGgw" }
  ],

  "otherbaby": [
    { name: "Baby Lotion", qty: "200 ml", price: 150, old: 180, img: "https://images.unsplash.com/photo-1750085036915-6e21c6981586?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
  ],

  // HOUSEHOLD ESSENTIALS

  "fresheners": [
    { name: "Room Freshener", qty: "300 ml", price: 150, old: 180, img: "https://images.unsplash.com/photo-1722842256801-550bb7627039?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Mosquito Repellent", qty: "1", price: 120, old: 150, img: "https://images.unsplash.com/photo-1507298992594-e9640edb7ad2?q=80&w=1275&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
  ],

  "paper": [
    { name: "Tissue Paper", qty: "Pack", price: 80, old: 100, img: "https://plus.unsplash.com/premium_photo-1663047310961-f430aa765026?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Paper Plates", qty: "Pack", price: 60, old: 80, img: "https://plus.unsplash.com/premium_photo-1661636113368-d189ffe969ca?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
  ],

  "pooja": [
    { name: "Agarbatti", qty: "1 Pack", price: 50, old: 70, img: "https://images.unsplash.com/photo-1711983727514-209fdb4d42b9?q=80&w=1121&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
  ],

  "pet": [
    { name: "Dog Food", qty: "1 Kg", price: 300, old: 350, img: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
  ],

  "shoe": [
    { name: "Shoe Polish", qty: "1", price: 90, old: 120, img: "https://images.unsplash.com/photo-1667456463245-b3fe8aef2f89?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
  ],

  "electrical": [
    { name: "LED Bulb", qty: "1", price: 120, old: 150, img: "https://plus.unsplash.com/premium_photo-1676750395664-3ac0783ae2c2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
  ],

  "otherhouse": [
    { name: "Match Box", qty: "Pack", price: 20, old: 30, img: "https://images.unsplash.com/photo-1744989188260-e7f7551d0a5d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
  ],
  "detergent": [
    { name: "Surf Excel", qty: "1 Kg", price: 120, old: 150, img: "https://images.unsplash.com/photo-1642505171977-ffaa34d70d15?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
  ],

  "conditioner": [
    { name: "Comfort Fabric Conditioner", qty: "500 ml", price: 140, old: 170, img: "https://images.unsplash.com/photo-1643107242058-9391a7ba60d3?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
  ],

  "dishwash": [
    { name: "Vim Dishwash Liquid", qty: "500 ml", price: 90, old: 110, img: "https://images.pexels.com/photos/7351645/pexels-photo-7351645.jpeg?_gl=1*cf4v81*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU4OTYwNjgkbzQkZzEkdDE3NzU4OTg0MTkkajI3JGwwJGgw" }
  ],

  "allclean": [
    { name: "Multi Surface Cleaner", qty: "500 ml", price: 110, old: 140, img: "https://images.pexels.com/photos/10568267/pexels-photo-10568267.jpeg?_gl=1*d40s2q*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU4OTYwNjgkbzQkZzEkdDE3NzU4OTg0NzgkajI4JGwwJGgw" }
  ],

  "floor": [
    { name: "Lizol Floor Cleaner", qty: "1 L", price: 150, old: 180, img: "https://images.pexels.com/photos/4099085/pexels-photo-4099085.jpeg?_gl=1*1ee363w*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU4OTYwNjgkbzQkZzEkdDE3NzU4OTkyMzMkajU5JGwwJGgw" }
  ],
  // PERSONAL CARE

  "hair": [
    { name: "Parachute Hair Oil", qty: "200 ml", price: 130, old: 160, img: "https://images.pexels.com/photos/17721574/pexels-photo-17721574.jpeg?_gl=1*1dn13z8*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU4OTYwNjgkbzQkZzEkdDE3NzU4OTkyODYkajYkbDAkaDA." },
    { name: "Hair Color", qty: "1 Pack", price: 90, old: 120, img: "https://images.pexels.com/photos/3993292/pexels-photo-3993292.jpeg?_gl=1*tr8zft*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU4OTYwNjgkbzQkZzEkdDE3NzU4OTkzMzEkajQzJGwwJGgw" }
  ],

  "shampoo": [
    { name: "Clinic Plus Shampoo", qty: "200 ml", price: 120, old: 150, img: "https://images.pexels.com/photos/13006788/pexels-photo-13006788.jpeg?_gl=1*16hwu5x*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU4OTYwNjgkbzQkZzEkdDE3NzU4OTk0ODMkajU5JGwwJGgw" },
    { name: "Conditioner", qty: "200 ml", price: 140, old: 170, img: "https://images.pexels.com/photos/7440059/pexels-photo-7440059.jpeg?_gl=1*111pjw8*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU4OTYwNjgkbzQkZzEkdDE3NzU4OTk4MjEkajU5JGwwJGgw" }
  ],

  "handwash": [
    { name: "Dettol Handwash", qty: "200 ml", price: 80, old: 100, img: "https://images.pexels.com/photos/4107966/pexels-photo-4107966.jpeg?_gl=1*14zehsk*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU4OTYwNjgkbzQkZzEkdDE3NzU4OTk5MTgkajI4JGwwJGgw" }
  ],

  "otherhair": [
    { name: "Hair Serum", qty: "100 ml", price: 180, old: 220, img: "https://images.pexels.com/photos/18186236/pexels-photo-18186236.jpeg?_gl=1*14waa1s*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU4OTYwNjgkbzQkZzEkdDE3NzU4OTk5NzQkajMzJGwwJGgw" }
  ],

  "lotion": [
    { name: "Body Lotion", qty: "200 ml", price: 150, old: 180, img: "https://images.pexels.com/photos/36433998/pexels-photo-36433998.jpeg?_gl=1*1sujp8t*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU4OTYwNjgkbzQkZzEkdDE3NzU5MDAwMDAkajckbDAkaDA." }
  ],

  "perfume": [
    { name: "Deodorant", qty: "150 ml", price: 200, old: 250, img: "https://images.pexels.com/photos/4176354/pexels-photo-4176354.jpeg?_gl=1*zdz16d*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU4OTYwNjgkbzQkZzEkdDE3NzU5MDAwMzkkajQ5JGwwJGgw" },
    { name: "Perfume", qty: "100 ml", price: 500, old: 600, img: "https://images.pexels.com/photos/28799887/pexels-photo-28799887.jpeg?_gl=1*gra8be*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU4OTYwNjgkbzQkZzEkdDE3NzU5MDAwNjkkajE5JGwwJGgw" }
  ],

  // HEALTH CARE

  "adult": [
    { name: "Adult Diapers", qty: "Pack", price: 500, old: 600, img: "https://images.pexels.com/photos/6849268/pexels-photo-6849268.jpeg?_gl=1*1mjgknf*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU4OTYwNjgkbzQkZzEkdDE3NzU5MDAwOTkkajUwJGwwJGgw" }
  ],

  "sugarfree": [
    { name: "Sugar Free Tablets", qty: "Bottle", price: 150, old: 180, img: "https://images.pexels.com/photos/10449256/pexels-photo-10449256.jpeg?_gl=1*1i0b582*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU4OTYwNjgkbzQkZzEkdDE3NzU5MDA2NzQkajI0JGwwJGgw" }
  ],

  "pain": [
    { name: "Moov Pain Relief Cream", qty: "50 g", price: 120, old: 150, img: "https://images.pexels.com/photos/4959884/pexels-photo-4959884.jpeg?_gl=1*fv4291*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU4OTYwNjgkbzQkZzEkdDE3NzU5MDAyNzMkajIxJGwwJGgw" },
    { name: "Volini Spray", qty: "100 ml", price: 180, old: 220, img: "https://images.pexels.com/photos/4440648/pexels-photo-4440648.jpeg?_gl=1*5l42cy*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU4OTYwNjgkbzQkZzEkdDE3NzU5MDAzMTQkajQ2JGwwJGgw" }
  ],

  "mask": [
    { name: "Face Mask Pack", qty: "10 pcs", price: 100, old: 120, img: "https://images.pexels.com/photos/10631912/pexels-photo-10631912.jpeg?_gl=1*1oq5cjg*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU4OTYwNjgkbzQkZzEkdDE3NzU5MDAzNjkkajU2JGwwJGgw" },
    { name: "Hand Gloves", qty: "Pack", price: 80, old: 100, img: "https://images.pexels.com/photos/9462685/pexels-photo-9462685.jpeg?_gl=1*1ocj62j*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU4OTYwNjgkbzQkZzEkdDE3NzU5MDA0MDAkajI1JGwwJGgw" }
  ],

  "otherhealth": [
    { name: "Thermometer", qty: "1", price: 200, old: 250, img: "https://images.pexels.com/photos/29007236/pexels-photo-29007236.jpeg?_gl=1*1242f8g*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU4OTYwNjgkbzQkZzEkdDE3NzU5MDA0MjYkajU5JGwwJGgw" },
    { name: "Hand Sanitizer", qty: "200 ml", price: 80, old: 100, img: "https://images.pexels.com/photos/8266821/pexels-photo-8266821.jpeg?_gl=1*1cp8k6m*_ga*NTY0Mzg3MTAzLjE3NzUzMjgxODQ.*_ga_8JE65Q40S6*czE3NzU4OTYwNjgkbzQkZzEkdDE3NzU5MDA0NTgkajI3JGwwJGgw" }
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
      
        <button onclick="addToCart(this, '${p.name}', ${p.price}, '${p.img}', ${p.old}, '${p.qty}')">
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


function searchRedirect(value) {

  const keyword = value.toLowerCase();

  // 🔥 CATEGORY MAP
  const map = {
    milk: "milk",
    rice: "cereals",
    dal: "cereals",
    oil: "oil",
    masala: "masala",
    tea: "tea",
    coffee: "tea",
    snacks: "snacks",
    biscuit: "biscuits",
    chocolate: "chocolates",
    juice: "drinks",
    soap: "soap",
    shampoo: "shampoo",
    detergent: "detergent"
  };

  for (let key in map) {
    if (keyword.includes(key)) {
      window.location.href = "category.html?sub=" + map[key];
      return;
    }
  }
}