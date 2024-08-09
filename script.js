// Smooth scroll to section function
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Toggle the menu visibility
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  
  // Toggle the 'open' class on the menu and icon
  menu.classList.toggle("open");
  icon.classList.toggle("open");
  
  // Optionally, you might want to close the menu when clicking on a menu link
  const menuLinks = document.querySelectorAll(".menu-links a");
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove("open");
      icon.classList.remove("open");
    });
  });
}
