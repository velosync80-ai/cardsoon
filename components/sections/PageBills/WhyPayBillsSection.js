'use client'

import Image from 'next/image'
import Link from 'next/link'
import { trackEvent } from '@/lib/analytics'

const steps = [
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap w-8 h-8 text-emerald-600"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>',
    alt: 'Instant Processing',
    title: 'Instant Processing',
    desc: 'All bills are processed immediately.',
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-8 h-8 text-emerald-600"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>',
    alt: 'All Major Providers',
    title: 'All Major Providers',
    desc: 'Support for all Nigerian service providers.',
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-smartphone w-8 h-8 text-emerald-600"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect><path d="M12 18h.01"></path></svg>',
    alt: 'Easy & Convenient',
    title: 'Easy & Convenient',
    desc: 'Pay bills anytime, anywhere from your phone.',
  },
]

export default function WhyPayBillsSection() {
  return (
    <section className="py-14">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold font-SFProSemiBold mb-4">Why Pay Bills with  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent ">Cardsoon</span> </h2>
        <p className="text-xl text-gray-600 font-SFPro">The smart way to manage your bills.</p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-12 max-w-6xl pt-5 mx-auto">
        {steps.map((item) => (
          <div
            key={item.title}
            className="flex-1 min-w-[230px] flex flex-col items-center"
          >
            <div
              className={`w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4`}
              dangerouslySetInnerHTML={{ __html: item.icon }}
            />
            <h4 className="font-bold text-2xl font-SFProBold my-2 text-[#1A1A1A]">
              {item.title}
            </h4>
            <p className="text-center text-gray-600 text-base font-SFPro max-w-xs">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
