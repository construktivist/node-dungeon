const inquirer = require(`inquirer`);
const print = require(`./helpers/printer.js`);
const player = require(`./character/createCharacter.js`);
const chalkPipe = require(`chalk-pipe`);

exports.main = {
  questions: [
    {
      type: `list`,
      name: `start`,
      message: chalkPipe('bgGreen.yellow')(`Lets begin!`),
      choices: [`New Game`, `Load Game`, `Exit`],
      filter: function(val) {
        return val.toLowerCase();
      }
    }
  ],

  inquire: function () {
    inquirer.prompt(this.questions).then(answers => {
      switch (answers.start){
        case `new game`:
          player.character.new();
          break;
        case `load game`:
          const character = player.character.load();
          console.log(character);
          character.gameStatus.length > 0 ? console.log(character.gameStatus) : console.log(`Error: No save data available.`);
          break;
        case `exit`:
          print.text.normal(`Farewell adventurer!`);
          break;
        default:
          print.text.normal(`Oops. Something went wrong :/`);
      };
    });
  },
}
