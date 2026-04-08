"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logoImage from "../../../public/images/logo2.svg";

const navItems = [
    { label: "Solutions", href: "/solutions" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (href: string) => pathname === href;

    return (
        <header className="w-full flex justify-center md:py-6 py-2 md:fixed  top-0 left-0 z-50 bg-transparent">
            <div className="w-full max-w-6xl px-4">
                
              
                <nav className="flex items-center justify-between rounded-full border border-[#8E00FF] px-6 py-3 bg-white">

                
                    <Link href="/" className="flex items-center">
                        <Image
                            src={logoImage}
                            alt="logo"
                            width={140}
                            height={40}
                        />
                    </Link>

                  
                    <ul className="hidden lg:flex items-center gap-10">
                        {navItems.map((item) => (
                            <li key={item.label}>
                                <Link
                                    href={item.href}
                                    className={`
                                        text-[18px] font-medium transition
                                        ${
                                            isActive(item.href)
                                                ? "text-[#7F20FF]"
                                                : "text-[#1B1B1B] hover:text-[#7F20FF]"
                                        }
                                    `}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                 
                    <Link
                        href="/contact"
                        className="hidden lg:inline-flex items-center rounded-full bg-gradient-to-r bg-[#8E00FF] px-6 py-3 text-white font-medium shadow-md hover:opacity-90 transition"
                    >
                        Book a Demo 
                    </Link>

                   
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1"
                    >
                        <span
                            className={`block h-0.5 w-6 bg-black transition ${
                                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                            }`}
                        />
                        <span
                            className={`block h-0.5 w-6 bg-black transition ${
                                isMenuOpen ? "opacity-0" : ""
                            }`}
                        />
                        <span
                            className={`block h-0.5 w-6 bg-black transition ${
                                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                            }`}
                        />
                    </button>
                </nav>

                {/* MOBILE MENU */}
                <div
                    className={`
                        lg:hidden
                        transition-all duration-300 ease-in-out
                        ${
                            isMenuOpen
                                ? "max-h-96 opacity-100 mt-4"
                                : "max-h-0 opacity-0 overflow-hidden"
                        }
                    `}
                >
                    <div className="rounded-2xl border border-[#A855F7] bg-white p-4 shadow-md">
                        <ul className="flex flex-col gap-4">
                            {navItems.map((item) => (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`
                                            block text-lg font-medium transition
                                            ${
                                                isActive(item.href)
                                                    ? "text-[#7F20FF]"
                                                    : "text-[#1B1B1B] hover:text-[#7F20FF]"
                                            }
                                        `}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}

                            {/* MOBILE BUTTON */}
                            <Link
                                href="/contact"
                                onClick={() => setIsMenuOpen(false)}
                                className="mt-2 inline-flex justify-center rounded-full bg-[#8E00FF] px-5 py-3 text-white font-medium"
                            >
                                Book a Demo
                            </Link>
                        </ul>
                    </div>
                </div>

            </div>
        </header>
    );
};

export default Navbar;