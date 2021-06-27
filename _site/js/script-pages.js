//hide and show the content menu
document
  .querySelector("#intro-content-button")
  .addEventListener("click", hideShowIntroContent);

function hideShowIntroContent() {
  const x = document.querySelector("#intro-content-menu").className;

  if (x === "show-intro-content-menu") {
    //hide the content menu
    document
      .querySelector("#intro-content-menu")
      .classList.remove("show-intro-content-menu");

    document
      .querySelector("#intro-content-menu")
      .classList.add("hide-intro-content-menu");

    //hover class still visible - remove it
    document
      .querySelector(".content-item-1")
      .classList.remove("content-hover-class");
    document
      .querySelector(".content-item-2")
      .classList.remove("content-hover-class");
    document
      .querySelector(".content-item-3")
      .classList.remove("content-hover-class");
    document
      .querySelector(".content-item-4")
      .classList.remove("content-hover-class");
    document
      .querySelector(".content-item-5")
      .classList.remove("content-hover-class");
    document
      .querySelector(".content-item-6")
      .classList.remove("content-hover-class");

    //show the menu icon
    document.querySelector(".fa").classList.remove("fa-close");

    document.querySelector(".fa").classList.add("fa-bars");
  }

  if (x === "hide-intro-content-menu") {
    document
      .querySelector("#intro-content-menu")
      .classList.remove("hide-intro-content-menu");

    document
      .querySelector("#intro-content-menu")
      .classList.add("show-intro-content-menu");

    //putting back hover class
    document
      .querySelector(".content-item-1")
      .classList.add("content-hover-class");
    document
      .querySelector(".content-item-2")
      .classList.add("content-hover-class");
    document
      .querySelector(".content-item-3")
      .classList.add("content-hover-class");
    document
      .querySelector(".content-item-4")
      .classList.add("content-hover-class");
    document
      .querySelector(".content-item-5")
      .classList.add("content-hover-class");
    document
      .querySelector(".content-item-6")
      .classList.add("content-hover-class");

    //show the close icon
    document.querySelector(".fa").classList.remove("fa-bars");

    document.querySelector(".fa").classList.add("fa-close");
  }
}
