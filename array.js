// intializing array

var friendsAge = [15, 13, 12, 17];
console.log(friendsAge);

//index of first element starts with zero, then rest

console.log(friendsAge[2]);

//store array info in a variable.. changes to 21 instead of 17
friendsAge[3] = 21;
sonaliAge = friendsAge[3];
console.log(sonaliAge);

//finding positon of element...prints 2
var positon = friendsAge.indexOf(12);
console.log(positon);

//if element not found in array.. prints -1 because the element not found in array
var positon1 = friendsAge.indexOf(121);
console.log(positon1);


//push(): Add items to the end of an array.

friendsAge.push(29);
friendsAge.push(30);
console.log(friendsAge);

//checks number of element in array
console.log(friendsAge.length);

//pop(): Remove an item from the end of an array.
friendsAge.pop();
console.log(friendsAge);

//unshift(): Add items to the beginning of an array.

friendsAge.unshift(51);
console.log(friendsAge);

//shift(): Remove an item from the beginning of an array.
friendsAge.shift();
console.log(friendsAge);

// slicing an array, starts from mentioned index..we can add starting and ending position but main array is kept fine
var slice = friendsAge.slice(2, 4);
console.log(slice);
console.log(friendsAge);

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length);