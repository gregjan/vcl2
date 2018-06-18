const GuacamoleLite = require('guacamole-lite');

const websocketOptions = {
  port: 8080,
};

const guacdOptions = {
  port: 4822,
};

const clientOptions = {
  crypt: {
    cypher: 'AES-256-CBC',
    key: 'MoveThisToMeteor.Settings',
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

const guacServer = new GuacamoleLite(websocketOptions, guacdOptions, clientOptions);
