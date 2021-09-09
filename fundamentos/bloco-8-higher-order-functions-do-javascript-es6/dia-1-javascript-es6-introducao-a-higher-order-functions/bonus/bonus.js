const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// faz o calculo de dano
const damage = (maxDamage, minDamage) => Math.floor(Math.random() * (maxDamage - minDamage + 1) + minDamage);

// calcula o dano do dragão
const dragonDamage = () => {
  const maxDamage = dragon.strength;
  const minDamage = 15;
  return damage(maxDamage, minDamage);
};

// calcula o dano do guerreiro
const warriorDamage = () => {
  const maxDamage = warrior.strength * warrior.weaponDmg;
  const minDamage = warrior.strength;
  return damage(maxDamage, minDamage);
};

// calcula o dano do mago
const mageDamageCalc = () => {
  const maxDamage = mage.intelligence * 2;
  const minDamage = mage.intelligence;
  return damage(maxDamage, minDamage);
};



// objeto com o dano e custo de mana do mago
const mageDamage = (mage) => {
  const mageMana = mage.mana;
  const turnStats = {
    damageDealt: 'Not enough mana...',
    manaSpent: 0,
  };
  if (mage.mana > 15) {
    const mageAtack = mageDamageCalc();
    turnStats.manaSpent = 15;
    turnStats.damageDealt = mageAtack;
    return turnStats;
  }
  return turnStats;
}

console.log(mageDamageCalc())