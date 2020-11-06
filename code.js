var http = require('http');
var port = 8080;

http.createServer(function (req,res) {
    res.writeHead(200, {'Content-type': 'text/html'});
    res.end('Hello world!');
}).listen(port);

