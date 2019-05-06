const server = require('./src/bootstrap')();
const config = require('./config');

server.create(config);
server.start();