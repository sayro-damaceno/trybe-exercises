function imc(peso, altura) {
  const resultado =  peso / Math.pow(altura, 2);
  return resultado.toFixed(2);
};

module.exports = imc;
