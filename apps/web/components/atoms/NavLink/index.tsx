import { tv } from "tailwind-variants";

import Link from "next/link";
import { ReactNode } from "react";

export interface NavLinkProps {
  href: string;
  children: ReactNode;
}

const NavLinkClasses = tv({
  base: [
    "text-current",
    "text-xl",
    "leading-normal",
    "no-underline",
    "whitespace-no-wrap",
  ],
});

const NavLink = ({ children, href = "#" }: NavLinkProps) => {
  return (
    <Link className={NavLinkClasses()} href={href}>
      {children}
    </Link>
  );
};

export default NavLink;
