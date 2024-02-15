"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
const Heading = () => {
  const session = useSession();

  return (
    <div>
      <div className="max-w-3xl space-y-4 mt-20">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
          Your Idea, Documents and Plan come togather to{" "}
          <span className="underline">Jotion</span>
        </h1>
        <h3 className="text-base sm:text-xl md:text-2xl italic dark:not-italic font-medium text-gray-300 dark:text-green-50">
          Jotion is better tool to connect workspace,
          <br /> where better,faster work happens.
        </h3>
        {session?.data?.user && (
          <Link href="/documents">
            <Button className=" my-5">
              Enter {session?.data?.user?.name} <ArrowRight />
            </Button>
          </Link>
        )}
        {session?.status == "unauthenticated" && (
          <Link href="http://localhost:3000/api/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2F">
            <Button className=" my-5">
              Enter Jotion <ArrowRight />
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Heading;
