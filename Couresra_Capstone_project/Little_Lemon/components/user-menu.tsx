"use client";

import * as Popover from "@radix-ui/react-popover";
import type { User } from "@supabase/auth-js";
import { useState } from "react";

export default function UserMenu({
  user,
  signOut,
}: {
  user: User;
  signOut: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleTrigger = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <Popover.Root open={isOpen}>
        <Popover.Trigger onClick={handleTrigger} asChild>
          <button
            type="button"
            className="flex rounded-full border border-mine-200 text-sm focus:ring-4 focus:ring-mine-300 dark:focus:ring-mine-600 md:me-0"
            aria-expanded="false"
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="h-8 w-8 rounded-full"
              src="/assets/user.avif"
              alt="user photo"
            />
          </button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content sideOffset={5}>
            <div className="z-50 my-4 list-none divide-y divide-mine-100 rounded-lg bg-white text-base shadow dark:divide-mine-600 dark:bg-mine-700">
              <div className="px-4 py-3">
                <span className="block truncate text-sm text-mine-500 dark:text-mine-400">
                  {user.email}
                </span>
              </div>
              <form action={signOut}>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <button className="inline-flex w-full px-4 py-2 text-sm text-mine-700 hover:bg-mine-100 dark:text-mine-200 dark:hover:bg-mine-600 dark:hover:text-white">
                      Logout
                    </button>
                  </li>
                </ul>
              </form>
            </div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </>
  );
}
