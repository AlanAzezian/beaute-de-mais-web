export default function Marquee() {
  const items = [
    'Esmaltado Semipermanente',
    'Polygel',
    'Soft Gel',
    'Diseños Artísticos',
    'Kapping en Polygel',
    'Uñas Esculpidas',
  ]

  // Duplicamos los items para asegurarnos que un bloque sea lo suficientemente ancho para cubrir resoluciones altas sin cortarse
  const blockItems = [...items, ...items]

  const ItemList = () => (
    <>
      {blockItems.map((item, i) => (
        <span key={i} className="inline-flex items-center">
          <span
            className="font-cormorant text-[0.95rem] tracking-[0.25em] uppercase font-light text-site-white px-4"
            style={{ letterSpacing: '0.2em' }}
          >
            {item}
          </span>
          <span className="text-lavender text-[0.5rem] px-2">◆</span>
        </span>
      ))}
    </>
  )

  return (
    <div
      className="border-t border-b overflow-hidden py-5 flex relative w-full"
      style={{ borderColor: 'rgba(201,168,212,0.2)' }}
    >
      <div className="flex whitespace-nowrap animate-marquee shrink-0">
        <ItemList />
      </div>
      <div className="flex whitespace-nowrap animate-marquee shrink-0" aria-hidden="true">
        <ItemList />
      </div>
    </div>
  )
}
