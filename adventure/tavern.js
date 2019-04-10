const inquirer = require(`inquirer`);
const Room = require(`../buildRoom.js`);
const resolve = require(`./roomResolutions.js`);
const chalkPipe = require(`chalk-pipe`);
const player = require('../character/createCharacter.js');

exports.launch = {

  adventureOneRoomOne: () => {

    const character = player.character.load();
    character.save(`tavern`, 1);

    const roomOne = new Room(
      chalkPipe('yellow')("You wake up in the dark basement of a tavern. There is a rat sniffing some trash in the corner. You see an open door to the west and a chest next on a table against the wall."),
      chalkPipe('bgGreen.yellow')("What do you do next?"),
      ["Go through the open door.",
      "Fight the rat.",
      "Check the chest."],
      resolve.room.adventureOneRoomOne);

      roomOne.runRoom();

  },

  adventureOneRoomTwo: () => {

    const roomTwo = new Room(
      chalkPipe('yellow')("You walk into a empty room. There is a open door to the north and another door to the south."),
      chalkPipe('bgGreen.yellow')("What door do you go through?"),
      ["Northern Door",
      "Southern Door"]
      );

      roomTwo.runRoom();

  },



};

// const tavern = require('./tavern.js');
//
// tavern.launch.adventureOneRoomOne();
