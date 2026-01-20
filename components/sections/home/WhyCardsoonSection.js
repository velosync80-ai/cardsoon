'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const features = [
  {
    icon: '/images/best_rate.png',
    title: 'Best Rates',
    description: 'Get the highest value for your gift cards every time.',
  },
  {
    icon: '/images/instant_payment.png',
    title: 'Instant Payments',
    description: 'Sell gift cards and receive money quickly and conveniently.',
  },
  {
    icon: '/images/easy_to_use.png',
    title: 'Easy to Use',
    description: 'Trade gift cards in just a few simple steps. No stress, no confusion.',
  },
  {
    icon: '/images/secure_payment.png',
    title: 'Secure Trading',
    description: 'Your gift card trades are 100% safe and protected.',
  },
]

export default function WhyCardsoonSection() {
  const [current, setCurrent] = useState(0)

  return (
    <section className="py-16 pb-5 bg-white">
      <h2 className="px-5 md:px-0 text-3xl md:text-4xl font-SFProBlack text-[#03062A] text-center mb-10">
        Why Cardsoon for Trading Gift Cards?
      </h2>
 
      <div className="hidden md:flex grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-10 lg:gap-16 px-7 pt-5 max-w-7xl mx-auto">
        {features.map(item => (
          <FeatureCard key={item.title} item={item} />
        ))}
      </div>
 
      <div className="md:hidden max-w-xs mx-auto">
        <div className="relative"> 
          <button
            disabled={current === 0}
            onClick={() => setCurrent(c => Math.max(c - 1, 0))}
            className="absolute -left-8 top-1/2 -translate-y-1/2 z-20 disabled:opacity-40"
          >
            <ChevronLeft size={32} className="text-[#077F56]" />
          </button>
  
          <button
            disabled={current === features.length - 1}
            onClick={() => setCurrent(c => Math.min(c + 1, features.length - 1))}
            className="absolute -right-8 top-1/2 -translate-y-1/2 z-20 disabled:opacity-40"
          >
            <ChevronRight size={32} className="text-[#077F56]" />
          </button>

          <FeatureCard item={features[current]} />
        </div> 
      </div>
    </section>
  )
}

function FeatureCard({ item }) {
  return (
    <div className="relative bg-white rounded-xl border border-[#8F99AC] p-7 px-5 flex flex-col items-center text-center">
      <div className="absolute top-4 left-4 flex gap-1">
        <span className="w-1.5 h-1.5 rounded-full bg-[#FF5F57]" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#FEBC2E]" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#27C83F]" />
      </div>

      <Image src={item.icon} alt={item.title} width={65} height={40} className="pt-5" />

      <h4 className="font-bold text-lg md:text-xl mt-4 font-SFProBold text-[#1A1A1A] mb-3">
        {item.title}
      </h4>

      <p className="text-[#000000] text-sm font-SFProSemiBold">
        {item.description}
      </p>
    </div>
  )
}

