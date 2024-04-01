import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const origin = requestUrl.origin;

  const supabase = createClient();
  await supabase.auth.signOut();

  // URL to redirect to after sign up process completes
  return NextResponse.redirect(`${origin}/login`, {
    status: 301,
  });
}
