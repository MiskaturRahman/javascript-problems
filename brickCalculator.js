//brickCalculator

function brickCalculator(floor) {
    brickPerFeet = 1000; //bricks required in one feet

    perFeetWall1 = 15; //height of first ten floor's wall
    perFeetWall2 = 12; //height of second ten floor's wall
    perFeetWall3 = 10; //height of other floor's wall

    firstTenFloor = 10;  //floor counts
    secondTenFloor = 10; //floor counts


    if (floor <= 0) {               //if floor number input is equal or less than zero
        console.log("building not ready yet.");
        return undefined;
    }


    else if (floor >= 20) {
        TotalBricks = firstTenFloor * perFeetWall1 * 1000 + secondTenFloor * perFeetWall2 * 1000 + (floor - 20) * perFeetWall3 * 1000;
    }

    else if (floor > 10 && floor <= 20) {
        TotalBricks = firstTenFloor * perFeetWall1 * 1000 + secondTenFloor * perFeetWall2 * 1000;
    }

    else if (floor > 0 && floor <= 10) {
        TotalBricks = firstTenFloor * perFeetWall1 * 1000;
    }




    return TotalBricks;
}

console.log("Total Bricks required:", brickCalculator(25));


