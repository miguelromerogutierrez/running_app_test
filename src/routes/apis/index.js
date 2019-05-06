const express = require('express');
const v1API = require('./v1');

const router = express.Router();

router.use('/v1', v1API);

module.exports = router;