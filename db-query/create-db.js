const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "" /* set your password */
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE footballers", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});