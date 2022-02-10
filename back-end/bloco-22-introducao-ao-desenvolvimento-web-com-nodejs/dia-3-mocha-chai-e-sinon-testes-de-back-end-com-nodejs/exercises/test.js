const { expect } = require("chai");
const numStatus = require("./numStatus");

describe('EX-01 - Testando a condição de um número', () => {
  it('Quando o número for maior que 0 retornar positivo', () => {
    const number = numStatus(1);
    expect(number).to.be.equal('positivo')
  });
  it('Quando o número for menor que 0 retornar negativo', () => {
    const number = numStatus(-1);
    expect(number).to.be.equal('negativo')
  });
  it('Quando o número for igaul a 0 retornar neutro', () => {
    const number = numStatus(0);
    expect(number).to.be.equal('neutro')
  });
  it('Testando caso não seja passado um numero', () => {
    const number = numStatus('string');
    expect(number).to.be.equal('O valor deve ser um número')
  });
});
