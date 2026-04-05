// import Image from "next/image";
// import heroSections from "../../../public/images/herosections.jpg";
// import Buttons from "@/app/Shared/Button/Buttons";

// const HeroSection = () => {
//   return (
//     <section className="relative flex min-h-svh w-full items-center justify-center overflow-hidden px-4 py-10 sm:min-h-[85vh] sm:px-6 sm:py-14 lg:min-h-[90vh] lg:py-16">
//       <Image
//         src={heroSections}
//         alt="Hero Background"
//         fill
//         priority
//         className="object-cover object-center"
//         sizes="100vw"
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-linear-to-b "></div>

//       {/* Content Box */}
//       <div className="relative z-10 w-full container mx-auto ">
//         <div className="rounded-2xl border  border-white/20  bg-black/20 p-4 text-center shadow-lg backdrop-blur-sm sm:p-8 md:p-12">
//           {/* Heading */}
//           <h1 className="mb-4 text-2xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
//             <span className="md:whitespace-nowrap">
//               Automated Lead Contact, Prequalified <br /> Bookings & Follow-Up -
//               Straight to Your <br /> Calendar
//             </span>
//           </h1>

//           {/* Description */}
//           <p className="mx-auto mb-7 max-w-3xl px-1 text-sm leading-relaxed text-white sm:mb-8 sm:text-base md:text-lg">
//             Maximize revenue potential with CallmeAI. Our AI phone agents
//             instantly contact new <br />
//             leads, follow up automatically, and book high-quality appointments
//             on autopilot.
//           </p>

//           {/* Buttons */}
//           <div className="mx-auto w-full max-w-md sm:max-w-none">
//             <Buttons />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;








"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import heroSections from "../../../public/images/heroImage.svg"
import Buttons from "@/app/Shared/Button/Buttons";

const TRANSITION_DURATION = 1300;
const HOLD_DURATION = 2400;

const HeroSection = () => {
  const animatedPhrases = ["Lead Contact", "Follow-Up", "Prequalified Bookings"];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [phraseWidth, setPhraseWidth] = useState<number | null>(null);
  const phraseRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const tickerPhrases = [...animatedPhrases, animatedPhrases[0]];

  useLayoutEffect(() => {
    const measurePhraseWidth = () => {
      const currentPhrase = phraseRefs.current[phraseIndex];

      if (!currentPhrase) {
        return;
      }

      setPhraseWidth(Math.ceil(currentPhrase.getBoundingClientRect().width));
    };

    measurePhraseWidth();

    window.addEventListener("resize", measurePhraseWidth);

    return () => {
      window.removeEventListener("resize", measurePhraseWidth);
    };
  }, [phraseIndex]);

  useEffect(() => {
    const holdTimer = window.setTimeout(() => {
      const nextIndex = phraseIndex + 1;

      if (nextIndex < animatedPhrases.length) {
        setIsAnimating(true);
        setPhraseIndex(nextIndex);
        return;
      }

      setIsAnimating(true);
      setPhraseIndex(nextIndex);

      window.setTimeout(() => {
        // Jump back to the first item without showing a backward motion.
        setIsAnimating(false);
        setPhraseIndex(0);

        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(() => {
            setIsAnimating(true);
          });
        });
      }, TRANSITION_DURATION);
    }, HOLD_DURATION);

    return () => {
      window.clearTimeout(holdTimer);
    };
  }, [animatedPhrases.length, phraseIndex]);

  return (
    <section className="relative flex min-h-svh w-full items-center justify-center overflow-hidden px-4 py-10 sm:min-h-[85vh] sm:px-6 sm:py-14 lg:min-h-[89vh] lg:py-16">

      <Image
        src={heroSections}
        alt="Hero Background"
        fill
        quality={100}
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
            <span className="flex flex-col items-center justify-center gap-y-2 text-center">
              <span className="inline-flex flex-wrap items-baseline justify-center gap-x-1 gap-y-1">
                <span className="whitespace-nowrap md:mr-2">Automated </span>

                <span
                  className="relative inline-flex h-[1.2em] w-fit overflow-hidden align-bottom transition-[width] duration-300 ease-out"
                  style={{ width: phraseWidth ? `${phraseWidth}px` : "auto" }}
                >
                  <span
                    className={`flex flex-col text-white ${
                      isAnimating ? "transition-transform ease-out" : ""
                    }`}
                    style={{
                      transform: `translateY(-${phraseIndex * 1.2}em)`,
                      transitionDuration: isAnimating ? `${TRANSITION_DURATION}ms` : "0ms",
                    }}
                  >
                    {tickerPhrases.map((phrase, index) => (
                      <span
                        key={`${phrase}-${index}`}
                        ref={(element) => {
                          phraseRefs.current[index] = element;
                        }}
                        className="block h-[1.2em] w-fit whitespace-nowrap leading-[1.2em]"
                      >
                        {phrase}
                      </span>
                    ))}
                  </span>
                </span>
                <span className="whitespace-nowrap">-</span>
              </span>
              <span className="block whitespace-nowrap text-center">
                Straight to Your Calendar
              </span>
            </span>
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
