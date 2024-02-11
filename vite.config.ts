import {
  vitePlugin as remix,
  cloudflarePreset as cloudflare,
} from '@remix-run/dev';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { getBindingsProxy } from 'wrangler';
import { getLoadContext } from './load-context';

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    // NOTE: remix must always be the last plugin to load
    remix({
      presets: [
        cloudflare(getBindingsProxy, {
          getRemixDevLoadContext: async (context) => {
            const { cf } = await getBindingsProxy();
            return getLoadContext({ ...context, cf });
          },
        }),
      ],
    }),
  ],
  ssr: {
    resolve: {
      externalConditions: ['workerd', 'worker'],
    },
  },
});
