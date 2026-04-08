"use client";

import { gsap } from "gsap";
import { useRouter } from "next/navigation";

const Buttons = () => {
    const router = useRouter();

    const hoverInDuration = 0.75;
    const hoverOutDuration = 0.9;
    const borderAnimationDuration = 2.5;

    const animateHoverIn = (e: React.MouseEvent<HTMLButtonElement>) => {
            const button = e.currentTarget;
            const svgRect = button.querySelector("[data-anim-stroke]") as SVGRectElement | null;
            const bg = button.querySelector("[data-anim-bg]") as HTMLDivElement | null;

            if (!svgRect || !bg) {
                return;
            }

            // Kill any existing animations to prevent conflicts
            gsap.killTweensOf(button);
            gsap.killTweensOf(bg);
            gsap.killTweensOf(svgRect);

            // Get mouse position relative to button
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Set background color
            bg.style.background = "#7F20FF";
            bg.style.opacity = "1";

            // Initialize clip-path as a small circle at mouse position
            bg.style.clipPath = `circle(0px at ${x}px ${y}px)`;

            // Button color text animation
            gsap.to(button, {
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

            gsap.to(bg, {
                clipPath: `circle(${maxDistance}px at ${x}px ${y}px)`,
                opacity: 1,
                duration: hoverInDuration,
                ease: "power2.out",
            });

            // SVG stroke animation - dash moving around the border
            const circumference = 2 * (button.offsetWidth + button.offsetHeight - 16);
            
            gsap.to(svgRect, {
                strokeDashoffset: -circumference,
                opacity: 1,
                duration: borderAnimationDuration,
                ease: "none",
                repeat: -1,
            });

            gsap.to(svgRect, {
                opacity: 1,
                duration: 0.3,
            });
    };

    const animateHoverOut = (e: React.MouseEvent<HTMLButtonElement>) => {
            const button = e.currentTarget;
            const svgRect = button.querySelector("[data-anim-stroke]") as SVGRectElement | null;
            const bg = button.querySelector("[data-anim-bg]") as HTMLDivElement | null;

            if (!svgRect || !bg) {
                return;
            }

            const textColor = button.getAttribute("data-initial-text") || "#4C1D95";
            const borderColor = button.getAttribute("data-initial-border") || "#C8B5FF";

            // Kill any existing animations to prevent conflicts
            gsap.killTweensOf(button);
            gsap.killTweensOf(bg);
            gsap.killTweensOf(svgRect);

            // Button color text animation - return to initial state
            gsap.to(button, {
                color: textColor,
                borderColor: borderColor,
                boxShadow: "0 0 0 rgba(127, 32, 255, 0)",
                duration: hoverOutDuration,
                ease: "power3.out",
                onComplete: () => {
                    button.style.color = textColor;
                },
            });

            // Background fade out - shrink circle
            gsap.to(bg, {
                clipPath: "circle(0px at 50% 50%)",
                opacity: 0,
                duration: hoverOutDuration,
                ease: "power3.out",
                onComplete: () => {
                    bg.style.background = "";
                    bg.style.clipPath = "";
                    bg.style.opacity = "0";
                },
            });

            // Stop and hide SVG stroke
            gsap.to(svgRect, {
                opacity: 0,
                duration: hoverOutDuration,
                ease: "power3.out",
            });
    };

    return (
        <div className="flex w-full flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-center">
            {/* Get Started Button */}
         

            {/* Book a Demo Button */}
            <button 
                data-initial-text="#FFFFFF"
                data-initial-border="#6F14F1"
                onClick={() => router.push("/contact")}
                onMouseEnter={animateHoverIn}
                onMouseLeave={animateHoverOut}
                className="relative w-full cursor-pointer overflow-visible rounded-xl border border-none bg-[#8E00FF] px-6 py-3 text-base font-semibold text-white shadow-lg sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
            >
                <div data-anim-bg className="absolute inset-0 rounded-xl pointer-events-none opacity-0" />
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-0" viewBox="0 0 100% 100%" preserveAspectRatio="none">
                    <rect
                        data-anim-stroke
                        x="2" y="2"
                        width="100%" height="100%"
                        fill="none" stroke="#FFFFFF" strokeWidth="2"
                        strokeDasharray="30 10" strokeDashoffset="0"
                        rx="10" ry="10"
                    />
                </svg>
                <span className="relative z-10 flex w-full items-center justify-center gap-2">
                    Book a Demo 
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                </span>
            </button>

            {/* Pricing Button */}
            <button 
                data-initial-text="#FFFFFF"
                data-initial-border="#C8B5FF"
                onClick={() => router.push("/pricing")}
                onMouseEnter={animateHoverIn}
                onMouseLeave={animateHoverOut}
                className="relative w-full cursor-pointer overflow-visible rounded-xl border border-[#C8B5FF] px-6 py-3 text-base font-semibold text-white sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
            >
                <div data-anim-bg className="absolute inset-0 rounded-xl pointer-events-none opacity-0" />
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-0" viewBox="0 0 100% 100%" preserveAspectRatio="none">
                    <rect
                        data-anim-stroke
                        x="2" y="2"
                        width="100%" height="100%"
                        fill="none" stroke="#6F14F1" strokeWidth="2"
                        strokeDasharray="30 10" strokeDashoffset="0"
                        rx="10" ry="10"
                    />
                </svg>
                <span className="relative z-10 flex w-full items-center justify-center">Pricing</span>
            </button>
        </div>
    );
};

export default Buttons;