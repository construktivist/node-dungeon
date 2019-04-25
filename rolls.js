//The following module can be used for handling dice rolls.
var print = require(`./helpers/printer.js`);

// Roll functions that support (d20, d10, d8, d6, d4);
exports.roll = {
  d20: function(){
    return this.randomInt(1, 20);
  },

  d10: function(){
    return this.randomInt(1, 10);
  },

  d8: function(){
    return this.randomInt(1, 8);
  },

  d6: function(){
    return this.randomInt(1, 6);
  },

  d4: function(){
    return this.randomInt(1, 4);
  },

  randomInt: function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

};
