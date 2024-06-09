import "./style.css";
import home from "./home.js";

const body = document.querySelector("body");

function renderPage(e) {
  let content = body.querySelector("#content");
  content.parentElement.removeChild(content);

  content = document.createElement("div");
  content.setAttribute("id", "content");
  content.classList.add("content");
  body.appendChild(content);

  switch (e.target.getAttribute("id")) {
    case "home":
      home();
      break;
  }
}

home();
