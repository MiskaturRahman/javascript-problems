// sum of an array 
var sum = 0;
function getArraySum(numbers) {
    for (var i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        sum += element;
    }
    return sum;
}
var numbers = [23, 54, 1, 3, 54, 76, 45];
var result = getArraySum(numbers);
console.log("The total is: ", sum);

