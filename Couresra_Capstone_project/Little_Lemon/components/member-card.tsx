import { Staff } from "@/conts/staff";
import Image from "next/image";

export default async function MemberCard({ member }: { member: Staff }) {
  const { imgSrc, name, position } = member;

  return (
    <div className="min-w-60 text-center text-gray-500 dark:text-gray-400">
      <Image
        className="mx-auto mb-4 h-36 w-36 rounded-full object-cover"
        src={imgSrc}
        alt={name}
        width={144}
        height={144}
      />
      <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {name}
      </h3>
      <p>{position}</p>
    </div>
  );
}
