const { getUserById: getUser } = require('../../../services/users');
module.exports = async function getUserById(req, res) {
  const user = await getUser(req.params.id);
  if (!user.success) {
    res.status(404).send(user);
  } else {
    res.status(200).send(user);
  }
};