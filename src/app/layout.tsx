import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "./context/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Authly",
  description: "Authly is Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={`min-h-screen p-12 px-16 ${inter.className}`}>
          {/* <body> */}
          <h1 className="text-5xl font-bold text-gray-800">Authly</h1>
          {children}
        </body>
        {/* // provider is necessary for only sclient parts that need the session */}
      </AuthProvider>
    </html>
  );
}
