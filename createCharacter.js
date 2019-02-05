var inquirer = require('inquirer');
var Character = require('./buildCharacter.js');
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
          name: 'weapon',
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
          choices: ["Knight's Plate", "Thief's Vest", "Warlocks Robe's", "Cleric's Chainmail"],
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
      console.log(answers);
      var playerCharacter = new Character(answers.name, answers.race, answers.weapons, answers.armor, answers.trinket);
      this.setRaceStats(playerCharacter.race);
      console.log(playerCharacter);
      });
  },

  setRaceStats: function(race){
    switch (race) {
      case 'elf':
          playerCharacter.hitpoints = 12;
        break;
      case 'human':
          playerCharacter.hitpoints = 15;
        break;
        case 'dwarf':
          playerCharacter.hitpoints = 18;
          break;
      default:
        print.text.normal("Oops. Something went wrong :/")

    }
  }
};
