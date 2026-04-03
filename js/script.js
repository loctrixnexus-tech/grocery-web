// ===== WAIT FOR PAGE LOAD =====
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

  if (!savedLocation) {
    popup.classList.add("active");
  } else {
    locationText.innerText = savedLocation;
  }


  // =========================
  // OPEN POPUP ON CLICK
  // =========================
  locationBtn.addEventListener("click", () => {
    popup.classList.add("active");
  });


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
        wishlist.push({ name, price });
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