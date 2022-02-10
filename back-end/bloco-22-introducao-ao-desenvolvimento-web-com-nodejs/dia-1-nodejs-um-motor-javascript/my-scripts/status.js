function status(imc) {
  if (imc < 18.5) return 'Abaixo do peso (magreza)';
  else if (imc < 25) return 'Peso normal';
  else if (imc < 30) return 'Acima do peso (sobrepeso)';
  else if (imc < 35) return 'Obesidade grau I';
  else if (imc < 40) return 'Obesidade grau II';
  else return 'Obesidade graus III e IV';
}

module.exports = status;
