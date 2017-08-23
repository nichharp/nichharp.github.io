let CarList = [];

function addCar(carName, carMake, carMiles) {
    let num = CarList.length;
    Car = { num, carMake, carMiles };
    CarList.push(Car);
    document.getElementById("message").innerHTML = "";
    document.getElementById("message").innerHTML += "Your Car Number is: " + num + ". Please remember this.";

}
function printGarage() {
    document.getElementById("message").innerHTML = "";
    document.getElementById("message").innerHTML = JSON.stringify(CarList);

    //if i had more time i'd print it properly. But this still looks nice
    // for (let i = 0; i < CarList.length; i++) {
    //     for (var vary in CarList) {
    //         if (CarList.hasOwnProperty(vary)) {
    //             document.getElementById("message").innerHTML = vary + ": " + CarList[i];
    //         }
    //     }
    // }
}
function removeCar(num) {
    CarList
}



function pro() {
    return 1 + 5;
}