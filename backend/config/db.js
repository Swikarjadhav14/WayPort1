// config/db.js

const mysql = require('mysql');

// MySQL connection configuration
const db = mysql.createConnection({
    host: 'localhost',
    user: 'username', 
    password: 'password',
    database: 'laptop_store'
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
