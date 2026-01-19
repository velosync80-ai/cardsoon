import Image from 'next/image'
import { ArrowRight, Smartphone, Wifi, Zap, Home, Phone, Tv, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '../VirtualCard/card';

const billTypes = [
  {
    icon: Phone,
    title: 'Airtime',
    description: 'Recharge for all networks instantly.',
    color: 'from-[#0B8057] to-[#087f54]',
    providers: ['MTN', 'Airtel', 'Glo', '9mobile'],
  },
  {
    icon: Wifi,
    title: 'Data',
    description: 'Buy data bundles at great prices.',
    color: 'from-green-500 to-emerald-600',
    providers: ['All Networks'],
  },
  {
    icon: Zap,
    title: 'Electricity',
    description: 'Pay for prepaid and postpaid meters.',
    color: 'from-yellow-500 to-orange-600',
    providers: ['EKEDC', 'IKEDC', 'AEDC', 'Others'],
  },
  {
    icon: Tv,
    title: 'Cable TV',
    description: 'Renew DStv, GOtv, Startimes subscriptions.',
    color: 'from-purple-500 to-pink-600',
    providers: ['DStv', 'GOtv', 'Startimes'],
  },
  {
    icon: Home,
    title: 'Internet',
    description: 'Pay for internet subscriptions.',
    color: 'from-red-500 to-rose-600',
    providers: ['Smile', 'Spectranet', 'Swift'],
  },
];

export default function AllYourBillsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold font-SFProSemiBold mb-4">All Your <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent ">Bills</span> in One Place</h2>
        <p className="text-xl text-gray-600 font-SFPro">Pay for all your essential services conveniently.</p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {billTypes.map((bill, index) => (
          <Card key={index} className="group hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8">
              <div className={`w-16 h-16 bg-gradient-to-br ${bill.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <bill.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-SFProSemiBold mb-3">{bill.title}</h3>
              <p className="text-gray-600 mb-4">{bill.description}</p>
              <div className="flex flex-wrap gap-2">
                {bill.providers.map((provider, idx) => (
                  <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                    {provider}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
