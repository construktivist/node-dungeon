var inquirer = require('inquirer');
var print = require('./printer.js');
var start = require('./start.js');

print.text.border("Welcome to Node Dungeon!");

start.main.inquire();
