Package.describe({
  name: "custom-package",
  version: '0.0.1'
});

Package.onUse(function (api) {
  api.versionsFrom('1.6.1');
  
  api.use([
    //Core package to import dependencies like EcmaScript or others..
    'core'
  ]);

  api.mainModule("lib/server/main.js", "server");
  api.mainModule("lib/client/main.js", "client");

});
