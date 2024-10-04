const express = require('express');
const router = express.Router();
const { renderAddRole, insertRole } = require("../controllers/pgMakerController")

router.get('/', renderAddRole);
router.post('/', insertRole);

module.exports = router;