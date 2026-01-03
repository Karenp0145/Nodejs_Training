const fs = require('fs').promises;
const path = require('path');

// Lire un fichier
const lire = async () => {
    const contenu = await fs.readFile('exemple.txt', 'utf8');
    console.log(contenu);
};

// Écrire dans un fichier
const ecrire = async () => {
    await fs.writeFile('nouveau.txt', 'Hello World!');
    console.log('Fichier créé !');
};

// Ajouter du contenu
const ajouter = async () => {
    await fs.appendFile('nouveau.txt', '\nNouvelle ligne');
};

// Supprimer un fichier
const supprimer = async () => {
    await fs.unlink('fichier.txt');
};

// Lister les fichiers d'un dossier
const lister = async () => {
    const fichiers = await fs.readdir('.');
    console.log(fichiers);
};

// Créer un dossier
const creerDossier = async () => {
    await fs.mkdir('nouveau-dossier', { recursive: true });
};

const path = require('path');

// Joindre des chemins
const chemin = path.join(__dirname, 'dossier', 'fichier.txt');

// Obtenir l'extension
const ext = path.extname('fichier.txt'); // '.txt'

// Obtenir le nom
const nom = path.basename('/chemin/vers/fichier.txt'); // 'fichier.txt'

// Obtenir le dossier parent
const dossier = path.dirname('/chemin/vers/fichier.txt'); // '/chemin/vers'
