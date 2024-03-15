"use server";

import * as z from "zod";

import { ResetSchema } from "@/schemas";
import { db } from "../database/db";
import { sendVerificationEmail } from "../mailer";
import { generatePasswordResetToken } from "./generatePasswordResetToken";

const domain = process.env.NEXT_PUBLIC_APP_URL;

export const reset = async (values: z.infer<typeof ResetSchema>) => {
  const validatedFields = ResetSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid emaiL!" };
  }

  const { email } = validatedFields.data;

  const existingUser = await db.user.findUnique({
    where: {
      email,
    }
  });

  if (!existingUser) {
    return { error: "Email not found!" };
  }

  const passwordResetToken = await generatePasswordResetToken(email);
  const token = passwordResetToken.token;

  const resetLink = `${domain}/auth/new-password?token=${token}`

  const emailContent = {
    subject: 'Password reset | From BaatCheet',
    body: `
      <div>
        <h2>Greetings form team BaatCheet 🚀</h2>
        <div style="border: 1px solid #ccc; padding: 10px; background-color: #f8f8f8;">
          <h3>Password reset</h3>
          <p>Click the following link to redirect to password reset page</p>
          <a href="${resetLink}" target="_blank" rel="noopener noreferrer">Link</a>!</p>
        </div>
      </div>
    `,
  }

  await sendVerificationEmail(emailContent, passwordResetToken.email);

  return { success: "Reset email sent!" };
}