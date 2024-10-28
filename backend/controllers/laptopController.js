// controllers/laptopController.js

const db = require('../config/db');

// Get laptops with pagination, filtering, and sorting
exports.getLaptops = (req, res) => {
    const { page = 1, limit = 10, filterField, filterValue, sortField = 'Price_euros', sortOrder = 'ASC' } = req.query;

    let query = 'SELECT * FROM laptops';
    let conditions = [];
    let values = [];

    // Filtering logic
    if (filterField && filterValue) {
        conditions.push(`${filterField} LIKE ?`);
        values.push(`%${filterValue}%`);
    }

    if (conditions.length > 0) {
        query += ' WHERE ' + conditions.join(' AND ');
    }

    // Sorting logic
    query += ` ORDER BY ${sortField} ${sortOrder}`;

    // Pagination logic
    const offset = (page - 1) * limit;
    query += ` LIMIT ?, ?`;
    
    // Combine values for pagination
    db.query(query, [...values, offset, parseInt(limit)], (err, results) => {
        if (err) {
            console.error('Error fetching laptops:', err.message);
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};