'use client' 

import { useSession } from "next-auth/react";
import React from "react";

const page = () => {
  // const {data:session} = useSession({required:true,onUnauthenticated() {
  //     required: true,
  //     onUnauthenticated(){
  //       red
  //     }
  // },})
  return <div className="flex flex-col gap-4">This is Home Page</div>;
}; 
export default page;
