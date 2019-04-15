const fs = require(`fs`);
const inquirer = require(`inquirer`);
const print = require(`./helpers/printer.js`);
const player = require('./character/createCharacter.js');

var x = JSON.parse(fs.readFileSync('./data/character.js'));
console.log(x);

function Room(intro, question, prompts, resolve){
  this.intro = intro;
  this.question = question;
  this.prompts = prompts;
  this.resolve = resolve;
  this.character = player.character.load();

  this.runRoom = () => {

    // console.log(JSON.parse(fs.readFileSync('./data/character.js')));
    // console.log(this.character);
    // this.character.save(`tavern`, 1);
    // console.log(this.character.gameStatus);

    print.text.narration(this.intro);
    inquirer.prompt(
      [
        {
          type: `list`,
          name: `decision`,
          message: this.question,
          choices: prompts
        },
      ]
    ).then(answers => {
        this.resolve(answers.decision);
      }
    );
  };

}

module.exports = Room;
