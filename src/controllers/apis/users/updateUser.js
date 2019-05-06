const { updateUser } = require('../../../services/users');

module.exports = async (req, res) => {
  const {
    suscription: ignore,
    ...userToUpdate
  } = req.body;
  const user = await updateUser(userToUpdate);
  res.send(user);
};
