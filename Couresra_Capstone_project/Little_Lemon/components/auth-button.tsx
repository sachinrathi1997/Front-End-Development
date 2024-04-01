import { signOut } from "@/app/actions";
import UserMenu from "@/components/user-menu";
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

export default async function AuthButton() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user ? (
    <UserMenu user={user} signOut={signOut} />
  ) : (
    <Link
      href="/login"
      className="block rounded bg-nandor-500 px-3 py-2 text-white md:px-4 md:py-1 md:dark:text-nandor-500"
    >
      Login
    </Link>
  );
}
