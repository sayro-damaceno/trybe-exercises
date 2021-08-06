function verifWord(word, ending) {
  for (let i = 0; i < ending.length - 1; i += 1) {
    return word[word.length - 1 - i] === ending[ending.length - 1 - i] 
  }
}
console.log(verifWord('trybe', 'be'))
console.log(verifWord('joaofernando', 'fernan'))