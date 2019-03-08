var inquirer = require('inquirer');

weapons = [`Sword`, `Bow`];

// const printWeapons = (items) => {
//     items.forEach(item => {
//         return (item);
//     });
// };

exports.actions = {
    prompt:  [
        {
          type: 'list',
          name: 'decision',
          message: 'What do you do?',
          choices: [
              new inquirer.Separator('=== Weapon ==='),
              // printWeapons(weapons),
              weapons[0],
              weapons[1],
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
