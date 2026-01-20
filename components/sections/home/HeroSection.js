'use client'

import Image from 'next/image'
import Link from 'next/link'
import { trackEvent } from '@/lib/analytics'
import Navbar from '@/components/sections/home/Navbar'

export default function HeroSection() {
  return (
    <section className="pt-3 px-0 md:px-0  bg-cover bg-center bg-no-repeat bg-[url('/images/showcase_mobile_bg.png')] md:bg-[url('/images/bg1.png')]"
    >
      <div className='flex-fixed'>
        <Navbar />
      </div>
      <div className="pt-0 pb-20 px-4 md:px-0  ">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="pt-0 md:pt-10 flex flex-col gap-6 text-center items-center lg:items-start md:text-center lg:text-left">
            <h1 className="text-white font-bold text-4xl md:text-5xl leading-[1.5] lg:leading-[1.4] lg:text-5xl leading-tight font-SFProHeavy mb-4 text-center lg:text-left">A Smarter, <br className=' md:hidden' />Easier Way <br className='hidden md:block' /> to Sell Gift Cards Online</h1>
            <p className="text-slate-200 max-w-lg mb-4 text-lg font-SFProSemiBold">Cardsoon is the best gift card trading app in Nigeria that helps you turn gift cards into cash hassle-free. Designed for speed, simplicity & reliability. Try it for yourself now! Try it for yourself now and get a ₦2300 Welcome Bonus!</p>
            <Link
              href="https://app.cardsoon.store/"
              className=" w-fit items-center gap-2 px-7 py-3 bg-white hover:bg-emerald-400 text-[#077F56] rounded-full text-lg font-SFProHeavy font-bold shadow"
              onClick={() => trackEvent('click_download_app_hero', 'CTA Click', 'Hero Banner')}
            >
              Download App
            </Link>
          </div>
          <div className="relative flex items-center justify-end hidden md:flex">
            <Image src="/images/showcase_home.png" alt="showcase Image" width={550} height={350} priority />
          </div>
          <div className="relative flex items-center justify-end md:hidden">
            <Image src="/images/showcase_mobile.png" alt="showcase banner " width={350} height={350} priority />
          </div>
        </div>
      </div>
    </section>
  )
}

