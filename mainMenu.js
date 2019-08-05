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
      message: chalkPipe('gray')(`Lets begin!`),
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
        this.load();
          break;
        //Exits the application
        case `exit`:
          print.text.normal(`Farewell adventurer!`);
          break;
        default:
          print.text.error(`Oops. Something went wrong :/`);
      };
    });
  },

  //Function to load. This can be used globally.
  load: function () {
    const character = player.character.load();
    character.gameStatus.length > 0 ? campaign.select.launch(character.gameStatus[0], character.gameStatus[1]) : print.text.error(`Error: No save data available.`);
  }
}
