var dice = require('../rolls.js');

exports.actions = {
  handle: (answer, enemy) => {
    console.log(answer);
    console.log(enemy);
    switch (answer) {
      case "sword" || "staff":
            let attack = dice.roll.d20();
            console.log(`You attack with your ` + answer);
            console.log(`You rolled a ` + attack);
            attack >= enemy.armorPoints ?
            console.log("You hit the " + enemy.name) :
            console.log("You missed!");
        break;
      case "power attack":
            //resolve power attack roll
        break;
      case "shield wall":
              //resolve shield wall roll
        break;
      case "hide":
              //resolve hide roll
        break;
      case "shadow strike":
              //resolve shadow strike roll
        break;
      case "magic missle":
              //resolve magic missle roll
        break;
      case "lightning bolt":
              //resolve lightning bolt roll
        break;
      case "heal":
              //resolve heal roll
        break;
      case "bless":
              //resolve bless roll
        break;

      default:
            console.log("Something is wrong");

    }
  }
}