const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Sequelize.Model { }
  Users.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    suscription: DataTypes.BOOLEAN,
    genre: DataTypes.STRING,
    dateBirth: DataTypes.DATE,
    height: DataTypes.FLOAT,
    weight: DataTypes.FLOAT,
    dateCreation: DataTypes.DATE,
    status: DataTypes.ENUM('Active', 'Inactive'),
    description: DataTypes.TEXT,
    dateUpdated: DataTypes.DATE,
  }, { sequelize, modelName: 'users', timestamps: false, underscored: true});
  return Users;
}
