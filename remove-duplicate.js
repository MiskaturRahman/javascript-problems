// var nums = [3, 7, 11, 8, 3, 2, 11, 7, 8, 3, 6, 5];
// var unique = [];
// for (var i = 0; i < nums.length; i++) {
//     var element = nums[i];
//     if (unique.indexOf(element) == -1) {
//         unique.push(element);
//     }
// }
// console.log("Unique array is: ", unique);

var name = [3, 7, 11, 8, 3, 2, 11, 7, 8, 3, 6, 5];
var unique = [];
for (i = 0; i < name.length; i++) {
    var element = name[i];
    if (unique.indexOf(element) == -1) {
        unique.push(element);
    }
}
console.log("unique array is: ", unique);