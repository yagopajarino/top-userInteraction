/* eslint-disable eqeqeq */
export default function menu() {
  const oldDiv = document.querySelector(".container");
  if (oldDiv != undefined) {
    oldDiv.remove();
  }

  const body = document.querySelector("body");

  const newDiv = document.createElement("div");
  newDiv.classList.toggle("container");
  const divTitle = document.createElement("h1");
  divTitle.textContent = "Menu desplegable";
  newDiv.appendChild(divTitle);

  body.appendChild(newDiv);
}
