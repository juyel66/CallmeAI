"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const navItems = [
    { label: "Solutions", href: "/solutions" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const closeMenu = () => setIsMenuOpen(false);

    const isActive = (href: string) => pathname === href;

    return (
        <header className="relative ">
            <nav className="container mx-auto flex  items-center justify-between  sm:px-6 md:h-23 ">
                <Link
                    href="/"
                    onClick={closeMenu}
                    className="text-[24px] font-normal leading-none tracking-[-0.02em] text-[#272727] sm:text-[30px] md:text-[38px]"
                >
                    <Image
                        src="/images/image 1.svg"
                        alt="Callme AI Logo"
                        width={140}
                        height={48}
                        priority
                        className="h-auto w-auto"
                    />
                </Link>

                <ul className="hidden items-center gap-15  lg:flex">
                    
                    
                    {navItems.map((item) => (
                        <li key={item.label}>
                            <Link
                                href={item.href}
                                className={`border-b-[3px] pb-1 text-xl font-normal leading-none tracking-[-0.02em] transition-colors duration-200 ${
                                    isActive(item.href)
                                        ? "border-[#7F20FF] text-[#7F20FF]"
                                        : "border-transparent text-[#1B1B1B] hover:text-[#7F20FF]"
                                }`}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <Link
                    href="/demo"
                    className="hidden rounded-xl bg-[#7F20FF] px-8 py-4 text-[20px] font-medium leading-none text-white transition-colors duration-200 hover:bg-[#6F14F1] lg:inline-flex"
                >
                    Book a demo
                </Link>

                <button
                    type="button"
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    aria-expanded={isMenuOpen}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-[#D7D7D7] bg-white/80 text-[#1B1B1B] transition-colors duration-200 hover:bg-white lg:hidden"
                >
                    <span className="relative block h-4 w-5">
                        <span
                            className={`absolute left-0 top-0 block h-0.5 w-5 bg-current transition-transform duration-300 ${
                                isMenuOpen ? "translate-y-1.75 rotate-45" : ""
                            }`}
                        />
                        <span
                            className={`absolute left-0 top-1.75 block h-0.5 w-5 bg-current transition-opacity duration-200 ${
                                isMenuOpen ? "opacity-0" : "opacity-100"
                            }`}
                        />
                        <span
                            className={`absolute left-0 top-3.5 block h-0.5 w-5 bg-current transition-transform duration-300 ${
                                isMenuOpen ? "-translate-y-1.75 -rotate-45" : ""
                            }`}
                        />
                    </span>
                </button>
            </nav>

            <div
                className={`overflow-hidden border-t border-[#E2E2E2] bg-[#ECECEC] transition-[max-height,opacity] duration-300 lg:hidden ${
                    isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <ul className="mx-auto flex w-full max-w-310 flex-col gap-1 px-4 py-4 sm:px-6 md:px-10">
                    {navItems.map((item) => (
                        <li key={item.label}>
                            <Link
                                href={item.href}
                                onClick={closeMenu}
                                className={`block border-l-4 px-4 py-3 text-[18px] font-medium transition-colors duration-200 ${
                                    isActive(item.href)
                                        ? "border-[#7F20FF] bg-[#F5F0FF] text-[#7F20FF]"
                                        : "border-transparent text-[#1B1B1B] hover:bg-white/70 hover:text-[#7F20FF]"
                                }`}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                    <li className="pt-2">
                        <Link
                            href="/demo"
                            onClick={closeMenu}
                            className="inline-flex rounded-[10px] bg-[#7F20FF] px-5 py-3 text-[16px] font-medium text-white transition-colors duration-200 hover:bg-[#6F14F1]"
                        >
                            Book a demo
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Navbar;