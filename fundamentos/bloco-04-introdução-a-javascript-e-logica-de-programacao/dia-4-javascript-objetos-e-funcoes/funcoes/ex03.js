function smallerNumber(array) {
  let smallerNumber = array[0];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] < smallerNumber) {
      smallerNumber = array[i]
    }
  }
  return smallerNumber;
}

function smallerNumberIndex(array) {
  return array.indexOf(smallerNumber(array))
}
console.log(smallerNumberIndex([2, 4, 6, 7, 10, 0, -3]))
