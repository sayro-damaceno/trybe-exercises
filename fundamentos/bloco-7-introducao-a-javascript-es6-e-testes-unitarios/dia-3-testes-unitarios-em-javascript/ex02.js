const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
const expected1 = myRemove([1, 2, 3, 4], 3);
assert.deepStrictEqual(expected1, [1, 2, 4]);

// Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
const expected2 = myRemove([1, 2, 3, 4], 3);
assert.notDeepStrictEqual(expected2, [1, 2, 3, 4]);

// Verifique se o array passado por parâmetro não sofreu alterações
const myList = [5, 6, 7, 8];
myRemove(myList, 5);
assert.deepStrictEqual(myList, [5, 6, 7, 8]);

// Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
const expected3 = myRemove([1, 2, 3, 4], 5);
assert.deepStrictEqual(expected3, [1, 2, 3, 4]);