var inquirer = require('inquirer');
var Room = require('../buildRoom.js');
var resolve = require('./roomResolutions.js');

exports.launch = {

  adventureOneRoomOne: () => {

    var roomOne = new Room(
      "You wake up in the dark basement of a tavern. There is a rat sniffing some trash in the corner. You see an open door to the west and a chest next on a table against the wall.",
      "What do you do next?",
      ["Go through the open door.",
      "Fight the rat.",
      "Check the chest."],
      resolve.room.adventureOneRoomOne);

      roomOne.runRoom();

  },

  adventureOneRoomTwo: () => {

    var roomTwo = new Room(
      "You walk into a empty room. There is a open door to the north and another door to the south.",
      "What door do you go through?",
      ["Northern Door",
      "Southern Door"]
      );

      roomTwo.runRoom();

  },



};

var tavern = require('./tavern.js');

tavern.launch.adventureOneRoomOne();
