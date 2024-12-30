const express = require('express');
const mysql = require('mysql');

const app = express();
const db = mysql.createConnection({
  host: 'localhost',
  user: 'host',
  password: '',
  database: 'pantrylog'
});

db.connect();

app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) throw err;
    res.json(results); 
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});