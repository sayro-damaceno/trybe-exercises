const testGrade = (template, answers, callback) => {
  return callback(template, answers);
};

const checkArray = (arr1, arr2) => {
  let note = 0;
  for (let index = 0; index < arr1.length; index += 1) {
    if (arr1[index] === arr2[index]) {
      note += 1;
    }
    if (arr1[index] !== arr2[index] && arr2[index] !== 'N.A') {
      note -= 0.5;
    }
  }
  return note;
};

console.log(testGrade(['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'], ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'], checkArray));
