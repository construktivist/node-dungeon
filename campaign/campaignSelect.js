var rats = require('../adventure/rats.js');

exports.launch = {
  rats: (int) => {
    switch (int) {
      case 1:
        rats.launch.actOne();
        break;
      case 2:
        rats.launch.actTwo();
        break;
      case 3:
        rats.launch.actThree();
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
