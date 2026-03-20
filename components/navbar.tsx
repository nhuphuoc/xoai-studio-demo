"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Trang chủ" },
  { href: "/models", label: "Models" },
  { href: "/courses", label: "Khóa học" },
  { href: "/my-assets", label: "Tài sản của tôi" },
];

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glassmorphism">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative h-12 w-auto flex items-center">
              <Image
                src="/xoi-studio-logo.png"
                alt="Xoi Studio"
                width={120}
                height={48}
                className="h-12 w-auto object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(0,212,255,0.8)]"
                priority
              />
            </div>
          </Link>

          {/* Nav Links Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-all duration-300 hover:text-primary ${
                  pathname === link.href
                    ? "text-primary border-b-2 border-primary"
                    : "text-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:block px-6 py-2 bg-accent text-black font-semibold rounded-lg hover:neon-glow-green transition-all duration-300">
              Đăng nhập
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground p-1"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-surface/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  pathname === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/80 hover:bg-white/5 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-white/10 mt-2">
              <button className="w-full py-3 bg-accent text-black font-semibold rounded-lg">
                Đăng nhập
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
