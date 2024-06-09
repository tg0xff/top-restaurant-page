import "./style.css";
import about from "./about.js";

const body = document.querySelector("body");
body.addEventListener("click", renderPage);

function renderPage(e) {
  switch (e.target.getAttribute("id")) {
    case "home":
      emptyContent();
      break;
    case "about":
      emptyContent();
      about();
  }
}

function emptyContent() {
  let content = body.querySelector("#content");
  if (content) {
    content.parentElement.removeChild(content);
    content = document.createElement("div");
    content.setAttribute("id", "content");
    content.classList.add("content");
    body.appendChild(content);
  }
}

home();
