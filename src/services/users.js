const assign = require('lodash/assign');
const models = require('../models');
const { getAPIError } = require('../controllers/apis/helpers');

async function getAllUsers() {
  const Users = models.get('users');
  try {
    const users = await Users.findAll();
    if (users === null) return { error: true, result: [] };
    return { success: true, result: users};
  } catch (err) {
    return { error: err, result: [] };
  }
}

async function getUserById(id) {
  const Users = models.get('users');
  try {
    const user = await Users.findByPk(id);
    if (user === null) return { error: true, result: {} };
    return { success: true, result: user };
  } catch (err) {
    return { error: err, result: {} };
  }
}

async function registerUser(user) {
  const Users = models.get('users');
  try {
    const newUser = await Users.create({
      ...user,
      name: 'Nombre',
      lastName: 'Apellido',
    });
    return { success: true, result: newUser };
  } catch (err) {
    return { error: true, result: err };
  }
}

async function updateUser({ id, ...userToUpdate}) {
  try {
    const { error, result } = await getUserById(id);
    if (error) return { error, result };
    assign(result, userToUpdate);
    await result.update({
      ...userToUpdate
    });
    return result; 
  } catch (err) {
    return getAPIError('UNEXPECTED_ERROR', 'Error to save user');
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  registerUser,
  updateUser,
};
