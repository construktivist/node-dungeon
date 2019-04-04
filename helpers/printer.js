const chalkPipe = require('chalk-pipe');



exports.text = {

  border: (string) => {
    console.log(
      chalkPipe('green.bold')(
      "========================== \n" +
      string + "\n" +
      "========================== \n"
      )
    );
  },

  header: (string) => {
    console.log(
      "=====" + string + "===== \n"
    );
  },

  normal: (string) => {
    console.log(string);
  },

  narration: (string) => {
    console.log(chalkPipe('yellow')(string));
  },

  playerStats: (player) => {
    console.log(
      chalkPipe('green.bold')(
      "--------------------------- \n" +
      "Character Name: " + player.name + "\n" +
      "Race: " + player.race + "\n" +
      "Hit Points: " + player.hitPoints + "\n" +
      "Armor Class: " + player.armorPoints + "\n" +
      "Warrior Bonus: " + player.warrior.bonus + "\n" +
      "Rogue Bonus: " + player.rogue.bonus + "\n" +
      "Magic Bonus: " + player.magic.bonus + "\n" +
      "Divine Bonus: " + player.divine.bonus + "\n" +
      "Inventory: " +
        player.weapons[0] + " " +
        player.weapons[1] + " " +
        player.armor + " " +
        player.trinket + "\n"));
  },

  enemyStats: (enemy) => {
    console.log(
      chalkPipe('red.bold')(
      "--------------------------- \n" +
      "Enemy Name: " + enemy.name + "\n" +
      "Hit Points: " + enemy.healthPoints + "\n" +
      "Armor Class: " + enemy.armorPoints + "\n"));
  }

}
