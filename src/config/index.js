import merge from 'lodash.merge';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const env = process.env.NODE_ENV;

const baseConfiguration = {
  port: 3000,
  secrets: {},
  db: {
    url: 'mongodb://localhost/pokemon',
  },
  disableAuth: true,
};

let envConfiguration = {};

switch (env) {
  case 'development':
  case 'dev':
    envConfiguration = require('./dev').config;
    break;
  case 'test':
  case 'testing':
    envConfiguration = require('./testing').config;
    break;
  case 'prod':
  case 'production':
    envConfiguration = require('./prod').config;
    break;
  default:
    envConfiguration = require('./dev').config;
}

export default merge(baseConfiguration, envConfiguration);
