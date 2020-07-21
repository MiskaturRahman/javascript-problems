function evenify(num) {
    if (num % 2 == 0) {
        console.log(num, ": is even");
    } else {
        console.log(num * 2, ": is odd number");
    }
}

nums = [4, 23, 65, 37, 22, 43, 12, 2];
for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    evenify(num);
}

friends_age = [4, 7, 23, 45, 32, 56, 89];
for (let i = 0; i < friends_age.length; i++) {
    const age = friends_age[i];
    evenify(age);
}