function max(input) {
    if (toString.call(input) !== "[object Array]")
        // JavaScript - The Arrays Object.The Array object lets you store multiple values in a single variable.
        return false;
    return Math.max.apply(null, input);
}

console.log(max([12, 34, 56, 1]));
console.log(max([-12, -34, 0, -56, -1]));

