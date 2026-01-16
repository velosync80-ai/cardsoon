'use client'
import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { trackEvent } from '@/lib/analytics'
import Navbar from '@/components/sections/home/Navbar'

export default function HeroSection() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <section className=" relative overflow-hidden bg-gradient-to-br from-emerald-100 via-white to-emerald-50 py-20 px-4 md:px-0 bg-gradient-to-br from-[#102b36] to-[#0d242b] relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="pt-10 flex flex-col gap-6">
            <div className="inline-flex items-center space-x-2 w-fit bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-SFProSemiBold">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap w-4 h-4"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
              <span>Instant Bill Payment</span>
            </div>
            <h1 className="text-black font-bold text-4xl md:text-5xl leading-[1.5] lg:leading-[1.2] lg:text-6xl leading-tight font-SFProHeavy mb-4 text-center lg:text-left ">Pay Your Bills <br className='hidden md:block' /> <span className='text-teal-600'>Instantly</span></h1>
            <p className="text-gray-600 max-w-lg mb-4 text-lg font-SFPro">Recharge airtime, buy data, pay for electricity, cable TV, and more. All in one place, all in seconds.</p>

            <div className="flex items-center space-x-8">
              <div>
                <div className="text-3xl font-bold text-gray-900 font-SFProSemiBold">5+</div>
                <div className="text-sm text-gray-600 font-SFPro">Bill Types</div>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div>
                <div className="text-3xl font-bold text-gray-900 font-SFProSemiBold">Instant</div>
                <div className="text-sm text-gray-600 font-SFPro">Processing</div>
              </div>
            </div>
            <Link
              href="https://app.cardsoon.store/"
              className="w-fit inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 rounded-md bg-gradient-to-r from-[#0B8057] to-[#087f54] hover:from-[#087f54] hover:to-[#0B8057] text-white text-lg h-14 px-8"
              onClick={() => {
                setOpen(true)
                trackEvent('click_get_app_header', 'CTA Click', 'Homepage - Header')
              }}
            >
              Start Paying Bills <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2 w-5 h-5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </Link>
          </div>
          <div className="relative flex items-center justify-center">
            <Image src="/images/app-paybill.webp" alt="Mascot" width={250} height={200} priority />
          </div>
        </div>
      </section>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full">

            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="font-bold text-gray-900">Download Cardsoon</h2>
              <button className="text-gray-400 hover:text-gray-600 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-x w-6 h-6"
                >
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>
            </div>
            <div className="p-6">
              <p className="text-gray-600 text-center mb-6">
                Download our app to get started
              </p>
              <div className="grid grid-cols-2 gap-4 mx-auto">
                <a
                  href="https://apps.apple.com/app/gift-card-on-cardsoon/id6741886567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-black text-white hover:bg-gray-800 rounded-lg px-6 py-4 font-semibold transition-colors h-14"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"></path>
                  </svg>
                  <div className="flex flex-col text-left">
                    <span className="text-xs">Download on</span>
                    <span>App Store</span>
                  </div>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.cardsoon.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white text-emerald-600 hover:bg-gray-50 border border-emerald-200 rounded-lg px-6 py-4 font-semibold transition-colors h-14"
                >
                  <svg className="w-8 h-8" viewBox="0 0 50 50" fill="currentColor">
                    <path d="M 7.125 2 L 28.78125 23.5 L 34.71875 17.5625 L 8.46875 2.40625 C 8.03125 2.152344 7.5625 2.011719 7.125 2 Z M 5.3125 3 C 5.117188 3.347656 5 3.757813 5 4.21875 L 5 46 C 5 46.335938 5.070313 46.636719 5.1875 46.90625 L 27.34375 24.90625 Z M 36.53125 18.59375 L 30.1875 24.90625 L 36.53125 31.1875 L 44.28125 26.75 C 45.382813 26.113281 45.539063 25.304688 45.53125 24.875 C 45.519531 24.164063 45.070313 23.5 44.3125 23.09375 C 43.652344 22.738281 38.75 19.882813 36.53125 18.59375 Z M 28.78125 26.3125 L 6.9375 47.96875 C 7.300781 47.949219 7.695313 47.871094 8.0625 47.65625 C 8.917969 47.160156 26.21875 37.15625 26.21875 37.15625 L 34.75 32.25 Z"></path>
                  </svg>
                  <div className="flex flex-col text-left">
                    <span className="text-xs">Download on</span>
                    <span>Google Play</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="px-6 py-4 bg-gray-50 rounded-b-2xl text-center text-sm text-gray-600">
              Available on iOS and Android
            </div>
          </div>
        </div>
      )}
    </>
  )
}

