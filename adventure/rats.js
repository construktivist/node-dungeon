var inquirer = require('inquirer');

exports.launch = {
  actOne: () => {
    console.log("You wake up from a nightmare to a loud knocking coming from our room door. You answer it to find the tavern owner begging you to follow him to the basement.");
    inquirer.prompt(
      [
        {
          type: 'list',
          name: 'decision',
          message: 'What do you do?',
          choices: ["Follow the Tavern Owner to the basement", "Ask what is going on"],
          filter: function(val) {
            return val.toLowerCase();
          }
        },
      ]
    ).then(answers => {
      switch (answers) {
        case "Follow the tavern owner to the basement":
          console.log("You follow the Tavern Owner.");
          break;
        default:
          console.log("The tavern owner tells you he has a rat problem.");
      }
    });
  }
}
