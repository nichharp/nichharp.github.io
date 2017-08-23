

function square(x) {
    return x * x;
}
function sumthree(x, y, z) {
    return x + y + z;
}
function makerPersonbyButt() {
    makerPerson(document.getElementById("Name").value, document.getElementById("Age").value, document.getElementById("Occu").value);
}
function makerPerson(x, y, z) {
    Person.name = x;
    Person.age = y;
    Person.occupation = z;
    document.write(Person.name + " " + Person.age + " " + Person.occupation + " ");
    console.log(Person.name + " " + Person.age + " " + Person.occupation + " ");
}
function boop() {
    window.alert("D0n'T PrEsS tHe BUtT00n");
}
function increaseAge() {
    Person.age = Person.age + 1;
    window.alert("Nick is now " + Person.age);
}
function checkAge() {
    if (Person.age <= 40 & Person.age >= 20) {
        document.write(Person.name + " is between 20-40");
    }
}
function loopOne() {
    for (var i = 1; i <= 10; i++) {
        document.write(i);
        document.write("<br>");

    }
}
function loopTwo() {
    for (var j = 1; j <= 200; j++) {
        if (j % 2 === 0) {
            document.write(j);
            document.write("<br>");
        }
    }
}
function loopFizzBuzz() {
    var a = document.getElementById("FizzBuzzOne").value;
    var b = document.getElementById("FizzBuzzTwo").value;
    var c = document.getElementById("FizzBuzzThree").value;
    for (var i = 1; i <= a; i++) {
        if (i % 3 === 0 & i % 5 === 0) {
            document.write(b + c);
            document.write("<br>");
        } else if (i % 3 === 0) {
            document.write(b);
            document.write("<br>");
        } else if (i % 5 === 0) {
            document.write(c);
            document.write("<br>");
        }
    }
}
function loopFour(b) {
    var a = parseInt(b);
    document.write(a);
    document.write("<br>");
    while (a !== 1) {
        if (a % 3 === 0) {
            document.write("divide by 3   -   ");
            a = a / 3;
            document.write(a);
            document.write("<br>");
        } else {
            document.write("Add 1    -   ");
            a += 1;
            document.write(a);
            document.write("<br>");

        }
    }
}
function triples(a) {
    var count = 0;
    for (var i = 2; i <= a.length; i++) {
        if (a.charAt(i) === a.charAt(i - 1) & a.charAt(i) === a.charAt(i - 2)) {
            count += 1;
        }
    }
    document.write(count);
}
function DOMcreate() {
    document.getElementById("message").innerHTML = "<p> A luau (Hawaiian: lūʻau) is a traditional Hawaiian party or feast that is usually accompanied by entertainment. It may feature food such as poi, Kalua pig, poke, lomi salmon, opihi, haupia and beer, and entertainment such as traditional Hawaiian music and hula. Among people from Hawaiʻi, the concepts of sfsfs and sdfsdfs are often blended, resulting in graduation luau, wedding luau and birthday luau. </p>";
}
function DOMchange(a) {
    document.getElementById("message").innerHTML = a;
}
function DOMdelete() {
    document.getElementById("message").innerHTML = "";
}
function JsonOne() {
    var requestURL = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json";
    var request = new XMLHttpRequest();
    var toPrint = "";

    request.open('GET', requestURL);
    request.responseType = "json";
    request.send();
    request.onload = function () {
        var requestData = request.response;
        // var myH1 = document.createElement("h1");
        // myH1.textContent = requestData["squadName"];
        // document.getElementsByTagName("head")[0].appendChild(myH1);
        console.log(requestData);
        // 	for (var i =0; i<requestData.length; i++) {
        // 		// console.log(requestData[i].nm);

        // 		toPrint +="<p>" + requestData[i].squadName + ", " + requestData[i].homeTown+ ", " +requestData[i].formed+ ", " + requestData[i].secretBase + ", "+ requestData[i].active + ", "  +requestData[i].members + ", " + "\n" + "Members: " +"</p>";
        // 		for (var j =0;j<requestData[i].members.length;j++) {
        // 			toPrint +=  "<p>" + requestData[i].members[j].name + ", " + requestData[i].members[j].age+ ", " +requestData[i].members[j].secretIndentity+ ", " + "\n" + "Powers: " +"</p>"
        // 			for (var k=0; k<requestData[i].members[j].length;k++) {
        // 				toPrint += "<p>" + requestData[i].members[j].powers[k]+ "</p>" ;
        // 			}
        // 		}
        // 	}
        // print(toPrint);
    };
}
var requestData;
function JsonTwo() {
    var requestURL = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json";
    var request = new XMLHttpRequest();
    var toPrint = "";
    request.open('GET', requestURL);
    request.responseType = "json";
    request.send();
    request.onload = function () {
        requestData = request.response;
        // console.log(requestData +"in json2");

        // var myH1 = document.createElement("h1");
        // myH1.textContent = requestData["squadName"];
        // document.getElementsByTagName("head")[0].appendChild(myH1);
        // console.log(requestData);
        for (var i = 0; i < requestData.length; i++) {
            // console.log(requestData[i].nm);
            toPrint += "<p>" + requestData[i].nm + ", " + requestData[i].cty + ", " + requestData[i].hse + ", " + requestData[i].yrs + ", " + "\n" + "</p>";
        }
        if (document.getElementById("JsonTwoBox").checked === true) {
            print(toPrint);
        }
    };
}

function print(a) {
    document.getElementById("message").innerHTML = a;
    // document.write("<br>");
}

function search(a) { //works for single year Kings & works for full input years "#-#". Couldn't make work to find years in string... ie: search for #1, found in "#1-#2"
    //a is my input
    // JsonTwo();

    for (var i = 0; i < requestData.length; i++) {
        var data = requestData[i];
        var years = data.yrs.toString();
        if (a.indexOf(data.nm) !== -1) {
            console.log(requestData[i]);
        }
        else if (a.indexOf(data.cty) !== -1) {
            console.log(requestData[i]);
        }
        else if (a.indexOf(data.hse) !== -1) {
            console.log(requestData[i]);
        }
        // console.log(years);
        // console.log(a);
        // console.log(a.indexOf(years));
        // console.log(typeof a);
        // console.log(typeof years);
        else if (a.indexOf(years) !== -1) {
            console.log(requestData[i]);
        }
    }


}
var Person = {};
makerPerson("Nick", 21, "Java Dev");





	// document.write("<br>");
	// var e = 'He said "My name is Elliot"';
	// document.write(e);
	// document.write("<br>");
	// document.write(e.toUpperCase());
	// document.write("<br>");
	// var str = "5";
	// var num = 10;
	// document.write(str+num);
	// document.write("<br>");
	// var myArray = ['cash' , 'money' , 'armour'];
	// document.write(myArray);
	// document.write("<br>");
	// myArray[myArray.length] = 'grils';
	// document.write(myArray);
	// document.write("<br>");
	// delete myArray[3];
	// document.write(myArray);
	// document.write("<br>");
	// var a = "Where the Document.write writes to  <----------";
	// var N = makerPerson("Mick", 22 ,"homeless" + " ");
	// document.write(N.name + " " + N.age+ " " + N.occupation);
	// document.write(a);
	// window.alert(a);
	// console.log(a);
	// var z = first(9,9);