console.clear();

const express = require('express');
const request = require('request'); 
const app = express();
const port = process.env.PORT = 3000;

var URL;
var readline = require('readline-sync');
var info;

/*-------------------------------------*/
get();
function get() {
    URL = readURL();
    var gitOptions = {
        url: URL,
        headers: {
            'User-Agent': 'request'
        }
    };
    info = request(gitOptions, function (error, response, body) {
        console.log(JSON.parse(body));
        get();
    });
}




/*-------------------------------------*/

function readURL() {
    return readline.question("URL > ");   
}

app.listen(port, () => console.log(`Listening to port: ${port}.....`));