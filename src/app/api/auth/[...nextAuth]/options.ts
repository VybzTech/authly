import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
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
        // async authorize(credentials, req) => Promise<User>
        // This is where user information can be retrieved to verify with credentials
        // Docs: https://next-auth.js.org/configuration/providers/credentials
        const user = { id: "7", name: "Dharvo", password: "nextauth" };
        credentials?.username === user?.name &&
        credentials?.password === user?.password
          ? user
          : null;

        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        // const res = await fetch("/your/endpoint", {
        //   method: 'POST',
        //   body: JSON.stringify(credentials),
        //   headers: { "Content-Type": "application/json" }
        // })
        // const user = await res.json()
      },
    }),
    // OAuth
    // session
    // pages
  ],
};
