const Planet = require('../models/planet');

const createPlanet = async (req, res) => {
    const { name, coordinate, capacity } = req.body;

    if (!name || !coordinate || !capacity) {
        return res.status(400).json({ error: 'Name and coordinate required' });
    }

    // Vérification que coordinate est un tableau de deux entiers
    if (
        !Array.isArray(coordinate) || // Vérifie que c'est un tableau
        coordinate.length !== 2 || // Vérifie qu'il y a exactement 2 éléments
        !coordinate.every((num) => Number.isInteger(num)) // Vérifie que chaque élément est un entier
    ) {
        return res.status(400).json({ error: 'Coordinate must be an array of two integers [X, X]' });
    }

    try {
        const planet = await Planet.create({ name: name, coordinate: coordinate, capacity: capacity });
        res.status(201).json(planet);
    } catch (error) {
        res.status(500).json({ error: 'Error when Planet created' });
    }
};

module.exports = {createPlanet};
