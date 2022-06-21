import randomGifs from "./randomGifs";
import "./style.css";

const apiDemo = document.getElementById("api-demo");

randomGifs.init();

apiDemo.addEventListener("input", function (e) {
  switch (apiDemo.value) {
    case "random-gifs":
      randomGifs.init();
      break;
  }
});
