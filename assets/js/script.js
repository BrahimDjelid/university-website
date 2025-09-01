const toggleBtn = document.querySelector(".toggle-menu");
const closeBtn = document.querySelector(".close-menu");
const navLinks = document.querySelector(".nav-links");

toggleBtn.addEventListener("click", function () {
  navLinks.classList.add("active");
  toggleBtn.style.display = "none";
  closeBtn.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  navLinks.classList.remove("active");
  closeBtn.style.display = "none";
  toggleBtn.style.display = "block";
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    closeBtn.style.display = "none";
    toggleBtn.style.display = "block";
  });
});


