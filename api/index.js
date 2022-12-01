const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'reelsvideomaker'
})

app.get('/', (req, res) => {

  const sqlGet = 'SELECT * FROM users';
  db.query(sqlGet, (err, result) => {

    res.send('Hey Shravan!')
  });
})

app.listen(3001, () => {
  console.log('====================================');
  console.log('RUNNING POST 3001');
  console.log('====================================');
})