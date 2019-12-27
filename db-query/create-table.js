const mysql = require('mysql');

const con = mysql.createConnection({
	host: "localhost",
	user: "root", /* set your username */
	password: "", /* set your password */ 
	database: "footballers"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE IF NOT EXISTS `players`(`id` int(5) NOT NULL AUTO_INCREMENT,`first_name` varchar(255) NOT NULL,`last_name` varchar(255) NOT NULL,PRIMARY KEY (`id`))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});