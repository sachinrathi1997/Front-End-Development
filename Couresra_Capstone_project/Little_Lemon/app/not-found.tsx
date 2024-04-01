import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mt-60">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl font-extrabold tracking-tight text-nandor-600 dark:text-nandor-500 lg:text-9xl">
            404
          </h1>
          <p className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
            Something's missing.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.
          </p>
          <Link
            href="/"
            type="button"
            className="mb-2 rounded-lg bg-gold-500 px-5 py-2.5 text-sm font-medium text-black hover:bg-gold-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-gold-300/50"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
}
