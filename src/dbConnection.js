const Sequelize = require('sequelize');

function connectDB(configDB) {
  const sequelize = new Sequelize(
    configDB.name, configDB.user, configDB.pass, {
    host: configDB.host,
    dialect:  configDB.dialect,
  });

  process.on('exit', () => {
    console.log('closing db connection');
    sequelize.close();
  });

  return sequelize;
}

module.exports = connectDB;
