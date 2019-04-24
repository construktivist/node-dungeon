const tavern = require(`../adventure/tavern.js`);

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
          default:
            print.text.normal(`Oops. Something went wrong :/`);
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
