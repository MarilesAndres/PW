const express = require('express')
const app = express()
const port = 3000
var mysql = require("mysql");
var cors = require("cors");
app.use(express.json());
app.use(cors());

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "gameland",
});

connection.connect();

app.get('/', (req, res) => {
  

  connection.query("SELECT 1 + 1 AS solution", function (err, rows, fields) {
    if (err) throw err;
    console.log("The solution is: ", rows[0].solution);

  });

});

app.get("/user", (req, res) => {
  connection.query(
    `SELECT IdUsuario,
        Correo,
        NombreUsuario,
        Contraseña
        FROM Usuario`,
    function (err, rows, fields) {
      if (err) throw err;
      res.send(rows);
    }
  );
});

app.get("/user/:id", (req, res) => {
  connection.query(
    `SELECT IdUsuario,
        Correo,
        NombreUsuario,
        Contraseña
        FROM Usuario
        where IdUsuario = ${req.params.id}`,
    function (err, rows, fields) {
      if (err) throw err;
      res.send(rows);
    }
  );
});

///////////////////////////---------CREAR CUENTA--------------/////////////////////////////////////////////////////////////////

app.post("/user", (req, res) => {
  connection.query(
    `insert usuario(Correo, NombreUsuario, Contraseña, PoP) values ('${req.body.Correo}','${req.body.NombreUsuario}','${req.body.Contraseña}', ${req.body.PoP});`,
    function (err, rows, fields) {
      if (err) throw err;
      res.send(rows);
    }
  );
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

