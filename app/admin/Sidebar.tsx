"use client";

import { adminLinks } from "@/utils/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

function Sidebar() {
  const pathname = usePathname();
  return (
    <aside>
      {adminLinks.map((link) => {
        const isActivePage = pathname === link.href;
        const variant = isActivePage ? "default" : "ghost";
        const { href, label } = link;
        return (
          <Button
            asChild
            variant={variant}
            className='w-full mb-2 capitalize font-normal justify-start'>
            <Link key={href} href={href}>
              {label}
            </Link>
          </Button>
        );
      })}
    </aside>
  );
}

export default Sidebar;
