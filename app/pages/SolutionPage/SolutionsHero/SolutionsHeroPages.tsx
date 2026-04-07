"use client";

import Image from "next/image";
import groupImage from "../../../../public/images/Group 14 (1).svg";
import Link from "next/link";

const SolutionsHeroPages = () => {
    return (
        <section className="w-full py-10 transition-all duration-300 sm:py-12 md:py-20 lg:py-24">
            <div className="container mx-auto grid items-center gap-8 px-4 transition-all duration-300 sm:px-6 md:grid-cols-2 md:gap-10 lg:gap-12 lg:px-8">

               
                <div className="min-w-0 max-w-xl transition-all duration-300 lg:max-w-none flex flex-col items-start text-left">
                    <h1 className="md:text-[46px] text-2xl font-bold leading-tight text-black transition-all duration-300">
                        Boost Your Sales with AI-Powered Appointment Setting on Autopilot.
                    </h1>

                    <p className="mt-2 max-w-prose text-sm leading-relaxed  text-[#444] transition-all duration-300 sm:mt-6 sm:text-base md:text-[20px] ">
                        Optimize your sales process with automated calling, multi-layer follow up, and smart qualification. Reach more leads, book more appointments, and close more deals.
                    </p>

                    <Link
                        href="/contact"
                        className="mt-7 inline-flex cursor-pointer items-center gap-2 rounded-lg bg-[#8E00FF] px-5 py-2.5 text-sm font-medium text-white shadow-md transition-all duration-300 hover:bg-[#7A00CC] sm:mt-8 sm:px-6 sm:py-3 sm:text-base"
                    >
                        Book a Call
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

             
                <div className="relative flex min-w-0 items-center justify-center transition-all duration-300 md:justify-self-end">
                    <Image
                        src={groupImage}
                        alt="AI Dashboard"
                        className="h-auto w-full max-w-96 rounded-2xl object-cover transition-all duration-300 sm:max-w-120 md:max-w-3xl lg:max-w-4xl"
                        width={720}
                        height={460}
                    />

                   

                </div>

            </div>
        </section>
    );
};

export default SolutionsHeroPages;