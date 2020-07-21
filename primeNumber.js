function isPrime(n) {
    for (i = 2; i < n; i++) {
        if (n % i == 0) {
            return 'not a prime number';

        }
    }
    return ('your number is prime number');
}

var result = isPrime(127);
console.log(result);



//finding remainder
// var n = 77;
// for (i = 2; i < n; i++) {
//     console.log(i, n % i)
    //till here we can get a remainder with dividing a number
    // if (n % i == 0) {
    //     console.log("not a prime")
    // }
