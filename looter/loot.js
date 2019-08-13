const print = require(`../helpers/printer.js`);
const dice = require(`../rolls.js`);

exports.treasure = {
    gold: function(character){
        let roll = dice.roll.d20();

        let treasure = 0;

            roll < 6 ? treasure = dice.roll.d6()
            :   roll < 11 ? treasure = dice.roll.d8()
            :   roll < 15 ? treasure = dice.roll.d10()
            :   treasure = dice.roll.d20();

        print.text.narration("You received " + treasure + " gold!");
        character.gold += treasure
        print.text.narration("You now have a total of " + character.gold + " gold!");
    },
    
    chest: function(character){
        let roll = dice.roll.d20();

        roll < 6 ? loot = 'Pile of Garbage'
        : roll < 11 ? loot = 'Stack of Books'
        : roll < 16 ? loot = 'Bag of Teeth'
        : loot = 'box of jewels'

        print.text.narration('You received a ' + loot);
        character.pack.push(loot);
        print.text.narration('You stow the ' + loot + ' in your pack and enter the next room.');
        character.save(character, character.gameStatus[0],character.gameStatus[1], true);
    }
}
