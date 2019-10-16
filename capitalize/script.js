let line = "the quick brown foX juMps over the lazy dog";

let sentenceCase = function(string){
    string = string.toLowerCase();

    string = string.split(' ');

    for( let i = 0; i < string.length; i++){
        string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
    }
    return string.join(' ');
    
}

console.log(sentenceCase(line));