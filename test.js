console.clear();

const express = require('express');
const request = require('sync-request'); 
const app = express();
const port = process.env.PORT = 3000;

var URL;
var readline = require('readline-sync');
var info;

/*-------------------------------------*/
app.listen(port, () => console.log(`Listening to port: ${port}.....`));
while (true) {
    URL = readURL();
    var gitOptions = {
        url: URL,
        headers: {
            'User-Agent': 'request'
        }
    };
    var info = request('GET', URL, gitOptions);
    console.log(JSON.parse(info.getBody()));
    /*info = request(gitOptions, function (error, response, body) {
        console.log(JSON.parse(body));
        get();
    });*/
}

/*-------------------------------------*/

function readURL() {
    return readline.question("URL > ");   
}

