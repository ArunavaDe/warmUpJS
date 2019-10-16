let stringOne = "batman";
let stringTwo = " na na na na";


let repeater = function(string, number){
    let arr = ""
    for( let i = 0; i < number; i++){
        arr = arr + string;
    }
    return arr;   
}

console.log(stringOne);
console.log(repeater(stringTwo, 4));