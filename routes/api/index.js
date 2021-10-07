const express = require('express'); // Express
const router = express.Router();

router.use('/users', require('./users'));
router.use('/courses', require('./courses'));
router.use('/files', require('./files'));

module.exports = router;
