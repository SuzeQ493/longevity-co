"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Home",       href: "/" },
  { label: "About",      href: "/about" },
  { label: "Assessment", href: "/assessment" },
  { label: "Peptides",   href: "/peptides" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-stone-900 tracking-tight">Longevity Co.</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV.map(n => (
            <Link key={n.href} href={n.href}
              className={cn("text-sm font-medium transition-colors",
                path === n.href ? "text-amber-700" : "text-stone-500 hover:text-stone-900")}>
              {n.label}
            </Link>
          ))}
          <Link href="/assessment"
            className="bg-amber-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-amber-800 transition-colors">
            Get started
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-stone-100 px-6 py-4 space-y-4">
          {NAV.map(n => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)}
              className={cn("block text-sm font-medium py-1",
                path === n.href ? "text-amber-700" : "text-stone-600")}>
              {n.label}
            </Link>
          ))}
          <Link href="/assessment" onClick={() => setOpen(false)}
            className="block bg-amber-700 text-white text-sm font-semibold px-5 py-3 rounded-full text-center">
            Get started
          </Link>
        </div>
      )}
    </nav>
  );
}
