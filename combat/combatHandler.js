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
        break;
      default:
            console.log("Something is wrong");

    }
  }
}
