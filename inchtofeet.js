//function is used for when we use one term more than once.

function inchToFeet(inch) {
    var feet = Math.floor(inch / 12);
    return feet;
}
var Feet1 = inchToFeet(156);
console.log(Feet1 + " " + "feet");

var Feet2 = inchToFeet(208);
console.log(Feet2 + " " + "feet");

var feet3 = inchToFeet(304);
console.log(feet3 + " " + "feet");