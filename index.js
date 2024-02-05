function generate(event) {
  event.preventDefault();
  new Typewriter("#poem", {
    strings: "lorem ipsum",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemForm = document.querySelector("#form");
poemForm.addEventListener("submit", generate);
