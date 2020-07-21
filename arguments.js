function arguments(num1, num2) {
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        console.log(num);
        //sum=sum+num; shows the sum of all element
    }
    return num1 + num2;
}

var result = arguments(3, 5, 12, 32);
console.log(result); 