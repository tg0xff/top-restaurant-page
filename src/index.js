import "./style.css";

const content = document.querySelector("#content");

const text = document.createElement("div");
text.classList.add("text");

let comment = document.createComment(
  "The following paragraph was generated by ChatGPT with the prompt \"Write a small paragraph-long promotional description for Mario's Italian Restaurant. Where Mario is secretly the Nintendo's iconic videogame character.\"",
);
text.appendChild(comment);
let p = document.createElement("p");
p.textContent =
  "Welcome to Mario's Italian Restaurant, where every dish is crafted with the same passion and precision as a level in one of Nintendo's classic games. Nestled in the heart of New York, Mario's brings the beloved flavors of Italy to your table, all under the watchful eye of our very own mustachioed maestro, Mario himself. From piping hot pizzas straight out of our brick oven to sumptuous pasta dishes bursting with flavor, every bite at Mario's is a culinary adventure. So come join us and experience the magic of Mario's Italian Restaurant, where every meal is a power-up for your taste buds!";
text.appendChild(p);

let h2 = document.createElement("h2");
h2.textContent = "Testimonials";
text.appendChild(h2);

let blockquote = document.createElement("blockquote");
comment = document.createComment(
  "The following quotation was generated by ChatGPT with the prompt \"Write a fake testimonial for Mario's Italian Restaurant as Rosalina, the character from Nintendo's Mario games.\"",
);
blockquote.appendChild(comment);
p = document.createElement("p");
p.textContent =
  "\"Ah, Mario's Italian Restaurant is truly a celestial delight! As a cosmic traveler, I've roamed through galaxies and tasted cuisines from various worlds, but none compare to the savory wonders crafted by Mario and his team. From the delectable pasta dishes that transport me back to the rolling hills of Tuscany to the heavenly tiramisu that melts in my mouth like stardust, every bite is a celestial journey. Grazie mille, Mario's, for bringing such joy to my cosmic adventures!\"";
blockquote.appendChild(p);
let footer = document.createElement("footer");
footer.textContent = "—Rosalina";
blockquote.appendChild(footer);
text.appendChild(blockquote);

blockquote = document.createElement("blockquote");
comment = document.createComment(
  "The following quotation was generated by ChatGPT with the prompt \"Write a fake testimonial for Mario's Italian Restaurant as Waluigi, the character from Nintendo's Mario games.\"",
);
blockquote.appendChild(comment);
p = document.createElement("p");
p.textContent =
  "\"Ah, Mario's Italian Restaurant, a place fit for champions like myself! When I step into Mario's, I feel like a winner already. The aroma of garlic and spices fills the air, tantalizing my taste buds with promises of flavorful feasts. From the towering pizzas loaded with toppings fit for a superstar like me to the perfectly al dente pasta dishes that fuel my mischievous adventures, Mario's never fails to impress. Grazie, Mario's, for keeping this dashing, mustachioed man in purple fueled up and ready to take on the world!\"";
blockquote.appendChild(p);
footer = document.createElement("footer");
footer.textContent = "—Waluigi";
blockquote.appendChild(footer);
text.appendChild(blockquote);

h2 = document.createElement("h2");
h2.textContent = "Hours";
text.appendChild(h2);

const ul = document.createElement("ul");
let li = document.createElement("li");
li.textContent = "Monday to Friday: 6am–6pm";
ul.appendChild(li);
li = document.createElement("li");
li.textContent = "Saturday: 8am–6pm";
ul.appendChild(li);
li = document.createElement("li");
li.textContent = "Sunday: 8am–2pm";
ul.appendChild(li);
text.appendChild(ul);
content.appendChild(text)
