"use client";
import { signOut } from "next-auth/react"; // ✅ Import from next-auth/react
import { Button } from "@/components/ui/button";
import React from "react";

const Page = () => {
  return (
    <div className="h-screen mt-40">
      <Button
        onClick={async () => {
          await signOut({ callbackUrl: "/" }); // ✅ Redirect after logout
        }}
      >
        Signout
      </Button>
    </div>
  );
};

export default Page;
