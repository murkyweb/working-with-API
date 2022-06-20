const img = document.querySelector("img");

fetch(
  "https://api.giphy.com/v1/gifs/translate?api_key=LeFroF97wlzZOFiy7Kq0XAF65JEWNXU2&s=cats",
  {
    mode: "cors",
  }
)
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    img.src = response.data.images.original.url;
  });
