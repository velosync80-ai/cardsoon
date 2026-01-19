'use client';

import { useEffect, useRef } from 'react';

interface PlatformItem {
  name: string;
  logo: string;
}

interface PlatformCarouselProps {
  platforms: PlatformItem[];
  autoScroll?: boolean;
  scrollSpeed?: number;
  bgColor?: string;
}

export function PlatformCarousel({ platforms, autoScroll = true, scrollSpeed = 40, bgColor = 'white' }: PlatformCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!autoScroll || !scrollContainerRef.current) return;

    const scrollContainer = scrollContainerRef.current;
    let scrollPosition = 0;

    const interval = setInterval(() => {
      scrollPosition += 1;
      // 当滚动到中间位置时，重置到开始位置（无缝循环）
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
    }, scrollSpeed);

    return () => clearInterval(interval);
  }, [autoScroll, scrollSpeed]);

  // 复制平台数据以实现无缝循环
  const doubledPlatforms = [...platforms, ...platforms];

  return (
    <div className="w-full overflow-hidden relative">
      <div
        ref={scrollContainerRef}
        className="flex gap-12 overflow-x-auto scrollbar-hide pb-4"
        style={{
          scrollBehavior: 'smooth',
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        }}
      >
        {doubledPlatforms.map((platform, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex flex-col items-center gap-3"
          >
            <div className="w-32 h-12 rounded-lg flex items-center justify-center p-2 bg-gray-50">
              <img
                src={platform.logo}
                alt={platform.name}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
      {/* Left Gradient Overlay */}
      <div
        className="absolute left-0 top-0 bottom-0 w-20 pointer-events-none z-10"
        style={{
          background: `linear-gradient(to right, ${bgColor} 0%, ${bgColor}80 50%, ${bgColor}00 100%)`
        }}
      ></div>
      {/* Right Gradient Overlay */}
      <div
        className="absolute right-0 top-0 bottom-0 w-20 pointer-events-none z-10"
        style={{
          background: `linear-gradient(to left, ${bgColor} 0%, ${bgColor}80 50%, ${bgColor}00 100%)`
        }}
      ></div>
      <style jsx>{`
        ::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
