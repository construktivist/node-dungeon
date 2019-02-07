var fs = require('fs');
var inquirer = require('inquirer');
var Character = require('./buildCharacter.js');
var setPlayerStats = require('./playerStats');
var print = require('./printer.js');

exports.character = {
  new: function(){
    inquirer.prompt(
      [
        {
          type: 'list',
          name: 'race',
          message: 'Select your character\'s race:',
          choices: ['Human', 'Elf', 'Dwarf'],
          filter: function(val) {
            return val.toLowerCase();
          }
        },
        {
          type: 'checkbox',
          name: 'weapons',
          message: 'You can pick TWO weapons:',
          choices: [
            new inquirer.Separator('=== Melee ==='),
            {
              name: 'Sword'
            },
            {
              name: 'Dagger'
            },
            {
              name: 'Mace'
            },
            new inquirer.Separator('=== Ranged ==='),
            {
              name: 'Bow'
            },
            {
              name: 'Staff'
            },
            new inquirer.Separator('=== Support ==='),
            {
              name: 'Shield'
            }
          ],
          validate: function(val){
            if (val.length > 2){
              return "ERROR: You can only pick TWO weapons!";
            }
            return true;
          },
        },
        {
          type: 'list',
          name: 'armor',
          message: 'Pick your character\'s armor:',
          choices: ["Knights Plate", "Thiefs Vest", "Warlocks Robes", "Clerics Chainmail"],
          filter: function(val) {
            return val.toLowerCase();
          }
        },
        {
          type: 'list',
          name: 'trinket',
          message: 'Select a trinket:',
          choices: ['Necklace of the Ogre', 'Ring of the Vampire', 'Pendant of the Necromancer'],
          filter: function(val) {
            return val.toLowerCase();
          }
        },
        {
          type: 'input',
          name: 'name',
          message: 'What is your character name?:',
          filter: function(val) {
            return val.toLowerCase();
          }
        },
      ]
    ).then(answers => {
      var playerCharacter = new Character(answers.name, answers.race, answers.weapons, answers.armor, answers.trinket);
      setPlayerStats.stats.static(playerCharacter);
      setPlayerStats.stats.weapons(playerCharacter);
      fs.writeFile('./character.js', JSON.stringify(playerCharacter));
      console.log(playerCharacter);
      });
  },
};
