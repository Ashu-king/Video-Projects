"use client";
import React, { useEffect, useState } from "react";
import scrollHook from "../../../../Hooks/scrollHook";
import Logo from "./Logo";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { ModeToggle } from "@/components/toggleButton";
import { Button } from "@/components/ui/button";
const Navbar = () => {
  const scrolled = scrollHook();
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <div
          className={cn(
            "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-4",
            scrolled && "border-b shadow-sm"
          )}
        >
          <Logo />
          <div className="md:ml-auto flex font-bold md:justify-end justify-between w-full items-center gap-x-2">
            {" "}
            <Button onClick={() => signOut()} variant={"outline"}>
              Sign out
            </Button>
          </div>

          <div className="md:ml-auto flex font-bold md:justify-end justify-end w-full items-center gap-x-2">
            <div className="user gap-5">
              <Image
                src={`${session?.user?.image}`}
                width={40}
                height={40}
                alt="documents"
                className="object-contain rounded-full"
              />
            </div>
            <ModeToggle />
          </div>
        </div>
      </>
    );
  } else
    return (
      <div
        className={cn(
          "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-4",
          scrolled && "border-b shadow-sm"
        )}
      >
        <Logo />
        <div className="md:ml-auto flex font-bold md:justify-end justify-between w-full items-center gap-x-2">
          {" "}
          <Button
            onClick={() => {
              signIn();
            }}
            variant={"outline"}
          >
            Login
          </Button>
        </div>
        <div className="md:ml-auto flex font-bold md:justify-end  justify-end w-full items-center gap-x-2">
          <ModeToggle />
        </div>
      </div>
    );
};

export default Navbar;
