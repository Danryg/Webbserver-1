//console.clear();

const request = require('sync-request'); 
const readline = require('readline-sync');

const parseRate = 3000;
var URL;
var OAuthToken;
var info;
var currentSHA;


/*-------------------------------------*/

URL = readURL();
OAuthToken = readToken();
var gitOptions = {
    headers: {
        'User-Agent': 'request',
        'Authorization': 'token'+OAuthToken
    }
};
currentSHA = checkSHA(URL);
setInterval(mainLoop, parseRate);

function mainLoop() {
    let latestSHA = checkSHA(URL);
    if (currentSHA != latestSHA) {
        console.log("NEW COMMIT TO MASTER");
        currentSHA = latestSHA;
    } else {
        console.log("CHECKING...");
    }
}
//test

function checkSHA(urlpar) {
    info = getJSON(urlpar, gitOptions);
    for (let i = 0; i < info.length; i++) {
        let current = info[i];
        if (current["name"] == "master") {
            let masterBranch = info[i];
            console.log(masterBranch.commit["sha"]);
            return masterBranch.commit["sha"];
            
        }
    }
    return null;
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

function readToken() {
    return readline.question("Token > ")
}

function getJSON(URL, options) {
    return JSON.parse(request('GET', URL, options).getBody());
}

