
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-[#0F172A]">
            <div className="mx-auto w-full container px-4 py-12 sm:px-6 md:px-10">
                {/* Main Content */}
                <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
                    {/* Logo & Tagline */}
                    <div className="col-span-1">
                        <a href="/" className=" inline-block">
                            <Image
                            src="/images/image 1.svg"
                            alt="CallmeAI Logo"
                            width={140}
                            height={48}
                            className="mb-6 h-auto w-auto"
                        />
                        </a>
                        <p className="text-[14px] leading-[22px] text-[#8B95A5]">
                            AI phone agents for lead contact, follow-up, and calendar bookings.
                        </p>
                    </div>

                    {/* Product */}
                    <div className="col-span-1">
                        <h3 className="mb-6 text-xl font-semibold leading-none text-white">Product</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link
                                    href="/solutions"
                                    className="text-[14px] text-[#A0AEC0] transition-colors duration-200 hover:text-white"
                                >
                                    Solutions
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/pricing"
                                    className="text-[14px] text-[#A0AEC0] transition-colors duration-200 hover:text-white"
                                >
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/demo"
                                    className="text-[14px] text-[#A0AEC0] transition-colors duration-200 hover:text-white"
                                >
                                    Book a demo
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="col-span-1">
                        <h3 className="mb-6 text-xl font-semibold leading-none text-white">Company</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-[14px] text-[#A0AEC0] transition-colors duration-200 hover:text-white"
                                >
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/privacy-policy"
                                    className="text-[14px] text-[#A0AEC0] transition-colors duration-200 hover:text-white"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/terms"
                                    className="text-[14px] text-[#A0AEC0] transition-colors duration-200 hover:text-white"
                                >
                                    Terms & Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Get Started */}
                    <div className="col-span-1">
                        <h3 className="mb-6 text-xl font-semibold leading-none text-white">Get started</h3>
                        <p className="mb-4 text-[14px] leading-[22px] text-[#A0AEC0]">
                            See CallmeAI in action with your team.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex text-[14px] font-medium text-[#a06ee0] transition-colors duration-200 hover:text-[#9944FF]"
                        >
                            Contact us   <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1 mt-1"
                >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                        </Link>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-12 border-t border-[#1F2937]" />

                {/* Copyright */}
                <div className="text-center">
                    <p className="text-[14px] text-[#6B7280]">© 2026 CallmeAI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;