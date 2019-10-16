let word = "Pizza";

let reverse = function(string){
    let arr = "";
    for(let i = string.length - 1 ; i >= 0; i--){
        arr = arr + string[i];
    }
    return arr;   
}

console.log(reverse(word));