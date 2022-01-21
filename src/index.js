import "./style.css";
import carrusel from "./carrusel";
import menu from "./menu";

const body = document.querySelector("body");
const buttonsDiv = document.createElement("div");
buttonsDiv.classList.toggle("buttonsDiv");

const carrButton = document.createElement("button");
carrButton.classList.toggle("shifterButton");
carrButton.textContent = "Carrusel";

const menuButton = document.createElement("button");
menuButton.classList.toggle("shifterButton");
menuButton.textContent = "Menu desplegable";

carrButton.addEventListener("click", carrusel());
menuButton.addEventListener("click", menu());

buttonsDiv.appendChild(carrButton);
buttonsDiv.appendChild(menuButton);

body.appendChild(buttonsDiv);
console.log("here");
