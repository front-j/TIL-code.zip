const container = document.body.querySelector("div");
const bulb = document.querySelector("img");
const btn = document.querySelector("label");

function changeMode() {
  container.className === "night"
    ? (container.className = "day") & (bulb.src = "images/off.png")
    : (container.className = "night") & (bulb.src = "images/on.png");
}
