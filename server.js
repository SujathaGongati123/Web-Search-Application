// server.js
const express = require('express');
const bodyParser = require('body-parser');
const data = require('./data.json'); // assuming data.json contains your provided data

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// Search endpoint
app.get('/search', (req, res) => {
    const query = req.query.q.toLowerCase();
    const results = data.filter(item => item.title.toLowerCase().includes(query));
    res.json(results);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
