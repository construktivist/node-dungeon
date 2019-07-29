const print = require('../helpers/printer.js');
const tavern = require(`./tavern.js`);
const Battle = require(`../combat/battle.js`);
const continueAdventure = require(`../campaign/campaignSelect.js`);

exports.room = {

  adventureOneRoomOne: (answer, campaign, nextRoom) => {
    switch (answer) {
      case `Go through the open door.`:
        print.text.narration(`You move through the open doorway.`);
        continueAdventure.select.launch(campaign, nextRoom);
        break;
      case `Fight the rat.`:
        print.text.narration(`You fight the rat.`);
        battle = new Battle(`cheater`);
        battle.run();
        break;
      case `Check the chest.`:
        print.text.narration(`You open the chest.`);
        break;
      case `Exit Game.` :
        print.text.narration(`Farewell adventurer!`);
      default:
        print.text.narration(`Something went wrong!`);
    }
  },

  adventureOneRoomTwo: (answer) => {
    switch (answer) {
      case `Northern Door`:
        print.text.narration(`You move through the open doorway to the North.`);
        break;
      case `Southern Door`:
        print.text.narration(`You find that the door is locked. Only one way to go.`);
        break;
      case `Exit Game.` :
        print.text.narration(`Farewell adventurer!`);
      default:
        print.text.narration(`Something went wrong!`);
    }
  }
};
