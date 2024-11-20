const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');  // Importer l'instance Sequelize

// Définir le modèle User
const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// Synchroniser la table avec la base de données
User.sync()
    .then(() => console.log('Table "users" synchronisée avec succès'))
    .catch(err => console.error('Erreur lors de la synchronisation', err));

module.exports = User;
