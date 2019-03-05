var inquirer = require('inquirer');

function Room(intro, question, prompts, resolve){
  this.intro = intro;
  this.question = question;
  this.prompts = prompts;
  this.resolve = resolve;

  this.runRoom = () => {
    console.log(this.intro);
    inquirer.prompt(
      [
        {
          type: 'list',
          name: 'decision',
          message: this.question,
          choices: prompts
        },
      ]
    ).then(answers => {
        this.resolve(answers.decision);
      }
    );
  };

}

module.exports = Room;
