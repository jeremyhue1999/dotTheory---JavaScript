const select = document.querySelector("#breeds");
const card = document.querySelector(".card");
const form = document.querySelector("form");

//fetch function

function fetchData(url) {
  return fetch(url)
    .then(checkStatus)
    .then((response) => response.json())
    .catch((error) => console.log("Looks like there was a problem!", error));
}

Promise.all([
  fetchData("https://dog.ceo/api/breeds/image/random"),
  fetchData("https://dog.ceo/api/breeds/list"),
]).then((data) => {
  const breedList = data[0].message;
  const imgList = data[1].message;
  generateImage(breedList);
  dogList(imgList);
});

//helper functions

function dogList(data) {
  const html = data.map((item) => `<option value = ${item}> ${item}</option>`);
  select.innerHTML = html;
}

function generateImage(url) {
  const html = `<img src='${url}' alt>
   <p>Click to view images of ${select.values}s</p>`;
  card.innerHTML = html;
}
function fetchBreedImage() {
  const breed = select.value;
  const img = card.querySelector("img");
  const p = card.querySelector("p");

  fetchData(`https://dog.ceo/api/breed/${breed}/images/random`).then((data) => {
    img.src = data.message;
    img.alt = breed;
    p.textContent = `Click to view more ${breed}s`;
  });
}

//event listener
select.addEventListener("change", fetchBreedImage);
card.addEventListener("click", fetchBreedImage);
form.addEventListener("submit", postData);

//helper functions

function checkStatus(response) {
  if (response.ok) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}

//POST DATA
function postData(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const comment = document.getElementById("comment").value;
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, comment }),
  };
  fetch("https://jsonplaceholder.typicode.com/comments", config)
    .then(checkStatus)
    .then((res) => res.json())
    .then((data) => console.log(data));
}
