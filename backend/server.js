const express = require('express');
const mysql = require('mysql');

const app = express();

// Database connection setup
const db = mysql.createConnection({
    host: 'localhost',   // or your database IP
    user: 'root',        // MySQL username
    password: 'new_password',  // MySQL password
    database: 'aqua_alert',  // Name of the database
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.message);
        return;
    }
    console.log('Connected to MySQL!');
});

// Example API endpoint to fetch data
app.get('/data', (req, res) => {
    const query = 'SELECT * FROM your_table';
    db.query(query, (err, results) => {
        if (err) {
            res.status(500).send('Error fetching data');
            return;
        }
        res.json(results); // Return data as JSON
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
