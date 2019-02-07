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

  allDynamic: function(player){

    equipment = player.weapons;
    console.log(equipment);
    // equipment.push(player.armor, player.trinket);

    // for (var i = 0; i < equipment.length; i++) {
    //   console.log(equipment[i]);
    // }
  }
}
