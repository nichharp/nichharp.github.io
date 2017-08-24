let CarList = [];
let num = 0;

function addCar(carName, carMake, carMiles) {
    let bool = false;
    Car = { num, carMake, carMiles, bool }; //if continuing to use Stringify, need to change these parameters to make it easier to read.
    CarList.push(Car);
    document.getElementById("message").innerHTML = "";
    document.getElementById("message").innerHTML += "Your Car Number is: " + num + ". Please remember this.";
    num++;

}
function printGarage() {
    document.getElementById("message").innerHTML = "";
    for (let i = 0; i < CarList.length; i++) {
        document.getElementById("message").innerHTML += JSON.stringify(CarList[i]);
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
function removeCar(a) {
    document.getElementById("message").innerHTML = "";
    if (CarList[a].bool === true) {
        document.getElementById("message").innerHTML += "Your " + CarList[a].carMake + " has now been checked out";
        // console.log(CarList);
        CarList.splice(a, 1);
        // console.log(CarList);
    }
    else {
        document.getElementById("message").innerHTML += "Your " + CarList[a].carMake + " has not been billed. Please bill first";
    }
}
function billEveryone() {

}


function billMeBaby(b) {
    document.getElementById("message").innerHTML = "";
    for (let i = 0; i < CarList.length; i++) {
        if (CarList[i].num === b) {
            let p = CarList[b].carMiles * 3 + CarList[b].num * 9;
        }
        else {
            document.getElementById("message").innerHTML += "This car does not exist.";
        }
    }

}


function pro() {
    return 1 + 5;
}