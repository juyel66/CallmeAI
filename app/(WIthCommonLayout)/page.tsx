import Image from "next/image";
import React from "react";
import Buttons from "../Shared/Button/Buttons";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-[#F5F6F8] py-16">
      <div className="max-w-7xl  mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-6">

        {/* LEFT CONTENT */}
        <div className="max-w-xl">

          <h1 className="text-[36px] leading-[1.2] font-bold text-black">
           Boost Your Sales with AI-Powered Appointment Setting on Autopilot
          </h1>

          <p className="mt-4 text-[15px] text-gray-600 leading-[1.6]">
            Maximize revenue potential with CallmeAI. Our AI phone agents
            instantly contact new leads, follow up automatically, and book
            high-quality appointments on autopilot.
          </p>

          {/* BUTTONS */}
       <div className="mt-8">
         <Buttons />
       </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden   shadow-lg">
            <Image
              src="/Rectangle 7.svg"
              alt="AI Dashboard"
              className="object-cover"
                width={480}
                height={280}
            />
            
          </div>

          {/* Glow effect */}
          <div className="absolute inset-0 rounded-2xl border border-purple-400 opacity-30 blur-sm"></div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;