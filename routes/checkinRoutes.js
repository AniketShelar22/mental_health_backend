const express = require('express');
const { createCheckin, getCheckins } = require('../controllers/checkinController');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', auth, createCheckin);
router.get('/', auth, getCheckins);

module.exports = router;
