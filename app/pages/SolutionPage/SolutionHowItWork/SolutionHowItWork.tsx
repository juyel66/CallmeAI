"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
  const [activeIndex, setActiveIndex] = useState(0);

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

      const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

      const refreshBounds = () => {
        maxOffset = Math.max(track.scrollHeight - rail.clientHeight, 0);
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

      const animateCardsByScroll = () => {
        const railRect = rail.getBoundingClientRect();
        const railCenter = railRect.top + railRect.height / 2;
        let nextActiveIndex = 0;
        let minDistance = Number.POSITIVE_INFINITY;

        cards.forEach((card, index) => {
          const rect = card.getBoundingClientRect();
          const cardCenter = rect.top + rect.height / 2;
          const distance = Math.abs(cardCenter - railCenter);
          const normalized = Math.min(distance / (railRect.height / 2), 1);

          if (distance < minDistance) {
            minDistance = distance;
            nextActiveIndex = index;
          }

          gsap.to(card, {
            y: normalized * 12,
            scale: 1 - normalized * 0.08,
            opacity: 1 - normalized * 0.35,
            duration: 0.35,
            ease: "power2.out",
            overwrite: true,
          });
        });

        setActiveIndex((prev) => (prev === nextActiveIndex ? prev : nextActiveIndex));
      };

      const onWheel = (event: WheelEvent) => {
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

  const HandleVerticaleLine = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section
      ref={sectionRef}
      className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-[#a855f7] via-[#c084fc] to-[#e9d5ff]"
    >
      <div className="container mx-auto grid lg:grid-cols-[1fr_2fr] gap-2 items-start">

        {/* LEFT SIDE (CENTER STICKY) */}
        <div className="h-140 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              How It Works
            </h2>

            <button className="mt-6 rounded-lg bg-[#8E00FF] px-6 py-3 text-white font-medium shadow-md hover:bg-[#6F14F1] transition">
              Book a demo →
            </button>
          </div>
        </div>

        {/* RIGHT SIDE HORIZONTAL CARDS */}
        <div className="relative">
          <div className="absolute left-6 top-0 h-full border-l-2 border-dashed border-[#9333EA]/60" />

          <div
            ref={cardsRailRef}
            className="relative h-140 overflow-hidden pr-2 cursor-grab active:cursor-grabbing select-none"
          >
            <div ref={cardsTrackRef} className="flex flex-col gap-6 pb-12 will-change-transform">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="solution-card relative pl-14"
                >
                  <div
                    onClick={() => HandleVerticaleLine(index)}
                    className={`absolute top-1/2 -translate-y-1/2 rounded-full bg-[#8A2BE2] transition-all duration-200 ${
                      activeIndex === index ? "left-1.5 h-8 w-8" : "left-3 h-6 w-6"
                    }`}
                  />

                  <div className="min-h-[160px]  rounded-xl border border-[#BEBEBE] bg-[#ECECEC] p-6 text-start shadow-sm">
                  <h3 className="text-xl mt-5 font-semibold text-black">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base text-gray-600">
                    {item.desc}
                  </p>
                </div>
              </div>
              ))}
            </div>
          </div>

      
        </div>

      </div>
    </section>
  );
};

export default SolutionHowItWork;