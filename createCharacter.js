var inquirer = require('inquirer');

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
          choices: ['Knight\'s Plate', 'Thief\'s Vest', 'Warlock\'s Robes'],
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
      ]
    ).then(answers => {
       // console.log(answers);
       // console.log(JSON.stringify(answers));
       return answers;
      });
  }
};