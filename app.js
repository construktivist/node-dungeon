//App start point
const inquirer = require(`inquirer`);
const print = require(`./helpers/printer.js`);
const start = require(`./mainMenu.js`);

//Prints string on app start
print.text.border(`Welcome to Node Dungeon!`);

//Displays main menu options
start.main.inquire();
