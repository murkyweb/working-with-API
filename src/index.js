import randomActivities from "./randomActivities";
import randomGifs from "./randomGifs";
import "./style.css";
import "./gifsStyle.css";
import "./activitiesStyle.css";

const apiDemo = document.getElementById("api-demo");

randomGifs.init();

apiDemo.addEventListener("input", function (e) {
  switch (apiDemo.value) {
    case "random-gifs":
      randomGifs.init();
      break;
    case "random-activity":
      randomActivities.init();
      break;
  }
});
