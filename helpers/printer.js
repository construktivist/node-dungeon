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

  error: (string) => {
    console.log(
      chalkPipe('red')(
        "========================== \n" +
        string + "\n" +
        "========================== \n"
        )
    );
  },

  narration: (string) => {
    console.log(chalkPipe('yellow')(string));
  },

  playerStats: (player) => {
    console.log(
      chalkPipe('green.bold')(
      "--------------------------- \n" +
      "Character Name: " + player.name[0].toUpperCase() + player.name.slice(1) + "\n" +
      "Race: " + player.race[0].toUpperCase() + player.race.slice(1) + "\n" +
      "Hit Points: " + player.hitPoints + "\n" +
      "Armor Class: " + player.armorPoints + "\n" +
      "Warrior Bonus: " + player.warrior.bonus + "\n" +
      "Rogue Bonus: " + player.rogue.bonus + "\n" +
      "Magic Bonus: " + player.magic.bonus + "\n" +
      "Divine Bonus: " + player.divine.bonus + "\n" +
      "Gold: " + player.gold + "\n" +
      "Inventory: " +
        player.weapons[0] + ", " +
        player.weapons[1] + ", " +
        player.armor[0].toUpperCase() + player.armor.slice(1) + ", " +
        player.trinket[0].toUpperCase() + player.trinket.slice(1) + ", " + 
        player.pack + "\n"));
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
