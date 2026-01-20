'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function VideoSection() {
  const [showVideo, setShowVideo] = useState(false)

  const videoUrl = "https://www.youtube.com/embed/iGWMWFiffDQ?autoplay=1"

  return (
    <section className="py-16 my-10 bg-[#F0FCF5]">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-9 px-6 items-center text-center md:text-left">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#03062A] font-SFProHeavy mb-6">
            Cardsoon Charity
          </h2>

          <p className="mb-0 md:mb-8 text-base font-SFProSemiBold text-black">
            At Cardsoon, giving back is at the heart of what we do. With our first initiative, One Well One Hope, we helped dig a well in Isiwu, Ikorodu, Nigeria to bring clean water to over 300 households. We are proud to support communities and create real & lasting impact.
          </p>

          <Link
            href="#"
            className="inline-block hidden md:inline-block px-7 py-3 bg-[#077F56] text-white rounded-full text-lg font-semibold shadow hover:bg-emerald-400 transition"
          >
            Learn More →
          </Link>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-full lg:w-[400px] h-[400px] md:h-[450px] aspect-video rounded-[40px] overflow-hidden border-[10px] border-white shadow-lg bg-black">

            {!showVideo ? (
              <button
                onClick={() => setShowVideo(true)}
                className="relative w-full h-full"
              >
                <Image
                  src="/images/video_thumbnail.png"
                  alt="Video Thumbnail"
                  fill
                  className="object-cover"
                  priority
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/images/video_pay_icon.png"
                    alt="Play Video"
                    width={80}
                    height={80}
                    className="hover:scale-110 transition"
                  />
                </div>
              </button>
            ) : (
              <iframe
                src={videoUrl}
                title="Cardsoon Video"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            )}

          </div>
        </div>
      </div>
    </section>
  )
}
