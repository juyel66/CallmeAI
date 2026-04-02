import AIJustGot from "@/app/pages/AIJustGot/AIJustGot";
import AiSolutions from "@/app/pages/AiSolutions/AiSolutions";
import HowItWork from "@/app/pages/HowItWork/HowItWork";
import InfiniteSlider from "@/app/pages/Slider/InfiniteSlider";
import Human from "@/app/pages/SolutionPage/HumanlikeAItrust/Human";


import SolutionHowItWork from "@/app/pages/SolutionPage/SolutionHowItWork/SolutionHowItWork";
import SolutionsHeroPages from "@/app/pages/SolutionPage/SolutionsHero/SolutionsHeroPages";

// import SolutionsHeroPages from "@/app/pages/SolutionPage/SolutionsHero/SolutionsHeroPages";
import Buttons from "@/app/Shared/Button/Buttons";
import Image from "next/image";
import React from "react";



const Solutions: React.FC = () => {


  return (
    <>

    <SolutionsHeroPages />
    <SolutionHowItWork />
    <Human />
    <AiSolutions />

    




    
      {/* <section className="bg-[#F5F6F8] py-16">
        <div className="container  mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-6">

        <div className="max-w-xl">

          <h1 className="text-[36px] leading-[1.2] font-bold text-black">
           Boost Your Sales with AI-Powered Appointment Setting on Autopilot
          </h1>

          <p className="mt-4 text-[15px] text-gray-600 leading-[1.6]">
            Maximize revenue potential with CallmeAI. Our AI phone agents
            instantly contact new leads, follow up automatically, and book
            high-quality appointments on autopilot.
          </p>

       
       <div className="mt-8">
         <Buttons />
       </div>

        </div>

       
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

         
          <div className="absolute inset-0 rounded-2xl border border-purple-400 opacity-30 blur-sm"></div>
        </div>

        </div>
      </section>
          */}

      {/* <InfiniteSlider />
      <AIJustGot />
      

      <HowItWork /> */}
     

      
    </>
  );
};

export default Solutions;