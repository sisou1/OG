const express = require('express');
const { createPlanet} = require('../controllers/planetControllers');
const router = express.Router();

router.post('/', createPlanet);

module.exports = router;
