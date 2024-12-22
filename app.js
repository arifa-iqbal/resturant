// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
// hero section buttons function

document
  .querySelector(".btn-outline-light")
  .addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    window.location.href = "https://yourorderpage.com"; // Redirect to external page
  });

//   menu section functions
// tabs function
function openMenu(event, category) {
  const tabItems = document.querySelectorAll(".tabItem");
  tabItems.forEach((tab) => (tab.style.display = "none"));

  const tabButtons = document.querySelectorAll(".filter-btn");
  tabButtons.forEach((btn) => btn.classList.remove("active"));

  document.getElementById(category).style.display = "flex";
  if (event) event.currentTarget.classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
  openMenu(null, "allType");
});
// model
function openModal(title, description, imageSrc, price) {
  const modal = document.getElementById("itemModal");
  document.getElementById("modal-title").textContent = title;
  document.getElementById("modal-description").textContent = description;
  document.getElementById("modal-image").src = imageSrc;
  document.getElementById("modal-price").textContent = `Price: $${price}`;
  modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById("itemModal");
  modal.style.display = "none";
}

window.onclick = function (event) {
  const modal = document.getElementById("itemModal");
  if (event.target === modal) {
    closeModal();
  }
};
// order section
// Update quantity of items and total price
const increaseBtn = document.querySelectorAll(".btn-success");
const decreaseBtn = document.querySelectorAll(".btn-danger");
const quantityNumbers = document.querySelectorAll(".quantity-number");
const totalPriceElement = document.querySelector(".total-price h4");

let total = 0;

// Function to update total price
function updateTotal() {
  total = 0;
  document.querySelectorAll(".order-item").forEach((item, index) => {
    const price = parseFloat(
      item.querySelector("p").innerText.replace("$", "")
    );
    const quantity = parseInt(quantityNumbers[index].innerText);
    total += price * quantity;
  });
  totalPriceElement.innerText = `Total: $${total.toFixed(2)}`;
}

// Event listeners for increasing/decreasing quantity
increaseBtn.forEach((button, index) => {
  button.addEventListener("click", () => {
    quantityNumbers[index].innerText =
      parseInt(quantityNumbers[index].innerText) + 1;
    updateTotal();
  });
});

decreaseBtn.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (parseInt(quantityNumbers[index].innerText) > 1) {
      quantityNumbers[index].innerText =
        parseInt(quantityNumbers[index].innerText) - 1;
      updateTotal();
    }
  });
});

// Initial total price update
updateTotal();

// // our chef
// document.addEventListener("DOMContentLoaded", function () {
//   // Function to add animation when the carousel changes
//   const carousel = document.getElementById("chefCarousel");
//   const carouselItems = document.querySelectorAll(".carousel-item");

//   carousel.addEventListener("slide.bs.carousel", function (event) {
//     // Remove active class from all carousel items
//     carouselItems.forEach((item) => item.classList.remove("active"));
//     // Add animation class to the next carousel item
//     const nextItem = carouselItems[event.to];
//     nextItem.classList.add("active");
//   });

//   // Function to initialize animations for chef cards
//   const chefCards = document.querySelectorAll(".chef-card");
//   chefCards.forEach((card) => {
//     card.classList.add("active"); // Animate cards when loaded
//   });
// });
