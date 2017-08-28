var incAns = 0;
var diff = "";
let toGuess = "";
let guessed = "";
let give = "";
let onPage = "";
let h = "";
let m = "";
let e = "";
findAWord("Easy");
findAWord("Med");
findAWord("Hard");
// console.log(easyWord);
// console.log(medWord);
// console.log(hardWord);
document.getElementById("characters").innerHTML = "Guessed Characters: ";




function Validate(val) {

    if (!val.match(/^[a-zA-Z]+$/) || val.length > 1) {
        alert('Only a single alphabet character are allowed');
        return false;
    }

    // else if (val.length > 1) {
    //     alert('Only single alphabet characters are allowed');
    //     return false;
    // }
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
        document.getElementById("hangman").innerHTML = "-------- <br> | \t |<br> | O<br> | /|\\ <br> | \t |<br> | <br> | <br> | <br> | <br> |____";

    } else if (incAns === 6) {
        document.getElementById("hangman").innerHTML = "-------- <br> | \t |<br> | O<br> | /|\\ <br> | \t |<br> | / <br> | <br> | <br> | <br> |____";

    } else if (incAns === 7) {
        document.getElementById("hangman").innerHTML = "-------- <br> | \t |<br> | O<br> | /|\\ <br> |  |<br> | / \\ <br> | <br> | <br> | <br> |____";
    }
    else if (incAns === 8) {
        alert("YOU LOST, the correct answer was "+ toGuess +", refresh");
    }
}


function startGame(k) {
    // console.log(easyWord);
    // console.log(medWord);
    // console.log(hardWord);
    console.log("Pur", e, m, h);
    if (k === "Easy") {
        toGuess = e;
    } else if (k === "Med") {
        toGuess = m;
    } else {
        toGuess = h;
    }
    console.log(toGuess , toGuess.length);
    toGuess = toGuess.slice(0,-1)
    for (let i = 0; i < toGuess.length; i++) {
        give += "_ ";
    }
    console.log(toGuess , toGuess.length, toGuess.split(""),);
    document.getElementById("message").innerHTML = give;

}




function findAWord(k) {
    var requestURL = "https://raw.githubusercontent.com/nichharp/nichharp.github.io/master/words_alpha.txt";
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = "text";
    request.send();
    let cur = "";
    request.onload = function () {
        requestData = request.response;
        requestData = requestData.split("\n");
        // console.log(requestData);
        do {
            let rand = Math.floor(Math.random() * 370101 + 1);
            if (k === "Easy") {
                if (requestData[rand].length > 8) {
                    console.log(requestData[rand]);
                    e = (requestData[rand]);
                    cur = (requestData[rand]);

                }
            } else if (k === "Med") {
                if (requestData[rand].length < 8 && requestData[rand].length > 4) {
                    console.log(requestData[rand]);
                    m = (requestData[rand]);
                    cur = (requestData[rand]);

                }
            } else {
                if (requestData[rand].length < 5) {
                    console.log(requestData[rand]);
                    h = (requestData[rand]);
                    cur = (requestData[rand]);

                }
            }
        } while (cur === "");

    };
    // // console.log(re);
    // cur = request.onload;
    // return cur;#
    // pur = cur;

}


function makeAGuess(isVal) {
    let guess = document.getElementById('guess').value;
    guess = guess.toLowerCase();
    if (isVal === true) {
        console.log(toGuess.indexOf(guess));

        if (guessed.indexOf(guess) > -1) {
            alert("You have guessed this character before. Try another");
            console.log("Guessed Before");
        }
        if (toGuess.indexOf(guess) > -1) {
            onPage = document.getElementById("message").innerHTML; //has a space at the end  //onPage is the _ _ _ _ _ _

            console.log("correct guess");              // tell me its a correct guess
            console.log(onPage);
            let instancesOf = [];

            for (let j = 0; j < toGuess.length; j++) {
                if (instancesOf.includes(toGuess.indexOf(guess, j)) === false) {
                    instancesOf.push(toGuess.indexOf(guess, j));
                }
            }
            if (instancesOf.indexOf(-1)!==-1) {
                instancesOf.splice(instancesOf.indexOf(-1) , 1);
            } 

            let onPageArray = [];
            for (let i = 0; i < onPage.length; i++) {
                onPageArray.push(onPage.charAt(i));
            }
            console.log(onPageArray);
            console.log(instancesOf ,instancesOf.length);

            for (let k = 0; k < instancesOf.length; k++) {
                onPageArray.splice(instancesOf[k] * 2, 1, guess);
            }
            onPage = onPageArray.toString();
            onPage = onPage.replace(/,/g, "");
            guessed += guess;
            console.log(onPage);




            // console.log(onPage);
            // onPage = document.getElementById("message").innerHTML;  //onPage is the _ _ _ _ _ _
            // // onPage = onPage.replace(/ /g, "");
            // onPage = onPage.replace(/↵/g, "");

            // console.log(onPage);
            // let onPageArray = [];

            // console.log(onPage);
            // console.log(toGuess.indexOf(guess));
            // console.log(guess);
            // console.log(onPageArray);

            // console.log(onPageArray);

            // onPage = onPageArray.toString();
            // // console.log(onPage);

            // onPage = onPage.replace(/,/g, "");
            // console.log(onPage);
            // // console.log(guessed);
            // console.log(guessed);

            // console.log(toGuess.indexOf(guess));
            // } while ((toGuess.indexOf(guess) !== -1));




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
    if (document.getElementById("message").innerHTML.replace(/ /g, "").replace(/_/g, "") === toGuess) {
        alert("YOU WIN!!!");
    }


}



