const express = require('express');
const router = express.Router();
const { renderAddCharacter } = require("../controllers/pgMakerController")

router.get('/', renderAddCharacter);

module.exports = router;