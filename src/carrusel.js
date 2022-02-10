/* eslint-disable eqeqeq */
import img1 from './img1.jpeg';
import img2 from './img2.jpeg';
import img3 from './img3.jpeg';
import img4 from './img4.jpeg';
import img0 from './img5.jpeg';

export default function carrusel() {
  const oldDiv = document.querySelector('.container');
  if (oldDiv != undefined) {
    oldDiv.remove();
  }

  const images = [img1, img2, img3, img4, img0];

  const body = document.querySelector('body');

  const newDiv = document.createElement('div');
  newDiv.classList.toggle('container');
  const divTitle = document.createElement('h1');
  divTitle.textContent = 'Carrusel de imagenes';

  const imgDiv = document.createElement('div');
  imgDiv.classList.add('imgDiv');
  const prevArrow = document.createElement('div');
  const nextArrow = document.createElement('div');
  prevArrow.classList.toggle('imgArrow');
  nextArrow.classList.toggle('imgArrow');

  imgDiv.appendChild(prevArrow);

  images.forEach((element) => {
    const i = document.createElement('img');
    i.classList.add('slideImg');
    i.src = element;
    imgDiv.appendChild(i);
  });

  imgDiv.appendChild(nextArrow);

  newDiv.appendChild(divTitle);
  newDiv.appendChild(imgDiv);

  const p = document.createElement('p');
  p.textContent = 'TODO: add arrows and timer to autoslide';

  body.appendChild(newDiv);
  body.appendChild(p);
}
