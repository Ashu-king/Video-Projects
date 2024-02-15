"use client";
import { ChevronsLeftRight } from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
export const UserItem = () => {
  const { data: session } = useSession();
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div
            className="flex items-center text-sm p-r w-full hover:bg-primary/5"
            role="button"
          >
            <div className="gap-x-2 flex items-center max-w-[150px] my-2 ">
              <Avatar className="h-10 w-10">
                <AvatarImage src={`${session?.user?.image}`} />
              </Avatar>
              <span className=" font-serif text-start text-base font-medium line-clamp-1">
                {session?.user?.name}&apos;s Jotion
              </span>
            </div>
            <ChevronsLeftRight className="rotate-90 ml-2 text-muted-foreground h-5 w-5 " />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-80"
          align="start"
          alignOffset={11}
          forceMount
        >
          <div className="flex flex-col space-y-4 p-2">
            <p className="text-xs font-medium leading-none text-muted-foreground">
              Email: {session?.user?.email}
            </p>
            <div className="flex item-center gap-x2">
              <div className="rounded-md bg-secondary p-1">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={`${session?.user?.image}`} />
                </Avatar>
              </div>
              <p className="m-auto font-serif ">
                {session?.user?.name}&apos;s Jotion
              </p>
            </div>
          </div>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="w-full cursor-pointer text-muted-foreground">
            <Button onClick={() => signOut()} variant={"outline"}>
              Log out
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
