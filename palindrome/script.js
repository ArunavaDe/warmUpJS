let wordOne = "racecar";
let wordTwo = "button";


let isPalindrome = function(string){
    let arr = "";
    let checkArr = "";
    for( let i = 0; i < string.length; i++){
        arr = arr + string[i];
    }
    for( let j = string.length - 1; j >= 0; j--){
        checkArr = checkArr + string[j];
    }
    if(arr === checkArr){
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome(wordOne));
console.log(isPalindrome(wordTwo));
