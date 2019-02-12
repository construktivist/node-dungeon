var print = require('./printer.js');
var dice = require('./rolls.js')

exports.stats = {
  static: function(player){
    switch (player.race) {
      case 'elf':
          player.hitpoints = 12;
        break;
      case 'human':
          player.hitpoints = 15;
        break;
        case 'dwarf':
            player.hitpoints = 18;
          break;
      default:
        print.text.normal("Oops. Something went wrong :/")
    }
  },

  weapons: function(player){

    for (var i = 0; i < player.weapons.length; i++) {
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
        console.log(player.armor);
      switch (player.armor) {
        case "knights plate":
            return player.armorPoints = 10
            // player.warrior.bonus += 2
          break;
        case "thiefs vest":
            return player.armorPoints = 6
             // player.rogue.bonus += 2
          break;
        case "warlocks robes":
            return player.armorPoints = 2
            // player.magic.bonus += 2
        break;
        case "clerics chainmail":
            return player.armorPoints = 8
            // player.divine.bonus += 2
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
        case 'Pendant of the Arcanist':
          //Set relevant stat
        break;
        default:
          print.text.normal("Oops. Something went wrong :/");
    }
  }

}
