"use client";

import { useRef } from "react";
import { gsap } from "gsap";

const Buttons = () => {
    // Refs for Get Started button
    const getStartedButtonRef = useRef<HTMLButtonElement>(null);
    const getStartedSvgRef = useRef<SVGRectElement>(null);
    const getStartedBgRef = useRef<HTMLDivElement>(null);

    // Refs for Book a Demo button
    const bookDemoButtonRef = useRef<HTMLButtonElement>(null);
    const bookDemoSvgRef = useRef<SVGRectElement>(null);
    const bookDemoBgRef = useRef<HTMLDivElement>(null);

    // Refs for Pricing button
    const pricingButtonRef = useRef<HTMLButtonElement>(null);
    const pricingSvgRef = useRef<SVGRectElement>(null);
    const pricingBgRef = useRef<HTMLDivElement>(null);

    const hoverInDuration = 0.75;
    const hoverOutDuration = 0.9;
    const borderAnimationDuration = 2.5;

    const createAnimateHoverIn = (
        buttonRef: React.RefObject<HTMLButtonElement>,
        svgRef: React.RefObject<SVGRectElement>,
        bgRef: React.RefObject<HTMLDivElement>,
        textColor: string,
        borderColor: string
    ) => {
        return (e: React.MouseEvent<HTMLButtonElement>) => {
            if (!buttonRef.current || !svgRef.current || !bgRef.current) {
                return;
            }

            // Kill any existing animations to prevent conflicts
            gsap.killTweensOf(buttonRef.current);
            gsap.killTweensOf(bgRef.current);
            gsap.killTweensOf(svgRef.current);

            // Get mouse position relative to button
            const rect = buttonRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Set background color
            bgRef.current.style.background = "#7F20FF";
            bgRef.current.style.opacity = "1";

            // Initialize clip-path as a small circle at mouse position
            bgRef.current.style.clipPath = `circle(0px at ${x}px ${y}px)`;

            // Button color text animation
            gsap.to(buttonRef.current, {
                color: "#FFFFFF",
                borderColor: "#6F14F1",
                boxShadow: "0 14px 34px rgba(127, 32, 255, 0.4)",
                duration: hoverInDuration,
                ease: "power2.out",
            });

            // Circular clip-path expansion animation
            const maxDistance = Math.sqrt(
                Math.max(x, rect.width - x) ** 2 + Math.max(y, rect.height - y) ** 2
            ) + 30; // Add extra 30px to ensure full coverage of all button sizes and rounded corners

            gsap.to(bgRef.current, {
                clipPath: `circle(${maxDistance}px at ${x}px ${y}px)`,
                opacity: 1,
                duration: hoverInDuration,
                ease: "power2.out",
            });

            // SVG stroke animation - dash moving around the border
            const circumference = 2 * (buttonRef.current.offsetWidth + buttonRef.current.offsetHeight - 16);
            
            gsap.to(svgRef.current, {
                strokeDashoffset: -circumference,
                opacity: 1,
                duration: borderAnimationDuration,
                ease: "none",
                repeat: -1,
            });

            gsap.to(svgRef.current, {
                opacity: 1,
                duration: 0.3,
            });
        };
    };

    const createAnimateHoverOut = (
        buttonRef: React.RefObject<HTMLButtonElement>,
        svgRef: React.RefObject<SVGRectElement>,
        bgRef: React.RefObject<HTMLDivElement>,
        textColor: string,
        borderColor: string
    ) => {
        return () => {
            if (!buttonRef.current || !svgRef.current || !bgRef.current) {
                return;
            }

            // Kill any existing animations to prevent conflicts
            gsap.killTweensOf(buttonRef.current);
            gsap.killTweensOf(bgRef.current);
            gsap.killTweensOf(svgRef.current);

            // Button color text animation - return to initial state
            gsap.to(buttonRef.current, {
                color: textColor,
                borderColor: borderColor,
                boxShadow: "0 0 0 rgba(127, 32, 255, 0)",
                duration: hoverOutDuration,
                ease: "power3.out",
                onComplete: () => {
                    if (buttonRef.current) {
                        buttonRef.current.style.color = textColor;
                    }
                },
            });

            // Background fade out - shrink circle
            gsap.to(bgRef.current, {
                clipPath: "circle(0px at 50% 50%)",
                opacity: 0,
                duration: hoverOutDuration,
                ease: "power3.out",
                onComplete: () => {
                    if (bgRef.current) {
                        bgRef.current.style.background = "";
                        bgRef.current.style.clipPath = "";
                        bgRef.current.style.opacity = "0";
                    }
                },
            });

            // Stop and hide SVG stroke
            gsap.to(svgRef.current, {
                opacity: 0,
                duration: hoverOutDuration,
                ease: "power3.out",
            });
        };
    };

    return (
        <div className="space-x-3">
            {/* Get Started Button */}
         

            {/* Book a Demo Button */}
            <button 
                ref={bookDemoButtonRef}
                onMouseEnter={createAnimateHoverIn(bookDemoButtonRef, bookDemoSvgRef, bookDemoBgRef, "#FFFFFF", "#6F14F1")}
                onMouseLeave={createAnimateHoverOut(bookDemoButtonRef, bookDemoSvgRef, bookDemoBgRef, "#FFFFFF", "#6F14F1")}
                className="relative overflow-visible cursor-pointer rounded-xl border border-none bg-[#7F20FF] px-8 py-4 text-lg font-semibold text-white shadow-lg"
            >
                <div ref={bookDemoBgRef} className="absolute inset-0 rounded-xl pointer-events-none opacity-0" />
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-0" viewBox="0 0 100% 100%" preserveAspectRatio="none">
                    <rect
                        ref={bookDemoSvgRef}
                        x="2" y="2"
                        width="100%" height="100%"
                        fill="none" stroke="#FFFFFF" strokeWidth="2"
                        strokeDasharray="30 10" strokeDashoffset="0"
                        rx="10" ry="10"
                    />
                </svg>
                <span className="relative z-10 flex items-center gap-2">
                    Book a demo 
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                </span>
            </button>

            {/* Pricing Button */}
            <button 
                ref={getStartedButtonRef}
                onMouseEnter={createAnimateHoverIn(getStartedButtonRef, getStartedSvgRef, getStartedBgRef, "#4C1D95", "#C8B5FF")}
                onMouseLeave={createAnimateHoverOut(getStartedButtonRef, getStartedSvgRef, getStartedBgRef, "#4C1D95", "#C8B5FF")}
                className="relative overflow-visible cursor-pointer rounded-xl border border-[#C8B5FF]  px-8 py-4 text-lg font-semibold text-[#4C1D95]"
            >
                <div ref={getStartedBgRef} className="absolute inset-0 rounded-xl pointer-events-none opacity-0" />
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-0" viewBox="0 0 100% 100%" preserveAspectRatio="none">
                    <rect
                        ref={getStartedSvgRef}
                        x="2" y="2"
                        width="100%" height="100%"
                        fill="none" stroke="#6F14F1" strokeWidth="2"
                        strokeDasharray="30 10" strokeDashoffset="0"
                        rx="10" ry="10"
                    />
                </svg>
                <span className="relative z-10">Pricing</span>
            </button>
        </div>
    );
};

export default Buttons;