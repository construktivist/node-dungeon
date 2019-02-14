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
          choices: ['Necklace of the Paladin', 'Ring of the Assassin', 'Pendant of the Shaman'],
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
      setPlayerStats.stats.armor(playerCharacter);
      setPlayerStats.stats.trinkets(playerCharacter);
      print.text.stats(playerCharacter);

      this.confirm();

      fs.writeFile('./character.js', JSON.stringify(playerCharacter));
      });
  },

  confirm: function(){
    inquirer.prompt(
      [
        {
          type: 'confirm',
          name: 'characteronfirmation',
          message: 'Do you want to play with this character?',
          default: true
        },
      ]
    ).then(answers => {
      answers === false ? console.log("Ok! Let's build another character.") : console.log("Great! Let's play.");
    });
  }

};
