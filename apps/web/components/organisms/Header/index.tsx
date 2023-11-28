import { useState } from "react";
import { tv } from "tailwind-variants";

import Logo from "@repo/ui/Logo";
import Link from "next/link";
import NavLink from "../../atoms/NavLink";

export interface HeaderProps {
  mode: "light" | "dark";
}

const headerClasses = tv({
  slots: {
    base: ["w-full"],
    inner: [
      "flex",
      "items-center",
      "justify-between",
      "flex-col",
      "items-stretch",
      "md:container",
      "md:flex-row",
      "md:items-center",
      "md:mx-auto",
    ],
    top: ["flex", "justify-between", "items-center", "flex-shrink-0", "p-6"],
    button: ["w-8", "h-8", "bg-primary-500", "md:hidden"],
    nav: [
      "flex",
      "gap-x-8",
      "gap-y-4",
      "w-full",
      "flex-col",
      "p-6",
      "border-t",
      "border-b",
      "md:flex-row",
      "md:border-t-0",
      "md:border-b-0",
    ],
  },
  variants: {
    menuOpen: {
      false: {
        nav: ["hidden md:flex"],
      },
    },
    mode: {
      light: {},
      dark: {
        base: ["bg-transparent"],
        nav: ["text-white"],
      },
    },
  },
  compoundVariants: [
    {
      mode: "light",
      menuOpen: true,
      class: {
        base: ["bg-white"],
        nav: ["text-defaultText"],
      },
    },
  ],
});

export const Header = ({ mode }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={headerClasses().base({ menuOpen, mode })}>
      <div className={headerClasses().inner()}>
        <div className={headerClasses().top()}>
          <Link href="/">
            <Logo hasText={true} mode={mode} />
          </Link>
          <button
            className={headerClasses().button()}
            onClick={toggleMenu}
          ></button>
        </div>
        <nav>
          <ul className={headerClasses().nav({ menuOpen, mode })}>
            <li>
              <NavLink href="#">divoted</NavLink>
            </li>
            <li>
              <NavLink href="#">events</NavLink>
            </li>
            <li>
              <NavLink href="#">trainingen</NavLink>
            </li>
            <li>
              <NavLink href="#">werken bij</NavLink>
            </li>
            <li>
              <NavLink href="#">blog</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
