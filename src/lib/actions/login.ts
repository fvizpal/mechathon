'use server'

import { LoginSchema } from "@/schemas";
import { z } from "zod";
import { db } from "../database/db";

import { AuthError } from "next-auth";
import { signIn } from "../../../auth";


export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { email, password } = validatedFields.data;

  const existingUser = await db.user.findUnique({
    where: {
      email,
    }
  })

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: "Email does not exist!" }
  }

  try {
    await signIn("credentials", {
      email,
      password,
    })
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid Credentials" }
        default:
          return { error: "Something went wrong! Try Again!" }
      }
    }

    throw error;
  }
}