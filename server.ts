import { createPagesFunctionHandler } from '@remix-run/cloudflare-pages';
import * as build from '@remix-run/dev/server-build';
import type { ServerBuild } from '@remix-run/cloudflare';
import { logDevReady } from '@remix-run/cloudflare';

interface Env {
  CF_BEACON_TOKEN: string | null | undefined;
  WEBP: boolean;
}

type Context = EventContext<Env, string, unknown>;

declare module '@remix-run/server-runtime' {
  interface AppLoadContext extends Env {}
}

if (process.env.NODE_ENV === 'development') {
  logDevReady(build as ServerBuild);
}

export const onRequest = createPagesFunctionHandler({
  build: build as ServerBuild,
  mode: process.env.NODE_ENV,
  getLoadContext: (context: Context) => ({
    ...context.env,
    cf: (context.request as any).cf as IncomingRequestCfProperties,
  }),
});
