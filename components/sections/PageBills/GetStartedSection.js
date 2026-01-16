'use client'

import Image from 'next/image'
import Link from 'next/link'
import { trackEvent } from '@/lib/analytics'


export default function GetStartedSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-SFProSemiBold mb-4">
            How to&nbsp;
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent ">
               Pay Bills
            </span>
          </h2>
          <p className="text-xl text-gray-600 font-SFPro">
            Simple, fast, and secure bill payment process.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow h-full">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0B8057] to-[#087f54] rounded-xl flex items-center justify-center mb-4 text-white font-bold">
                01
              </div>
              <h3 className="text-xl font-bold mb-3 font-SFProBold">Select Bill Type</h3>
              <p className="text-gray-600">
                Choose the type of bill you want to pay from our list.
              </p>
            </div>
            <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right w-8 h-8 text-teal-300"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow h-full">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0B8057] to-[#087f54] rounded-xl flex items-center justify-center mb-4 text-white font-bold">
                02
              </div>
              <h3 className="text-xl font-bold mb-3 font-SFProBold">Enter Details</h3>
              <p className="text-gray-600">
                Provide necessary details like phone number or meter number.
              </p>
            </div>
            <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right w-8 h-8 text-teal-300"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow h-full">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0B8057] to-[#087f54] rounded-xl flex items-center justify-center mb-4 text-white font-bold">
                03
              </div>
              <h3 className="text-xl font-bold mb-3 font-SFProBold">Confirm Amount</h3>
              <p className="text-gray-600">
                Review the amount and any applicable discounts.
              </p>
            </div>
            <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right w-8 h-8 text-teal-300"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow h-full">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0B8057] to-[#087f54] rounded-xl flex items-center justify-center mb-4 text-white font-bold">
                04
              </div>
              <h3 className="text-xl font-bold mb-3 font-SFProBold">Complete Payment</h3>
              <p className="text-gray-600 font-SFProS">
                Pay securely and receive instant confirmation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
