'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

interface PlatformItem {
  name: string;
  text: string;
  avatar: string;
  stars: number;
}

interface ReviewsCarouselProps {
  reviews: PlatformItem[];
  autoScroll?: boolean;
  scrollSpeed?: number;
  bgColor?: string;
}

export function ReviewsCarousel({
  reviews,
  autoScroll = false,
  scrollSpeed = 0,
  bgColor = 'white',
}: ReviewsCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!autoScroll || !scrollContainerRef.current) return;

    const scrollContainer = scrollContainerRef.current;
    let scrollPosition = 0;

    const interval = setInterval(() => {
      scrollPosition += 1;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
    }, scrollSpeed);

    return () => clearInterval(interval);
  }, [autoScroll, scrollSpeed]);

  const doubledReviews = [...reviews];

  return (
    <div className="w-full overflow-hidden relative">
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
        style={{
          scrollBehavior: 'smooth',
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        }}
      >
        {doubledReviews.map((review, index) => (
          <div
            key={index}
            className="min-w-[320px] bg-white border border-[#8F99AC] rounded-xl shadow p-8 flex flex-col gap-3"
          >
            <div className="flex items-center gap-4 mb-2">
              <Image
                src={review.avatar}
                alt={review.name}
                width={48}
                height={48}
                className="rounded-full border"
              />
              <div>
                <div className="font-semibold text-base text-[#394047] font-SFProBold">
                  {review.name}
                </div>
                <div className="flex gap-1 mb-2">
                  {Array.from({ length: review.stars }).map((_, idx) => (
                    <svg
                      key={idx}
                      className="w-5 h-5 text-[#FFC008]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927a1 1 0 0 1 1.902 0l1.286 3.955a1 1 0 0 0 .95.69h4.167c.969 0 1.371 1.24.588 1.81l-3.37 2.449a1 1 0 0 0-.364 1.118l1.287 3.957c.3.922-.755 1.688-1.54 1.118l-3.368-2.448a1 1 0 0 0-1.176 0l-3.368 2.448c-.784.57-1.838-.196-1.54-1.118l1.287-3.957a1 1 0 0 0-.364-1.118l-3.37-2.45c-.782-.57-.38-1.81.59-1.81h4.166a1 1 0 0 0 .951-.69L9.05 2.927z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <div className="italic text-[#444444] text-[15px] font-SFPro font-bold">
              {review.text}
            </div>
          </div>
        ))}
      </div>

      {/* Left fade */}
      <div
        className="absolute left-0 top-0 bottom-0 w-20 pointer-events-none z-10"
        style={{
          background: `linear-gradient(to right, ${bgColor} 0%, ${bgColor}80 50%, ${bgColor}00 100%)`,
        }}
      />

      {/* Right fade */}
      <div
        className="absolute right-0 top-0 bottom-0 w-20 pointer-events-none z-10"
        style={{
          background: `linear-gradient(to left, ${bgColor} 0%, ${bgColor}80 50%, ${bgColor}00 100%)`,
        }}
      />
    </div>
  );
}
