const http = require('http');

const serveur = http.createServer((req, res) => {
    const url = req.url;

    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end("<h1>Page d'accueil</h1>");
    } 
    else if (url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>À propos</h1>');
    } 
    else if (url === '/api/data') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Données JSON' }));
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>404 - Page non trouvée</h1>');
    }
});

serveur.listen(3000, () => {
    console.log('Serveur sur http://localhost:3000');
});