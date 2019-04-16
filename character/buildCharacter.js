const fs = require(`fs`);
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
    shieldWallBuffAmount: 0,
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
    blessBuff: false,
  };

  // this.gameStatus = [];

  this.attackRoll = () => { return dice.roll.d20()};

  // this.save = (campaign, room) => {
  //   this.gameStatus.campaign = campaign
  //   this.gameStatus.room = room
  //   fs.writeFile(`./data/character.js`, JSON.stringify(character));
  //   console.log("Character Saved!");
  // };
}

module.exports = Character;
