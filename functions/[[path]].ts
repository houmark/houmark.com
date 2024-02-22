import { createPagesFunctionHandler } from '@remix-run/cloudflare-pages';

import * as build from '../build/server';
import { getLoadContext } from 'load-context';

export const onRequest = createPagesFunctionHandler({
  // @ts-expect-error Build is done by Vite, so we will have an error here when there are not files
  build,
  mode: process.env.NODE_ENV,
  getLoadContext,
});
