
exports.printers = {

  border: (string) => {
    console.log(
      "========================== \n" +
      string + "\n" +
      "========================== \n"
    );
  },

  normal: (string) => {
    console.log(string);
  }
  
};
