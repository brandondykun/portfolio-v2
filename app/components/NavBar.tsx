"use client";

import { useState, useEffect } from "react";
import { ThemeSwitcher } from "./ThemeToggle";
import HoverNavLink from "./HoverNavLink";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

type Props = {
  href: string;
  children: React.ReactNode;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

// link for the mobile nav menu that closes the menu automatically when selected
const CloseMenuLink = ({ href, setOpen, children }: Props) => {
  return (
    <a href={href}>
      <span
        onClick={() => setOpen(false)}
        className="text-xl py-1 underline hover:cursor-pointer w-fit"
      >
        {children}
      </span>
    </a>
  );
};

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [showBorder, setShowBorder] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowBorder(true);
      } else {
        setShowBorder(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`flex justify-between items-center bg-stone-200 dark:bg-dark-bg text-stone-950 dark:text-stone-300 p-4 h-[60px] fixed right-0 left-0 sm:left-12 top-0 z-30 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-md border-b border-solid transition-all duration-500 ${
        showBorder
          ? " border-stone-300 dark:border-stone-900 bg-stone-300 dark:bg-stone-950"
          : "border-stone-200 dark:border-dark-bg"
      }`}
    >
      <nav className="gap-6 relative hidden sm:flex">
        <HoverNavLink href="#about" label="About" />
        <HoverNavLink href="#skills" label="Skills" />
        <HoverNavLink href="#projects" label="Projects" />
        <HoverNavLink href="#contact" label="Contact" />
      </nav>
      <ThemeSwitcher />
      <div className="sm:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent
            side="bottom"
            onCloseAutoFocus={(e) => e.preventDefault()}
          >
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <nav className="flex flex-col gap-2">
                <CloseMenuLink href="#about" setOpen={setOpen}>
                  About
                </CloseMenuLink>
                <CloseMenuLink href="#skills" setOpen={setOpen}>
                  Skills
                </CloseMenuLink>
                <CloseMenuLink href="#projects" setOpen={setOpen}>
                  Projects
                </CloseMenuLink>
                <CloseMenuLink href="#contact" setOpen={setOpen}>
                  Contact
                </CloseMenuLink>
              </nav>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default NavBar;
