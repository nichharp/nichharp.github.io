var incAns = 0;
var diff = "";
let toGuess = "";
let guessed = "";
let give = "";
let onPage = "";
document.getElementById("characters").innerHTML = "Guessed Characters: ";

// let requestArray = [];


function Validate(val) {

    if (!val.match(/^[a-zA-Z]+$/)) {
        alert('Only alphabet characters are allowed');
        return false;
    }

    else if (val.length > 1) {
        alert('Only single alphabet characters are allowed');
        return false;
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
    else if (incAns === 8) {
        alert("YOU LOST, refresh");
    }
}


function startGame(k) {
    // toGuess = findAWord(k);
    toGuess = "peanut";
    document.getElementById("message").innerHTML = "";
    for (let i = 0; i < toGuess.length; i++) {
        give += "_ ";
    }
    document.getElementById("message").innerHTML += give;
    console.log(toGuess);
}

function findAWord(k) {
    var requestURL = "https://raw.githubusercontent.com/nichharp/nichharp.github.io/master/words_alpha.txt";
    var request = new XMLHttpRequest();
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
                    console.log(requestData[rand]);
                    return new Promise(requestData[rand]);
                }
            } else if (k === "Med") {
                if (requestData[rand].length < 8 && requestData[rand].length > 4) {
                    console.log(requestData[rand]);
                    return new Promise(requestData[rand]);
                }
            } else {
                if (requestData[rand].length < 5) {
                    console.log(requestData[rand]);
                    return new Promise(requestData[rand]);
                }
            }
        } while (1 !== 2);

    };
}


function makeAGuess(isVal) {
    let guess = document.getElementById('guess').value;
    guess = guess.toLowerCase();
    if (isVal === true) {
        if (guessed.indexOf(guess) > -1) {
            alert("You have guessed this character before. Try another");
            console.log("Guessed Before")
        }
        else if (toGuess.indexOf(guess) > -1) {
            console.log("correct guess");                           // tell me its a correct guess
            onPage = document.getElementById("message").innerHTML;  //onPage is the _ _ _ _ _ _
            let onPageArray = [];
            for (let i = 0; i < onPage.length; i++) {
                onPageArray.push(onPage.charAt(i));
            }
            onPageArray.splice(toGuess.indexOf(guess) * 2, 1, guess);
            console.log(onPageArray);

            onPage = onPageArray.toString();
            console.log(onPage);

            onPage = onPage.replace(/,/g, "");
            console.log(onPage);






            // onPageArray = onPage.split("");
            // console.log(onPageArray);

            // onPageArray.splice(toGuess.indexOf(guess), 1, guess);
            // console.log(onPageArray);
            // onPage = onPageArray.toString();
            // console.log(onPage);

            // onPage = onPage.replace(",", "");
            // console.log(onPage);

            document.getElementById("message").innerHTML = onPage;                      //need to change the _ _ _ _ shows the guess _ _ a _ _ _
            // if (onPageArray === toGuess)
        }
        else {
            incorrectChangeMan();
            console.log("wrong guess");
        }
        document.getElementById("characters").innerHTML += guess;
    } else {

    }
    if (document.getElementById("message").innerHTML.replace(/ /g, "") === toGuess) {
        alert("YOU WIN!!!");
    }


}

function correctGuess() {

}

