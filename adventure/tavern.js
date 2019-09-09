const inquirer = require(`inquirer`);
const Room = require(`../buildRoom.js`);
const resolve = require(`./roomResolutions.js`);
const chalkPipe = require(`chalk-pipe`);

exports.launch = {

  adventureOneRoomOne: () => {

    const roomOne = new Room(
      chalkPipe('yellow')("You wake up in the dark basement of a tavern. There is a rat sniffing some trash in the corner. You see an open door to the west and a chest next on a table against the wall."),
      chalkPipe('gray')("What do you do next?"),
      ["Go through the open door",
      "Fight the rat",
      "Check the chest",
      "Exit Game"],
      'tavern',
      1,
      resolve.room.adventureOneRoomOne);

      roomOne.runRoom();

  },

  adventureOneRoomTwo: () => {

    const roomTwo = new Room(
      chalkPipe('yellow')("You walk into a empty room. There is a open door to the north and another door to the south."),
      chalkPipe('gray')("What door do you go through?"),
      ["Northern Door",
      "Southern Door",
      "Exit Game"],
      'tavern',
      2,
      resolve.room.adventureOneRoomTwo);

      roomTwo.runRoom();

  },

  adventureOneRoomThree: () => {

    const roomThree = new Room(
      chalkPipe('yellow')("You open the Northern door and walk up a flight of steps that takes you to the tavern's main floor. There is an ogre sleeping in the center of the room and a closed chest next to him. Past the ogre is a door that leads out of the cavern."),
      chalkPipe('gray')("What will you do?"),
      ["Check the chest",
      "Fight the ogre",
      "Leave the tavern",
      "Exit Game"],
      'tavern',
      3,
      resolve.room.adventureOneRoomThree);
      
      roomThree.runRoom();
  }



};
