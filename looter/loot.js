const print = require(`../helpers/printer.js`);
const dice = require(`../rolls.js`);

exports.treasure = {
    gold: function(){
        print.text.narration("You received 1 gold!")
    } 
}