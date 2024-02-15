"use client";
import Image from "next/image";
import React from "react";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { toast } from "sonner";

const DocumentPage = () => {
  const { data: session } = useSession();
  const handleCreate = async (e: any): Promise<void> => {
    e.preventDefault();
    console.log(e);
    try {
      const response = await fetch("/api/createDocument", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // Include any necessary data in the request body
        body: JSON.stringify({
          // Add any user session data you want to send
          // For example:
          title: `untitled`,
          userId: 1,
          isArchived: Boolean(0),
          isPublished: Boolean(0),
          // You can add more data as needed
        }),
      });
      const doc = await response.json();
      if (doc) {
        console.log(doc);
        toast(doc);
      }
    } catch (error) {
      throw new Error("some thing went wrong");
      console.log(error);
    }
  };

  return (
    <>
      <div className="h-full flex flex-col items-center my-10 justify-center space-y-4">
        <Image
          src="/empty.png"
          height="300"
          width="300"
          alt="empty"
          className="dark:hidden"
        />

        <Image
          src="/empty-dark.png"
          height="300"
          width="300"
          alt="empty"
          className=" hidden dark:block"
        />
        <h2>welcome to {session?.user?.name} &apos;s Jotion</h2>
        <Button onClick={handleCreate}>
          <PlusCircle className="h4 2-4 m4-2 mx-2" /> Create a note
        </Button>
      </div>
    </>
  );
};

export default DocumentPage;
