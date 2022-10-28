var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    const employees = JSON.parse(xhr.responseText);
    let statusHTML = '<ul class="bulleted">';
    for (let i = 0; i < employees.length; i++) {
      if (employees[i].inoffice === true) {
        statusHTML += `<li class= "in">`;
      } else if (employees[i].inoffice === false) {
        statusHTML += `<li class= "out">`;
      }
      statusHTML += employees[i].name;
      statusHTML += "</li>";
    }
    statusHTML += "</ul>";
    document.querySelector("#employeeList").innerHTML = statusHTML;
  }
};
xhr.open("GET", "../data/employees.json");
xhr.send();

var xhr2 = new XMLHttpRequest();

xhr2.onreadystatechange = function () {
  if (xhr2.readyState === 4) {
    const room = JSON.parse(xhr2.responseText);
    let statusHTML2 = '<ul class="rooms">';

    for (let i = 0; i < room.length; i++) {
      if (room[i].available === true) {
        statusHTML2 += `<li class = "empty"> `;
      } else if (room[i].available === false) {
        statusHTML2 += `<li class ="full">`;
      }
      statusHTML2 += room[i].room;
      statusHTML2 += "</li>";
    }
    statusHTML2 += "</ul>";
    document.querySelector("#roomList").innerHTML = statusHTML2;
  }
};
xhr2.open("GET", "../data/rooms.json");
xhr2.send();
