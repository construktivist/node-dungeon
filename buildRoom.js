const fs = require(`fs`);
const inquirer = require(`inquirer`);
const print = require(`./helpers/printer.js`);
const player = require('./character/createCharacter.js');

// const resolve = require(`./adventure/roomResolutions.js`);
// const chalkPipe = require(`chalk-pipe`);
// const Room = require(`../buildRoom.js`);

// const roomOne = new Room(
//   chalkPipe('yellow')("You wake up in the dark basement of a tavern. There is a rat sniffing some trash in the corner. You see an open door to the west and a chest next on a table against the wall."),
//   chalkPipe('bgGreen.yellow')("What do you do next?"),
//   ["Go through the open door.",
//   "Fight the rat.",
//   "Check the chest."],
//   resolve.room.adventureOneRoomOne);
//
//   roomOne.runRoom();
//
function Room(intro, question, prompts, resolve){
  this.intro = intro;
  this.question = question;
  this.prompts = prompts;
  this.resolve = resolve;
  this.character = player.character.load();

  this.runRoom = () => {

    // console.log(JSON.parse(fs.readFileSync('./data/character.js')));
    console.log(this.character);
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
