import superMushroom from "./super-mushroom.png";
import originalMushroom from "./original-mushroom.png";
import mysteryMushroom from "./mystery-mushroom.png";
import fireFlower from "./fireflower.png";
import star from "./star.gif";
import fuzzy from "./fuzzy.png";

export default function () {
  const content = document.querySelector("#content");
  const menu = document.createElement("div");
  menu.classList.add("menu");

  const toppings = [
    {
      name: "Super Mushroom",
      image: superMushroom,
      description:
        "Our most popular topping! Nothing too fancy, but when you order it you know what to expect. It will also make you bigger, though be mindful of the main entrance's lintel, the effect won't last long otherwise.",
    },
    {
      name: "Original Mushroom",
      image: originalMushroom,
      description:
        "A classic! Quite similar to the Super Mushroom, but with a more pronounced pixelated tinge. For the discerning taste of a 'shroom connoisseur.",
    },
    {
      name: "Mystery Mushroom",
      image: mysteryMushroom,
      description: "We sell 'em, you taste 'em.",
    },
    {
      name: "Fire Flower",
      image: fireFlower,
      description:
        "This spicy condiment will allow you to throw fireballs out of your own hands! Try it out! When you're OUTSIDE of the restaurant, that is. We're not legally responsible for any damages to property (or, indeed, other people) you may cause.",
    },
    {
      name: "Star",
      image: star,
      description:
        "A luminous and energetic taste for the go-getters. Avoid touching other people. Also, again: NOT LEGALLY RESPONSIBLE.",
    },
    {
      name: "Fuzzy",
      image: fuzzy,
      description:
        "Eat fuzzy get dizzy. We're not sure if these can be legally sold either.",
    },
  ];

  for (const topping of toppings) {
    const div = document.createElement("div");
    div.classList.add("topping");
    const img = new Image();
    img.alt = `${topping.name} original sprite.`;
    img.src = topping.image;
    div.appendChild(img);
    const name = document.createElement("div");
    name.classList.add("topping-name");
    name.textContent = topping.name;
    div.appendChild(name);
    const description = document.createElement("p");
    description.classList.add("topping-desc");
    description.textContent = topping.description;
    div.appendChild(description);
    menu.appendChild(div);
  }

  content.appendChild(menu);
}
