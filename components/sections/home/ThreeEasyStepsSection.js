'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

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
  const [currentStep, setCurrentStep] = useState(0)

  return (
    <section className="py-14 bg-[#EEFFFC] md:bg-white ">
      <h2 className="px-5 md:px-0 text-2xl md:text-4xl font-bold text-[#03062A] text-center mb-2 font-SFProHeavy">
        How to Sell Gift Cards for Cash on Cardsoon?
      </h2>

      <p className="text-lg text-[#222423] text-center my-10 max-w-3xl mx-auto px-5 md:px-0 font-SFProSemiBold">
        Selling gift cards on Cardsoon is designed to be clear and stress-free. Both new and experienced traders trust Cardsoon as the best gift card trading app with high rates for fast cashouts.
      </p>

      <div className="hidden md:grid md:grid-cols-3 gap-3 lg:gap-12 max-w-7xl mx-auto px-4">
        {steps.map(step => (
          <div key={step.title} className="flex flex-col items-center">
            <Image src={step.img} alt={step.alt} width={120} height={136} />
            <h4 className="font-bold text-2xl my-4">{step.title}</h4>
            <p className="text-center max-w-xs">{step.desc}</p>
          </div> 
        ))}
      </div>

      <div className="md:hidden relative max-w-5xl mx-auto">
        <div className="relative text-center">
          <button
            onClick={() => setCurrentStep(s => Math.max(s - 1, 0))}
            disabled={currentStep === 0}
            className="absolute left-2 top-20 -translate-y-1/2 z-20 disabled:opacity-40"
          >
            <ChevronLeft size={32} className="text-[#077F56]" />
          </button>

          <button
            onClick={() => setCurrentStep(s => Math.min(s + 1, steps.length - 1))}
            disabled={currentStep === steps.length - 1}
            className="absolute right-2 top-20 -translate-y-1/2 z-20 disabled:opacity-40"
          >
            <ChevronRight size={32} className="text-[#077F56]" />
          </button>

          <div className="relative z-10">
            <Image
              src={steps[currentStep].img}
              alt={steps[currentStep].alt}
              width={120}
              height={136}
              className="mx-auto"
            />

            <h4 className="font-bold text-lg mt-4 flex items-center justify-center font-SFProHeavy gap-2">
              <span className="w-7 h-7 flex items-center justify-center bg-[#3A7D5A] text-white rounded-full text-sm font-SFProBold">
                {currentStep + 1}
              </span>
              {steps[currentStep].title}
            </h4>


            <p className="text-base pt-5 font-SFProMedium">
              {steps[currentStep].desc}
            </p>

            <div className="flex justify-center gap-2 pt-10">
              {steps.map((_, i) => (
                <span
                  key={i}
                  className={`h-2 px-2 rounded-full transition-all ${i === currentStep
                      ? 'w-6 bg-[#077F56] px-[20px]'
                      : 'w-2 bg-[#959EB0]'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
