const express = require('express');
const router = express.Router();
const memberController = require('../controllers/memberController');

router.get('/', memberController.getAllMembers);
router.get('/:id/details', memberController.getMemberDetails);
router.post('/', memberController.createMember);

module.exports = router;
