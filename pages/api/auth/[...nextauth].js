import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "./lib/mongodb"
import connectDB from "../../../config/db";
import User from "../../../model/User"
import bcrypt from "bcryptjs"
export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        email: { label: "Email", type: "text", placeholder: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        console.log(credentials)
        await connectDB()

        if(!credentials.email || !credentials.password) {
          throw new Error("email and password field is required")
        }

        const user = await User.find({email: credentials.email})
        if(!user) {
          throw new Error("email not found")
        }

        const isPassword = await bcrypt.compare(credentials.password, user[0].password)

        if(!isPassword) {
          throw new Error("password do not match")
        }
        return user[0]
      }
    }),
  ],
  secret: process.env.NEXT_PUBLIC_SECRET_KEY,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, account, profile }) {
      return token
    },

    async session({ session, token, user }) {
      session.user = token;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export default handler;
