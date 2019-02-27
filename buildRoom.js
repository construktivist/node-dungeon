var inquirer = require('inquirer.js');

function Room(intro, question, prompts, cases){
  this.intro = intro;
  this.question = question;
  this.prompts = prompts;
  this.cases = cases;

  this.runRoom = () => {
    console.log(this.intro);
    inquirer.prompt(
      [
        {
          type: 'list',
          name: 'decision',
          message: 'What do you do?',
          choices: "Questions", //handle prompts
          filter: function(val) {
            return val.toLowerCase();
          }
        },
      ]
    ).then(answers => {
        //handle cases
      }
    );
  };
}

module.exports = Room;
