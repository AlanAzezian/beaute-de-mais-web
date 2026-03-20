'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

type GalleryCategory = 'all' | 'bw' | 'ombre' | 'blue' | 'ruby' | 'natural'

interface Photo {
  src: string
  alt: string
  desc: string
  categories: GalleryCategory[]
}

const photos: Photo[] = [
  {
    src: '/gallery/g01-softgel-bw.jpg',
    alt: 'Soft gel black & white nail art',
    desc: 'Soft gel · Black & White 🖤🤍',
    categories: ['all', 'bw'],
  },
  {
    src: '/gallery/g02-ombre-red.jpg',
    alt: 'Ombré rojo degradé',
    desc: 'Ombré · Rojo degradé 🔴',
    categories: ['all', 'ruby'],
  },
  {
    src: '/gallery/g03-nail-art-color.jpg',
    alt: 'Nail art color artístico',
    desc: 'Nail art · Diseño artístico 🎨',
    categories: ['all', 'ombre'],
  },
  {
    src: '/gallery/g04-capping-bold.jpg',
    alt: 'Capping diseño personalizado azul',
    desc: 'Capping · Azul bold ▪️',
    categories: ['all', 'blue'],
  },
  {
    src: '/gallery/g05-ruby-red.jpg',
    alt: 'Uñas rojas ruby red',
    desc: 'Esmaltado · Ruby Red 💋',
    categories: ['all', 'ruby'],
  },
  {
    src: '/gallery/g06-red-heart.jpg',
    alt: 'Uñas rojas con corazón',
    desc: 'Esmaltado · Red heart ❤️',
    categories: ['all', 'ruby'],
  },
  {
    src: '/gallery/g07-softgel-french.jpg',
    alt: 'Soft gel french manicure',
    desc: 'Soft gel · French cremoso 🤍',
    categories: ['all', 'natural'],
  },
  {
    src: '/gallery/g08-natural-look.jpg',
    alt: 'Uñas natural look',
    desc: 'Natural look · Nude cremoso',
    categories: ['all', 'natural', 'bw'],
  },
  {
    src: '/gallery/g09-french-sparkle.jpg',
    alt: 'French con sparkle glitter',
    desc: 'Soft gel · French sparkle ✨',
    categories: ['all', 'ombre'],
  },
  {
    src: '/gallery/g10-animal-print.jpg',
    alt: 'Uñas animal print',
    desc: 'Diseño · Animal print 🐆',
    categories: ['all', 'ombre'],
  },
  {
    src: '/gallery/g11-nude-naturales.jpg',
    alt: 'Nude naturales elegantes',
    desc: 'Esmaltado · Nude elegante',
    categories: ['all', 'natural', 'bw'],
  },
  {
    src: '/gallery/g12-negro-minimal.jpg',
    alt: 'Negro minimal',
    desc: 'Soft gel · Negro minimal 🖤',
    categories: ['all', 'bw'],
  },
  {
    src: '/gallery/g13-francesitas-aes.jpg',
    alt: 'Francesitas estéticas',
    desc: 'Kapping · Francesitas 🫶',
    categories: ['all', 'bw', 'natural'],
  },
  {
    src: '/gallery/g14-softgel-azules.jpg',
    alt: 'Soft gel azules',
    desc: 'Soft gel · Azul cielo 💙',
    categories: ['all', 'blue'],
  },
  {
    src: '/gallery/g15-tierno-marron.jpg',
    alt: 'Tierno marrón ombré',
    desc: 'Ombré · Tierno marrón 🤎',
    categories: ['all', 'ombre'],
  },
  {
    src: '/gallery/g16-rosa-glitter.jpg',
    alt: 'Rosa glitter brillante',
    desc: 'Esculpidas · Rosa glitter 🩷✨',
    categories: ['all', 'ombre'],
  },
]

const tabs = [
  { key: 'all', label: 'Todos' },
  { key: 'bw', label: 'Black & White' },
  { key: 'ombre', label: 'Ombré & Color' },
  { key: 'blue', label: 'Bold Blue' },
  { key: 'ruby', label: 'Ruby' },
  { key: 'natural', label: 'Natural & Nude' },
] as const

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<GalleryCategory>('all')
  const gridRef = useRef<HTMLDivElement | null>(null)
  const headerRef = useRef<HTMLDivElement | null>(null)
  const tabsRef = useRef<HTMLDivElement | null>(null)

  const filtered = photos.filter((p) => p.categories.includes(activeTab))

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.05 }
    )
    if (headerRef.current) observer.observe(headerRef.current)
    if (tabsRef.current) observer.observe(tabsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="gallery"
      className="px-5 py-20 md:px-[60px] md:py-[120px] border-t"
      style={{ borderColor: 'rgba(201,168,212,0.2)' }}
    >
      {/* Header */}
      <div
        className="reveal flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10"
        ref={headerRef}
      >
        <div>
          <p className="text-[0.6rem] tracking-[0.3em] uppercase text-lavender mb-3">Galería</p>
          <h2 className="font-cormorant text-[clamp(2rem,5vw,3.5rem)] font-light">
            Diseños <em className="italic text-lavender">únicos</em>
          </h2>
        </div>
        <a
          href="https://www.instagram.com/beaute_des_mainss/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[0.7rem] tracking-[0.2em] uppercase text-mid-gray no-underline hover:text-site-white transition-colors"
        >
          Ver todos en Instagram →
        </a>
      </div>

      {/* Tabs */}
      <div
        className="reveal flex flex-wrap gap-2 mb-10"
        ref={tabsRef}
      >
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setActiveTab(t.key)}
            className={`px-5 py-2 text-[0.62rem] tracking-[0.2em] uppercase border cursor-pointer transition-all duration-300 ${
              activeTab === t.key
                ? 'bg-lavender text-site-black border-lavender'
                : 'bg-transparent text-mid-gray hover:text-site-white hover:border-site-white'
            }`}
            style={{ borderColor: activeTab === t.key ? undefined : 'rgba(201,168,212,0.2)' }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Photo Grid */}
      <div
        ref={gridRef}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2"
      >
        {filtered.map((photo) => (
          <div
            key={photo.src}
            className="relative overflow-hidden group cursor-pointer"
            style={{ aspectRatio: '3/4', background: '#1a1a1a' }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
              }}
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <p className="text-site-white text-[0.72rem] leading-[1.5] p-4">{photo.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-mid-gray text-sm text-center py-20">No hay fotos en esta categoría aún.</p>
      )}
    </section>
  )
}
