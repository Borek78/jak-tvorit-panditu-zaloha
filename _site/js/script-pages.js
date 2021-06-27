document
  .querySelector("#intro-content-button")
  .addEventListener("click", hideShowIntroContent);

function hideShowIntroContent() {
  const x = document.querySelector("#intro-content-menu").className;

  if (x === "show-intro-content-menu") {
    document
      .querySelector("#intro-content-menu")
      .classList.remove("show-intro-content-menu");

    document
      .querySelector("#intro-content-menu")
      .classList.add("hide-intro-content-menu");

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
  }

  if (x === "hide-intro-content-menu") {
    document
      .querySelector("#intro-content-menu")
      .classList.remove("hide-intro-content-menu");

    document
      .querySelector("#intro-content-menu")
      .classList.add("show-intro-content-menu");

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
  }
}
