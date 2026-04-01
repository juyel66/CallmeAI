import Image from "next/image";
import heroSections from "../../../public/images/herosections.jpg"
import Buttons from "@/app/Shared/Button/Buttons";



const HeroSection = () => {


  return (
    <section className="relative flex min-h-svh w-full items-center justify-center overflow-hidden px-4 py-10 sm:min-h-[85vh] sm:px-6 sm:py-14 lg:min-h-[90vh] lg:py-16">
      
      <Image
        src={heroSections} 
        alt="Hero Background"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
   
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b "></div>

      {/* Content Box */}
      <div className="relative z-10 w-full container mx-auto ">
        <div className="rounded-2xl border  border-white/20  bg-black/20 p-4 text-center shadow-lg backdrop-blur-sm sm:p-8 md:p-12">
          
          {/* Heading */}
          <h1 className="mb-4 text-2xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            <span className="md:whitespace-nowrap">Automated Lead Contact, - Straight to <br />
            Your Calendar </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mb-7 max-w-3xl px-1 text-sm leading-relaxed text-white sm:mb-8 sm:text-base md:text-lg">
            Maximize revenue potential with CallmeAI. Our AI phone agents instantly contact new <br />
            leads, follow up automatically, and book high-quality appointments on autopilot.
          </p>

          {/* Buttons */}
          <div className="mx-auto w-full max-w-md sm:max-w-none">
           <Buttons />

            
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;