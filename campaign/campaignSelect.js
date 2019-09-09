const print = require('../helpers/printer.js')
const tavern = require('../adventure/tavern.js');

exports.select = {
  launch: (campaign, room) => {
    if (campaign === 'tavern'){
        switch (room) {
          case 1:
            tavern.launch.adventureOneRoomOne();
            break;
          case 2:
            tavern.launch.adventureOneRoomTwo();
            break;
          case 3:
            tavern.launch.adventureOneRoomThree();
            break;
          case 4:
            print.text.narration('You put the abandoned tavern behind you and continue on the road to your next adventure.')
            break;
          default:
            print.text.error(`Oops. Something went wrong :/`);
        }
      }
     else if (campaign === 'goblins') {
        console.log(`Goblins`);
      }
    else {
        console.log(`Undead`);
    };

  }

};
