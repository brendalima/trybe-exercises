const assert = require('assert');

function wordLengths(arr){
    let letterCount = [];
    for (let index = 0; index < arr.length; index += 1) {
        letterCount.push(arr[index].length);
    }
    return letterCount;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

//testa se a função existe
assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
//testa se a função retorna o numero de caracteres em cada string do array de entrada
assert.deepEqual(output, expected);