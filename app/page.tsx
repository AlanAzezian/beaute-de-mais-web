'use client'

import { useEffect, useRef } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import About from '@/components/About'
import ServicesCards from '@/components/ServicesCards'
import ServicesTable from '@/components/ServicesTable'
import Gallery from '@/components/Gallery'
import Process from '@/components/Process'
import Booking from '@/components/Booking'
import Location from '@/components/Location'
import FAQ from '@/components/FAQ'
import WhatsAppButton from '@/components/WhatsAppButton'
import Footer from '@/components/Footer'
import { LocationProvider } from '@/components/LocationContext'

export default function Home() {
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    let isScrolling = false
    let startY = 0

    // Easing function requested by user
    const easeInOutQuad = (t: number) => {
      return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2
    }

    const scrollToSection = (targetIndex: number) => {
      const sections = document.querySelectorAll('.scroll-section')
      if (targetIndex < 0 || targetIndex >= sections.length) return

      const targetY = targetIndex * window.innerHeight
      isScrolling = true

      const startScroll = window.scrollY
      const distance = targetY - startScroll
      const startTime = performance.now()
      const duration = 580

      const step = (currentTime: number) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)

        const easeProgress = easeInOutQuad(progress)
        window.scrollTo(0, startScroll + distance * easeProgress)

        if (progress < 1) {
          requestAnimationFrame(step)
        } else {
          isScrolling = false
        }
      }
      requestAnimationFrame(step)
    }

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      if (isScrolling) return

      const currentScroll = window.scrollY
      const currentIndex = Math.round(currentScroll / window.innerHeight)

      if (e.deltaY > 0) {
        scrollToSection(currentIndex + 1)
      } else if (e.deltaY < 0) {
        scrollToSection(currentIndex - 1)
      }
    }

    const handleTouchStart = (e: TouchEvent) => {
      if (isScrolling) {
        e.preventDefault()
        return
      }
      startY = e.touches[0].clientY
    }

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault()
    }

    const handleTouchEnd = (e: TouchEvent) => {
      if (isScrolling) return

      const endY = e.changedTouches[0].clientY
      const deltaY = startY - endY

      if (Math.abs(deltaY) > 30) {
        const currentScroll = window.scrollY
        const currentIndex = Math.round(currentScroll / window.innerHeight)

        if (deltaY > 0) {
          scrollToSection(currentIndex + 1)
        } else {
          scrollToSection(currentIndex - 1)
        }
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('touchstart', handleTouchStart, { passive: false })
    window.addEventListener('touchmove', handleTouchMove, { passive: false })
    window.addEventListener('touchend', handleTouchEnd, { passive: false })

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [])

  return (
    <LocationProvider>
      <Navbar />
      <main className="snap-container" id="main-scroll" ref={containerRef}>
        <div className="scroll-section">
          <Hero />
        </div>
        <div className="scroll-section">
          <Marquee />
        </div>
        <div className="scroll-section">
          <About />
        </div>
        <div className="scroll-section">
          <ServicesCards />
        </div>
        <div className="scroll-section">
          <ServicesTable />
        </div>
        <div className="scroll-section">
          <Gallery />
        </div>
        <div className="scroll-section">
          <Process />
        </div>
        <div className="scroll-section">
          <Booking />
        </div>
        <div className="scroll-section">
          <Location />
        </div>
        <div className="scroll-section">
          <FAQ />
        </div>
        <div className="scroll-section">
          <Footer />
        </div>
      </main>
      <WhatsAppButton />
    </LocationProvider>
  )
}
