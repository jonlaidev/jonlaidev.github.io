console.log('log0');
//Seuraava harjoitus
//this function does this
var doCoolStuff = function () {
   var currentClassName = document.getElementById ('cool').className;
//jos olemassa oleva class ei ole cool tee siitä cool
   if (currentClassName == 'cool') {
    document.getElementById ('cool').className = ('cool red');
   } else {
    document.getElementById ('cool').className = ('cool');
   }

   //changing class name
   //document.getElementById ('cool').className = ('cool red');
}
var sayMyName = function (name) {
    alert('My name is: '+name);
}


//Seuraava harjoitus

var favColor = "red";
var myFavcolors = ["black", "red", "white"];
var numOfFavColors = 3;
var hasGotFavColors = true;
var richObject = {
    firstName: "Rich",
    lastName: "Armstrong",
    favColor: ["blue", "red"],
    yearsAlive: 103,
    isMale: true};

//Seuraava harjoitus

 
var doSomething = function (){

}


//Seuraava harjoitus


    var auto = {
        make: "Raketti",
        model: "Raptor",
        color: "white",
        isTurnedOn: "false",
        numberOfWheels: 4,
        seats: 
        [
            "seat1",
            "seat2",
            "seat3",
            "seat4"
        ],
    fly: function ()
    {
        alert ("fly");
    },
    switchCar: function (isOn) {
        if (isOn == true){
            this.isTurnedOn = true;
        } else {
            this.isTurnedOn = false;
        }
    }
 };
console.log("log1");

//Seuraava harjoitus

    


console.log("log2");   


