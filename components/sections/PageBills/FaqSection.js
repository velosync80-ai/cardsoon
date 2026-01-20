"use client"
import { useState } from "react"

const faqs = [
  {
    q: "Which bill payments do you support?",
    a: "We support airtime, data, electricity, cable TV, and internet bills for all major Nigerian providers."
  },
  {
    q: "How long does it take to process payments?",
    a: "Most payments are processed instantly. You will receive confirmation immediately after successful payment."
  },
  {
    q: "Are there any transaction fees?",
    a: "Cardsoon does not charge any platform fees for bill payments. The amount you see is what you will pay."
  },
  {
    q: "Can I schedule recurring payments?",
    a: "Yes, you can set up automatic recurring payments for regular bills like data subscriptions and cable TV."
  }
]

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section className="py-16 bg-[#F9FAFB]">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold font-SFProSemiBold mb-4">Frequently Asked  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent ">Questions</span> </h2>
        <p className="text-xl text-gray-600 font-SFPro">Everything you need to know about bill payments.</p>
      </div>
      <div className="max-w-4xl mx-auto space-y-6 pt-5 px-5 md:px-0">
        {faqs.map((item, idx) => (
          <div
            key={item.q}
            className={`bg-white rounded-xl  overflow-hidden border border-transparent transition-all duration-300 ${openIdx === idx ? 'ring-2 ring-transparent' : ''}`}
          >
            <button
              className="flex items-center justify-between w-full px-4 md:px-6 py-3 font-semibold text-base md:text-lg text-left text-[#232065] "
              onClick={() => setOpenIdx(idx)}
              aria-expanded={openIdx === idx}
            >
              <span className={openIdx === idx ? 'text-[#077F56] font-SFProSemiBold' : 'text-[#394047] font-SFProSemiBold'}>
                {item.q}
              </span>
              <svg
                className={`w-5 h-5 md:w-6 md:h-6 ml-4 transition-transform duration-200 ${openIdx === idx ? 'rotate-0 text-emerald-600' : 'rotate-180 text-gray-300'}`}
                fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIdx === idx && (
              <div className="px-4 pb-6 text-gray-500 animate-fadein text-[15px] font-SFProSemiBold ">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
