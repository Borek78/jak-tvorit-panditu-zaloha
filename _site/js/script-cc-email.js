//hide and show the cc-licence-content-menu
document
  .querySelector("#cc-email-content-button")
  .addEventListener("click", hideShowIntroContent);

function hideShowIntroContent() {
  const x = document.querySelector("#cc-email-content-menu").className;

  if (x === "show-cc-email-content-menu") {
    //hide the content menu
    document
      .querySelector("#cc-email-content-menu")
      .classList.remove("show-cc-email-content-menu");

    document
      .querySelector("#cc-email-content-menu")
      .classList.add("hide-cc-email-content-menu");

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
    document
      .querySelector(".content-item-7")
      .classList.remove("content-hover-class");
    document
      .querySelector(".content-item-8")
      .classList.remove("content-hover-class");
    document
      .querySelector(".content-item-9")
      .classList.remove("content-hover-class");
    document
      .querySelector(".content-item-10")
      .classList.remove("content-hover-class");

    //show the menu icon
    document.querySelector(".fa").classList.remove("fa-close");

    document.querySelector(".fa").classList.add("fa-bars");
  }

  if (x === "hide-cc-email-content-menu") {
    document
      .querySelector("#cc-email-content-menu")
      .classList.remove("hide-cc-email-content-menu");

    document
      .querySelector("#cc-email-content-menu")
      .classList.add("show-cc-email-content-menu");

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
    document
      .querySelector(".content-item-7")
      .classList.add("content-hover-class");
    document
      .querySelector(".content-item-8")
      .classList.add("content-hover-class");
    document
      .querySelector(".content-item-9")
      .classList.add("content-hover-class");
    document
      .querySelector(".content-item-10")
      .classList.add("content-hover-class");

    //show the close icon
    document.querySelector(".fa").classList.remove("fa-bars");

    document.querySelector(".fa").classList.add("fa-close");
  }
}
