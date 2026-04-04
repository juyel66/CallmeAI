"use client";

import Image from "next/image";
import groupImage from "../../../../public/images/Group 10 (1).svg";
import Link from "next/link";

const SolutionsHeroPages = () => {
    return (
        <section className="w-full py-12 transition-all duration-300 sm:py-14 md:py-20 lg:py-24">
            <div className="container mx-auto grid items-center gap-6 px-4 transition-all duration-300 sm:px-6 md:grid-cols-2 md:gap-8 lg:gap-10 lg:px-8">

                {/* LEFT CONTENT */}
                <div className="min-w-0 max-w-xl transition-all duration-300 lg:max-w-none">
                    <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-black transition-all duration-300">
                        Boost Your Sales with <span className="whitespace-nowrap">AI-</span><span className="block sm:inline">Powered</span> Appointment Setting on Autopilot.
                    </h1>

                    <p className="mt-5 max-w-prose text-sm leading-relaxed text-[#444] transition-all duration-300 sm:mt-6 sm:text-base md:text-lg">
                        Optimize your sales process with automated Calling, SMS, and AI. Reach more leads, book more appointments, and close more deals.
                    </p>

                    <Link href="/contact" className="
                        mt-7
                        inline-flex items-center gap-2
                        rounded-lg
                      bg-[#8E00FF]
                        px-5 py-2.5
                        text-sm font-medium text-white
                        shadow-md
                        hover:bg-[#7A00CC]
                        transition-all duration-300
                            cursor-pointer
                        sm:mt-8 sm:px-6 sm:py-3 sm:text-base
                    ">
                        Book a demo 
                          <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1"
                >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                    </Link>
                </div>

                {/* RIGHT IMAGE AREA */}
                <div className="relative flex min-w-0 items-center justify-center transition-all duration-300 md:justify-self-end">
                    <Image
                        src={groupImage}
                        alt="AI Dashboard"
                        className="h-auto w-full max-w-80 rounded-2xl object-cover transition-all duration-300 sm:max-w-100 md:max-w-120 lg:max-w-140"
                        width={480}
                        height={320}
                    />

                   

                </div>

            </div>
        </section>
    );
};

export default SolutionsHeroPages;