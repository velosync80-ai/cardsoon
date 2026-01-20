'use client'

import Image from 'next/image'
import Link from 'next/link'
import { trackEvent } from '@/lib/analytics'

export default function ReadytoSellYourGiftSection() {
  return (
    <section className="bg-white pb-20 px-5 py-10 ">
      <div className="max-w-7xl mx-auto rounded-lg bg-[#191f24] md:bg-[url('/images/footer_bg.png')] bg-[url('/images/mobile_bg.png')] bg-cover bg-center bg-no-repeat rounded-0 md:rounded-3xl ">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-11 items-center px-7 pt-10 md:pt-0">
          <div className="flex flex-col gap-5 text-center md:text-left items-center lg:items-start md:items-start">
            <h3 className="text-white font-bold text-4xl md:text-4xl font-SFProBold">Ready to Trade Your Gift Cards?</h3>
            <p className="text-white text-xl mb-2 font-SFProSemiBold">Join thousands of users who trust Cardsoon <br className="hidden md:block" />and sell gift cards daily.</p>
            <Link
              href="https://app.cardsoon.store/"
              className="w-fit flex gap-3  px-8 py-4 bg-white hover:bg-emerald-400 text-[#077F56] rounded-full text-lg font-bold shadow font-SFProBold"
              onClick={() => trackEvent('click_get_started_bottom', 'CTA Click', 'Homepage - Bottom Banner')}
            >
              Get Started <span className='hidden md:block'> →</span>
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <Image src="/images/footer_showcase.png" alt="Ready to Trade Your Gift Cards" width={500} height={380} />
          </div>
        </div>

      </div>
    </section>
  )
}

