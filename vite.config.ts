import {
  vitePlugin as remix,
  cloudflareDevProxyVitePlugin as remixCloudflareDevProxy,
} from '@remix-run/dev';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { getLoadContext } from './load-context';

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    remixCloudflareDevProxy({ getLoadContext }),
    // NOTE: remix must always be the last plugin to load
    remix({ ignoredRouteFiles: ['**/.*'] }),
  ],
});
