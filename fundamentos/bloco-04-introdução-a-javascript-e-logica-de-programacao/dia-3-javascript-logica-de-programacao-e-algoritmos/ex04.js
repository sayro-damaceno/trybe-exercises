let n = 5;

for (let i = 1; i <= n; i += 2) {
  let string = "";

  for (let j = 5; j > i; j -= 2) {
    string += " "
  }
  for (let k = 0; k < i; k += 1) {
    string += "*";
  }
  console.log(string);
}