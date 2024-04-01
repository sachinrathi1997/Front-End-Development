"use client";

import { navLinks } from "@/conts/nav-link";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DesktopMenu({ isInFooter }: { isInFooter?: boolean }) {
  const pathname = usePathname();

  return isInFooter ? (
    <ul className="mb-6 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mb-0">
      {navLinks.map((link, index) => (
        <li key={index}>
          <Link href={link.url} className="me-4 hover:underline md:me-6">
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  ) : (
    <div className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto">
      <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900 rtl:space-x-reverse">
        {navLinks.map((link, index) => {
          const isActive =
            link.url === pathname ||
            (link.url.length > 2 && pathname.startsWith(link.url));

          const linkStyles = isActive
            ? "bg-nandor-100 text-nandor-950 md:px-4 md:dark:text-nandor-500"
            : "text-nandor-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:px-0 md:hover:bg-transparent md:hover:text-nandor-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500";

          return (
            <li key={index}>
              <Link
                href={link.url}
                className={`block rounded px-3 py-2 md:py-1 ${linkStyles}`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
