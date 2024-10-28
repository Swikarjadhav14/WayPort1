const mysql = require('mysql');
const fs = require('fs');
const csv = require('csv-parser'); 

const db = mysql.createConnection({
    host: 'localhost',
    user: 'username',
    password: 'password',
    database: 'laptop_store'
});

// Connect to the database
db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Database.');
});

const importData = () => {
    fs.createReadStream('laptop_prices.csv') 
        .pipe(csv())
        .on('data', (row) => {
            const query = 'INSERT INTO laptops (Company, Product, TypeName, Inches, Ram, OS, Weight, Price_euros, Screen, ScreenW, ScreenH, Touchscreen, IPSpanel, RetinaDisplay, CPU_company, CPU_freq, CPU_model, PrimaryStorage, SecondaryStorage, PrimaryStorageType, SecondaryStorageType, GPU_company, GPU_model) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
            db.query(query, [
                row.Company,
                row.Product,
                row.TypeName,
                row.Inches,
                row.Ram,
                row.OS,
                row.Weight,
                row.Price_euros,
                row.Screen,
                row.ScreenW,
                row.ScreenH,
                row.Touchscreen,
                row.IPSpanel,
                row.RetinaDisplay,
                row.CPU_company,
                row.CPU_freq,
                row.CPU_model,
                row.PrimaryStorage,
                row.SecondaryStorage,
                row.PrimaryStorageType,
                row.SecondaryStorageType,
                row.GPU_company,
                row.GPU_model
            ], (err) => {
                if (err) throw err;
            });
        })
        .on('end', () => {
            console.log('Data imported successfully.');
            db.end();
        });
};

importData();