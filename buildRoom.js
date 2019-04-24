const fs = require(`fs`);
const inquirer = require(`inquirer`);
const print = require(`./helpers/printer.js`);
const player = require('./character/createCharacter.js');

function Room(intro, question, prompts, campaign, room, resolve){
  this.intro = intro;
  this.question = question;
  this.prompts = prompts;
  this.campaign = campaign;
  this.room = room;
  this.resolve = resolve;
  this.character = player.character.load();

  this.runRoom = () => {

    this.character.save(this.character, this.campaign, this.room);
    console.log(this.character.gameStatus);


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
