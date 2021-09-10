const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const arrayString = names.toString();
const arrayString

function containsA() {
  // escreva seu código aqui
  return names.reduce((acc, element) => {
    element.toLowerCase();
    
  }, 0);
}

assert.deepStrictEqual(containsA(), 20);