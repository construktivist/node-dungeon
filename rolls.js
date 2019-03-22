var print = require(`./helpers/printer.js`);


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
