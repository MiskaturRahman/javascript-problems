// factorial means 5! = 5*4*3*2*1


var factorial = 1;
for (var i = 1; i <= 5; i++) {
    factorial *= i;
    console.log(i, factorial);
}


//using function
// function factorial(n) {
//     var factorial = 1;
//     for (var i = 1; i <= n; i++) {
//         factorial *= i;
//     }
//     return factorial;
// }

// var result = factorial(10);
// console.log(result);

