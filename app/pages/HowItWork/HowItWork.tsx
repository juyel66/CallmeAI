"use client";

import { useEffect, useRef, useState } from "react";
import { Bell, CircleAlert, Database, Headset, MessagesSquare, PhoneCall } from "lucide-react";
import Link from "next/link";

const howItWorksData = [
    {
        id: 1,
        icon: CircleAlert,
        step: "Step 01",
        title: "Leads Instantly Contacted",
        description: "Reach every new lead within seconds no delays, no lost opportunities.",
    },
    {
        id: 2,
        icon: MessagesSquare,
        step: "Step 02",
        title: "Multi-Touch Follow-Up",
        description: "AI phone agent handles conversations professionally and filters out low-quality leads.",
    },
    {
        id: 3,
        icon: Headset,
        step: "Step 03",
        title: "Qualified Calls Booked",
        description: "High-intent leads are routed to your calendar so your team only speaks with ready buyers.",
    },
    {
        id: 4,
        icon: PhoneCall,
        step: "Step 04",
        title: "Instant Agent Handoff",
        description: "When prospects are ready, the conversation is handed to your sales team at the right moment.",
    },
    {
        id: 5,
        icon: Bell,
        step: "Step 05",
        title: "Real-Time Alerts",
        description: "Your team gets immediate notifications when qualified leads take high-intent actions.",
    },
    {
        id: 6,
        icon: Database,
        step: "Step 06",
        title: "CRM Auto Sync",
        description: "Call summaries, tags, and lead status are synced to CRM automatically without manual updates.",
    },
];

const CARD_HEIGHT = 224;
const CARD_GAP = 16;
const STEP_SIZE = CARD_HEIGHT + CARD_GAP;
const MOVE_THRESHOLD = 34;
const MOVE_COOLDOWN = 280;

export default function HowItWork() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const dragStartYRef = useRef<number | null>(null);
    const lastTriggerRef = useRef(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const total = howItWorksData.length;

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % total);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + total) % total);
    };

    const triggerMove = (deltaY: number) => {
        const now = Date.now();
        if (now - lastTriggerRef.current < MOVE_COOLDOWN) return;

        // Mouse up (negative deltaY) - cards go up.
        if (deltaY < -MOVE_THRESHOLD) {
            nextSlide();
            lastTriggerRef.current = now;
            return;
        }

        // Mouse down (positive deltaY) - cards go down.
        if (deltaY > MOVE_THRESHOLD) {
            prevSlide();
            lastTriggerRef.current = now;
        }
    };

    useEffect(() => {
        if (isPaused) return;

        const timerId = window.setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % total);
        }, 2600);

        return () => {
            window.clearInterval(timerId);
        };
    }, [isPaused, total]);
    

    // Prevent page scroll when interacting with the carousel
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const preventScroll = (e: WheelEvent) => {
            e.preventDefault();
        };

        container.addEventListener('wheel', preventScroll, { passive: false });
        
        return () => {
            container.removeEventListener('wheel', preventScroll);
        };
    }, []);

    return (
        <section className="w-full   select-none py-10 sm:py-12 md:py-16 bg-gradient-to-r from-[#f3e8ff] via-[#faf5ff] to-[#e9d5ff]" onCopy={(e) => e.preventDefault()}>
            <div className="container mx-auto grid grid-cols-1 gap-5 px-4 sm:px-6 lg:grid-cols-[240px_1fr] lg:items-center lg:gap-14">
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                    <h2 className="text-3xl font-bold text-black sm:text-4xl md:text-5xl lg:whitespace-nowrap">How It Works</h2>
               <Link href="/contact"
  type="button"
  className="mt-4 self-center rounded-xl bg-[#8E00FF] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#6f14f1] sm:px-6 sm:py-3 lg:ml-13 flex items-center justify-center gap-2"
>
  Book a demo
  <svg
    width="17"
    height="17"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="ml-1"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
</Link>
                </div>

                <div className="w-full rounded-3xl bg-white/70 p-2 sm:p-3 lg:max-w-5xl lg:justify-self-center">
                    <div
                        ref={containerRef}
                        className="relative h-96 cursor-grab overflow-hidden rounded-2xl touch-none active:cursor-grabbing sm:h-112 lg:h-172"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => {
                            setIsPaused(false);
                            dragStartYRef.current = null;
                        }}
                        onWheel={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            // Scroll up (negative deltaY) - cards go up
                            // Scroll down (positive deltaY) - cards go down
                            triggerMove(e.deltaY);
                        }}
                        onMouseDown={(e) => {
                            dragStartYRef.current = e.clientY;
                        }}
                        onMouseMove={(e) => {
                            if (dragStartYRef.current === null) return;
                            
                            const deltaY = e.clientY - dragStartYRef.current;
                            if (Math.abs(deltaY) < MOVE_THRESHOLD) return;
                            
                            // Drag up (negative deltaY) - cards go up
                            // Drag down (positive deltaY) - cards go down
                            triggerMove(deltaY);
                            dragStartYRef.current = e.clientY;
                        }}
                        onMouseUp={() => {
                            dragStartYRef.current = null;
                        }}
                        onPointerDown={(e) => {
                            dragStartYRef.current = e.clientY;
                            e.currentTarget.setPointerCapture(e.pointerId);
                        }}
                        onPointerMove={(e) => {
                            if (dragStartYRef.current === null) return;

                            const deltaY = e.clientY - dragStartYRef.current;
                            if (Math.abs(deltaY) < MOVE_THRESHOLD) return;

                            // Touch drag - works the same way
                            triggerMove(deltaY);
                            dragStartYRef.current = e.clientY;
                        }}
                        onPointerUp={() => {
                            dragStartYRef.current = null;
                        }}
                        onPointerCancel={() => {
                            dragStartYRef.current = null;
                        }}
                    >
                        {howItWorksData.map((item, index) => {
                            let offset = index - currentIndex;
                            if (offset > total / 2) offset -= total;
                            if (offset < -total / 2) offset += total;

                            const isActive = offset === 0;
                            const isVisible = Math.abs(offset) <= 1;
                            const Icon = item.icon;

                            return (
                                <article
                                    key={item.id}
                                    className="absolute inset-x-0 flex h-84 flex-col items-center justify-center rounded-2xl border border-[#A14DFF] bg-white px-4 text-center shadow-[0_10px_24px_rgba(0,0,0,0.08)] transition-[transform,filter,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:h-56 sm:px-8"
                                    style={{
                                        top: "50%",
                                        transform: `translateY(calc(-50% + ${offset * STEP_SIZE}px)) scale(${isActive ? 1 : 0.95})`,
                                        filter: isActive ? "blur(0px)" : isVisible ? "blur(1px)" : "blur(2px)",
                                        opacity: isVisible ? (isActive ? 1 : 0.72) : 0,
                                        zIndex: isActive ? 20 : isVisible ? 10 : 0,
                                        pointerEvents: isVisible ? "auto" : "none",
                                    }}
                                >
                                    <Icon className="h-5 w-5 text-[#2c2c2c]" strokeWidth={1.8} />
                                    <p className="mt-3 text-lg text-[#2c2c2c] sm:text-2xl">{item.step}</p>
                                    <h3 className="mt-3 text-xl font-bold leading-tight text-black sm:text-3xl md:text-4xl">{item.title}</h3>
                                    <p className="mt-3 max-w-4xl text-sm leading-relaxed text-[#1f1f1f] sm:text-xl sm:leading-snug">{item.description}</p>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}