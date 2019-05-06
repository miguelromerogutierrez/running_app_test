const express = require('express');
const controllers = require('../../../controllers/apis/users');

const router = express.Router();

router.get('/', controllers.getAllUsers);
router.get('/:id', controllers.getUserById);
router.post('/register', 
  [
    controllers.registerValidations,
    controllers.registerUser
  ]
);
router.post('/update', []);

module.exports = router;
