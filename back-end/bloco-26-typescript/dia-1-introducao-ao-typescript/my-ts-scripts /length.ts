const units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];

function convert(value: number, unitBase: string, unitToConvert: string) {
  const forIndex = units.indexOf(unitBase);
    const toIndex = units.indexOf(unitToConvert);
    const exponent = (toIndex - forIndex);

    return value * Math.pow(10, exponent);
}
