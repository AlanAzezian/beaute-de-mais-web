'use client'

import { useEffect, useRef } from 'react'

const steps = [
  {
    num: '01',
    title: 'Reservá tu turno',
    desc: 'Escribime por WhatsApp para coordinar día, hora y el servicio que querés. También podés contarme si tenés inspiración o una paleta de colores en mente.',
    icon: '📲',
  },
  {
    num: '02',
    title: 'Elegí tu diseño',
    desc: 'Traé referencias, usá las de mi catálogo o diseñamos algo 100% personalizado para vos. Me encanta trabajar con ideas originales.',
    icon: '🎨',
  },
  {
    num: '03',
    title: 'Disfrutá el resultado',
    desc: 'Salís con un set que refleja tu personalidad. Uñas perfectas, diseñadas con cuidado y materiales de primera calidad.',
    icon: '💅',
  },
]

export default function Process() {
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
      className="px-5 py-20 md:px-[60px] md:py-[120px] border-t"
      style={{ borderColor: 'rgba(201,168,212,0.2)' }}
    >
      <div className="reveal mb-14" ref={(el) => { refs.current[0] = el }}>
        <p className="text-[0.6rem] tracking-[0.3em] uppercase text-lavender mb-3">Proceso</p>
        <h2 className="font-cormorant text-[clamp(2rem,5vw,3.5rem)] font-light">
          Así <em className="italic text-lavender">funciona</em>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: 'rgba(201,168,212,0.1)' }}>
        {steps.map((step, i) => (
          <div
            key={step.num}
            className="reveal px-8 py-12 flex flex-col"
            style={{ background: '#0a0a0a' }}
            ref={(el) => { refs.current[i + 1] = el }}
          >
            <span
              className="font-cormorant text-[4rem] font-light leading-none mb-8"
              style={{ color: 'rgba(201,168,212,0.15)' }}
            >
              {step.num}
            </span>
            <span className="text-[2rem] mb-5">{step.icon}</span>
            <h3 className="font-cormorant text-[1.5rem] font-normal text-site-white mb-4">
              {step.title}
            </h3>
            <p className="text-[0.8rem] leading-[1.8] text-mid-gray mt-auto">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
