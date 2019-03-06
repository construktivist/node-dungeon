var Enemy = require('../enemies/enemy.js')
var print = require('../helpers/printer.js');

function Battle(enemy){

  this.enemy = new Enemy(enemy);

  this.run = () => {
    print.text.enemyStats(this.enemy);
  };
}

module.exports = Battle;
