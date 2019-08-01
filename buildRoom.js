// The following module is a constructor that builds and displays rooms.
const fs = require(`fs`);
const inquirer = require(`inquirer`);
const print = require(`./helpers/printer.js`);
const player = require('./character/createCharacter.js');

//The Room constructor passes all parameters required to build and print a room to the CLI
function Room(intro, question, prompts, campaign, room, resolve){
  this.intro = intro;
  this.question = question;
  this.prompts = prompts;
  this.campaign = campaign;
  this.room = room;
  this.nextRoom = room + 1;
  this.resolve = resolve;
  this.character = player.character.load();

  //This is the functions that is called to run the room.
  this.runRoom = () => {

    //This part saves the campaign and room to the character so the player can resume from the point they left off.
    console.log(this.character.gold);
    this.character.save(this.character, this.campaign, this.room, false);
    console.log(this.character.gold);

    //Intro description and inquirer function that displays room description and room options
    print.text.narration(this.intro);
    inquirer.prompt(
      [
        {
          type: `list`,
          name: `decision`,
          message: this.question,
          choices: this.prompts
        },
      ]
    ).then(answers => {
        this.resolve(answers.decision, this.campaign, this.nextRoom);
      }
    );
  };

}

module.exports = Room;
