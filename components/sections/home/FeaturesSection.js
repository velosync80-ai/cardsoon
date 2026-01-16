'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function FeaturesSection() {
  return (
    <section className="py-16 px-4 bg-[#F9FAFB]">
      <h2 className="px-5 md:px-0 text-3xl md:text-4xl font-bold text-[#03062A] font-SFProHeavy text-center ">More Than a Gift Card Trading App</h2>
      <p className="text-lg text-[#222423] text-center my-10 mt-5 max-w-4xl mx-auto font-SFProSemiBold ">
        Cardsoon goes beyond helping you sell gift cards in Nigeria. You can also make<br className='hidden lg:block' /> daily payments quickly and conveniently. Explore the other services we provide:
      </p>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-7 items-center">
        <div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div>
                <h4 className="font-semibold text-2xl pb-5 font-SFProBold text-[#03062A]">Virtual Dollar Card</h4>
                <p className="text-[#000000] font-SFProMedium text-base">For international spending, Cardsoon offers a virtual dollar card that allows you to shop globally with ease. Pay for online services, digital tools, and global subscriptions while enjoying competitive exchange rates and secure transactions.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end items-center">
          <Image src="/images/virtual_doller.png" alt="App Features" width={400} height={273} />
        </div>
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-7 items-center">


        <div className="flex justify-center items-center">
          <Image src="/images/Bill_payments.png" alt="App Features" width={400} height={273} />
        </div>
        <div>
          <div className="flex flex-col gap-6">

            <div className="flex items-center text-end gap-4">
              <div>
                <h4 className="font-semibold font-SFProBold text-2xl pb-5 text-[#03062A]">Bill Payments</h4>
                <p className="text-[#000000] text-base font-SFProMedium">Besides selling gift cards, you can buy airtime and data for all major network providers in Nigeria using the Cardsoon app. Also, quickly settle utility bills such as electricity, cable TV, and subscriptions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
