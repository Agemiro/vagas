var data = require("../data/fakeData");
var countList = require("../data/countList");

const getUser = (req, res, next) => {
  var name = req.query.name;

  // Procura o usuário pelo seu índice e o devolve como resposta quando encontrado, e se não encontrado devolve
  // um erro de status 404 (not found).
  const registeredUserIndex = data.findIndex((element) => element.name == name);
  registeredUserIndex != -1
    ? res.send(data[registeredUserIndex])
    : res.status(404).send();

  // Somente usado quando encontrado na base de dados fake principal.
  if (registeredUserIndex != -1) {
    countNumberOfReads(name);
  }
};

const getUsers = (req, res, next) => {
  res.send(data);
};

// Metódo que verifica e conta o número de vezes em que determinado usuário foi lido e salva essa
// informação em uma nova lista.
const countNumberOfReads = (name) => {
  const indexRead = countList.findIndex((element) => element.userName == name);

  var newUser = { userName: name, numberTimesRead: 1 };

  indexRead === -1
    ? countList.push(newUser)
    : (countList[indexRead].numberTimesRead =
        countList[indexRead].numberTimesRead + 1);
};

module.exports = {
  getUser,
  getUsers,
};
