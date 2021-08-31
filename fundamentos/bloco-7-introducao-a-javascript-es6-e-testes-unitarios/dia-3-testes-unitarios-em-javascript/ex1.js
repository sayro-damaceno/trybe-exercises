const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
// Teste se o retorno de sum(4, 5) é 9
const expectedNine = sum(4, 5);
assert.strictEqual(expectedNine, 9, '4 + 5 é igual a 9');

// Teste se o retorno de sum(0, 0) é 0
const expectedZero = sum(0, 0);
assert.strictEqual(expectedZero, 0, '0 + 0 é igual a 0');

// Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
assert.throws(() => {
  sum(4, '5')
});

// Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
assert.throws(() => {
  sum(4, '5')
}, /^Error: parameters must be numbers$/);