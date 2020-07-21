function brickCalculator(numberOfFloor) {
    var firstTenFloor = 10;
    var secondTenFloor = 10;
    if (numberOfFloor > 20) {
        numberOfBricks = (firstTenFloor * 15 * 1000) + (secondTenFloor * 12 * 1000) + ((numberOfFloor - 20) * 10 * 1000);
    }
    else if (numberOfFloor > 10) {
        numberOfBricks = (firstTenFloor * 15 * 1000) + ((numberOfFloor - 10) * 12 * 1000);
    }
    else if (numberOfFloor > 0) {
        numberOfBricks = (numberOfFloor * 15 * 1000);
    }
    else {
        console.log("Number of floor > 0");
    }
    return numberOfBricks;
}
var totalBreakCount = brickCalculator(15);
console.log("Total Bricks required:", totalBreakCount);

