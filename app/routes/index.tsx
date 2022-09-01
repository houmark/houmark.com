export default function Index() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-black/50 text-white">
      <div>
        <h1 className="main-headline">houmark.com</h1>
        <p className="mt-2 rounded-2xl bg-black/40 p-6 text-center text-3xl">
          new site underway!{' '}
          <a
            href="mailto:info@houmark.com"
            className="underline underline-offset-4 hover:no-underline"
          >
            get in touch
          </a>
          .
        </p>
      </div>
    </div>
  );
}
