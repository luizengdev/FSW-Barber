import { PrismaAdapter } from "@auth/prisma-adapter"
import { AuthOptions, Session, User } from "next-auth"
import { db } from "./prisma"
import { Adapter } from "next-auth/adapters"
import GoogleProvider from "next-auth/providers/google"

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(db) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async session({ session, user }: { session: Session; user: User }) {
      session.user = {
        ...session.user,
        name: user.name,
        email: user.email,
        image: user.image,
      }
      return session
    },
  },
  secret: process.env.NEXT_AUTH_SECRET,
}
