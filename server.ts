import { createPagesFunctionHandler } from '@remix-run/cloudflare-pages';
import * as build from '@remix-run/dev/server-build';
import { logDevReady } from '@remix-run/cloudflare';

if (process.env.NODE_ENV === 'development') {
  logDevReady(build);
}

const handleRequest = createPagesFunctionHandler({
  build,
  mode: process.env.NODE_ENV,
  getLoadContext: (context) => ({ env: context.env }),
});

export function onRequest(context) {
  return handleRequest(context);
}