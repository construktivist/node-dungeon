var inquirer = require('inquirer');
var Room = require('../buildRoom.js');



exports.launch = {

  actOne: () => {
    var ratRoomOne = new Room(
      "Room intro description",
      "What do you do next?",
      ["Choice A", "Choice B", "Choice C"],
      "Only case available."
    );

    ratRoomOne.runRoom();

  }
}
