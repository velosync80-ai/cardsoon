import Image from 'next/image'

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

export default function WhyDoYouNeedSection() {
  return (
    <section className="py-16 bg-white">


      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 ">
        <div className='px-5 md:px-0'>
          <div className="mb-10">
            <h2 className="text-4xl md:text-5xl font-bold font-SFProSemiBold mb-4">Why do you need a  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent ">Virtual Dollar Card?</span></h2>
            <p className="text-xl text-gray-600 font-SFPro">Unlock the benefits of digital payments.</p>
          </div>

          <div className="relative">
            <div className="relative z-10 p-10 transform hover:scale-105 transition-transform duration-300">
              <Image src="/images/virtual_mobile.webp" className='mx-auto w-4/5 h-[400px] object-cover object-top' alt="Mascot" width={490} height={200} priority />
            </div>
            <div className="absolute -top-6 -right-6 w-72 h-72 bg-emerald-400 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-teal-400 rounded-full blur-3xl opacity-20"></div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-5 md:gap-7 px-5 md:px-7 pt-5 max-w-6xl mx-auto">
          {features.map((item) => (
            <div
              key={item.title}
              className="relative bg-white rounded-xl p-5 flex flex-col rounded-lg border bg-card text-card-foreground shadow-sm group hover:shadow-xl transition-all duration-300"
            >

              <div className='flex gap-5'>
                <div
                  className={`w-14 h-14 bg-gradient-to-br from-[#0B8057] to-[#087f54] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                  dangerouslySetInnerHTML={{ __html: item.icon }}
                />

                <div>
                  <div className="font-bold text-lg md:text-xl font-SFProSemiBold text-[#1A1A1A] mb-2">
                    {item.title}
                  </div>
                  <div className="text-gray-600 font-SFPro text-base">
                    {item.description}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
