/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  publicPath: '/build/',
  serverBuildPath: 'functions/[[path]].js',
  serverConditions: ['worker'],
  serverMainFields: ['browser', 'module', 'main'],
  serverModuleFormat: 'esm',
  serverPlatform: 'neutral',
  serverDependenciesToBundle: 'all',
  serverMinify: true,
  server: './server.js',
  // devServerBroadcastDelay: 1000,
  serverNodeBuiltinsPolyfill: {
    modules: {},
  },
  ignoredRouteFiles: ['**/.*'],
  tailwind: true,
};
