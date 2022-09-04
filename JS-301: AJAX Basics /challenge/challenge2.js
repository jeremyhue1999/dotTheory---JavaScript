//Add the code to open the AJAX request using the GET method and pointing to the 'footer.html' file and adds the send request.
var request = new XMLHttpRequest();
request.onreadystatechange = function () {
  if (request.readyState === 4) {
    document.getElementById("footer").innerHTML = request.responseText;
  }
};
request.open("GET", "footer.html");
request.send();
