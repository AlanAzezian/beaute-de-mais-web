'use client'

import { useEffect, useRef } from 'react'

export default function About() {
  const refs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    refs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const setRef = (i: number) => (el: HTMLElement | null) => {
    refs.current[i] = el
  }

  return (
    <section
      id="about"
      className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[80px] px-5 py-20 md:px-[60px] md:py-[120px] border-t"
      style={{ borderColor: 'rgba(201,168,212,0.2)' }}
    >
      <div className="reveal flex flex-col gap-10" ref={setRef(0) as any}>
        <div
          className="relative min-h-[300px] w-full mx-auto aspect-square md:aspect-[5/4] flex items-end overflow-hidden rounded-2xl"
          style={{ background: '#1a1a1a' }}
        >
          {/* Gradient BG */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(135deg, rgba(155,111,174,0.2) 0%, rgba(201,168,212,0.05) 60%, transparent 100%)',
            }}
          />

          {/* Bottom stat */}
          <div
            className="relative z-10 w-full px-8 py-7 border-t"
            style={{ borderColor: 'rgba(201,168,212,0.15)', background: 'linear-gradient(to top, rgba(10,10,10,0.8), rgba(10,10,10,0) 150%)' }}
          >
            <div className="font-cormorant text-[2.8rem] text-lavender font-light leading-none">4+</div>
            <div className="text-[0.75rem] tracking-[0.2em] uppercase text-mid-gray mt-2">
              Años de experiencia
            </div>
          </div>
        </div>

        {/* SVG Logo (moved below image) */}
        <div className="flex items-center justify-center grow pb-4">
          <svg viewBox="0 0 200 200" width="180" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
            <circle cx="100" cy="100" r="95" stroke="rgba(201,168,212,0.25)" strokeWidth="1" />
            <text x="100" y="115" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="100" fill="none" stroke="rgba(201,168,212,0.5)" strokeWidth="1" fontWeight="300">A</text>
            <circle cx="145" cy="72" r="18" fill="rgba(155,111,174,0.2)" stroke="rgba(201,168,212,0.4)" strokeWidth="0.8" />
            <circle cx="145" cy="72" r="11" fill="rgba(201,168,212,0.15)" />
            <circle cx="145" cy="72" r="5" fill="rgba(201,168,212,0.3)" />
            <ellipse cx="145" cy="90" rx="4" ry="8" fill="rgba(100,160,80,0.4)" />
            <text x="100" y="168" textAnchor="middle" fontFamily="Jost, sans-serif" fontSize="8" fill="rgba(201,168,212,0.5)" letterSpacing="4" fontWeight="300">BEAUTÉ DES MAINS</text>
          </svg>
        </div>
      </div>

      {/* Text column */}
      <div className="reveal flex flex-col justify-center" ref={setRef(1) as any}>
        <p className="text-[0.75rem] tracking-[0.3em] uppercase text-lavender mb-6">Sobre mí</p>
        <h2 className="font-cormorant text-[clamp(2.5rem,5vw,3.5rem)] font-light leading-[1.15] mb-8">
          Arte que <em className="italic text-lavender">habla</em>
          <br />
          por tus manos
        </h2>
        <p className="text-lg leading-[1.85] text-mid-gray mb-5">
          Soy Aixa Azezian, nail artist apasionada por transformar cada set de uñas en una obra de arte
          única. Detrás de cada diseño hay dedicación, técnica y esa chispa creativa que hace que cada
          cliente se vaya sintiéndose especial.
        </p>
        <p className="text-lg leading-[1.85] text-mid-gray mb-12">
          Desde diseños limpios y minimalistas hasta sets maximalistas llenos de detalle — cada trabajo
          refleja la personalidad de quien lo lleva.
        </p>
        <div className="flex gap-10">
          {[
            { num: '33+', label: 'Trabajos publicados' },
            { num: '100%', label: 'Satisfacción' },
          ].map(({ num, label }) => (
            <div key={label}>
              <div className="font-cormorant text-[3rem] text-lavender font-light leading-none mb-2">{num}</div>
              <div className="text-[0.75rem] tracking-[0.15em] uppercase text-mid-gray">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
