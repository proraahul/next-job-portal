"use client";

import { usePathname, useRouter } from "next/navigation";
import { SideBarRouteItem } from "./side-bar-route-item";
import { List, Compass, Home, User, Bookmark } from "lucide-react";

const adminRoute = [
  {
    icon: List,
    label: "Jobs",
    href: "/admin/jobs",
  },
  {
    icon: List,
    label: "Companies",
    href: "/admin/companies",
  },
  {
    icon: Compass,
    label: "Analytics",
    href: "/admin/analytics",
  },
];

const guestRoute = [
  {
    icon: Home,
    label: "Home",
    href: "/",
  },
  {
    icon: Compass,
    label: "Search",
    href: "/search",
  },
  {
    icon: User,
    label: "Profile",
    href: "/user",
  },
  {
    icon: Bookmark,
    label: "Saved Jobs",
    href: "/savedJobs",
  },
];

const SidebarRoutes = () => {
  const pathname = usePathname();
  const router = useRouter();

  const isAdminPage = pathname?.startsWith("/admin");
  const routes = isAdminPage ? adminRoute : guestRoute;

  return (
    <div className="flex flex-col">
      {routes.map((route) => (
        <SideBarRouteItem
        key={route.href}
        icon={route.icon}
        label={route.label}
        href={route.href}
      />
       )
      )}
    </div>
  );
};

export default SidebarRoutes;
