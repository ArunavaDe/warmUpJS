

let stringOne = "dog";
let stringTwo = "god";

let stringThree = "dog";

let isMatch = function(stOne, stTwo){
    if(stOne === stTwo){
        return true;
    } 
    else {
        return false;
    }
}


console.log(isMatch(stringOne, stringTwo));
console.log(isMatch(stringOne, stringThree));