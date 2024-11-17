const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const routes = require('./routes');  // Importer toutes les routes du dossier routes

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware pour parser le JSON
app.use(express.json());
app.use(cors());  // Activer le CORS pour autoriser les requêtes entre le front et le back

// Utilisation des routes
routes(app);  // Utiliser toutes les routes définies dans routes/index.js

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
