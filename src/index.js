import "./style.css";
import home from "./home.js";
import about from "./about.js";

const body = document.querySelector("body");
body.addEventListener("click", renderPage);

function renderPage(e) {
  switch (e.target.getAttribute("id")) {
    case "home":
      resetContent();
      home();
      break;
    case "about":
      resetContent();
      about();
  }
}

function resetContent() {
  let content = body.querySelector("#content");
  content.parentElement.removeChild(content);
  content = document.createElement("div");
  content.setAttribute("id", "content");
  content.classList.add("content");
  body.appendChild(content);
}

home();
