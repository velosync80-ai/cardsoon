"use client"
import { useState } from "react"

const faqs = [
  {
    q: "What is a Virtual Dollar Card?",
    a: "A Virtual Dollar Card is a digital card that works just like a physical debit card but exists only online. It allows you to make international payments and subscriptions in dollars."
  },
  {
    q: "How do I fund my virtual card?",
    a: "You can fund your virtual card by adding money to your Cardsoon wallet using bank transfer, card payment, or by trading gift cards."
  },
  {
    q: "Where can I use my virtual card?",
    a: "Your virtual card can be used on any website or platform that accepts Visa/Mastercard for online payments, including Netflix, Amazon, Spotify, and thousands of other merchants."
  },
  {
    q: "Are there any transaction fees?",
    a: "Cardsoon does not charge platform fees for virtual card transactions. The amount you see is what you will be charged. Exchange rates may vary based on market conditions."
  },
  {
    q: "Is my virtual card secure?",
    a: "Yes, your virtual card is highly secure. It uses advanced encryption and security protocols. You can also freeze or delete your card anytime from the app."
  },
  {
    q: "Can I have multiple virtual cards?",
    a: "Yes, you can create multiple virtual cards for different purposes, helping you manage your spending better."
  }
]

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section className="py-16 bg-[#F9FAFB]">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold font-SFProSemiBold mb-4">Frequently Asked  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent ">Questions</span> </h2>
        <p className="text-xl text-gray-600 font-SFPro">Everything you need to know about virtual cards.</p>
      </div>
      <div className="max-w-4xl mx-auto space-y-6 pt-5 px-5 md:px-0">
        {faqs.map((item, idx) => (
          <div
            key={item.q}
            className={`bg-white rounded-xl  overflow-hidden border border-transparent transition-all duration-300 ${openIdx === idx ? 'ring-2 ring-transparent' : ''}`}
          >
            <button
              className="flex items-center justify-between w-full px-6 py-3 font-semibold text-left text-[#232065] "
              onClick={() => setOpenIdx(idx)}
              aria-expanded={openIdx === idx}
            >
              <span className={openIdx === idx ? 'text-[#077F56] font-SFProSemiBold' : 'text-[#394047] font-SFProSemiBold'}>
                <span className="mr-2">{idx + 1}.</span> {item.q}
              </span>
              <svg
                className={`w-7 h-7 ml-4 transition-transform duration-200 ${openIdx === idx ? 'rotate-0 text-emerald-600' : 'rotate-180 text-gray-300'}`}
                fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIdx === idx && (
              <div className="px-6 pb-6 text-[#394047] animate-fadein text-[15px] font-SFProSemiBold ">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
