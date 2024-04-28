"use client";

import {
  WrenchScrewdriverIcon,
  CogIcon,
  QueueListIcon,
  CurrencyRupeeIcon,
  CurrencyDollarIcon,
  EyeIcon,
  DocumentPlusIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Post Topic", href: "/dashboard", icon: DocumentPlusIcon },
  {
    name: "View Topic",
    href: "/dashboard/view-topic",
    icon: EyeIcon,
  },
  { name: "Service Register", href: "/dashboard/service-register", icon: WrenchScrewdriverIcon },
  { name: "Sell Bike", href: "/dashboard/sell-bike", icon: CurrencyDollarIcon },
  { name: "Buy Bike", href: "/dashboard/buy-bike", icon: CurrencyRupeeIcon },
  { name: "Rent Bike", href: "/dashboard/rent-bike", icon: QueueListIcon },
  { name: "Buy Parts", href: "/dashboard/buy-parts", icon: CogIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-sky-100 text-blue-600": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
