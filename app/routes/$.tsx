import type { MetaFunction } from '@remix-run/cloudflare';
import { isRouteErrorResponse, useRouteError } from '@remix-run/react';
import { ErrorBoundaryPage } from '~/root';

// This wildcard catch-all splat-route handles any 404 page

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Page Not Found',
    },
    // Maybe add no-index as a meta tag?
  ];
};

// Here we can also do a lookup for a similar URL and redirect if one is fonud
export const loader = () => {
  throw new Response(null, {
    status: 404,
    statusText: 'Not Found',
  });
};

export default function Splat() {
  // This should never really hit, because if someone hits this route it's because they 404'ed and then the loader will throw and the ErrorBoundary kicks in
  return <></>;
}

export function ErrorBoundary() {
  const error = useRouteError();
  // when true, this is what used to go to `CatchBoundary`
  if (isRouteErrorResponse(error)) {
    // ErrorBoundaryPage we nap from root.tsx
    return <ErrorBoundaryPage error={error} />;
  }
}
