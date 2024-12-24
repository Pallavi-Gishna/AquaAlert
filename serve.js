const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

// Create a MySQL connection pool
const db = mysql.createPool({
  host: 'localhost', // or the IP of your server
  user: 'root', // or the username you created for your friend
  password: 'new_password',
  database: 'aqua_alert',
});

// Test database connection
db.getConnection((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    process.exit(1);
  }
  console.log('Connected to MySQL database');
});

// Example route to fetch data
app.get('/api/data', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});
