'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function VideoSection() {
  const [showVideo, setShowVideo] = useState(false)
  const videoUrl = `https://youtube.com/shorts/iGWMWFiffDQ?feature=share`

  return (
    <section className="py-16 my-10 bg-[#F0FCF5]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-9 px-6 items-center">
        <div>
          <h2 className="px-5 md:px-0 text-3xl md:text-4xl font-bold text-[#03062A] font-SFProHeavy  mb-10 ">Cardsoon Charity</h2>
          <p className="mb-8 text-base font-SFProSemiBold text-[#000000]">At Cardsoon, giving back is at the heart of what we do. With our first initiative, One Well One Hope, we helped dig a well in Isiwu, Ikorodu, Nigeria to bring clean water to over 300 households. We are proud to support communities and create real & lasting impact.
          </p>
          <Link href="#" className="inline-block px-7 py-3 bg-[#077F56] text-white font-SFPro rounded-full text-lg font-semibold shadow hover:bg-emerald-400 transition">Learn More  →</Link>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="relative w-full aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-2xl border-4 h-90 border-white">
            {!showVideo ? (
              <div
                className="relative w-full h-full cursor-pointer group "
                onClick={() => setShowVideo(true)}
              >
                <Image
                  src={`/images/video_thumbnail.png`}
                  alt="Video Thumbnail"
                  width={0}
                  height={0}
                  className="w-auto object-cover"
                  unoptimized
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[40px] h-10 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-2xl">
                    <svg
                      className="w-10 h-10 text-black ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            ) : (
              <iframe
                src={videoUrl}
                title="Cardsoon Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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

