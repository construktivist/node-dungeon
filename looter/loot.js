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

        roll < 6 ? loot = 'pile of garbage'
        : roll < 11 ? loot = 'stack of books'
        : roll < 16 ? loot = 'bag of teeth'
        : loot = 'box of jewels'

        print.text.narration('You received a ' + loot);
        character.pack.push(loot);
        console.log(character.pack);
    }
}
