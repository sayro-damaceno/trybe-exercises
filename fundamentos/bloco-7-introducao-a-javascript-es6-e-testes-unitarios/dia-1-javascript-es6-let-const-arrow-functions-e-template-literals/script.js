// Parte I
// exercício 1
const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

// exercício 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
oddsAndEvens.sort((a,b) => {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
});

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉

// Parte II
// exercício 1
const factorial = n => n > 1 ? n * factorial(n - 1) : 1;

console.log(factorial(6));

// exercício 2
const maiorPalavra = string => {
  let palavras = string.split(" ");
  let bigFor = "";

  for (word of palavras) {
    if (word.trim().length > bigFor.length) {
      bigFor = word.trim();
    }
  }
  return bigFor;
}
console.log(maiorPalavra("Antônio foi no banheiro e não sabemos o que aconteceu"));

