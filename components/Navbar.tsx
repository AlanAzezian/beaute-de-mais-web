'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const WA_LINK =
    'https://wa.me/542364270445?text=Hola%20Aixa!%20Quisiera%20reservar%20un%20turno%20%F0%9F%92%85'

  const links = [
    { href: '#about', label: 'Sobre mí' },
    { href: '#services', label: 'Servicios' },
    { href: '#gallery', label: 'Galería' },
    { href: '#booking', label: 'Reservas' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-400 ${
        scrolled
          ? 'bg-site-black/90 backdrop-blur-md py-4 px-5 md:px-[60px]'
          : 'bg-transparent py-6 px-5 md:px-[60px]'
      }`}
    >
      {/* Logo */}
      <a
        href="#"
        className="font-cormorant text-[1.15rem] tracking-[0.25em] uppercase text-site-white font-normal no-underline"
      >
        Beauté <span className="text-lavender">&</span> des Mains
      </a>

      {/* Desktop nav links */}
      <ul className="hidden md:flex gap-10 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-[0.7rem] tracking-[0.2em] uppercase text-mid-gray no-underline hover:text-site-white transition-colors duration-300"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop CTA */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:block text-[0.65rem] tracking-[0.2em] uppercase text-site-white border border-lavender px-6 py-2.5 no-underline hover:bg-lavender hover:text-site-black transition-all duration-300"
      >
        Reservar turno
      </a>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-[5px] cursor-pointer bg-transparent border-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-px bg-site-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}
        />
        <span
          className={`block w-6 h-px bg-site-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
        />
        <span
          className={`block w-6 h-px bg-site-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`}
        />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-site-black/95 backdrop-blur-md border-t border-border-color py-6 px-5 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-[0.75rem] tracking-[0.2em] uppercase text-mid-gray no-underline hover:text-site-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.65rem] tracking-[0.2em] uppercase text-site-white border border-lavender px-6 py-3 text-center no-underline"
          >
            Reservar turno
          </a>
        </div>
      )}
    </nav>
  )
}
