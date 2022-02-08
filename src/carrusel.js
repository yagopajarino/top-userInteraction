/* eslint-disable eqeqeq */
import img1 from "./img1.jpeg";
import img2 from "./img2.jpeg";
import img3 from "./img3.jpeg";
import img4 from "./img4.jpeg";
import img0 from "./img5.jpeg";

export default function carrusel() {
  const oldDiv = document.querySelector(".container");
  if (oldDiv != undefined) {
    oldDiv.remove();
  }

  const images = [img1, img2, img3, img4, img0];
  let k = 0;

  function mod(n, m) {
    return ((n % m) + m) % m;
  }

  function changePic(n) {
    const img = document.querySelector(".activeImg");
    img.src = images[n];
  }

  function nextPic() {
    k += 1;
    const n = mod(k, 5);
    console.log(n);
    changePic(n);
  }

  function prevPic() {
    k -= 1;
    const n = mod(k, 5);
    console.log(n);
    changePic(n);
  }

  const body = document.querySelector("body");

  const newDiv = document.createElement("div");
  newDiv.classList.toggle("container");
  const divTitle = document.createElement("h1");
  divTitle.textContent = "Carrusel de imagenes";

  const imgDiv = document.createElement("div");
  imgDiv.classList.add("imgDiv");
  const nextArrow = document.createElement("div");
  const prevArrow = document.createElement("div");
  prevArrow.classList.toggle("imgArrow");
  prevArrow.addEventListener("click", prevPic);
  const img = document.createElement("img");
  img.classList.toggle("activeImg");
  img.src = img1;
  nextArrow.classList.toggle("imgArrow");
  nextArrow.addEventListener("click", nextPic);

  imgDiv.appendChild(prevArrow);
  imgDiv.appendChild(img);
  imgDiv.appendChild(nextArrow);

  newDiv.appendChild(divTitle);
  newDiv.appendChild(imgDiv);

  body.appendChild(newDiv);
}
