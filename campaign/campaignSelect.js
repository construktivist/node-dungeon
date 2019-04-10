const tavern = require(`../adventure/tavern.js`);

exports.launch = {
  tavern: (int) => {
    switch (int) {
      case 1:
        tavern.launch.adventureOneRoomOne();
        break;
      case 2:
        tavern.launch.adventureOneRoomTwo();
        break;
      case 3:
        tavern.launch.adventureOneRoomThree();
        break;
      default:
        print.text.normal(`Oops. Something went wrong :/`);
    }
  },

  goblins: (int) => {
    console.log(`Goblins`);
  },

  undead: (int) => {
    console.log(`Undead`);
  }
};
