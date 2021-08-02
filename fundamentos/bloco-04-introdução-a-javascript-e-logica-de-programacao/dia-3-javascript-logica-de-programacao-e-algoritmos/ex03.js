let n = 5;

for (let i = 1; i <= n; i += 1) {
  let string = "";

  for (let j = 5; j > i; j -= 1) {
    string += " "
  }
  for (let k = 0; k < i; k += 1) {
    string += "*";
  }
  console.log(string);
}