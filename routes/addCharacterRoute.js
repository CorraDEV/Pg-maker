const express = require('express');
const router = express.Router();
const { renderAddCharacter, insertCharacter } = require("../controllers/pgMakerController")

router.get('/', renderAddCharacter);
router.post('/', insertCharacter);

module.exports = router;