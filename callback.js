function explain_callback(name, age, task) {
    task();
    console.log('hello', name);
    console.log('Your age', age);
}

function washHand() {
    console.log('Wash hand before meal');
}

function takeShower() {
    console.log('You are dirty so take shower');
}

function goLive() {
    console.log('No need washing go live');
}


explain_callback('karim mia', 28, washHand);
explain_callback('harun mia', 43, takeShower);
explain_callback('labu mia', 34, goLive);