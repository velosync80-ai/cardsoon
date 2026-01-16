
import './globals.css'
import { ReactNode } from 'react'
import Script from 'next/script'
import AnalyticsTracker from '@/components/AnalyticsTracker'
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export const metadata = {
  title: 'Best Gift Card Trading App with High Rate | Sell Gift Cards online in Nigeria | Cardsoon',
  description:
    'Looking to sell gift cards in Nigeria? Cardsoon is the best gift card trading app designed for quick trades. Sign up now and get a ₦2300 bonus!',
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="22x22"
          href="/images/favicon.png"
        />
      </head>
      <body className="antialiased">
        {children}
        <AnalyticsTracker />

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </body>
    </html>
  )
}