function extractNumbers(str) {
  return str.replace(/[^0-9]/g, '').split('')
  .reduce((acc, num) => acc + parseInt(num), 0);
}

function hydrate(str) {
  const glassWater = extractNumbers(str);
  return glassWater > 1 ? `${glassWater} copos de água` : `${glassWater} copo de água`;
}

module.exports = hydrate;