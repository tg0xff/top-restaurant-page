import "./style.css";
import home from "./home.js";

const body = document.querySelector("body");
body.addEventListener("click", renderPage);

function renderPage(e) {
  switch (e.target.getAttribute("id")) {
    case "home":
      emptyContent();
      home();
      break;
  }
}

function emptyContent() {
  let content = body.querySelector("#content");
  content.parentElement.removeChild(content);

  content = document.createElement("div");
  content.setAttribute("id", "content");
  content.classList.add("content");
  body.appendChild(content);
}

home();
