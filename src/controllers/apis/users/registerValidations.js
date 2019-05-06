const { getAPIError, validateEmail, validatePassword } = require('../helpers');

module.exports = registerValidations = (req, res, next) => {
  if (!validateEmail(user.email)) {
    res.status(400).send(getAPIError('INVALID_EMAIL', 'Invalid email'));
  } else if(!validatePassword(user.password)) {
    res.status(400).send(getAPIError('INVALID_PASSWORD', 'Invalid password'));
  } else {
    next();
  }
};
