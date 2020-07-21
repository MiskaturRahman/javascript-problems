//woodCalculator

function woodCalculator(chair, table, bed) {
    var woodForChair = chair * 1;   //required wood of chair is 1
    var woodForTable = table * 3;   //required wood of table is 3
    var woodForBed = bed * 5;   //required wood of bed is 5

    if (chair < 0) {
        console.log("sorry no item can be lesser than zero")
        return 0;
    }
    if (table < 0) {
        console.log("sorry no item can be lesser than zero")
        return 0;
    }
    if (bed < 0) {
        console.log("sorry no item can be lesser than zero")
        return 0;
    }

    var RequiredWood = woodForChair + woodForTable + woodForBed;
    return RequiredWood;

}

var TotalWood = woodCalculator(14, 12, 7);
console.log("Total " + TotalWood + " cubic feet " + "Wood Needed.");