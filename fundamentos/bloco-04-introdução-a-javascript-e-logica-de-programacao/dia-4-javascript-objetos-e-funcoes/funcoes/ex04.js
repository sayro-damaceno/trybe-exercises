
function biggestName(array) {
  let biggestName = '0';
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].length > biggestName.length) {
      biggestName = array[i]; 
    }
  }
  return biggestName;
}

console.log(biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))