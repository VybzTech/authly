import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";

export const options: NextAuthOptions = {
  // session
  // pages
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "Dharvo S.",
        },
        password: {
          label: "Password:",
          type: "text",
          placeholder: "asdfghjkliougfdsfcvb",
        },
      },
      async authorize(credentials) {
        // This is where user information can be retrieved
        // to verify with credentials
        // Docs: https://next-auth.js.org/configuration/providers/credentials
        const user = { id: "7", name: "Dharvo", password: "nextauth" };
        credentials?.username === user?.name &&
        credentials?.password === user?.password
          ? user
          : null;

        // if (
        //   credentials?.username === user?.name &&
        //   credentials?.password === user?.password
        // ) {
        //   return user;
        // } else {
        //   return null;
        // }
      },
    }),
    // OAuth
  ],
};
