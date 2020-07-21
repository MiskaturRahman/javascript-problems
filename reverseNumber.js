function reverse_number(n) {
    n = n + "";
    return n.split("").reverse().join("");
}
console.log(reverse_number(98765));

// The split() method is used to split a String object into an array of strings by separating the string into substrings.
// Code : console.log('1000'.split(""));
// Output : ["1", "0", "0", "0"]

// The reverse() method is used to reverse an array in place. The first array element becomes the last and the last becomes the first.
// Code : console.log(["1", "0", "0", "0"].reverse());
// Output : ["0", "0", "0", "1"]

// The join() method is used to join all elements of an array into a string.
// Code : console.log(["1", "0", "0", "0"].reverse().join(""));
// Output : "0001"