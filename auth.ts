import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/lib/database/db";

import authConfig from "./auth.config";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  events: { // for side-effects // is OAuth then auto set emailverified
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() }
      })
    }
  },
  callbacks: {
    async signIn({ user, account }) {
      // allow OAuth without email verification
      if (account?.provider !== 'credentials') return true;

      const existingUser = await db.user.findUnique({
        where: {
          id: user.id,
        }
      });

      if (!existingUser?.emailVerified) return false;

      return true;
    },
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (session.user) {
        session.user.name = token.name;
        session.user.email = token.email;
      }

      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await db.user.findUnique({ where: { id: token.sub } });

      if (!existingUser) return token;

      token.name = existingUser.name;
      token.email = existingUser.email;

      return token;
    }
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig
})