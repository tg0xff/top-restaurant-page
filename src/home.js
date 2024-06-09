import Photo from "./nik-owens-40OJLYVWeeM-unsplash.jpg";

export default function () {
  const content = document.querySelector("#content");
  const hero = document.createElement("div");
  hero.classList.add("hero");
  const figure = document.createElement("figure");
  hero.appendChild(figure);
  const img = document.createElement("img");
  img.setAttribute("src", Photo);
  figure.appendChild(img);
  const figcaption = document.createElement("figcaption");
  figcaption.innerHTML =
    'Photo by <a href="https://unsplash.com/@nik_owens?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Nik Owens</a> on <a href="https://unsplash.com/photos/pizza-on-brown-wooden-table-40OJLYVWeeM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>';
  figure.appendChild(figcaption);
  const h1 = document.createElement("h1");
  h1.textContent = "Mario's Italian Restaurant";
  hero.appendChild(h1);
  content.appendChild(hero);
}
