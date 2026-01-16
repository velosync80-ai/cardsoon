import Navbar from '@/components/sections/home/Navbar'
import Footer from '@/components/sections/home/Footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Cardsoon',
  description: 'Read Cardsoon’s Terms & Conditions to understand user rights, responsibilities, platform rules, and service usage guidelines.',
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-xl md:text-4xl text-center font-bold mb-8">
          <span className="text-[#222423] font-SFProBold">Terms & Conditions </span>
        </h1>

        <section className="mb-12">
          <p className="text-[#222423] leading-relaxed mb-4">
            Welcome to Cardsoon! We are delighted to provide you with our services. Please carefully read and understand the following Terms of Service ("Terms") before using our website. By accessing and using Cardsoon, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please refrain from using our website.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#222423] font-SFProBold mb-4">1. Definitions</h2>

          <div className="mb-6">
            <p className="text-[#222423] leading-relaxed mb-2">
              a. "Cardsoon," "we," "our," or "us" refers to the website and its operators.
            </p>
            <p className="text-[#222423] leading-relaxed">
              b. "User," "you," or "your" refers to any individual or entity accessing and using Cardsoon.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#222423] mb-4 font-SFProBold">2. Eligibility</h2>
          <p className="text-[#222423] leading-relaxed mb-2">
            You must be at least 18 years old to use our website. By using Cardsoon, you affirm that you are at least 18 years old. If you are under 18, you may not use our website and should discontinue use immediately.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#222423] mb-4 font-SFProBold">3. User Account</h2>
          <p className="text-[#222423] leading-relaxed mb-2">
            a. Creating an account on Cardsoon is optional, but certain features and services may require registration. You are responsible for maintaining the confidentiality of your account credentials and are solely responsible for all activities that occur under your account.
          </p>
          <p className="text-[#222423] leading-relaxed">
            b. You agree to provide accurate, current, and complete information during the registration process. Should any information change, you will promptly update it to ensure its accuracy.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#222423] mb-4 font-SFProBold">4. Website Use</h2>

          <p className="text-[#222423] leading-relaxed mb-2">
            a. Cardsoon grants you a non-exclusive, non-transferable, limited right to access and use the website for personal, non-commercial purposes.
          </p>
          <p className="text-[#222423] leading-relaxed mb-2">
            b. You agree not to use our website for any illegal, harmful, or unauthorized purposes, including but not limited to violating any applicable laws and regulations.
          </p>
          <p className="text-[#222423] leading-relaxed">
            c. You shall not engage in any activity that interferes with or disrupts the proper functioning of Cardsoon or its services.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#222423] mb-4 font-SFProBold">5. Intellectual Property</h2>

          <p className="text-[#222423] leading-relaxed mb-2">
            a. All content and materials available on Cardsoon, including but not limited to text, graphics, logos, images, software, and trademarks, are the property of Cardsoon or its licensors and are protected by intellectual property laws.
          </p>
          <p className="text-[#222423] leading-relaxed">
            b. You may not reproduce, distribute, modify, or create derivative works of any content on Cardsoon without our prior written consent.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#222423] mb-4 font-SFProBold">6. Content Submission</h2>
          <p className="text-[#222423] leading-relaxed mb-2">
            a. By submitting any content (e.g., reviews, comments, or suggestions) to Cardsoon, you grant us a non-exclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, distribute, and display such content worldwide.
          </p>
          <p className="text-[#222423] leading-relaxed">
            b. You represent and warrant that you have the necessary rights and permissions to submit the content and that it does not violate any third-party rights.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#222423] mb-4 font-SFProBold">7. Third-Party Links</h2>

          <p className="text-[#222423] leading-relaxed">
            Cardsoon may contain links to third-party websites or services. We do not endorse or have control over the content, privacy policies, or practices of these external sites. Your use of such third-party links is at your own risk.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#222423] mb-4 font-SFProBold">8. Disclaimer of Warranty</h2>

          <p className="text-[#222423] leading-relaxed mb-2">
            a. Cardsoon provides the website and its content on an "as is" and "as available" basis. We do not warrant the accuracy, completeness, or reliability of any content or services provided.
          </p>
          <p className="text-[#222423] leading-relaxed">
            b. Your use of the website is at your own risk. Cardsoon disclaims all warranties, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#222423] mb-4 font-SFProBold">9. Limitation of Liability</h2>

          <p className="text-[#222423] leading-relaxed mb-2">
            a. To the maximum extent permitted by applicable law, Cardsoon shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from or in any way related to your use of the website.
          </p>
          <p className="text-[#222423] leading-relaxed">
            b. In jurisdictions that do not allow the exclusion or limitation of certain types of damages, our liability shall be limited to the maximum extent permitted by law.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#222423] mb-4 font-SFProBold">10. Termination</h2>

          <p className="text-[#222423] leading-relaxed">
            Cardsoon reserves the right to suspend or terminate your access to the website, in whole or in part, at any time and for any reason without prior notice.
          </p>
        </section>


        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#222423] mb-4 font-SFProBold">11. Modification of Terms</h2>

          <p className="text-[#222423] leading-relaxed mb-2">
            Cardsoon may update or modify these Terms from time to time. Any changes will be effective immediately upon posting the revised Terms on the website. Your continued use of Cardsoon after the changes will signify your acceptance of the updated Terms.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#222423] mb-4 font-SFProBold">12. Governing Law</h2>

          <p className="text-[#222423] leading-relaxed mb-2">
            These Terms shall be governed by and construed in accordance with the laws of [Your Country/State], without regard to its conflict of laws principles.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#222423] mb-4 font-SFProBold">13. Contact Us</h2>
          <p className="text-[#222423] leading-relaxed mb-2">
            If you have any questions or concerns about these Terms or Cardsoon, please contact us at <Link href="mailto:service@cardsoon.store" className='text-blue-600'>service@cardsoon.store</Link>.
          </p>
          <p className="text-[#222423] leading-relaxed mb-2">
            Thank you for reading and agreeing to our Terms of Service. We hope you have an enjoyable experience on Cardsoon!
          </p>
          <p className="text-[#222423] leading-relaxed">
            Cardsoon Team
          </p> 
        </section>  
      </div> 
      <Footer />
    </div>
  )
}

