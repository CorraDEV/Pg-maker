const express = require('express');
const router = express.Router();
const { renderRoles, renderSingleRole, renderAddRole,
insertRole, updateRole } = require("../controllers/pgMakerController")

router.get('/', renderRoles);
router.get('/new', renderAddRole);
router.post('/new', insertRole);
router.get('/:id', renderSingleRole);
router.post('/:id', updateRole);

module.exports = router;