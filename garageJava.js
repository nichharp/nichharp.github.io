let CarList = [];
let num = 0;


function addCar(carName, carMake, carMiles, numFaults) {
    let bool = false;
    Car = { num, carName, carMake, carMiles, numFaults, bool }; //if continuing to use Stringify, need to change these parameters to make it easier to read.
    CarList.push(Car);
    document.getElementById("message").innerHTML = "";
    document.getElementById("message").innerHTML += "Your Car Number is: " + num + ". Please remember this.";
    num++;

}
function printGarage() {
    document.getElementById("message").innerHTML = "";
    for (let i = 0; i < CarList.length; i++) {
        printCar(i);
        document.getElementById("message").innerHTML += "<br>";
    }

    //if i had more time i'd print it properly. But this still looks nice
    // for (let i = 0; i < CarList.length; i++) {
    //     for (var vary in CarList) {
    //         if (CarList.hasOwnProperty(vary)) {
    //             document.getElementById("message").innerHTML = vary + ": " + CarList[i];
    //         }
    //     }
    // }
}
function printCar(c) {
    for (let i = 0; i < CarList.length; i++) {
        if (CarList[i].num === c) {
            document.getElementById("message").innerHTML += "Car Number: " + CarList[i].num + ". The " + CarList[i].carMake + " with " + CarList[i].carMiles + " miles, belonging to " + CarList[i].carName;
        }
    }
}
function printSingleCar(c) {
    document.getElementById("message").innerHTML = "";
    for (let i = 0; i < CarList.length; i++) {
        if (CarList[i].num === c) {
            document.getElementById("message").innerHTML += "Car Number: " + CarList[i].num + ". The " + CarList[i].carMake + " with " + CarList[i].carMiles + " miles, belonging to " + CarList[i].carName;
        }
    }
}

function removeCar(a) {
    document.getElementById("message").innerHTML = "";
    if (CarList[a].bool === true) {
        document.getElementById("message").innerHTML += CarList[a].carName + ", your " + CarList[a].carMake + " has now been checked out";
        // console.log(CarList);
        CarList.splice(a, 1);
        // console.log(CarList);
    }
    else {
        document.getElementById("message").innerHTML += "Your " + CarList[a].carMake + " has not been billed. Please bill first";
    }
}

function billEveryone() {
    document.getElementById("message").innerHTML = "";

    for (let i = 0; i < num; i++) {
        billEveryoneBaby(i);
    }
}
function billEveryoneBaby(b) {
    let k = 0;
    b = parseInt(b);
    for (let i = 0; i < num; i++) {
        // console.log(i, CarList[i].num, num, b);
        if (typeof CarList[i].num === "undefined") {

        }
        else if (CarList[i].num === b) {

            k++;
            // console.log(parseInt(CarList[b].carMiles));
            // console.log(parseInt(CarList[b].num));
            // console.log(parseInt(CarList[b].numFaults));

            let p = parseInt(CarList[b].carMiles) * 3 + parseInt(CarList[b].num) * 9 + parseInt(CarList[b].numFaults) * 10;
            if (CarList[b].carMake === "BMW") {
                p += 99999;
            }
            if (CarList[b].carMake === "Audi") {
                p += 88888;
            }
            if (CarList[b].carName === "Elliot") {
                p += 9999999999999999999999999;
            }
            document.getElementById("message").innerHTML += "The Car with the Car Number of " + b + " is to be charged £" + p + ". Please see reception to pay. <br>";
            CarList[b].bool = true;
            break;
        }
        // else {
        //     document.getElementById("message").innerHTML += "This Car with the Car Number of " + b + " does not exist.";
        // }
    }
    if (k === 0) {
        document.getElementById("message").innerHTML += "This Car with the Car Number of " + b + " does not exist. <br>";
    }
}

function billMeBaby(b) {
    let k = 0;
    document.getElementById("message").innerHTML = "";
    b = parseInt(b);

    for (let i = 0; i < num; i++) {
        console.log(i, num, CarList[i].num, b);
        console.log(CarList);
        if (CarList[i].num === b) {

            k++;
            // console.log(parseInt(CarList[b].carMiles));
            // console.log(parseInt(CarList[b].num));
            // console.log(parseInt(CarList[b].numFaults));

            let p = parseInt(CarList[b].carMiles) * 3 + parseInt(CarList[b].num) * 9 + parseInt(CarList[b].numFaults) * 10;
            if (CarList[b].carMake === "BMW") {
                p += 99999;
            }
            if (CarList[b].carMake === "Audi") {
                p += 88888;
            }
            if (CarList[b].carName === "Elliot") {
                p += 9999999999999999999999999;
            }
            document.getElementById("message").innerHTML += "This Car with the Car Number of " + b + " is to be charged £" + p + ". Please see reception to pay.";
            CarList[b].bool = true;
            break;
        }
        // else {
        //     document.getElementById("message").innerHTML += "This Car with the Car Number of " + b + " does not exist.";
        // }
    }
    if (k === 0) {
        document.getElementById("message").innerHTML += "This Car with the Car Number of " + b + " does not exist. <br>";
    }
}
function notAFun() {
    document.getElementById("message").innerHTML = "";
    document.getElementById("message").innerHTML += "This is not a command. Please look at help.";
}

function commandFun(de) {
    de = de.toLowerCase();
    let com = de.split(" ");
    // console.log(com.length);
    // for (let kkk = 0; kkk < com.length; kkk++) {
    //     console.log(typeof com[kkk]);
    // }

    if (com[0] === "create") {

        if (com[1] === "car") {
            if (com.length === 6) {
                let n = com[2];
                let m = com[3];
                let mil = com[4];
                let f = com[5];
                addCar(n, m, mil, f);
            }
            else {
                notAFun();
            }
        }
        else {
            notAFun();
        }

    }
    else if (com[0] === "output") {

        if (com[1] === "garage") {
            printGarage();
        }
        else if (com[1] === "car") {
            printSingleCar(parseInt(com[2]));
        }
        else {
            notAFun();
        }
    }
    else if (com[0] === "check" && com[1] === "out") {
        if (!isNaN(Number(com[2]))) {
            removeCar(Number(com[2]));
        }
        else {
            notAFun();
        }





    }
    else if (com[0] === "bill") {
        if (com[1] === "all") {
            billEveryone();
        }
        else if (!isNaN(Number(com[1]))) {
            // console.log(Number(com[1]));

            billMeBaby(com[1]);
        }
        else {
            notAFun();
        }
    }
    else if (com[0] === "print") {
        if (!isNaN(Number(com[1]))) {
            printCar(Number(com[1]));
        }
        else {
            notAFun();
        }
    }
    else {
        notAFun();
    }
}
// console.log(Number("5"));
// console.log(Number("hghg"));


addCar("Killer Mike", "Audi", 123, 1);
addCar("El-P", "Lexus", 1038, 4);
addCar("Andy", "BMW", 999, 1);
addCar("Adam", "Prius", 1, 77);
addCar("Dave", "Landrover", 887, 3);
addCar("Elliot", "SmartCar", 4, 7);
document.getElementById("message").innerHTML = "";

function pro() {
    return 1 + 5;
}