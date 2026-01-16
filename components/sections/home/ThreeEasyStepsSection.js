'use client'

import Image from 'next/image'
import Link from 'next/link'
import { trackEvent } from '@/lib/analytics'

const steps = [
  {
    img: '/images/step1.png',
    alt: 'step1',
    title: 'Sign Up with Cardsoon',
    desc: 'Download the Cardsoon app and create an account using your email or Apple/Google ID. Once logged in, you are ready to sell gift cards.',
  },
  {
    img: '/images/step2.png',
    alt: 'step2',
    title: 'Submit Your Trade',
    desc: 'Choose the gift card you want to sell and enter the details. Cardsoon shows the rate upfront. Upload the required information and submit your trade for review.',
  },
  {
    img: '/images/step3.png',
    alt: 'step3',
    title: 'Receive Your Payment',
    desc: 'After your gift card is verified, payment is processed and sent to your account. This fast payout experience makes Cardsoon the best app for selling gift cards online in Nigeria.',
  },
]

export default function ThreeEasyStepsSection() {
  return (
    <section className="py-14">
      <h2 className="px-5 md:px-0 text-2xl md:text-4xl font-bold text-[#03062A] font-SFProBlack text-center mb-2">
        How to Sell Gift Cards for Cash on Cardsoon? 
      </h2>

      <p className="text-lg text-[#222423] text-center my-10 mt-5 max-w-4xl mx-auto font-SFProMedium px-5 md:px-0">
        Selling gift cards on Cardsoon is designed to be clear and stress-free. Both new and experienced <br className='hidden lg:block' /> traders trust Cardsoon as the best gift card trading app with high rates for quick cashouts.
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-12 max-w-6xl pt-5 mx-auto">
        {steps.map((step) => (
          <div
            key={step.title}
            className="flex-1 min-w-[230px] flex flex-col items-center"
          >
            <Image src={step.img} alt={step.alt} width={120} height={136} />
            <h4 className="font-bold text-2xl font-SFProBold my-4 pt-5 text-[#1A1A1A]">
              {step.title}
            </h4>
            <p className="text-center text-[#000000] text-base font-SFProMedium max-w-xs">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
