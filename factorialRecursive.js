// method for recursion
// for (var i = 10; i <= 1; i--) {

// }
// method 2:

// var i = 10;
// while (i >= 1) {
//     i--;
// }

// function factorial(n) {
//     if (n == 0) {
//         return 1;
//     }
//     else {
//         return n * factorial(n - 1)
//     }
// }
// var result = factorial(10);
// console.log(result);


//2

function factorial(n) {
    if (n == 0) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5));