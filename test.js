console.clear();

const request = require('sync-request'); 
const readline = require('readline-sync');

var URL;
var info;
var gitOptions = {
    headers: {
        'User-Agent': 'request'
    }
};

/*-------------------------------------*/
URL = readURL();
var info = getJSON(URL, gitOptions);
console.log(info);

/*-------------------------------------*/

function readURL() {
    return readline.question("URL > ");   
}

function getJSON(URL, options) {
    return JSON.parse(request('GET', URL, options).getBody());
}

