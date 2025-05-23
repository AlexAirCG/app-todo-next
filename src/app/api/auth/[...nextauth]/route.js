import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  // Configure one or more authentication providers
  providers: [
    // ...add more providers here
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
      // server: {
      //   host: process.env.EMAIL_SERVER_HOST,
      //   port: process.env.EMAIL_SERVER_PORT,
      //   auth: {
      //     user: process.env.EMAIL_SERVER_USER,
      //     pass: process.env.EMAIL_SERVER_PASSWORD,
      //   },
      // },
      // from: process.env.EMAIL_FROM,
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
