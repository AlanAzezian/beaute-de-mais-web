'use client'

import { useEffect, useRef } from 'react'

const services = [
  {
    num: '01',
    icon: '💅',
    name: 'Esmaltado Semipermanente',
    desc: 'Color de larga duración con acabado gel. Brillo intenso que dura hasta 3 semanas sin astillarse.',
    tag: 'Más solicitado',
  },
  {
    num: '02',
    icon: '✨',
    name: 'Kapping en Polygel',
    desc: 'Técnica que combina la dureza del acrílico con la flexibilidad del gel. Uñas resistentes y naturales.',
    tag: 'Durabilidad',
  },
  {
    num: '03',
    icon: '🌸',
    name: 'Esculpidas en Polygel',
    desc: 'Extensiones moldeadas directamente sobre tus uñas. Longitud y forma personalizadas, resultado profesional.',
    tag: 'Extensiones',
  },
  {
    num: '04',
    icon: '🪄',
    name: 'Soft Gel',
    desc: 'Cápsulas de gel suave adheridas con gel constructor. Apariencia natural, cero daño en la uña natural.',
    tag: 'Natural',
  },
]

export default function ServicesCards() {
  const refs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    refs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="services"
      className="px-5 py-20 md:px-[60px] md:py-[120px] border-t"
      style={{ borderColor: 'rgba(201,168,212,0.2)' }}
    >
      {/* Header */}
      <div
        className="reveal flex flex-col md:flex-row md:items-end justify-between gap-5 mb-14"
        ref={(el) => { refs.current[0] = el }}
      >
        <div>
          <p className="text-[0.6rem] tracking-[0.3em] uppercase text-lavender mb-3">Servicios</p>
          <h2 className="font-cormorant text-[clamp(2rem,5vw,3.5rem)] font-light">
            Nuestros <em className="italic text-lavender">tratamientos</em>
          </h2>
        </div>
        <a
          href="https://wa.me/542364270445?text=Hola%20Aixa!%20Quisiera%20reservar%20un%20turno%20%F0%9F%92%85"
          target="_blank"
          rel="noopener noreferrer"
          className="self-start md:self-auto bg-lavender text-site-black text-[0.65rem] tracking-[0.25em] uppercase px-8 py-3.5 font-medium hover:bg-lavender-deep transition-all duration-300 no-underline"
        >
          Reservar ahora
        </a>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5">
        {services.map((s, i) => (
          <div
            key={s.num}
            className="reveal relative overflow-hidden px-8 py-12 border transition-all duration-400 group cursor-default"
            style={{ background: '#1a1a1a', borderColor: 'transparent' }}
            ref={(el) => { refs.current[i + 1] = el }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(201,168,212,0.2)'
              e.currentTarget.style.transform = 'translateY(-4px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'transparent'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            {/* Hover gradient */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
              style={{ background: 'linear-gradient(135deg, rgba(155,111,174,0.1) 0%, transparent 60%)' }}
            />
            <span
              className="block font-cormorant text-[3rem] font-light mb-10"
              style={{ color: 'rgba(201,168,212,0.1)' }}
            >
              {s.num}
            </span>
            <span className="block text-[1.6rem] mb-5">{s.icon}</span>
            <h3 className="font-cormorant text-[1.4rem] font-normal text-site-white mb-3">{s.name}</h3>
            <p className="text-[0.78rem] leading-[1.7] text-mid-gray mb-7">{s.desc}</p>
            <span
              className="inline-block text-[0.6rem] tracking-[0.2em] uppercase text-lavender border px-3.5 py-1.5"
              style={{ borderColor: 'rgba(201,168,212,0.2)' }}
            >
              {s.tag}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
