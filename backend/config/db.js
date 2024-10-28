// config/db.js

const mysql = require('mysql');

// MySQL connection configuration
const db = mysql.createConnection({
    host: 'localhost',
    user: 'your_username', // Replace with your MySQL username
    password: 'your_password', // Replace with your MySQL password
    database: 'laptop_store' // Ensure this matches your database name
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to MySQL Database.');
});

module.exports = db;