//console.clear();

const request = require('sync-request'); 
const readline = require('readline-sync');

var URL;
var info;
var currentSHA;
var gitOptions = {
    headers: {
        'User-Agent': 'request'
    }
};

/*-------------------------------------*/



function checkSHA() {
    URL = "https://api.github.com/repos/lillelink/DIT953-lab1/branches";
    var masterBranch;
    info = getJSON(URL, gitOptions);
    for (let i = 0; i < info.length; i++) {
        let current = info[i];
        if (current["name"] == "master") {
            masterBranch = info[i];
            currentSHA = masterBranch.commit["sha"];
            break;
        }
    }
    return currentSHA;
}

/*
URL = readURL();
info = getJSON(URL, gitOptions);
console.log(info["commits_url"]);
*/

/*-------------------------------------*/

function readURL() {
    return readline.question("URL > ");   
}

function getJSON(URL, options) {
    return JSON.parse(request('GET', URL, options).getBody());
}

