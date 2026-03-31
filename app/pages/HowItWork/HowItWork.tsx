"use client";

import Image from "next/image";

const howItWorksData = [
    {
        id: 1,
        icon: "📅",
        image: "/images/image 1.svg",
        title: "Appointment Booked On Calendar",
        description: "Prequalified appointments are scheduled straight into your calendar.",
    },
    {
        id: 2,
        icon: "🤖",
        image: "/images/image 2.svg",
        title: "AI Agent Calls New Leads",
        description: "The AI agent follows up immediately so no lead goes cold.",
    },
    {
        id: 3,
        icon: "📝",
        image: "/images/image 1.svg",
        title: "Lead Qualification In Real Time",
        description: "Each conversation is scored and qualified based on your conditions.",
    },
    {
        id: 4,
        icon: "🔔",
        image: "/images/image 2.svg",
        title: "Instant Team Notification",
        description: "Your team gets instant updates when high-intent prospects respond.",
    },
    {
        id: 5,
        icon: "📊",
        image: "/images/image 1.svg",
        title: "Automatic CRM Sync",
        description: "Call notes and statuses are synced to your CRM without manual work.",
    },
    {
        id: 6,
        icon: "🚀",
        image: "/images/image 2.svg",
        title: "Scale Outreach On Autopilot",
        description: "Run consistent outreach 24/7 while your team focuses on closing.",
    },
];

export default function HowItWork() {
    return (
        <section className="how-it-works-stack bg-[#F7F7F8] py-16">
            <div className="container mx-auto px-6">
                <div className="mx-auto mb-12 max-w-3xl text-center">
                    <h2 className="text-4xl font-bold text-[#171717] md:text-5xl">How It Works</h2>
                    <p className="mt-3 text-lg text-[#5B5B5B] md:text-xl">
                        From first contact to booked meeting, each step runs in sequence and keeps your sales pipeline
                        moving.
                    </p>
                </div>

                <div className="mx-auto max-w-6xl space-y-6 pb-40">
                    {howItWorksData.map((item, index) => (
                        <article
                            key={item.id}
                            className="how-card sticky w-full rounded-3xl border border-[#BEBEBE] bg-[#ECECEC] p-6 text-center shadow-[0_20px_40px_rgba(0,0,0,0.08)] md:p-8"
                            style={{
                                top: `${96 + index * 18}px`,
                                zIndex: index + 10,
                            }}
                        >
                            <div className="mx-auto mb-6 overflow-hidden rounded-2xl border border-[#D8D8D8] bg-white">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={1200}
                                    height={640}
                                    className="h-64 w-full object-cover md:h-80"
                                />
                            </div>

                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#E0E0E0] text-2xl">
                                <span aria-hidden="true">{item.icon}</span>
                            </div>
                            <h3 className="mt-5 text-3xl leading-tight font-semibold text-[#111111] md:text-[40px]">
                                {item.title}
                            </h3>
                            <p className="mx-auto mt-4 max-w-4xl text-lg text-[#3D3D3D] md:text-2xl">
                                {item.description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}