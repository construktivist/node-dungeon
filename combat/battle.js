const inquirer = require(`inquirer`);
const fs = require(`fs`);
const Enemy = require('../enemies/enemy.js');
const print = require('../helpers/printer.js');
const combat = require('./combatHandler.js');
const Character = require(`../character/buildCharacter.js`);
const setPlayerStats = require(`../character/characterStats`);

function Battle(enemy){

  this.enemy = new Enemy(enemy);

  this.characterData = JSON.parse(fs.readFileSync('./data/character.js'));

  this.character = new Character(this.characterData.name, this.characterData.race, this.characterData.weapons, this.characterData.armor, this.characterData.trinket);

  this.rebuildCharacter = () => {
    setPlayerStats.stats.static(this.character);
    setPlayerStats.stats.weapons(this.character);
    setPlayerStats.stats.armor(this.character);
    setPlayerStats.stats.trinkets(this.character);
    console.log(this.character);
    print.text.playerStats(this.character);
  };

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
    this.rebuildCharacter();
    inquirer.prompt(this.questions).then(answers => {
      combat.actions.handle(answers.decision, this.enemy);
    });
  }

}

module.exports = Battle;
