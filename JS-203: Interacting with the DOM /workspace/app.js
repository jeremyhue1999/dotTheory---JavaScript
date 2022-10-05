const btnCreate = document.getElementById("btn-main");
const btnToggle = document.querySelector(".btn-toggle");
const btnRemove = document.querySelector(".btn-remove");
const taskList = document.querySelector(".list-container ul");
const listItems = taskList.children;

taskList.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const button = event.target;
    const li = button.parentNode;
    li.remove();
  }
});

btnToggle.addEventListener("click", () => {
  const listContainer = document.querySelector(".list-container");
  if (listContainer.style.display === "none") {
    btnToggle.textContent = "Hide List";
    listContainer.removeAttribute("style");
  } else {
    btnToggle.textContent = "Show List";
    listContainer.style.display = "none";
  }
});

// btnCreate.addEventListener("click", () => {
//   const input = document.querySelector(".input-main");
//   const list = document.querySelector("ul");
//   list.insertAdjacentHTML("afterbegin", `<li>${input.value}</i>`);
//   input.value = "";
// });

btnRemove.addEventListener("click", () => {
  const li = document.querySelector("li:last-child");
  li.remove();
});

const addButton = (li) => {
  const remove = document.createElement("button");
  remove.className = "remove";
  remove.textContent = "Remove";
  li.appendChild(remove);
};

btnCreate.addEventListener("click", () => {
  let ul = document.getElementsByTagName("ul")[0];
  const input = document.querySelector(".input-main");
  let li = document.createElement("li");
  li.textContent = input.value;
  addButton(li);
  ul.appendChild(li);
  input.value = "";
});

for (let i = 0; i < listItems.length; i++) {
  addButton(listItems[i]);
}
