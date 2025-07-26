// script.js
console.log("JavaScript file connected!");


// 🟣 Search Input Functionality
const searchInput = document.querySelector('input[type="text"]');

searchInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    const query = e.target.value.trim();
    if (query !== "") {
      window.location.href = `search.html?q=${encodeURIComponent(query)}`;
    }
  }
});

// 🟡 Toast Message Example (for future add-to-cart)
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-md z-50';
  toast.innerText = message;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// 🟢 Sample Cart Add Handler
function addToCart(productName) {
  showToast(`${productName} added to cart!`);
  // Optionally store in localStorage or update UI
}

// 🔵 Wishlist Add
function addToWishlist(productName) {
  showToast(`${productName} added to wishlist!`);
}




// 🔍 Live Search Suggestions

const suggestions = [
  "Men's T-Shirts",
  "Women's Dresses",
  "Kids Wear",
  "Beauty Products",
  "Smartwatches",
  "Sneakers",
  "Jeans",
  "Shirts",
  "Makeup",
  "Sarees",
  "Handbags",
  "Hoodies",
  "Kurti Sets",
  "Tops",
  "Skincare",
  "Casual Shoes",
  "Watches",
  "Sunglasses",
  "Wallets",
  "Ethnic Wear"
];

function showSuggestions() {
  const input = document.getElementById("liveSearchInput").value.toLowerCase();
  const suggestionBox = document.getElementById("suggestionList");

  suggestionBox.innerHTML = "";

  if (input === "") {
    suggestionBox.classList.add("hidden");
    return;
  }

  const filtered = suggestions.filter(item =>
    item.toLowerCase().includes(input)
  );

  if (filtered.length === 0) {
    suggestionBox.classList.add("hidden");
    return;
  }

  filtered.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    li.className = "px-4 py-2 hover:bg-pink-100 cursor-pointer";
    li.onclick = () => {
      document.getElementById("liveSearchInput").value = item;
      suggestionBox.classList.add("hidden");
    };
    suggestionBox.appendChild(li);
  });

  suggestionBox.classList.remove("hidden");
}

document.addEventListener("click", function (event) {
  const suggestionBox = document.getElementById("suggestionList");
  if (!event.target.closest("#liveSearchInput")) {
    suggestionBox.classList.add("hidden");
  }
});


