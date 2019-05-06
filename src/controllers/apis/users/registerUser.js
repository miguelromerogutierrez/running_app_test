const get = require('lodash/get');
const { registerUser: register } = require('../../../services/users');
const { getAPIError } = require('../helpers');

module.exports = async function registerUser(req, res) {
  const user = req.body;
  const dbResult = await register(user);
  if (!dbResult.success) {
    const messageError = get(dbResult, ['result', 'errors', '0', 'message']);
    const validateKey = get(dbResult, ['result', 
    'errors', '0', 'validatorKey']);
    const path = get(dbResult, ['result', 'errors', '0', 'path']);
    res.status(404)
    .send(getAPIError(`${validateKey}_${path}`, messageError));
  } else {
    res.status(200).send(dbResult);
  }
};


