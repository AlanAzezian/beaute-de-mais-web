'use client'

import { useEffect, useRef } from 'react'

const tableData = {
  headers: ['Servicio', 'Tiempo estimado', 'Duración', 'Qué incluye'],
  rows: [
    {
      name: 'Manicura Básica',
      time: '30–40 min',
      duration: 'Hasta 1 semana',
      includes: 'Lima, cutícula, hidratación y esmaltado común',
    },
    {
      name: 'Esmaltado Semipermanente',
      time: '45–60 min',
      duration: '2–3 semanas',
      includes: 'Preparación + esmaltado gel curado con lámpara UV/LED',
    },
    {
      name: 'Kapping en Polygel',
      time: '60–75 min',
      duration: '3–4 semanas',
      includes: 'Revestimiento de uña natural con polygel + color o diseño',
    },
    {
      name: 'Esculpidas en Polygel',
      time: '75–90 min',
      duration: '3–5 semanas',
      includes: 'Extensión personalizada con polygel + forma + diseño',
    },
    {
      name: 'Soft Gel (Cápsulas)',
      time: '60–70 min',
      duration: '3–4 semanas',
      includes: 'Cápsulas de gel adheridas + material gel constructor + diseño',
    },
  ],
}

export default function ServicesTable() {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      className="px-5 py-20 md:px-[60px] md:py-[120px] border-t"
      style={{ borderColor: 'rgba(201,168,212,0.2)' }}
    >
      <div className="reveal" ref={ref}>
        <p className="text-[0.6rem] tracking-[0.3em] uppercase text-lavender mb-3">Comparativa</p>
        <h2 className="font-cormorant text-[clamp(2rem,5vw,3.5rem)] font-light mb-12">
          ¿Qué <em className="italic text-lavender">servicio</em> te conviene?
        </h2>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse services-table">
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(201,168,212,0.2)' }}>
                {tableData.headers.map((h) => (
                  <th
                    key={h}
                    className="text-left pb-5 pr-6 text-[0.6rem] tracking-[0.25em] uppercase text-lavender font-normal"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.rows.map((row, i) => (
                <tr
                  key={row.name}
                  className="transition-colors duration-200 group"
                  style={{
                    borderBottom: '1px solid rgba(201,168,212,0.1)',
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = 'rgba(201,168,212,0.04)')
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                >
                  <td className="py-5 pr-6 font-cormorant text-[1.05rem] text-site-white">
                    {row.name}
                  </td>
                  <td className="py-5 pr-6 text-[0.78rem] text-mid-gray">{row.time}</td>
                  <td className="py-5 pr-6 text-[0.78rem] text-lavender">{row.duration}</td>
                  <td className="py-5 text-[0.78rem] text-mid-gray leading-[1.6]">{row.includes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden flex flex-col gap-4">
          {tableData.rows.map((row) => (
            <div
              key={row.name}
              className="p-6 border"
              style={{
                background: '#1a1a1a',
                borderColor: 'rgba(201,168,212,0.15)',
              }}
            >
              <h3 className="font-cormorant text-[1.2rem] text-site-white mb-4">{row.name}</h3>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-[0.75rem]">
                  <span className="text-lavender tracking-[0.1em]">Tiempo</span>
                  <span className="text-mid-gray">{row.time}</span>
                </div>
                <div className="flex justify-between text-[0.75rem]">
                  <span className="text-lavender tracking-[0.1em]">Duración</span>
                  <span className="text-mid-gray">{row.duration}</span>
                </div>
                <div className="mt-3 pt-3 border-t text-[0.75rem] text-mid-gray leading-[1.6]" style={{ borderColor: 'rgba(201,168,212,0.1)' }}>
                  {row.includes}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
