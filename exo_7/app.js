const http = require('http');

let compteur = 0;

const serveur = http.createServer((req, res) => {
    compteur++;
    
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
   
    const html = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Compteur de visites</title>
            <style>
                body {
                    font-family: Arial;
                    text-align: center;
                    padding: 50px;
                }
                h1 { color: #2196F3; }
            </style>
        </head>
        <body>
            <h1>Compteur de visites</h1>
            <p style="font-size: 48px;">${compteur}</p>
            <p>Rechargez la page pour incrémenter</p>
        </body>
        </html>
    `;
    
    res.end(html);
});

serveur.listen(3000, () => {
    console.log('Compteur sur http://localhost:3000');
}) 