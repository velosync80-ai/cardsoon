import Image from 'next/image'

export default function StatsSection() {
  return (
    <section className="bg-[#F9FAFB] py-12">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-center gap-5 md:gap-20 px-4 sm:px-6 lg:px-8">

        <div className="bg-gradient-to-b from-[#0B5843] to-[#10242B] rounded-3xl flex flex-col items-center px-4 py-8 w-full md:w-[12rem] h-[190px] shadow-md md:mt-20">
          <div className="h-[56px] flex items-center justify-center">
            <Image src="/images/sell_gift_cards.png" alt="Sell Gift Cards" width={65} height={65} />
          </div>
          <div className="text-center mt-3">
            <p className="text-white text-sm font-SFPro">Sell Gift Cards in</p>
            <p className="text-white text-xl font-extrabold font-SFProBold">30 Seconds</p>
          </div>
        </div>

        <div className="bg-gradient-to-b from-[#FFDE5B] to-[#F5A841] rounded-3xl flex flex-col items-center px-4 py-8 w-full md:w-[12rem] h-[190px] shadow-md md:mt-0">
          <div className="h-[56px] flex items-center justify-center">
            <Image src="/images/5_star.png" alt="5 Star" width={65} height={65} />
          </div>
          <div className="text-center mt-3">
            <p className="text-white text-xl font-extrabold font-SFProBold">5-Star Rated</p>
            <p className="text-white text-base font-SFPro">by Most Users</p>
          </div>
        </div>

        <div className="bg-gradient-to-b from-[#8BE7FC] to-[#18B2D6] rounded-3xl flex flex-col items-center px-4 py-8 w-full md:w-[12rem] h-[190px] shadow-md md:mt-10">
          <div className="h-[56px] flex items-center justify-center">
            <Image src="/images/request_resolved.png" alt="Requests" width={65} height={65} />
          </div>
          <div className="text-center mt-3">
            <p className="text-white text-xl font-extrabold font-SFProBold">&lt; 1 Min</p>
            <p className="text-white text-base font-SFPro">99%</p>
            <p className="text-white text-base font-SFPro">Requests Resolved</p>
          </div>
        </div>

        <div className="bg-gradient-to-b from-[#286FE6] to-[#074CC0] rounded-3xl flex flex-col items-center px-4 py-8 w-full md:w-[12rem] h-[190px] shadow-md md:mt-0">
          <div className="h-[56px] flex items-center justify-center">
            <Image src="/images/downlaods_500.png" alt="Downloads" width={65} height={65} />
          </div>
          <div className="text-center mt-3">
            <p className="text-white text-xl font-extrabold font-SFProBold">500K+</p>
            <p className="text-white text-base font-SFPro">Downloads</p>
          </div>
        </div>

      </div>
    </section>
  )
}
