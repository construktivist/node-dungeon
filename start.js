var inquirer = require('inquirer');

exports.main = {
  questions: [
    {
      type: 'list',
      name: 'start',
      message: 'Lets begin!',
      choices: ['New Game', 'Load Game', 'Exit'],
      filter: function(val) {
        return val.toLowerCase();
      }
    }
  ],

  inquire: function(){
    inquirer.prompt(this.questions).then(answers => {
      console.log(answers);
    });
  }
}
