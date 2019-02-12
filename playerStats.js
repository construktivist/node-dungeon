var print = require('./printer.js');
var dice = require('./rolls.js')

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
      console.log(player.weapons[i]);
      switch (player.weapons[i]) {
        case "Staff":
        case "Sword":
            player['weaponDamage_' + i] = () => {dice.roll.d8()};
          break;
        case "Dagger":
          player['weaponDamage_' + i] = () => {dice.roll.d8()};
          break;
        case "Bow":
        case "Mace":
          player['weaponDamage_' + i] = () => {dice.roll.d8()};
        break;
        case "Shield":
          player.shield = 2;
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
