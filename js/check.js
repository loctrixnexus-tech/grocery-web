let cart = JSON.parse(localStorage.getItem("cart")) || {};
let generatedOTP = null;
let isVerified = false;

// LOAD CART
function loadCheckout() {
  const orderDiv = document.getElementById("orderItems");
  const totalEl = document.getElementById("total");

  let total = 0;
  orderDiv.innerHTML = "";

  for (let name in cart) {
    let item = cart[name];

    total += item.price * item.qty;

    orderDiv.innerHTML += `
      <div>${name} × ${item.qty} - ₹${item.price * item.qty}</div>
    `;
  }

  totalEl.innerText = total;
}

loadCheckout();


// POPUP
function openPopup() {
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}


// ✅ VALIDATE ADDRESS
function validateFields() {
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();
  const city = document.getElementById("city").value.trim();
  const pincode = document.getElementById("pincode").value.trim();

  if (!name || !phone || !address || !city || !pincode) {
    alert("⚠️ All fields are required");
    return false;
  }

  if (phone.length !== 10 || isNaN(phone)) {
    alert("⚠️ Enter valid 10 digit phone number");
    return false;
  }

  return true;
}


// 🔐 SEND OTP (FAKE FREE)
function sendOTP() {

  if (!validateFields()) return;

  generatedOTP = Math.floor(1000 + Math.random() * 9000);

  alert("📩 Your OTP is: " + generatedOTP); // demo purpose

  document.getElementById("otpBox").style.display = "block";
}


// 🔐 VERIFY OTP
function verifyOTP() {
  const userOTP = document.getElementById("otpInput").value;

  if (userOTP == generatedOTP) {
    alert("✅ OTP Verified");
    isVerified = true;
  } else {
    alert("❌ Wrong OTP");
    isVerified = false;
  }
}


// SAVE ADDRESS
function saveAddress() {

  if (!validateFields()) return;

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const city = document.getElementById("city").value;
  const pincode = document.getElementById("pincode").value;

  const full = `${name}, ${phone}, ${address}, ${city}, ${pincode}`;

  localStorage.setItem("address", full);

  document.getElementById("savedAddress").innerText = full;

  closePopup();
}


// PLACE ORDER
function placeOrder() {

  const address = localStorage.getItem("address");

  // ✅ CHECK 1: CART EMPTY
  if (!cart || Object.keys(cart).length === 0) {
    alert("🛒 Your cart is empty!");
    return;
  }

  // ✅ CHECK 2: ADDRESS
  if (!address) {
    alert("⚠️ Add address first");
    return;
  }

  // ✅ CHECK 3: OTP
  if (!isVerified) {
    alert("🔐 Verify OTP first");
    return;
  }

  // ✅ SUCCESS
  alert("🎉 Order Placed Successfully!");

  localStorage.removeItem("cart");
  localStorage.removeItem("address");

  window.location.href = "index.html";
}