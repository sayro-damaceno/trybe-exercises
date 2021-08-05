function higherNumber(array) {
  let higherNumber = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > higherNumber) {
      higherNumber = array[i]
    }
  }
  return higherNumber;
}

function highestNumberIndex(array) {
  return array.indexOf(higherNumber(array))
}
console.log(highestNumberIndex([2, 3, 60, 7, 10, 17]))
