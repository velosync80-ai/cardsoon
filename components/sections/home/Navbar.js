'use client'

import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../../../public/images/logo.png";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();
  const BLOG_URL = process.env.NEXT_PUBLIC_BLOG_URL || "#";

  const linkClass = (path) =>
    `font-semibold transition-colors font-SFProBold ${pathname === path
      ? "text-green-500 "
      : "text-gray-900 hover:text-green-400"
    }`;

  const linkClassHeader = (path) =>
    `sticky top-0 z-50 ${pathname === path
      ? "pb-10"
      : "bg-gray-900 pb-0"
    }`;

  const navLinkClass = (path) =>
    `relative font-SFProSemiBold transition-colors
   ${pathname === path ? 'text-white ' : 'text-white/60 hover:text-white'}`;


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
        <div className="flex items-center justify-between h-20 gap-4">


          <div className="flex items-center gap-2">
            <a href="/"> <Image src="/images/logo.png" alt="Cardsoon logo" width={200} height={35} /></a>
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
              className="bg-[#058057] text-white font-bold py-2 px-10 rounded-full shadow-lg hover:bg-green-400 transition"
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
                className="absolute right-0 top-20 mt-0 w-full shadow-lg bg-white z-50 border animate-fade-in"
              >
                <div className="flex flex-col py-2">
                  <Link
                    href="https://app.cardsoon.store/"
                    className="w-fit md:flex bg-green-500 hover:bg-green-600 text-white px-6 py-2 m-6 my-2 rounded font-semibold transition-colors whitespace-nowrap"
                    onClick={() => trackEvent('click_get_app_header', 'CTA Click', 'Homepage - Header')}
                  >
                    Get the App
                  </Link>
                  <Link
                    href="/"
                    className={`${linkClass("/")} px-6 py-3 hover:bg-gray-100 text-gray-900 text-base font-medium border-b`}
                    onClick={() => setMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/pay-bills"
                    className={`${linkClass("/pay-bills")} px-6 py-3 hover:bg-gray-100 text-gray-900 text-base font-medium border-b`}
                    onClick={() => setMenuOpen(false)}
                  >
                    Pay Bills
                  </Link>
                  <Link
                    href="/virtual-card"
                    className={`${linkClass("/virtual-card")} px-6 py-3 hover:bg-gray-100 text-gray-900 text-base font-medium border-b`}
                    onClick={() => setMenuOpen(false)}
                  >
                    Virtual Card
                  </Link>
                  <Link
                    href={BLOG_URL}
                    className={`${linkClass("/blog")} px-6 py-3 hover:bg-gray-100 text-gray-900 text-base font-medium`}
                    onClick={() => setMenuOpen(false)}
                  >
                    Blog
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
