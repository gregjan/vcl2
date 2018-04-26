Package.describe({
  name: 'dnapier:accounts-canvas',
  version: '0.0.1',
  summary: 'OAuth2 for Canvas',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.6.1');
  api.use('ecmacsript');
  api.use(['underscore', 'random']);
  api.use('accounts-base', ['client', 'server']);

  api.imply('accounts-base', ['client', 'server']);

  api.use('accounts-oauth', ['client', 'server']);
  api.use('dnapier:canvas@0.0.1', ['client', 'server']);

  api.addFiles('accounts-canvas_login_button.css', 'client');
  api.addFiles('accounts-canvas.js');
});
