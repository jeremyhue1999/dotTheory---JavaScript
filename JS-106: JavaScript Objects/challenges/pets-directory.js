const display = (arr) => {
  let items = "";
  for (let i = 0; i < arr.length; i++) {
    items += `
      <h2>${arr[i].name}</h2>
      <h3>${arr[i].type} | ${arr[i].breed}</h3>
      <p>age:${arr[i].age}</p>
      <img src="${arr[i].photo}" alt="${arr[i].breed}">`;
  }
  return items;
};

document
  .querySelector("main")
  .insertAdjacentHTML("beforeend", `${display(object)}`);
display(object);
