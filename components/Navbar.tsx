"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Analytics", href: "#analytics" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <nav className="mx-auto flex w-full items-center justify-between px-2 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src="/img/ternaqin.svg"
            alt="TernaQin logo"
            width={285}
            height={60}
            priority
            className="w-[160px] sm:w-[190px] lg:w-[240px] 2xl:w-[285px]"
          />
        </Link>

        {/* Desktop Menu (XL+) */}
        <ul className="hidden xl:flex items-center gap-8 xl:gap-14 2xl:gap-[80px] font-sf">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-lg xl:text-xl 2xl:text-[28px] font-medium text-white/80 transition hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA (XL+) */}
        <div className="hidden xl:flex items-center gap-2 flex-shrink-0">
          <a
            href="#contact"
            className="
              inline-flex
              h-[48px] xl:h-[56px]
              w-[160px] xl:w-[190px]
              items-center justify-center
              rounded-xl
              bg-[#1F4941]
              text-lg xl:text-xl 2xl:text-[28px]
              font-medium
              text-white
              transition hover:opacity-90
            "
          >
            Contact Us
          </a>

          <a
            href="#contact"
            aria-label="Go to contact"
            className="inline-flex h-[48px] xl:h-[56px] w-[48px] xl:w-[56px] items-center justify-center rounded-xl bg-[#1F4941] transition hover:opacity-90"
          >
            <Image src="/img/arrow-right.svg" alt="" width={20} height={20} />
          </a>
        </div>

        {/* Hamburger (< XL) */}
        <button
          onClick={() => setOpen(!open)}
          className="xl:hidden text-white"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-white" />
            <span className="block h-0.5 w-6 bg-white" />
            <span className="block h-0.5 w-6 bg-white" />
          </div>
        </button>
      </nav>

      {/* Mobile Menu (< XL) */}
      {open && (
        <div className="xl:hidden bg-transparent">
          <ul className="flex flex-col gap-6 px-6 py-8 font-sf">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block text-lg font-medium text-white/90 hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}

            <div className="mt-6 flex items-center gap-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex h-[48px] w-full items-center justify-center rounded-xl bg-[#1F4941] text-lg font-medium text-white transition hover:opacity-90"
              >
                Contact Us
              </a>

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                aria-label="Go to contact"
                className="inline-flex h-[48px] w-[48px] items-center justify-center rounded-xl bg-[#1F4941] transition hover:opacity-90"
              >
                <Image src="/img/arrow-right.svg" alt="" width={18} height={18} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </header>
  );
}
