Package.describe({
  name: "core",
  version: '0.0.1'
});

Package.onUse(function (api) {
  api.versionsFrom('1.6.1');

  var packages = [
    'meteor',
    'static-html',
    'standard-minifier-css',
    'standard-minifier-js',
    'es5-shim',
    'ecmascript',
    'shell-server',
    'webapp',
    'server-render',
    'mongo',
    'email',
    'check',
    'underscore',
    'http',
    'random',
    'fourseven:scss',
    'reactive-var',
    'tracker',
    'dynamic-import',
    'mdg:validated-method',
    // 'aldeed:collection2',
    // 'aldeed:simple-schema'

  ];

  api.use(packages);
  api.imply(packages);

  api.mainModule("lib/server/main.js", "server");
  api.mainModule("lib/client/main.js", "client");

});
