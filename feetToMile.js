//feetToMile

function feetToMile(feet) {
    var mile = feet / 5280; // 1 mile = 5280 feet

    if (feet < 0) {         //if feet input is less than zero
        console.log("sorry length can not be negative.")
        return 0;
    }
    return mile;
}
var convertFeet = feetToMile(213987);
convertFeet = convertFeet.toFixed(2);       // to show only two values after decimal
console.log("the conversion of feet to mile is: " + convertFeet);