var http = require('http'); // require initiates a module from node.js
var dt = require('./customModule');
var port = 8080;

http.createServer(function (req,res) { // create server with http module
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write("The date and time is currently: "+ dt.myDateTime());
    res.end('Hello world!');
}).listen(port); // what port the server should listen to


