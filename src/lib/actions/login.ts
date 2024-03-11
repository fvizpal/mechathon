'use server'

import { LoginSchema } from "@/schemas";
import { z } from "zod";
import { db } from "../database/db";

import { AuthError } from "next-auth";
import { signIn } from "../../../auth";
import { generateVerificationToken } from "./generateVerificationToken";
import { sendVerificationEmail } from "../mailer";

const domain = process.env.NEXT_PUBLIC_APP_URL;


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

  if (!existingUser.emailVerified) {
    const verificationToken = await generateVerificationToken(
      existingUser.email,
    );

    const token = verificationToken.token;
    const confirmLink = `${domain}/auth/new-verification?token=${token}`;

    const emailContent = {
      subject: 'Email verification | From BaatCheet',
      body: `
        <div>
          <h2>Welcome to BaatCheet 🚀</h2>
          <div style="border: 1px solid #ccc; padding: 10px; background-color: #f8f8f8;">
            <h3>Email Verification</h3>
            <p>Verify your email to successfully login. Click on the following link</p>
            <a href="${confirmLink}" target="_blank" rel="noopener noreferrer">Link</a>!</p>
          </div>
        </div>
      `,
    }

    await sendVerificationEmail(emailContent, verificationToken.email);

    return { success: "Confirmation email sent!" };
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