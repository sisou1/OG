const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const dotenv = require('dotenv');

const JWT_SECRET = process.env.JWT_KEY;

const createUser = async (req, res) => {
    const { name, password } = req.body;

    if (!name || !password) {
        return res.status(400).json({ error: 'Name and password required' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({ name: name, password: hashedPassword });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Error when User created' });
    }
};

const loginUser = async (req, res) => {
    const { name, password } = req.body;

    if (!name || !password) {
        return res.status(400).json({ error: 'Name and password required' });
    }

    try {
        const user = await User.findOne({ where: { name } });

        if (!user) {
            return res.status(401).json({ error: 'User not found' });
        }

        // Vérification du mot de passe
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Password incorrect' });
        }

        // Génération d'un JWT
        const token = jwt.sign({ id: user.id, name: user.name }, JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ message: 'Connected', token });
    } catch (error) {
        res.status(500).json({ error: 'Error when Login User' });
    }
};

module.exports = {createUser, loginUser };
