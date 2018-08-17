const GuacamoleLite = require('guacamole-lite');

const http = require('http')
const myport = 8080

// Creating our own HTTP server so we call allow origin from main app
// TODO this origin should be more specific than '*'
const httpserver = http.createServer();
httpserver.on('request', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
});

const websocketOptions = {
    server: httpserver
};

const guacdOptions = {
  host: 'localhost',
  port: 4822,
};

const clientOptions = {
  crypt: {
    cypher: 'AES-256-CBC',
    key: 'MySuperSecretKeyForParamsToken12',
  },

  log: {
    level: 'DEBUG',
    stdLog: (...args) => {
        console.log('[MyLog]', ...args)
    },
    errorLog: (...args) => {
        console.error('[MyLog]', ...args)
    }
  },

  connectionDefaultSettings: {
    rdp: {
      'create-drive-path': true,
      'ignore-cert': true,
      'enable-wallpaper': false,
      'create-recording-path': true,
    },
  },
};

export const guacServer = new GuacamoleLite(websocketOptions, guacdOptions, clientOptions);
guacServer.on('error', (clientConnection, error) => {
    console.error(clientConnection, error);
});
guacServer.on('open', (clientConnection) => {
    console.log(clientConnection.connectionSettings);
});

guacServer.on('close', (clientConnection) => {
    console.log(clientConnection.connectionSettings);
});
