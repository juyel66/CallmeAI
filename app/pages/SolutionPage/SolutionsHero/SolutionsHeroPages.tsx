"use client";

import Image from "next/image";
import groupImage from "../../../../public/images/Group 10 (1).svg";
import Link from "next/link";

const SolutionsHeroPages = () => {
    return (
        <section className="w-full  py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">

                {/* LEFT CONTENT */}
                <div className="max-w-xl">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight">
                        Boost Your Sales with AI-Powered Appointment Setting on Autopilot.
                    </h1>

                    <p className="mt-6 text-base sm:text-lg text-[#444] leading-relaxed">
                        Optimize your sales process with automated calling, SMS, and AI. Reach more leads, book more appointments, and close more deals.
                    </p>

                    <Link href="/contact" className="
                        mt-8
                        inline-flex items-center gap-2
                        rounded-lg
                      bg-[#8E00FF]
                        px-6 py-3
                        text-white font-medium
                        shadow-md
                        hover:bg-[#7A00CC]
                        transition
                            cursor-pointer
                    ">
                        Book a demo →
                    </Link>
                </div>

                {/* RIGHT IMAGE AREA */}
                <div className="relative flex justify-center items-center">
                    <Image
                        src={groupImage}
                        alt="AI Dashboard"
                        className="rounded-2xl h-auto w-auto  object-cover"
                        width={480}
                        height={320}
                    />

                   

                </div>

            </div>
        </section>
    );
};

export default SolutionsHeroPages;