var countList = require("../data/countList");

module.exports = function (req, res) {
  var name = req.query.name;

  const indexRead = countList.findIndex((element) => element.userName == name);

  if (indexRead !== -1) {
    res.send(
      "Usuário " +
        countList[indexRead].userName +
        " foi lido " +
        countList[indexRead].numberTimesRead +
        " vezes."
    );
  } else {
    res.status(404).send();
  }
};
