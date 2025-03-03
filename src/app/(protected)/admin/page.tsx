"use client";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ListIcon, MailIcon } from "lucide-react"; // Import icons

const Page = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-4 col-span-12">
      <h1 className="text-4xl font-bold text-center mb-8">Admin Dashboard</h1>

      <div className="flex gap-16 ">
        {/* Adventure Enquiries Card */}
        <Link href="/admin/adventure-enquiry" className="group">
          <div className="bg-card p-12 rounded-lg">
            <ListIcon className="group-hover:scale-105 text-primary transition-all duration-300 ease-in-out w-20 h-20 md:w-24 md:h-24" />
          </div>
        </Link>
        <Link href="/admin/contact-list" className="group">
          <div className="bg-card p-12 rounded-lg">
            <MailIcon className="group-hover:scale-105 text-primary transition-all duration-300 ease-in-out w-20 h-20 md:w-24 md:h-24" />
          </div>
        </Link>
      </div>

      {/* Sign Out Button */}
      <div className="flex justify-center mt-12">
        <Button
          onClick={async () => {
            await signOut({ callbackUrl: "/" });
          }}
          variant="outline"
          className="w-48"
        >
          Sign Out
        </Button>
      </div>
    </section>
  );
};

export default Page;
