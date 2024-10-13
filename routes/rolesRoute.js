const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const checkRole = () => body('roleName').notEmpty();
const { renderRoles, renderSingleRole, renderAddRole,
insertRole, updateRole, deleteRole } = require("../controllers/pgMakerController")

router.get('/', renderRoles);
router.get('/new', renderAddRole);
router.post('/new', checkRole(), insertRole);
router.get('/:id', renderSingleRole);
router.post('/:id', checkRole(), updateRole);
router.get('/:id/delete', deleteRole);

module.exports = router;