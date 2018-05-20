var mysql = require('mysql');

var database = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'gotohell12',
  database: 'animalData'
});

database.connect(function(err){
  if(err) {console.log('did not connect to database')}

  console.log('Database connection successful');
});

module.exports = database;