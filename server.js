const db = require('./db');
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Povolení CORS pro všechny domény, abyste mohli volat API z React aplikace

app.get('/api/orders', (req, res) => {
    const sql = 'SELECT * FROM c5.pneutyres.SE_SalesOrder'; // Nahraďte "your_table_name" názvem vaší tabulky
    db.query(sql, (err, results) => {
        if (err) {
            res.status(500).send(`Server error: ${err.message}`);
            return;
        }
        res.json(results);
    });
});

app.get('/', (req, res) => {
    res.send('API is working');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
