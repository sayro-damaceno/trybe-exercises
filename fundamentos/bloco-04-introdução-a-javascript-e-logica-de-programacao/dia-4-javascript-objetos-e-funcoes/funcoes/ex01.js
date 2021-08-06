function reverseString(string) {
  return string.split('').reverse().join('');
}

function polidrome(string) {
  return string === reverseString(string)
}

console.log(polidrome('arara'))