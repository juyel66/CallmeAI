import BookADemoButton from "@/app/Shared/Button/BookADemoButton";
import React from "react";

const AiSolutions: React.FC = () => {
  return (
    <section
      className="
        w-full 
        py-20 
        px-4 
        flex 
        items-center 
        justify-center 
        text-center 
        bg-gradient-to-r  
        from-[#a855f7] 
        via-[#c084fc] 
        to-[#d8b4fe]
      "
    >
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          The AI Solution That Speaks for Itself
        </h2>

        {/* Subtext */}
        <p className="text-white/90 text-base md:text-lg mb-8">
          Want to hear it in action? Book a demo with our team!
        </p>

        {/* Button */}

        <BookADemoButton />
      </div>
    </section>
  );
};

export default AiSolutions; 