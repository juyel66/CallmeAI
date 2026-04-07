"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import solutionHowItWOrk from "../../../../public/images/solutionHowItWOrk.svg";

gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    title: "Instant Lead Contact",
    desc: "Connect with every lead instantly, boost productivity, and say goodbye to long hours manual dialing.",
  },
  {
    title: "Pre-Built Follow Up Workflow",
    desc: "Nurture every lead with proven follow-up sequences to boost response rates and keep opportunities from slipping away.",
  },
  {
    title: "Smart Lead Qualification",
    desc: "Filter out low-quality leads so you only spend time talking to serious buyers.",
  },
  {
    title: "Direct Appointment Booking",
    desc: "Automatically schedule appointments on your calendar and boost show rates with upcoming call reminders.",
  },
  {
    title: "Integrations and Call Summary",
    desc: "All calls are logged and summarized in your CRM, giving your team full context to walk into every appointment prepared.",
  },
  {
    title: "AI Intelligence and Analytics",
    desc: "Actionable insights and AI-driven optimizations help refine your sales process and improve performance",
  },
  {
    title: "Maximize Sales Efficiency",
    desc: "With outreach, follow-up, and scheduling automated, your team can focus entirely on closing deals - increasing pipeline productivity and revenue.",
  },
];



const SolutionHowItWork = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRailRef = useRef<HTMLDivElement>(null);
  const cardsTrackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!sectionRef.current || !cardsRailRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".solution-card");
      const rail = cardsRailRef.current;
      const track = cardsTrackRef.current;

      if (!rail || !track) return;

      let currentOffset = 0;
      let maxOffset = 0;
      let isDragging = false;
      let dragStartY = 0;
      let dragStartOffset = 0;
      const focusRatio = 0;

      const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

      const refreshBounds = () => {
        const focusOffset = rail.clientHeight * focusRatio;
        const lastCardTop = cards.length ? cards[cards.length - 1].offsetTop : 0;

        // Allow scrolling until the last card's top reaches the rail top.
        maxOffset = Math.max(lastCardTop - focusOffset, 0);

        // Keep initial viewport locked to the first three full cards.
        currentOffset = clamp(currentOffset, 0, maxOffset);

        gsap.set(track, { y: -currentOffset });
      };

      const setOffset = (nextOffset: number, animate = true) => {
        currentOffset = clamp(nextOffset, 0, maxOffset);

        if (animate) {
          gsap.to(track, {
            y: -currentOffset,
            duration: 0.45,
            ease: "power3.out",
            overwrite: true,
            onUpdate: animateCardsByScroll,
          });
          return;
        }

        gsap.set(track, { y: -currentOffset });
        animateCardsByScroll();
      };

      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 44,
          scale: 0.94,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      const animateCardsByScroll = () => {};

      const onWheel = (event: WheelEvent) => {
        const scrollingDown = event.deltaY > 0;
        const scrollingUp = event.deltaY < 0;

        if ((scrollingDown && currentOffset >= maxOffset) || (scrollingUp && currentOffset <= 0)) {
          return;
        }

        event.preventDefault();
        setOffset(currentOffset + event.deltaY, true);
      };

      const onPointerDown = (event: PointerEvent) => {
        isDragging = true;
        dragStartY = event.clientY;
        dragStartOffset = currentOffset;
        rail.setPointerCapture(event.pointerId);
      };

      const onPointerMove = (event: PointerEvent) => {
        if (!isDragging) return;
        const delta = event.clientY - dragStartY;
        setOffset(dragStartOffset - delta, false);
      };

      const onPointerUp = (event: PointerEvent) => {
        isDragging = false;
        rail.releasePointerCapture(event.pointerId);
      };

      const onResize = () => {
        refreshBounds();
        animateCardsByScroll();
      };

      refreshBounds();
      animateCardsByScroll();

      rail.addEventListener("wheel", onWheel, { passive: false });
      rail.addEventListener("pointerdown", onPointerDown);
      rail.addEventListener("pointermove", onPointerMove);
      rail.addEventListener("pointerup", onPointerUp);
      rail.addEventListener("pointercancel", onPointerUp);
      window.addEventListener("resize", onResize);

      return () => {
        rail.removeEventListener("wheel", onWheel);
        rail.removeEventListener("pointerdown", onPointerDown);
        rail.removeEventListener("pointermove", onPointerMove);
        rail.removeEventListener("pointerup", onPointerUp);
        rail.removeEventListener("pointercancel", onPointerUp);
        window.removeEventListener("resize", onResize);
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full px-4 py-14 sm:px-6 sm:py-16 lg:px-8 bg-linear-to-r from-[#a855f7] via-[#c084fc] to-[#e9d5ff]"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
        <div className="flex items-center justify-center">
          <div className="w-full max-w-150 rounded-2xl p-4 sm:p-5">
            <Image
              src={solutionHowItWOrk}
              alt="Solution Illustration"
              className="h-auto w-full"
              priority
            />
          </div>
        </div>

        <div className="min-w-0">
          <h2 className="text-center text-3xl font-bold text-black sm:text-4xl lg:text-[3rem]">
            Your New Sales Process
          </h2>

          <div className="relative mt-8 hidden md:block">
            <div className="absolute left-6 top-0 h-full border-l-2 border-dashed border-[#9333EA]/60" />

            <div
              ref={cardsRailRef}
              className="relative h-116 overflow-hidden pr-2 select-none cursor-grab active:cursor-grabbing"
            >
              <div ref={cardsTrackRef} className="flex flex-col gap-2 pb-0 will-change-transform">
                {data.map((item, index) => {
                  const isActive = activeIndex === index;

                  return (
                    <div
                      key={`${item.title}-${index}`}
                      className="solution-card relative pl-13"
                      onMouseEnter={() => setActiveIndex(index)}
                      onMouseLeave={() => setActiveIndex(null)}
                    >
                      <button
                        type="button"
                        className={`absolute top-1/2 -translate-y-1/2 rounded-full bg-[#8A2BE2] transition-all duration-200 ${
                          isActive ? "left-1.5 h-8 w-8 -ml-0.5" : "left-3 h-6  w-6"
                        }`}
                      />

                      <div
                        className={`h-34 rounded-xl border p-6 text-start shadow-sm transition-all duration-300 ${
                          isActive
                            ? "border-white bg-white shadow-[0_14px_30px_rgba(0,0,0,0.10)]"
                            : "border-[#D3D3D3] bg-[#EDEDED]"
                        }`}
                      >
                        <h3 className={`mt-1 text-base font-semibold sm:text-lg ${isActive ? "text-black" : "text-gray-700"}`}>
                          {item.title}
                        </h3>
                        <p className={`mt-1 text-xs leading-5 sm:text-sm ${isActive ? "text-gray-700" : "text-gray-500"}`}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:hidden">
            {data.map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className="rounded-xl border border-[#D7D7D7] bg-[#F2F2F2] p-5 text-left shadow-sm"
              >
                <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#8A2BE2] text-sm font-semibold text-white">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-gray-700 sm:text-xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-500 sm:text-base">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-7 flex justify-end sm:mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#8E00FF] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#6f14f1] sm:px-6 sm:py-3"
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
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionHowItWork;