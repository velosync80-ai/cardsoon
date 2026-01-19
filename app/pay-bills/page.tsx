import Navbar from '@/components/sections/home/Navbar'
import HeroSection from '@/components/sections/PageBills/HeroSection'
import WhyPayBillsSection from '@/components/sections/PageBills/WhyPayBillsSection'
import FaqSection from '@/components/sections/PageBills/FaqSection'
import AllYourBillsSection from '@/components/sections/PageBills/AllYourBillsSection'
import GetStartedSection from '@/components/sections/PageBills/GetStartedSection'
import ReadytoSimplifySection from '@/components/sections/PageBills/ReadytoSimplifySection'
import Footer from '@/components/sections/home/Footer'
import Link from 'next/link'
import { Metadata } from 'next' 

export const metadata: Metadata = {
  title: 'Pay Bills Online Easily | Cardsoon Gift Card Trading App',
  description: 'Pay your bills online in Nigeria with Cardsoon. Buy airtime, data, and pay utility bills quickly and securely in one place.',
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
      <AllYourBillsSection /> 
      <GetStartedSection /> 
      <WhyPayBillsSection />
      <FaqSection />
      <ReadytoSimplifySection />
      <Footer />
    </div>
  )
}

