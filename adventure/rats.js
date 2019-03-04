var inquirer = require('inquirer');
var Room = require('../buildRoom.js');

exports.launch = {

  adventureOne: () => {
    var RoomOne = new Room(
      "You step into a room and there is a rat.",
      "What do you do next?",
      ["move", "fight", "flee"],
      "movement",
      "rat"
    );

    RoomOne.runRoom();

  },

}

// var rat = require('./rats.js');
//
// rat.launch.adventureOne();
