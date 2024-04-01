import { Food } from "@/conts/food";
import { Truck } from "lucide-react";
import Image from "next/image";

export default async function FoodCard({ food }: { food: Food }) {
  const { imgSrc, title, description, price } = food;

  return (
    <div className="flex max-w-sm flex-col rounded-lg border border-gray-200 bg-mine-50 shadow dark:border-gray-600 dark:bg-gray-800">
      <div className="flex max-h-64 items-center justify-center overflow-hidden rounded-t-lg">
        <Image
          className="w-full object-cover"
          src={imgSrc}
          alt={title}
          width={382}
          height={40}
        />
      </div>
      <div className="flex flex-1 flex-col items-start justify-between gap-8 p-5">
        <div className="flex w-full justify-between">
          <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h3>
          <span className="text-g text-xl text-apricot-300">${price}</span>
        </div>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-lg bg-gold-500 px-5 py-2.5 text-sm font-medium text-black hover:bg-gold-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-gold-300/50 "
        >
          Order a delivery
          <Truck />
        </a>
      </div>
    </div>
  );
}
