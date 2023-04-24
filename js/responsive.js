let state = false;

function hamburger() {
  state = !state;

  if (state == true) {
    document.querySelector("nav").classList.add("dropdown");
  } else if (state == false) {
    document.querySelector("nav").classList.remove("dropdown");
  }
}
