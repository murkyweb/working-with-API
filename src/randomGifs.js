import ErrImg from "./no-sign.jpg";

const randomGifs = (function () {
  const populate = () => {
    const container = document.querySelector(".container");
    container.innerHTML = `<input type="search" name="search" id="search" />
    <img src="#" />
    <button>New Image</button>`;
  };

  const init = () => {
    populate();
    const button = document.querySelector("button");
    const defaultQuery = "cats";
    getImage(defaultQuery);

    button.addEventListener("click", function (e) {
      const query = document.getElementById("search").value;
      if (!query) {
        getImage(defaultQuery);
        return;
      }
      getImage(query);
    });
  };

  const getImage = (input) => {
    const img = document.querySelector("img");
    fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=LeFroF97wlzZOFiy7Kq0XAF65JEWNXU2&s=${input}`,
      {
        mode: "cors",
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        img.src = response.data.images.original.url;
      })
      .catch(function () {
        img.src = ErrImg;
      });
  };
  return { init };
})();

export default randomGifs;
