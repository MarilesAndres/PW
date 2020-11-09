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

app.get("/user", (req, res) => {
  connection.query(
    'call LogIn()',
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

///////////////////////////----------INICIO----------------////////////////////////////////////////////////////////////

app.get("/user/:id", (req, res) => {
  connection.query(
    `SELECT IdUsuario,
        Correo,
        NombreUsuario,
        Contraseña,
        PoP
        FROM Usuario
        where IdUsuario = ${req.params.id}`,
    function (err, rows, fields) {
      if (err) throw err;
      res.send(rows);
    }
  );
});

app.get("/listas", (req, res) => {
  connection.query(
    `select NombreLista, PrivPub, Descripcion, u.NombreUsuario  from Listas l 
    inner join Usuario u on l.Autor = u.IdUsuario`,
    function (err, rows, fields) {
      if (err) throw err;
      res.send(rows);
    }
  );
});

app.get("/busqueda/:busca", (req, res) => {
  connection.query(
    `call BuscarPorSeccion("${req.params.busca}")`,
    function (err, rows, fields) {
      if (err) throw err;
      res.send(rows);
    }
  );
});


/////////////////////----------------CrearCuenta----------------//////////////////////////////////////


app.post("/editar", (req, res) => {
  connection.query(
    `UPDATE usuario SET Correo= '${req.body.Correo}', NombreUsuario = '${req.body.NombreUsuario}', Contraseña= '${req.body.Contraseña}', 
    PoP = ${req.body.PoP} WHERE IdUsuario = ${req.body.IdUsuario}`,
    function (err, rows, fields) {
      if (err) throw err;
      res.send(rows);
    }
  );
});