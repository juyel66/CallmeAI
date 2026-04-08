import Image from "next/image";
import heroSections from "../../../public/images/heroImage.svg";
import heroSectionsSmallDevice from "../../../public/images/Rectangle 19.svg";
import Buttons from "@/app/Shared/Button/Buttons";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[78svh] w-full items-center justify-center overflow-hidden px-4 py-8 sm:min-h-[85vh] sm:px-6 sm:py-14 lg:min-h-[89vh] lg:py-16">
      <Image
        src={heroSectionsSmallDevice}
        alt="Hero Background Mobile"
        fill
        quality={100}
        priority
        className="object-cover object-bottom md:hidden"
        sizes="100vw"
      />

      <Image
        src={heroSections}
        alt="Hero Background"
        fill
        quality={100}
        priority
        className="hidden object-cover object-center md:block"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-linear-to-b"></div>

      <div className="relative z-10 w-full container mx-auto">
        <div className="rounded-2xl border border-white/20 bg-white/4 p-4 text-center shadow-lg backdrop-blur-[1px] sm:p-8 md:p-12">
          <h1 className="mb-4 text-2xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Automated Lead Contact, Follow-Up & <br /> Prequalified Bookings — Straight to Your <br /> Calendar
          </h1>

          <p className="mx-auto mb-7 max-w-3xl px-1 text-sm leading-relaxed text-white sm:mb-8 sm:text-base md:text-lg">
            Maximize revenue potential with CallmeAI. Our AI phone agents instantly contact new <br />
            leads, follow up automatically, and book high-quality appointments on autopilot.
          </p>

          <div className="mx-auto w-full max-w-md sm:max-w-none">
            <Buttons />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
