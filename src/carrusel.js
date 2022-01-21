/* eslint-disable eqeqeq */
export default function carrusel() {
  const oldDiv = document.querySelector(".container");
  if (oldDiv != undefined) {
    oldDiv.remove();
  }

  const body = document.querySelector("body");

  const newDiv = document.createElement("div");
  newDiv.classList.toggle("container");
  const divTitle = document.createElement("h1");
  divTitle.textContent = "Carrusel de imagenes";
  newDiv.appendChild(divTitle);

  body.appendChild(newDiv);
}
