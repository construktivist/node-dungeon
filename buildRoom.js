var inquirer = require('inquirer');

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
          choices: prompts
        },
      ]
    ).then(answers => {
        //handle cases
        console.log(cases);
      }
    );
  };
}

module.exports = Room;
