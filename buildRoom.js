const fs = require(`fs`);
const inquirer = require(`inquirer`);
const print = require(`./helpers/printer.js`);
const player = require('./character/createCharacter.js');

function Room(intro, question, prompts, resolve){
  this.intro = intro;
  this.question = question;
  this.prompts = prompts;
  this.resolve = resolve;
  this.character = player.character.load();

  this.runRoom = () => {

    console.log(this.character);
    this.character.save(this.character, `tavern`, 1);
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
