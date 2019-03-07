exports.actions = {
    prompt:  [
        {
          type: 'list',
          name: 'decision',
          message: 'What do you do?',
          choices: [ "Use Weapon",
              "Use Warrior Ability",
              "Use Rogue Ability",
              "Use Magic Ability",
              "Use Divine Ability"],
          filter: function(val) {
            return val.toLowerCase();
          }
        }
      ]
};
