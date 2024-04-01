import AuthButton from "@/components/auth-button";
import DesktopMenu from "@/components/desktop-menu";
import MobileMenu from "@/components/mobile-menu";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="min-h-[5rem]">
      <nav className="fixed top-0 z-20 w-full border-gray-200 bg-white dark:bg-gray-900">
        <div className="container mx-auto flex flex-wrap items-center justify-between p-4 md:max-w-screen-xl">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/assets/logo.svg"
              className="h-12"
              alt="Little Lemon Logo"
              width={178}
              height={80}
            />
          </Link>

          <div className="flex items-center space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
            <AuthButton />
            <MobileMenu />
          </div>
          <DesktopMenu />
        </div>
      </nav>
    </header>
  );
}
