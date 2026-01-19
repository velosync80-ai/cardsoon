import Navbar from '@/components/sections/home/Navbar'
import HeroSection from '@/components/sections/VirtualCard/HeroSection'
import FaqSection from '@/components/sections/VirtualCard/FaqSection'
import WhyDoYouNeedSection from '@/components/sections/VirtualCard/WhyDoYouNeedSection'
import PlatformsSection from '@/components/sections/VirtualCard/PlatformsSection'
import GetStartedSection from '@/components/sections/VirtualCard/GetStartedSection'
import ReadytoSimplifySection from '@/components/sections/VirtualCard/ReadytoSimplifySection'
import Footer from '@/components/sections/home/Footer'
import Link from 'next/link'
import { Metadata } from 'next' 

export const metadata: Metadata = {
  title: 'Virtual Dollar Card for Online Payments | Cardsoon Gift Card Trading App',
  description: 'Shop online globally with Cardsoon’s virtual dollar card. Make international payments, subscriptions, and online purchases with ease.',
  icons: {
    icon: '/images/favicon.png',
    shortcut: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white font-SFPro">
      <Navbar />
      
      <HeroSection />
      <WhyDoYouNeedSection />  
      <PlatformsSection />  
      <GetStartedSection />  
      <FaqSection />
      <ReadytoSimplifySection />
      <Footer />
    </div>
  )
}

