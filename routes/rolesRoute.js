const express = require('express');
const router = express.Router();
const { renderRoles, renderSingleRole, renderAddRole,
insertRole, updateRole, deleteRole } = require("../controllers/pgMakerController")

router.get('/', renderRoles);
router.get('/new', renderAddRole);
router.post('/new', insertRole);
router.get('/:id', renderSingleRole);
router.post('/:id', updateRole);
router.get('/:id/delete', deleteRole);

module.exports = router;