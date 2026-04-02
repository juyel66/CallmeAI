"use client";

import { gsap } from "gsap";
import { useRouter } from "next/navigation";

type GetStatedButtonProps = {
    className?: string;
};

const GetStatedButton = ({ className = "" }: GetStatedButtonProps) => {
    const router = useRouter();

    const hoverInDuration = 0.75;
    const hoverOutDuration = 0.9;

    const animateHoverIn = (e: React.MouseEvent<HTMLButtonElement>) => {
        const button = e.currentTarget;
        const bg = button.querySelector("[data-anim-bg]") as HTMLDivElement | null;

        if (!bg) {
            return;
        }

        gsap.killTweensOf(button);
        gsap.killTweensOf(bg);

        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        bg.style.background = "#7F20FF";
        bg.style.opacity = "1";
        bg.style.clipPath = `circle(0px at ${x}px ${y}px)`;

        gsap.to(button, {
            color: "#FFFFFF",
            backgroundColor: "#7F20FF",
            borderColor: "#7F20FF",
            boxShadow: "0 14px 34px rgba(127, 32, 255, 0.4)",
            duration: hoverInDuration,
            ease: "power2.out",
        });

        const maxDistance = Math.sqrt(
            Math.max(x, rect.width - x) ** 2 + Math.max(y, rect.height - y) ** 2
        ) + 30;

        gsap.to(bg, {
            clipPath: `circle(${maxDistance}px at ${x}px ${y}px)`,
            opacity: 1,
            duration: hoverInDuration,
            ease: "power2.out",
        });
    };

    const animateHoverOut = (e: React.MouseEvent<HTMLButtonElement>) => {
        const button = e.currentTarget;
        const bg = button.querySelector("[data-anim-bg]") as HTMLDivElement | null;

        if (!bg) {
            return;
        }

        const textColor = button.getAttribute("data-initial-text") || "#6F14F1";
        const borderColor = button.getAttribute("data-initial-border") || "#C8B5FF";
        const initialBg = button.getAttribute("data-initial-bg") || "#FFFFFF";

        gsap.killTweensOf(button);
        gsap.killTweensOf(bg);

        gsap.to(button, {
            color: textColor,
            backgroundColor: initialBg,
            borderColor,
            boxShadow: "0 0 0 rgba(127, 32, 255, 0)",
            duration: hoverOutDuration,
            ease: "power3.out",
            onComplete: () => {
                button.style.color = textColor;
            },
        });

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
    };

    return (
        <button
            data-initial-text="#6F14F1"
            data-initial-border="#C8B5FF"
            data-initial-bg="#FFFFFF"
            onClick={() => router.push("/contact")}
            onMouseEnter={animateHoverIn}
            onMouseLeave={animateHoverOut}
            className={`relative w-full cursor-pointer overflow-hidden rounded-xl border border-[#C8B5FF] bg-white px-6 py-3 text-base font-semibold text-[#6F14F1] sm:w-auto sm:px-8 sm:py-4 sm:text-lg ${className}`}
        >
            <div data-anim-bg className="pointer-events-none absolute inset-0 rounded-xl opacity-0" />
            <span className="relative z-10 flex w-full items-center justify-center gap-2">
                Get Started
                <svg
                    width="20"
                    height="20"
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
            </span>
        </button>
    );
};

export default GetStatedButton;