'use client'

import { useState, useEffect, useRef } from 'react'

const faqs = [
  {
    q: '¿Cómo reservo un turno?',
    a: 'Escribime directamente por WhatsApp al +54 2364 270445. Te respondo lo antes posible para coordinar día, hora y servicio.',
  },
  {
    q: '¿Cuánto dura el esmaltado semipermanente?',
    a: 'Depende del cuidado que le des, pero en promedio dura entre 2 y 3 semanas. Evitar el contacto prolongado con agua y usar guantes al lavar ayuda a prolongar su duración.',
  },
  {
    q: '¿El soft gel daña la uña natural?',
    a: 'No, el soft gel es una de las técnicas más suaves. Las cápsulas se adhieren con gel constructor y no requieren lima agresiva. Al retirarse correctamente tampoco deja daño.',
  },
  {
    q: '¿Puedo elegir el diseño el mismo día?',
    a: 'Sí, podés traer referencias guardadas o elegir del catálogo el día del turno. Si querés algo muy elaborado, es mejor coordinarlo antes para asegurarnos de tener todo el material.',
  },
  {
    q: '¿Qué productos utilizás?',
    a: 'Trabajo solo con materiales de primera calidad: geles, lámparas UV/LED y polygel de marcas profesionales con certificación de seguridad.',
  },
  {
    q: '¿Aceptás pagos en efectivo y por transferencia?',
    a: 'Sí, acepto efectivo, transferencia bancaria y MercadoPago. Consultame al reservar si tenés alguna otra consulta sobre el pago.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.05 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="faq"
      className="px-5 py-20 md:px-[60px] md:py-[120px] border-t"
      style={{ borderColor: 'rgba(201,168,212,0.2)' }}
    >
      <div className="reveal" ref={ref}>
        <p className="text-[0.6rem] tracking-[0.3em] uppercase text-lavender mb-3">FAQ</p>
        <h2 className="font-cormorant text-[clamp(2rem,5vw,3.5rem)] font-light mb-12">
          Preguntas <em className="italic text-lavender">frecuentes</em>
        </h2>

        <div className="max-w-2xl flex flex-col">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border-b"
              style={{ borderColor: 'rgba(201,168,212,0.15)' }}
            >
              <button
                className="w-full text-left flex justify-between items-center py-5 gap-4 bg-transparent border-none cursor-pointer"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-cormorant text-[1.1rem] text-site-white font-normal leading-snug">
                  {faq.q}
                </span>
                <span
                  className="text-lavender text-[1.2rem] shrink-0 transition-transform duration-300"
                  style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-400 ease-in-out ${open === i ? 'max-h-[300px] pb-5' : 'max-h-0'}`}
              >
                <p className="text-[0.82rem] leading-[1.8] text-mid-gray">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
