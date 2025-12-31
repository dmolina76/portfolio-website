"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold tracking-tight">
          Diego Molina
        </Link>

        <nav className="flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            const base =
              "rounded-lg px-3 py-2 text-sm font-medium transition " +
              "ring-1 ring-transparent " +
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent";

            const inactive =
              "text-muted hover:text-foreground hover:bg-card " +
              "hover:ring-2 hover:ring-accent hover:shadow-sm";

            const active =
              "bg-card text-foreground ring-2 ring-accent";

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${base} ${isActive ? active : inactive}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
