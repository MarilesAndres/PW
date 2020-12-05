const express = require('express')
const app = express()
const port = 3000
var mysql = require("mysql");
var cors = require("cors");
app.use(express.json());
app.use(cors());

const bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }));

const path = require("path");

const multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + Path2D.extname(file.originalname));
  }
})
 
var upload = multer({ storage: storage })


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

app.post('/uploadfile', upload.single('myFile'), (req, res, next) => {
  const file = req.file
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)
  }
    req.send({file: file});
})

app.post("/uploadfileanddata", upload.single("myFile"), (req, res, next) => {
  const file = req.file;
  const name = req.body.name;
  const password = req.body.password;
  if (!file) {
    const error = new Error("Please upload a file");
    error.httpStatusCode = 400;
    return next(error);
  }

  connection.query(
    `insert usuario(Correo, NombreUsuario, Contraseña, PoP, Foto) values ('${req.body.Email}','${req.body.NU}','${req.body.contraseña}', ${req.body.optradio} , ${req.file.path});`,
    function (err, rows, fields) {
      if (err) throw err;
      res.send(rows);
    }
  );

  res.send({ name: name, password: password, file: file });
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
    `    select NombreLista, PrivPub, Descripcion, u.NombreUsuario  from Listas l 
    inner join Usuario u on l.Autor = u.IdUsuario where u.PoP = 1 and l.PrivPub = 1 order by l.IdLista;`,
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



///////////////////----------------VER LISTAS-----------------//////////////////////////////////


app.get("/verLista/:nombre", (req, res) => {
  connection.query(
    `call VerLista("${req.params.nombre}");`,
    function (err, rows, fields) {
      if (err) throw err;
      res.send(rows);
    }
  );
});


/////////////////////////----------Pagina Perfil--------------//////////////////////////////////

app.get("/verListaUsuario/:id", (req, res) => {
  connection.query(
    `call ListasUsuario("${req.params.id}");`,
    function (err, rows, fields) {
      if (err) throw err;
      res.send(rows);
    }
  );
});



//////////////////////----------autorLista------------------///////////////////////////

app.get("/verAutorLista/:nombre", (req, res) => {
  connection.query(
    `call AutorDeLista("${req.params.nombre}");`,
    function (err, rows, fields) {
      if (err) throw err;
      res.send(rows);
    }
  );
});


app.get("/verListaUsuarioP/:nombre", (req, res) => {
  connection.query(
    `call ListasUsuarioP("${req.params.nombre}");`,
    function (err, rows, fields) {
      if (err) throw err;
      res.send(rows);
    }
  );
});


//////////////////////////--------Crear Listas-------------///////////////////////////////////

app.get("/Secciones", (req, res) => {
  connection.query(
    `call Secciones()`,
    function (err, rows, fields) {
      if (err) throw err;
      res.send(rows);
    }
  );
});

app.post("/agregarLista", (req, res) => {
  connection.query(
    `call AgregaLista('${req.body._NombreLista}', ${req.body._PrivPub}, ${req.body._Autor}, '${req.body._Descripcion}')`,
    function (err, rows, fields) {
      if (err) throw err;
      res.send(rows);
    }
  );
});

app.get("/IdLista/:_NombreLista", (req, res) => {
  connection.query(
    `call IdListaAutor ('${req.params._NombreLista}')`,
    function (err, rows, fields) {
      if (err) throw err;
      res.send(rows);
    }
  );
});

app.post("/agregarSeccionLista", (req, res) => {
  connection.query(
    `call agregarSeccion(${req.body.idS}, ${req.body.idL})`,
    function (err, rows, fields) {
      if (err) throw err;
      res.send(rows);
    }
  );
});


app.post("/agregarElemento", (req, res) => {
  connection.query(
    `call agregarElemento('${req.body._titulo}', '${req.body._Descripcion}', ${req.body._IdLista})`,
    function (err, rows, fields) {
      if (err) throw err;
      res.send(rows);
    }
  );
});


/////////////////////////////////////-----ELIMINA LISTAS---------//////////////////////////////////////////////

app.post("/borrarLista", (req, res) => {
  connection.query(
    `call eliminTabla ('${req.body._IdLista}')`,
    function (err, rows, fields) {
      if (err) throw err;
      res.send(rows);
    }
  );
});




app.get("/verListaId/:id", (req, res) => {
  connection.query(
    `call VerListaId("${req.params.id}");`,
    function (err, rows, fields) {
      if (err) throw err;
      res.send(rows);
    }
  );
});

app.post("/EditaLista", (req, res) => {
  connection.query(
    `call editaLista (${req.body._IdLista}, '${req.body._NombreLista}', '${req.body._Descripcion}', ${req.body._PrivPub})`,
    function (err, rows, fields) {
      if (err) throw err;
      res.send(rows);
    }
  );
});