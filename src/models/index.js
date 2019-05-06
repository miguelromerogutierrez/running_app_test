const assign = require('lodash/assign');
const isEmpty = require('lodash/isEmpty');
const { getPaths, getFileName } = require('../helpers');

class Models {
  async init(sequelize) {
    this.sequelize = sequelize;
    const files = await getPaths(__dirname);
    const modelsDir = {};
    files.forEach(file => {
      const modelName = getFileName(file).toUpperCase();
      if (modelName !== 'INDEX') {
        const directory = __dirname + '/' + file;
        modelsDir[modelName] = directory;
      }
    });
    assign(this, modelsDir);
    return this;
  };

  get(modelName) {
    const dir = this[modelName.toUpperCase()];
    console.log(dir);
    if (!dir) return null;
    return this.sequelize.import(dir);
  }
}

const modelsInstance = new Models();

module.exports = modelsInstance;
