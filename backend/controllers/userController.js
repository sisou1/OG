const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const JWT_SECRET = 'votre_clé_secrète'; // Remplacez par une clé plus sécurisée et gardez-la confidentielle

const createUser = async (req, res) => {
    const { name, password } = req.body;

    if (!name || !password) {
        return res.status(400).json({ error: 'Nom et mot de passe sont requis' });
    }

    try {
        // Hachage du mot de passe
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({ name, password: hashedPassword });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la création de l\'utilisateur' });
    }
};

const loginUser = async (req, res) => {
    const { name, password } = req.body;

    if (!name || !password) {
        return res.status(400).json({ error: 'Nom et mot de passe sont requis' });
    }

    try {
        const user = await User.findOne({ where: { name } });

        if (!user) {
            return res.status(401).json({ error: 'Utilisateur non trouvé' });
        }

        // Vérification du mot de passe
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Mot de passe incorrect' });
        }

        // Génération d'un JWT
        const token = jwt.sign({ id: user.id, name: user.name }, JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ message: 'Connexion réussie', token });
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la connexion' });
    }
};

module.exports = {createUser, loginUser };
