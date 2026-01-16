'use client'

import Image from 'next/image'
import Link from 'next/link'
import { trackEvent } from '@/lib/analytics'

export default function ReadytoSellYourGiftSection() {
  return (
    <section className="bg-[#F9FAFB] pb-20">
      <div className="max-w-7xl mx-auto  bg-[#191f24] bg-[url('/images/footer_bg.png')] bg-cover bg-center bg-no-repeat rounded-0 md:rounded-3xl">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-11 items-center px-7 pt-10 md:pt-0">
          <div className="flex flex-col gap-5">
            <h3 className="text-white font-bold text-3xl md:text-4xl font-SFProBold">Ready to Trade Your Gift Cards?</h3>
            <p className="text-white text-xl mb-2 font-SFProBold">Join thousands of users who trust Cardsoon <br className="hidden md:block" />and sell gift cards daily.</p>
            <Link
              href="https://app.cardsoon.store/"
              className="inline-block w-fit px-8 py-4 bg-white hover:bg-emerald-400 text-[#077F56] rounded-full text-lg font-bold shadow"
              onClick={() => trackEvent('click_get_started_bottom', 'CTA Click', 'Homepage - Header')}
            >
              Get Started →
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <Image src="/images/footer_showcase.png" alt="App preview" width={500} height={380} />
          </div>
        </div>

      </div>
    </section>
  )
}

