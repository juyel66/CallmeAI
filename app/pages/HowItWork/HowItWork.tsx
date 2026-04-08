"use client";

import Image from "next/image";
import Link from "next/link";
import imgHowItWorks from "../../../public/images/Rectangle 16 (1).svg";

const howItWorksData = [
 
  {
    id: 1,
    title: "Leads Instantly Contacted",
    description:
      "Reach every new lead within seconds — no delays, no lost opportunities.",
  },
  {
    id: 2,
    title: "Multi-Touch Follow-Up",
    description:
      "Calls and SMS messages automatically keep leads engaged.",
  },
  {
    id: 3,
    title: "Connected & Qualified",
    description:
      "AI phone agent handles conversations professionally and filters out low-quality leads.",
  },
  {
    id: 4,
    title: "Appointment Booked On Calendar",
    description:
      "Prequalified appointments are scheduled straight into your calendar.",
  },
  {
    id: 5,
    title: "Call Summary Logged in CRM",
    description:
      "Prospect details and conversation highlights delivered to your team before each appointment.",
  },
  {
    id: 6,
    title: "Increased Sales Production",
    description:
      "Boost sales efficiency and maximize revenue opportunities.",
  },
];

export default function HowItWork() {
  return (
    <section
      className="w-full py-10 sm:py-12 md:py-16 pl-2.5 pr-2.5 "
      style={{
        background: "linear-gradient(90deg, #ffffff 0%, #f4e5ff 100%)",
      }}
    >
      <div className="container mx-auto flex flex-col items-center gap-0.5 lg:flex-row lg:items-center lg:justify-center lg:gap-10 lg:px-2">
        
        {/* IMAGE - 2/5 */}
        <div className="w-full max-w-130 lg:w-[44%] lg:max-w-140">
          <Image
            src={imgHowItWorks}
            alt="How It Works"
            className="h-auto w-full"
            width={560}
            height={420}
            priority
          />
        </div>

        {/* TEXT - 3/5 */}
  <div className="w-full p-2 lg:w-[44%] lg:max-w-140">
          <h2 className="text-center text-3xl font-bold text-black sm:text-4xl md:text-5xl lg:text-left">
            How It Works
          </h2>

          <div className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
            {howItWorksData.map((item) => (
              <article key={item.id} className="flex items-start gap-3 sm:gap-4">
                <div className="flex md:h-15 md:w-15 h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#623FF4] text-sm font-semibold text-white shadow-sm">
                  {item.id}
                </div>

                <div className="min-w-0">
                  <h3 className="text-lg font-bold leading-tight text-black sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-[#5c5c5c] sm:text-[15px] sm:leading-7">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="">

          </div>

          <Link
            href="/contact"
            className="mx-auto mt-6 flex w-fit items-center justify-center gap-2 rounded-xl bg-[#8E00FF] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#6f14f1] sm:mt-8 sm:px-6 sm:py-3 lg:mx-0"
          >
            Book a Demo
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}