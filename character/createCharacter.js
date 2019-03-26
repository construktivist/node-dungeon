const fs = require(`fs`);
const inquirer = require(`inquirer`);
const Character = require(`./buildCharacter.js`);
const setPlayerStats = require(`./characterStats`);
const campaign = require(`../campaign/campaignSelect.js`);
const print = require(`../helpers/printer.js`);

exports.character = {
  new: function(){
    inquirer.prompt(
      [
        {
          type: `list`,
          name: `race`,
          message: `Select your character's race:`,
          choices: [`Human`, `Elf`, `Dwarf`],
          filter: function(val) {
            return val.toLowerCase();
          }
        },
        {
          type: `checkbox`,
          name: `weapons`,
          message: `You can pick TWO weapons:`,
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
          message: `Pick your character's armor:`,
          choices: [`Knights Plate`, `Thiefs Vest`, `Warlocks Robes`, `Clerics Chainmail`],
          filter: function(val) {
            return val.toLowerCase();
          }
        },
        {
          type: `list`,
          name: `trinket`,
          message: `Select a trinket:`,
          choices: [`Necklace of the Paladin`, `Ring of the Assassin`, `Pendant of the Shaman`],
          filter: function(val) {
            return val.toLowerCase();
          }
        },
        {
          type: `input`,
          name: `name`,
          message: `What is your character name?:`,
          filter: function(val) {
            return val.toLowerCase();
          }
        },
      ]
    ).then(answers => {
      const playerCharacter = new Character(answers.name, answers.race, answers.weapons, answers.armor, answers.trinket);

      this.buildCharacter(playerCharacter);
      this.confirm(`Do you want to use this character?`, playerCharacter);

      });
  },

  confirm: function(message, playerCharacter){
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
      !answers.characterConfirmation ? this.confirmAgain(`Are you sure you want to build another character?`, playerCharacter) :
        fs.writeFile(`./data/character.js`, JSON.stringify(playerCharacter));
        campaign.launch.tavern(1);

    });
  },

  load: function(){
    const characterData = JSON.parse(fs.readFileSync('./data/character.js'));
    const playerCharacter = new Character(characterData.name, characterData.race, characterData.weapons, characterData.armor, characterData.trinket);

    this.buildCharacter(playerCharacter);
    return playerCharacter;

  },

  buildCharacter: function(character){
    setPlayerStats.stats.static(character);
    setPlayerStats.stats.weapons(character);
    setPlayerStats.stats.armor(character);
    setPlayerStats.stats.trinkets(character);
    console.log(character);
    print.text.playerStats(character);
  },

  confirmAgain: function(message, playerCharacter){
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
      !answers.characterConfirmation ? this.new() :
        fs.writeFile(`./data/character.js`, JSON.stringify(playerCharacter));
        campaign.launch.tavern(1);

    });
  }

};
