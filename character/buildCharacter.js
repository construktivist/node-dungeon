const dice = require(`../rolls.js`);

function Character(name, race, weapons, armor, trinket){
  this.name = name;
  this.race = race;
  this.weapons = weapons;
  this.armor = armor;
  this.trinket = trinket;
  this.warrior = {
    abilities: [`Power Attack`, `Shield Wall`],
    bonus: 0,
  };
  this.rogue = {
    abilities: [`Hide`, `Shadow Strike`],
    bonus: 0,
  };
  this.magic = {
    abilities: [`Magic Missle`, `Lightning Bolt`],
    bonus: 0,
  };
  this.divine = {
    abilities: [`Heal`, `Bless`],
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
