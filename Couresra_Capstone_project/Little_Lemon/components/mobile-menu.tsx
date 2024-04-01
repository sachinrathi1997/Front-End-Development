"use client";

import { navLinks } from "@/conts/nav-link";
import * as Popover from "@radix-ui/react-popover";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function MobileMenu() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const handleTrigger = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Popover.Root open={isOpen}>
        <Popover.Trigger onClick={handleTrigger}>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </Popover.Trigger>
        <Popover.Anchor />
        <Popover.Portal>
          <Popover.Content
            sideOffset={24}
            onInteractOutside={handleClose}
            onEscapeKeyDown={handleClose}
          >
            <div className="w-screen items-center justify-between px-4">
              <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:hidden">
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
                        onClick={handleTrigger}
                      >
                        {link.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </>
  );
}
