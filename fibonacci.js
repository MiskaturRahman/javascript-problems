// function fibonacci(n) {
//     var fibo = [0, 1];
//     for (var i = 2; i <= n; i++) {
//         fibo[i] = fibo[i - 1] + fibo[i - 2];
//     }
//     return fibo;
// }
// var result = fibonacci(13);
// console.log(result);
function fibonacci(n) {
    var fibo = [0, 1];
    for (i = 2; i <= n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
console.log(fibonacci(10));

//prints whole list