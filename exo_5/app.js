const fs = require('fs').promises;

const lireFichier = async () => {
    try {
        const data = await fs.readFile('fichier.txt', 'utf8');
        console.log('Contenu :', data);
    } catch (err) {
        console.error('Erreur :', err);
    }
};

lireFichier();

console.log("test");

// api-simulation.js
const attendre = (ms, valeur) => {
    return new Promise(resolve => {
        setTimeout(() => resolve(valeur), ms);
    });
};


const api1 = () => attendre(1000, "Données API 1");
const api2 = () => attendre(2000, "Données API 2");
const api3 = () => attendre(1500, "Données API 3");

// EN SÉRIE (lent - 4500ms total)
const enSerie = async () => {
    console.time('Série');
    const resultat1 = await api1();
    const resultat2 = await api2();
    const resultat3 = await api3();
    console.log(resultat1, resultat2, resultat3);
    console.timeEnd('Série');
};


// EN PARALLÈLE (rapide - 2000ms total)
const enParallele = async () => {
    console.time('Parallèle');
    const resultats = await Promise.all([
        api1(),
        api2(),
        api3()
    ]);
    console.log(resultats);
    console.timeEnd('Parallèle');
};


// Test
(async () => {
    await enSerie();
    await enParallele();
})();