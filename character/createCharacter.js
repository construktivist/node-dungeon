const fs = require(`fs`);
const inquirer = require(`inquirer`);
const Character = require(`./buildCharacter.js`);
const setPlayerStats = require(`./characterStats`);
const campaign = require(`../campaign/campaignSelect.js`);
const print = require(`../helpers/printer.js`);
const chalkPipe = require(`chalk-pipe`);

exports.character = {
  new: function(){
    inquirer.prompt(
      [
        {
          type: `list`,
          name: `race`,
          message: chalkPipe('gray')(`Select your character's race:`),
          choices: [`Human`, `Elf`, `Dwarf`],
          filter: function(val) {
            return val.toLowerCase();
          }
        },
        {
          type: `checkbox`,
          name: `weapons`,
          message: chalkPipe('gray')(`You can pick TWO weapons:`),
          choices: [
            new inquirer.Separator(`=== Melee ===`),
            {
              name: `Sword`
            },
            {
              name: `Dagger`
            },
            {
              name: `Mace`
            },
            new inquirer.Separator(`=== Ranged ===`),
            {
              name: `Bow`
            },
            {
              name: `Staff`
            },
            new inquirer.Separator(`=== Support ===`),
            {
              name: `Shield`
            }
          ],
          validate: function(val){
            if (val.length > 2){
              return `ERROR: You can only pick TWO weapons!`;
            }
            return true;
          },
        },
        {
          type: `list`,
          name: `armor`,
          message: chalkPipe('gray')(`Pick your character's armor:`),
          choices: [`Knights Plate`, `Thiefs Vest`, `Warlocks Robes`, `Clerics Chainmail`],
          filter: function(val) {
            return val.toLowerCase();
          }
        },
        {
          type: `list`,
          name: `trinket`,
          message: chalkPipe('gray')(`Select a trinket:`),
          choices: [`Necklace of the Paladin`, `Ring of the Assassin`, `Pendant of the Shaman`],
          filter: function(val) {
            return val.toLowerCase();
          }
        },
        {
          type: `input`,
          name: `name`,
          message: chalkPipe('gray')(`What is your character name?:`),
          filter: function(val) {
            return val.toLowerCase();
          }
        },
      ]
    ).then(answers => {
      const character = new Character(answers.name, answers.race, answers.weapons, answers.armor, answers.trinket, [], [], 50);

      this.buildCharacter(character);
      this.confirm(chalkPipe('gray')(`Do you want to use this character?`), character);

      });
  },

  confirm: function(message, character){
    inquirer.prompt(
      [
        {
          type: `confirm`,
          name: `characterConfirmation`,
          message: message,
          default: true
        },
      ]
    ).then(answers => {
      !answers.characterConfirmation ? this.confirmAgain(chalkPipe('gray')(`Are you sure you want to build another character?`), character) :
      character.save(character, 'tavern', 0, true);
    });
  },

  confirmAgain: function(message, character){
    inquirer.prompt(
      [
        {
          type: `confirm`,
          name: `secondCharacterConfirmation`,
          message: message,
          default: true
        },
      ]
    ).then(answers => {
      !answers.secondCharacterConfirmation ? character.save(character, 'tavern', 0, true) :
      this.new();
    });
  },

  load: function(){
    const characterData = JSON.parse(fs.readFileSync('./data/character.js'));
    const character = new Character(characterData.name, characterData.race, characterData.weapons, characterData.armor, characterData.trinket, characterData.gameStatus, characterData.pack, characterData.gold);

    this.buildCharacter(character);
    return character;

  },

  buildCharacter: function(character){
    setPlayerStats.stats.static(character);
    setPlayerStats.stats.weapons(character);
    setPlayerStats.stats.armor(character);
    setPlayerStats.stats.trinkets(character);
    print.text.playerStats(character);
  },

};
