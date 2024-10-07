const express = require('express');
const router = express.Router();
const { renderRaces, renderSingleRace, renderAddRace,
insertRace, updateRace, deleteRace } = require("../controllers/pgMakerController")

router.get('/', renderRaces);
router.get('/new', renderAddRace);
router.post('/new', insertRace);
router.get('/:id', renderSingleRace);
router.post('/:id', updateRace);
router.get('/:id/delete', deleteRace);

module.exports = router;