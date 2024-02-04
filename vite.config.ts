import {
  unstable_vitePlugin as remix,
  unstable_cloudflarePreset as cloudflare,
} from '@remix-run/dev';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  ssr: {
    resolve: {
      externalConditions: ['workerd', 'worker'],
    },
  },
  plugins: [
    tsconfigPaths(),
    // Note to self: remix must always be the last plugin to load
    remix({
      presets: [
        cloudflare(),
        // { getRemixDevLoadContext: sharedLoadContext }
      ],
    }),
  ],
});
