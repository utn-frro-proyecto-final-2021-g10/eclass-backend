const express = require('express'); // Express
const router = express.Router();

router.use('/users', require('./users'));
router.use('/courses', require('./courses'));

module.exports = router;
