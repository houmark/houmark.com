import type { ReactNode } from 'react';
import type {
  LinksFunction,
  LoaderFunctionArgs,
  MetaFunction,
} from '@remix-run/cloudflare';
import {
  useLoaderData,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

import '~/tailwind.css';
import font from '/fonts/TASAOrbiterVF.woff2';

// const buf = Buffer.from('hello world', 'utf8');

function getHeaders(requestOrHeaders: Request | Headers): Headers {
  if (requestOrHeaders instanceof Request) {
    return requestOrHeaders.headers;
  }

  return requestOrHeaders;
}

function webpSupport(requestOrHeaders: Request | Headers): boolean {
  const headers = getHeaders(requestOrHeaders);
  const accept = headers.get('accept');
  const userAgent = headers.get('user-agent');
  return !!(
    accept?.includes('image/webp') ||
    (userAgent?.includes('Safari') && userAgent?.includes('Version/1'))
  );
}

export const links: LinksFunction = () => [
  {
    rel: 'preload',
    as: 'font',
    crossOrigin: 'anonymous',
    href: font,
  },
  { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicon-32x32.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicon-16x16.png',
  },
  { rel: 'manifest', href: '/site.webmanifest' },
];

export const meta: MetaFunction = () => {
  return [
    {
      title:
        'houmark.com - High-quality, detail-oriented web developer delivering exceptional results. Technical expertise & passion for excellence combine to exceed client expectations.',
    },
    {
      name: 'description',
      content:
        'High-quality, detail-oriented web developer delivering exceptional results. Technical expertise & passion for excellence combine to exceed client expectations.',
    },
  ];
};

export const loader = async ({ request, context }: LoaderFunctionArgs) => {
  const isWebPSupported = webpSupport(request.headers);
  return {
    CF_BEACON_TOKEN: context.env.CF_BEACON_TOKEN,
    WEBP: isWebPSupported,
  };
};

function Layout({ children }: { children: ReactNode }) {
  const { CF_BEACON_TOKEN } = useLoaderData<typeof loader>();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <Scripts />
        <ScrollRestoration />
        {CF_BEACON_TOKEN ? (
          <script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={`{"token": "${CF_BEACON_TOKEN}"}`}
          ></script>
        ) : null}
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
