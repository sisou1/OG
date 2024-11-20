const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

// Création de l'instance Sequelize avec les variables d'environnement
const sequelize = new Sequelize(process.env.PG_DATABASE, process.env.PG_USER, process.env.PG_PASSWORD, {
    host: process.env.PG_HOST,
    dialect: 'postgres',
    port: process.env.PG_PORT
});

// Test de la connexion
sequelize.authenticate()
    .then(() => console.log('Connexion à la base de données réussie'))
    .catch(err => console.error('Erreur de connexion', err));

// Gestion de la fermeture propre
process.on('SIGINT', async () => {
    console.log('Fermeture du serveur...');
    try {
        await sequelize.close(); // Fermeture de la connexion à la base de données
        console.log('Connexion à la base de données fermée.');
    } catch (error) {
        console.error('Erreur lors de la fermeture de la connexion à la base de données :', error);
    } finally {
        process.exit(0); // Terminer le processus
    }
});

module.exports = sequelize;
