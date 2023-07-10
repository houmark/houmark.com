import type { LinksFunction, HtmlMetaDescriptor, LoaderFunction } from '@remix-run/cloudflare';
import {
  useLoaderData,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

import stylesheet from '~/tailwind.css';
import font from 'fonts/TASAOrbiterVF.woff2';

function getHeaders(requestOrHeaders: Request | Headers): Headers {
  if (requestOrHeaders instanceof Request) {
    return requestOrHeaders.headers;
  }

  return requestOrHeaders;
}

function webpSupport(requestOrHeaders: Request | Headers) {
  const headers = getHeaders(requestOrHeaders);
  const accept = headers.get('accept');
  const userAgent = headers.get('user-agent');
  return !!(
    accept?.includes('image/webp') ||
    (userAgent?.includes('Safari') && userAgent?.includes('Version/1'))
  );
}

interface Environment {
  ENV: string | null | undefined;
  CF_BEACON_TOKEN: string | null | undefined;
  WEBP: boolean;
}

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
  {
    rel: 'preload',
    as: 'font',
    crossOrigin: 'anonymous',
    href: font,
  },
];

export function meta(): HtmlMetaDescriptor[] {
  return [
    { charset: 'utf-8' },
    {
      title:
        'houmark.com - High-quality, detail-oriented web developer delivering exceptional results. Technical expertise & passion for excellence combine to exceed client expectations.',
    },
    {
      name: 'description',
      content:
        'High-quality, detail-oriented web developer delivering exceptional results. Technical expertise & passion for excellence combine to exceed client expectations.',
    },
    { name: 'viewport', content: 'width=device-width,initial-scale=1,viewport-fit=cover' },
  ];
}

export const loader: LoaderFunction = async ({ request, context }): Promise<Environment> => {
  const isWebPSupported = webpSupport(request.headers);

  return {
    ENV: context.ENV as string | null | undefined,
    CF_BEACON_TOKEN: context.CF_BEACON_TOKEN as string | null | undefined,
    WEBP: isWebPSupported,
  };
};

function Document({ children }: any) {
  const env = useLoaderData() as Environment;
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        {env?.CF_BEACON_TOKEN ? (
          <script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={`{"token": "${env.CF_BEACON_TOKEN}"}`}
          ></script>
        ) : null}
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

function Layout({ children }: any) {
  return (
    /*
    It is possible to define the Default Layout here.
    In that way, all the pages are going to be in the same format.
    Examples of components to be added here: Toolbar/Navbar, Footer and etc...
    */
    <>{children}</>
  );
}
