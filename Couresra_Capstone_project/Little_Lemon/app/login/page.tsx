import { login, signUp } from "@/app/actions";
import { SubmitButton } from "@/app/login/submit-button";
import { Lock, Mail } from "lucide-react";
import React from "react";

export default function LoginPage({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  return (
    <div className="flex w-full flex-1 flex-col justify-center gap-2 px-8 sm:max-w-md">
      <form className="animate-in text-foreground flex w-full flex-col justify-center gap-2 rounded-lg bg-mine-50 p-8 shadow">
        <label
          htmlFor="email-input"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Email
        </label>
        <div className="relative mb-4">
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
            <Mail className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          </div>
          <input
            id="email-input"
            name="email"
            type="email"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-10 text-sm text-gray-900 focus:border-nandor-500 focus:ring-nandor-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-nandor-500 dark:focus:ring-nandor-500"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <label
          htmlFor="password-input"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Password
        </label>
        <div className="mb-6 flex">
          <span className="rounded-e-0 inline-flex items-center rounded-s-md border border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400">
            <Lock className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          </span>
          <input
            id="password-input"
            name="password"
            type="password"
            className="block w-full min-w-0 flex-1 rounded-none rounded-e-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-nandor-500 focus:ring-nandor-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-nandor-500 dark:focus:ring-nandor-500"
            placeholder="••••••••"
            required
          />
        </div>
        <div className="flex w-full justify-between gap-4">
          <SubmitButton
            formAction={login}
            className="mb-2 me-2 w-full rounded-lg bg-nandor-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-nandor-800 focus:outline-none focus:ring-4 focus:ring-nandor-300 dark:bg-nandor-600 dark:hover:bg-nandor-700 dark:focus:ring-nandor-800"
            pendingText="Logging in..."
          >
            Login
          </SubmitButton>

          <SubmitButton
            formAction={signUp}
            className="mb-2 me-2 w-full rounded-lg border border-nandor-700 px-5 py-2.5 text-center text-sm font-medium text-nandor-700 hover:bg-nandor-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-nandor-300 dark:border-nandor-500 dark:text-nandor-500 dark:hover:bg-nandor-500 dark:hover:text-white dark:focus:ring-nandor-800"
            pendingText="Signing Up..."
          >
            Sign Up
          </SubmitButton>
        </div>

        {searchParams?.message && (
          <p
            role="status"
            className="mt-4 rounded-lg bg-apricot-100 p-4 text-center text-sm text-apricot-950"
          >
            {searchParams.message}
          </p>
        )}
      </form>
    </div>
  );
}
