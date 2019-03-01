var inquirer = require('inquirer');

function Room(intro, question, prompts, choices){
  this.intro = intro;
  this.question = question;
  this.prompts = prompts;
  this.choices = choices;

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
        this.resolveRoomChoice(answers);
      }
    );
  };

  this.resolveRoomChoice = (answers) => {
    switch (answers.decision) {
      case answers.decision.includes("move"):
        console.log("You move past the rat");
        break;
      case answers.decision.includes("fight"):
        console.log("You fight the rat!");
        break;
      case answers.decision.includes("flee"):
        console.log("You flee from the rat!");
        break;
      default:
        console.log("Something is not working.");
    }
  }
}

module.exports = Room;
