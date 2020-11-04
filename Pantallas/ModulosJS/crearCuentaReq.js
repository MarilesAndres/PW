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



  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });