var inquirer = require('inquirer');
var Room = require('../buildRoom.js');



exports.launch = {

  actOne: () => {
    var ratRoomOne = new Room(
      "You step into a room and there is a rat.",
      "What do you do next?",
      ["move", "fight", "flee"],
      [1, 2, 3]
    );

    ratRoomOne.runRoom();

  }

}
