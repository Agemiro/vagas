var data = require("../data/fakeData");

// Função para criar um novo usuário
module.exports = function (req, res) {
  var currentNumberUsers = data.length;

  var lastElementId;

  // Verifica se existe ou não pelo menos um usuário cadastrado para poder incrementar o valor do ID dele mais 1,
  // pois poderá ocorrer de não ter nenhum e considerar como undefined o último ID, além de claro, nunca gerar
  // IDs repetidos.
  currentNumberUsers > 0
    ? (lastElementId = data[data.length - 1].id)
    : (lastElementId = 0);

  var id = lastElementId + 1;
  var name = req.body.name;
  var job = req.body.job;

  var newUser = {
    id: id,
    name: name,
    job: job,
  };

  data.push(newUser);

  return res.status(201).json(newUser);
};
