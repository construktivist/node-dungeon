const print = require(`../helpers/printer.js`);
const dice = require(`../rolls.js`);

exports.treasure = {
    gold: function(){
        let roll = dice.roll.d20()

            roll < 6 ? return treasure = dice.roll.d6()
            :   roll < 11 ? return treasure = dice.roll.d8()
            :   roll < 15 ? return treasure = dice.roll.d10()
            :   roll <= 20 ? return treasure = dice.roll.d20();



        print.text.narration("You received 1 gold!")
    }, 
}
