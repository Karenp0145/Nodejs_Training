const express = require('express');
const app = express();

// GET
app.get('/', (req, res) => {
    res.send("Page d'accueil");
});

// Paramètres d'URL
app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Profil utilisateur ${id}`);
});

// Query strings (/search?q=nodejs)
app.get('/search', (req, res) => {
    const query = req.query.q;
    res.send(`Recherche : ${query}`);
});

// POST (besoin de body parser)
app.use(express.json());
app.post('/api/users', (req, res) => {
    const data = req.body;
    res.json({ message: 'Utilisateur créé', data });
});

app.listen(3000);