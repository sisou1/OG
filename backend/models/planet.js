const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Planet = sequelize.define('Planet', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    coordinates: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: false
    },
    capacity: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    userId: { // Clé étrangère
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        },
        allowNull: true
    }
});

Planet.sync()
    .then(() => console.log('Table "planet" synchronized'))
    .catch(err => console.error('Error syncing planet', err));

module.exports = Planet;
