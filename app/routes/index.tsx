export default function Index() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-black/50 text-white min-h-screen-ios h-screen-ios">
      <div>
        <h1 className="main-headline m-4 sm:m-0">houmark.com</h1>
        <p className="m-4 mt-2 rounded-2xl bg-black/40 p-6 text-center text-3xl sm:m-0">
          New site underway!{' '}
          <a
            href="mailto:info@houmark.com"
            className="underline underline-offset-4 hover:no-underline"
          >
            Get in touch
          </a>
          .
        </p>
      </div>
    </div>
  );
}
