var inquirer = require('inquirer');
var print = require('./printer.js');


print.printers.border("Welcome to Node Dungeon!");

var start = [
  {
    type: 'list',
    name: 'start',
    message: 'Lets begin!',
    choices: ['New Game', 'Load Game', 'Exit'],
    filter: function(val) {
      return val.toLowerCase();
    }
  }
];

inquirer.prompt(start).then(answers => {
  console.log(answers)});
