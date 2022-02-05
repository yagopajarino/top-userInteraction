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
  title.textContent = `Expandir ${String.fromCodePoint(0x1f447)}`;

  contenedor.appendChild(title);
  contenedor.classList.toggle("contentDiv");
  const optionsDiv = document.createElement("div");
  optionsDiv.classList.toggle("optionsList");
  optionsDiv.style.height = "0px";
  const prs = ["Opción 1", "Opción 2", "Opción 3", "Opción 4", "Opción 5", "Opción 6"];
  prs.forEach((element) => {
    const span = document.createElement("span");
    span.textContent = element;
    optionsDiv.appendChild(span);
  });

  title.addEventListener("click", () => {
    const div = document.querySelector(".optionsList");
    const text = document.querySelector(".menuTitle");
    const value = div.style.height;
    if (value == "auto") {
      div.style.height = "0px";
      text.textContent = `Expandir ${String.fromCodePoint(0x1f447)}`;
    } else {
      div.style.height = "auto";
      text.textContent = `Contraer ${String.fromCodePoint(0x1f446)}`;
    }
  });

  contenedor.appendChild(optionsDiv);
  newDiv.appendChild(contenedor);
  body.appendChild(newDiv);
}
