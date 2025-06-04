const express = require('express');
const router = express.Router();
const appartenanceController = require('../controllers/appartenanceController');

router.post('/', appartenanceController.assignRole);

module.exports = router;
