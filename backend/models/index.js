const { Sequelize, DataTypes } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config(); // Charger les variables d'environnement

// Créer une instance de Sequelize avec les variables d'environnement
const sequelize = new Sequelize(process.env.PG_DATABASE, process.env.PG_USER, process.env.PG_PASSWORD, {
    host: process.env.PG_HOST,
    dialect: 'postgres',
    port: process.env.PG_PORT
});

// Test de connexion à la base de données
sequelize.authenticate()
    .then(() => console.log('Connexion à la base de données réussie'))
    .catch((err) => console.error('Erreur de connexion', err));

// Exporter l'instance Sequelize pour l'utiliser dans d'autres fichiers
module.exports = sequelize;
