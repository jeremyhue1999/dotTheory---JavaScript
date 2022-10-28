//Adds a conditional statement inside the onreadystatechange event handler that tests to make sure the server has sent back its complete response.
//Adds a conditional statement inside the onreadystatechange event handler that tests to make sure the server has sent back its complete response.
//select the page element with the ID sidebar
//uses a DOM element's innerHTML property to set the HTML inside the sidebar div to the server's response.
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
  }
  document.getElementById("sidebar").innerHTML = xhr.responseText;
};
xhr.open("GET", "sidebar.html");
xhr.send();
