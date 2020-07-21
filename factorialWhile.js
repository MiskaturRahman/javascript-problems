// Calculate Factorial of a number using a while loop
function factorial(n) {
    var i = 1;
    var factorial = 1;
    while (i <= n) {
        factorial *= i;
        i++;
    }
    return factorial;
}

var result = factorial(10);
console.log(result);
// console.log(factorial);

function factorial(n) {
    var i = 1;
    var factorial = 1;
    while (i <= n) {
        factorial *= i;
        i++
    }
    return factorial;
}
console.log(factorial(5));