let word = "diamond";

let countVowels = function(string){
    let count = 0;
    for( let i = 0; i < string.length; i++){
        if(string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u"){
            count = count + 1;
        }
    }
    return count;
}

console.log(countVowels(word));