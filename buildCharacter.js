var dice = require('./rolls.js');

function Character(name, race, weapons, armor, trinket){
  this.name = name;
  this.race = race;
  this.weapons = weapons;
  this.armor = armor;
  this.trinket = trinket;

  this.attackRoll = () => {dice.roll.d20()};
}

module.exports = Character;
