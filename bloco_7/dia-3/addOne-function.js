const assert = require('assert');
function addOne(arr) {
    let result = [];
    for(let index = 0; index < arr.length; index += 1) {
        result.push(arr[index] + 1);
    }
    return result;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

//checa se a função existe
assert.strictEqual(typeof addOne, 'function');
//checa se a função retorna um array com acŕescimo de 1 a cada item ao receber um array inicial
assert.deepEqual(output, expected);
//checa se o array inicial é igual a ele mesmo
assert.deepEqual(myArray, unchanged);