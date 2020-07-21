function highAndLow(numbers) {
    var numbers = numbers.split(" ");
    return Math.max.apply(null, numbers) + " " + Math.min.apply(null, numbers);
}
console.log(highAndLow("3 4 2 1 5"));

// /* Improve the prototype of Array. */

// // Max function.
// Array.prototype.max = function() {
//     return Math.max.apply(null, this);
//   };

//   // Min function.
//   Array.prototype.min = function() {
//     return Math.min.apply(null, this);
//   };

//   var stringNumbers = "1 2 3 4 5";

//   // Convert to array with the numbers.
//   var arrayNumbers = stringNumbers.split(" ");

//   // Show the highest and lowest numbers.
//   alert("Highest number: " + arrayNumbers.max() + "\n Lowest number: " + arrayNumbers.min());