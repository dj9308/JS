// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const h1 = document.createElement("h1");
h1.innerText = "Hello!";
h1.style.color = "white";
document.body.appendChild(h1);

function paintScreen() {
  if (window.innerWidth <= 500) {
    document.body.style.background = "#3498db";
  } else if (window.innerWidth <= 700) {
    document.body.style.background = "#9b59b6";
  } else {
    document.body.style.background = "#FF8000";
  }
}

function init() {
  paintScreen();
  window.addEventListener("resize", paintScreen);
}

init();
