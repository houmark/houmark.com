function getHeaders(requestOrHeaders: Request | Headers): Headers {
  if (requestOrHeaders instanceof Request) {
    return requestOrHeaders.headers;
  }

  return requestOrHeaders;
}

export function webpSupport(requestOrHeaders: Request | Headers): boolean {
  const headers = getHeaders(requestOrHeaders);
  const accept = headers.get('accept');
  const userAgent = headers.get('user-agent');
  return !!(
    accept?.includes('image/webp') ||
    (userAgent?.includes('Safari') && userAgent?.includes('Version/1')) ||
    (userAgent?.includes('Safari') && userAgent?.includes('Version/2'))
  );
}
