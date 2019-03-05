var inquirer = require('inquirer');
var Room = require('../buildRoom.js');

// var log = function(string){
//   console.log(string);
// }

exports.launch = {

  adventureOne: () => {
    var resolveRoomOne = function(answer){
      console.log(answer);
      switch (answer) {
        case "move":
          console.log("You move to the other room.");
          break;
        case "fight":
          console.log("You fight the rat.");
          break;
        case "flee":
          console.log("You have fled.");
          break;
        default:
          console.log("Something went wrong!");

      }
    }

    var roomOne = new Room(
      "You step into a room and there is a rat.",
      "What do you do next?",
      ["move", "fight", "flee"],
      resolveRoomOne
    )

    roomOne.runRoom();
  },

}

var rat = require('./rats.js');

rat.launch.adventureOne();
