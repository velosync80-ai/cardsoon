import Image from 'next/image'

const features = [
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="white" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="lucide lucide-phone w-8 h-8 text-white" viewBox="0 0 24 24" > <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.8 12.8 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.8 12.8 0 0 0 2.81.7A2 2 0 0 1 22 16.92"></path> </svg>',
    title: 'Airtime',
    bg_color: 'from-[#0B8057] to-[#087f54]',
    description: 'Recharge for all networks instantly.',
    tags: ['MTN', 'Airtel', 'Glo', '9mobile'],
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wifi w-8 h-8 text-white"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>',
    title: 'Data',
    bg_color: 'from-green-500 to-emerald-600',
    description: 'Buy data bundles at great prices.',
    tags: ['All Networks'],
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap w-8 h-8 text-white"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>',
    title: 'Electricity',
    bg_color: 'from-yellow-500 to-orange-600',
    description: 'Pay for prepaid and postpaid meters.',
    tags: ['EKEDC', 'IKEDC', 'AEDC', 'Others'],
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tv w-8 h-8 text-white"><rect width="20" height="15" x="2" y="7" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline></svg>',
    title: 'Cable TV',
    bg_color: 'from-purple-500 to-pink-600',
    description: 'Renew DStv, GOtv, Startimes subscriptions.',
    tags: ['DStv', 'GOtv', 'Startimes'],
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-house w-8 h-8 text-white"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>',
    title: 'Internet',
    bg_color: 'from-red-500 to-rose-600',
    description: 'Pay for internet subscriptions.',
    tags: ['Smile', 'Spectranet', 'Swift'],
  },
]

export default function AllYourBillsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold font-SFProSemiBold mb-4">All Your <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent ">Bills</span> in One Place</h2>
        <p className="text-xl text-gray-600 font-SFPro">Pay for all your essential services conveniently.</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7 px-7 md:px-7 pt-5 max-w-6xl mx-auto">
        {features.map((item) => (
          <div
            key={item.title}
            className="relative bg-white rounded-xl p-8 px-8 flex flex-col rounded-lg border bg-card text-card-foreground shadow-sm group hover:shadow-xl transition-all duration-300"
          >

            <div
              className={`w-16 h-16 bg-gradient-to-br ${item.bg_color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}
              dangerouslySetInnerHTML={{ __html: item.icon }}
            />

            <div className="font-bold text-lg md:text-2xl mt-4 font-SFProSemiBold text-[#1A1A1A] mb-3">
              {item.title}
            </div>

            <div className="text-gray-600 font-SFPro text-base">
              {item.description}
            </div>
            {item.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-4">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

          </div>
        ))}
      </div>
    </section>
  )
}
