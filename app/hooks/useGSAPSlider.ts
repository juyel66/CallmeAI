import { useEffect } from "react";
import { gsap } from "../lib/gsap";

export const useGSAPSlider = (ref: React.RefObject<HTMLDivElement>) => {
  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".card");

      gsap.to(cards, {
        xPercent: -100 * (cards.length - 1),
        ease: "none",
      });
    }, ref);

    return () => ctx.revert();
  }, [ref]);
};