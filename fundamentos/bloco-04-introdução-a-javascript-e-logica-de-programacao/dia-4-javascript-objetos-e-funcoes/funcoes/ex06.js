function sum(number) {
  let cont = 0
  for (let i = 0; i <= number; i += 1) {
    cont = cont + i
  }
  return cont;
}
console.log(sum(5))