const print = require(`../helpers/printer.js`);
const dice = require(`../rolls.js`);

exports.stats = {
  static: function(player){
    switch (player.race) {
      case `elf`:
          player.hitPoints = 12;
          player.hitPointsTotal = 12;
        break;
      case `human`:
          player.hitPoints = 15;
          player.hitPointsTotal = 15;
        break;
        case `dwarf`:
          player.hitPoints = 18;
          player.hitPointsTotal = 18;
          break;
      default:
        print.text.error(`Oops. Something went wrong :/ - race`)
    }
  },

  weapons: function(player){

    for (var i = 0; i < player.weapons.length; i++) {
      switch (player.weapons[i]) {
        case `Staff`:
        case `Sword`:
            player[`weaponDamage_` + i] = () => {return dice.roll.d6()};
          break;
        case "Dagger":
          player[`weaponDamage_` + i] = () => {return dice.roll.d4()};
          break;
        case `Bow`:
        case `Mace`:
          player[`weaponDamage_` + i] = () => {return dice.roll.d8()};
        break;
        case `Shield`:
          player.shield = 2;
        break;
        default:
          print.text.error(`Oops. Something went wrong :/ - weapon`);
      }
    }
  },

  armor: function(player){
      switch (player.armor) {
        case `knights plate`:
            player.armorPoints = 10
            player.warrior.bonus += 2
          break;
        case `thiefs vest`:
            player.armorPoints = 6
             player.rogue.bonus += 2
          break;
        case `warlocks robes`:
            player.armorPoints = 2
            player.magic.bonus += 2
        break;
        case `clerics chainmail`:
            player.armorPoints = 8
            player.divine.bonus += 2
        break;
        default:
          print.text.error(`Oops. Something went wrong :/ - armor`);
    }
  },

  trinkets: function(player){

      switch (player.trinket) {
        case `necklace of the paladin`:
            player.warrior.bonus += 1
            player.divine.bonus += 1
          break;
        case `ring of the assassin`:
            player.rogue.bonus += 1
            player.magic.bonus += 1
          break;
        case `pendant of the shaman`:
            player.divine.bonus += 1
            player.magic.bonus += 1
        break;
        default:
          print.text.error(`Oops. Something went wrong :/ - trinket`);
    }
  }

}
