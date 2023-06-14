var data = require("../data/fakeData");

// Update
module.exports = function (req, res) {
  var id = req.query.id;

  const user = data.find((element) => element.id == id);

  if (user !== undefined) {
    user.name = req.body.name;
    user.job = req.body.job;

    res.send(user);
  } else {
    res.status(404).send();
  }
};
