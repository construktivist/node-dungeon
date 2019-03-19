const inquirer = require(`inquirer`);
const fs = require(`fs`);
var Enemy = require('../enemies/enemy.js');
var print = require('../helpers/printer.js');


function Battle(enemy){

  this.enemy = new Enemy(enemy);

  this.character = JSON.parse(fs.readFileSync('./data/character.js'));

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
        console.log(answers);
    });
  }

}

module.exports = Battle;
