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
  optionsDiv.style.display = "none";
  const prs = ["Nam gravida dolor vel elit semper placerat", "Praesent ultricies tortor at leo pulvinar, id egestas ligula volutpat.", "Donec sagittis ante nec lorem suscipit sodales.", "Curabitur blandit ex vel lobortis aliquam."];
  prs.forEach((element) => {
    const span = document.createElement("span");
    span.textContent = element;
    optionsDiv.appendChild(span);
  });

  title.addEventListener("click", () => {
    const div = document.querySelector(".optionsList");
    const text = document.querySelector(".menuTitle");
    const value = div.style.display;
    if (value == "flex") {
      div.style.display = "none";
      text.textContent = `Expandir ${String.fromCodePoint(0x1f447)}`;
    } else {
      div.style.display = "flex";
      text.textContent = `Contraer ${String.fromCodePoint(0x1f446)}`;
    }
  });

  contenedor.appendChild(optionsDiv);
  newDiv.appendChild(contenedor);
  body.appendChild(newDiv);
}
