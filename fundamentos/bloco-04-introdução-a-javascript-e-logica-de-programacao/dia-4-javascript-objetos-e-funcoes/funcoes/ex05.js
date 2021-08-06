function numberRepet(array) {
  let cont2 = 0;
  let num = 0;
  for (let i = 0; i < array.length; i += 1) {
    let cont = 0;
    for (let j = 0; j < array.length; j += 1) {
      if (array[i] === array[j]) {
        cont += 1;
      }
    }
    if (cont > cont2) {
      cont2 = cont;
      num = array[i];
    }
  }
  return num;
}
console.log(numberRepet([1, 4, 8, 5, 8, 2, 3]))