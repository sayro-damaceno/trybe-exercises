const sorteio = (number, callback) => {
  const randomNumber = Math.floor(Math.random() * 5 + 1);

  return callback(number, randomNumber) ? "Parabéns você ganhou" : "Tente novamente";
};

const compare = (n1, n2) => n1 === n2;

console.log(sorteio(3, compare));
