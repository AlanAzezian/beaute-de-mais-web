'use client'

import { useEffect, useRef } from 'react'
import { useLocation, LOCATIONS } from './LocationContext'

export default function Booking() {
  const ref = useRef<HTMLElement | null>(null)
  const { selectedLocation, setSelectedLocation } = useLocation()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const WA_LINK =
    'https://wa.me/542364270445?text=Hola%20Aixa!%20Quisiera%20reservar%20un%20turno%20%F0%9F%92%85'

  const handleBookClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // After a short delay, scroll to location section
    setTimeout(() => {
      const locationSection = document.getElementById('location')
      if (locationSection) {
        locationSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 300)
  }

  const locationIcons: Record<string, JSX.Element> = {
    particular: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    canitas: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12" y2="18.01" />
        <path d="M8 6h8" />
        <path d="M8 10h8" />
        <path d="M8 14h4" />
      </svg>
    ),
    palermo: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12" y2="18.01" />
        <path d="M8 6h8" />
        <path d="M8 10h8" />
        <path d="M8 14h4" />
      </svg>
    ),
  }

  return (
    <section
      id="booking"
      className="reveal relative overflow-hidden px-5 py-24 md:px-[60px] md:py-[100px] text-center border-t"
      style={{ borderColor: 'rgba(201,168,212,0.2)' }}
      ref={ref as any}
    >
      {/* Background decorative large text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="font-cormorant text-[12vw] font-light whitespace-nowrap"
          style={{ color: 'rgba(201,168,212,0.04)' }}
        >
          Reservá tu turno
        </span>
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(155,111,174,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10">
        <p className="text-[0.6rem] tracking-[0.3em] uppercase text-lavender mb-6">
          Reservas
        </p>
        <h2 className="font-cormorant text-[clamp(2rem,6vw,4.5rem)] font-light mb-6 max-w-2xl mx-auto leading-[1.15]">
          ¿Lista para tu próximo{' '}
          <em className="italic text-lavender">set perfecto</em>?
        </h2>
        <p className="text-[0.85rem] leading-[1.8] text-mid-gray max-w-md mx-auto mb-10">
          Elegí dónde querés atenderte y escribime por WhatsApp para coordinar tu turno.
        </p>

        {/* Location Picker Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
          {LOCATIONS.map((loc) => (
            <button
              key={loc.id}
              onClick={() => setSelectedLocation(loc.id as any)}
              className={`location-card rounded-sm px-5 py-6 text-left bg-transparent group ${
                selectedLocation === loc.id ? 'active' : ''
              }`}
            >
              <div className={`mb-3 transition-colors duration-300 ${
                selectedLocation === loc.id ? 'text-lavender' : 'text-mid-gray group-hover:text-lavender'
              }`}>
                {locationIcons[loc.id]}
              </div>
              <p className={`text-[0.85rem] font-medium mb-1 transition-colors duration-300 ${
                selectedLocation === loc.id ? 'text-site-white' : 'text-mid-gray'
              }`}>
                {loc.name}
              </p>
              <p className="text-[0.72rem] text-mid-gray leading-relaxed">
                {loc.zone}
              </p>
            </button>
          ))}
        </div>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleBookClick}
          className="inline-flex items-center gap-3 bg-lavender text-site-black text-[0.7rem] tracking-[0.25em] uppercase px-10 py-4 font-medium hover:bg-lavender-deep transition-all duration-300 no-underline"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Escribir ahora
        </a>
      </div>
    </section>
  )
}
