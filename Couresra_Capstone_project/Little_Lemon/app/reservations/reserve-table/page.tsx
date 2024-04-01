import ReserveTableForm from "@/components/reserve-table-form";

export default function ReserveTablePage() {
  return (
    <>
      <section className="w-full">
        <div className="bg-nandor-500">
          <div className="container relative mx-auto md:max-w-screen-lg">
            <div className="md-flex-row flex flex-col items-center gap-6 px-4 py-16 text-center md:items-start md:text-left lg:py-24">
              <div>
                <h1 className="mb-2 text-3xl font-extrabold text-gold-500 md:text-5xl">
                  Reserve a Table
                </h1>
                <p className="mb-6 max-w-sm text-lg font-normal text-nandor-100 dark:text-gray-400">
                  Secure your spot for a delightful dining experience at Little
                  Lemon Restaurant with our easy reservation form.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto flex flex-wrap justify-center gap-8 px-4 py-14 md:max-w-screen-xl">
        <ReserveTableForm />
      </section>
    </>
  );
}
