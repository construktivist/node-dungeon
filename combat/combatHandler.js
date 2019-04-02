var dice = require('../rolls.js');

exports.actions = {
  handle: function(answer, character, enemy){
    console.log(answer);
    console.log(character);
    console.log(enemy.name);

    switch (answer) {
      case 'sword':
      case 'dagger':
      case 'bow':
      case 'staff':
      case 'mace':
            var attack = character.attackRoll();
            this.attack(attack, answer, character, enemy);

        break;
      case "power attack":
            var attack = (character.attackRoll() - 2) + character.warrior.bonus;
            console.log(`You swing with your mighty ` + answer);
            console.log(`You rolled a ` + attack);

            attack >= enemy.armorPoints ?
              this.powerAttackHit(answer, character, enemy) : console.log(`You missed!`);
        break;
      case "shield wall":
            character.warrior.shieldWallBuffAmount += (2 + character.warrior.bonus);
            console.log(`Shield Wall buff applied! Your Armor Class is now ` + (character.armorPoints + character.warrior.shieldWallBuffAmount));
        break;
      case "hide":
              //resolve hide roll
        break;
      case "shadow strike":
              var attack = character.attackRoll() + character.rogue.bonus;
              this.attack(attack, answer, character, enemy);

        break;
      case "magic missle":
              var attack = character.attackRoll() + character.magic.bonus;
              this.attack(attack, answer, character, enemy);

        break;
      case "lightning bolt":
              var attack = character.attackRoll() + character.magic.bonus;
              this.attack(attack, answer, character, enemy);
        break;
      case "heal":
              //resolve heal roll
        break;
      case "bless":
              //resolve bless roll
        break;

      default:
            console.log("Something is wrong");

    }
  },

  attack: function(attack, answer, character, enemy){
    console.log(`You attack with your ` + answer);
    console.log(`You rolled a ` + attack);
    attack >= enemy.armorPoints ?
      this.hit(answer, character, enemy) : console.log(`You missed!`);
  },

  hit: function(answer, character, enemy) {
    console.log(`You hit the ` + enemy.name + `!`);
    character.weapons[0] === answer ?
    console.log(`You dealt ` + character.weaponDamage_0() + ` damage!`) :
    console.log(`You dealt ` + character.weaponDamage_1() + ` damage!`)
  },

  powerAttackHit: function(answer, character, enemy) {
    console.log(`Your power attack hit the ` + enemy.name + `!`);
    character.weapons[0] === answer ?
    console.log(`You dealt ` + (character.weaponDamage_0() + 2) + ` damage!`) :
    console.log(`You dealt ` + (character.weaponDamage_1() + 2) + ` damage!`)
  }

};
