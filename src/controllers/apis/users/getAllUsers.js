const { getAllUsers: getUsers } = require('../../../services/users');

module.exports = async function getAllUsers(req, res) {
  const users = await getUsers();
  if (!users.success) {
    res.status(404).send(users);
  } else {
    res.status(200).send(users);
  }
};