//@ts-nocheck
import NextAuth from 'next-auth'
import GoogleProvider from "next-auth/providers/google"
import { NextAuthOptions } from "next-auth";

const authOptions: NextAuthOptions = {
  providers:[
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
  ],
  pages:{
    signIn:'/login'
  },
  secret:process.env.SECRET
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}