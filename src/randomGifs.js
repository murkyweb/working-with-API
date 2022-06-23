import ErrImg from "./no-sign.jpg";

const randomGifs = (function () {
  const populate = () => {
    const container = document.querySelector(".container");
    container.className = "container gifs";
    container.innerHTML = `<input type="search" name="search" id="search" />
    <button>New Image</button>
    <img src="#" />`;
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

  const getImage = async (input) => {
    const img = document.querySelector("img");
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=LeFroF97wlzZOFiy7Kq0XAF65JEWNXU2&s=${input}`,
      {
        mode: "cors",
      }
    );
    const imageData = await response.json();
    img.src = imageData.data.images.original.url;
  };
  return { init };
})();

export default randomGifs;
