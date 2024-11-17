const express = require('express');
const { getAllUsers, createUser } = require('../controllers/userController');
const router = express.Router();

// Route pour récupérer tous les utilisateurs
router.get('/', getAllUsers);

// Route pour créer un nouvel utilisateur
router.post('/', createUser);

module.exports = router;
