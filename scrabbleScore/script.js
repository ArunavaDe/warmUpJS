
let word ="quagnmire";


let valueSet = [];
    valueSet['a'] = 1;
    valueSet['b'] = 3;
    valueSet['c'] = 3;
    valueSet['d'] = 2;
    valueSet['e'] = 1;
    valueSet['f'] = 4;
    valueSet['g'] = 2;
    valueSet['h'] = 4;
    valueSet['i'] = 1;
    valueSet['j'] = 8;
    valueSet['k'] = 5;
    valueSet['l'] = 1;
    valueSet['m'] = 3;
    valueSet['n'] = 1;
    valueSet['o'] = 1;
    valueSet['p'] = 3;
    valueSet['q'] = 10;
    valueSet['r'] = 1;
    valueSet['s'] = 1;
    valueSet['t'] = 1;
    valueSet['u'] = 1;
    valueSet['v'] = 4;
    valueSet['w'] = 4;
    valueSet['x'] = 8;
    valueSet['y'] = 4;
    valueSet['z'] = 10;
    valueSet[' '] = 0;


function countScore(word) {

    let count = 0;
    word = word.toLowerCase();
    word = word.split('');

        for (let i = 0; i < word.length; i++) {
            let letter = word[i];

            let value = valueSet[letter];

            count += value;
        }

    return count;
}   

console.log(countScore(word));