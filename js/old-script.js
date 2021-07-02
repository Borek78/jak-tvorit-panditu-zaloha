/* events after clicking the icon-close */
document.getElementById("icon-close").addEventListener("click", hideMenu);
document.getElementById("icon-close").addEventListener("click", showIconMenu);
document.getElementById("icon-close").addEventListener("click", hideIconClose);

function hideMenu() {
  const x = document.getElementById("mobile-menu");
  x.style.height = "0px";
}

function showIconMenu() {
  const x = document.getElementById("icon-menu");
  x.style.display = "block";
}

function hideIconClose() {
  const x = document.getElementById("icon-close");
  x.style.display = "none";
}

/* events after clicking the icon-menu */

document.getElementById("icon-menu").addEventListener("click", showMenu);
document.getElementById("icon-menu").addEventListener("click", hideIconMenu);
document.getElementById("icon-menu").addEventListener("click", showIconClose);

function showMenu() {
  const x = document.getElementById("mobile-menu");
  x.style.height = "150px";
}

function hideIconMenu() {
  const x = document.getElementById("icon-menu");
  x.style.display = "none";
}

function showIconClose() {
  const x = document.getElementById("icon-close");
  x.style.display = "block";
}

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
let prevScrollPos = window.pageYOffset;
let scroll_change = 0;

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  console.log(0);

  /*when you go up*/
  if (prevScrollPos > currentScrollPos) {
    scroll_change = scroll_change + (prevScrollPos - currentScrollPos);
  }

  /*when you go up && scroll_change is > 200*/
  if (prevScrollPos > currentScrollPos && scroll_change > 200) {
    document.getElementById("menu").style.top = "0";
    document.getElementById("mobile-menu").style.top = "40";
  }

  /*when you go down*/
  if (prevScrollPos < currentScrollPos) {
    document.getElementById("menu").style.top = "-40px";
    document.getElementById("mobile-menu").style.top = "-200px";
    scroll_change = 0;
  }

  /*do not hide the menu at the top of the page*/
  if (currentScrollPos < 200) {
    /*ukaž menu*/
    document.getElementById("menu").style.top = "0";
    document.getElementById("mobile-menu").style.top = "40";
  }

  console.log("scroll_change    " + scroll_change);
  console.log("Předchozí pozice    " + prevScrollPos);
  console.log("Současná pozice     " + currentScrollPos);
  prevScrollPos = currentScrollPos;
};

/*hide mobile menu after horizontal scroll && width is > 599*/

window.addEventListener("resize", hideMobileMenu);

function hideMobileMenu() {
  var windowWidth = 0;

  windowWidth = window.innerWidth;

  console.log(windowWidth);

  if (windowWidth > 599) {
    document.getElementById("mobile-menu").style.height = "0";
    document.getElementById("icon-close").style.display = "none";
    document.getElementById("icon-menu").style.display = "none";
  }
}

/*show menu-icon after horizontal scroll && width is < 600*/

window.addEventListener("resize", showIconMenu);
var windowWidth = 0;

windowWidth = window.innerWidth;
function showIconMenu() {
  if (windowWidth < 600) {
    document.getElementById("icon-menu").style.display = "block";
  }
}
