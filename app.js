var inquirer = require('inquirer');
var print = require('./helpers/printer.js');
var start = require('./mainMenu.js');

print.text.border("Welcome to Node Dungeon!");

start.main.inquire();
