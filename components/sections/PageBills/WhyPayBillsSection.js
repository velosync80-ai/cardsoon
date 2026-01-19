'use client'

import Image from 'next/image'
import Link from 'next/link'
import { trackEvent } from '@/lib/analytics'
import { Smartphone, Zap, CheckCircle } from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    title: 'Instant Processing',
    description: 'All bills are processed immediately.',
  },
  {
    icon: CheckCircle,
    title: 'All Major Providers',
    description: 'Support for all Nigerian service providers.',
  },
  {
    icon: Smartphone,
    title: 'Easy & Convenient',
    description: 'Pay bills anytime, anywhere from your phone.',
  },
];

export default function WhyPayBillsSection() {
  return (
    <section className="py-14">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold font-SFProSemiBold mb-4">Why Pay Bills with  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent ">Cardsoon</span> </h2>
        <p className="text-xl text-gray-600 font-SFPro">The smart way to manage your bills.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <benefit.icon className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 font-SFProSemiBold">{benefit.title}</h3>
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
