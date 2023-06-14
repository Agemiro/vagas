var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var middleware = require("./middlewares/middleware");

var teste1 = require("./testes/teste1");
var teste2 = require("./testes/teste2");
var teste3 = require("./testes/teste3");
var teste4 = require("./testes/teste4");
var teste5 = require("./testes/teste5");

app.set("view engine", "jade");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.send(`get user/ </br>
   get users/ </br>
   post users/ </br>
   delete users/ </br>
   put users/ </br>
   `);
});

app.get("/user", teste1.getUser);
app.get("/users", teste1.getUsers);
app.post("/user", teste2);
app.delete("/user", middleware, teste3);
app.put("/user", middleware, teste4);
app.get("/user/access", teste5);

const port = 3000;
app.listen(port, function () {
  console.log("Express server listening on port " + port);
});
