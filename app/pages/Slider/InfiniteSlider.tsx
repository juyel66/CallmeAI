"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const images = [
  "https://assets.codepen.io/16327/portrait-number-01.png",
  "https://assets.codepen.io/16327/portrait-number-02.png",
  "https://assets.codepen.io/16327/portrait-number-03.png",
  "https://assets.codepen.io/16327/portrait-number-04.png",
  "https://assets.codepen.io/16327/portrait-number-05.png",
  "https://assets.codepen.io/16327/portrait-number-06.png",
  "https://assets.codepen.io/16327/portrait-number-07.png",
];

const CARD_OFFSET = 300;

export default function InfiniteSlider() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const dragStartXRef = useRef<number | null>(null);

  const total = images.length;

  useEffect(() => {
    if (!isPlaying) return;

    const timerId = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 2600);

    return () => {
      window.clearInterval(timerId);
    };
  }, [isPlaying, total]);

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

    if (Math.abs(deltaX) < 80) {
      return;
    }

    if (deltaX < 0) {
      nextSlide();
      return;
    }

    prevSlide();
  };

  const onPointerLeave = () => {
    dragStartXRef.current = null;
  };

  const cards = useMemo(() => {
    return images.map((img, index) => {
      let offset = index - current;

      if (offset > total / 2) offset -= total;
      if (offset < -total / 2) offset += total;

      const isVisible = Math.abs(offset) <= 1;
      const isActive = offset === 0;

      return {
        key: `${img}-${index}`,
        img,
        isVisible,
        style: {
          transform: `translateX(${offset * CARD_OFFSET}px) scale(${isActive ? 1.08 : 0.84})`,
          opacity: isVisible ? 1 : 0,
          filter: isActive ? "blur(0px)" : isVisible ? "blur(2.5px)" : "blur(10px)",
          zIndex: isActive ? 20 : isVisible ? 10 : 0,
          pointerEvents: isVisible ? "auto" : "none",
        } as React.CSSProperties,
      };
    });
  }, [current, total]);

  return (
    <section className="container mx-auto px-6 py-8">
      <div className="w-full">
        <div
          className="relative mx-auto h-120 w-full container overflow-hidden rounded-3xl py-4"
          onMouseLeave={onPointerLeave}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
        >
          <div className="relative h-full w-full touch-pan-y select-none cursor-grab active:cursor-grabbing">
            {cards.map((card) => (
              <div
                key={card.key}
                className="absolute left-1/2 top-1/2 h-95 w-64 -translate-x-1/2 -translate-y-1/2 rounded-[20px] border-2 border-[#333333] bg-cover bg-center bg-no-repeat transition-all duration-500 ease-out md:h-105 md:w-72"
                style={{
                  ...card.style,
                  backgroundImage: `url(${card.img})`,
                }}
              />
            ))}
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-white/90 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-white/90 to-transparent" />

          <button
            type="button"
            aria-label="Previous slide"
            onClick={prevSlide}
            onPointerDown={(e) => e.stopPropagation()}
            className="absolute left-3 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#1b1b1b] shadow-md transition hover:bg-white"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
              <path
                d="M14.5 6.5L9 12l5.5 5.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Next slide"
            onClick={nextSlide}
            onPointerDown={(e) => e.stopPropagation()}
            className="absolute right-3 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#1b1b1b] shadow-md transition hover:bg-white"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
              <path
                d="M9.5 6.5L15 12l-5.5 5.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="mt-5 flex justify-center">
          <button
            type="button"
            onClick={() => setIsPlaying((prev) => !prev)}
            aria-label={isPlaying ? "Pause autoplay" : "Play autoplay"}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#1b1b1b] shadow-md transition hover:bg-[#f6f6f6]"
          >
            {isPlaying ? (
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                <path d="M9 7v10M15 7v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                <path d="M10 8.5l6 3.5-6 3.5v-7z" fill="currentColor" />
              </svg>
            )}
          </button>
         
        </div>
      </div>
    </section>
  );
}