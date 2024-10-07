const express = require('express');
const router = express.Router();
const { renderCharacters, renderSingleCharacter, renderAddCharacter,
insertCharacter, updateCharacter, deleteCharacter } = require("../controllers/pgMakerController");

router.get('/', renderCharacters);
router.get('/new', renderAddCharacter);
router.post('/new', insertCharacter);
router.get('/:id', renderSingleCharacter);
router.post('/:id', updateCharacter);
router.get('/:id/delete', deleteCharacter);

module.exports = router;