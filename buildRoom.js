var inquirer = require('inquirer');
var Enemy = require('./enemies/enemies.js');

function Room(intro, question, prompts, movement, enemies, explore){
  this.intro = intro;
  this.question = question;
  this.prompts = prompts;
  this.movement = movement;
  this.enemies = new Enemy(enemies);
  this.explore = explore;

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
      console.log(this.enemies);


    }
    else {
      console.log("You flee!")
    }
  }
}

module.exports = Room;
