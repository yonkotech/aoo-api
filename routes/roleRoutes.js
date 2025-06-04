const express = require('express');
const router = express.Router();
const roleRoute = require('../controllers/roleController');

router.get('/', roleRoute.getAllRoles);
router.post('/', roleRoute.createRole);

module.exports = router;

