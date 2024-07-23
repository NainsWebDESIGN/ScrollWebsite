let parallax = document.querySelector(".parallax");
let text = document.getElementById("text");
let leaf = document.getElementById("leaf");
let hill1 = document.getElementById("hill1");
let hill4 = document.getElementById("hill4");
let hill5 = document.getElementById("hill5");
let tree = document.getElementById("tree");
let plant = document.getElementById("plant");

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  text.style.marginTop = value * 2.5 + "px";
  leaf.style.top = value * -1.5 + "px";
  leaf.style.left = value * 1.5 + "px";
  hill5.style.left = value * 1.5 + "px";
  hill4.style.left = value * -1.5 + "px";
  hill1.style.top = value * 1 + "px";
  tree.style.top = value * 0.7 + "px";
});

window.addEventListener("load", () => {
  let height = parallax.offsetHeight;
  let plantHeight = plant.offsetHeight;
  let Height = 0;
  if (height >= plantHeight) {
    Height = height - plantHeight;
  }
  document.querySelector(".sec").style.top = `-${Height}px`;
});
