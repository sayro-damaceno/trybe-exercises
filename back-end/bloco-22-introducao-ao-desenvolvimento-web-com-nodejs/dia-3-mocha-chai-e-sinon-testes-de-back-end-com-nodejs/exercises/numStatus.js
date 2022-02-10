function numStatus(num) {
  if (typeof(num) !==  'number'){
    return 'O valor deve ser um número'
  }
  if (num < 0) return 'negativo';
  if (num === 0) return 'neutro'; 
  return 'positivo'; 
}

module.exports = numStatus;
