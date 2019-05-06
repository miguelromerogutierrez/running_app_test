const fs = require('fs');
const isEmpty = require('lodash/isEmpty');
const takeLast = require('lodash/fp/takeLast');
const split = require('lodash/fp/split');
const compose = require('lodash/fp/compose')

const getFileName = compose(
  (arr) => arr[0],
  split('.'),
  takeLast(1),
  split('/'),
)


const getPaths = (folder) => {
  return new Promise((resolve, reject) => {
    fs.readdir(folder, (err, files) => {
      if (!isEmpty(err)) reject(err);
      resolve(files);
    });
  })
}

module.exports = {
  getFileName,
  getPaths,
};
