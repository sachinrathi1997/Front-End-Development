"use client";

import { reserveTable } from "@/app/actions";
import { SubmitButton } from "@/app/login/submit-button";
import { Cake, CalendarDays, Clock4, Users } from "lucide-react";
import React from "react";
import { useFormState } from "react-dom";

const initialState: { message: string | null } = {
  message: null,
};

export default async function ReserveTableForm() {
  const [state, formAction] = useFormState(reserveTable, initialState);

  return (
    <>
      <form action={formAction} className="w-full max-w-md space-y-8">
        <div>
          <label
            htmlFor="date"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Date
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
              <CalendarDays className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </div>
            <input
              id="date"
              name="date"
              type="date"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-10 text-sm text-gray-900 shadow-sm focus:border-nandor-500 focus:ring-nandor-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light dark:focus:border-nandor-500 dark:focus:ring-nandor-500"
              placeholder="Choose date"
              required
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="time"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Time
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
              <Clock4 className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </div>
            <input
              id="time"
              name="time"
              type="time"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-10 text-sm text-gray-900 shadow-sm focus:border-nandor-500 focus:ring-nandor-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light dark:focus:border-nandor-500 dark:focus:ring-nandor-500"
              placeholder="Choose time"
              required
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="guestsNumber"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Number of guests
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
              <Users className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </div>
            <input
              id="guestsNumber"
              name="guestsNumber"
              type="number"
              min={1}
              max={10}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-10 text-sm text-gray-900 shadow-sm focus:border-nandor-500 focus:ring-nandor-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light dark:focus:border-nandor-500 dark:focus:ring-nandor-500"
              placeholder="For how many?"
              required
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="occasion"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Occasion
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
              <Cake className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </div>
            <select
              id="occasion"
              name="occasion"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-10 text-sm text-gray-900 shadow-sm focus:border-nandor-500 focus:ring-nandor-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light dark:focus:border-nandor-500 dark:focus:ring-nandor-500"
              required
            >
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Business dinner</option>
              <option>Family gathering</option>
              <option>Date night</option>
              <option>Celebration</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <SubmitButton
          className="mb-2 inline-flex rounded-lg bg-gold-500 px-5 py-2.5 text-sm font-medium text-black hover:bg-gold-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-gold-300/50"
          pendingText="Loading..."
        >
          Make your reservation
        </SubmitButton>

        {state?.message && (
          <p
            role="status"
            className="mt-4 rounded-lg bg-apricot-100 p-4 text-center text-sm text-apricot-950"
          >
            {state.message}
          </p>
        )}
      </form>
    </>
  );
}
