const randomActivities = (function () {
  const populate = () => {
    const container = document.querySelector(".container");
    container.className = "container activities";
    container.innerHTML = `<h2 class="header">Find a new activity!</h2>
      <button>Go!</button>
      <div class="activity">
        <h3 class="name"></h3>
        <p class="type"></p>
      </div>`;
  };

  const init = () => {
    populate();
    const button = document.querySelector("button");
    const activityName = document.querySelector(".name");
    const activityType = document.querySelector(".type");

    button.addEventListener("click", function () {
      fetch("https://www.boredapi.com/api/activity/", {
        mode: "cors",
      })
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          activityName.innerText = `${response.activity}`;
          activityType.innerText = `type, ${response.type}`;
        });
    });
  };
  return { init };
})();

export default randomActivities;
