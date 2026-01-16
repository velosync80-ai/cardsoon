import Image from "next/image"

const reviews = [
  {
    name: "Chinedu A., Lagos",
    text: "Selling my gift cards has never been easier. Cardsoon is truly the best gift card trading app in Nigeria.",
    avatar: "/images/profile2.png",
    stars: 5,
  },
  {
    name: "Amaka O., Abuja",
    text: "I love how simple it is to sell gift cards on Cardsoon. I always get the best rates, and transactions are superfast.",
    avatar: "/images/profile1.png",
    stars: 5,
  },
  {
    name: "Tunde K., Lagos",
    text: "Best gift card trading app EVER. I can sell gift cards anytime and receive my money in minutes.",
    avatar: "/images/profile3.png",
    stars: 5,
  },
]

export default function ReviewsSection() {
  return (
    <section className="py-16 bg-white">
      <h2 className="px-5 md:px-0 text-center text-3xl md:text-4xl font-bold text-[#03062A] font-SFProBlack  mb-10 ">Reviews</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
        {reviews.map((review, i) => (
          <div
            key={review.name}
            className="bg-white border border-[#8F99AC] rounded-xl shadow p-8 flex flex-col gap-3"
          >
            <div className="flex items-center gap-4 mb-2">
              <Image src={review.avatar} alt={review.name} width={48} height={48} className="rounded-full border" />
              <div>
                <div className="font-semibold text-base text-[#394047] font-SFProBold">{review.name}</div>
                <div className="flex gap-1 mb-2">
                  {Array.from({ length: review.stars }).map((_, idx) => (
                    <svg key={idx} className="w-5 h-5 text-[#FFC008]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927a1 1 0 0 1 1.902 0l1.286 3.955a1 1 0 0 0 .95.69h4.167c.969 0 1.371 1.24.588 1.81l-3.37 2.449a1 1 0 0 0-.364 1.118l1.287 3.957c.3.922-.755 1.688-1.54 1.118l-3.368-2.448a1 1 0 0 0-1.176 0l-3.368 2.448c-.784.57-1.838-.196-1.54-1.118l1.287-3.957a1 1 0 0 0-.364-1.118l-3.37-2.45c-.782-.57-.38-1.81.59-1.81h4.166a1 1 0 0 0 .951-.69L9.05 2.927z" /></svg>
                  ))}
                </div>
              </div>
            </div>
            <div className="italic text-[#444444] text-[15px] font-SFPro font-bold">{`${review.text}`}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
