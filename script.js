const img = document.querySelector("img");
const button = document.querySelector("button");
const defaultQuery = "cats";

const getImage = (input) => {
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
    .catch(function (err) {
      img.src = "error.bmp";
      console.log(err);
    });
};

getImage(defaultQuery);

button.addEventListener("click", function (e) {
  const query = document.getElementById("search").value;
  if (!query) {
    getImage(defaultQuery);
    return;
  }
  getImage(query);
});
