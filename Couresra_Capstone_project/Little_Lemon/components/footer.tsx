"use client";

import DesktopMenu from "@/components/desktop-menu";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="container mx-auto flex w-full p-4 md:max-w-screen-xl">
      <div className="mx-auto w-full rounded-lg bg-mine-50 p-8 shadow dark:bg-gray-900 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="/"
            className="mb-4 flex items-center space-x-3 sm:mb-0 rtl:space-x-reverse"
          >
            <Image
              src="/assets/logo.svg"
              className="h-10"
              alt="Little Lemon Logo"
              width={147}
              height={40}
            />
          </Link>
          <DesktopMenu isInFooter />
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          © {year}{" "}
          <a href="/" className="hover:underline">
            Little Lemon™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
