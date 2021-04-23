//Task 0.5

function areaOfATriangle(sideA ,sideB ,sideC ){

    var semiP;
    var area;
    
    semiP = (sideA + sideB + sideC) / 2;
    area = Math.sqrt(semiP * ((semiP - sideA)*(semiP - sideB)*(semiP - sideC)));

    return area;
}
console.log(areaOfATriangle(10,12,15));