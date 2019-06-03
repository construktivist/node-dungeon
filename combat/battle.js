const inquirer = require(`inquirer`);
const fs = require(`fs`);
const Enemy = require('../enemies/enemy.js');
const print = require('../helpers/printer.js');
const combat = require('./combatHandler.js');
const player = require('../character/createCharacter.js');
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
      combat.actions.handle(answers.decision, this.character, this.enemy);
    });
  };

  this.playerWins = (player, enemy) => {
    console.log('Player Wins!');
  }

  this.enemyWins = (player, enemy) => {
    console.log('Enemy Wins!');
  }

  this.continue = (player, enemy) => {
      
    if (player.hitPoints > 0 && enemy.healthPoints <= 0){
      this.playerWins(character, enemy);
    }
    else if (player.hitPoints <= 0 && enemy.healthPoints >= 0){
      this.enemyWins(player, enemy);
    }
    else {
      console.log('Battle should continue here');
      
      // this.run(player, enemy);
    }
  }

}

module.exports = Battle;