const express = require('express');
const usersControllers = require('./users');

const router = express.Router();

router.use('/users', usersControllers);

module.exports = router;