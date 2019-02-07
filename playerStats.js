var print = require('./printer.js');

exports.stats = {
  static: function(player){
    switch (player.race) {
      case 'elf':
          return player.hitpoints = 12;
        break;
      case 'human':
          return player.hitpoints = 15;
        break;
        case 'dwarf':
          return player.hitpoints = 18;
          break;
      default:
        print.text.normal("Oops. Something went wrong :/")
    }
  },

  weapons: function(player){

    for (var i = 0; i < player.weapons.length; i++) {
      switch (player.weapons[i]) {
        case "Sword":
            //attack roll
            //damage roll
          break;
        case "Dagger":
          //attack roll
          //damage roll
          break;
        case "Mace":
          //attack roll
          //damage roll
        break;
        case "Bow":
          //attack roll
          //damage roll
        break;
        case "Staff":
          //attack roll
          //damage roll
        break;
        case "Shield":
          //attack roll
          //damage roll
        break;
        default:
          print.text.normal("Oops. Something went wrong :/");
      }
    }
  },

  armor: function(player){

      switch (player.armor) {
        case "Knights Plate":
            //Set AC stat
          break;
        case "Thiefs Vest":
          //Set AC stat
          break;
        case "Warlocks Robes":
          //Set AC stat
        break;
        case "Clerics Chainmail":
          //Set AC stat
        break;
        default:
          print.text.normal("Oops. Something went wrong :/");
    }
  },

  trinket: function(player){

      switch (player.armor) {
        case 'Necklace of the Ogre':
            //Set relevant stat
          break;
        case 'Ring of the Vampire':
          //Set relevant stat
          break;
        case 'Pendant of the Necromancer':
          //Set relevant stat
        break;
        default:
          print.text.normal("Oops. Something went wrong :/");
    }
  }

}
