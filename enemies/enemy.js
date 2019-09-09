var dice = require('../rolls.js');


function Enemy(enemy){
  switch (enemy) {
    case "rat":
      this.name = enemy;
      this.healthPoints = 20;
      this.armorPoints = dice.roll.d6();
      this.attackRoll = () => 20;
      this.damageRoll = () => 10;
      break;
    case "spider":
      this.name = enemy;
      this.healthPoints = dice.roll.d4();
      this.armorPoints = dice.roll.d6();
      this.attackRoll = () => {return dice.roll.d20()};
      this.damageRoll = () => {return dice.roll.d6()};
      break;
    case "ogre":
      this.name = enemy;
      this.healthPoints = dice.roll.d10();
      this.armorPoints = dice.roll.d8();
      this.attackRoll = () => {return dice.roll.d20()};
      this.damageRoll = () => {return dice.roll.d10()};
      break;
    case "cheater":
      this.name = enemy;
      this.healthPoints = 5;
      this.armorPoints = 10;
      this.attackRoll = () => {return 4};
      this.damageRoll = () => {return 1};
      break;
    default:
      console.log("Something went wrong here.");

    }
}

module.exports = Enemy;
