'use client'

import { useEffect, useRef } from 'react'
import { useLocation, LOCATIONS, LocationData } from './LocationContext'

export default function Location() {
  const ref = useRef<HTMLDivElement | null>(null)
  const { selectedLocation } = useLocation()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.05 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const activeLocation: LocationData | undefined = LOCATIONS.find(
    (l) => l.id === selectedLocation
  )

  const mapsUrl = activeLocation
    ? `https://maps.google.com/maps?q=${activeLocation.mapsQuery}&output=embed`
    : `https://maps.google.com/maps?q=San+Fernando,+Buenos+Aires,+Argentina&output=embed`

  const mapsLink = activeLocation
    ? `https://maps.google.com/maps?q=${activeLocation.mapsQuery}`
    : `https://maps.google.com/maps?q=San+Fernando,+Buenos+Aires,+Argentina`

  return (
    <section
      id="location"
      className="px-5 py-20 md:px-[60px] md:py-[100px] border-t"
      style={{ borderColor: 'rgba(201,168,212,0.2)' }}
    >
      <div className="reveal" ref={ref}>
        <p className="text-[0.6rem] tracking-[0.3em] uppercase text-lavender mb-3">Ubicación</p>
        <h2 className="font-cormorant text-[clamp(2rem,5vw,3.5rem)] font-light mb-10">
          Dónde <em className="italic text-lavender">encontrarme</em>
        </h2>

        {/* Location cards summary - show all 3 when nothing selected */}
        {!activeLocation && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {LOCATIONS.map((loc) => (
              <div
                key={loc.id}
                className="border rounded-sm px-5 py-5"
                style={{ borderColor: 'rgba(201,168,212,0.15)' }}
              >
                <p className="text-[0.85rem] text-site-white font-medium mb-1">{loc.name}</p>
                <p className="text-[0.72rem] text-mid-gray mb-1">{loc.zone}</p>
                <p className="text-[0.72rem] text-mid-gray">{loc.address}</p>
                <p className="text-[0.68rem] text-mid-gray mt-2">{loc.hours}</p>
              </div>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <div
            className="relative overflow-hidden w-full"
            style={{ aspectRatio: '4/3' }}
          >
            <iframe
              title="Beauté des Mains — Ubicación"
              src={mapsUrl}
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block', filter: 'grayscale(0.3) contrast(0.9)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-6 pt-2">
            {activeLocation ? (
              <>
                {/* Selected location info */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 rounded-full bg-lavender" />
                    <p className="text-[0.75rem] tracking-[0.15em] uppercase text-lavender font-medium">
                      {activeLocation.name}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-[0.6rem] tracking-[0.2em] uppercase text-lavender mb-2">Zona</p>
                  <p className="text-site-white text-[0.95rem]">{activeLocation.zone}</p>
                </div>
                <div>
                  <p className="text-[0.6rem] tracking-[0.2em] uppercase text-lavender mb-2">Dirección</p>
                  <p className="text-site-white text-[0.95rem]">{activeLocation.address}</p>
                </div>
                <div>
                  <p className="text-[0.6rem] tracking-[0.2em] uppercase text-lavender mb-2">Horario</p>
                  <p className="text-site-white text-[0.85rem]">{activeLocation.hours}</p>
                </div>
              </>
            ) : (
              <>
                {/* Default info */}
                <div>
                  <p className="text-[0.6rem] tracking-[0.2em] uppercase text-lavender mb-2">Dirección</p>
                  <p className="text-site-white text-[0.95rem]">Elegí una ubicación en la sección de Reservas</p>
                  <p className="text-mid-gray text-[0.85rem]">para ver los detalles del lugar</p>
                </div>
              </>
            )}
            <div>
              <p className="text-[0.6rem] tracking-[0.2em] uppercase text-lavender mb-2">Contacto</p>
              <a
                href="https://wa.me/542364270445"
                target="_blank"
                rel="noopener noreferrer"
                className="text-site-white text-[0.85rem] no-underline hover:text-lavender transition-colors"
              >
                +54 2364 270445
              </a>
              <br />
              <a
                href="https://www.instagram.com/beaute_des_mainss/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mid-gray text-[0.85rem] no-underline hover:text-lavender transition-colors"
              >
                @beaute_des_mainss
              </a>
            </div>
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start text-[0.62rem] tracking-[0.2em] uppercase text-lavender border px-5 py-2.5 no-underline hover:bg-lavender hover:text-site-black transition-all duration-300 mt-2"
              style={{ borderColor: 'rgba(201,168,212,0.3)' }}
            >
              Abrir en Google Maps →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
