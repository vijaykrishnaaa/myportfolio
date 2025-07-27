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

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show", "show-top");
      } else {
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



document
  .getElementById("message-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for your message! I will get back to you soon.");
    this.reset();
  });

const modal = document.getElementById("certificateModal");
const expandedImg = document.getElementById("expandedImg");
const certificateTitle = document.getElementById("certificateTitle");
const closeBtn = document.querySelector(".close-btn");

const certificateItems = document.querySelectorAll(".certificate-item");

certificateItems.forEach((item) => {
  item.addEventListener("click", function () {
    const imgSrc = this.querySelector("img").src;
    const title = this.getAttribute("data-title");
    const desc = this.getAttribute("data-desc");

    expandedImg.src = imgSrc;
    certificateTitle.textContent = `${title} - ${desc}`;
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  });
});

closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
});

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});
