/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildTarget: 'cloudflare-pages',
  server: './server.js',
  devServerBroadcastDelay: 1000,
  ignoredRouteFiles: ['**/.*'],
  future: {
    unstable_tailwind: true,
    v2_meta: true,
    unstable_dev: {
      appServerPort: 3000,
      rebuildPollIntervalMs: 500,
    },
  },
  // appDirectory: "app",
  // assetsBuildDirectory: 'public/build',
  // serverBuildPath: "functions/[[path]].js",
  // publicPath: "/build/",
};
