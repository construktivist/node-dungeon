var rats = require('../adventure/rats.js');

exports.launch = {
  rats: (int) => {
    switch (int) {
      case 1:
        rats.launch.adventureOne();
        break;
      case 2:
        rats.launch.adventureTwo();
        break;
      case 3:
        rats.launch.adventureThree();
        break;
      default:
        print.text.normal("Oops. Something went wrong :/");
    }
  },

  goblins: (int) => {
    console.log("Goblins");
  },

  undead: (int) => {
    console.log("Undead");
  }
};
