const inquirer = require(`inquirer`);
const fs = require(`fs`);
const Enemy = require('../enemies/enemy.js');
const print = require('../helpers/printer.js');
const player = require('../character/createCharacter.js');
const dice = require('../rolls.js');
const chalkPipe = require(`chalk-pipe`);

function Battle(enemy){

  this.enemy = new Enemy(enemy);

  this.character = player.character.load();

  this.questions = [
        {
          type: 'list',
          name: 'decision',
          message: chalkPipe('bgGreen.yellow')('What do you do?'),
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
              this.character.divine.abilities[1]
          ],
          filter: function(val) {
            return val.toLowerCase();
          }
        }
    ];

  this.run = () => {
    print.text.enemyStats(this.enemy);
    inquirer.prompt(this.questions).then(answers => {
      this.handle(answers.decision, this.character, this.enemy);
    });
  };

  this.handle = (answer, character, enemy) => {
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
            this.enemyTurn(character, enemy);

        break;

      case "power attack":
            var attack = (character.attackRoll() - 2) + character.warrior.bonus;
            print.text.narration(`You swing with your mighty ` + answer);
            print.text.narration(`You rolled a ` + attack);

            attack >= enemy.armorPoints ?
              this.powerAttackHit(answer, character, enemy) : print.text.narration(`You missed!`);
              this.enemyTurn(character, enemy);
        break;

      case "shield wall":
            character.warrior.shieldWallBuffAmount += (2 + character.warrior.bonus);
            print.text.narration(`Shield Wall buff applied! Your Armor Class is now ` + (character.armorPoints + character.warrior.shieldWallBuffAmount));
            this.enemyTurn(character, enemy);
        break;

      case "hide":
              const hide = character.attackRoll();
              const spot = dice.roll.d20();

              if (hide > spot) {
                character.hidden = true;
                print.text.narration(`You are now hidden!`);
              }
              else {
                print.text.narration(`Your attempt to hide failed!`);
                this.enemyTurn(character, enemy);
              }
        break;

      case "shadow strike":
              var attack = character.attackRoll() + character.rogue.bonus;
              this.attack(attack, answer, character, enemy);
              this.enemyTurn(character, enemy);
        break;

      case "magic missle":
              var attack = character.attackRoll() + character.magic.bonus;
              this.attack(attack, answer, character, enemy);
              this.enemyTurn(character, enemy);
        break;

      case "lightning bolt":
              var attack = character.attackRoll() + character.magic.bonus;
              this.attack(attack, answer, character, enemy);
              this.enemyTurn(character, enemy);
        break;

      case "heal":
              if (character.hitPoints >= character.hitPointsTotal){
                print.text.normal(`Your health is already full.`)
                this.enemyTurn(character, enemy);
              }
              else {
                character.hitPoints += (dice.roll.d6() + character.divine.bonus)
                print.text.narration(`You have healed yourself. Your health is now ` + character.hitPoints)
                this.enemyTurn(character, enemy);
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
                this.enemyTurn(character, enemy);
              }
              else {
                print.text.normal(`You can only use Bless once per fight encounter.`);
                this.enemyTurn(character, enemy);
              }
        break;

      default:
            print.text.normal("Something is wrong");

    }
  };

  this.attack = function(attack, answer, character, enemy){
    print.text.narration(`You attack with your ` + answer);
    print.text.narration(`You rolled a ` + attack);
    attack >= enemy.armorPoints ?
      this.hit(answer, character, enemy) : print.text.narration(`You missed!`);
  };

  this.hit = function(answer, character, enemy) {
    print.text.narration(`You hit the ` + enemy.name + `!`);
    character.weapons[0] === answer ?
    print.text.narration(`You dealt ` + character.weaponDamage_0() + ` damage!`) :
    print.text.narration(`You dealt ` + character.weaponDamage_1() + ` damage!`)
  };

  this.powerAttackHit = function(answer, character, enemy) {
    print.text.narration(`Your power attack hit the ` + enemy.name + `!`);
    character.weapons[0] === answer ?
    print.text.narration(`You dealt ` + (character.weaponDamage_0() + 2) + ` damage!`) :
    print.text.narration(`You dealt ` + (character.weaponDamage_1() + 2) + ` damage!`)
  };

  this.enemyTurn = function(character, enemy){
    print.text.narration('The ' + enemy.name + ' health is ' + enemy.healthPoints);
    print.text.narration('The ' + enemy.name + ' attacks!');
    enemy.attackRoll() > character.armorPoints ? 
    print.text.narration('The ' + enemy.name + ' attacks and hits you for ' + enemy.damageRoll() + ' damage!') :
    print.text.narration('The ' + enemy.name + ' attacks and misses you!')
    this.run();
  };

  this.checkHealth = function(character, enemy){

    if (player.hitPoints > 0 && enemy.healthPoints <= 0){
      this.playerWins(character, enemy);
    }
    else if (player.hitPoints <= 0 && enemy.healthPoints >= 0){
      this.enemyWins(player, enemy);
    }
    else {
      console.log('Battle should continue here');
      
      // this.run(player; enemy);
    }

  };

  this.playerWins = function(character){
    console.log('Player wins!');
    
  };

  this.enemyWins = function(enemy){
    console.log('Enemy wins!');
    
  };

};

module.exports = Battle;