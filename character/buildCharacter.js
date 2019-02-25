var dice = require('../rolls.js');

function Character(name, race, weapons, armor, trinket){
  this.name = name;
  this.race = race;
  this.weapons = weapons;
  this.armor = armor;
  this.trinket = trinket;
  this.warrior = {
    abilities: ['power attack', 'shield wall'],
    bonus: 0,
  };
  this.rogue = {
    abilities: ['hide', 'shadow strike'],
    bonus: 0,
  };
  this.magic = {
    abilities: ['magic missle', 'lighting bolt'],
    bonus: 0,
  };
  this.divine = {
    abilities: ['heal', 'bless'],
    bonus: 0,
  };
  this.gameStatus = {
    campaign: 0,
    adventure: 0,
    room: 0,
  };

  this.attackRoll = () => {dice.roll.d20()};
}

module.exports = Character;
