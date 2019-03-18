var inquirer = require('inquirer');
var fs = require('fs');

// var character = JSON.parse(fs.readFileSync('./data/character.js'));


exports.actions = {

    character: JSON.parse(fs.readFileSync('./data/character.js')),

    questions:  [
        {
          type: 'list',
          name: 'decision',
          message: 'What do you do?',
          choices: [
              new inquirer.Separator('=== Weapon ==='),
              character.weapons[0],
              character.weapons[1],
              new inquirer.Separator('=== Warrior Abilities ==='),
              character.warrior.abilities[0],
              character.warrior.abilities[1],
              new inquirer.Separator('=== Rogue Abilities ==='),
              character.rogue.abilities[0],
              character.rogue.abilities[1],
              new inquirer.Separator('=== Magic ==='),
              character.magic.abilities[0],
              character.magic.abilities[1],
              new inquirer.Separator('=== Divine ==='),
              character.divine.abilities[0],
              character.divine.abilities[1]
          ],
          filter: function(val) {
            return val.toLowerCase();
          }
        }
    ],

    inquire: () => () => {
        console.log(this.character);
        // inquirer.prompt(this.questions).then(answers => {
        //     console.log(answers);
        // });
    }

};
