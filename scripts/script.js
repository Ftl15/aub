let lastKnownScrollPosition = 0;
let ticking = false;
const header = document.querySelector("#header");

document.addEventListener("scroll", (event) => {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});

function doSomething(scrollPos) {
  if (scrollPos >= 400 && !header.classList.contains(".disabled")) {
    header.classList.remove("enabled");
    header.classList.add("disabled");
  }

  if (scrollPos < 400 && !header.classList.contains(".enabled")) {
    header.classList.remove("disabled");
    header.classList.add("enabled");
  }
}

function scrollToElement(elementId) {
  document.querySelector("#" + elementId).scrollIntoView({ behavior: "smooth" });
}
