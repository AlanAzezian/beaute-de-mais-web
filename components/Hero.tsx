'use client'

export default function Hero() {
  const WA_LINK =
    'https://wa.me/542364270445?text=Hola%20Aixa!%20Quisiera%20reservar%20un%20turno%20%F0%9F%92%85'

  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 relative overflow-hidden">
      {/* Left — Text */}
      <div className="flex flex-col justify-end px-5 pb-20 md:px-[60px] md:pb-[100px] pt-28 relative z-[2]">
        <p className="text-[0.65rem] tracking-[0.3em] uppercase text-lavender mb-7 opacity-0 animate-fade-up-delay-1">
          Nail Studio · Buenos Aires
        </p>
        <h1
          className="font-cormorant text-[clamp(3.5rem,6vw,7rem)] font-light leading-[0.95] mb-9 opacity-0 animate-fade-up-delay-2"
          style={{ animationFillMode: 'forwards' }}
        >
          Beauté
          <br />
          <em className="italic text-lavender">des</em>
          <br />
          Mains
        </h1>
        <p
          className="text-[0.85rem] leading-[1.8] text-mid-gray max-w-xs mb-14 opacity-0 animate-fade-up-delay-3"
          style={{ animationFillMode: 'forwards' }}
        >
          Arte en cada detalle. Diseños únicos que expresan tu personalidad — desde la
          elegancia clásica hasta el maximalismo creativo.
        </p>
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 opacity-0 animate-fade-up-delay-4"
          style={{ animationFillMode: 'forwards' }}
        >
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-lavender text-site-black text-[0.65rem] tracking-[0.25em] uppercase px-9 py-4 font-medium hover:bg-lavender-deep transition-all duration-300 no-underline inline-flex items-center justify-center w-full sm:w-auto"
          >
            Reservar turno
          </a>
          <a
            href="#gallery"
            className="text-[0.7rem] tracking-[0.2em] uppercase text-mid-gray no-underline hover:text-site-white transition-colors duration-300"
          >
            Ver galería →
          </a>
        </div>
        <div className="hidden md:flex items-center gap-4 text-[0.6rem] tracking-[0.25em] uppercase text-mid-gray mt-16 before:block before:w-10 before:h-px before:bg-mid-gray">
          Scroll
        </div>
      </div>

      {/* Right — Decorative */}
      <div className="relative overflow-hidden min-h-[40vh] md:min-h-0">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #1a0a1e 0%, #2d1040 40%, #0f0f1a 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, #0a0a0a 0%, transparent 40%)',
          }}
        />
        {/* Wireframe Logo */}
        <svg
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] md:w-[75%] opacity-0 animate-fade-in-delay pointer-events-none"
          style={{ animationFillMode: 'forwards' }}
          viewBox="0 0 400 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Base A - Left Thick Leg */}
          <polygon points="210,100 120,380 160,380 240,100" stroke="rgba(201,168,212,0.2)" strokeWidth="1.5" fill="rgba(201,168,212,0.02)" />
          {/* Base A - Right Thin Leg */}
          <polygon points="225,100 280,260 295,260 240,100" stroke="rgba(201,168,212,0.2)" strokeWidth="1.5" fill="none" />

          {/* Curve Text */}
          <path id="textCurve" d="M 60 330 C 40 220, 100 130, 180 80" fill="none" stroke="none" />
          <text fontSize="22" fill="rgba(201,168,212,0.25)" letterSpacing="3" fontFamily="Cormorant Garamond, serif" fontWeight="300">
            <textPath href="#textCurve" startOffset="0%">BEAUTÉ DES MAINS</textPath>
          </text>

          {/* Stem */}
          <path d="M 120 420 Q 150 280 270 260" stroke="rgba(201,168,212,0.25)" strokeWidth="2" fill="none" />

          {/* Stem Leaf */}
          <path d="M 152 355 Q 120 330 90 320 Q 120 340 148 375" stroke="rgba(201,168,212,0.25)" strokeWidth="1.5" fill="rgba(201,168,212,0.03)" />
          <path d="M 90 320 Q 130 350 150 365" stroke="rgba(201,168,212,0.15)" strokeWidth="1" fill="none" />

          {/* Flower Petals Base/Receptacle */}
          <path d="M 260 270 Q 250 275 245 260 Q 260 245 270 250" stroke="rgba(201,168,212,0.3)" strokeWidth="1.5" fill="rgba(201,168,212,0.05)" />
          <path d="M 260 270 Q 265 285 255 295" stroke="rgba(201,168,212,0.3)" strokeWidth="1.5" fill="none" />

          {/* Top Petal */}
          <path d="M 265 255 C 265 200, 310 190, 320 230 C 315 250, 280 260, 265 255" stroke="rgba(201,168,212,0.25)" strokeWidth="1.5" fill="rgba(201,168,212,0.02)" />
          {/* Right Petal */}
          <path d="M 270 255 C 310 240, 360 220, 350 270 C 340 300, 290 280, 270 255" stroke="rgba(201,168,212,0.25)" strokeWidth="1.5" fill="rgba(201,168,212,0.04)" />
          {/* Bottom Petal */}
          <path d="M 265 260 C 290 280, 340 330, 310 350 C 280 350, 250 290, 265 260" stroke="rgba(201,168,212,0.25)" strokeWidth="1.5" fill="rgba(201,168,212,0.03)" />

          {/* Petal details (lines inside) */}
          <path d="M 275 250 Q 295 220 310 215" stroke="rgba(201,168,212,0.15)" strokeWidth="1" fill="none" />
          <path d="M 280 260 Q 320 250 335 255" stroke="rgba(201,168,212,0.15)" strokeWidth="1" fill="none" />
          <path d="M 275 270 Q 300 310 310 320" stroke="rgba(201,168,212,0.15)" strokeWidth="1" fill="none" />

          {/* Extra floating aesthetics */}
          <circle cx="100" cy="180" r="1" fill="rgba(201,168,212,0.4)" />
          <circle cx="340" cy="150" r="1.5" fill="rgba(201,168,212,0.3)" />
          <circle cx="80" cy="400" r="2" fill="rgba(201,168,212,0.2)" />
          <circle cx="320" cy="420" r="1" fill="rgba(201,168,212,0.3)" />
        </svg>
      </div>
    </section>
  )
}
