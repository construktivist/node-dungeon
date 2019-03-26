const inquirer = require(`inquirer`);
const fs = require(`fs`);
const Enemy = require('../enemies/enemy.js');
const print = require('../helpers/printer.js');
const combat = require('./combatHandler.js');
const player = require('../character/createCharacter.js');

function Battle(enemy){

  this.enemy = new Enemy(enemy);

  this.character = player.character.load();

  this.questions = [
        {
          type: 'list',
          name: 'decision',
          message: 'What do you do?',
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
      combat.actions.handle(answers.decision, this.enemy);
    });
  }

}

module.exports = Battle;
