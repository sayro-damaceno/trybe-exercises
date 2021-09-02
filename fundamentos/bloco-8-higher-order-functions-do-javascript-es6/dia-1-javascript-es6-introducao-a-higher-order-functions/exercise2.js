const sorteio = (number, callback) => {
  const randomNumber = Math.floor(Math.random() * 5 + 1);
  const compareNumbers = callback(number, randomNumber);

  if (compareNumbers) {
    return "Parabéns você ganhou";
  } else {
    return "Tente novamente";
  }
};

const compare = (n1, n2) => n1 === n2;

console.log(sorteio(3, compare));
