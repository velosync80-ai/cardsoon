
import Footer from '@/components/sections/home/Footer'
import HeroSection from '@/components/sections/home/HeroSection'
import ReviewsSection from '@/components/sections/home/ReviewsSection'
import FaqSection from '@/components/sections/home/FaqSection'
import VideoSection from '@/components/sections/home/VideoSection'
import StatsSection from '@/components/sections/home/StatsSection'
import ThreeEasyStepsSection from '@/components/sections/home/ThreeEasyStepsSection'
import ReadytoSellYourGiftSection from '@/components/sections/home/ReadytoSellYourGiftSection'
import WhyCardsoonSection from '@/components/sections/home/WhyCardsoonSection'
import FeaturesSection from '@/components/sections/home/FeaturesSection'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">

      <main className="flex-1 w-full"> 
        <HeroSection />
        <StatsSection />
        <ThreeEasyStepsSection />
        <FeaturesSection />
        <WhyCardsoonSection />
        <VideoSection />
        <ReviewsSection />
        <FaqSection />
        <ReadytoSellYourGiftSection />
        <Footer />
      </main>
    </div>
  );
}
