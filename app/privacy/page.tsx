import Navbar from '@/components/sections/home/Navbar'
import Footer from '@/components/sections/home/Footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Cardsoon Gift Card Trading App',
  description: 'Learn how Cardsoon collects, uses, and protects your personal information. Your privacy and data security matter to us.',
  icons: {
    icon: '/images/favicon.png',
    shortcut: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white font-SFPro">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        <h1 className="text-xl md:text-4xl text-center font-bold mb-8">
          <span className="text-[#222423] font-SFProBold">Privacy Policy </span>
        </h1>

        <section className="mb-8">
          <p className="text-[#222423] leading-relaxed mb-4">
            Welcome to Cardsoon! We highly value your privacy and the protection of your personal information. Please read this Privacy Policy carefully before using the Cardsoon App (hereinafter referred to as "the App").
          </p>
          <p className="text-[#222423] leading-relaxed mb-4">
            This Privacy Policy explains how we collect, use, store, and protect your personal information, and what rights you have in relation to that information.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#222423] font-SFProBold mb-4">1. Information We Collect</h2>

          <div className="mb-6">
            <h3 className="text-xl font-bold font-SFProBold text-[#222423] mb-3">1.1 Information You Provide</h3>
            <p className="text-[#222423] leading-relaxed mb-2">
              - <span className='font-SFProSemiBold font-bold'>Email Address:</span> Used for registration, login, notifications, and identity verification.
            </p>
            <p className="text-[#222423] leading-relaxe mb-2">
              - <span className='font-SFProSemiBold font-bold'>Bank Account Information:</span> Used to process withdrawals and complete financial transactions.
            </p>
            <p className="text-[#222423] leading-relaxed">
              - <span className='font-SFProSemiBold font-bold'>Identity Verification Information</span> (if applicable): This may include your name, ID number, and bank verification data.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold font-SFProBold text-[#222423] mb-3">1.2 Information Collected Automatically</h3>
            <p className="text-[#222423] leading-relaxed mb-2">
              To ensure stable and secure services, we may collect the following data:
            </p>
            <p className="text-[#222423] leading-relaxe mb-2">
              - Device information (model, operating system, unique identifiers, etc.)
            </p>
            <p className="text-[#222423] leading-relaxe mb-2">
              - Log information (usage time, visited pages, IP address, etc.)
            </p>
            <p className="text-[#222423] leading-relaxed">
              - Location information (only if authorized by you)
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold font-SFProBold text-[#222423] mb-3">1.3 Information Collected via Third-party SDK (Adjust)</h3>
            <p className="text-[#222423] leading-relaxe mb-2">
              - Device identifiers (e.g., IDFA/GAID)
            </p>
            <p className="text-[#222423] leading-relaxe mb-2">
              - App install and startup data
            </p>
            <p className="text-[#222423] leading-relaxe mb-2">
              - In-app event data (e.g., registration, purchases)
            </p>
            <p className="text-[#222423] leading-relaxed">
              Adjust complies with its own privacy policy. For more details, visit: <Link href="https://www.adjust.com/terms/privacy-policy/" className='text-blue-600 font-SFPro'>https://www.adjust.com/terms/privacy-policy/</Link>
            </p>
          </div>
        </section>

        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#222423] mb-4 font-SFProBold">2. How We Use Your Information</h2>
          <p className="text-[#222423] leading-relaxed mb-2">
            We use the collected information for the following purposes:
          </p>
          <p className="text-[#222423] leading-relaxe mb-2">
            - Account creation and identity verification
          </p>
          <p className="text-[#222423] leading-relaxe mb-2">
            - Completing gift card transactions and withdrawals
          </p>
          <p className="text-[#222423] leading-relaxe mb-2">
            - Providing customer service and technical support
          </p>
          <p className="text-[#222423] leading-relaxe mb-2">
            - Improving product experience and functionality
          </p>
          <p className="text-[#222423] leading-relaxe mb-2">
            - Preventing fraud, illegal activities, or violations of our agreements
          </p>
          <p className="text-[#222423] leading-relaxed">
            - Attribution analysis and ad optimization (via Adjust)
          </p>
        </section>
 
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#222423] mb-4 font-SFProBold">3. Sharing, Transfer, and Disclosure of Your Information</h2>
          <p className="text-[#222423] leading-relaxed mb-2">
            We will <span className='font-SFProBold font-bold'>not</span> sell or rent your personal information to third parties unless:
          </p>
          <p className="text-[#222423] leading-relaxe mb-2">
            - You have given explicit consent
          </p>
          <p className="text-[#222423] leading-relaxe mb-2">
            - It is required by law or regulation
          </p>
          <p className="text-[#222423] leading-relaxe mb-2">
            - Shared with our affiliates (only within the necessary scope)
          </p>
          <p className="text-[#222423] leading-relaxe mb-2">
            - Shared with trusted partners who perform functions on our behalf (e.g., payment processors), and who are required to protect your information
          </p>
          <p className="text-[#222423] leading-relaxed">
            - During business transfers, mergers, or acquisitions, we will notify you and ensure the receiving party adheres to this policy
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#222423] mb-4 font-SFProBold">4. Your Rights and Security</h2>
          <p className="text-[#222423] leading-relaxed mb-2">
            You have the right to:
          </p>
          <p className="text-[#222423] leading-relaxe mb-2">
            - Access, correct, or delete your personal information
          </p>
          <p className="text-[#222423] leading-relaxe mb-2">
            - Withdraw consent (which may affect the functionality of some services)
          </p>
          <p className="text-[#222423] leading-relaxe mb-2">
            - Cancel your account (we will delete your information within legal limits)
          </p>
          <p className="text-[#222423] leading-relaxed">
            You can manage your rights through the "Settings - Privacy Management" section in the App or by contacting us at <Link href="mailto:service@cardsoon.store" className='text-blue-600 font-SFPro'>service@cardsoon.store</Link>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#222423] mb-4 font-SFProBold">5. Information Storage and Security</h2>
          <p className="text-[#222423] leading-relaxed mb-2">
            - Your data will be stored in the People’s Republic of China.
          </p>
          <p className="text-[#222423] leading-relaxe mb-2">
            - We implement industry-standard technical and administrative measures to protect your data, such as encryption, access control, and firewalls.
          </p>
          <p className="text-[#222423] leading-relaxed">
            - In the event of a security incident, we will inform you and take appropriate measures promptly.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#222423] mb-4 font-SFProBold">6. Protection of Minors</h2>
          <p className="text-[#222423] leading-relaxed">
            This App is not intended for users under the age of 14. If we discover that we have collected information from a minor, we will promptly delete the data.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#222423] mb-4 font-SFProBold">7. Changes to This Policy</h2>
          <p className="text-[#222423] leading-relaxed">
            We may revise this policy due to business updates or legal requirements. Changes will be notified through in-app pop-ups or announcements. Please stay informed.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#222423] mb-4 font-SFProBold">8. Contact Us</h2>
          <p className="text-[#222423] leading-relaxed">
            If you have any questions, suggestions, or complaints regarding this Privacy Policy, you may contact us at:
          </p>
          <ul className="list-disc list-inside space-y-2 pt-3 text-[#222423]">
            <li className='font-bold font-SFProSemiBold'>Email: <Link href="mailto:service@cardsoon.store" className='text-blue-600 font-SFPro'>service@cardsoon.store</Link></li>
          </ul>
        </section>
      </div>

      <Footer />
    </div>
  )
}

