var router = require("./router.js")
//problem: we need a simple way to look at user's badge count and JavaScript point from a web browser 
//solution
// Create a web server 

var http = require ("http");
http.createServer(function(request, response) {
 router.home(request,response);
 router.user(request,response);
}).listen(1338);
console.log("Server running at http://<workspace-url>/");


// Function that handles the readings of files and merge  in value 
    //read from file and get a string
        //merge values into string 