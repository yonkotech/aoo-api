const express = require('express');
const router = express.Router();
const groupController = require('../controllers/groupController');

router.get('/', groupController.getAllGroups);
router.get('/:id/details', groupController.getGroupDetails);
router.post('/', groupController.createGroup);

module.exports = router;
