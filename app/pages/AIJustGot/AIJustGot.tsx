"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import leadImage from "../../../public/images/Rectangle 13 (1).svg";
import leadImage1 from "../../../public/images/Rectangle 15.svg";
import leadImage2 from "../../../public/images/Rectangle 14.svg";
import leadImage3 from "../../../public/images/Rectangle 14 (2).svg";
import leadImage4 from "../../../public/images/Rectangle 14 (1).svg";

const CARD_OFFSET = 340;

export default function AIJustGot() {
  const [current, setCurrent] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const dragStartXRef = useRef<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const total = 5;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isPlaying || isHovering) return;

    const timerId = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 3200);

    return () => clearInterval(timerId);
  }, [isPlaying, total, isHovering]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest("button")) return;

    dragStartXRef.current = e.clientX;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest("button")) {
      dragStartXRef.current = null;
      return;
    }

    if (dragStartXRef.current === null) return;

    const deltaX = e.clientX - dragStartXRef.current;
    dragStartXRef.current = null;

    if (Math.abs(deltaX) < 60) return;

    if (deltaX < 0) {
      nextSlide();
    } else {
      prevSlide();
    }
  };

  const onPointerLeave = () => {
    dragStartXRef.current = null;
  };

  const getCardState = (index: number) => {
    let offset = index - current;

    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;

    const distance = Math.abs(offset);
    const isActive = offset === 0;

    let scale = 1;
    let blur = 0;
    let opacity = 1;

    if (isActive) {
      scale = 1.1;
      blur = 0;
    } else if (distance === 1) {
      scale = 0.88;
      blur = 1;
      opacity = 0.8;
    } else {
      scale = 0.75;
      blur = 3;
      opacity = 0;
    }

    return {
      offset,
      isActive,
      isVisibleCard: distance <= 1,
      style: {
        transform: `translateX(${offset * CARD_OFFSET}px) scale(${scale})`,
        opacity,
        filter: `blur(${blur}px)`,
        zIndex: isActive ? 30 : 10,
        pointerEvents: distance <= 1 ? "auto" : "none",
        transition: "all 0.5s cubic-bezier(0.34, 1.2, 0.64, 1)",
      } as React.CSSProperties,
    };
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden   bg-gradient-to-br from-[#c4a1ff] via-[#f3e8ff] to-[#fbcfe8] px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      {/* Simple Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.08),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header Section */}
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
        

          <h1 className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            AI Just Got
            <span className="">
              {" "}Personal
            </span>
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-base text-gray-600 sm:text-lg">
            This isn&apos;t just another robotic voice. CallmeAI&apos;s AI phone agents connect naturally on every call,
            handle objections empathetically, and adapt to every conversation — no two calls are ever the same.
            Your prospects experience real engagement, making every interaction count.
          </p>
        </div>

        {/* Slider Section */}
        <div
          className="relative "
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Glow Effect */}
          <div className="pointer-events-none  absolute inset-x-0 top-1/2 h-72 -translate-y-1/2 rounded-full bg-linear-to-r from-purple-300/30 via-pink-200/30 to-purple-200/30 blur-3xl" />

          {/* Main Slider Container */}
          <div
            className="relative mx-auto h-125 w-full cursor-grab overflow-visible active:cursor-grabbing md:h-135"
            onMouseLeave={onPointerLeave}
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
          >
            <div className="relative flex h-full w-full items-center justify-center ">
              {(() => {
                const card1 = getCardState(0);
                const card2 = getCardState(1);
                const card3 = getCardState(2);
                const card4 = getCardState(3);
                const card5 = getCardState(4);

                const cards = [
                  {
                    state: card1,
                    image: leadImage,
                    title: "Leads Instantly Contacted",
                    description: "Slow outbound — leads cool off or move on to competitors"
                  },
                  {
                    state: card2,
                    image: leadImage1,
                    title: "Empathetic Objection Handling",
                    description: "Responds thoughtfully to questions and concerns."
                  },
                  {
                    state: card3,
                    image: leadImage2,
                    title: "Dynamic Engagement",
                    description: "Every call is unique — AI adjusts tone, pace, and messaging in real-time."
                  },
                  {
                    state: card4,
                    image: leadImage3,
                    title: "Consistent Quality",
                    description: "Maintains professionalism and high performance on every call, 24/7."
                  },
                  {
                    state: card5,
                    image: leadImage4,
                    title: "Personalized Touch",
                    description: "Uses lead data to tailor interactions and build rapport."
                  }
                ];

                return (
                  <>
                    {cards.map((card, index) => (
                      <div
                        key={index}
                        className={`absolute left-1/2 top-1/2 h-100 w-70 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl transition-all duration-500 select-none ${
                          card.state.isActive ? "shadow-2xl shadow-purple-500/20 ring-2 ring-purple-400/20" : "shadow-lg"
                        }`}
                        style={card.state.style}
                        onContextMenu={(e) => e.preventDefault()}
                      >
                        <div className="relative flex h-full w-full flex-col rounded-2xl border border-purple-200 bg-white p-3.5 pointer-events-none">
                          <Image
                            src={card.image}
                            alt={card.title}
                            className="mt-2 h-60 w-full rounded-2xl object-cover"
                            width={400}
                            height={560}
                          />

                          <div className="flex flex-1 flex-col px-1 pt-5">
                            <h3 className="text-lg font-semibold leading-tight text-gray-900">
                              {card.title}
                            </h3>
                            <p className="mt-2 text-[17px] leading-relaxed text-gray-500">
                              {card.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                );
              })()}
            </div>

            {/* Navigation Buttons */}
            <button
              type="button"
              aria-label="Previous"
              onClick={prevSlide}
              className="absolute left-2 top-1/2 z-40 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-purple-600 shadow-md transition-all duration-300 hover:scale-110 hover:bg-purple-50 md:left-4 md:h-11 md:w-11"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              aria-label="Next"
              onClick={nextSlide}
              className="absolute right-2 top-1/2 z-40 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-purple-600 shadow-md transition-all duration-300 hover:scale-110 hover:bg-purple-50 md:right-4 md:h-11 md:w-11"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => setIsPlaying((prev) => !prev)}
              aria-label={isPlaying ? "Pause" : "Play"}
              className="flex h-9 md:ml-0 ml-10 w-9 items-center justify-center rounded-full bg-white text-purple-600 shadow-md transition-all duration-300 hover:scale-110"
            >
              {isPlaying ? (
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 7v10M15 7v10" strokeLinecap="round" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="h-4 w-4 ml-0.5" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

          

            <div className="w-9" />
          </div>
        </div>

    
      </div>
    </section>
  );
}