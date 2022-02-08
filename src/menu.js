/* eslint-disable eqeqeq */
export default function contenedormenu() {
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

  const contenedor = document.createElement("div");
  const title = document.createElement("h2");
  title.classList.toggle("menuTitle");
  title.innerHTML = "Menú <span class='arrow'></span>";

  contenedor.appendChild(title);
  contenedor.classList.toggle("contentDiv");
  const optionsDiv = document.createElement("div");
  optionsDiv.classList.toggle("optionsList");
  const prs = ["Opción 1", "Opción 2", "Opción 3", "Opción 4"];
  prs.forEach((element) => {
    const span = document.createElement("span");
    span.textContent = element;
    optionsDiv.appendChild(span);
  });

  title.addEventListener("click", () => {
    const div = document.querySelector(".optionsList");
    const arrow = document.querySelector(".arrow");
    if (div.classList.contains("active") == false) {
      div.classList.toggle("active");
      arrow.classList.toggle("arrowActive");
    } else {
      div.classList.toggle("active");
      arrow.classList.toggle("arrowActive");
    }
  });

  contenedor.appendChild(optionsDiv);
  newDiv.appendChild(contenedor);
  body.appendChild(newDiv);
}
