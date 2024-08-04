"use client";

import { SignOutButton } from "@clerk/nextjs";
import { useToast } from "../ui/use-toast";
import Link from "next/link";

function SingOutLink() {
  const { toast } = useToast();

  const handleLogout = () => {
    toast({ description: "Logout Successful" });
  };
  return (
    <SignOutButton redirectUrl='/'>
      <Link
        href='/'
        className='capitalize w-full text-left'
        onClick={handleLogout}>
        logout
      </Link>
    </SignOutButton>
  );
}

export default SingOutLink;
