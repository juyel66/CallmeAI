"use client";

import Image from "next/image";
import humanImage from "../../../../public/images/Rectangle 7 (3).svg";

const features = [
  {
    title: "Natural Tone",
    desc: "Speaks with natural cadence and inflection, making every conversation feel authentic",
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
        <div className="mt-10 grid gap-6 items-start lg:grid-cols-2 lg:items-center lg:gap-8">

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
            <div className="relative md:mr-26   w-full max-w-lg rounded-2xl border border-[#8E00FF] bg-white p-6 ">

              {/* DEMO IMAGE (you can replace later) */}
              <Image
                src={humanImage}
                alt="AI conversation"
                width={620}
                height={380}
                className="h-80 w-full  rounded-xl object-cover lg:h-96"
              />

              {/* CHAT BUBBLES (UI MOCK) */}
              <div className="absolute top-6 left-6 bg-purple-500 text-white text-xs px-3 py-2 rounded-lg shadow">
                Hi! I&apos;m calling to discuss your inquiry.
              </div>

              <div className="absolute top-20 left-10 bg-purple-400 text-white text-xs px-3 py-2 rounded-lg shadow">
                Are you available for a call tomorrow at 10 AM?
              </div>

            

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Human;