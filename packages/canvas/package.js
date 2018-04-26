Package.describe({
  name: 'dnapier:canvas-oauth',
  version: '0.0.1',
  summary: 'OAuth handler for Canvas LMS',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionFrom('1.6.1');
  api.use('ecmascript');
  api.use('accounts-ui', ['client', 'server']);
  api.use('oauth2', ['client', 'server']);
  api.use('http', ['server']);
  api.use(['underscore', 'service-configuration'], ['client', 'server']);
  api.use(['random', 'templating'], 'client');

  api.export('Canvas');

  api.addFiles(['canvas_configure.html', 'canvas_configure.js'],'client');
  api.addFiles('canvas_server.js', 'server');
  api.addFiles('canvas_client.js', 'client');
});
