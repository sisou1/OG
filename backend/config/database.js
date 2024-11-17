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

module.exports = sequelize;
