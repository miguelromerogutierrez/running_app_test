const helpers = require('../helpers');

module.exports = (req, res, next) => {
  const params = [
    'name',
    'lastName',
    'email',
    'password',
    'genre',
    'height',
    'weight',
    'description',
    'dateBirth',
  ];
  const changes = req.body;
  const updated = params.map(param => {
    validator(param, changes[param]);
  });
};

function validator(param, value) {
  switch (param) {
    case 'name':
      helpers.validateName(value);
    break;
    case 'lastName':
      helpers.validateName(value);
    break;
    case 'email':
      helpers.validateEmail(value);
    break;
    case 'password':
      helpers.validatePassword(value);
    break;
    case 'genre':
    break;
    case 'height':
    break;
    case 'weight':
    break;
    case 'description':
    break;
    case 'dateBirth':
    break;
    default:
  }
}