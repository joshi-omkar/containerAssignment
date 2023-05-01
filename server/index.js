const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const port = 3001;
// const pool = require('./db');

const corsOptions = {
  origin: "http://localhost:3000"
}

app.use(cors(corsOptions))

// Create MySQL connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'OmkPri@26',
  database: 'studentdb'
});

// console.log(pool)

// API endpoint to get vaccination status for a student
app.get('/vaccination/:regno', (req, res) => {
  const regno = req.params.regno;
  const sql = `SELECT vaccinated FROM students WHERE regno = ?`;
  pool.query(sql, [regno], (err, result) => {
    if (err) {
      console.error(err.message);
      res.status(500).send('Error retrieving vaccination status from database');
    } else if (result.length === 0) {
      res.status(404).send(`No student found with registration number ${regno}`);
    } else {
      const status = result[0].vaccinated;
      res.json({ status });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});