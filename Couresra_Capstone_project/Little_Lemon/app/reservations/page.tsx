import { createClient } from "@/lib/supabase/server";
import { formatDateTime } from "@/utils/format-date-time";
import { CalendarClock } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function ReservationsPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  const { data: reservations } = await supabase
    .from("reservations")
    .select()
    .order("date", { ascending: false })
    .eq("user_id", user.id);

  return (
    <>
      <section className="w-full">
        <div className="bg-nandor-500">
          <div className="container relative mx-auto md:max-w-screen-lg">
            <div className="md-flex-row flex flex-col items-center gap-6 px-4 py-16 text-center md:items-start md:text-left lg:py-24">
              <div>
                <h1 className="mb-2 text-3xl font-extrabold text-gold-500 md:text-5xl">
                  Reservations
                </h1>
                <p className="mb-6 max-w-sm text-lg font-normal text-nandor-100 dark:text-gray-400">
                  You can review and manage your reserved seats, ensuring a
                  seamless and delightful dining experience tailored just for
                  you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {!!reservations && reservations.length > 0 ? (
        <>
          <section className="w-full bg-nandor-50">
            <div className="container mx-auto flex flex-wrap justify-center gap-8 px-4 py-14 md:max-w-screen-xl">
              <ol className="relative border-s border-gray-200 bg-nandor-50 dark:border-gray-700">
                {reservations.map((reservation, index) => {
                  const formattedDate = formatDateTime(
                    new Date(`${reservation.date} ${reservation.time}`),
                  );

                  return (
                    <li className="mb-10 ms-8" key={reservation.id}>
                      <span className="absolute -start-6 -mt-1.5 flex h-10 w-10 items-center justify-center rounded-full bg-nandor-100 ring-8 ring-white dark:bg-nandor-900 dark:ring-gray-900">
                        <CalendarClock className="h-6 w-6 text-nandor-800 dark:text-nandor-300" />
                      </span>
                      <h3 className="mb-1 flex items-center text-xl font-semibold text-gray-900 dark:text-white">
                        {reservation.occasion}
                        {index === 0 && (
                          <span className="me-2 ms-3 rounded bg-apricot-100 px-2.5 py-0.5 text-sm font-medium text-apricot-800 dark:bg-nandor-900 dark:text-nandor-300">
                            Latest
                          </span>
                        )}
                      </h3>
                      <p className="mb-1 text-base font-normal text-gray-500 dark:text-gray-400">
                        {formattedDate}
                      </p>
                      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        Table for {reservation.guests_number}
                      </p>
                    </li>
                  );
                })}
              </ol>
            </div>
          </section>
          <section className="container mx-auto flex flex-wrap justify-center gap-8 px-4 py-14 md:max-w-screen-xl">
            <div className="flex max-w-sm flex-col items-center justify-center rounded-lg border border-gray-200 bg-nandor-50 p-6 text-center shadow dark:border-gray-700 dark:bg-gray-800">
              <CalendarClock className="mb-3 h-10 w-10 text-gray-500 dark:text-gray-400" />
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Need More Tables?
              </h5>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                Secure your spot now by clicking the button below to make a
                reservation.
              </p>
              <Link
                href="/reservations/reserve-table"
                type="button"
                className="mt-3 rounded-lg bg-gold-500 px-5 py-2.5 text-sm font-medium text-black hover:bg-gold-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-gold-300/50"
              >
                Reserve a Table
              </Link>
            </div>
          </section>
        </>
      ) : (
        <section className="container mx-auto flex flex-wrap justify-center gap-8 px-4 py-14 md:max-w-screen-xl">
          <div className="flex max-w-sm flex-col items-center justify-center rounded-lg border border-gray-200 bg-nandor-50 p-6 text-center shadow dark:border-gray-700 dark:bg-gray-800">
            <CalendarClock className="mb-3 h-10 w-10 text-gray-500 dark:text-gray-400" />
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              No reservations yet
            </h5>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              You can make a reservation by clicking the button below.
            </p>
            <Link
              href="/reservations/reserve-table"
              type="button"
              className="mt-3 rounded-lg bg-gold-500 px-5 py-2.5 text-sm font-medium text-black hover:bg-gold-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-gold-300/50"
            >
              Reserve a Table
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
