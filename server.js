const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Povolení CORS pro všechny domény, abyste mohli volat API z React aplikace

// Předpokládáme, že máte nastavené připojení k databázi
// TODO: Zde vložte kód pro připojení k databázi

app.get('/api/orders', async (req, res) => {
    try {
        // TODO: Vytvořte dotaz na databázi, který vrátí seznam objednávek
        const orders = []; // Toto je jen placeholder. Nahraďte tento řádek dotazem na databázi.
        res.json(orders);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

app.get('/', (req, res) => {
    res.send('API is working');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
