"use client";

import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";

const Navbar = () => {
  const pathname = usePathname();
  
  const links = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
    { href: "/booking", label: "Book Now" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Camera className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl">
              <span className="text-primary">Ben Gabsia</span>
              <span className="text-foreground"> Studio</span>
            </span>
          </Link>
          
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex space-x-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative inline-flex items-center px-1 pt-1 text-sm font-medium"
                >
                  {link.href === pathname && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 top-full block h-0.5 w-full bg-primary"
                    />
                  )}
                  {link.label}
                </Link>
              ))}
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;