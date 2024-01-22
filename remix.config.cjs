/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildPath: 'functions/[[path]].js',
  serverConditions: ['workerd', 'worker', 'browser'],
  serverMainFields: ['browser', 'module', 'main'],
  serverModuleFormat: 'esm',
  serverPlatform: 'neutral',
  serverDependenciesToBundle: 'all',
  serverMinify: true,
  server: './server.ts',
  serverNodeBuiltinsPolyfill: {
    modules: {},
  },
  ignoredRouteFiles: ['**/.*'],
  tailwind: true,
  // publicPath: '/build/',
};
