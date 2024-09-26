import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth from "next-auth"
import google from "next-auth/providers/google"
import { db } from "./app/_lib/prisma"
import { Adapter } from "next-auth/adapters"

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(db) as Adapter,
  providers: [
    google({
      clientId: process.env.AUTH_GOOGLE_ID as string,
      clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
    }),
  ],
})
