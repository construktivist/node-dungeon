var inquirer = require('inquirer');
var print = require('./printer.js');
var player = require('./createCharacter.js')

exports.main = {
  questions: [
    {
      type: 'list',
      name: 'start',
      message: 'Lets begin!',
      choices: ['New Game', 'Load Game', 'Exit'],
      filter: function(val) {
        return val.toLowerCase();
      }
    }
  ],

  inquire: function () {
    inquirer.prompt(this.questions).then(answers => {
      switch (answers.start){
        case 'new game':
          player.character.new();
          break;
        case 'load game':

          break;
        case 'exit':
          print.text.normal("Farewell adventurer!");
          break;
        default:
          print.text.normal("Oops. Something went wrong :/");
      };
    });
  }
}
