let quantidadeVendida = 1000
let custo = 10 * quantidadeVendida;
let valorVenda = 20 * quantidadeVendida;
let imposto = custo * 0.2;
let custoTotal = custo + imposto;
let lucro = valorVenda - custoTotal;

console.log(lucro + "$")
