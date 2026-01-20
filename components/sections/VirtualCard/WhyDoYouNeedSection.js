import Image from 'next/image'
import { Card, CardContent } from '@/components/sections/VirtualCard/card';
import { Zap, Lock, Globe, Plane } from 'lucide-react';

const whyNeedReasons = [
  {
    icon: Zap,
    title: 'Instant Card Creation',
    description: 'Get a working virtual card in just seconds without waiting for physical delivery.',
  },
  {
    icon: Lock,
    title: 'Maximum Security',
    description: 'Keep your main bank account safe with unique card numbers for each merchant.',
  },
  {
    icon: Globe,
    title: 'Global Acceptance',
    description: 'Use your card on any platform that accepts Visa or Mastercard worldwide.',
  },
  {
    icon: Plane,
    title: 'Manage Your Budget',
    description: 'Set spending limits and freeze cards instantly to control your finances.',
  },
];

export default function WhyDoYouNeedSection() {
  return (
    <section className="py-16 bg-white">


      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 ">
        <div className='px-5 md:px-0'>
          <div className="mb-10">
            <h2 className="text-4xl md:text-5xl font-bold font-SFProSemiBold mb-4">Why do you need a  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent ">Virtual Dollar Card?</span></h2>
            <p className="text-lg md:text-xl text-gray-600 font-SFPro">Unlock the benefits of digital payments.</p>
          </div>

          <div className="relative">
            <div className="relative z-10 p-10 transform hover:scale-105 transition-transform duration-300">
              <Image src="/images/virtual_mobile.webp" className='mx-auto w-4/5 h-[390px] object-cover object-top' alt="virtual mobile" width={490} height={200} priority />
            </div>
            <div className="absolute -top-6 -right-6 w-72 h-72 bg-emerald-400 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-teal-400 rounded-full blur-3xl opacity-20"></div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-5 md:gap-7 px-5 md:px-7 pt-5 max-w-6xl mx-auto">
          <div className="grid gap-6">
            {whyNeedReasons.map((reason, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#0B8057] to-[#087f54] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <reason.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2 font-SFProSemiBold">{reason.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{reason.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
