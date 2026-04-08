import Image from "next/image";
import clockIcons from "../../../public/images/hugeicons_tick-04 (1).svg";
import Component from "../../../public/images/hugeicons_tick-04 (2).svg";
import TreeNumberIcons from "../../../public/images/hugeicons_tick-04 (3).svg";
import TreeNumberIconsB from "../../../public/images/hugeicons_tick-04 (4).svg";
import TreeNumberIconsBa from "../../../public/images/hugeicons_tick-04 (5).svg";
import TreeNumberIconsBac from "../../../public/images/hugeicons_tick-04 (6).svg";

const items = [
  {
   
    customIcon: clockIcons,
    text: "Slow outbound — leads cool off or move on to competitors",
  },
  {
    customIcon: Component,
    text: "Follow-ups are forgotten or inconsistent",
  },
  {
    customIcon: TreeNumberIcons,
    text: "Daily call volume fluctuates with reps’ motivation and energy",
  },
  {
    customIcon: TreeNumberIconsB,
    text: "Sales reps miss objections and lose opportunities",
  },
  {
    customIcon: TreeNumberIconsBa,
    text: "Time wasted on manual dialing instead of selling",
  },
  {
    customIcon: TreeNumberIconsBac,
    text: "Scaling breaks as lead volume grows and your team can’t keep up",
  },
];


const WhyEvery = () => {

  return (
    <section className="relative w-full  p-3 overflow-hidden bg-white py-20">
      <div className="pointer-events-none absolute -bottom-28 -left-24 h-96 w-96 rounded-full bg-linear-to-tr from-[#7F20FF]/16 via-[#7F20FF]/8 to-transparent blur-3xl" />

      <div className="container mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Why every missed lead is lost revenue
        </h2>

        {/* Description */}
        <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-base md:text-lg">
          When new leads are contacted too late, follow-ups are forgotten, and sales teams
          spend hours chasing low-quality prospects, opportunities slip through the cracks — <br />
          and revenue is lost.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, index) => {
            return (
              <div
                key={index}
                className="flex items-center gap-3 p-4  rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center">
                  <Image
                    src={item.customIcon}
                    alt="feature icon"
                    width={40}
                    height={40}
                    className="h-10 w-10 object-contain"
                  />
                </div>
                <p className="text-[15px] text-gray-700 text-left">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyEvery;