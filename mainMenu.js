//Main menu that is displayed on app start
const inquirer = require(`inquirer`);
const print = require(`./helpers/printer.js`);
const player = require(`./character/createCharacter.js`);
const campaign = require(`./campaign/campaignSelect.js`);
const chalkPipe = require(`chalk-pipe`);

//List inquirer questions for main menu options (New Game, Load Game, Exit Game)
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

  //Inquire prompt that handles the inquirer questions
  inquire: function () {
    inquirer.prompt(this.questions).then(answers => {
      switch (answers.start){
        //Creates a New Game
        case `new game`:
          player.character.new();
          break;
        //Loads a Save File
        case `load game`:
          const character = player.character.load();
          console.log(character);
          character.gameStatus.length > 0 ? campaign.select.launch(character.gameStatus[0], character.gameStatus[1]) : console.log(`Error: No save data available.`);
          break;
        //Exits the application
        case `exit`:
          print.text.normal(`Farewell adventurer!`);
          break;
        default:
          print.text.normal(`Oops. Something went wrong :/`);
      };
    });
  },
}
