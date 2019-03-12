var inquirer = require('inquirer');
var fs = require('fs');



var characterData = fs.readFileSync('../data/character.js');

console.log(JSON.parse(characterData));

exports.actions = {
    prompt:  [
        {
          type: 'list',
          name: 'decision',
          message: 'What do you do?',
          choices: [
              new inquirer.Separator('=== Weapon ==='),
              "Use a weapon",
              new inquirer.Separator('=== Warrior Abilities ==='),
              "Use Power Attack",
              new inquirer.Separator('=== Rogue Abilities ==='),
              "Use Rogue Ability",
              new inquirer.Separator('=== Magic ==='),
              "Use Magic Ability",
              new inquirer.Separator('=== Divine ==='),
              "Use Divine Ability"],
          filter: function(val) {
            return val.toLowerCase();
          }
        }
      ]
};
