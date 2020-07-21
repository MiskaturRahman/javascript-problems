var marks = [45, 34, 67, 81, 89, 32, 12, 134];
var max = marks[0];
for (var i = 0; i < marks.length; i++) {
    var element = marks[i];
    if (element > max) {
        max = element;
    }
}
console.log(max);