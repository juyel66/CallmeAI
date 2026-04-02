"use client";

import Link from "next/link";

const ContactPage = () => {
  return (
    <section className="w-full min-h-screen ">

      {/* 🔥 HEADER */}
      <div className="w-full bg-gradient-to-r from-[#a855f7] via-[#c084fc] to-[#e9d5ff] py-16 text-center text-white ">
        <h2 className="text-3xl md:text-4xl font-bold">Contact Us</h2>
        <p className="mt-3 text-sm md:text-base opacity-90">
          Tell us about your team and we&apos;ll follow up. Book a demo to hear the AI in action.
        </p>
      </div>

      {/* 🔥 MAIN CONTENT */}
      <div className="relative -mt-10  px-4 container mx-auto grid lg:grid-cols-2 gap-6">

       
        <div className="rounded-2xl border border-[#c4b5fd] bg-white p-6 shadow-md mb-20">

          <h3 className="text-2xl font-semibold text-black mb-6">
            Send a message
          </h3>

          <form className="space-y-4">

            {/* NAME */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">First name</label>
                <input className="mt-1 w-full border rounded-md px-3 py-2 text-sm" placeholder="Enter First name" />
              </div>

              <div>
                <label className="text-sm font-medium">Last name</label>
                <input className="mt-1 w-full border rounded-md px-3 py-2 text-sm" placeholder="Enter last name" />
              </div>
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sm font-medium">Work email</label>
              <input className="mt-1 w-full border rounded-md px-3 py-2 text-sm" placeholder="Enter work email" />
            </div>

            {/* PHONE */}
            <div>
              <label className="text-sm font-medium">Phone</label>
              <input className="mt-1 w-full border rounded-md px-3 py-2 text-sm" placeholder="Enter phone number" />
            </div>

            {/* COMPANY */}
            <div>
              <label className="text-sm font-medium">Company</label>
              <input className="mt-1 w-full border rounded-md px-3 py-2 text-sm" placeholder="Enter Company name" />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="text-sm font-medium">How can we help?</label>
              <textarea rows={4} className="mt-1 w-full border rounded-md px-3 py-2 text-sm" placeholder="Enter message......" />
            </div>

            {/* CHECKBOX */}
            <div className="flex items-start gap-2 border rounded-lg p-3 text-xs text-gray-600">
              <input type="checkbox" className="mt-1 accent-[#7F20FF]" />
              <p>
                I agree to receive SMS messages from CallmeAI related to my request for a demo or call, including call confirmations, follow-up messages, and support communications. Message frequency may vary. Message and data rates may apply. Reply STOP to opt out or HELP for help. See our{" "}
                <Link href="/privacy-policy" className="text-[#7F20FF] underline cursor-pointer">Privacy Policy</Link> and{" "}
                <Link href="/terms" className="text-[#7F20FF] underline cursor-pointer">Terms & Conditions</Link>
              </p>
            </div>

            {/* BUTTON */}
                     <button className="mt-2 rounded-lg bg-[#7F20FF] px-6 py-2.5 text-white text-sm font-medium hover:bg-[#6F14F1] flex items-center gap-2">
  Submit
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
</button>

          </form>
        </div>

       
        <div className="flex flex-col gap-6 ">

          {/* BOOK DEMO CARD */}
          <div className="rounded-2xl border border-[#c4b5fd] bg-white p-6 shadow-sm">
            <h4 className="text-2xl font-semibold text-black ">Book a demo</h4>

            <p className="mt-2 text-xl text-gray-600">
              Want to hear CallmeAI in action? Schedule time with our team — we&apos;ll walk through outbound calling, follow-up, and calendar <br /> booking for your workflow.
            </p>

            <button className="mt-4 rounded-lg bg-[#8E00FF] px-5 py-2 text-white text-sm">
              Call 012-120-120
            </button>
          </div>

          {/* COMPANY */}
          <div className="ml-6 md:mb-0 mb-10">
            <h4 className="text-2xl font-semibold text-black">Company</h4>

            <div className="mt-3 text-sm text-gray-700 space-y-1">
              <p className="font-medium text-xl ">CallmeAI</p>
              <p className="text-xl ">Contact: Jeremy Fox</p>
              <p className="text-[#7F20FF] text-xl font-medium">805-630-5770</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default ContactPage;