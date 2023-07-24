function slideInNav() {
  document.getElementById("mainNav").classList.add("slideIn");
}

window.onload = slideInNav;


function toggleNavMenu() {
  const menu = document.getElementById("menuItems");
  menu.classList.toggle("show-mobile-menu");
}

