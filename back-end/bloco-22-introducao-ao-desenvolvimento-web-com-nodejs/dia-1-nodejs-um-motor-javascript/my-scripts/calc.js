const status = require("./status");
const imc = require("./imc");
readline = require("readline-sync");

const userName = readline.question('Qual seu nome? ');
const userPeso = readline.question('Qual seu peso? ');
const userAltura = readline.question('Qual sua altura? ');

const userImc = imc(userPeso, userAltura)


const resultado = `${userName} seu IMC é: ${userImc}
${status(userImc)}`


console.log(resultado);
