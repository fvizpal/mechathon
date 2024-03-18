'use server'

import { v4 as uuidv4 } from "uuid";
import { db } from "../database/db";

export const generateVerificationToken = async (email: string) => {
  const token = uuidv4();
  const expires = new Date(new Date().getTime() + 3600 * 1000) // 1hr

  const existingToken = await db.verificationToken.findFirst({
    where: {
      email,
    }
  });

  if (existingToken) {
    await db.verificationToken.delete({
      where: {
        id: existingToken.id,
      }
    });
  }

  const verificationToken = db.verificationToken.create({
    data: {
      email,
      token,
      expires
    }
  });

  return verificationToken;
}