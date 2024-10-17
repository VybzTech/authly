"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

const Page = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/content");
    },
  });
  return <div className="flex flex-col gap-4">This is Home Page</div>;
};
export default Page;
