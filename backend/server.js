const express = require('express');
const laptopRoutes = require('./routes/laptopRoutes');

const app = express();
app.use(express.json());

// Use routes for laptop handling
app.use('/api/laptops', laptopRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});