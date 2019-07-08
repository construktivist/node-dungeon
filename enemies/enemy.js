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
    case "cheater":
      this.name = enemy;
      this.healthPoints = 50;
      this.armorPoints = 10;
      this.attackRoll = 40;
      this.damageRoll = 50;
      break;
    default:
      console.log("Something went wrong here.");

    }
}

module.exports = Enemy;
