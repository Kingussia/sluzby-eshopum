const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'pneu-tyres.cz',
  user: 'c5pneutyres',
  password: 'tuzckXUMF!4',
  database: 'c5pneutyres'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database');
});
db.query('SELECT 1 + 1 AS solution', (err, results) => {
    if (err) throw err;
    console.log('The solution is: ', results[0].solution);
});

module.exports = db;
