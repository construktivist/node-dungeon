var dice = require('../rolls.js');

function Enemy(enemy){
  switch (enemy) {
    case "rat":
      this.enemyName = enemy;
      this.healthPoints = dice.roll.d4();
      this.armorClass = dice.roll.d6();
      this.attackRoll = () => {dice.roll.d20()};
      this.damageRoll = () => {dice.roll.d4()};
      break;
    case "spider":
      this.enemyName = enemy;
      this.healthPoints = dice.roll.d4();
      this.armorClass = dice.roll.d6();
      this.attackRoll = () => {dice.roll.d20()};
      this.damageRoll = () => {dice.roll.d6()};
      break;
    default:
      console.log("Something went wrong here.");
  }
}

module.exports = Enemy;
