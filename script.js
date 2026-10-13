
const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelector("#nav-links");

function toggleMenu() {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Open navigation menu" : "Close navigation menu"
  );

  menuToggle.classList.toggle("active", !isOpen);
  navLinks.classList.toggle("active", !isOpen);
}

menuToggle.addEventListener("click", toggleMenu);

// Close the mobile menu when a navigation link is selected.
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");

    menuToggle.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

// Update the footer year automatically.
document.querySelector("#year").textContent = new Date().getFullYear();
