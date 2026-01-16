import Image from 'next/image'

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
  return (
    <section className="py-16 bg-white">
      <h2 className="px-5 md:px-0 text-3xl md:text-4xl font-SFProBlack text-[#03062A] text-center mb-10">
        Why Cardsoon for Trading Gift Cards?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-16 px-7 pt-5 max-w-6xl mx-auto">
        {features.map((item) => (
          <div
            key={item.title}
            className="relative bg-white rounded-xl border border-[#8F99AC] p-7 px-5 flex flex-col items-center"
          >
            <div className="absolute top-4 left-4 flex gap-1">
              <span
                className={`w-1.5 h-1.5 rounded-full bg-[#FF5F57]`}
              />
              <span
                className={`w-1.5 h-1.5 rounded-full bg-[#FEBC2E]`}
              />
              <span
                className={`w-1.5 h-1.5 rounded-full bg-[#27C83F]`}
              />
            </div>

            <Image src={item.icon} alt={item.title} width={65} height={40} className='pt-5' />

            <div className="font-bold text-lg md:text-xl mt-4 font-SFProBold text-[#1A1A1A] mb-3">
              {item.title}
            </div>

            <div className="text-[#000000] text-center font-SFProSemiBold text-sm">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
