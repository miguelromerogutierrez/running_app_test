const express = require('express');
// const expressHandlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const dbConnection = require('./dbConnection');
const models = require('./models');
const routes = require('./routes');

function bootstrap() {
    const server = express();
    let sequelize = null;

    const setupDB = async (configDB) => {
      sequelize = dbConnection(configDB);
      try {
        await sequelize.authenticate();
        console.log('Connection to DB has been stablished succesfully.');
        await models.init(sequelize);
      } catch (err) {
        console.log('Unable to connect to the DB.', err);
        process.exit();
      }
    }

    const create = config => {
      // Setup DB connection
      setupDB(config.db);

      // Server settings
      server.set('env', config.env);
      server.set('port', config.port);
      server.set('hostname', config.hostname);
      // server.set('viewDir', config.viewDir);

      // Returns middleware that parses json
      server.use(bodyParser.json());
      // app.use(bodyParser.urlencoded({ extended: true }));

      // Setup view engine
      // server.engine('.hbs', expressHandlebars({
      //     defaultLayout: 'default',
      //     layoutsDir: config.viewDir + '/layouts',
      //     extname: '.hbs'
      // }));
      // server.set('views', server.get('viewDir'));
      // server.set('view engine', '.hbs');

      // Set up routes
      routes.init(server);
    };

    const start = () => {
      const hostname = server.get('hostname');
      const port = server.get('port');

      server.listen(port, () => {
          console.log('Express server listening on - http://' + hostname + ':' + port);
      });
    };

    return {
        create: create,
        start: start
    };
};

module.exports = bootstrap;

// const Users = sequelize.import(__dirname + '/models/users.js');
// Users.sync();

// Users.findOne({ where: { dateBirth: '1994-01-01' }})
// .then(karina => {
//   console.log(karina.get({plain:true}))
//   karina.destroy();
// });

// Users.findAll().then( users => {
//   console.log(JSON.stringify(users));
// });
// Users.create({
//   email: 'karina@mail.com',
//   password: '123456',
//   name: 'Karina',
//   lastName: 'Ibarra',
//   genre: 'F',
//   height: 1.56,
//   weight: 62,
//   dateBirth: new Date(1993, 11, 1),
// }).then(karina => console.log(karina.get({plain: true})));

