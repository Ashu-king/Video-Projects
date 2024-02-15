"use client";
import { Button } from "@/components/ui/button";
import { Suspense, useEffect, useState } from "react";
import Heading from "./_components/Heading";
import Heroes from "./_components/Heroes";
import Footer from "./_components/Footer";
import { useSession } from "next-auth/react";
import loading from "./loading";
const Home = () => {
  const { data: session } = useSession();

  useEffect(() => {
    // Function to fetch session data
    const fetchSessionData = async (): Promise<void> => {
      try {
        const response = await fetch("/api/auth/postReq", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          // Include any necessary data in the request body
          body: JSON.stringify({
            // Add any user session data you want to send
            // For example:
            name: session?.user?.name,
            email: session?.user?.email,
            // You can add more data as needed
          }),
        });
      } catch (error) {}
    };

    // Call the fetchSessionData function when the component mounts
    fetchSessionData();
  }, [session]);

  // Empty dependency array means this effect runs only once after the component mounts

  return (
    <div>
      <div className="min-h-full flex flex-col">
        <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
          <Suspense>
            <Heading />
            <Heroes />
          </Suspense>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
