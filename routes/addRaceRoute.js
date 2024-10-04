const express = require('express');
const router = express.Router();
const { renderAddRace, insertRace } = require("../controllers/pgMakerController")

router.get('/', renderAddRace);
router.post('/', insertRace);

module.exports = router;