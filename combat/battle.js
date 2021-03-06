const inquirer = require(`inquirer`);
const fs = require(`fs`);
const menu = require('../mainMenu');
const Enemy = require('../enemies/enemy.js');
const print = require('../helpers/printer.js');
const player = require('../character/createCharacter.js');
const dice = require('../rolls.js');
const chalkPipe = require(`chalk-pipe`);
const loot = require(`../looter/loot.js`);


// Object below runs the entire battle logic. 
function Battle(enemy){

  //Build enemy     
  this.enemy = new Enemy(enemy);
  
  //Build player's character
  this.character = player.character.load();

  //Determines whether the player or enemy logic fires
  this.playerTurn = true;

  //Prompts for battle choices
  this.questions = [
        {
          type: 'list',
          name: 'decision',
          message: chalkPipe('gray')('What do you do?'),
          choices: [
              new inquirer.Separator('=== Weapon ==='),
              this.character.weapons[0],
              this.character.weapons[1],
              new inquirer.Separator('=== Warrior Abilities ==='),
              this.character.warrior.abilities[0],
              this.character.warrior.abilities[1],
              new inquirer.Separator('=== Rogue Abilities ==='),
              this.character.rogue.abilities[0],
              this.character.rogue.abilities[1],
              new inquirer.Separator('=== Magic ==='),
              this.character.magic.abilities[0],
              this.character.magic.abilities[1],
              new inquirer.Separator('=== Divine ==='),
              this.character.divine.abilities[0],
              this.character.divine.abilities[1],
              new inquirer.Separator('=== Game Options ==='),
              'Exit',
          ],
          filter: function(val) {
            return val.toLowerCase();
          }
        }
    ];
  
    //This keeps the battle loop running until player succeeds or fails.
  this.run = (character, enemy) => {
    if (this.playerTurn === true) {
      this.playerTurn = false;
      print.text.enemyStats(this.enemy);
      inquirer.prompt(this.questions).then(answers => {
        this.handle(answers.decision, this.character, this.enemy);
      });
    } 
    else {
      this.playerTurn = true;
      this.enemyTurn(character, enemy);
    }
  };

  //Processes the players decision then determines the resolution. 
  this.handle = (answer, character, enemy) => {
    // console.log(answer);
    // console.log(character);
    // console.log(enemy.name);

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
            print.text.narration(`You use your power attack!`);
            print.text.narration(`You rolled a ` + attack);

            if (attack >= enemy.armorPoints){
              this.powerAttackHit(answer, character, enemy);
            }
            else {
              print.text.narration(`You missed!`);
              this.checkHealth(character, enemy);
            }
              
        break;

      case "shield wall":
            character.warrior.shieldWallBuffAmount += (2 + character.warrior.bonus);
            print.text.narration(`Shield Wall buff applied! Your Armor Class is now ` + (character.armorPoints + character.warrior.shieldWallBuffAmount));
            this.checkHealth(character, enemy);
        break;

      case "hide":
              const hide = character.attackRoll();
              const spot = dice.roll.d20();

              if (hide > spot) {
                character.hidden = true;
                print.text.narration(`You hide in the shadows`);
                this.checkHealth(character, enemy);
              }
              else {
                print.text.narration(`Your attempt to hide failed!`);
                this.checkHealth(character, enemy);
              }
        break;

      case "shadow strike":
              var attack = character.attackRoll() + character.rogue.bonus;
              this.attack(attack, answer, character, enemy);
              this.checkHealth(character, enemy);
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
              if (character.hitPoints >= character.hitPointsTotal){
                print.text.normal(`Your health is already full.`)
                this.checkHealth(character, enemy);
              }
              else {
                character.hitPoints += (dice.roll.d6() + character.divine.bonus)
                print.text.narration(`You have healed yourself. Your health is now ` + character.hitPoints)
                this.checkHealth(character, enemy);
              };
        break;

      case "bless":
              if(character.divine.blessBuff === false) {
                character.warrior.bonus += 1;
                character.rogue.bonus += 1;
                character.magic.bonus += 1;
                character.divine.bonus += 1;
                character.divine.blessBuff = true;
                print.text.narration(`You have received a blessing`);
                this.checkHealth(character, enemy);
              }
              else {
                print.text.normal(`You can only use Bless once per fight encounter.`);
                this.checkHealth(character, enemy);
              }
        break;

      default:
            print.text.normal("Farewell adventurer!");

    }
  };

  this.attack = function(attack, answer, character, enemy){
    print.text.narration(`You attack with your ` + answer);
    print.text.narration(`You rolled a ` + attack);
    if (attack >= enemy.armorPoints) {
      this.hit(answer, character, enemy)
    }
    else {
      print.text.narration(`You missed!`);
      this.enemyTurn(character, enemy);
    }
  };

  this.hit = function(answer, character, enemy, bonus) {
    print.text.narration(`You hit the ` + enemy.name + `!`);
    character.weapons[0] === answer 
    if (character.weapons[0] === answer ) {
      var characterDamage = character.weaponDamage_0() + bonus;
      enemy.healthPoints -= characterDamage;
      print.text.narration(`You dealt ` + characterDamage + ` damage!`)
      this.checkHealth(character, enemy)
    }
    else {
      var characterDamage = character.weaponDamage_0();
      enemy.healthPoints -= characterDamage;

      print.text.narration(`You dealt ` + characterDamage + ` damage!`)
      this.checkHealth(character, enemy)
    }
  };

  this.powerAttackHit = function(answer, character, enemy) {
    print.text.narration(`Your power attack hit the ` + enemy.name + `!`);
    var powerAttackDamage = (character.weaponDamage_0() + 2);
    enemy.healthPoints -= powerAttackDamage;
    print.text.narration(`You dealt ` + powerAttackDamage + ` damage!`);
    this.checkHealth(character, enemy);
  };

  this.enemyTurn = function(character, enemy){
    
    print.text.narration('The ' + enemy.name + ' health is ' + enemy.healthPoints);
    print.text.narration('The ' + enemy.name + ' attacks!');

    if (enemy.attackRoll() > character.armorPoints) {
      var enemyDamage = enemy.damageRoll();
      character.hitPoints -= enemyDamage;
      print.text.narration('The ' + enemy.name + ' attacks and hits you for ' + enemy.damageRoll() + ' damage!');
      this.checkHealth(character, enemy);
    }
    else {
      print.text.narration('The ' + enemy.name + ' attacks and misses you!')
      this.checkHealth(character, enemy);
    }
  };  

  this.checkHealth = function(character, enemy){

    if (character.hitPoints > 0 && enemy.healthPoints <= 0){
      this.playerWins(character, enemy);
    }
    else if (character.hitPoints <= 0 && enemy.healthPoints > 0){
      this.enemyWins(enemy);
    }
    else {
      this.run(this.character, this.enemy);
    }

  };

  this.playerWins = function(character){
    print.text.narration('Player wins!');
    loot.treasure.gold(character);
    character.save(character, character.gameStatus[0], character.gameStatus[1], true);
  };

  this.enemyWins = function(enemy){
    print.text.narration('The ' + enemy.name + ' has defeated you.');
    inquirer.prompt(
      [
        {
          type: 'list',
          name: 'decision',
          message: chalkPipe('gray')('You have died.'),
          choices: [
            'Reload',
            'Main Menu'
          ],
          filter: function(val) {
            return val.toLowerCase();
          }
        }
    ] ).then(answer => {
      (answer.decision == 'reload') ? menu.main.load() : menu.main.inquire()
    });

  };

};

module.exports = Battle;