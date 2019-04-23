const fs = require(`fs`);
const dice = require(`../rolls.js`);


function Character(name, race, weapons, armor, trinket, gameStatus){
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

  this.gameStatus = gameStatus;

  this.attackRoll = () => { return dice.roll.d20()};

  this.save = (character, campaign, room) => {
    this.gameStatus[0] = campaign;
    this.gameStatus[1] = room;
    fs.writeFile(`./data/character.js`, JSON.stringify(character), (err) => {
      if (err) throw err;
      console.log("Character Saved!");
    });
  };
}

module.exports = Character;
