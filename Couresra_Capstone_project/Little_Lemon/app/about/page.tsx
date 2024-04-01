import MemberCard from "@/components/member-card";
import { staff } from "@/conts/staff";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <section className="w-full">
        <div className="bg-nandor-500">
          <div className="container relative mx-auto md:max-w-screen-lg">
            <div className="md-flex-row flex flex-col items-center gap-6 px-4 py-16 text-center md:items-start md:text-left lg:py-24">
              <div>
                <h1 className="mb-2 text-3xl font-extrabold text-gold-500 md:text-5xl">
                  Meet the Little Lemon!
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto md:max-w-screen-xl">
        <div className="mx-auto max-w-screen-xl items-center gap-16 px-4 py-8 lg:grid lg:grid-cols-2 lg:px-6 lg:py-16">
          <div className="font-light text-gray-500 dark:text-gray-400 sm:text-lg">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Crafting Culinary Delights in Vancouver
            </h2>
            <p className="mb-4">
              At Little Lemon, we believe in the power of fresh, locally sourced
              ingredients to elevate every dish we create. Our team of talented
              chefs meticulously crafts each plate, infusing it with creativity
              and a commitment to quality that sets us apart. Whether you're
              joining us for a casual brunch, a lively dinner with friends, or a
              special celebration, every visit to Little Lemon promises an
              unforgettable culinary journey.
            </p>
            <p>
              Join us at Little Lemon and indulge in a dining experience that
              tantalizes the taste buds and leaves a lasting impression.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="flex items-center justify-center">
              <Image
                className="h-full min-h-[26rem] rounded-lg object-cover"
                src="/assets/restaurant.webp"
                alt="Restaurant"
                width={284}
                height={456}
              />
            </div>

            <div className="flex items-center justify-center">
              <Image
                className="mt-4 h-full min-h-[26rem] w-full rounded-lg object-cover lg:mt-10"
                src="/assets/restaurant-2.webp"
                alt="Restaurant"
                width={284}
                height={456}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-nandor-100">
        <div className="container mx-auto flex flex-wrap justify-center gap-8 px-4 py-14 md:max-w-screen-xl">
          <div className="mx-auto w-full px-4 py-8 text-center lg:px-6 lg:py-16">
            <dl className="mx-auto grid max-w-screen-md gap-8 text-apricot-900 dark:text-white sm:grid-cols-3">
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl font-extrabold md:text-4xl">
                  73M+
                </dt>
                <dd className="font-light text-apricot-500 dark:text-apricot-400">
                  guests
                </dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl font-extrabold md:text-4xl">
                  1B+
                </dt>
                <dd className="font-light text-apricot-500 dark:text-apricot-400">
                  meals
                </dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl font-extrabold md:text-4xl">
                  4M+
                </dt>
                <dd className="font-light text-apricot-500 dark:text-apricot-400">
                  reservations
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="container mx-auto md:max-w-screen-xl">
        <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-6 lg:py-16">
          <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Our staff
            </h2>
            <p className="font-light text-gray-500 dark:text-gray-400 sm:text-xl">
              Get to know the exceptional team at Little Lemon
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-16">
            {staff.map((member, index) => (
              <MemberCard member={member} key={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
