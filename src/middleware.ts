import { authMiddleware } from "@kinde-oss/kinde-auth-nextjs/server";

// Without a defined matcher, this one line applies next-auth to the entire project

export const config = {
  matcher: [
    /*
     *Math all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * *
     *
     */
    //    "/((?!api|_next/static|_next/image|favicon.ico).*)",
    "/matcher",
    "/dashboard",
  ],
};

export { default } from "next-auth/middleware";
// export default   authMiddleware;
