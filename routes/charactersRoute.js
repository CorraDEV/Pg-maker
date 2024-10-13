const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const checkCharacter = () => body('name').notEmpty();
const { renderCharacters, renderSingleCharacter, renderAddCharacter,
insertCharacter, updateCharacter, deleteCharacter } = require("../controllers/pgMakerController");

router.get('/', renderCharacters);
router.get('/new', renderAddCharacter);
router.post('/new', checkCharacter(), insertCharacter);
router.get('/:id', renderSingleCharacter);
router.post('/:id', checkCharacter(), updateCharacter);
router.get('/:id/delete', deleteCharacter);

module.exports = router;