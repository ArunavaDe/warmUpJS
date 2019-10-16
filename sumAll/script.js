let numberOne = 1;
let numberFinal = 4;

let sumAll = function(numOne, numTwo){
    let sum = 0;
    for( let i = numOne; i <= numTwo; i++ ){
        sum = sum + i;
    }
    return sum;
}

console.log(sumAll(1,4));