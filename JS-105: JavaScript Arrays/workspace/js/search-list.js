const inStock = [
  "pizza",
  "cookies",
  "eggs",
  "apples",
  "milk",
  "cheese",
  "bread",
  "lettuce",
  "carrots",
  "broccoli",
  "potatoes",
  "crackers",
  "onions",
  "tofu",
  "limes",
  "cucumber",
];
const search = prompt("Search for a product");
let message;
const toLower = search.toLowerCase();
if (inStock.includes(toLower)) {
  message = `Yes, We Have <strong>${toLower}</strong>. It's #${
    inStock.indexOf(toLower) + 1
  } on the list`;
} else if (!search) {
  message = `<strong>In Stock: </strong>${inStock.join(", ")}`;
} else {
  message = `Sorry, We do not have the <strong>${search}</strong>.`;
}
document.querySelector("main").innerHTML = `<p>${message}</p>`;
