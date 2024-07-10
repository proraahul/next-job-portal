"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

const NavbarRoutes = () => {
  const pathname = usePathname();

  const isAdminPage = pathname?.startsWith("/admin"); // TODO: use a better way to check if the user is an admin
  const isPlayerPage = pathname?.startsWith("/jobs");
  return (
    <>
      <div className="flex gap-x-2 ml-auto">
        {isAdminPage || isPlayerPage ? (
          <Link href={"/"}>
            <Button
              variant={"outline"}
              size={"sm"}
              className="border-purple-700/20"
            >
              <LogOut />
              Exit
            </Button>
          </Link>
        ) : (
          <Link href={"/admin/jobs"}>
            <Button
              variant={"outline"}
              size={"sm"}
              className="border-purple-700/20"
            >
              Admin mode
            </Button>
          </Link>
        )}
        <UserButton afterSignOutUrl="/" />
      </div>
    </>
  );
};

export default NavbarRoutes;
