'use client'

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
  return (
    <LocationProvider>
      <Navbar />
      <main className="snap-container" id="main-scroll">
        <div className="snap-section">
          <Hero />
        </div>
        <div className="snap-section">
          <Marquee />
        </div>
        <div className="snap-section">
          <About />
        </div>
        <div className="snap-section-auto">
          <ServicesCards />
        </div>
        <div className="snap-section-auto">
          <ServicesTable />
        </div>
        <div className="snap-section-auto">
          <Gallery />
        </div>
        <div className="snap-section">
          <Process />
        </div>
        <div className="snap-section-auto">
          <Booking />
        </div>
        <div className="snap-section">
          <Location />
        </div>
        <div className="snap-section">
          <FAQ />
        </div>
        <div className="snap-section">
          <Footer />
        </div>
      </main>
      <WhatsAppButton />
    </LocationProvider>
  )
}
