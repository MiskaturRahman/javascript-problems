var str = "I took a shower. I need a friend. Noone like this stikcy guy.";

// var count = 0;
// for (var i = 0; i < str.length; i++) {
//     var element = str[i];
//     if (element == " ") {
//         count++;
//     }
// }
// count++;
// console.log("number of words:", count);
function WordCount(str) {
    var element = 0;
    for (var i = 0; i < WordCount.length; i++)
        if (str[i] === " ") { // if a space is found in str
            element = +1; // add 1 to total so far
        }
    totalsoFar += 1; // add 1 to totalsoFar to account for extra space since 1 space = 2 words
}

console.log(WordCount("Random String"));