// Modules
const request = require('sync-request'); 
const readline = require('readline-sync');

// Variables
const parseRate = 3000; // set to lower than 5000 requests per hour
var URL;
var currentSHA;
var gitOptions = {
    headers: {
        'User-Agent': 'request',
        'Authorization': 'token'+getFromTerminal("Auth token > ")
    }
};

/*------------------MAIN PROGRAM-------------------*/
URL = getFromTerminal("URL > ");
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

/*-----------------HELPER FUNCTIONS--------------------*/

// Makes a GET request to the chosen URL (getJSON) and returns the latest commit sha
function checkSHA(urlpar) {
    let info = getJSON(urlpar, gitOptions);
    for (let i = 0; i < info.length; i++) {
        let current = info[i];
        if (current["name"] == "master") {
            let masterBranch = info[i];
            return masterBranch.commit["sha"];
        }
    }
    return null;
}

// Makes a GET request with the passed set of options, to the given URL.
function getJSON(URL, options) {
    return JSON.parse(request('GET', URL, options).getBody());
}

//IO
function getFromTerminal(question) {
    return readline.question(question);
}
