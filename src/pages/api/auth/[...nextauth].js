import clientPromise from '@/lib/db'
import { MongoDBAdapter } from '@auth/mongodb-adapter'
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
  providers: [
    // OAuth authentication providers...
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  debug: true,
  callbacks: {
    redirect: async (url, baseUrl) => {
      // Ensuring proper redirect
      return baseUrl;
    }
  }
})