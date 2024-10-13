import NextAuth from "next-auth/next";
import { options } from "./options";

const handler = NextAuth(options);


export {handler as GET, handler as POST };


/* 

import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)fff

*/ 