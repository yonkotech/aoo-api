const express = require('express');
const router = express.Router();
const activityRoute = require('../controllers/activityController');

router.get('/', activityRoute.getAllActivities);
router.post('/', activityRoute.addActivity);

module.exports = router;
