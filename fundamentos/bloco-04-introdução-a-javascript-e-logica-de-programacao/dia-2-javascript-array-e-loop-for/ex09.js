let numbers = [];

for (let i = 1; i < 26; i += 1) {
  numbers.push(i)
}

for (let i = 0; i < numbers.length; i += 1) {
  let divisao = numbers[i] / 2;
  console.log(divisao)
}