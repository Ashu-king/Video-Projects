"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { Navigation } from "./_components/navigation";
const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { data: session } = useSession();
  if (!session) {
    return redirect("/");
  }
  return (
    <>
      <div className="h-full flex dark:bg[#1F1F1F]">
        <Navigation />
        <main className=" flex-1 h-full overflow-y-auto">{children}</main>
      </div>
    </>
  );
};

export default MainLayout;
