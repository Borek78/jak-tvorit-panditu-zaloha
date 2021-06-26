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

    /*document
      .querySelector(".intro-content-menu-item")
      .classList.remove("intro-content-menu-item");*/
  }

  if (x === "hide-intro-content-menu") {
    document
      .querySelector("#intro-content-menu")
      .classList.remove("hide-intro-content-menu");

    document
      .querySelector("#intro-content-menu")
      .classList.add("show-intro-content-menu");
  }
}
