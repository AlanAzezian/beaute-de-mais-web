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
        <svg
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] opacity-0 animate-fade-in-delay"
          style={{ animationFillMode: 'forwards' }}
          viewBox="0 0 400 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="200" cy="350" rx="80" ry="120" fill="none" stroke="rgba(201,168,212,0.15)" strokeWidth="1" />
          <ellipse cx="200" cy="350" rx="60" ry="100" fill="none" stroke="rgba(201,168,212,0.1)" strokeWidth="1" />
          <text x="200" y="200" textAnchor="middle" fontFamily="Cormorant Garamond" fontSize="180" fill="none" stroke="rgba(201,168,212,0.12)" strokeWidth="1" fontWeight="300">A</text>
          <circle cx="280" cy="160" r="40" fill="none" stroke="rgba(201,168,212,0.08)" strokeWidth="1" />
          <circle cx="280" cy="160" r="28" fill="rgba(155,111,174,0.05)" />
          <circle cx="280" cy="160" r="16" fill="rgba(201,168,212,0.08)" />
          <path d="M120 100 L124 108 L132 112 L124 116 L120 124 L116 116 L108 112 L116 108Z" fill="rgba(201,168,212,0.3)" />
          <path d="M320 300 L323 306 L329 309 L323 312 L320 318 L317 312 L311 309 L317 306Z" fill="rgba(201,168,212,0.2)" />
          <path d="M80 280 L82 284 L86 286 L82 288 L80 292 L78 288 L74 286 L78 284Z" fill="rgba(201,168,212,0.25)" />
          <path d="M160 240 Q160 180 200 160 Q240 180 240 240 L240 420 Q240 455 200 460 Q160 455 160 420Z" fill="none" stroke="rgba(201,168,212,0.12)" strokeWidth="1.5" />
          <path d="M170 380 Q200 375 230 380" stroke="rgba(201,168,212,0.2)" strokeWidth="1" />
          <path d="M165 390 Q200 384 235 390" stroke="rgba(201,168,212,0.15)" strokeWidth="1" />
        </svg>
      </div>
    </section>
  )
}
