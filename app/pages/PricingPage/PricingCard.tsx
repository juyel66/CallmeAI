"use client";

import ContactSalesButton from "@/app/Shared/Button/ContactSalesButton";
import GetStatedButton from "@/app/Shared/Button/GetStatedButton";
import ScaleNowButton from "@/app/Shared/Button/ScaleNowButton";

const plans = [
  {
    title: "Essential",
    price: "$425",
    subtitle: "(4 weeks)",
    description:
      "Your foundation for faster lead response with AI-driven outreach so leads don’t slip through the cracks",
    button: "Get Started →",
    highlight: false,
    features: [
      "500 Minutes Included",
      "AI Appointment Setter (calls, qualifies, books)",
      "Multi-Touch Follow-Up (calls, SMS, voicemail)",
      
      "Smart Lead Qualification",
      "Direct Calendar Booking",
      "Local Phone Number",
      "Pre-Built Workflows",
      "Fully Customizable",
      "Dedicated Support",
    ],
  },
  {
    title: "Growth",
    price: "$795",
    subtitle: "(4 weeks)",
    description:
      "Designed for high-volume operations to fully automate and optimize your sales pipeline",
    button: "Grow Faster",
    highlight: true,
    features: [
      "1,500 Minutes Included",
      "AI Appointment Setter (calls, qualifies, books)",
      "Multi-Touch Follow-Up (calls, SMS, voicemail)",
      "Smart Lead Qualification",
      "Direct Calendar Booking",
      "Local Phone Number",
      "Pre-Built Workflows",
      "Fully Customizable",
      "Dedicated Support",
    ],
  },
  {
    title: "Enterprise",
    price: "$1,395",
    subtitle: "(4 weeks)",
    description:
      "Designed for high-volume operations to fully automate and optimize your sales pipeline",
    button: "Scale Now →",
    highlight: false,
    features: [
      "3,000 Minutes Included",
      "AI Appointment Setter (calls, qualifies, books)",
      "Multi-Touch Follow-Up (calls, SMS, voicemail)",
      "Smart Lead Qualification",
      "Direct Calendar Booking",
      "Local Phone Number",
      "Pre-Built Workflows",
      "Fully Customizable",
      "Dedicated Support",
    ],
  },
  {
    title: "Custom",
    price: "Flexible",
    subtitle: "",
    description:
      "Tailored AI solutions with flexible minute allocations, built specifically around your business needs and goals",
    button: "Contact Sales →",
    highlight: false,
    features: [
      "Flexible",
      "AI Appointment Setter (calls, qualifies, books)",
      "Multi-Touch Follow-Up (calls, SMS, voicemail)",
      "Smart Lead Qualification",
      "Direct Calendar Booking",
      "Local Phone Number",
      "Pre-Built Workflows",
      "Fully Customizable",
      "Dedicated Support",
    ],
  },
];

const PricingCard = () => {
  return (
    <section className="w-full bg-[#f3f3f3] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`
                relative rounded-2xl border-3 bg-white hover:scale-[1.01] hover:shadow-lg p-6 flex flex-col
                ${plan.highlight ? "border-[#8E00FF] shadow-lg" : "border-gray-300"}
              `}
            >
              {/* MOST POPULAR */}
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#A533FF] text-white text-xs px-4 py-2 rounded-full">
                  Most Popular
                </div>
              )}

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-black">{plan.title}</h3>

              {/* DESCRIPTION */}
              <p className="mt-3 text-sm text-gray-600">{plan.description}</p>

              {/* PRICE */}
              <div className="mt-4 text-2xl font-bold text-black">
                {plan.price}

                {plan.price !== "Flexible" && "/"}

                <span className="text-sm font-normal text-gray-500">
                  {plan.subtitle}
                </span>
              </div>

              {/* BUTTON */}
              {plan.title === "Essential" && (
                <GetStatedButton className="mt-4 w-auto rounded-lg px-4 py-2 text-sm font-medium sm:w-auto sm:px-4 sm:py-2 sm:text-sm" />
              )}

              {plan.title === "Growth" && (
                <button className="mt-4  rounded-lg bg-[#8E00FF] px-4 py-4.5 text-sm font-medium text-white transition hover:bg-[#A533FF]">
                  <span className="flex items-center justify-center gap-2">
                    {plan.button}
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
              )}

              {plan.title === "Enterprise" && (
                <ScaleNowButton className="mt-4 w-auto rounded-lg px-4 py-2 text-sm font-medium sm:w-auto sm:px-4 sm:py-2 sm:text-sm" />
              )}

              {plan.title === "Custom" && (
                <ContactSalesButton className="mt-4 w-auto rounded-lg px-4 py-2 text-sm font-medium sm:w-auto sm:px-4 sm:py-2 sm:text-sm" />
              )}

              {/* FEATURES */}
              <ul className="mt-6 space-y-3 text-sm text-gray-700">
                {plan.features.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#8E00FF] mt-1">✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingCard;
