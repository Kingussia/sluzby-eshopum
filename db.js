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

module.exports = db;
