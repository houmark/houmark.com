import type { ReactNode } from 'react';
import type {
  ErrorResponse,
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
  useRouteError,
  isRouteErrorResponse,
  Link,
} from '@remix-run/react';

import '~/tailwind.css';
import font from '/fonts/TASAOrbiterVF.woff2';
import { webpSupport } from './libs/webp-support';

// const buf = Buffer.from('hello world', 'utf8');

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
        'houmark.com - High-quality, detail-oriented web developer delivering exceptional results.',
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
    context,
  };
};

export function CloudflareBeacon() {
  const data = useLoaderData<typeof loader>();
  const { CF_BEACON_TOKEN } = data ?? {};
  if (!CF_BEACON_TOKEN) return null;
  return (
    <script
      defer
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon={`{"token": "${CF_BEACON_TOKEN}"}`}
    ></script>
  );
}

export function Layout({ children }: { children: ReactNode }) {
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
        <ScrollRestoration />
        <Scripts />
        <CloudflareBeacon />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary() {
  const error = useRouteError();
  // when true, this is what used to go to `CatchBoundary`
  if (isRouteErrorResponse(error)) {
    return <ErrorBoundaryPage error={error} />;
  }
}

type ErrorBoundaryPageType = {
  error: ErrorResponse;
};

export function ErrorBoundaryPage({ error }: ErrorBoundaryPageType) {
  return (
    <div className="h-dvh px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
      <div className="mx-auto max-w-max">
        <main className="sm:flex">
          <p className="text-4xl font-bold tracking-tight text-orange-600 sm:text-5xl">
            {error.status}
          </p>
          <div className="sm:ml-6">
            <div className="sm:border-l sm:border-gray-600 sm:pl-6">
              <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl">
                {error.statusText}
              </h1>
              <p className="mt-1 text-base text-gray-600 sm:text-xl">
                Please check the URL in the address bar and try again.
              </p>
            </div>
            <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
              <Link
                to="/"
                className="inline-flex items-center rounded-md border border-transparent bg-black px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2"
              >
                Go back home
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
