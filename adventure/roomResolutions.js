var tavern = require('./tavern.js');
var Battle = require('../combat/battle.js');

exports.room = {
  adventureOneRoomOne: (answer) => {
    switch (answer) {
      case "Go through the open door.":
        console.log("You move through the open doorway.");
        tavern.launch.adventureOneRoomTwo();
        break;
      case "Fight the rat.":
        console.log("You fight the rat.");
        battle = new Battle("rat");
        battle.run();
        break;
      case "Check the chest.":
        console.log("You open the chest.");
        break;
      default:
        console.log("Something went wrong!");
    }
  },

  adventureOneRoomTwo: (answer) => {
    switch (answer) {
      case "Northern Door":
        console.log("You move through the open doorway to the North.");
        break;
      case "Southern Door":
        console.log("You find that the door is locked. Only one way to go.");
        break;
      default:
        console.log("Something went wrong!");
    }
  }
};