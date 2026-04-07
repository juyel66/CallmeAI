"use client";

import Image from "next/image";
import humanImage from "../../../../public/images/Rectangle 7 (5).svg";

const features = [
  {
    title: "Natural Tone",
    desc: "Speaks with natural cadence and inflection, making every conversation feel authentic.",
  },
  {
    title: "Dynamic Conversations",
    desc: "Adjusts in real time to keep the dialogue flowing naturally.",
  },
  {
    title: "Context-Aware",
    desc: "Understands conversation history and responds intentionally.",
  },
  {
    title: "Handles Interruptions",
    desc: "Can pause, pivot, and continue seamlessly without losing track.",
  },
  {
    title: "Script-Free Flexibility",
    desc: "Engages leads without relying on rigid, repetitive scripts.",
  },
  {
    title: "Empathetic Responses",
    desc: "Interprets cues and replies in a way that feels thoughtful and personal.",
  },
];

const Human = () => {
  return (
    <section className="w-full bg-linear-to-r from-[#ede9fe] via-[#f5f3ff] to-[#e9d5ff] py-20 px-4 sm:px-6 lg:px-8">

      <div className="container mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Human-like AI trust
          </h2>

          <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed">
            Your AI agent adapts to every conversation, understands context, and responds intentionally — giving prospects a human-like experience. It flows naturally, adjusts on the fly, and adapts to interruptions in real time, creating conversations that feel authentic, dynamic, and unscripted.
          </p>
        </div>

        {/* CONTENT */}
        <div className="mt-10 grid items-start gap-5 lg:grid-cols-2 lg:items-center lg:gap-5">

          {/* LEFT FEATURES */}
          <div className="flex flex-col gap-4">
            {features.map((item, index) => (
              <div
                key={index}
                className="rounded-xl border border-[#8E00FF] bg-white/70 backdrop-blur px-5 py-4 shadow-sm"
              >
                <h3 className="font-semibold text-black">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT IMAGE CARD */}
          <div className="flex items-center justify-center lg:self-center">
            <div className="relative md:mr-26 w-full max-w-xl rounded-2xl p-6 lg:max-w-2xl">

              {/* DEMO IMAGE (you can replace later) */}
              <Image
                src={humanImage}
                alt="AI conversation"
                width={700}
                height={430}
                className="w-full rounded-xl"
              />

          

            

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Human;