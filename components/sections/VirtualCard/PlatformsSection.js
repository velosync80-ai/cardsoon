import Image from 'next/image'
import { PlatformCarousel } from '@/components/sections/VirtualCard/platform-carousel';

const features = [
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap w-7 h-7 text-white"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>',
    title: 'Instant Card Creation',
    bg_color: 'from-green-500 to-emerald-600',
    description: 'Get a working virtual card in just seconds without waiting for physical delivery.',
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock w-7 h-7 text-white"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>',
    title: 'Maximum Security',
    bg_color: 'from-yellow-500 to-orange-600',
    description: 'Keep your main bank account safe with unique card numbers for each merchant.',
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-7 h-7 text-white"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>',
    title: 'Global Acceptance',
    bg_color: 'from-purple-500 to-pink-600',
    description: 'Use your card on any platform that accepts Visa or Mastercard worldwide.',
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plane w-7 h-7 text-white"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg>',
    title: 'Manage Your Budget',
    bg_color: 'from-red-500 to-rose-600',
    description: 'Set spending limits and freeze cards instantly to control your finances.',
  },
]

const platforms = [
  { name: 'Uber', logo: 'https://cdn.worldvectorlogo.com/logos/uber.svg' },
  { name: 'Amazon', logo: 'https://cdn.worldvectorlogo.com/logos/logo-amazon.svg' },
  { name: 'Shopify', logo: 'https://cdn.worldvectorlogo.com/logos/shopify-2.svg' },
  { name: 'Netflix', logo: 'https://cdn.worldvectorlogo.com/logos/netflix-3.svg' },
  { name: 'Google', logo: 'https://cdn.worldvectorlogo.com/logos/google-1-1.svg' },
  { name: 'Airbnb', logo: 'https://cdn.worldvectorlogo.com/logos/airbnb.svg' },
  { name: 'Spotify', logo: 'https://cdn.worldvectorlogo.com/logos/spotify-logo.svg' },
  { name: 'YouTube', logo: 'https://cdn.worldvectorlogo.com/logos/youtube-6.svg' },
  { name: 'Uber Eats', logo: 'https://cdn.worldvectorlogo.com/logos/uber-2.svg' },
  { name: 'Xbox', logo: 'https://cdn.worldvectorlogo.com/logos/xbox-9.svg' },
];


export default function PlatformsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">

          <div className="mb-10">
            <h2 className="text-4xl md:text-5xl font-bold font-SFProSemiBold mb-4">Make payments in thousands of  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent ">platforms</span></h2>
            <p className="text-xl text-gray-600 font-SFPro">Your card works everywhere you need it.</p>
          </div>
        </div>
        <div className="py-8">
          <PlatformCarousel platforms={platforms} autoScroll={true} scrollSpeed={40} bgColor="white" />
        </div>
      </div>
    </section>
  )
}
