# Authly

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Types of Authentication

- Passwordless authentication
- Social login
- Single sign on SSO
- Multi factor authentication
- Multi tenency
- Feature flags

First, run the development server:

### Kind of Auth I want

- Session based: once you're out you need to log in again
- Uses cookies to store password if accepted
- Provides double clicking before accepting password.
- Password is auth generated
- Save user info for a while

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

 <!-- Google, Facebook, Twitter, GitHub, Email, -->

- Installed the next-auth package npm install next-auth
- Create nextAuth directory - src/app/api/auth/[...nextAuth] -> route.ts

- Create route handler
- Create providers in options.ts
  `import NextAuth from "next-auth"
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
export default NextAuth(authOptions)`
- Add options -> providers
- Add session (if needed), set pages
  `pages: { signIn: "/auth/signin", signOut: "/auth/signOut", error: "/auth/error", verifyRequest: "/auth/verify-request", newUser: "/auth/new-user",}`
- Get your NEXTAUTH_SECRET
  `openssl rand -base64 32`
- Git Bash into project and run `openssl enc -aes-128-cbc -k test -P -md sha1`
- Configure app.ts
  `import { SessionProvider } from "next-auth/react"

export default function App({
Component,
pageProps: { session, ...pageProps },
}) {
return (
<SessionProvider session={session}>
<Component {...pageProps} />
</SessionProvider>
)
}`

- SET UP 1ST PROVIDER (GTIHUB)
- Go to [https://next-auth.js.org/configuration/providers/credentials] and then

- App works
