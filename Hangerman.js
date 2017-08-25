var incAns = 0;
var diff = "";
// let requestArray = [];


function Validate(val) {

    if (!val.match(/^[a-zA-Z]+$/)) {
        if (val.length > 1) {
            alert('Only single alphabet characters are allowed');
            return false;
        } else {
            alert('Only alphabet characters are allowed');
            return false;
        }
    }
    return true;
}

function incorrectChangeMan() {
    incAns++;
    if (incAns === 1) {
        document.getElementById("hangman").innerHTML = "-------- <br> | \t |<br> | O<br> | <br> | <br> | <br> | <br> | <br> | <br> |____";
    } else if (incAns === 2) {
        document.getElementById("hangman").innerHTML = "-------- <br> | \t |<br> | O<br> | |<br> | <br> | <br> | <br> | <br> | <br> |____";

    } else if (incAns === 3) {
        document.getElementById("hangman").innerHTML = "-------- <br> | \t |<br> | O<br> | /|<br> | <br> | <br> | <br> | <br> | <br> |____";

    } else if (incAns === 4) {
        document.getElementById("hangman").innerHTML = "-------- <br> | \t |<br> | O<br> | /|\\  <br> | <br> | <br> | <br> | <br> | <br> |____";

    } else if (incAns === 5) {
        document.getElementById("hangman").innerHTML = "-------- <br> | \t |<br> | O<br> | /|\\ <br> | |<br> | <br> | <br> | <br> | <br> |____";

    } else if (incAns === 6) {
        document.getElementById("hangman").innerHTML = "-------- <br> | \t |<br> | O<br> | /|\\ <br> | |<br> | / <br> | <br> | <br> | <br> |____";

    } else if (incAns === 7) {
        document.getElementById("hangman").innerHTML = "-------- <br> | \t |<br> | O<br> | /|\\ <br> | |<br> | / \\ <br> | <br> | <br> | <br> |____";

    }
}


function startGame(k) {
    toGuess = findAWord(k);
}

function findAWord(k) {

    var requestURL = "https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt";
    var request = new XMLHttpRequest();
    // let rand = Math.floor(Math.random()*)
    request.open('GET', requestURL);
    request.responseType = "text";
    request.send();
    request.onload = function () {
        requestData = request.response;
        requestData = requestData.split("\n");
        do {
            let rand = Math.floor(Math.random() * 370101 + 1);
            if (k === "Easy") {
                if (requestData[rand].length > 8) {
                    // console.log(requestData[rand]);
                    return requestData[rand];
                }
            } else if (k === "Med") {
                if (requestData[rand].length < 8 && requestData[rand].length > 4) {
                    // console.log(requestData[rand]);
                    return requestData[rand];
                }
            } else {
                if (requestData[rand].length < 5) {
                    // console.log(requestData[rand]);
                    return requestData[rand];
                }
            }
        } while (1 !== 2);

    };
}