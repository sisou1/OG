const userRoutes = require('./userRoutes');

module.exports = (app) => {
    app.use('/users', userRoutes);  // Regrouper toutes les routes liées aux utilisateurs sous /api/users
};
