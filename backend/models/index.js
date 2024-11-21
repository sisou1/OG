const { Sequelize, DataTypes } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(process.env.PG_DATABASE, process.env.PG_USER, process.env.PG_PASSWORD, {
    host: process.env.PG_HOST,
    dialect: 'postgres',
    port: process.env.PG_PORT
});

sequelize.authenticate()
    .then(() => console.log('Connexion à la base de données réussie'))
    .catch((err) => console.error('Erreur de connexion', err));

const User = require('./user');
const Planet = require('./planet');

const setupAssociations = require('./associations');
setupAssociations(User, Planet);

module.exports = sequelize;
