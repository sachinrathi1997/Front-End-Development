"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

/**
 * Login
 * @param formData
 */
export async function login(formData: FormData) {
  const supabase = createClient();

  const schema = z.object({
    email: z.string(),
    password: z.string(),
  });

  const data = schema.parse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  const { email, password } = data;

  const { error, data: supData } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return redirect("/login?message=Could not authenticate user");
  }

  return redirect("/reservations");
}

/**
 * Sign Up
 * @param formData
 */
export async function signUp(formData: FormData) {
  const supabase = createClient();

  const schema = z.object({
    email: z.string(),
    password: z.string(),
  });

  const data = schema.parse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  const { email, password } = data;

  const origin = headers().get("origin");

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  });

  if (error) {
    console.log("error", error);
    return redirect("/login?message=Could not authenticate user");
  }

  return redirect("/login?message=Check email to continue sign in process");
}

/**
 * Sign Out
 */
export async function signOut() {
  const supabase = createClient();

  await supabase.auth.signOut();

  return redirect("/login");
}

/**
 * ReserveTable
 * @param prevState
 * @param formData
 */
export async function reserveTable(prevState: any, formData: FormData) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const schema = z.object({
    date: z.string(),
    time: z.string(),
    guestsNumber: z.string(),
    occasion: z.string(),
  });

  const data = schema.parse({
    date: formData.get("date"),
    time: formData.get("time"),
    guestsNumber: formData.get("guestsNumber"),
    occasion: formData.get("occasion"),
  });

  const { date, time, guestsNumber, occasion } = data;

  if (!user) return;

  const { error } = await supabase.from("reservations").insert({
    user_id: user.id,
    date,
    time,
    guests_number: Number(guestsNumber),
    occasion,
  });

  if (error) {
    return { message: "Failed to reserve a table." };
  }

  revalidatePath("/");
  redirect("/reservations");

  return { message: "Your table has been successfully reserved." };
}