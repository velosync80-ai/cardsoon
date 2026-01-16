'use client'

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const BLOG_URL = process.env.NEXT_PUBLIC_BLOG_URL || "#";

  const linkClass = (path) =>
    `hover:text-white font-SFPro hover:underline transition-colors ${pathname === path
      ? "text-white underline"
      : "text-white"
    }`;

  return (
    <footer className="bg-[#14262C] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8 mb-6">

          <div className="md:col-span-2">
            <div className="flex items-center mb-4 w-32  justify-center">
              <Image
                src="/images/logo.png"
                alt="cardsoon Logo"
                width={128}
                height={128}
                className="object-contain"
                unoptimized
              />
            </div>
            <p className="text-white text-sm font-SFPro">
              Cardsoon is your trusted platform for seamlessly converting gift cards into cash. We combine security, speed, and simplicity to ensure every transaction is smooth and hassle-free.

            </p>
            <Link
              href="mailto:service@cardsoon.store"
              className="text-white hover:text-white hover:underline transition-colors"
            >
              Email:&nbsp;&nbsp;service@cardsoon.store
            </Link>
            <div className="pt-4">
              <div className="flex items-center gap-4">
                <Link
                  href="https://www.instagram.com/cardsoon_official/"
                  className="flex-shrink-0 flex items-center justify-center "
                >
                  <Image
                    src="/images/instagram.png"
                    alt="Instagram"
                    width={38}
                    height={38}
                    className="object-contain"
                    unoptimized
                  />
                </Link>

                <Link
                  href="https://www.facebook.com/cardsoon/"
                  className="flex-shrink-0 flex items-center justify-center "
                >
                  <Image
                    src="/images/facebook.png"
                    alt="Facebook"
                    width={38}
                    height={38}
                    className="object-contain"
                    unoptimized
                  />
                </Link>

                <Link
                  href="https://www.tiktok.com/@use_cardsoon"
                  className=" flex-shrink-0 flex items-center justify-center "
                >
                  <Image
                    src="/images/tiktok.png"
                    alt="TikTok"
                    width={38}
                    height={38}
                    className="object-contain"
                    unoptimized
                  />
                </Link>

                <Link
                  href="https://www.youtube.com/@Cardsoon"
                  className="flex-shrink-0 flex items-center justify-center "
                >
                  <Image
                    src="/images/youtube.png"
                    alt="YouTube"
                    width={38}
                    height={38}
                    className="object-contain"
                    unoptimized
                  />
                </Link>
              </div>
            </div>
          </div>

          <div>
            <ul className="space-y-3 space-x-3 md:space-x-0">
              <li className="text-white text-lg font-SFProBold mb-3">Services</li>
              <li><Link href="#" className={`${linkClass('/1')}`}>Gift Card Exchange</Link></li>
              <li><Link href="#" className={`${linkClass('/2')}`}>Pay Bills</Link></li>
              <li><Link href="#" className={`${linkClass('/privacy2')}`}>Virtual Card</Link></li>
            </ul>
          </div>

          <div>
            <ul className="space-y-3 space-x-3 md:space-x-0">
              <li className="text-white text-lg font-SFProBold mb-3">Support</li>
              <li><Link href="/gift-cards" className={`${linkClass('/gift-cards')}`}>blog</Link></li>
              <li><Link href="/privacy" className={`${linkClass('/privacy')}`}>Privacy Policy</Link></li>
              <li><Link href="/terms" className={`${linkClass('/terms')}`}>Terms of Service</Link></li>
            </ul>
          </div>
          <div>

          </div>
        </div>
        <hr />
        <div className="text-center font-SFPro text-white/70 mt-8">
          <p>© 2026 Cardsoon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
