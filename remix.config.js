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
  devServerBroadcastDelay: 1000,
  ignoredRouteFiles: ['**/.*'],
  tailwind: true,
  future: {
    v2_errorBoundary: true,
    v2_meta: true,
    v2_routeConvention: true,
    v2_normalizeFormMethod: true,
    unstable_dev: true,
  },
};
