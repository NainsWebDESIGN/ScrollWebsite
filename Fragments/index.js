let imageUrl = "img.jpg";
let container = document.querySelector(".image-container");
let sliceWidth = 19,
  sliceHeight = 19;
let rows = 19,
  cols = 19;
let slices = [];

for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    let spanBox = {
      top: `${row * sliceHeight}px`,
      left: `${col * sliceWidth}px`,
      width: `${sliceWidth}px`,
      height: `${sliceHeight}px`,
      backgroundImage: `url(${imageUrl})`,
      backgroundPosition: `-${col * sliceWidth}px -${row * sliceHeight}px`,
    };

    let span = document.createElement("span");
    span.classList.add("image-slice");
    Object.keys(spanBox).forEach((key) => (span.style[key] = spanBox[key]));
    container.appendChild(span);
    slices.push(span);
  }
}

window.addEventListener("scroll", () => {
  let scrollPosition = window.scrollY;
  slices.forEach((slice, index) => {
    if (scrollPosition >= index * 1) {
      slice.style.transform = "translate(0, 0) rotate(0deg)";
    } else {
      slice.style.transform = `translate(${Math.random() * 100 - 50}vw, ${
        Math.random() * 100 - 50
      }vh) rotate(${Math.random() * 360}deg)`;
    }
  });
});
