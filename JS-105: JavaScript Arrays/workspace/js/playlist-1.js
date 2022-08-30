const playlist = [
  "So What",
  "Respect",
  "What a Wonderful Wolrd",
  "At Last",
  "Three Little Birds",
  "The Way You Look Tonight",
  "Cool Song",
];

const createListItem = (arr) => {
  let items = "";
  for (let i = 0; i < arr.length; i++) {
    items += `<li>${arr[i]}</li>`;
  }
  return items;
};

document.querySelector("main").innerHTML = `<ol>${createListItem(
  playlist
)}</ol>`;
