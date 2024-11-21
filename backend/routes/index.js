const userRoutes = require('./userRoutes');
const planetRoutes = require('./planetRoutes');

module.exports = (app) => {
    app.use('/users', userRoutes);
    app.use('planets', planetRoutes);
};
