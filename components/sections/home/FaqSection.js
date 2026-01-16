"use client"
import { useState } from "react"

const faqs = [
  {
    q: "Which gift cards can I sell on Cardsoon?",
    a: "You can sell a wide variety of gift cards, including Amazon, Steam, Apple, Google Play, and more."
  },
  {
    q: "Is Cardsoon a legitimate site to sell gift cards online?",
    a: "Absolutely! Cardsoon is fully secure and trusted by thousands of users, and is known as the best gift card trading app with high rates."
  },
  {
    q: "How quickly will I receive my payment on Cardsoon?",
    a: "Payments are processed instantly once your gift card is verified, making trading quick and hassle-free."
  },
  {
    q: "Can I trade gift cards at any time on Cardsoon?",
    a: "Yes! Cardsoon is available 24/7, so you can sell gift cards whenever it's convenient for you."
  }
]

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0); 
  return (
    <section className="py-16 bg-[#F9FAFB]">
      <h2 className="px-5 md:px-0 text-center text-3xl md:text-4xl font-semibold text-[#03062A] font-SFProBlack  mb-10 ">Frequently Asked <span className="text-emerald-600">Questions</span></h2>

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
              <span className={openIdx === idx ? 'text-[#077F56] font-SFProBold' : 'text-[#394047] font-SFProBold'}>
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
