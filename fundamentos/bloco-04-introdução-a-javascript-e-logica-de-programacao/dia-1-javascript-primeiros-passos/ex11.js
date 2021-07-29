let salario = 5000;
let inss = 0;
let ir = 0;

if (salario <= 1556.94) {
  inss = (salario * 0.08);
}
else if (salario >= 1556.95 && salario <= 2594.92) {
  inss = (salario * 0.09);
}
else if (salario >= 2594.93 && salario <= 5189.82) {
  inss = (salario * 0.11);
}
else {
  inss = 570.88;
}

let salarioBase = salario - inss;

if (salarioBase <= 1903.98) {
  ir = 0;
}
else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
  ir = ((salarioBase * 0.075) - 142.80);
}
else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
  ir = ((salarioBase * 0.15) - 354.80);
}
else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
  ir = ((salarioBase * 0.225) - 636.13);
}
else {
  ir = ((salarioBase * 0.275) - 869.36)
}

salarioLiquido = salarioBase - ir;

console.log(salarioLiquido + "$")
