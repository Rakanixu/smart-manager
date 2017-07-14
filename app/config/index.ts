const path = require('path');

interface Config {
    env: string;
    root: string;
    port: string;
    securePort: string;
    ip: string;
    uploadDestination: string;
    mongoDBUrl: string;
    apiPathPrefix: string;
    sessionSecret: string;
    sessionTokenDuration: number;
    sessionCookieName: string;
}

export let config: Config = {
  env: process.env.NODE_ENV,

  // root path of server
  root: path.normalize(__dirname + '/../..'),

  // server port
  port: process.env.PORT || '9000',

  securePort: process.env.SECURE_PORT || '9043',

  // server IP
  ip: process.env.IP || '0.0.0.0',

  // upload destination for files / images
  uploadDestination: __dirname + './../static',

  // mongoDB
  mongoDBUrl: 'mongodb://localhost:27017/smart-manager',

  // api path prefix
  apiPathPrefix: '/api/v1',

  // secret used for generating secure tokens
  sessionSecret: 'ksadjkasios2asj8n4b!kasn5',
  sessionTokenDuration: 60 * 60 * 5,
  sessionCookieName: 'jwt_token'
};

