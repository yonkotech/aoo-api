const express = require('express');
const router = express.Router();
const participationController = require('../controllers/participationController');

router.get('/', participationController.getAllParticipations);
router.post('/', participationController.addParticipation);

module.exports = router;
