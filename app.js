const inquirer = require(`inquirer`);
const print = require(`./helpers/printer.js`);
const start = require(`./mainMenu.js`);

print.text.border(`Welcome to Node Dungeon!`);

start.main.inquire();
