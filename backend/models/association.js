const setupAssociations = (User, Planet) => {
    User.hasMany(Planet, { foreignKey: 'userId', onDelete: 'CASCADE' });
    Planet.belongsTo(User, { foreignKey: 'userId' });
};

module.exports = setupAssociations;
