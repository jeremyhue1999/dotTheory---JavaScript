const items = document.getElementsByTagName("li");
const button = document.querySelector("#btn-main");
const highlights = document.querySelectorAll(".highlight");
const btnToggle = document.querySelector(".btn-toggle");
const btnRemove = document.querySelector(".btn-remove");

button.addEventListener("click", () => {
  const input = document.querySelector(".input-main");
  const list = document.querySelector("ul");
  list.insertAdjacentHTML("afterbegin", `<li>${input.value}</li>`);
  input.value = "";
});

btnRemove.addEventListener("click", () => {
  const lastItem = document.querySelector("li:last-child");
  lastItem.remove();
});

btnToggle.addEventListener("click", () => {
  const listContainer = document.querySelector(".list-container");

  if (listContainer.style.display === "none") {
    listContainer.removeAttribute("style");
    btnToggle.innerHTML = "Hide List";
  } else {
    listContainer.style.display = "none";
    btnToggle.innerHTML = "Show List";
  }
});
