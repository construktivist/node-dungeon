
exports.text = {

  border: (string) => {
    console.log(
      "========================== \n" +
      string + "\n" +
      "========================== \n"
    );
  },

  header: (string) => {
    console.log(
      "=====" + string + "===== \n"
    );
  },

  normal: (string) => {
    console.log(string);
  }

};
