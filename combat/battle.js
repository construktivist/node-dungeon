const inquirer = require(`inquirer`);
const battle = require(`./battlePrompts`);
var Enemy = require('../enemies/enemy.js');
var print = require('../helpers/printer.js');

function Battle(enemy){

  this.enemy = new Enemy(enemy);

  this.run = () => {
    print.text.enemyStats(this.enemy);
    this.prompt();
  },

  this.prompt = () => {
    inquirer.prompt(battle.actions.prompt).then(answers => {
      console.log(answers);
    });
 }

}

module.exports = Battle;
