'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'

type NavLink = {
  name: string
  href: string
}

type NavbarProps = {
  slug: string
  logo?: string
  navLinks?: NavLink[]
  ctaText?: string
}

const Navbar = ({
  slug,
  logo = "/logo.png",
  navLinks = [],
  ctaText = "Contact",
}: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const buildHref = (href: string) => {
    if (!href) return `/${slug}`
    return `/${slug}/${href}`
  }

  return (
    <header className="w-full absolute top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href={`/${slug}`}>
            <Image
              src={logo}
              alt="Logo"
              width={50}
              height={50}
              className="object-contain"
            />
          </Link>
        </div>

        <ul className="hidden md:flex items-center gap-10 text-[17px] font-medium text-gray-700">
          {navLinks.map((link, index) => {
            const fullHref = buildHref(link.href)
            const isActive = pathname === fullHref

            return (
              <li key={index}>
                <Link
                  href={fullHref}
                  className={`transition hover:text-blue-700 ${
                    isActive ? 'text-blue-700 font-semibold' : ''
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="hidden md:block">
          <Link
            href={`/${slug}/contact`}
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition"
          >
            {ctaText}
          </Link>
        </div>

        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200">
          <div className="px-6 py-5 space-y-4">
            {navLinks.map((link, index) => {
              const fullHref = buildHref(link.href)

              return (
                <Link
                  key={index}
                  href={fullHref}
                  className="block text-gray-700 font-medium hover:text-blue-700 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              )
            })}

            <Link
              href={`/${slug}/contact`}
              className="block w-full text-center bg-blue-700 hover:bg-blue-800 text-white px-5 py-3 rounded-xl font-semibold transition"
              onClick={() => setIsOpen(false)}
            >
              {ctaText}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar