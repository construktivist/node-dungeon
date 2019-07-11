const print = require(`../helpers/printer.js`);
const dice = require(`../rolls.js`);

exports.treasure = {
    gold: function(character){
        let roll = dice.roll.d20()

        let treasure = 0;

            roll < 6 ? treasure = dice.roll.d6()
            :   roll < 11 ? treasure = dice.roll.d8()
            :   roll < 15 ? treasure = dice.roll.d10()
            :   treasure = dice.roll.d20();

        print.text.narration("You received " + treasure + " gold!");
        console.log(typeof treasure);
        console.log(typeof character.gold);
        console.log(character.gold += treasure);
        console.log(character.gold);

    }, 
}
