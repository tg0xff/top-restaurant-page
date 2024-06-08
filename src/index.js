import Photo from "./nik-owens-40OJLYVWeeM-unsplash.jpg";

const content = document.querySelector("#content");

const figure = document.createElement("figure");
const img = new Image();
img.src = Photo;
figure.appendChild(img);
const figcaption = document.createElement("figcaption");
figcaption.innerHTML =
  'Photo by <a href="https://unsplash.com/@nik_owens?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Nik Owens</a> on <a href="https://unsplash.com/photos/pizza-on-brown-wooden-table-40OJLYVWeeM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>';
figure.appendChild(figcaption);
content.appendChild(figure);

const h1 = document.createElement("h1");
h1.textContent = "Mario's Italian Restaurant";
content.appendChild(h1);
