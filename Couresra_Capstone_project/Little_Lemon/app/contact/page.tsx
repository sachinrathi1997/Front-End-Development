import { AtSign, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <section className="w-full">
        <div className="bg-nandor-500">
          <div className="container relative mx-auto md:max-w-screen-lg">
            <div className="md-flex-row flex flex-col items-center gap-6 px-4 py-16 text-center md:items-start md:text-left lg:py-24">
              <div>
                <h1 className="mb-2 text-3xl font-extrabold text-gold-500 md:text-5xl">
                  Let us know
                </h1>
                <h2 className="mb-2 text-4xl font-bold text-nandor-50">
                  We're here to serve you.
                </h2>
                <p className="mb-6 max-w-sm text-lg font-normal text-nandor-100 dark:text-gray-400">
                  Experiencing a hiccup with your order? <br />
                  Have feedback on our latest dish? <br />
                  Curious about our chef's specials?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto flex flex-wrap justify-center gap-8 px-4 py-14 md:max-w-screen-xl">
        <div className="mx-auto w-full max-w-screen-md px-4 py-8 lg:py-16">
          <form action="#" className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <div className="relative max-w-sm">
                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
                  <AtSign className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                </div>
                <input
                  id="email"
                  type="text"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-10 text-sm text-gray-900 shadow-sm focus:border-nandor-500 focus:ring-nandor-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light dark:focus:border-nandor-500 dark:focus:ring-nandor-500"
                  placeholder="name@little-lemon.com"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <div className="relative max-w-sm">
                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
                  <Mail className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                </div>
                <input
                  id="subject"
                  type="text"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-10 text-sm text-gray-900 shadow-sm focus:border-nandor-500 focus:ring-nandor-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light dark:focus:border-nandor-500 dark:focus:ring-nandor-500"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows={6}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-nandor-500 focus:ring-nandor-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-nandor-500 dark:focus:ring-nandor-500"
                placeholder="Leave a comment..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="mb-2 rounded-lg bg-gold-500 px-5 py-2.5 text-sm font-medium text-black hover:bg-gold-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-gold-300/50"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
