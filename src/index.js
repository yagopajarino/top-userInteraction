import "./style.css";
import menu from "./menu";
import carrusel from "./carrusel";

const body = document.querySelector("body");
const buttonsDiv = document.createElement("div");
buttonsDiv.classList.toggle("buttonsDiv");

const carrButton = document.createElement("button");
carrButton.classList.toggle("shifterButton");
carrButton.textContent = "Carrusel";

const menuButton = document.createElement("button");
menuButton.classList.toggle("shifterButton");
menuButton.textContent = "Menu desplegable";

buttonsDiv.appendChild(carrButton);
buttonsDiv.appendChild(menuButton);

body.appendChild(buttonsDiv);

carrButton.addEventListener("click", carrusel);
menuButton.addEventListener("click", menu);

console.log("here");
