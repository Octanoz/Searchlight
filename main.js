const hoverBox = document.querySelector(".hover-box");

hoverBox.addEventListener("mousemove", (event) => {
  const centerX = hoverBox.offsetWidth / 2;
  const centerY = hoverBox.offsetHeight / 2;

  const offsetX = event.offsetX - centerX + 200;
  const offsetY = event.offsetY - centerY + 200;

  hoverBox.style.setProperty("--x", `${offsetX}px`);
  hoverBox.style.setProperty("--y", `${offsetY}px`);
});
