// Set up MySQL connection.
var mysql = require("mysql");
var dotenv = require("dotenv").config;
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
var connection = mysql.createConnection({
  host: "localhost",
  port: process.env.MYSQL_PORT || 3306,
  user: "root",
  password: process.env.MYSQL_PASSWORD || "11.08Tt&Bb",
  database: "burgers_db"
});
}
// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
