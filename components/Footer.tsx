export default function Footer() {
  const WA_LINK =
    'https://wa.me/542364270445?text=Hola%20Aixa!%20Quisiera%20reservar%20un%20turno%20%F0%9F%92%85'

  return (
    <footer
      className="border-t px-5 pt-20 pb-10 md:px-[60px]"
      style={{ borderColor: 'rgba(201,168,212,0.2)' }}
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 pb-16 border-b" style={{ borderColor: 'rgba(201,168,212,0.2)' }}>
        {/* Brand column */}
        <div className="md:col-span-2">
          <a
            href="#"
            className="font-cormorant text-[1.4rem] tracking-[0.2em] uppercase text-site-white no-underline font-normal inline-block mb-5"
          >
            Beauté <span className="text-lavender">&</span> des Mains
          </a>
          <p className="text-[0.78rem] leading-[1.8] text-mid-gray max-w-xs mb-8">
            Nail studio artístico en Buenos Aires. Arte en cada detalle — porque tus manos merecen lo mejor.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-lavender text-site-black text-[0.62rem] tracking-[0.2em] uppercase px-7 py-3 font-medium hover:bg-lavender-deep transition-all duration-300 no-underline"
          >
            Reservar turno
          </a>
        </div>

        {/* Nav */}
        <div>
          <p className="text-[0.55rem] tracking-[0.3em] uppercase text-lavender mb-6">Navegación</p>
          <ul className="list-none flex flex-col gap-3">
            {[
              { href: '#about', label: 'Sobre mí' },
              { href: '#services', label: 'Servicios' },
              { href: '#gallery', label: 'Galería' },
              { href: '#booking', label: 'Reservas' },
              { href: '#faq', label: 'FAQ' },
            ].map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[0.75rem] text-mid-gray no-underline hover:text-site-white transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-[0.55rem] tracking-[0.3em] uppercase text-lavender mb-6">Contacto</p>
          <ul className="list-none flex flex-col gap-3">
            <li>
              <a
                href="https://www.instagram.com/beaute_des_mainss/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.75rem] text-mid-gray no-underline hover:text-site-white transition-colors"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.75rem] text-mid-gray no-underline hover:text-site-white transition-colors"
              >
                WhatsApp
              </a>
            </li>
            <li className="text-[0.75rem] text-mid-gray">
              Miguel Cané 3176, Gral. San Martín
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 pt-8">
        <p className="text-[0.65rem] text-mid-gray" style={{ letterSpacing: '0.05em' }}>
          © {new Date().getFullYear()} Beauté des Mains · Todos los derechos reservados
        </p>
        <p className="text-[0.6rem] text-mid-gray" style={{ opacity: 0.5 }}>
          Buenos Aires, Argentina
        </p>
      </div>
    </footer>
  )
}
