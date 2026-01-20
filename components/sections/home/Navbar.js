'use client'

import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../../../public/images/logo.png";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";
import { ChevronRight } from 'lucide-react'
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();
  const BLOG_URL = process.env.NEXT_PUBLIC_BLOG_URL || "#";

  const linkClass = (path) =>
    `font-SFProBold ${pathname === path
      ? "text-green-500 "
      : "text-gray-900 hover:text-green-400"
    }`;

  const linkClassHeader = (path) =>
    `sticky top-0 z-50 ${pathname === path
      ? "pb-10"
      : "bg-[#198057] pb-0"
    }`;

  const navLinkClass = (path) =>
    `relative font-SFProSemiBold transition-colors
   ${pathname === path ? 'text-white ' : 'text-white/60 hover:text-white'}`;

  const menuItems = [
    { title: 'Home', href: '/' },
    { title: 'Pay Bills', href: '/pay-bills' },
    { title: 'Virtual Card', href: '/virtual-card' },
    { title: 'Blog', href: BLOG_URL },
  ]

  const menuButtonRef = useRef();

  useEffect(() => {
    if (!menuOpen) return;

    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);


  return (
    <nav className={`${linkClassHeader("/")}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex items-center justify-between h-20 md:h-20 gap-4">


          <div className="flex items-center gap-2">
            <a href="/"> <Image src="/images/logo.png" alt="Cardsoon logo" width={200} height={35} className="w-[130px] md:w-fit" /></a>
          </div>


          <div className="text-[16px] hidden md:flex gap-11 items-center">
            <Link href="/" className={navLinkClass("/")}>
              <span className="relative inline-block">
                Home
                {pathname === "/" && (
                  <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-5 h-[2px] bg-white rounded-full" />
                )}
              </span>
            </Link>

            <Link href="/pay-bills" className={navLinkClass("/pay-bills")}>
              <span className="relative inline-block">
                Pay Bills
                {pathname === "/pay-bills" && (
                  <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-5 h-[2px] bg-white rounded-full" />
                )}
              </span>
            </Link>

            <Link href="/virtual-card" className={navLinkClass("/virtual-card")}>
              <span className="relative inline-block">
                Virtual Card
                {pathname === "/virtual-card" && (
                  <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-5 h-[2px] bg-white rounded-full" />
                )}
              </span>
            </Link>

            <Link href={BLOG_URL} className={navLinkClass("/blog")}>
              <span className="relative inline-block">
                Blog
                {pathname === "/blog" && (
                  <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-5 h-[2px] bg-white rounded-full" />
                )}
              </span>
            </Link>

            <Link
              href="https://app.cardsoon.store/"
               onClick={() => {
                setOpen(true)
                trackEvent('click_get_app_header', 'Custom Event', 'Homepage - Header')
              }}
              className={`bg-[#058057] text-white font-bold py-2 px-10 rounded-full ${pathname === '/' ? '':'bg-black/40'} shadow-lg hover:bg-black/40 transition`}
            >
              Get the App
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              ref={menuButtonRef}
              onClick={() => setMenuOpen(prev => !prev)}
              className="p-2 rounded focus:outline-none"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

            {menuOpen && (
              <div
                ref={menuRef}
                className="absolute right-0 top-0 w-full shadow-lg bg-white z-50 border animate-fade-in"
              >
                <div className="flex items-center justify-between h-[50px] px-5 pt-3 gap-4">

                  <div className="flex items-center gap-2">
                    <a href="/"> <Image src="/images/logo_dark.png" alt="Cardsoon logo" width={200} height={35} className="w-[130px] md:w-fit" /></a>
                  </div>


                  <button
                    ref={menuButtonRef}
                    onClick={() => setMenuOpen(prev => !prev)}
                    className=" rounded focus:outline-none"
                    aria-label="Toggle menu"
                  >
                    {menuOpen ? (
                      <svg
                        className="w-7 h-7 text-white"
                        fill="none"
                        stroke="#272636"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    ) : (
                      <svg
                        className="w-7 h-7 text-white"
                        fill="none"
                        stroke="#272636"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    )}
                  </button>
                </div>
                <hr className="mt-2"/>
                <div className="flex flex-col py-0 ">
                  {menuItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className={`${linkClass(item.href)} flex justify-between items-center px-6 py-3 hover:bg-gray-100 text-gray-900 text-base font-medium font-SFProSemiBold`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.title}
                      <ChevronRight size={20} className="text-gray-400" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
