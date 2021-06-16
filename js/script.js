//different color for menu:hover after vertical scroll
window.addEventListener("scroll", changeColor);
function changeColor() {
  let currentScrollPos = window.pageYOffset;
  const menuItems = document.querySelectorAll(".menu-item");

  if (currentScrollPos > 180) {
    menuItems[0].classList.add("blue");
    menuItems[1].classList.add("blue");
    menuItems[2].classList.add("blue");
    menuItems[3].classList.add("blue");
  }

  if (currentScrollPos < 180) {
    menuItems[0].classList.remove("blue");
    menuItems[1].classList.remove("blue");
    menuItems[2].classList.remove("blue");
    menuItems[3].classList.remove("blue");
  }
}

// events after clicking the icon-menu
document.querySelector("#icon-menu").addEventListener("click", showMenu);
document.querySelector("#icon-menu").addEventListener("click", hideIconMenu);
document.querySelector("#icon-menu").addEventListener("click", showIconClose);

function showMenu() {
  const x = document.querySelector("#mobile-menu");
  x.classList.add("show-mobile-menu");
  x.classList.remove("hide-mobile-menu");
}

function hideIconMenu() {
  const x = document.querySelector(".show-icon-menu");
  x.classList.add("hide-icon-menu");
  x.classList.remove("show-icon-menu");
}

function showIconClose() {
  const x = document.querySelector(".hide-icon-close");
  x.classList.add("show-icon-close");
  x.classList.remove("hide-icon-close");
}

// events after clicking the icon-close
document.querySelector("#icon-close").addEventListener("click", hideMenu);
document.querySelector("#icon-close").addEventListener("click", showIconMenu);
document.querySelector("#icon-close").addEventListener("click", hideIconClose);

function hideMenu() {
  const x = document.querySelector("#mobile-menu");

  x.classList.add("hide-mobile-menu");
  x.classList.remove("show-mobile-menu");
}

function showIconMenu() {
  const x = document.querySelector("#icon-menu");

  x.classList.add("show-icon-menu");
  x.classList.remove("hide-icon-menu");
}

function hideIconClose() {
  const x = document.querySelector("#icon-close");
  x.classList.add("hide-icon-close");
  x.classList.remove("show-icon-close");
}

// Hide the menu when scrolling down, show it when scrolling up
let prevScrollPos = window.pageYOffset;
let scroll_change = 0;

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;

  //when you scroll down hide the menu but not at the top of the page
  if (prevScrollPos < currentScrollPos && currentScrollPos > 300) {
    const menu = document.querySelector("#menu");
    const mobileMenu = document.querySelector("#mobile-menu");
    const iconClose = document.querySelector("#icon-close");
    const iconMenu = document.querySelector("#icon-menu");

    menu.classList.add("menu-is-not-visible");
    menu.classList.remove("menu-is-visible");

    mobileMenu.classList.add("hide-mobile-menu");
    mobileMenu.classList.remove("show-mobile-menu");

    iconClose.classList.add("hide-icon-close");
    iconClose.classList.remove("show-icon-close");

    iconMenu.classList.add("show-icon-menu");
    iconMenu.classList.remove("hide-icon-menu");

    scroll_change = 0;
  }

  //when you go up
  if (prevScrollPos > currentScrollPos) {
    scroll_change = scroll_change + (prevScrollPos - currentScrollPos);
  }

  //when you go up && scroll_change is > 299
  if (prevScrollPos > currentScrollPos && scroll_change > 299) {
    const menu = document.querySelector("#menu");

    menu.classList.add("menu-is-visible");
    menu.classList.remove("menu-is-not-visible");
  }

  /* console.log("scroll_change    " + scroll_change);
  console.log("Předchozí pozice    " + prevScrollPos);
  console.log("Současná pozice     " + currentScrollPos);*/
  prevScrollPos = currentScrollPos;
};

//hide mobile menu if width > 600

window.addEventListener("resize", hideMobileMenu);

function hideMobileMenu() {
  let windowWidth = 0;
  const mobileMenu = document.querySelector("#mobile-menu");
  const iconClose = document.querySelector("#icon-close");
  const iconMenu = document.querySelector("#icon-menu");
  windowWidth = window.innerWidth;

  if (windowWidth > 600) {
    mobileMenu.classList.add("hide-mobile-menu");
    mobileMenu.classList.remove("show-mobile-menu");

    iconClose.classList.add("hide-icon-close");
    iconClose.classList.remove("show-icon-close");

    iconMenu.classList.add("show-icon-menu");
    iconMenu.classList.remove("hide-icon-menu");
  }
}
