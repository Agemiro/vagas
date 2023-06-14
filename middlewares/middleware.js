// Autorização solititada antes de deletar ou atualizar usuário.
module.exports = function (req, res, next) {
  const prompt = require("prompt-sync")();

  const name = prompt(
    "Identifique-se, digite seu nome (somente letras) e após isso clique em ENTER: "
  );

  const regex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;

  if (regex.test(name)) {
    next();
  } else {
    res.status(401).send("Você não foi autorizado a realizar requisição.");
  }
};
