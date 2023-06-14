var data = require("../data/fakeData");

// Delete
module.exports = function (req, res) {
  var id = req.query.id;

  var isNotFound = true;

  for (let i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      data.splice(i, 1);
      isNotFound = false;
      break;
    }
  }

  var response;

  isNotFound
    ? (response = res.status(404).send())
    : (response = response = res.status(204).send());

  return response;
};
