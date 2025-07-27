// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Scroll animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show", "show-top");
      } else {
        // Remove show classes when element is not in view
        entry.target.classList.remove("show", "show-top");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

document
  .querySelectorAll(".hidden, .hidden-right, .hidden-top")
  .forEach((el) => {
    observer.observe(el);
  });

// Sticky navbar
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.padding = "15px 0";
    navbar.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.5)";
  } else {
    navbar.style.padding = "20px 0";
    navbar.style.boxShadow = "none";
  }
});

// Form submission
document
  .getElementById("message-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for your message! I will get back to you soon.");
    this.reset();
  });

// Certificate Modal Functionality
const modal = document.getElementById("certificateModal");
const expandedImg = document.getElementById("expandedImg");
const certificateTitle = document.getElementById("certificateTitle");
const closeBtn = document.querySelector(".close-btn");

// Get all certificate items
const certificateItems = document.querySelectorAll(".certificate-item");

// Add click event to each certificate item
certificateItems.forEach((item) => {
  item.addEventListener("click", function () {
    const imgSrc = this.querySelector("img").src;
    const title = this.getAttribute("data-title");
    const desc = this.getAttribute("data-desc");

    expandedImg.src = imgSrc;
    certificateTitle.textContent = `${title} - ${desc}`;
    modal.style.display = "flex";
    document.body.style.overflow = "hidden"; // Prevent scrolling
  });
});

// When the user clicks on (x), close the modal
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // Enable scrolling
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Enable scrolling
  }
});

// Close modal when pressing Escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Enable scrolling
  }
});
