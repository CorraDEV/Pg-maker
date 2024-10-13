const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const checkRace = () => body('raceName').notEmpty();
const { renderRaces, renderSingleRace, renderAddRace,
insertRace, updateRace, deleteRace } = require("../controllers/pgMakerController")

router.get('/', renderRaces);
router.get('/new', renderAddRace);
router.post('/new', checkRace(), insertRace);
router.get('/:id', renderSingleRace);
router.post('/:id', checkRace(), updateRace);
router.get('/:id/delete', deleteRace);

module.exports = router;