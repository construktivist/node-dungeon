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
    console.log(answers.decision);
    if (answers.decision.includes("move")){
      console.log("You move to the other room")
    }
    else if (answers.decision.includes("fight")){
      console.log("You fight the rat!")
    }
    else {
      console.log("You flee!")
    }
  }
}

module.exports = Room;
